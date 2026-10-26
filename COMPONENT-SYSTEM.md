# KeenMart 组件体系 · v0.12

本轮范围：现有 109 个页面／状态；65 个基础组件、74 个业务组件，共 139 个可运行候选组件。13 个组件属于规范补充，其他组件从原页面中的结构或交互提取。共有 427 个状态检查项。

组件库、组合页面与原页面分开维护：组合页不导入旧 Screen 模块；原页面继续保留作对照。109 个入口都有公共组件拼装方案，覆盖 47 类页面组合。运行检查与视觉验收分开记录；visualReview=pending 不会因加载成功而自动标成通过。

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

网格布局（Grid）、图片（Image）、头像（Avatar）、表单字段（FormField）、开关（Switch）、日期选择器（DatePicker）、滑块（Slider）、加载指示器（Loading）、骨架屏（Skeleton）、气泡浮层（Popover）、下拉刷新（PullRefresh）、加载更多（LoadMore）、吸底操作栏（StickyBar）。

这些组件或交互状态未在原页面中单独展示，按现有颜色、字体、间距与控件尺寸补齐。属于公共能力，不是假定已出现过的原稿组件。

## 基础组件

| 组件 | 分组 | 来源 | 状态 |
|---|---|---|---|
| 按钮（Button） | 操作 | 页面提取 | default, outline, compact, small, medium, disabled, loading |
| 数量步进器（QuantityStepper） | 操作 | 页面提取 | default, minimum, max, disabled, overlay, overlay-minimum, field |
| 标签（Tag） | 展示 | 页面提取 | default, neutral, marketing, marketing-outline, warning |
| 选择标签（ChoiceChip） | 输入与筛选 | 页面提取 | default, selected, white, white-selected, disabled |
| 单行输入框（TextField） | 输入与筛选 | 页面提取 | default, filled, disabled, error |
| 单选行（RadioRow） | 输入与筛选 | 页面提取 | default, selected, disabled |
| 评分（Rating） | 输入与筛选 | 页面提取 | default, rated, readonly, sentiment, sentiment-selected |
| 列表行（ListRow） | 展示 | 页面提取 | default, description |
| 提示条（Notice） | 反馈 | 页面提取 | default, long |
| 底部抽屉（BottomSheet） | 反馈 | 页面提取 | default, long, selection |
| 状态文字（StatusLabel） | 展示 | 页面提取 | gray, green |
| 文本（Text） | 展示 | 页面提取 | default, secondary, danger |
| 文字按钮（TextButton） | 操作 | 页面提取 | default, brand, disabled |
| 操作栏（ActionBar） | 页面与布局 | 页面提取 | default, single, content-width |
| 验证码输入框（OTPInput） | 输入与筛选 | 页面提取 | default, filled, six-digits, error, disabled |
| 网格布局（Grid） | 页面与布局 | 规范补充 | default, three-columns |
| 分割线（Divider） | 页面与布局 | 页面提取 | default, label |
| 卡片（Card） | 页面与布局 | 页面提取 | default, header-footer |
| 内容分区（Section） | 页面与布局 | 页面提取 | default, action |
| 图片（Image） | 展示 | 规范补充 | default, cover, error |
| 头像（Avatar） | 展示 | 规范补充 | default, large |
| 角标（Badge） | 展示 | 页面提取 | default, two-digits, dot, overflow |
| 状态栏（StatusBar） | 页面与布局 | 页面提取 | default, inverse |
| 底部手势条（HomeIndicator） | 页面与布局 | 页面提取 | default, on-action-background |
| 页面容器（Page） | 页面与布局 | 页面提取 | default, white, gray |
| 应用外壳（AppShell） | 页面与布局 | 页面提取 | default, long, footer, plain, account |
| 图标按钮（IconButton） | 操作 | 页面提取 | default, disabled |
| 顶部导航栏（NavBar） | 导航 | 页面提取 | default, long, no-back, no-actions |
| 标签页（Tabs） | 导航 | 页面提取 | default, scroll, disabled |
| 分段选择器（SegmentedControl） | 导航 | 页面提取 | default, disabled |
| 底部导航栏（TabBar） | 导航 | 页面提取 | default, badge, five, five-badge |
| 侧边分类栏（Sidebar） | 导航 | 页面提取 | default, long |
| 搜索框（SearchBar） | 输入与筛选 | 页面提取 | default, outline, white, filled, disabled |
| 表单字段（FormField） | 输入与筛选 | 规范补充 | default, error |
| 多行输入框（TextArea） | 输入与筛选 | 页面提取 | default, filled, disabled, error |
| 复选框（Checkbox） | 输入与筛选 | 页面提取 | default, selected, disabled |
| 开关（Switch） | 输入与筛选 | 规范补充 | default, selected, disabled |
| 下拉选择框（SelectField） | 输入与筛选 | 页面提取 | default, disabled |
| 选择器（Picker） | 输入与筛选 | 页面提取 | default, disabled |
| 日期选择器（DatePicker） | 输入与筛选 | 规范补充 | default, disabled |
| 滑块（Slider） | 输入与筛选 | 规范补充 | default, disabled |
| 上传控件（Uploader） | 输入与筛选 | 页面提取 | default, disabled |
| 筛选栏（FilterBar） | 输入与筛选 | 页面提取 | default, selected |
| 轮播图（Carousel） | 展示 | 页面提取 | default, empty |
| 折叠面板（Collapse） | 展示 | 页面提取 | default, long |
| 进度条（Progress） | 展示 | 页面提取 | default, complete |
| 步骤条（Steps） | 展示 | 页面提取 | default, complete |
| 空状态（EmptyState） | 反馈 | 页面提取 | default, action, orders, search, network, network-alt, cart, favorites, points, goods, content, waiting, load-error, server-error, closed, location, messages, vouchers, address, nothing |
| 结果展示（Result） | 反馈 | 页面提取 | default, error, warning, reasons |
| 加载指示器（Loading） | 反馈 | 规范补充 | default |
| 骨架屏（Skeleton） | 反馈 | 规范补充 | default, long |
| 轻提示（Toast） | 反馈 | 页面提取 | default, long |
| 对话框（Dialog） | 反馈 | 页面提取 | default, long |
| 操作面板（ActionSheet） | 反馈 | 页面提取 | default, disabled |
| 气泡浮层（Popover） | 反馈 | 规范补充 | default |
| 图片查看器（ImageViewer） | 反馈 | 页面提取 | default |
| 左滑操作（SwipeAction） | 反馈 | 页面提取 | default, two-actions, three-actions, disabled |
| 下拉刷新（PullRefresh） | 反馈 | 规范补充 | default, error |
| 加载更多（LoadMore） | 反馈 | 规范补充 | default, loading, error, end |
| 吸底操作栏（StickyBar） | 页面与布局 | 规范补充 | default, two-buttons, content |
| 模拟键盘（Keyboard） | 输入与筛选 | 页面提取 | default, alphabetic, disabled |
| 倒计时（Countdown） | 展示 | 页面提取 | default, complete |
| 业务插画（Artwork） | 展示 | 页面提取 | default |
| 列表分组（ListGroup） | 页面与布局 | 页面提取 | inside, outside |
| 图标（Icon） | 展示 | 页面提取 | default |
## 业务组件

| 组件 | 分组 | 来源 | 状态 |
|---|---|---|---|
| 加购按钮（AddButton） | 商品与购物车 | 页面提取 | default, disabled |
| 优惠券卡片（CouponCard） | 优惠与账户 | 页面提取 | default, expired, used |
| 商品卡片（ProductCard） | 商品与购物车 | 页面提取 | grid, full-width, category, full-width-expanded, category-expanded, multi-spec, quantity, minimum, maximum, count, sold-out, unavailable, not-for-sale, similar, order-by, long-title |
| 商品价格组合（ProductPriceGroup） | 商品与购物车 | 页面提取 | default, with-unit-price, price-only, unit-price |
| 商品购买控件（ProductPurchaseControl） | 商品与购物车 | 页面提取 | default, count, quantity, minimum, maximum, notify, similar, specs |
| 商品状态蒙层（ProductStatusOverlay） | 商品与购物车 | 页面提取 | sold-out-en, sold-out-zh, unavailable-en, unavailable-zh, not-for-sale-en, not-for-sale-zh, sold-out-en-compact, sold-out-zh-compact, unavailable-en-compact, unavailable-zh-compact, not-for-sale-en-compact, not-for-sale-zh-compact |
| 供应商标签（ProductSupplierTag） | 商品与购物车 | 页面提取 | default, comparison |
| feeds（ProductList） | 商品与购物车 | 页面提取 | default, compact, row, empty |
| 猜你喜欢（ProductCollection） | 商品与购物车 | 页面提取 | default, row, empty |
| 商品规格选择器（ProductSpecPicker） | 商品与购物车 | 页面提取 | default, selected |
| 购物车商品行（CartItem） | 商品与购物车 | 页面提取 | default, selected, unavailable, readonly |
| 购物车商品组（CartGroup） | 商品与购物车 | 页面提取 | default, selected |
| 购物车结算栏（CartSummaryBar） | 商品与购物车 | 页面提取 | default, empty |
| 失效商品抽屉（InvalidProductsSheet） | 商品与购物车 | 页面提取 | default, long |
| 地址卡片（AddressCard） | 地址与配送 | 页面提取 | default, selected, long, delivery |
| 地址选择器（AddressPicker） | 地址与配送 | 页面提取 | default, empty |
| 地址表单（AddressForm） | 地址与配送 | 页面提取 | default, on-white, error, disabled, custom-label, label-conflict |
| 地图选址（MapAddressPicker） | 地址与配送 | 页面提取 | default, empty |
| 配送时段选择器（DeliverySlotPicker） | 地址与配送 | 页面提取 | default, selected, empty |
| 配送进度（DeliveryProgress） | 地址与配送 | 页面提取 | default, complete |
| 支付方式行（PaymentMethodRow） | 支付与订单 | 页面提取 | default, selected, disabled |
| 银行卡片（BankCard） | 支付与订单 | 页面提取 | mastercard, amex, mada, visa, default, selected |
| 银行卡表单（BankCardForm） | 支付与订单 | 页面提取 | default, error |
| 支付方式选择器（PaymentMethodPicker） | 支付与订单 | 页面提取 | default, empty |
| 结算明细（CheckoutSummary） | 支付与订单 | 页面提取 | default, discount |
| 订单卡片（OrderCard） | 支付与订单 | 页面提取 | default, unpaid, cancelled |
| 订单状态头部（OrderStatusHeader） | 支付与订单 | 页面提取 | default, unpaid, failed, paid, preparing, delivering, completed, cancelled |
| 订单时间线（OrderTimeline） | 支付与订单 | 页面提取 | default, complete |
| 订单信息（OrderInfo） | 支付与订单 | 页面提取 | default, long |
| 取消原因选择器（CancelReasonPicker） | 支付与订单 | 页面提取 | default, selected |
| 评价卡片（ReviewCard） | 评价与媒体 | 页面提取 | default, long |
| 商品评分面板（ProductRatingPanel） | 评价与媒体 | 页面提取 | default, rated |
| 配送评分面板（RiderRatingPanel） | 评价与媒体 | 页面提取 | default, rated |
| 评价编辑器（ReviewEditor） | 评价与媒体 | 页面提取 | default, rated, error |
| 媒体选择器（MediaPicker） | 评价与媒体 | 页面提取 | default, selected |
| 优惠码表单（PromoCodeForm） | 优惠与账户 | 页面提取 | default, filled, error, loading |
| 活动横幅（CampaignBanner） | 优惠与账户 | 页面提取 | default, image |
| 新客优惠（NewUserOffer） | 优惠与账户 | 页面提取 | default, long |
| 账户头部（AccountHeader） | 优惠与账户 | 页面提取 | default, guest, profile |
| 设置分组（SettingGroup） | 优惠与账户 | 页面提取 | default, long |
| 聊天消息（ChatMessage） | 客服与帮助 | 页面提取 | default, user, system, media, long |
| 聊天输入栏（ChatComposer） | 客服与帮助 | 页面提取 | default, filled, disabled |
| 客服排队提示（ServiceQueue） | 客服与帮助 | 页面提取 | default |
| 售后工单卡片（ServiceTicketCard） | 客服与帮助 | 页面提取 | default, ended |
| 售后工单详情（ServiceTicketDetail） | 客服与帮助 | 页面提取 | default, long |
| 常见问题列表（FAQList） | 客服与帮助 | 页面提取 | default, long |
| 品牌标志（BrandLogo） | 登录与授权 | 页面提取 | default, short |
| 法律条款文本（LegalText） | 登录与授权 | 页面提取 | default, long |
| 国家或地区选择器（CountryPicker） | 登录与授权 | 页面提取 | default |
| 手机号登录表单（PhoneLoginForm） | 登录与授权 | 页面提取 | default, filled, without-country, error, loading, country-open |
| 验证码字段（VerificationCodeField） | 登录与授权 | 页面提取 | default, filled, six-digits, error, countdown |
| 授权确认抽屉（ConsentSheet） | 登录与授权 | 页面提取 | default, long |
| 订单备注（OrderRemarks） | 支付与订单 | 页面提取 | default, selected, long |
| 订单提交栏（OrderSubmitBar） | 支付与订单 | 页面提取 | default, disabled, loading, integrated |
| 账户注销说明（AccountDeletionNotice） | 优惠与账户 | 页面提取 | default, long |
| 促销商品组（PromotionGroup） | 商品与购物车 | 页面提取 | default, eligible, gift, buy-get |
| 不可用商品组（UnavailableProductsGroup） | 商品与购物车 | 页面提取 | default, expanded, empty |
| 购物车头部（CartHeader） | 导航 | 页面提取 | default, empty, address-missing |
| 搜索页头部（SearchHeader） | 导航 | 页面提取 | default, filled |
| 搜索建议（SearchSuggestions） | 输入与筛选 | 页面提取 | default, empty |
| 分类入口卡片（CategoryTile） | 导航 | 页面提取 | default, promotion |
| 金刚区入口（CategoryGrid） | 导航 | 页面提取 | default |
| 首页头部（HomeHeader） | 导航 | 页面提取 | default, filled |
| 分类页框架（CategoryLayout） | 导航 | 页面提取 | text-primary, image-primary, empty |
| 订单阶段进度（OrderStageProgress） | 支付与订单 | 页面提取 | default, preparing, delivering, complete |
| 订单送达信息（OrderArrival） | 支付与订单 | 页面提取 | default, unpaid |
| 订单配送详情（OrderDeliveryDetails） | 支付与订单 | 页面提取 | default |
| 手机号输入框（PhoneField） | 登录与授权 | 页面提取 | default, filled, without-country, error, disabled |
| 客服订单卡片（SupportOrderCard） | 客服与帮助 | 页面提取 | default |
| 配送评价卡片（RiderReviewCard） | 评价与媒体 | 页面提取 | default |
| 购物车活动条（CartPromotionBar） | 商品与购物车 | 页面提取 | gift, sale, threshold |
| 优惠券列表（VoucherList） | 优惠与账户 | 页面提取 | default, empty, expired |
| 兑券成功弹窗（VoucherSuccessDialog） | 优惠与账户 | 页面提取 | default, closable |
| 首页新客券横幅（HomeVoucherBanner） | 优惠与账户 | 页面提取 | default |

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
