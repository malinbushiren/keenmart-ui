# 页面与设计规则修正 v0.9

日期：2026-10-22。按本轮 14 张截图逐项修改，并将此前明确反馈汇入设计规则。

## 头部背景统一

Page 增加 chromeBackground；购物车状态栏和导航统一白色，账户渐变从状态栏延续到内容。

适用组件：Page, StatusBar, NavBar, CartHeader, AccountHeader。

页面：52:45707, 52:45491, 52:44962, 52:44486, 34:41971, 34:36924。

## 步进器、左滑删除、间距与地址选择

步进器最小值为 1，减号置灰禁用，移除步进器删除接口和旧删除状态。商品统一左滑删除并联动赠品；压缩不可用分组重复留白。地址入口打开抽屉，选择后更新地址。

适用组件：QuantityStepper, SwipeAction, CartItem, UnavailableProductsGroup, AddressPicker。

页面：52:45707, 52:45491, 52:44962, 52:44486, 28:19661。

## 活动条成为独立业务组件

GIFT/SALE 标签、标题、View 同排，说明独立行，按原稿分隔商品；不再使用通用绿色提示块。

适用组件：CartPromotionBar。

页面：52:44962, 52:44486。

## 整页空状态按 1:2 分配留白

提供 page/inline 布局；page 以剩余内容区计算插画和文字整体的上/下留白，实测比例 1:2。

适用组件：EmptyState。

页面：34:42652。

## 列表组标题与底部主操作

ListGroup 支持卡片内、卡片外两种标题。帮助页恢复原稿卡片内标题、完整图标、吸底 Get help with my orders。订单状态改为 400 字重，支持绿色和灰色。

适用组件：ListGroup, ActionBar, StatusLabel, SupportOrderCard。

页面：34:42505, 34:41773。

## 聊天气泡与操作位置

欢迎语和队列消息使用白色客服气泡；用户消息绿底白字；时间左右对齐，图片不带彩色外框；客服接入提示带头像。End service 恢复输入区上方，输入区右侧为绿色加号或关闭，附件区按原稿显示。

适用组件：ChatMessage, ChatComposer, ServiceQueue。

页面：34:42033, 34:42083, 34:42140, 34:42209, 34:42300, 34:42398。

## 地址搜索的输入框、结果和键盘

恢复 Select address/Riyadh、原始搜索词和六条结果；白底上的灰色搜索框可见，选择结果后更新位置并收起键盘。SearchBar 另提供白色描边、白色背景变体。

适用组件：MapAddressPicker, SearchBar, Keyboard。

页面：34:39364。

## 设计规则正式维护

基础规范新增可搜索的设计规则；相关组件说明显示适用规则，文档与网页来自同一 JSON。新增项目 AGENTS.md，要求后续 UI 工作先读规则。

适用组件：Page, QuantityStepper, Toast, ListGroup, CartPromotionBar, StatusLabel。

## 规则与维护

正式规则见 [DESIGN-RULES.md](DESIGN-RULES.md)，源文件为 `src/design-system/design-rules.json`。网页入口：基础规范 → 设计规则。组件页的“必须遵循的设计规则”显示与该组件有关的要求。规则标明用户要求与原稿尺寸归纳的依据。

项目 AGENTS.md 要求后续修改 UI 前先读取规则，并同时维护组件、使用示例和页面组合。`npm run catalog:build` 会同步规则文档、组件说明和接口。

## 检查

17 个相关页面和 14 个组件状态均可渲染、无失效图片。实测数量最小值、左滑删除及赠品联动、地址抽屉选择、Toast 自动消失、1:2 空状态留白、状态字重与颜色、地址搜索键盘切换。

构建及目录生成通过；记录见 component-refinement-v09-verification.json。视觉审核保留待确认，不自动修改浏览器的人工审核决定。
