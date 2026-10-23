# KeenMart 组件体系 · v0.12

本轮范围：现有 109 个页面／状态；65 个基础组件、77 个业务组件，共 142 个可运行候选组件。13 个组件属于规范补充，其他组件从原页面中的结构或交互提取。共有 423 个状态检查项。

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

Grid、Image、Avatar、FormField、Switch、DatePicker、Slider、Loading、Skeleton、Popover、PullRefresh、LoadMore、StickyBar。

这些组件或交互状态未在原页面中单独展示，按现有颜色、字体、间距与控件尺寸补齐。属于公共能力，不是假定已出现过的原稿组件。

## 基础组件

| 组件 | 分组 | 来源 | 状态 |
|---|---|---|---|
| Button | 操作 | 页面提取 | default, outline, compact, small, medium, disabled, loading |
| QuantityStepper | 操作 | 页面提取 | default, minimum, max, disabled, overlay, overlay-minimum, field |
| Tag | 展示 | 页面提取 | default, neutral, marketing, marketing-outline, warning |
| ChoiceChip | 输入与筛选 | 页面提取 | default, selected, white, white-selected, disabled |
| TextField | 输入与筛选 | 页面提取 | default, filled, disabled, error |
| RadioRow | 输入与筛选 | 页面提取 | default, selected, disabled |
| Rating | 输入与筛选 | 页面提取 | default, rated, readonly, sentiment, sentiment-selected |
| ListRow | 展示 | 页面提取 | default, description |
| Notice | 反馈 | 页面提取 | default, long |
| BottomSheet | 反馈 | 页面提取 | default, long, selection |
| StatusLabel | 展示 | 页面提取 | gray, green |
| Text | 展示 | 页面提取 | default, secondary, danger |
| TextButton | 操作 | 页面提取 | default, brand, disabled |
| ActionBar | 页面与布局 | 页面提取 | default, single, content-width |
| OTPInput | 输入与筛选 | 页面提取 | default, filled, six-digits, error, disabled |
| Grid | 页面与布局 | 规范补充 | default, three-columns |
| Divider | 页面与布局 | 页面提取 | default, label |
| Card | 页面与布局 | 页面提取 | default, header-footer |
| Section | 页面与布局 | 页面提取 | default, action |
| Image | 展示 | 规范补充 | default, cover, error |
| Avatar | 展示 | 规范补充 | default, large |
| Badge | 展示 | 页面提取 | default, two-digits, dot, overflow |
| StatusBar | 页面与布局 | 页面提取 | default, inverse |
| HomeIndicator | 页面与布局 | 页面提取 | default, on-action-background |
| Page | 页面与布局 | 页面提取 | default, white, gray |
| AppShell | 页面与布局 | 页面提取 | default, long, footer, plain, account |
| IconButton | 操作 | 页面提取 | default, disabled |
| NavBar | 导航 | 页面提取 | default, long, no-back, no-actions |
| Tabs | 导航 | 页面提取 | default, scroll, disabled |
| SegmentedControl | 导航 | 页面提取 | default, disabled |
| TabBar | 导航 | 页面提取 | default, badge |
| Sidebar | 导航 | 页面提取 | default, long |
| SearchBar | 输入与筛选 | 页面提取 | default, outline, white, filled, disabled |
| FormField | 输入与筛选 | 规范补充 | default, error |
| TextArea | 输入与筛选 | 页面提取 | default, filled, disabled, error |
| Checkbox | 输入与筛选 | 页面提取 | default, selected, disabled |
| Switch | 输入与筛选 | 规范补充 | default, selected, disabled |
| SelectField | 输入与筛选 | 页面提取 | default, disabled |
| Picker | 输入与筛选 | 页面提取 | default, disabled |
| DatePicker | 输入与筛选 | 规范补充 | default, disabled |
| Slider | 输入与筛选 | 规范补充 | default, disabled |
| Uploader | 输入与筛选 | 页面提取 | default, disabled |
| FilterBar | 输入与筛选 | 页面提取 | default, selected |
| Carousel | 展示 | 页面提取 | default, empty |
| Collapse | 展示 | 页面提取 | default, long |
| Progress | 展示 | 页面提取 | default, complete |
| Steps | 展示 | 页面提取 | default, complete |
| EmptyState | 反馈 | 页面提取 | default, action, orders, search, network, network-alt, cart, favorites, points, goods, content, waiting, load-error, server-error, closed, location, messages, vouchers, address, nothing |
| Result | 反馈 | 页面提取 | default, error, warning, reasons |
| Loading | 反馈 | 规范补充 | default |
| Skeleton | 反馈 | 规范补充 | default, long |
| Toast | 反馈 | 页面提取 | default, long |
| Dialog | 反馈 | 页面提取 | default, long |
| ActionSheet | 反馈 | 页面提取 | default, disabled |
| Popover | 反馈 | 规范补充 | default |
| ImageViewer | 反馈 | 页面提取 | default |
| SwipeAction | 反馈 | 页面提取 | default, two-actions, three-actions, disabled |
| PullRefresh | 反馈 | 规范补充 | default, error |
| LoadMore | 反馈 | 规范补充 | default, loading, error, end |
| StickyBar | 页面与布局 | 规范补充 | default, two-buttons, content |
| Keyboard | 输入与筛选 | 页面提取 | default, alphabetic, disabled |
| Countdown | 展示 | 页面提取 | default, complete |
| Artwork | 展示 | 页面提取 | default |
| ListGroup | 页面与布局 | 页面提取 | inside, outside |
| Icon | 展示 | 页面提取 | default |
## 业务组件

| 组件 | 分组 | 来源 | 状态 |
|---|---|---|---|
| AddButton | 商品与购物车 | 页面提取 | default, disabled |
| Price | 商品与购物车 | 页面提取 | default, integer, large, promotion |
| CouponCard | 优惠与账户 | 页面提取 | default, expired, used |
| ProductCard | 商品与购物车 | 页面提取 | grid, full-width, category, full-width-expanded, category-expanded, multi-spec, quantity, minimum, maximum, count, sold-out, unavailable, not-for-sale, similar, order-by, long-title |
| ProductPriceGroup | 商品与购物车 | 页面提取 | default, with-unit-price, price-only, unit-price |
| ProductPurchaseControl | 商品与购物车 | 页面提取 | default, count, quantity, minimum, maximum, notify, similar, specs |
| ProductStatusOverlay | 商品与购物车 | 页面提取 | sold-out, unavailable, not-for-sale, chinese, compact |
| ProductSupplierTag | 商品与购物车 | 页面提取 | default |
| ProductList | 商品与购物车 | 页面提取 | default, compact, row, empty |
| ProductCollection | 商品与购物车 | 页面提取 | default, row, empty |
| ProductDetailHeader | 商品与购物车 | 页面提取 | default, promotion, unavailable |
| ProductSpecPicker | 商品与购物车 | 页面提取 | default, selected |
| CartItem | 商品与购物车 | 页面提取 | default, selected, unavailable, readonly |
| CartGroup | 商品与购物车 | 页面提取 | default, selected |
| CartSummaryBar | 商品与购物车 | 页面提取 | default, empty |
| InvalidProductsSheet | 商品与购物车 | 页面提取 | default, long |
| AddressCard | 地址与配送 | 页面提取 | default, selected, long, delivery |
| AddressPicker | 地址与配送 | 页面提取 | default, empty |
| AddressForm | 地址与配送 | 页面提取 | default, on-white, error, disabled, custom-label, label-conflict |
| MapAddressPicker | 地址与配送 | 页面提取 | default, empty |
| DeliverySlotPicker | 地址与配送 | 页面提取 | default, selected, empty |
| DeliveryProgress | 地址与配送 | 页面提取 | default, complete |
| PaymentMethodRow | 支付与订单 | 页面提取 | default, selected, disabled |
| BankCard | 支付与订单 | 页面提取 | mastercard, amex, mada, visa, default, selected |
| BankCardForm | 支付与订单 | 页面提取 | default, error |
| PaymentMethodPicker | 支付与订单 | 页面提取 | default, empty |
| CheckoutSummary | 支付与订单 | 页面提取 | default, discount |
| OrderCard | 支付与订单 | 页面提取 | default, unpaid, cancelled |
| OrderStatusHeader | 支付与订单 | 页面提取 | default, unpaid, failed, paid, preparing, delivering, completed, cancelled |
| OrderTimeline | 支付与订单 | 页面提取 | default, complete |
| OrderInfo | 支付与订单 | 页面提取 | default, long |
| CancelReasonPicker | 支付与订单 | 页面提取 | default, selected |
| ReviewCard | 评价与媒体 | 页面提取 | default, long |
| ProductRatingPanel | 评价与媒体 | 页面提取 | default, rated |
| RiderRatingPanel | 评价与媒体 | 页面提取 | default, rated |
| ReviewEditor | 评价与媒体 | 页面提取 | default, rated, error |
| MediaPicker | 评价与媒体 | 页面提取 | default, selected |
| PromoCodeForm | 优惠与账户 | 页面提取 | default, filled, error, loading |
| CampaignBanner | 优惠与账户 | 页面提取 | default, image |
| NewUserOffer | 优惠与账户 | 页面提取 | default, long |
| AccountHeader | 优惠与账户 | 页面提取 | default, guest, profile |
| SettingGroup | 优惠与账户 | 页面提取 | default, long |
| SupportEntryGrid | 客服与帮助 | 页面提取 | default |
| ChatMessage | 客服与帮助 | 页面提取 | default, user, system, media, long |
| ChatComposer | 客服与帮助 | 页面提取 | default, filled, disabled |
| ServiceQueue | 客服与帮助 | 页面提取 | default |
| ServiceTicketCard | 客服与帮助 | 页面提取 | default, ended |
| ServiceTicketDetail | 客服与帮助 | 页面提取 | default, long |
| FAQList | 客服与帮助 | 页面提取 | default, long |
| BrandLogo | 登录与授权 | 页面提取 | default, short |
| LegalText | 登录与授权 | 页面提取 | default, long |
| CountryPicker | 登录与授权 | 页面提取 | default |
| PhoneLoginForm | 登录与授权 | 页面提取 | default, filled, without-country, error, loading, country-open |
| VerificationCodeField | 登录与授权 | 页面提取 | default, filled, six-digits, error, countdown |
| ConsentSheet | 登录与授权 | 页面提取 | default, long |
| OrderRemarks | 支付与订单 | 页面提取 | default, selected, long |
| OrderSubmitBar | 支付与订单 | 页面提取 | default, disabled, loading, integrated |
| AccountDeletionNotice | 优惠与账户 | 页面提取 | default, long |
| PromotionGroup | 商品与购物车 | 页面提取 | default, eligible, gift, buy-get |
| UnavailableProductsGroup | 商品与购物车 | 页面提取 | default, expanded, empty |
| CartHeader | 导航 | 页面提取 | default, empty, address-missing |
| SearchHeader | 导航 | 页面提取 | default, filled |
| SearchSuggestions | 输入与筛选 | 页面提取 | default, empty |
| CategoryTile | 导航 | 页面提取 | default, promotion |
| CategoryGrid | 导航 | 页面提取 | default |
| HomeHeader | 导航 | 页面提取 | default, filled |
| CategoryLayout | 导航 | 页面提取 | text-primary, image-primary, empty |
| OrderStageProgress | 支付与订单 | 页面提取 | default, complete |
| OrderArrival | 支付与订单 | 页面提取 | default, unpaid |
| OrderDeliveryDetails | 支付与订单 | 页面提取 | default |
| PhoneField | 登录与授权 | 页面提取 | default, filled, without-country, error, disabled |
| SupportOrderCard | 客服与帮助 | 页面提取 | default |
| RiderReviewCard | 评价与媒体 | 页面提取 | default |
| CartPromotionBar | 商品与购物车 | 页面提取 | gift, sale, threshold |
| VoucherList | 优惠与账户 | 页面提取 | default, empty, expired |
| VoucherSuccessDialog | 优惠与账户 | 页面提取 | default, closable |
| HomeVoucherBanner | 优惠与账户 | 页面提取 | default |

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
