# UI 实现约束

- 修改或组合 UI 前，先读 [DESIGN-RULES.md](DESIGN-RULES.md)。用户明确提出的新规则优先于原稿历史值。
- 规则源文件为 `src/design-system/design-rules.json`。新增或修正规则时，同步修改组件、使用示例和对应页面；不要只给单页追加补丁。
- 基础规范里的设计规则、组件使用说明、DESIGN-RULES.md 使用同一份规则数据。运行 `npm run catalog:build` 更新目录、接口和文档。
- 页面使用原稿文案、素材和业务状态。不能用无关示例数据替代，也不能把旧 Screen 或整页截图嵌入新组合来隐藏差异。
- Page 统一状态栏、导航、内容、固定底栏和手势区的背景关系；间距按组件边界管理，避免重复叠加。
- 实际交互必须实现：地址选择打开抽屉，数量为 1 时禁用减号，删除通过左滑，Toast 默认 3 秒消失且无关闭按钮。
- 修正后检查相关组件状态及页面显示，运行 `npm run build`。构建成功不等于视觉验收，不自动把审核结论标为通过。
- 优惠券列表和推荐 feeds 使用组件自带的灰色承载层与白卡；Profile、About 使用灰底白卡。单操作结果页用通栏按钮，多条失败原因放在卡片中。
- 商卡统一使用 ProductCard 的 grid / full-width / category 三种变体，分类框架使用 CategoryLayout；不得恢复旧商卡入口、旧基础 ProductCard 或 CategoryBrowser。新增页面先核对 commerce-anatomy、category-framework 规则。
- Figma 验收 137:52176：取消原因使用原稿底部抽屉组合；ReviewEditor 不包含 Submit；灰内容不放灰背景；新控件风格沿用基础规范。按验收编号记录修改，不扩大未标注区域。

- 组件展示名称统一中文为主、英文为辅助。`src/design-system/component-names.json` 为中文名称源；新增组件必须补齐唯一中文名。代码标识、导出、URL 与接口仍使用原英文名称，搜索同时支持中英文。
