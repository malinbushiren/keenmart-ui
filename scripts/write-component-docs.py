# coding: utf-8
from pathlib import Path
import json,collections
p=Path('.');root=p/'src/design-system';c=json.load(open(root/'component-catalog.json'));r=json.load(open(root/'page-recipes.json'));api=json.load(open(root/'component-api.json'))
basic=[x for x in c if x['kind']=='basic'];biz=[x for x in c if x['kind']=='business'];added=[x for x in c if x['origin']=='supplemental'];states=sum(len(x['states']) for x in c)
s=f'''# KeenMart 组件体系 · v0.12

本轮范围：现有 {len(r)} 个页面／状态；{len(basic)} 个基础组件、{len(biz)} 个业务组件，共 {len(c)} 个可运行候选组件。{len(added)} 个组件属于规范补充，其他组件从原页面中的结构或交互提取。共有 {states} 个状态检查项。

组件库、组合页面与原页面分开维护：组合页不导入旧 Screen 模块；原页面继续保留作对照。{len(r)} 个入口都有公共组件拼装方案，覆盖 {len(set(x['template'] for x in r))} 类页面组合。运行检查与视觉验收分开记录；visualReview=pending 不会因加载成功而自动标成通过。

## 查看

打开 `http://127.0.0.1:5173/?view=system`，进入“基础组件”“业务组件”“页面覆盖”或“页面组合”。每个组件可切换状态、展开状态矩阵、查看接口、依赖和来源。新版 ProductCard 提供三种定制结构和多规格、缺货及数量状态，CategoryLayout 提供两个分类框架。旧 26 个商卡入口下架，历史文件位于 work/retired-product-cards/。

完整定义和使用场景见 [COMPONENT-USAGE.md](./COMPONENT-USAGE.md)，交互示例同时在组件预览中显示。

## 分类依据

基础组件负责系统外壳、布局、导航、输入、筛选、展示、操作和反馈；业务组件负责商品、活动、购物车、地址配送、支付订单、评价、优惠账户、客服和授权。不会把按钮的不同颜色算成多个组件，也不会把整张旧页面当成一个业务组件。

参考的是成熟移动组件库的能力与状态组织，不引入其默认视觉样式或整套运行依赖：
- Ant Design Mobile 官方组件入口：https://github.com/ant-design/ant-design-mobile/blob/master/src/index.ts
- Vant 官方移动组件库：https://github.com/youzan/vant

## 单套颜色规范

全部公共组件直接引用 tokens.json 的基础颜色。例如主文字 `--ds-color-dark-black90`，加购 `--ds-color-green-bright`，选中备注 `--ds-color-green-tint09`。语义用途只写在色值备注中，不建立另一套语义颜色别名。营销 banner 内的插画色属于营销资产配置，不改变交互色。

## 规范补充项

'''
s+='、'.join(x['displayName']+'（'+x['name']+'）' for x in added)+'。\n\n这些组件或交互状态未在原页面中单独展示，按现有颜色、字体、间距与控件尺寸补齐。属于公共能力，不是假定已出现过的原稿组件。\n\n'
for title,rows in [('基础组件',basic),('业务组件',biz)]:
 s+='## '+title+'\n\n| 组件 | 分组 | 来源 | 状态 |\n|---|---|---|---|\n'
 for x in rows:s+='| '+x['displayName']+'（'+x['name']+'） | '+x['category']+' | '+('规范补充' if x['origin']=='supplemental' else '页面提取')+' | '+', '.join(x['states'])+' |\n'
s+='''
## 页面覆盖与组合

page-recipes.json 为每一条原页面记录组合类型、初始状态、尺寸、来源和组件集合。组件集合由 PageAssembly.tsx 的 JSX 与有限辅助函数提取，包含可由操作触发的弹层；依赖链由 component-catalog.json 展开。覆盖表提供原页面与组件组合两个入口。

页面只组合公共组件，并传入数据、状态和事件；原页面的 26 个商卡示例不是 26 个新组件。订单商品行复用 CartItem 的 readOnly 变体，赠品使用 gift 数据；促销组合和失效商品组单独建模。地址自定义标签、重名弹窗、银行卡逐项错误均为已有组件的参数与状态。

图片区分两种职责：商品图、营销图、头像、地图底图通过资产数据或受限插槽传入；布局与交互由组件负责。地图检索、相机权限、短信、上传、在线支付和客服接口由服务接入，不在组件展示页发起真实业务请求。所有示例均使用本地状态和已有素材。

## 验收标准

1. 每个候选组件都有实现、类型接口、状态、来源／补充说明以及可运行示例。
2. 每条原页面都有组合入口，所有引用的组件存在，组合入口不导入 Screen 页面。
3. 对交互作行为检查：禁用、键盘、选择、数量边界、规格必选、表单错误、上传移除、弹窗滚动与焦点、评价和消息回传。
4. 单独进行逐页视觉对照；加载成功与组件集合覆盖不等于布局、素材裁切和字号已逐像素通过。

## 当前文件

- component-catalog.json：唯一组件目录，来源、状态与依赖。
- component-api.json：从实际 TypeScript 声明提取的接口，不另维护一套示意 API。
- page-recipes.json：{len(r)} 条组合记录。
- foundations.tsx / components.tsx：基础组件与首批公共实现。
- business.tsx：领域组件。
- ComponentExample.tsx：组件状态展示。
- PageAssembly.tsx：公共组件组合页面。
- component-coverage-verification.json：组件状态与组合运行审计。
- component-interaction-verification.json：行为检查。

图标库沿用已导入的 846 个原始变体；其余 24 个为既有导出超时缺口，独立记录在 icon-import-status.json，不计为本轮新增组件能力。
'''
(p/'COMPONENT-SYSTEM.md').write_text(s)
text='# 组件接口参考\n\n接口从实际 TypeScript 源码提取。具体状态和来源见组件目录；每个组件均在 `.km-system` 下使用。\n\n'
for x in c:text+='## '+x['displayName']+'（'+x['name']+'）\n\n'+('业务组件' if x['kind']=='business' else '基础组件')+' · '+x['category']+'\n\n```ts\n'+api[x['name']]['props']+'\n```\n\n'
(p/'COMPONENT-API.md').write_text(text)
print('Wrote component system and API docs')
