from pathlib import Path
import json
root=Path('.');rules=json.loads((root/'src/design-system/design-rules.json').read_text())
text='# KeenMart 设计规则\n\n版本：v0.12；更新日期：2026-10-23。\n\n本规则汇总用户逐页审核时的明确要求；字号、间距和按钮尺寸同时标注原稿及现有规范的归纳依据。它是跨页面约束，不替代原稿的具体数据和尺寸。用户明确修正优先于原稿历史值；未获确认的设计选择不得自行发明。\n\n网页入口：基础规范 → 设计规则；每个相关组件的使用说明同步显示适用规则。规则源文件为 `src/design-system/design-rules.json`，页面与本文件由同一数据源维护。\n\n'
for r in rules:
 text+='## '+r['id']+' · '+r['title']+'\n\n**类别**：'+r['category']+'。**依据**：'+r['source']+'。\n\n'+r['rule']+'\n\n**适用组件**：'+', '.join(r['components'])+'。\n\n'
text+='## 实现与验证边界\n\nPage 统一头部背景；EmptyState 的 page 布局落实 1:2 留白；QuantityStepper 禁用最小值减号；Toast 默认 3000ms、无关闭按钮；其余规则由各组件接口和页面组合负责。构建通过或页面可渲染不等于视觉验收，不能自动把审核结论改为通过。\n'
(root/'DESIGN-RULES.md').write_text(text)
print('Wrote',len(rules),'design rules')
