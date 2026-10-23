# 本轮组件修正记录

范围：本轮截图提到的组件、PhoneField 分类、评分图标与空状态；原页面保留作对照。

- SwipeAction 默认隐藏操作，左滑展开；右滑或 Escape 收起。验证了真实左滑和删除回调。
- Tag 红色分为营销 marketing 和警告 warning；ChoiceChip 新增白底、灰底和各自选中状态。
- Rating 接入 Figma 107:12970 和 107:12986 的彩色激活、灰色未激活素材。
- EmptyState 从 Figma 109:13693 补充 18 个插画场景，使用 130×130 插画、12px 文案间距及 24px 操作间距。
- ListRow 左右各 15px 内距；BottomSheet 标题固定 18/23px。
- ActionBar 上下左右 12px 内距，不包含 HomeIndicator；支持等宽或按内容宽度。
- PhoneField 移入业务组件；Space 从公开组件目录、接口及示例移除，归入基础间距规范。
- Divider 标签无背景；Card 和 Section 补充区别、用法及可视示例。
- Badge 单数字为 16px 圆形，多数字横向延展，定位图标右上角。
- HomeIndicator 背景透明；Page 固定操作区与手势区衔接同色。
- NavBar 新增仅标题且无操作的状态。
- Tabs 将“溢出”改为“横向滚动”，真实分类名称不再相互挤压。
- SegmentedControl 选中胶囊包住文字并保留内距。
- SearchBar 在白底预览上显示灰色输入框；FormField 示例增加 placeholder。

资源下载到 public/assets，无临时 Figma 运行时地址。用法见 COMPONENT-USAGE.md，检查记录见 component-refinement-v07-verification.json。
