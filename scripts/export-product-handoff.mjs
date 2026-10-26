import fs from 'node:fs/promises';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

// Export a dated, reproducible product handoff without modifying the review app.
const repo=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const out=path.resolve(process.argv[2]||path.join(repo,'..','keenmart-product-handoff-2026-10-26'));
if(out===repo||out.startsWith(repo+path.sep)) throw new Error('Export outside the repository to avoid recursive source archives.');
await fs.mkdir(out,{recursive:true});
const read=p=>fs.readFile(path.join(repo,p),'utf8');
const json=async p=>JSON.parse(await read(p));
const base='src/design-system/';
const [catalog,api,usage,rules,tokens,resolved,recipes,names]=await Promise.all(['component-catalog.json','component-api.json','component-usage.json','design-rules.json','tokens.json','resolved-tokens.json','page-recipes.json','component-names.json'].map(x=>json(base+x)));
const revision=execFileSync('git',['rev-parse','HEAD'],{cwd:repo,encoding:'utf8'}).trim();
const stamp=new Date().toISOString();
const write=async(p,s)=>{await fs.mkdir(path.dirname(path.join(out,p)),{recursive:true});await fs.writeFile(path.join(out,p),s,'utf8')};
const copy=async(a,b)=>{await fs.mkdir(path.dirname(path.join(out,b)),{recursive:true});await fs.copyFile(path.join(repo,a),path.join(out,b))};
const figma='https://www.figma.com/design/muIyl7AhHSieD13gdjfEw1/keen-mart-UIkits';
const common=`# KeenMart · AI 页面生成约束

快照日期：2026-10-26。源码基线：${revision.slice(0,7)}。范围：${catalog.length} 个候选组件、${catalog.reduce((n,c)=>n+c.states.length,0)} 个示例状态、${recipes.length} 个页面/状态入口、${new Set(recipes.map(r=>r.template)).size} 类页面组合、${rules.length} 条规则。

目标：生成符合 KeenMart 当前视觉和交互约束的移动页面。默认优先复用随附 React 组件，而非重新画一套相似控件。此文件可复制到 Figma Make 的 guidelines 文件，或作为 Claude 的项目说明。

## 依据与冲突处理

1. 产品本次明确需求与已确认的设计修正；2. 本文件的现行规则；3. 随附组件源码、tokens 和实际示例；4. 对应 Figma 原稿。旧截图的错误底色、历史 README 及零散旧版本记录不能覆盖现行规则。
缺少需求时列出关键缺口；数据、状态和文案保留产品提供值。示例商品、价格、手机号、订单号和币种不是业务默认值，不照搬进新页面。金额用传入币种，不能混用 SAR、$、¥。
组件目录中的 states 是演示键，不一定是组件 variant 的合法值。写代码前必须读组件 API 和对应实现/示例；不能把演示键当参数。

## 实现环境与范围

- React 19、TypeScript、普通 CSS；当前样式不是 Tailwind。入口为 src/design-system/index.ts；复杂数据类型另见 commerce.ts。不要引入第三方组件库默认皮肤覆盖现有样式。
- 保留 .km-system 的样式作用域与 variables.css。复用入口会带入组件 CSS，字体仍需在应用入口载入。迁移到其他项目时按源码的 import 链复制，保留 CSS 加载顺序。
- 原页面基准宽度 375px，多数视口高 812px；长稿高度表示内容，不应整页等比压缩。移动网页/原生壳是否显示模拟状态栏与手势条，由需求决定；保留时只能一份，使用 Page 的开关控制。
- public/assets、public/fonts 与 npm 字体依赖均有用途。资源路径是项目根路径；聊天里的 localhost 地址在别人的电脑不可直接访问。
- 旧 Screen 文件仅用于对照；新页面从公共组件组合，不能嵌整页截图或导入旧 Screen 冒充组件复用。
- 13 个组件为规范补充，其余有页面来源。目录总体仍是候选状态；109 个组合入口的视觉审核尚未全部完成。构建/示例交互通过不等于全部设计已批准。
- 订单、支付、地图、短信等为本地演示，没有真实业务服务。页面中的 onChange、onClick 必须有本地状态或明确接口；不伪装提交成功。

## 禁止恢复的公共组件

不要恢复 Price、ProductDetailHeader、SupportEntryGrid、MembershipBenefits、CategoryBrowser 或历史独立商卡入口。金额使用 ProductPriceGroup；商品卡使用 ProductCard；分类用 CategoryLayout；客服入口按现有卡片列表组合。中文名以 component-names.json 为准，英文标识用于代码。

## 必须执行的设计规则

${rules.map((r,i)=>`### ${i+1}. ${r.title} · ${r.id}\n\n${r.rule}\n\n适用：${r.components.map(c=>`${names[c]||c}（${c}）`).join('、')}。\n`).join('\n')}

## 生成后的交付要求

输出可运行页面、使用的组件与规则 ID、状态与交互清单、素材来源、验证结果、仍需产品确认的点。至少检查 375px 和一档较窄/较宽视口、长标题、空数据、加载/失败、底部遮挡及弹层关闭。只列本页相关状态。
React 工程需执行 npm run build；运行随附的对应专项检查。视觉检查须查看渲染截图与交互结果，不能仅凭代码声称一致。不得擅改审核结论为通过。
`;
await write('guidelines/Guidelines.md',common);
await write('01-设计规则.md',common);

let tokenRows=[];
function leaves(obj,p=[]){for(const [k,v] of Object.entries(obj)){if(v&&typeof v==='object'&&'$value' in v)tokenRows.push({path:[...p,k].join('.'),type:v.$type,value:v.$value,description:v.$description||''});else if(v&&typeof v==='object')leaves(v,[...p,k])}}
leaves(tokens);
await write('02-基础样式与变量.md',`# 基础样式与变量\n\n唯一数据源：data/tokens.json；计算值：data/resolved-tokens.json；可运行 CSS：source/src/design-system/variables.css。下表原样展开当前 token，不建立第二套语义颜色。具体组件的角色字号由源码及设计规则决定，不将通用 pageTitle 套到所有导航标题。\n\n字体：Poppins 正文/控件，价格字体和标识字体按 variables.css；保留本地 DdmcSans 字体及 npm 字体。字体缺失时需要核查尺寸变化。\n\n| Token 路径 | 类型 | 值 | 备注 |\n|---|---|---|---|\n${tokenRows.map(t=>`| ${t.path} | ${t.type||''} | ${JSON.stringify(t.value).replaceAll('|','\\|')} | ${t.description.replaceAll('|','\\|').replaceAll('\n',' ')} |`).join('\n')}\n\nCSS 变量及尺寸以源码为准，不能根据 token 路径猜变量名称。\n`);

await write('03-组件选择与接口.md',`# 组件选择与接口\n\n组件中文名用于沟通，英文名用于代码与检索。本文由当前 catalog、api、usage 生成。先找职责匹配的组件，再看 props；状态表属于演示，不是 variant 类型。完整示例见 source/src/design-system/ComponentExample.tsx。\n\n${catalog.map(c=>{
 const u=usage[c.name]||{},a=api[c.name]||{};
 return `## ${c.displayName} · ${c.name}\n\n${c.kind==='basic'?'基础组件':'业务组件'} / ${c.category} / ${c.origin==='supplemental'?'规范补充':'页面提取'}。\n\n${u.definition||c.rationale}\n\n使用场景：${u.when||'按本组件职责使用。'}\n\n演示状态：${c.states.join('、')}。\n\n相关规则：${rules.filter(r=>r.components.includes(c.name)).map(r=>r.id).join('、')||'遵循通用规则'}。\n\n来源：${c.sources.map(n=>`[${n}](${figma}?node-id=${n.replace(':','-')})`).join('、')||'规范补充，无独立原稿'}。\n\n实现：src/design-system/${a.file||'index.ts'}\n\n\x60\x60\x60ts\n${a.props||'先读取源码，不猜接口。'}\n\x60\x60\x60\n`;
}).join('\n')}`);

const groups=Map.groupBy?Map.groupBy(recipes,r=>r.template):recipes.reduce((m,r)=>m.set(r.template,[...(m.get(r.template)||[]),r]),new Map());
await write('04-页面结构与参考索引.md',`# 页面结构与参考索引\n\n使用方法：按业务找模板，在 data/page-recipes.json 选对应状态，参考 PageAssembly.tsx 的具体分支和 data 中的真实内容；不能从组件列表推断布局顺序。page-recipes 的 components 是依赖清单，不是排版顺序。\n\n## 所有页面的共同结构\n\nPage 统一背景、状态栏、顶部导航、滚动 main、固定 footer、安全区。正文分区只负责自身内容。弹层、键盘、规格选择面板按对应组件接口控制；ProductSpecPicker 已是完整抽屉，不再重复包 BottomSheet。业务表单字段留在框内；表单状态由页面传入。\n\n## 常见页面选择\n\n| 页面任务 | 推荐组合 | 易错点 |\n|---|---|---|\n| 首页/活动入口 | HomeHeader、Carousel、CampaignBanner、CategoryGrid、ProductCollection、TabBar | CategoryGrid 展示名为金刚区入口；feeds 灰底白卡 |\n| 分类浏览 | CategoryLayout + Page/TabBar | image-primary、text-primary 两个框架；不用首页金刚区网格代替分类结构 |\n| 商品浏览 | ProductCard / ProductList / ProductCollection | grid、full-width、category 三种卡；feeds layout=grid/row；单位、币种从数据来 |\n| 购物车 | CartHeader、CartGroup、CartItem、CartPromotionBar、CartSummaryBar | 购物车数量下限1，商卡可1→0；图片1:1；活动条按原稿 |\n| 订单详情 | OrderStageProgress、OrderArrival、OrderDeliveryDetails 等 | 不用普通 Steps 代替原稿阶段图标；四阶段连接线随 current 变化 |\n| 优惠券 | PromoCodeForm、VoucherList、CouponCard | 灰色承载底、白券卡；空状态插画与业务相符 |\n| 地址编辑 | MapAddressPicker/AddressForm | 框内字段名、表单与页面底色区分；保留选址/选择交互 |\n| 账户资料/关于 | Page、Card、ListRow 等 | 灰底白卡，不改成无来源的保存表单 |\n| 客服与聊天 | Card/ListRow/ListGroup、ChatMessage、ChatComposer、ServiceQueue | 不恢复客服入口网格；排队和欢迎信息用气泡承接 |\n\n## ${groups.size} 类组合与 ${recipes.length} 个页面/状态\n\n${[...groups].map(([t,rs])=>`### ${t}\n\n| 页面/状态 | 节点 | 状态 | 原稿尺寸 | Figma |\n|---|---|---|---|---|\n${rs.map(r=>`| ${r.name.replaceAll('|','/')} | ${r.nodeId} | ${r.state} | ${r.width}×${r.height} | [原稿](${r.source}) |`).join('\n')}\n`).join('\n')}\n所有入口的 visualReview 原值保留；不是已验收页面清单。运行 source 后可用 ?view=system&panel=composition&recipe=节点ID 查看组合对照；?assembly=节点ID 查看组合，?view=system&component=组件标识&variant=演示状态 查看组件。\n`);

const brief=`# 页面需求填写表\n\n复制一份，每次只填一个页面或一个明确流程。未确定项写“待确认”，不要留给 AI 发明业务。\n\n- 页面名称/目标：\n- 用户身份、入口、上一步/下一步：\n- 目标输出：React 页面 / Figma Make 可交互原型：\n- 平台：移动网页 / 带模拟系统栏的手机稿：\n- 参考 Figma 节点/截图（本次确切页面）：\n- 采用页面模板/节点（参考04）：\n- 顶部标题、导航操作和正文文案（逐项）：\n- 正文区域及顺序：\n- 商品卡形态：grid / full-width / category（如适用）：\n- 分类框架：image-primary / text-primary（如适用）：\n- 底部：无 / 单主操作 / 多操作 / 四栏tab / 五栏tab；tab 顺序、当前选中、badge 数值：\n- 数据：字段、实际值、币种、单位、素材文件：\n- 本页状态：默认 / 空 / 加载 / 错误 / 缺货 / 已选（逐项指定）：\n- 每个可点击操作：触发条件 → 状态变化 → 关闭/返回/反馈：\n- 接口：本地演示或真实接口、错误情况：\n- 本次允许新增的组件/规则及原因：\n- 本次验收点与待确认项：\n\n提交前确认：提供了真实内容或明确标注演示；明确主按钮和底部策略；带了准确参考节点；没有要求 AI 随意美化。\n`;
await write('05-页面需求填写表.md',brief);
await write('06-Claude生成提示词.md',`# Claude 使用提示词\n\n推荐在能访问源码的 Claude 开发环境使用完整包；普通聊天先使用精简规范并按页补素材/API，输出质量仍需视觉复核。不要一次把全部历史记录当上下文。\n\n## 首次加载\n\n\x60\x60\x60text\n你正在为 KeenMart 生成移动页面。请先读取本包01设计规则、02变量和05本次页面需求，再按页面类型读取03相关组件与04对应参考；工程中同时读取 CLAUDE.md、AGENTS.md、src/design-system/index.ts 及所用组件实现。\n遵循现行规则与 .km-system 样式作用域，复用已有组件和本地资源。不恢复退役组件，不引用旧 Screen 作为新页面，不引入另一套皮肤。states 只作示例键，props 按真实 API。\n先输出简短组件映射和关键缺失信息。需求足够就实现；缺少影响业务的关键项先问，不猜商品、币种、订单或布局。使用我填好的需求表，不扩展页面范围。\n实现后提供：文件改动、组件/规则ID、可运行入口、交互/状态覆盖、构建结果、375px截图及待确认项。没有截图或交互验证就说明未验证，不声称验收通过。\n\x60\x60\x60\n\n## 后续按页生成\n\n\x60\x60\x60text\n使用已加载的 KeenMart 规范实现下列页面，只更改本页和必要的复用层。\n[粘贴填写后的05需求表]\n优先从04找到参考组合。先核对背景承载关系、字体与底部安全区，再检查交互。业务数据只用上述提供值；任何新组件都说明为什么现有组件不能满足。\n\x60\x60\x60\n\n## 只修正一项偏差\n\n\x60\x60\x60text\n本次只修正：[具体现象+所在页面/组件+参考截图或节点]。\n依据规则：[规则ID]。保留文案、数据、其他区域及现有交互。若偏差来自共享组件，修正共享组件并检查本页和关联使用；不要单页覆盖隐藏问题。输出前后差异与验证证据。\n\x60\x60\x60\n`);
await write('07-Figma-Make接入说明.md',`# Figma Make 接入说明\n\n本交付是本地规范与 React 参考工程，尚未发布 npm 组件包、Make kit 或 Figma 原生组件库，也没有替产品账号完成 Make 接入。不能把本地 ZIP 或私有 GitHub 地址当成已可安装的 npm 包。\n\n## 文档先行的用法\n\n1. 在你的 Figma Make 文件中打开代码区，找到 guidelines 文件夹，把本包 guidelines/Guidelines.md 内容写入其中的 guidelines 文件。项目已有指南时合并，不覆盖项目业务要求。\n2. 附加本次页面的准确 Figma frame/截图及填写后的05需求表。按需附上02、03中相关组件段落和素材；不要只附整个大画布或旧截图。\n3. 粘贴下面的提示词，让 Make 使用指南进行生成。生成后按08检查，偏差用明确规则ID逐项修。\n4. 此方式传达样式约束；若尚未把源码/资产接入 Make，不能宣称它复用了真实 React 组件。缺少组件或图片时，先明确列出缺失，不让 Make 猜造素材。\n\n## 稳定复用代码的后续接入\n\n若需要多名产品长期复用，请由有权限的库维护人把组件、CSS、字体/资产路径整理成可供 Make 安装的设计系统包，再通过团队 Make kit 接入包、库样式和指南；安装后验证四/五栏导航、三种商卡、分类两框架和复杂弹层。公开/私有 registry 的支持与团队权限须以 Make 当前界面为准。本次没有发布任何包，也没有公开现有资产。\n\n## 生成提示词\n\n\x60\x60\x60text\n请先读取 guidelines 中的 KeenMart 规则。按本次附加的 Figma frame 与下列需求生成移动页面：[粘贴05需求表]。\n不要自行美化或替换结构。使用现有 tokens 的颜色、字体、字号、间距、圆角；灰底白卡、白底灰输入框，底部安全区只出现一次。tab 按需求四栏或五栏，保留 badge 规则。商卡按 grid/full-width/category；分类页按指定框架。\n若工程已经接入 KeenMart 真实组件，则先读取 API 并使用组件；未接入就列出所缺源码/素材并说明当前是视觉重建，不能伪称组件复用。\n实现全部本地状态与按钮行为；不伪造支付或订单成功。完成后逐项对照08验收清单，报告未完成或未验证项。\n\x60\x60\x60\n\n## 官方说明（核对日期2026-10-26）\n\n- [Add guidelines to Figma Make](https://help.figma.com/hc/en-us/articles/33665861260823-Add-guidelines-to-Figma-Make)\n- [Get started with Make kits](https://help.figma.com/hc/en-us/articles/39241689698839-Get-started-with-Make-kits)\n- [Bring your design system package to a Make kit](https://help.figma.com/hc/en-us/articles/43602872461079-Bring-your-design-system-package-to-a-Make-kit)\n\n界面/权限可能变化。Figma Design 库的指南与 Make 指南不能未经确认视为自动同步。\n`);
await write('08-产品验收清单.md',`# 生成页面的产品验收清单\n\n每次填结果为：通过 / 不通过 / 未验证 / 不适用。必须带页面、状态、截图或操作证据；不是要求所有页面包含所有功能。\n\n| 检查点 | 要求 | 结果/证据 |\n|---|---|---|\n| 结构/内容 | 区域顺序、文案、状态、素材与需求一致；无编造业务 | 待填 |\n| 背景 | 白卡不融白底、灰输入不融灰底；券/feeds/Profile/About 灰底白卡 | 待填 |\n| 顶底栏 | 状态栏承接头部；固定操作不遮内容；安全区仅一次 | 待填 |\n| 字体/间距 | 使用现行tokens与角色字号；无重复padding或额外大空白 | 待填 |\n| 导航 | 四/五项正确、选中图标正确；0/1/两位/99+角标 | 待填 |\n| 商卡/分类 | 三种卡选型正确、分类框架正确；促销/供应商/规格/单位符合需求 | 待填 |\n| 数量逻辑 | 商卡1可减0，购物车1禁减；上限、缺货行为正确 | 待填 |\n| 图片 | 资源加载、比例和裁切正确；购物车图占位1:1 | 待填 |\n| 空/错/加载 | 对应业务插画、整页空白比例1:2、重试或反馈明确 | 待填 |\n| 表单 | 框内字段名、可见焦点、错误/禁用态；状态受控 | 待填 |\n| 弹层 | 打开/关闭/选择正常，无重复抽屉和安全区 | 待填 |\n| 订单进度 | 正确阶段图标和部分连接线，不叠加圆底 | 待填 |\n| 交互 | 每个可见可点入口有指定行为；Toast默认3秒无关闭钮 | 待填 |\n| 窄屏/长内容 | 至少375px与一档其他宽度；长标题不挤压价格/控件 | 待填 |\n| 运行 | 构建通过、无控制台错误、无图片丢失；与视觉审核分开 | 待填 |\n| 边界 | 无伪造接口成功、无宣称全部候选组件已设计验收 | 待填 |\n\n问题记录格式：页面/状态 → 当前现象 → 预期 → 规则ID/参考节点 → 截图 → 修改及复核。\n`);

await write('09-版本与适用边界.md',`# 版本与适用边界\n\n导出时间：${stamp}；源码基线：${revision}。以本包当前规则和数据为准，旧工程历史文档不用于覆盖本包。\n\n- 目录：${catalog.length} 个候选组件，${catalog.filter(c=>c.kind==='basic').length} 基础 / ${catalog.filter(c=>c.kind==='business').length} 业务；${catalog.filter(c=>c.origin==='supplemental').length} 个规范补充。\n- ${recipes.length} 个页面/状态、${groups.size} 类组合；原有 visualReview 值未改变。仍有较早标注待视觉验收，不交付“全部已验收”的结论。\n- 最近更新：四/五栏底部导航，订单阶段进度；金刚区入口命名；移除客服入口网格。此前新商卡、规格抽屉、供应商比价和背景规则已纳入。\n- 无真实短信、支付、订单、地图、客服服务；不得将演示作为生产接口交付。\n- 原始素材/字体保留在完整工程中，按现有项目范围用于生成；未发布到公共 npm/CDN。\n- 本包不包含 node_modules、.git、凭据、缓存和历史验收截图。首次运行需要安装依赖；这不是一个可双击运行的离线HTML应用。\n- AI文字规则可降低偏差，真实组件源码复用更稳定；任何新生成页仍须产品/设计逐页验收。\n`);

for(const f of ['component-catalog.json','component-api.json','component-usage.json','component-names.json','design-rules.json','tokens.json','resolved-tokens.json','page-recipes.json','page-navigation.json']) await copy(base+f,'data/'+f);
await write('data/token-table.json',JSON.stringify(tokenRows,null,2)+'\n');
await write('data/ai-context.json',JSON.stringify({exportedAt:stamp,sourceCommit:revision,counts:{components:catalog.length,states:catalog.reduce((n,c)=>n+c.states.length,0),pageStates:recipes.length,pageTemplates:groups.size,rules:rules.length},rulePrecedence:['explicit-current-product-requirements','confirmed-design-rules','current-code-and-tokens','historical-figma'],retiredComponents:['Price','ProductDetailHeader','SupportEntryGrid','MembershipBenefits','CategoryBrowser'],reviewStatus:'candidate; visual approval remains per-page',components:catalog.map(c=>({id:c.name,name:c.displayName,kind:c.kind,category:c.category,states:c.states,props:api[c.name]?.props,ruleIds:rules.filter(r=>r.components.includes(c.name)).map(r=>r.id)}))},null,2)+'\n');

const example=`import React,{useState} from 'react';
import {Page,NavBar,TabBar,ProductCollection,Toast} from './design-system';
import type {CommerceProduct} from './design-system/commerce';
import {navigationFive} from './design-system/demo-data';

// Explicit DEMO content. Replace every business value with the product brief.
const demo:CommerceProduct[]=[{id:'demo-1',name:'DEMO · Fresh broccoli',image:'/assets/5a9f6.png',weight:'500–700g',amount:'38.76',currency:'SAR',imageFit:'cover'}];
export default function HandoffExample(){
 const [counts,setCounts]=useState<Record<string,number>>({});
 const [tab,setTab]=useState('home');
 const [notice,setNotice]=useState(false);
 const [message,setMessage]=useState('');
 const products=demo.map(p=>({...p,quantity:counts[p.id]||0,action:(counts[p.id]?'stepper':'add') as 'stepper'|'add'}));
 return <Page background="gray" header={<NavBar title="Demo products"/>} footer={<TabBar options={navigationFive.map(o=>({...o,badge:o.value==='cart'?Object.values(counts).reduce((a,b)=>a+b,0):undefined}))} value={tab} onChange={v=>{setTab(v);setMessage('Demo navigation: '+v);setNotice(true)}}/>}>
  <ProductCollection products={products} title="You might also like" layout="grid" onAdd={id=>setCounts(c=>({...c,[id]:(c[id]||0)+1}))} onQuantity={(id,v)=>setCounts(c=>({...c,[id]:v}))}/>
  <Toast open={notice} message={message} onClose={()=>setNotice(false)}/>
 </Page>;
}
`;
await write('examples/HandoffExample.tsx',example);
await write('examples/handoff-main.tsx',`import React from 'react';\nimport {createRoot} from 'react-dom/client';\nimport '@fontsource/poppins/400.css';\nimport '@fontsource/poppins/500.css';\nimport '@fontsource/poppins/600.css';\nimport '@fontsource/poppins/700.css';\nimport '@fontsource/leckerli-one/400.css';\nimport './tokens.css';\nimport HandoffExample from './HandoffExample';\nimport './handoff-shell.css';\ncreateRoot(document.getElementById('root')!).render(<HandoffExample/>);\n`);
await write('examples/handoff-shell.css',`*{box-sizing:border-box}body{margin:0;background:#e9ece9}#root{max-width:375px;margin:0 auto}.km-system{font-family:var(--ds-font);color:var(--ds-color-dark-black90)}\n`);

const sourceFiles=execFileSync('git',['ls-files','-z'],{cwd:repo,encoding:'utf8'}).split('\0').filter(Boolean).filter(f=>f.startsWith('src/')||f.startsWith('public/')||f.startsWith('scripts/')||['package.json','package-lock.json','tsconfig.json','index.html','AGENTS.md','DESIGN-RULES.md','COMPONENT-API.md','COMPONENT-SYSTEM.md','COMPONENT-USAGE.md','.gitignore'].includes(f));
for(const f of sourceFiles)await copy(f,'source/'+f);
// The export script itself may not have been committed when first run.
await copy('scripts/export-product-handoff.mjs','source/scripts/export-product-handoff.mjs');
for(const f of ['HandoffExample.tsx','handoff-main.tsx','handoff-shell.css'])await fs.copyFile(path.join(out,'examples',f),path.join(out,'source/src',f));
await write('source/handoff.html','<!doctype html><html lang="zh-CN"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>KeenMart · Product handoff example</title></head><body><div id="root"></div><script type="module" src="/src/handoff-main.tsx"></script></body></html>\n');
await write('source/CLAUDE.md',common+'\n先查看 src/HandoffExample.tsx 作为最小复用示例；src/handoff-main.tsx 是独立入口，运行后打开 /handoff.html。不要用示例业务数据替代本次需求。\n');
await write('source/README.md',`# KeenMart 产品生成参考工程\n\n基线 ${revision.slice(0,7)}。这是完整本地源码、字体、素材与独立复用示例，非已发布npm包。先阅读上级00开始使用.html与文档；工程内CLAUDE.md包含现行生成约束。\n\n推荐 Node.js 24。进入本目录：\n\n\x60\x60\x60bash\nnpm ci\nnpm run dev -- --port 5173\n\x60\x60\x60\n\n打开 http://127.0.0.1:5173/handoff.html 查看独立页面；http://127.0.0.1:5173/?view=system 查看组件库。端口冲突时用终端实际地址。其他人的本地地址需要他们先启动工程。\n\n验证：npm run build；node scripts/check-navigation-review.mjs；node scripts/check-commerce-review.mjs。catalog:build 还需要 Python3，用于重生成目录与文档，普通查看不需要运行。\n\n生成新页面优先修改/复制 src/HandoffExample.tsx。完整字体、资源与组件导入链必须保留，样式作用域为.km-system。默认 npm run build 构建原有审阅应用；若要单独发布示例页，先将应用入口切换为 handoff-main.tsx，再构建并验收。\n`);

await write('00-开始使用.md',`# KeenMart · 产品 AI 页面生成交付包\n\n目标：让产品带着明确需求，在 Claude 或 Figma Make 中生成符合当前 KeenMart 视觉及交互规则的页面。\n\n## 只做这三步\n\n1. 先阅读01规则，复制并填写05需求表；从04挑一个最接近的参考页面。\n2. Claude：使用06提示词；能读工程时给完整 source，并加载 CLAUDE.md。Figma Make：按07把 guidelines/Guidelines.md 加入 Make 指南，附准确frame和需求表。\n3. 生成后按08逐项验收，不满意就给规则ID和截图修正。不要只说“美化一下”。\n\n## 文件怎么给\n\n| 文件/目录 | 用途 |\n|---|---|\n| 01-设计规则.md / guidelines/Guidelines.md | 同一份现行37条约束，任选一份加载，不必重复上传 |\n| 02-基础样式与变量.md | 当前tokens、字体和尺寸依据 |\n| 03-组件选择与接口.md | 139组件的职责、演示状态、真实props和出处；按页选读 |\n| 04-页面结构与参考索引.md | 47类结构、109入口与Figma链接 |\n| 05-页面需求填写表.md | 产品每次提供真实内容和行为 |\n| 06-Claude生成提示词.md | 首次加载、生成、局部修正模板 |\n| 07-Figma-Make接入说明.md | guidelines与源码复用的不同接入方式 |\n| 08-产品验收清单.md | 按页核对和记录偏差 |\n| 09-版本与适用边界.md | 版本、候选状态、未接真实业务的边界 |\n| data/ | tokens、规则、组件API和页面结构JSON；适合AI精确检索 |\n| examples/ | 最小复用示例；相对导入按复制到source/src后设计 |\n| source/（仅完整版） | 可运行React工程、字体、全部本地素材，含独立/handoff.html示例 |\n| manifest.json / CHECKSUMS.sha256 | 导出清单和文件校验 |\n\n精简规范ZIP适合先给产品传阅；完整工程ZIP适合交给能读源码的Claude环境或库维护人。ZIP不是Figma Make已安装的Make kit，也不能保证任意聊天界面接受所有压缩包；不支持附件时解压后按页粘贴需要的MD/JSON和素材。\n\n本包不会自动让另一台电脑的localhost可访问；需运行source或使用团队部署地址。现有页面仍有待视觉审核，详见09。\n`);

const docs=(await fs.readdir(out)).filter(f=>f.endsWith('.md')).sort();
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
await write('00-开始使用.html',`<!doctype html><html lang="zh-CN"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>KeenMart · 产品生成交付包</title><style>body{margin:0;background:#f5f6f5;color:#202520;font:16px/1.7 system-ui,sans-serif}main{max-width:920px;margin:40px auto;padding:32px;background:white;border-radius:20px}h1{line-height:1.3}a{color:#087c35}nav{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:12px}nav a{padding:14px;border:1px solid #dce4dc;border-radius:12px;text-decoration:none}pre{white-space:pre-wrap;font:14px/1.7 system-ui}small{color:#687268}</style><main><small>KEENMART · 2026-10-26 · ${revision.slice(0,7)}</small><h1>给产品的 AI 页面生成交付包</h1><p>填写需求 → 加载规范与参考 → 生成页面 → 按清单验收。</p><nav>${docs.map(f=>`<a href="${encodeURI(f)}">${esc(f.replace('.md',''))}</a>`).join('')}</nav><h2>先从这里开始</h2><pre>${esc(await fs.readFile(path.join(out,'00-开始使用.md'),'utf8'))}</pre><p>Markdown 文件可用文本编辑器打开或作为 AI 上下文。完整版的 source/ 含可运行工程；精简版不含工程。</p></main></html>`);

// File manifest and checksums are generated only after all artifacts exist.
const walk=async(dir,prefix='')=>{let list=[];for(const e of await fs.readdir(dir,{withFileTypes:true})){const p=path.posix.join(prefix,e.name);if(e.isDirectory())list.push(...await walk(path.join(dir,e.name),p));else list.push(p)}return list.sort()};
const {createHash}=await import('node:crypto');
const files=(await walk(out)).filter(f=>!f.endsWith('.zip')&&!['manifest.json','CHECKSUMS.sha256'].includes(f));
const entries=await Promise.all(files.map(async f=>{const b=await fs.readFile(path.join(out,f));return {path:f,bytes:b.length,sha256:createHash('sha256').update(b).digest('hex')}}));
await write('manifest.json',JSON.stringify({exportedAt:stamp,sourceCommit:revision,files:entries},null,2)+'\n');
await write('CHECKSUMS.sha256',entries.map(e=>e.sha256+'  '+e.path).join('\n')+'\n');
const packScript=`import pathlib,zipfile,sys,json
p=pathlib.Path(sys.argv[1])
for kind in ['文档规范','完整工程']:
 with zipfile.ZipFile(p/('KeenMart-'+kind+'-2026-10-26.zip'),'w',zipfile.ZIP_DEFLATED,6) as z:
  for f in sorted(p.rglob('*')):
   if not f.is_file() or f.suffix=='.zip':continue
   r=f.relative_to(p)
   if kind=='文档规范' and r.parts[0]=='source':continue
   target=str(pathlib.Path('KeenMart-产品生成交付包')/r)
   if kind=='文档规范' and f.name in ['manifest.json','CHECKSUMS.sha256']:
    m=json.loads((p/'manifest.json').read_text())
    m['files']=[e for e in m['files'] if not e['path'].startswith('source/')]
    b=json.dumps(m,ensure_ascii=False,indent=2)+'\\n' if f.name=='manifest.json' else ''.join(e['sha256']+'  '+e['path']+'\\n' for e in m['files'])
    z.writestr(target,b)
   else:z.write(f,target)
`;
execFileSync('python3',['-c',packScript,out],{stdio:'inherit'});
console.log(JSON.stringify({output:out,files:entries.length,sourceCommit:revision,archives:await Promise.all(['文档规范','完整工程'].map(async k=>({name:'KeenMart-'+k+'-2026-10-26.zip',bytes:(await fs.stat(path.join(out,'KeenMart-'+k+'-2026-10-26.zip'))).size})))},null,2));
