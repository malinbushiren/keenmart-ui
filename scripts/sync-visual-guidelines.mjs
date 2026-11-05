import fs from 'node:fs';
import path from 'node:path';
const root = process.cwd();
const rules = JSON.parse(fs.readFileSync('src/design-system/design-rules.json', 'utf8'));
const tokens = JSON.parse(fs.readFileSync('src/design-system/tokens.json', 'utf8'));
const marker = '<!-- current-visual-policy:start -->';
const end = '<!-- current-visual-policy:end -->';
const policy = `${marker}\n## Current visual policy / 2026-11-05\n\n${rules.filter(r => ['neutral-colors', 'tag-priority', 'commerce-anatomy', 'list-separators', 'navigation-arrows'].includes(r.id)).map(r => `### ${r.title} (${r.id})\n\n${r.rule}`).join('\n\n')}\n\n商卡售价一律为 Black90 #1A1A1A，包含促销售价与展开规格，原价和单位仍使用中性灰。上述规则优先于本文件历史示例与 Figma 原稿；生成后检查所有背景、文字、边框、阴影、渐变，禁止引入蓝灰或默认 slate 冷灰。\n${end}\n\n`;
for (const dir of ['packages/keenmart-ui/guidelines', 'templates/page-starter/guidelines']) {
 for (const name of ['Guidelines.md', 'Foundations.md', 'Components.md', 'PagePatterns.md']) {
  const file = path.join(root, dir, name);
  let text = fs.readFileSync(file, 'utf8').replace(/<!-- current-visual-policy:start -->[\s\S]*?<!-- current-visual-policy:end -->\n*/g, '');
  if (name === 'Foundations.md') {
   for (const [key, token] of Object.entries(tokens.color.blue)) {
    text = text.replace(new RegExp(`^\\| color\\.blue\\.${key} \\|.*$`, 'm'), `| color.blue.${key} | color | ${JSON.stringify(token.$value)} | ${token.$description} |`);
   }
  }
  text = text.replace('支持 red/blue/orange/gray/green/gold、outline/solid。', '支持 red/orange/gold/green/gray、outline/solid；blue 仅兼容旧调用并渲染为中性灰。');
  text = text.replace(/<!-- detail-module-updates:start -->[\s\S]*?<!-- detail-module-updates:end -->\n*/g, '');
  if (name === 'Components.md') text += `\n<!-- detail-module-updates:start -->
## 商品详情组件更新 · 2026-11-05

- ProductCard：高度随内容自适应，标题不设最小高度，不为短标题补齐三行；无重量时不输出空占位。三种变体保留图片比例与基础字号。
- ProductCollection：相似商品与猜你喜欢均经 ProductList 复用 ProductCard。组件自带左右12px内距，父页面不要重复添加；375px页面下双列卡宽171px、图片165×165px、列间9px。
- ProductVariantPricing：商品详情主售价整数28px、小数20px、币种16px，价格字体保持独立的 --ds-price-font，售价黑色。规格价格和推荐商卡价格不随主售价放大。
- ProductSupplierPanel：新增 logo?: string，传入实际公司 Logo 图片地址；未提供时展示36×36px中性占位图，不能将占位图当作真实品牌。
- ListRow：新增 arrow?: 'right' | 'down' | 'up'（默认right）、expanded?: boolean、controls?: string。右侧箭头使用图标库12px图标，末行不绘制底部分割线。
- Collapse：保留 items: {id,title,content}[] 接口，内部复用 ListRow。收起箭头朝下，展开朝上；原生按钮支持键盘操作并提供 aria-expanded / aria-controls。末项无分割线，正文首尾段落无默认外边距，避免叠加 Card 的12px内距。
<!-- detail-module-updates:end -->
`;
  if (name === 'PagePatterns.md') text += `\n<!-- detail-module-updates:start -->
## 商品详情模块组合 · 2026-11-05

Page → ProductMediaGallery → ProductVariantPricing → ProductSummary → ProductFulfillment → ProductCollection（相似商品）→ ProductSupplierPanel → ProductAttributes → ProductServiceBenefits → Card + Collapse（补充说明）→ ProductCollection（猜你喜欢）。底部购买栏使用 ProductPurchaseBar，由 Page 管理固定底栏和安全区。

普通详情模块左右12px；ProductCollection自行提供12px，父容器不得重复叠加。推荐区域灰底白卡、双列瀑布流、商卡内容自适应高度。补充说明复用常规列表行并通过右侧上下箭头展开/收起，正文距卡片底部12px。不得在页面复制一套商卡或自绘文本箭头。
<!-- detail-module-updates:end -->
`;
  fs.writeFileSync(file, policy + text);
 }
}
const deliverable = path.resolve(root, '../keenmart-figma-make-files/guidelines');
fs.mkdirSync(deliverable, {recursive: true});
for (const name of ['Guidelines.md', 'Foundations.md', 'Components.md', 'PagePatterns.md']) fs.copyFileSync(path.join('packages/keenmart-ui/guidelines', name), path.join(deliverable, name));
console.log('Updated package/template guidelines and four product handoff files:', deliverable);
