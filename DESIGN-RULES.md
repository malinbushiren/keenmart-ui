# KeenMart 设计规则

版本：v0.12；更新日期：2026-10-23。

本规则汇总用户逐页审核时的明确要求；字号、间距和按钮尺寸同时标注原稿及现有规范的归纳依据。它是跨页面约束，不替代原稿的具体数据和尺寸。用户明确修正优先于原稿历史值；未获确认的设计选择不得自行发明。

网页入口：基础规范 → 设计规则；每个相关组件的使用说明同步显示适用规则。规则源文件为 `src/design-system/design-rules.json`，页面与本文件由同一数据源维护。

## source · 以原稿和用户修正为依据

**类别**：页面组合。**依据**：用户明确要求（含前轮确认）。

保持原稿的文案、素材、状态、结构和交互位置；不得用示例内容代替。用户明确修正的规则优先于原稿历史值。

**适用组件**：Page, ChatMessage, MapAddressPicker。

## chrome · 状态栏与导航使用同一背景

**类别**：页面与背景。**依据**：用户明确要求（含前轮确认）。

状态栏透明承接页面头部背景，与导航栏同色。渐变或图片从状态栏延续到下方内容，不在状态栏处断开。Page 的 chromeBackground 统一设置头部背景，业务组件不得各画一条底色。

**适用组件**：Page, StatusBar, NavBar, CartHeader, AccountHeader。

## surface · 组件必须与承载背景可区分

**类别**：页面与背景。**依据**：用户明确要求（含前轮确认）。

白底上使用灰色组件，或有描边的白色组件；灰底上使用白色或明确的彩色组件。输入框、搜索框和预览容器都要有可见边界，不能融入背景。 优惠券列表、历史券列表、Profile、About 和推荐商品 feeds 流必须使用灰色承载背景与白色卡片；即使原页面误用白底，也按此规则纠正。ProductCollection、VoucherList 自己提供灰色承载层，页面不能把它覆盖回白色。白底上白色组件只有具备明确描边时才可使用。 通用 SVG 包装层修正规则不得命中 VoucherList 或优惠券页面等带明确背景的语义容器；验证时检查浏览器计算后的背景色，不能只检查 CSS 声明。

**适用组件**：Page, SearchBar, TextField, ChoiceChip, Card, MapAddressPicker, VoucherList, CouponCard, ProductCollection。

## empty · 整页空状态的上下留白为 1:2

**类别**：页面与背景。**依据**：用户明确要求（含前轮确认）。

以内容可用区为准，排除状态栏、导航、固定操作和手势区。插画与文字作为一个整体，上方剩余留白与下方剩余留白按 1:2 分配。局部空状态使用 inline，不套整页比例。 插画必须对应业务类型，例如无优惠券使用优惠券图，不能用订单图。不要把空状态放入固定上边距的普通内容块中。

**适用组件**：EmptyState, Page。

## spacing · 按内容关系分配间距

**类别**：间距与排版。**依据**：用户的间距／字阶要求；具体尺寸由原稿与现有规范归纳。

图标与文字 6–9px，同组标题与说明 6px，说明与控件 12px，卡片间通常 12px，任务分区通常 24px。列表标题距首行 6–12px；不要把多个容器的 padding、margin、gap 重复相加。原稿有明确尺寸时以原稿为准。

**适用组件**：Section, Card, ListGroup, ListRow, UnavailableProductsGroup, ProductSpecPicker。

## insets · 列表和内容保留左右留白

**类别**：间距与排版。**依据**：用户的间距／字阶要求；具体尺寸由原稿与现有规范归纳。

页面通常左右 12px；列表行、表单、弹窗正文通常 15–18px。SwipeAction 内容和 ListRow 不能贴边，左右对齐同组内容。

**适用组件**：ListRow, SwipeAction, BottomSheet, ListGroup。

## type · 文字角色决定字阶

**类别**：间距与排版。**依据**：用户的间距／字阶要求；具体尺寸由原稿与现有规范归纳。

导航和底部弹窗标题使用 18/23px，正文 14/19px，辅助文案 12/18px；文字不因模板复用随意放大。状态标签使用常规字重，价格保留币种、整数和小数的明确层级。

**适用组件**：Text, BottomSheet, NavBar, Price, StatusLabel。

## button · 按钮尺寸按操作层级使用

**类别**：间距与排版。**依据**：用户的间距／字阶要求；具体尺寸由原稿与现有规范归纳。

regular 48px 用于提交和结算，medium 40px 用于区域操作，small 36px 用于订单动作和展开/收起，compact 28px 用于记录入口；胶囊背景必须包住文字。 页面只有一个主要操作时，使用内容区通栏按钮，左右与卡片对齐，不能缩成文字宽的小胶囊。

**适用组件**：Button, OrderArrival, SegmentedControl。

## quantity · 数量为 1 时减号禁用

**类别**：交互。**依据**：用户明确要求（含前轮确认）。

数量为 1 时保留减号并置灰，不能通过步进器删除商品，也不能用垃圾桶替代减号。删除商品统一左滑后展示删除操作。

**适用组件**：QuantityStepper, CartItem, ProductCard, ProductSpecPicker, SwipeAction。

## swipe · 左滑后才展示操作

**类别**：交互。**依据**：用户明确要求（含前轮确认）。

默认隐藏 Delete，向左滑动后展示；向右滑或 Escape 收起。内容保留内距。银行卡和商品删除都遵循该交互。

**适用组件**：SwipeAction, CartItem, BankCard。

## toast · Toast 为短暂文字反馈

**类别**：交互。**依据**：用户明确要求（含前轮确认）。

深色半透明底、白色文字；不显示关闭按钮，默认 3 秒自动关闭。Toast 不能代替地址选择等实际交互面板。

**适用组件**：Toast, CartHeader。

## address · 地址选择打开抽屉

**类别**：交互。**依据**：用户明确要求（含前轮确认）。

购物车头部地址入口打开地址 BottomSheet，选择后更新地址并关闭面板。重复地址标签的确认保持底部弹窗，展示原地址摘要和纵排操作，不改为居中对话框。

**适用组件**：CartHeader, AddressPicker, AddressForm, BottomSheet。

## bottom · 主操作吸底并保留安全区

**类别**：页面组合。**依据**：用户明确要求（含前轮确认）。

原稿中的底部主操作放入 Page.footer，滚动内容不把它推走。ActionBar 只管理按钮及上下间距；HomeIndicator 由页面或弹层统一放一次，背景透明或与上方操作区一致。

**适用组件**：Page, ActionBar, HomeIndicator, StickyBar。

## activity · 购物车活动条独立于商品行

**类别**：业务组件。**依据**：用户明确要求（含前轮确认）。

GIFT/SALE 标签、活动标题及 View 按原稿同排，促销说明另起一行并与商品列表分隔。不可用通用绿色 Notice 替代活动条。

**适用组件**：CartPromotionBar, PromotionGroup, CartItem。

## status · 状态标签使用常规字重

**类别**：业务组件。**依据**：用户明确要求（含前轮确认）。

文本状态使用常规字重，支持 green 和 gray 两种颜色；配送中可绿色，取消、完成等使用灰色。不要通过粗体或彩色底卡强化普通状态。

**适用组件**：StatusLabel, SupportOrderCard, ServiceTicketCard。

## list-title · 列表标题支持卡片内外两种

**类别**：业务组件。**依据**：用户明确要求（含前轮确认）。

ListGroup 的 titlePlacement=inside 把标题放在白卡内，outside 把标题放在卡片外。保持同组行的左右对齐；客服帮助使用原稿卡片内标题 Frequently Asked Questions。

**适用组件**：ListGroup, Card, Section。

## chat · 聊天气泡按角色区分

**类别**：业务组件。**依据**：用户明确要求（含前轮确认）。

客服消息为白底深色字，用户消息为品牌绿底白字；时间在对应消息上方按左/右对齐。图片消息不增加彩色边框或背景。欢迎语同样使用客服气泡。

**适用组件**：ChatMessage。

## queue · 排队提示由气泡承载

**类别**：业务组件。**依据**：用户明确要求（含前轮确认）。

排队位置提示和 Cancel the queue 放在同一个白色客服气泡内，队列位置可绿色强调；操作居中。接入客服的提示支持头像和居中气泡。

**适用组件**：ServiceQueue, ChatMessage。

## chat-actions · 聊天操作位置沿用原稿

**类别**：业务组件。**依据**：用户明确要求（含前轮确认）。

End service 位于输入区上方；输入框右侧是绿色加号，展开附件时切换关闭图标。Image/Camera/Order 在底部附件区，不能把 End service 任意移到导航右侧。

**适用组件**：ChatComposer, ChatMessage。

## tag · 红色标签表示营销或警告

**类别**：业务组件。**依据**：用户明确要求（含前轮确认）。

Tag 的红色用于营销与警告，绿色用于权益和门槛，灰色用于中性状态。可选择标签属于 ChoiceChip，不属于 Tag。

**适用组件**：Tag, ChoiceChip。

## choice · 选择项提供白底和灰底

**类别**：业务组件。**依据**：用户明确要求（含前轮确认）。

ChoiceChip 需要白色与灰色背景两种外观，并有明确的选中/未选中状态。根据承载背景选择，文字不得超出背景。

**适用组件**：ChoiceChip, SegmentedControl。

## badge · 单个数字角标为圆形

**类别**：业务组件。**依据**：用户明确要求（含前轮确认）。

Badge 单位数为 16px 圆形，多位数横向扩展为胶囊；放在图标右上角，不遮住图标主体。

**适用组件**：Badge。

## nav · 导航与切换保留真实边界

**类别**：业务组件。**依据**：用户明确要求（含前轮确认）。

NavBar 提供无操作样式；Tabs 多项时横向滚动，不能挤成重叠文字；SegmentedControl 选中背景完整包住文本。

**适用组件**：NavBar, Tabs, SegmentedControl。

## placeholder · 输入项提供具体占位信息

**类别**：业务组件。**依据**：用户明确要求（含前轮确认）。

FormField 内的 input 或 textarea 要有 placeholder，描述预期输入。TextArea 的字数上限显示在输入区域内部；焦点样式覆盖整个输入区域。

**适用组件**：FormField, TextField, TextArea。

## media · 图片默认按原比例适应显示

**类别**：业务组件。**依据**：用户明确要求（含前轮确认）。

图片查看为黑底全屏、fit 显示，保留返回、计数和手势区；不要替换为白色居中 Dialog。媒体选择只保留一套标题/完成操作。

**适用组件**：ImageViewer, MediaPicker。

## classification · 区分基础规则与业务组件

**类别**：体系边界。**依据**：用户明确要求（含前轮确认）。

Space 是基础间距规范，不作为组件目录入口；PhoneField 带手机号格式与区号逻辑，归为业务组件。设计规则说明跨页面约束，组件说明记录具体接口和状态。

**适用组件**：PhoneField, Section, Grid。

## result-details · 结果页原因使用卡片承载

**类别**：页面组合。**依据**：用户明确要求（本轮截图标注）。。

错误或失败页的多条原因放在同一张白色卡片内，以列表呈现；灰色页面承载白卡。状态图标、标题、原因卡、通栏操作依次排列，不能把多条原因压缩成一段居中文字。

**适用组件**：Result, Card, Button。

## voucher-success · 兑换成功弹窗固定绿色渐变背景

**类别**：业务组件。**依据**：用户明确要求（本轮截图标注）。。

VoucherSuccessDialog 统一使用浅绿渐变背景、绿色标题、白色优惠券卡和底部 Got it；关闭按钮是可选项，默认不显示。操作区域不加无意义分割线；标题和操作尺寸按原稿，不拆行孤立标点。

**适用组件**：VoucherSuccessDialog, Dialog, CouponCard。

## commerce-anatomy · 商卡统一使用三种定制结构

**类别**：业务组件。**依据**：用户本轮要求；Figma 136:39431 的三类商卡结构，基础元素遵循现有规范。

ProductCard 的 grid、full-width、category 分别用于双列瀑布流、通栏单列和分类单列；保留商品图、标题、重量、价格层级、促销、供应商和购买状态。图片槽位分别为自适应正方形、120px、72px；尺寸来自本轮原稿。价格、标签、数量、按钮和文字使用当前基础规范与令牌，不在页面重新实现旧商卡。双列商卡多规格通过抽屉选择，宽屏商卡可在卡内展开规格。数量为 1 时减号禁用，不能改成删除。

**适用组件**：ProductCard, ProductList, ProductCollection, ProductPriceGroup, ProductPurchaseControl, ProductStatusOverlay, ProductSupplierTag。

## category-framework · 分类框架独立于页面外壳

**类别**：页面组合。**依据**：用户本轮要求；Figma 136:39852、136:40313 的两个分类框架。

CategoryLayout 提供 text-primary 与 image-primary 两种原稿结构。前者使用文字一级分类和图片二级侧栏；后者使用图片一级分类、文字二级侧栏、三级筛选及排序。框架组合当前 ProductCard，状态栏、底部导航、安全区由 Page 管理；头部背景通过 Page 统一承接。分类栏和商品列表分别滚动，搜索、分类、筛选与排序通过受控接口交给业务层，不复制整页 Screen。

**适用组件**：CategoryLayout, ProductCard, Page, SearchBar, ChoiceChip。

## compose-before-create · 先分析组成，再复用已有组件

**类别**：页面组合。**依据**：用户 137:52180 验收标注。

按验收原稿拆解页面的容器、列表、提示和操作。已有组件必须通过正确参数组合；确无能力时才补充组件。取消原因必须是 BottomSheet＋RadioRow 列表＋Switch 提示条＋吸底 Confirm，不改为独立全屏表单，不增加原稿没有的输入区。

**适用组件**：Page, CancelReasonPicker, BottomSheet, RadioRow, Switch。

## form-surface · 表单内容与承载层使用相反明度

**类别**：页面与背景。**依据**：用户 139:52914、139:53126、139:53134；用户澄清第 18 张笔误。

先判断页面背景，再选择组件承载层：灰色页面放白色表单，白色页面放灰色或明确描边的表单；字段与表单再形成层次。灰色内容不能展示在灰色背景上。AddressForm 的 surface 指表单本身颜色；OrderRemarks 使用白色承载层和灰色输入／选项；PromoCodeForm 使用白色承载层和灰色胶囊输入框。

**适用组件**：AddressForm, OrderRemarks, PromoCodeForm, Page, TextField, ChoiceChip。

## action-hierarchy · 操作按层级排列并区分颜色

**类别**：交互。**依据**：用户 139:52879、139:52886、139:52890 验收标注。

ActionSheet 操作自上而下逐行排列；SwipeAction 支持多个操作，普通操作使用中性色，红色只用于删除等破坏性操作。Checkbox 选中使用绿色底和白色对勾。

**适用组件**：ActionSheet, SwipeAction, Checkbox。

## page-submit · 页面级提交由页面操作栏管理

**类别**：体系边界。**依据**：用户 139:52898、139:53122 验收标注。

ReviewEditor 只负责评分、文字和媒体的编辑与回传，Submit 由 Page.footer 的操作栏提供。StickyBar 支持单按钮、两个等宽按钮、内容＋按钮；吸底位置由页面或明确的滚动容器管理，不能把某一页面的购买摘要当作唯一通用形式。

**适用组件**：ReviewEditor, Page, ActionBar, StickyBar。

## component-purpose · 组件保留明确用途和来源

**类别**：体系边界。**依据**：用户 139:52875、139:52894、139:53130、138:52184 验收标注。

组件说明写清职责、原稿出处或规范补充依据。Section 只是标题＋内容布局工具，不是业务卡片；PullRefresh 是下拉手势容器，不是 Refresh 文字按钮。没有可靠来源、没有调用且可由已有组件替代的组件移除；MembershipBenefits 的虚构权益块已移除。原稿未提供的新状态也必须沿用现有基础颜色、尺寸、圆角、间距和交互风格。

**适用组件**：Section, PullRefresh, SelectField。

## 实现与验证边界

Page 统一头部背景；EmptyState 的 page 布局落实 1:2 留白；QuantityStepper 禁用最小值减号；Toast 默认 3000ms、无关闭按钮；其余规则由各组件接口和页面组合负责。构建通过或页面可渲染不等于视觉验收，不能自动把审核结论改为通过。
