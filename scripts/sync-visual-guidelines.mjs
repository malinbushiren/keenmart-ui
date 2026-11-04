import fs from 'node:fs';
import path from 'node:path';
const root = process.cwd();
const rules = JSON.parse(fs.readFileSync('src/design-system/design-rules.json', 'utf8'));
const tokens = JSON.parse(fs.readFileSync('src/design-system/tokens.json', 'utf8'));
const marker = '<!-- current-visual-policy:start -->';
const end = '<!-- current-visual-policy:end -->';
const policy = `${marker}\n## Current visual policy / 2026-11-04\n\n${rules.filter(r => ['neutral-colors', 'tag-priority'].includes(r.id)).map(r => `### ${r.title} (${r.id})\n\n${r.rule}`).join('\n\n')}\n\n商卡售价一律为 Black90 #1A1A1A，包含促销售价与展开规格，原价和单位仍使用中性灰。上述规则优先于本文件历史示例与 Figma 原稿；生成后检查所有背景、文字、边框、阴影、渐变，禁止引入蓝灰或默认 slate 冷灰。\n${end}\n\n`;
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
  fs.writeFileSync(file, policy + text);
 }
}
const deliverable = path.resolve(root, '../keenmart-figma-make-files/guidelines');
fs.mkdirSync(deliverable, {recursive: true});
for (const name of ['Guidelines.md', 'Foundations.md', 'Components.md', 'PagePatterns.md']) fs.copyFileSync(path.join('packages/keenmart-ui/guidelines', name), path.join(deliverable, name));
console.log('Updated package/template guidelines and four product handoff files:', deliverable);
