# coding: utf-8
from pathlib import Path
import json
p=Path('src/design-system');catalog=json.loads((p/'component-catalog.json').read_text())
definitions='''
ProductPriceGroup|价格业务组合；当前售价、币种、单位、单位价与划线原价的四种组合。
ProductPurchaseControl|商卡购买状态；加购、数量、到达上限、多规格、到货提醒和找相似。
ProductStatusOverlay|商品图上的售罄、下架、非卖品蒙层；支持中英文。
ProductSupplierTag|商卡供应商入口；灰色底承载供应商图标、名称和箭头。
VoucherList|优惠券列表承载层；统一灰色背景、白色券卡，以及无券和历史券状态。
VoucherSuccessDialog|兑换券成功弹窗；固定浅绿渐变背景、白色券卡和 Got it，关闭按钮可选。
HomeVoucherBanner|首页新客券营销头图；使用原稿手部素材、SAR100 权益和入口。
ListGroup|一组有标题的信息入口；标题可放在卡片内部或外部。
CartPromotionBar|购物车 GIFT/SALE 活动条；标签、活动标题、操作和辅助说明按原稿分层。
StatusLabel|常规字重的纯文字状态，支持绿色和灰色。
SupportOrderCard|客服选择订单及聊天引用的紧凑订单卡；展示原稿订单编号、四张商品图、数量、状态和时间。
RiderReviewCard|已提交配送评价的只读摘要；展示骑手、已选表情和评价正文。
Button|有填充或描边的明确操作按钮；执行当前区域的主要或次要任务。
AddButton|商品图片角落的圆形加购入口；只表达加入购物车这一操作。
QuantityStepper|一个商品的数量编辑控件；处理增加、减少、上限和数量为一时禁用减号。
Price|金额格式组件；统一币种、整数、小数、原价和促销价格的层级。
Tag|不可点击的短状态标签；标记促销、门槛或商品状态。
ChoiceChip|可点击的单项选择标签；选中状态由页面传入，适合短选项。
TextField|有名称、占位提示、输入值和校验反馈的单行输入项。
RadioRow|整行可点击的单选项；同组只能选择一个值。
Rating|五级评分控件；商品用圆角星形 stars，配送服务用表情 sentiment，可编辑也可只读。
ProductCard|Figma 定制商卡；grid 双列、full-width 通栏、category 分类单列三种布局，共用价格、供应商、促销和购买状态。
CouponCard|一张优惠券的权益、使用条件、有效期和可用状态。
ListRow|单条设置或信息入口；由标题、说明、前置图标和尾部动作组成。
Notice|留在内容中的提示文字；解释规则、校验失败或注意事项。
BottomSheet|从页面底部出现的任务面板；背景保留上下文，内容过长时内部滚动。
Text|按字阶和强调程度显示文本；不承载点击操作。
TextButton|无色块的文字操作；用于取消、完成、更多、重发、查看详情或新增入口。
ActionBar|底部操作按钮组；自带上下 12px 间距，支持等宽或按内容宽度，不包含 HomeIndicator。
PhoneField|手机号单行输入；可带区号入口，也可仅输入手机号。
OTPInput|四位或六位验证码的分格输入；只接收数字并限制长度。
Grid|把同层内容排成固定列数；不负责数据、选择或业务标题。
Divider|分隔相邻内容，或在分隔线上显示短分组文字。
Card|白色内容容器；把同一小任务的信息组合起来，放在灰色页面上形成分区。
Section|统一“标题＋右侧可选入口＋内容”关系的布局工具；不绘制白卡、商品或背景，可由普通布局替代，不是独立业务控件。
Image|单张有明确含义的图片；负责填充方式、比例和加载失败状态。
Avatar|人的头像；缺图时显示姓名首字母，不能用商品图代替。
Badge|附着在图标或入口上的数量或红点；不能当成独立任务按钮。
StatusBar|系统状态栏外观；由 Page 默认提供，不在每张业务卡里重复放置。
HomeIndicator|底部系统手势指示条；由 Page 或键盘持有且同屏只出现一次。
Page|页面底层容器；统一白／浅灰背景、状态栏、内容区和底部手势安全区。
AppShell|旧外壳兼容层；内部调用 Page，新组合页面直接使用 Page。
IconButton|只有图标的操作入口；必须提供可理解的无障碍名称和点击事件。
NavBar|页面标题栏；返回触点固定 44px，标题支持居中或左对齐，右侧可放文字操作。
Tabs|同一页面内的并列内容切换；等分或横向滚动，标题栏下直接放置。
SegmentedControl|少量互斥视图的胶囊切换；用于同层模式，不用于底部主导航。
TabBar|应用主栏目导航；首页、分类、购物车、账户四个入口保持相同宽度。
Sidebar|纯文字的纵向分类选择；有图片的商品分类应使用 CategoryLayout。
SearchBar|搜索输入原子项；包含搜索图标、placeholder、输入值和清除操作。
FormField|给自定义控件增加标签、必填标记和错误；不再嵌套另一个有标签输入项。
TextArea|多行输入；提供 placeholder、最大字数和实时计数。
Checkbox|独立的勾选项；适用于多选和全选，不用于同组唯一选项。
Switch|立即切换生效的二元设置；不用于提交前的条款同意。
SelectField|从有限文字选项中选一个值；不承担国家旗帜或商品分类结构。
Picker|打开底部选择面板的触发器；适合较长选项列表。
DatePicker|选择一个日期；配送时间段使用 DeliverySlotPicker。
Slider|在连续范围中选择数值；精确购买件数应使用 QuantityStepper。
Uploader|有限数量的图片／视频选择和移除；文件发送由业务层接入。
FilterBar|对结果集施加多个筛选条件；可重置，不取代主分类导航。
Carousel|在同一图片区切换图片或活动内容；带分页指示和当前页状态。
Collapse|折叠展开一段补充信息；主流程必读内容不默认藏起。
Progress|一个已知比例的进度；不能用它冒充订单的离散状态。
Steps|一个流程的步骤关系；物流状态外观使用 OrderStageProgress。
EmptyState|列表为空或搜索无结果时的说明与下一步；插画必须对应当前场景。
Result|简单任务完成后的通用反馈；订单状态页应组合订单领域组件。
Loading|短时间等待的加载提示；需要保留布局时使用 Skeleton。
Skeleton|加载前的结构占位；不显示虚构业务内容。
Toast|短暂、非阻塞的操作反馈；不承载必须点击确认的信息。
Dialog|页面中央的短确认框；只用于独立、简短、阻断式确认。
ActionSheet|底部的若干动作选择；适合拍照、选相册等命令，不承载长表单。
Popover|紧贴触发入口的少量解释或操作；不适合手机长列表。
ImageViewer|查看一张图片的大图覆盖层；不是普通商品卡图片。
SwipeAction|列表行侧滑后出现的操作区；删除行为由页面决定。
PullRefresh|规范补充的下拉手势容器，不来自某张原稿的独立控件；达到阈值松手后触发 onRefresh，并展示刷新中或失败反馈。
LoadMore|列表底部的加载、失败重试或到底提示。
StickyBar|滚动容器底部的操作栏；支持单按钮、双按钮和内容＋按钮，页面级固定位置由 Page.footer 管理。
Keyboard|本地演示的系统键盘外观；保留原稿结构，不能替代真实系统键盘。
Countdown|按秒变化的剩余时间显示；重发校验和业务计时由调用方决定。
Artwork|有限插画区域的素材图层；只用于已有营销插画、状态插画和图标组合。
ProductList|同一批商品卡的数据列表；统一网格／横向布局并回传商品操作。
ProductCollection|带标题和商品列表的推荐区；底层复用 ProductList。
ProductDetailHeader|详情页的商品图片、价格和标题摘要；不包含配送和推荐商品。
ProductSpecPicker|商品规格任务；包含商品摘要、必选项、加工方式、数量和确认动作。
CartItem|购物车或订单中的单个商品行；有数量、价格、赠品或失效状态。
CartGroup|同一购买分组的商品容器与全选；不把所有优惠活动硬塞成一个组。
CartSummaryBar|购物车底部总额和结算入口；汇总值从购物车状态传入。
InvalidProductsSheet|结算前的失效商品拦截面板；保留返回与继续两条路径。
AddressCard|一个收货地址的摘要；结算 delivery 变体带地址标题和轻地图背景。
AddressPicker|从地址簿选择一个收货地址；提供空态和新增地址入口。
AddressForm|编辑地址、联系人、手机号和标签的完整地址任务。
MapAddressPicker|地图选点任务；地图服务放入受限插槽，地点值由页面回传。
DeliverySlotPicker|选择配送日期和时间段；展示已满或不可选的时段。
DeliveryProgress|配送时间入口与小车进度条；不能替代订单物流状态条。
PaymentMethodRow|一种支付方式的单选行；统一标识尺寸、名称和选择状态。
BankCard|已绑定银行卡的摘要与管理操作；不是支付方式列表的大广告卡。
BankCardForm|新增银行卡输入任务；姓名、卡号、到期日、安全码及逐项校验。
PaymentMethodPicker|支付方式选择任务；在线支付与已绑定卡分组，底部提供新增卡文字入口。
CheckoutSummary|结算金额明细；展示商品、优惠、运费及总额，所有金额由页面传入。
OrderCard|订单摘要；列表变体用于订单列表，overview 变体用于状态页的订单号与商品缩略图。
OrderStatusHeader|订单当前状态的标题、说明与插画；待支付、失败、成功等保持独立数据。
OrderTimeline|订单事件的时间记录；仅在有时间节点的详情中使用。
OrderInfo|订单号、下单时间等标签值信息；可提供复制操作。
CancelReasonPicker|取消订单原因任务；包含单选原因、其他说明及确认。
ReviewCard|已经提交的商品评价；只读展示评分、细分结果、文字和照片。
ProductRatingPanel|一个商品的评价任务；商品摘要、星级、口味／新鲜度、文字和媒体属于同一领域结构。
RiderRatingPanel|配送服务评价；骑手、送达时间、五档表情评分、等级文字和补充意见。
ReviewEditor|只编辑商品评分、细分选项、文字和媒体；复用 ProductRatingPanel，提交按钮由页面操作栏提供。
MediaPicker|本地演示的媒体网格选择；相机、相册权限与真实媒体由服务接入。
PromoCodeForm|优惠码输入与兑换任务；包含清除、可提交状态、加载和错误反馈。
CampaignBanner|一个活动的图文入口；活动素材和文案由配置提供，不代替商品分类。
NewUserOffer|新人券包活动；展示总权益、券列表和查看详情入口。
AccountHeader|账户身份摘要；区分游客登录入口与已登录头像姓名。
SettingGroup|同组设置入口；管理标题、辅助值和图标，不执行真实设置请求。
SupportEntryGrid|客服问题类型入口；每项映射一个问题类别，不用于商城商品分类。
ChatMessage|客服聊天中的单条用户、客服或系统消息。
ChatComposer|客服聊天的输入与发送区；消息内容和发送状态由页面管理。
ServiceQueue|等待人工客服的排队状态；展示排位与取消等待。
ServiceTicketCard|一次客服工单摘要；展示状态、时间及继续或查看历史操作。
ServiceTicketDetail|一个客服问题的详情和联系入口；不混入购物订单的状态。
FAQList|常见问题的折叠问答列表；仅供查询，不收集表单。
BrandLogo|已有品牌标识；只在登录或首页品牌区域使用，不作为普通标题字体。
LegalText|带服务条款／隐私链接的合规文字；主文和链接共用同一字阶。
CountryPicker|手机号区号选择任务；国家、旗帜、区号保持一行的业务关系。
PhoneLoginForm|登录手机号任务；标题、区号、手机号、继续、协议和邮箱替代入口整体复用。
VerificationCodeField|验证码验证任务；包含接收号码、OTPInput、重发和更多方式。
ConsentSheet|授权告知任务；正文可滚动，接受与拒绝等宽，是否可关闭遵循授权流程。
OrderRemarks|配送备注任务；快捷标签、历史备注、多行补充和确认。
OrderSubmitBar|结算底部的金额与下单操作；可展示当前支付方式标识。
AccountDeletionNotice|注销前提及权益说明；使用正常文档流，避免文字重叠。
PromotionGroup|原稿购物车活动条与参与商品的分组；复用 CartPromotionBar 和商品行，不加虚构全选框、绿色提示卡或额外白卡。
UnavailableProductsGroup|购物车失效商品分组；展示失效原因、数量、展开和移除。
CartHeader|购物车标题、商品总数、收货地址入口和清空操作。
SearchHeader|独立搜索页面头部；返回、搜索输入、购物车入口共同组成。
SearchSuggestions|搜索历史或热门词区域；支持词条点击、历史清除和展开。
CategoryTile|首页一个商品分类入口；可用普通图文或营销首项变体。
CategoryGrid|首页商品分类入口网格；每个入口对应真实分类数据。
HomeHeader|商城首页头部；品牌、地址、配送承诺、辅助信息和搜索组成。
CategoryLayout|商品分类浏览任务；主分类、带图次分类和商品列表一起协同。
OrderStageProgress|订单离散进展的横向状态条；对应下单、备货、配送、签收。
OrderArrival|订单到达时间和当前允许的动作；待支付用 Repay，配送中可联系配送员。
OrderDeliveryDetails|订单配送信息分区；统一时间、收货地址和联系人标签值布局。
Icon|本地 SVG 图标库入口；必须选择与含义相符的名称和状态。
'''
defs=dict(line.split('|',1) for line in definitions.strip().splitlines())
assert set(defs)==set(x['name'] for x in catalog),(set(x['name'] for x in catalog)-set(defs),set(defs)-set(x['name'] for x in catalog))
group_when={'页面与布局':'开始搭建页面，或需要将同一组内容按层级排版时。','导航':'需要在同一层级切换内容或在应用主栏目之间跳转时。','操作':'用户能明确知道点击后会执行什么动作时。','输入与筛选':'用户需要填写、选择、筛选或提交一个值时。','展示':'已有内容需要统一格式、层级或媒介呈现时。','反馈':'当前操作正在进行、已完成、失败或需要确认时。','商品与购物车':'商品被浏览、选择规格、加入购物车或结算前检查时。','地址与配送':'设置收货地点、选择时段或展示配送信息时。','支付与订单':'选择付款方式、填写卡信息、查看金额或订单状态时。','评价与媒体':'对商品或配送评分、填写评价或选择评价媒体时。','优惠与账户':'展示权益、优惠券、账户身份或账户设置时。','客服与帮助':'查问题、等待客服、发送消息或查看工单时。','登录与授权':'输入手机号、验证身份或确认授权告知时。'}
special={
'Page':('先判断内容是否分卡片：分卡片选 gray；连续正文／表单选 white。状态栏和手势条自动跟随背景。','禁止在子业务组件中再放状态栏；禁止白色 ProductCard 放到白底页面而没有分隔。','<Page background="gray" header={<NavBar title="Checkout" />}><Card>...</Card></Page>'),
'TextButton':('取消、完成、Send again、More options、View details、Pay with a new card 等局部文字动作。','不要用普通 Text 假装可点击；主要提交用 Button；页面跳转应有明确名称。','<TextButton tone="brand" onClick={openCardForm}>＋ Pay with a new card</TextButton>'),
'BottomSheet':('从当前页面选择支付方式、地址、配送时段、商品规格，或确认提交评价。','不能擅自换成居中 Dialog；最大高度 88%，超出只滚内容，操作区保持可见。','<BottomSheet open={open} title="Payment Methods" onClose={close}><PaymentMethodPicker ... /></BottomSheet>'),
'Dialog':('独立、简短、阻断式确认，例如清空购物车。','原页面是底部面板的流程继续使用 BottomSheet；不要把长表单挤进居中框。','<Dialog open={open} title="Clear all items from the cart?" onClose={close} actions={actions}>...</Dialog>'),
'Tabs':('同一列表下切换 All Orders／Unpayment／Processing；3 项等分，较多或长标题才用 scroll。','直接接在标题栏下面，不能先套带内边距的 Card 或 Section；不要重复添加同类筛选。','<Tabs layout="equal" options={orderTabs} value={tab} onChange={setTab} />'),
'ProductRatingPanel':('评价一个商品；商品、总评分、Taste／Fresh 标签、评价文字与媒体属于同一模块。','细分维度使用 ChoiceChip，不能又放一组星星；已提交只读评价使用 ReviewCard。','<ProductRatingPanel product={product} rating={rating} onRating={setRating} dimensions={dimensions} onDimension={setDimension} expanded comment={comment} onComment={setComment} />'),
'PaymentMethodPicker':('结算页的 Payment Methods 底部面板；传在线方式、已绑卡和当前选择。','银行卡在这里是支付选项行，不是大尺寸 BankCard 展示卡；新增卡用文字动作。','<PaymentMethodPicker value={method} onChange={setMethod} cards={cards} onNewCard={openCardForm} />'),
'OrderStatusHeader':('状态页显示 Payment waiting／failed／successful／Delivering，并配来源插画。','不可用通用 Result 代替整个订单状态页；订单列表不要放大号状态头。','<OrderStatusHeader state="paid" title="Payment successful!" description={description} artwork={artwork} />'),
'TextField':('单行字段必须有真实标签与能说明格式的 placeholder，例如卡号 0000 0000 0000 0000。','placeholder 不能替代 label；已有值不能当作 placeholder；错误通过 error 告知。','<TextField label="Card number" placeholder="0000 0000 0000 0000" value={number} onChange={e => setNumber(e.target.value)} />'),
'Card':('同一任务的几项信息，放在 gray 页面上；header 可写“Payment Methods”等分区标题。','只为形成层级才加卡片，不要 Card 套 Card 叠加内边距；白底连续列表用 ListRow／Divider。','<Page background="gray"><Card header="Summary">...</Card></Page>'),
'Rating':('1～5 级的商品或配送总评分；传 onChange 可编辑，不传则只读。','商品用 stars、配送用 sentiment；不能换 Unicode 星字符，也不能用第二排星星展示 Taste 等细分选择。','<Rating value={rating} onChange={setRating} />'),
'NavBar':('每个页面顶部的标题和返回；普通标题居中，订单列表标题用 left。','返回触点 44×44，图标 24×24 且垂直居中；不要让绝对定位图标挂在零高度容器。','<NavBar title="Your Orders" align="left" onBack={back} right={<TextButton onClick={openSupport}>Support</TextButton>} />'),
'AppShell':('仅为旧代码保留兼容；新组合使用 Page。','不再给页面增加第二套背景与安全区规则。','<Page background="gray">...</Page>')}
special.update({'ProductCard':('商品摘要只使用 grid、full-width、category 三类。传入 product 数据与购买回调；多规格由 skus 驱动：双列通过底部抽屉选择，通栏与分类单列支持卡内展开。','不要使用旧 density 商卡，或把大图卡缩窄模拟分类单列。','<ProductCard product={product} variant="category" quantity={quantity} onAdd={add} onQuantity={setQuantity} />'),'CategoryLayout':('image-primary 为一级图文与二级文字；text-primary 为一级文字与二级图文。导航和结果区分别滚动，分类、筛选和排序均受控。','不要把整个分类框架当作一张商卡，或复制一套页面内商卡样式。','<CategoryLayout variant="image-primary" categories={categories} products={products} {...navigation} />'),'VoucherList':('展示当前券、历史券或无券状态；组件自己绘制灰色承载层，券卡保持白色。','不要在外层追加白色背景把券卡与承载层混在一起。','<VoucherList coupons={coupons} empty={empty} onUse={useVoucher} onDetails={showTerms} />'),'VoucherSuccessDialog':('兑换成功时使用固定浅绿渐变弹窗；showClose 默认 false，需要时显式打开。','不要通过普通 Dialog 临时拼一个不同背景的兑换成功弹窗，不要给操作区加分割线。','<VoucherSuccessDialog open={open} coupon={coupon} onClose={close} onUse={useVoucher} onDetails={showTerms} />'),'HomeVoucherBanner':('商城首页展示新客券营销入口，使用原稿 SAR100 和手部素材。','不要把领券列表 NewUserOffer 塞进首页头图位置。','<HomeVoucherBanner onClick={openVouchers} />'),'ProductCollection':('推荐 feeds 流，组件提供灰色背景、标题和白色商品卡。','不要去掉灰底，也不要把整个推荐区放进另一张白卡。','<ProductCollection products={products} onAdd={add} />'),'Result':('结果页用状态图标和标题说明任务结果；多条原因通过 details 传入白卡，单一操作使用 fullWidthAction。','不要把多条原因改写成居中段落，也不要将唯一操作缩成小胶囊。','<Result status="error" title="Account delete failed" details={reasons} fullWidthAction action={<Button variant="outline">OK</Button>} />'),'EmptyState':('整页无内容时使用 layout="page"，插画与文字作为整体，上下剩余留白为 1:2；局部空状态使用 inline。','不要用固定 padding 把整页空状态挤到导航下方。','<EmptyState layout="page" kind="messages" title="No records found" />'),'Page':('先选内容背景，再通过 chromeBackground 设置状态栏与导航统一的背景；渐变页使用透明头部承接页面背景。','不要由状态栏、导航、业务组件各自绘制不同的头部底色。','<Page background="gray" chromeBackground="#fff" header={<CartHeader ... />}>...</Page>'),'ChatMessage':('客服、欢迎语和排队提示使用白色气泡；用户消息使用绿色气泡白字，图片消息使用 media，接入提示使用 notice。','不要把欢迎语当作灰色居中说明，也不要给图片加彩色边框。','<ChatMessage side="user" text="There is a quality issue." />'),'ServiceQueue':('把队列位置和取消操作放在同一个客服气泡内，位置绿色强调，取消居中。','不要把提示与取消拆到气泡外。','<ServiceQueue position={4} onCancel={cancelQueue} />'),'QuantityStepper':('编辑商品数量，最小值为 1。数量为 1 时减号置灰并禁用，删除统一由左滑操作提供。','禁止通过步进器删除，也不以垃圾桶替代减号。','<QuantityStepper value={quantity} onChange={setQuantity} />'),'Toast':('深色半透明底、白色文字的短暂反馈，默认 3 秒自动关闭。','不要放关闭按钮；不要用 Toast 代替地址抽屉等真实操作。','<Toast open={open} message="Added to cart" onClose={close} />'),'ListGroup':('同一主题下有标题的一组列表入口；titlePlacement 支持 inside / outside。','不要为每行单独添加一层白卡。','<ListGroup title="Frequently Asked Questions" titlePlacement="inside" items={items} />'),'CartPromotionBar':('购物车活动标签、标题、说明和查看入口的独立模块。','不要替换为绿色 Notice 或通用标题。','<CartPromotionBar kind="gift" title="One gift voucher can use" actionLabel="View" onAction={view} />'),'StatusLabel':('常规字重的短文本状态，用 green / gray 两种颜色表达。','不要默认加粗或添加彩色背景。','<StatusLabel tone="green">Delivering</StatusLabel>'),'SwipeAction': ('购物车、地址等列表需要把删除等低频操作藏在侧滑区时。默认隐藏操作；向左滑超过 40px 展开，向右滑或按 Escape 收起。键盘聚焦内容后按 ← 也可展开。', '不要默认展示 Delete，也不要在内容旁固定放 Actions；删除由 onDelete 回调执行。', '<SwipeAction onDelete={remove}><ListRow title="Fresh broccoli" /></SwipeAction>'), 'Tag': ('绿色说明权益或门槛，灰色说明中性状态；红色 marketing 表示 Save 32% 等促销，红色 warning 表示即将过期等警告。', '红色不等于危险操作；删除按钮和可选筛选分别用 Button、ChoiceChip。', '<Tag tone="marketing">Save 32%</Tag>'), 'ChoiceChip': ('短选项选择。background="white" 适合灰色页面；background="gray" 适合白色卡片；选中都使用浅绿底与绿色边框。', '不要让默认示例自带选中状态；标签文字需要完整放进背景内。', '<ChoiceChip background="white" selected={selected} onClick={toggle}>Pack carefully</ChoiceChip>'), 'ListRow': ('设置项、配送时间等单条信息入口；左右各 15px 内距，说明在标题下方，值和箭头在右侧。', '不要把文字顶到容器边缘；多字段的领域信息应组合成业务组件。', '<ListRow title="Delivery time" trailing="Today" onClick={chooseTime} />'), 'ActionBar': ('底部的一项主操作或两个并列操作。默认等宽；layout="content" 按按钮内容宽度，水平 12px、上下 12px 内距。', '它只管理按钮排布，不包含手势条；HomeIndicator 由 Page 或弹层安全区单独管理。', '<ActionBar><Button variant="outline">Cancel</Button><Button>Confirm</Button></ActionBar>'), 'PhoneField': ('手机号登录或编辑电话；showCountry 控制是否带区号，onCountry 打开国家选择，value 只保存号码部分。', '这是有手机号格式约束的业务组件；普通数字输入使用 TextField。', '<PhoneField country="+966" value={phone} onChange={setPhone} onCountry={chooseCountry} />'), 'Section': ('需要“一个分区标题 + 一组内容”，且不想增加白底圆角时使用。例如首页“Recommended”标题下面放商品网格。action 可以放 View all。', 'Section 负责标题与内容的上下顺序，不绘制卡片；要白色圆角分组用 Card。不要为每条 ListRow 加 Section。', '<Section title="Recommended" action={<TextButton>View all</TextButton>}><ProductList products={products} onAdd={add} /></Section>'), 'Card': ('浅灰页面上的相关内容分组。例如 Summary 下有商品金额、优惠与配送费用。header 放分组标题，children 放主体，footer 放该卡自己的操作。', 'Card 会绘制白底、12px 圆角和内距，但不会自动生成商品或订单。商品买卖摘要用 ProductCard；只要标题和间距用 Section。', '<Card header="Summary"><ListRow title="Delivery" trailing="Free" /></Card>'), 'Badge': ('贴在图标右上角显示未读数或购物车数量。1 位数是 16×16 圆形，2 位数和 99+ 横向扩展为胶囊；红点为 7×7。', '不要把整个数字角标居中盖到图标上；零值隐藏，超过 99 显示 99+。', '<Badge count={12}><Icon name="cart-24" /></Badge>'), 'HomeIndicator': ('页面或底部面板的最下方手势安全区。组件背景透明，承接外层背景；有固定操作时 Page 的 footer 与其使用同一背景。', '不要在 ActionBar 内再放一个手势条；键盘已经有手势条时关闭 Page 自带条。', '<Page footer={<ActionBar><Button>Continue</Button></ActionBar>}>...</Page>'), 'Tabs': ('同一列表下切换内容。equal 表示少量栏目等分；scroll 表示栏目较多，可左右滑动，标签按实际文字宽度排列。示例“横向滚动”展示真实分类名称。', 'scroll 不是文字重叠或被挤到一起；不要把很多栏目强行等分到一屏。', '<Tabs layout="scroll" options={categories} value={tab} onChange={setTab} />'), 'SegmentedControl': ('少量互斥的同层模式切换；选中状态为浅绿胶囊，胶囊必须包住文字，两侧保留 15px。', '不要用它代替底部主导航；文字太长或选项很多时使用横向滚动 Tabs。', '<SegmentedControl options={options} value={mode} onChange={setMode} />'), 'FormField': ('给自定义输入控件加标签、必填标记与错误信息。占位文字写在 children 内的 input 或 textarea，描述要输入什么。', 'placeholder 不是 FormField 的可视字段；FormField 不会自动创建输入框。现成单行字段优先用 TextField。', '<FormField label="Delivery instructions"><input placeholder="e.g. Leave at the door" /></FormField>'), 'EmptyState': ('根据业务缺省原因选择 kind：orders、cart、search、network、network-alt、favorites、points、goods、content、waiting、load-error、server-error、closed、location、messages、vouchers、address、nothing。插画 130×130，标题与说明保持 12px 间隔，按钮距说明 24px。', '空列表、无结果和断网是不同原因，使用对应插画与可执行的下一步。不要统一替换成搜索图标。', '<EmptyState kind="search" title="No results found" description="Try another search term" />')})

special.update({'Section': ('需要重复使用“分区标题＋内容”关系时使用，如猜你喜欢标题与 ProductList；只管理层级和间距。', '原稿没有独立的 Section 业务控件。简单页面可直接使用布局容器；不要把它当作商卡或额外白卡。', '<Section title="Recommended products"><ProductList products={products} onAdd={add} /></Section>'), 'PullRefresh': ('滚动列表位于顶部时向下拖动，达到阈值后松手调用 onRefresh；键盘聚焦后 Enter 提供等价操作。', '它是规范补充的交互容器，不是 Refresh 文字按钮。数据请求在页面回调执行，不替换或清空列表内容。', '<PullRefresh onRefresh={reloadOrders}><OrderList /></PullRefresh>'), 'StickyBar': ('layout=single 放一个通栏按钮；equal 放两个等宽按钮；content 放金额等信息＋按钮。放入 Page.footer 时由页面固定，容器内可使用 sticky。', '不要把“吸底交互”和购买摘要混为一个组件；不要在栏内重复放手势条。', '<Page footer={<StickyBar layout="single"><Button>Continue</Button></StickyBar>}>...</Page>'), 'SelectField': ('有限文本选项的单选下拉；触发框、右侧图标、圆角面板采用基础尺寸，支持键盘上下键、Enter 和 Escape。', '不调用系统原生菜单冒充统一样式；不用于地址、国家等完整业务抽屉。', '<SelectField label="Sort products" options={sorts} value={sort} onChange={setSort} />'), 'SwipeAction': ('默认隐藏侧滑操作，左滑或键盘 ← 展示；actions 可以提供一、二、三个操作，执行后收起。', '普通操作使用 neutral，只有删除等破坏性操作使用 destructive。禁止把所有操作涂红或默认展开。', '<SwipeAction actions={[{label:"Save",onAction:save},{label:"Delete",tone:"destructive",onAction:remove}]}><ListRow title="Product" /></SwipeAction>'), 'CancelReasonPicker': ('订单取消使用原稿底部抽屉，内含七项原因单选、带 Switch 的放回购物车提示、吸底 Confirm 与安全区。', '不得改为独立全屏表单、添加原稿没有的文本区，或改动原因文案。', '<CancelReasonPicker open={open} onClose={close} options={reasons} value={reason} onChange={setReason} putBack={putBack} onPutBack={setPutBack} onConfirm={cancelOrder} />'), 'ReviewEditor': ('编辑一个商品的评分、细分项、评论和照片；所有编辑数据通过 onChange 回传。', '提交是页面级操作；不要在 ReviewEditor 内放 Submit，也不要制造重复评分行。', '<Page footer={<ActionBar><Button onClick={submit}>Submit</Button></ActionBar>}><ReviewEditor value={review} onChange={setReview} /></Page>'), 'AddressForm': ('地图摘要＋地址与联系人表单。surface=white 适合灰色页面、输入为灰色；surface=gray 适合白色页面、输入为白色。', '表单和承载背景不能同色；不要给字段和整个表单重复叠加灰色底。', '<Page background="gray"><AddressForm surface="white" value={address} onChange={setAddress} onSubmit={save} /></Page>'), 'PromoCodeForm': ('白色承载区域内展示灰色胶囊输入框、清除和 Add；有输入才能兑换，loading 禁止重复提交。', '不得让灰色输入框融进灰色预览或页面；保留明确的输入边界与焦点状态。', '<PromoCodeForm value={code} onChange={setCode} onSubmit={redeem} />'), 'PromotionGroup': ('按原稿组合 CartPromotionBar 与参与活动的 CartItem；赠品券、促销门槛与买赠保持各自结构。', '不增加全选框或绿色 Notice。促销说明与商品行分隔，买赠信息由商品标签和赠品行承载。', '<PromotionGroup kind="sale" title="3 For SAR 100" eligible={false} onAction={choose}>{items}</PromotionGroup>')})

rows={}
for x in catalog:
 n=x['name'];when,avoid,code=special.get(n,(group_when[x['category']],'只完成上述定义中的任务；路由、接口、金额计算和跨组件状态由组合页管理。',None))
 rows[n]={'definition':defs[n],'when':when,'avoid':avoid,'boundary':('只负责通用外观与交互，不读取商品、订单或账户接口。' if x['kind']=='basic' else '组合领域内的基础组件；接收真实业务数据及事件，不把整张旧页面包装进来。'),'steps':['选择与当前任务相符的组件及状态。','按接口传入数据，绑定 onChange／onAction 等事件。','放进 Page 对应背景中，再对照来源页面检查文案与状态。'],'example':code,'preview':'?component-preview='+n+'&variant=default'}
for x in catalog:x['rationale']=rows[x['name']]['definition']
(p/'component-catalog.json').write_text(json.dumps(catalog,ensure_ascii=False,indent=2))
(p/'component-usage.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2))
text='# 组件定义与使用手册 · v0.12\n\n基础组件处理通用外观与交互；业务组件处理一个有明确数据关系和动作的领域任务；PageAssembly 才负责跨领域组合与状态。业务组件不是整页模板，也不是随意放在一起的卡片。\n\n'
text+='## 从页面开始选择\n\n- 连续正文、登录、输入银行卡：Page white。\n- 分类、商品网格、购物车、结算、订单、评价、地址簿：Page gray，内容卡片 white。\n- 原稿是底部选择或确认面板：BottomSheet；独立短确认才用 Dialog。\n- 主要提交用 Button；取消、完成、查看、重发、新增入口用 TextButton。\n- 列表同层切换用 Tabs；应用主栏目用 TabBar；不要重复添加导航。\n\n'
rules=json.loads((p/'design-rules.json').read_text())
for x in catalog:
 u=rows[x['name']];text+='## '+x['name']+'\n\n**定义**：'+u['definition']+'\n\n**何时使用**：'+u['when']+'\n\n**不要这样用**：'+u['avoid']+'\n\n**职责边界**：'+u['boundary']+'\n\n'
 for rule in rules:
  if x['name'] in rule['components']:text+='**设计规则 · '+rule['title']+'**：'+rule['rule']+'\n\n'
 if u['example']:text+='```tsx\n'+u['example']+'\n```\n\n'
 text+='可运行示例：`http://127.0.0.1:5173/'+u['preview']+'`。所需参数见 COMPONENT-API.md 的同名条目。\n\n'
Path('COMPONENT-USAGE.md').write_text(text)
print('Wrote definitions and usage for',len(rows),'components')
