# 组件接口参考

接口从实际 TypeScript 源码提取。具体状态和来源见组件目录；每个组件均在 `.km-system` 下使用。

## Button

基础组件 · 操作

```ts
React.ButtonHTMLAttributes<HTMLButtonElement>&{variant?:'primary'|'outline'|'text'|'promotion';size?:'regular'|'medium'|'small'|'compact';loading?:boolean}
```

## AddButton

业务组件 · 商品与购物车

```ts
{onClick?:()=>void;disabled?:boolean}
```

## QuantityStepper

基础组件 · 操作

```ts
{value:number;onChange:(v:number)=>void;max?:number;disabled?:boolean;variant?:'default'|'overlay'|'field'}
```

## Price

业务组件 · 商品与购物车

```ts
{amount:string;original?:string;promotion?:boolean;currency?:string;unit?:string}
```

## Tag

基础组件 · 展示

```ts
{children:React.ReactNode;tone?:'success'|'neutral'|'danger'|'marketing'|'warning';variant?:'outline'}
```

## ChoiceChip

基础组件 · 输入与筛选

```ts
{children:React.ReactNode;selected:boolean;onClick:()=>void;disabled?:boolean;background?:'white'|'gray'}
```

## TextField

基础组件 · 输入与筛选

```ts
React.InputHTMLAttributes<HTMLInputElement>&{label:string;error?:string;hint?:string}
```

## RadioRow

基础组件 · 输入与筛选

```ts
{label:string;description?:string;checked:boolean;onChange:()=>void;name:string;value:string;disabled?:boolean}
```

## Rating

基础组件 · 输入与筛选

```ts
{value:number;onChange?:(value:number)=>void;size?:16|20|24|28;variant?:'stars'|'sentiment'}
```

## CouponCard

业务组件 · 优惠与账户

```ts
{coupon:CouponData;onUse?:()=>void;onDetails:()=>void}
```

## ListRow

基础组件 · 展示

```ts
{title:string;description?:string;trailing?:React.ReactNode;leading?:React.ReactNode;onClick?:()=>void;disabled?:boolean;danger?:boolean}
```

## Notice

基础组件 · 反馈

```ts
{children:React.ReactNode}
```

## BottomSheet

基础组件 · 反馈

```ts
{open:boolean;title:string;children:React.ReactNode;onClose:()=>void;footer?:React.ReactNode;showClose?:boolean;variant?:'default'|'selection'|'consent'|'country'|'product'|'review-confirm'|'payment'|'address-conflict'|'support-orders'|'cancel-reason';maxHeight?:number;titleScrollable?:boolean}
```

## StatusLabel

基础组件 · 展示

```ts
{children:React.ReactNode;tone?:'green'|'gray'}
```

## Text

基础组件 · 展示

```ts
{as?:'span'|'p'|'h1'|'h2'|'h3';tone?:'primary'|'secondary'|'danger'|'success';size?:'caption'|'body'|'control'|'title'|'heading';children:React.ReactNode}
```

## TextButton

基础组件 · 操作

```ts
{children:React.ReactNode;onClick?:()=>void;disabled?:boolean;tone?:'primary'|'brand'|'danger';icon?:React.ReactNode}
```

## ActionBar

基础组件 · 页面与布局

```ts
{children:React.ReactNode;safeArea?:boolean;layout?:'equal'|'content'}
```

## OTPInput

基础组件 · 输入与筛选

```ts
{value:string;onChange:(v:string)=>void;length?:4|6;error?:string;disabled?:boolean;focused?:boolean;onFocus?:()=>void}
```

## Grid

基础组件 · 页面与布局

```ts
{children:React.ReactNode;columns?:1|2|3|4}
```

## Divider

基础组件 · 页面与布局

```ts
{label?:string}
```

## Card

基础组件 · 页面与布局

```ts
{children:React.ReactNode;header?:React.ReactNode;footer?:React.ReactNode;className?:string}
```

## Section

基础组件 · 页面与布局

```ts
{title:string;action?:React.ReactNode;children:React.ReactNode}
```

## Image

基础组件 · 展示

```ts
{src:string;alt:string;fit?:'contain'|'cover';ratio?:string;onClick?:()=>void}
```

## Avatar

基础组件 · 展示

```ts
{src?:string;name:string;size?:24|40|64|72}
```

## Badge

基础组件 · 展示

```ts
{count?:number;dot?:boolean;children?:React.ReactNode}
```

## StatusBar

基础组件 · 页面与布局

```ts
{time?:string;inverse?:boolean}
```

## HomeIndicator

基础组件 · 页面与布局

```ts
No props
```

## Page

基础组件 · 页面与布局

```ts
{children:React.ReactNode;header?:React.ReactNode;footer?:React.ReactNode;chromeBackground?:string;background?:'white'|'gray';height?:number;showStatusBar?:boolean;showHomeIndicator?:boolean;inverse?:boolean;className?:string}
```

## AppShell

基础组件 · 页面与布局

```ts
{children:React.ReactNode;header?:React.ReactNode;footer?:React.ReactNode;inverse?:boolean;surface?:'default'|'plain'|'account'|'home';height?:number;showStatusBar?:boolean;showHomeIndicator?:boolean}
```

## IconButton

基础组件 · 操作

```ts
{name:IconName;label:string;onClick?:()=>void;disabled?:boolean}
```

## NavBar

基础组件 · 导航

```ts
{title:string;onBack?:()=>void;right?:React.ReactNode;left?:React.ReactNode;align?:'center'|'left'}
```

## Tabs

基础组件 · 导航

```ts
{options:Option[];value:string;onChange:(v:string)=>void;variant?:'line'|'pill';layout?:'equal'|'scroll'}
```

## SegmentedControl

基础组件 · 导航

```ts
Omit<React.ComponentProps<typeof Tabs>,'variant'>
```

## TabBar

基础组件 · 导航

```ts
{options:Option[];value:string;onChange:(v:string)=>void}
```

## Sidebar

基础组件 · 导航

```ts
{options:Option[];value:string;onChange:(v:string)=>void}
```

## SearchBar

基础组件 · 输入与筛选

```ts
{surface?:'gray'|'outline'|'white';onFocus?:()=>void;value:string;onChange:(v:string)=>void;onSubmit?:(v:string)=>void;placeholder?:string;disabled?:boolean;showSubmit?:boolean;submitIcon?:boolean}
```

## FormField

基础组件 · 输入与筛选

```ts
{label:string;required?:boolean;error?:string;children:React.ReactNode}
```

## TextArea

基础组件 · 输入与筛选

```ts
{label:string;value:string;onChange:(v:string)=>void;maxLength?:number;disabled?:boolean;error?:string;placeholder?:string;hideLabel?:boolean}
```

## Checkbox

基础组件 · 输入与筛选

```ts
{label:string;checked:boolean;onChange:(v:boolean)=>void;disabled?:boolean}
```

## Switch

基础组件 · 输入与筛选

```ts
{label:string;checked:boolean;onChange:(v:boolean)=>void;disabled?:boolean}
```

## SelectField

基础组件 · 输入与筛选

```ts
{label:string;options:Option[];value:string;onChange:(v:string)=>void;disabled?:boolean}
```

## Picker

基础组件 · 输入与筛选

```ts
React.ComponentProps<typeof SelectField>
```

## DatePicker

基础组件 · 输入与筛选

```ts
{label:string;value:string;onChange:(v:string)=>void;min?:string;disabled?:boolean}
```

## Slider

基础组件 · 输入与筛选

```ts
{label:string;value:number;onChange:(v:number)=>void;min?:number;max?:number;disabled?:boolean}
```

## Uploader

基础组件 · 输入与筛选

```ts
{files:File[];onChange:(f:File[])=>void;max?:number;disabled?:boolean}
```

## FilterBar

基础组件 · 输入与筛选

```ts
{options:Option[];value:string[];onChange:(v:string[])=>void;onReset?:()=>void}
```

## Carousel

基础组件 · 展示

```ts
{images?:{src:string;alt:string}[];slides?:React.ReactNode[];initialIndex?:number;label?:string}
```

## Collapse

基础组件 · 展示

```ts
{items:{id:string;title:string;content:React.ReactNode}[]}
```

## Progress

基础组件 · 展示

```ts
{value:number;label?:string}
```

## Steps

基础组件 · 展示

```ts
{items:{title:string;description?:string}[];current?:number}
```

## EmptyState

基础组件 · 反馈

```ts
{title?:string;description?:string;action?:React.ReactNode;illustration?:React.ReactNode;kind?:EmptyIllustrationKind;layout?:'inline'|'page'}
```

## Result

基础组件 · 反馈

```ts
{status?:'success'|'error'|'warning';title:string;description?:string;details?:string[];action?:React.ReactNode;fullWidthAction?:boolean}
```

## Loading

基础组件 · 反馈

```ts
{label?:string}
```

## Skeleton

基础组件 · 反馈

```ts
{rows?:number}
```

## Toast

基础组件 · 反馈

```ts
{open:boolean;message:string;onClose:()=>void;duration?:number}
```

## Dialog

基础组件 · 反馈

```ts
{open:boolean;title:string;children:React.ReactNode;onClose:()=>void;actions?:React.ReactNode;variant?:'default'|'poster'|'voucher-success';showClose?:boolean}
```

## ActionSheet

基础组件 · 反馈

```ts
{open:boolean;options:Option[];onSelect:(v:string)=>void;onClose:()=>void}
```

## Popover

基础组件 · 反馈

```ts
{label:string;children:React.ReactNode}
```

## ImageViewer

基础组件 · 反馈

```ts
{open:boolean;src:string;alt:string;onClose:()=>void}
```

## SwipeAction

基础组件 · 反馈

```ts
{children:React.ReactNode;onDelete?:()=>void;actions?:{label:string;onAction:()=>void;tone?:'neutral'|'destructive'}[];disabled?:boolean}
```

## PullRefresh

基础组件 · 反馈

```ts
{children:React.ReactNode;onRefresh:()=>Promise<void>}
```

## LoadMore

基础组件 · 反馈

```ts
{loading?:boolean;hasMore?:boolean;onLoad:()=>void;error?:boolean}
```

## StickyBar

基础组件 · 页面与布局

```ts
{children:React.ReactNode;layout?:'single'|'equal'|'content'}
```

## Keyboard

基础组件 · 输入与筛选

```ts
{allowDecimal?:boolean;type?:'numeric'|'alphabetic';value:string;onChange:(v:string)=>void;onDone:()=>void;maxLength?:number;disabled?:boolean}
```

## Countdown

基础组件 · 展示

```ts
{seconds:number;onComplete?:()=>void}
```

## Artwork

基础组件 · 展示

```ts
{layers:ArtworkLayer[];label:string;ratio?:string}
```

## ListGroup

基础组件 · 页面与布局

```ts
{title:string;titlePlacement?:'inside'|'outside';items:{id:string;title:string;description?:string;leading?:React.ReactNode;trailing?:React.ReactNode;onClick?:()=>void;disabled?:boolean}[]}
```

## ProductCard

业务组件 · 商品与购物车

```ts
type ProductCardVariant = 'grid'|'full-width'|'category';
type ProductAvailability = 'available'|'sold-out'|'unavailable'|'not-for-sale';
type ProductSKU = {id:string;label:string;amount:string;unitPrice?:string;promotion?:string;max?:number};
type CommerceProduct = Product&{currency?:string;unit?:string;unitPrice?:string;promotion?:string;supplier?:string;orderBy?:string;availability?:ProductAvailability;purchase?:'add'|'quantity'|'count'|'notify'|'similar'|'none';max?:number;skus?:ProductSKU[]};

{product:CommerceProduct;variant?:ProductCardVariant;quantity?:number;onAdd:()=>void;onQuantity?:(value:number)=>void;onSKUQuantity?:(id:string,value:number)=>void;skuQuantities?:Record<string,number>;initialExpanded?:boolean;onNotify?:()=>void;onSimilar?:()=>void;onSupplier?:()=>void;locale?:'en'|'zh'}
```

## ProductPriceGroup

业务组件 · 商品与购物车

```ts
{amount:string;original?:string;currency?:string;unit?:string;unitPrice?:string;promotion?:boolean;originalPlacement?:'inline'|'below'}
```

## ProductPurchaseControl

业务组件 · 商品与购物车

```ts
{mode?:'add'|'quantity'|'count'|'notify'|'similar'|'specs'|'none';value?:number;max?:number;expanded?:boolean;onAdd:()=>void;onQuantity?:(v:number)=>void;onToggle?:()=>void;onNotify?:()=>void;onSimilar?:()=>void}
```

## ProductStatusOverlay

业务组件 · 商品与购物车

```ts
{status:ProductAvailability;locale?:'en'|'zh'}
```

## ProductSupplierTag

业务组件 · 商品与购物车

```ts
{name:string;onClick?:()=>void}
```

## ProductList

业务组件 · 商品与购物车

```ts
{products:CommerceProduct[];onAdd:(id:string)=>void;onQuantity?:(id:string,value:number)=>void;onRemove?:(id:string)=>void;layout?:'grid'|'row';density?:'regular'|'compact'}
```

## ProductCollection

业务组件 · 商品与购物车

```ts
{products:CommerceProduct[];onAdd:(id:string)=>void;onQuantity?:(id:string,value:number)=>void;onRemove?:(id:string)=>void;layout?:'grid'|'row';title?:string;density?:'regular'|'compact'}
```

## ProductDetailHeader

业务组件 · 商品与购物车

```ts
{product:Product;images:{src:string;alt:string}[];onAdd:()=>void}
```

## ProductSpecPicker

业务组件 · 商品与购物车

```ts
{groups:{id:string;title:string;description?:string;required?:boolean;options:Option[]}[];values:Record<string,string>;onChange:(v:Record<string,string>)=>void;onConfirm:()=>void;product?:Product;quantity?:number;onQuantity?:(n:number)=>void}
```

## CartItem

业务组件 · 商品与购物车

```ts
{product:Product;quantity:number;selected:boolean;onSelect:(v:boolean)=>void;onQuantity:(v:number)=>void;onRemove:()=>void;readOnly?:boolean;selectable?:boolean}
```

## CartGroup

业务组件 · 商品与购物车

```ts
{title:string;children:React.ReactNode;selected:boolean;onSelect:(v:boolean)=>void}
```

## CartSummaryBar

业务组件 · 商品与购物车

```ts
{total:string;selectedCount:number;onCheckout:()=>void;disabled?:boolean}
```

## InvalidProductsSheet

业务组件 · 商品与购物车

```ts
{open:boolean;products:Product[];onClose:()=>void;onContinue:()=>void}
```

## AddressCard

业务组件 · 地址与配送

```ts
{address:Address;selected?:boolean;onSelect?:()=>void;onEdit?:()=>void;variant?:'default'|'delivery'}
```

## AddressPicker

业务组件 · 地址与配送

```ts
{addresses:Address[];value:string;onChange:(v:string)=>void;onAdd:()=>void}
```

## AddressForm

业务组件 · 地址与配送

```ts
{surface?:'white'|'gray';value:Address;onChange:(v:Address)=>void;onSubmit:()=>void;error?:string;disabled?:boolean;onRemove?:()=>void;labelConflict?:boolean;onResolveLabel?:(use:boolean)=>void}
```

## MapAddressPicker

业务组件 · 地址与配送

```ts
{onSearchFocus?:()=>void;map:React.ReactNode;query:string;onQuery:(v:string)=>void;address?:Address;onConfirm:()=>void;results?:{id:string;title:string}[];onSelect?:(id:string)=>void}
```

## DeliverySlotPicker

业务组件 · 地址与配送

```ts
{days:Option[];day:string;onDay:(v:string)=>void;slots:Option[];value:string;onChange:(v:string)=>void}
```

## DeliveryProgress

业务组件 · 地址与配送

```ts
{time:string;progress:number;description?:string;onSelect?:()=>void}
```

## PaymentMethodRow

业务组件 · 支付与订单

```ts
{method:Payment;selected:boolean;onSelect:()=>void;groupName?:string}
```

## BankCard

业务组件 · 支付与订单

```ts
{brand:string;last4:string;expiry:string;holder?:string;selected?:boolean;onSelect?:()=>void;onDelete?:()=>void;unavailable?:boolean}
```

## BankCardForm

业务组件 · 支付与订单

```ts
{value:CardData;onFieldFocus?:(field:keyof CardData)=>void;onChange:(v:CardData)=>void;onSubmit:()=>void;error?:string;errors?:Partial<Record<keyof CardData,string>>;total?:string}
```

## PaymentMethodPicker

业务组件 · 支付与订单

```ts
{value:string;onChange:(v:string)=>void;cards?:{id:string;brand:string;last4:string;logo:string}[];onNewCard:()=>void}
```

## CheckoutSummary

业务组件 · 支付与订单

```ts
{rows:{label:string;value:string;original?:string;discount?:boolean}[];total:string}
```

## OrderCard

业务组件 · 支付与订单

```ts
{order:Order;onAction:(action:string)=>void;actions?:string[];variant?:'list'|'overview';itemCount?:number}
```

## OrderStatusHeader

业务组件 · 支付与订单

```ts
{state:OrderState;description?:string;countdown?:string;title?:string;artwork?:ArtworkLayer[]}
```

## OrderTimeline

业务组件 · 支付与订单

```ts
{events:{title:string;description?:string}[];current:number}
```

## OrderInfo

业务组件 · 支付与订单

```ts
{rows:{label:string;value:string;copyable?:boolean}[];onCopy?:(v:string)=>void}
```

## CancelReasonPicker

业务组件 · 支付与订单

```ts
{options:Option[];value:string;onChange:(v:string)=>void;onConfirm:()=>void;open:boolean;onClose:()=>void;putBack?:boolean;onPutBack?:(v:boolean)=>void;error?:string}
```

## ReviewCard

业务组件 · 评价与媒体

```ts
{product:Product;rating:number;comment:string;images:string[];onView?:(src:string)=>void}
```

## ProductRatingPanel

业务组件 · 评价与媒体

```ts
{product:Product;rating:number;onRating:(v:number)=>void;dimensions:Record<string,number>;onDimension:(name:string,value:number)=>void;expanded?:boolean;onToggle?:()=>void;comment?:string;onComment?:(v:string)=>void;files?:File[];onFiles?:(v:File[])=>void;maxLength?:number}
```

## RiderRatingPanel

业务组件 · 评价与媒体

```ts
{name:string;rating:number;onChange:(v:number)=>void;comment?:string;onComment?:(v:string)=>void}
```

## ReviewEditor

业务组件 · 评价与媒体

```ts
{value:ReviewData;onChange:(v:ReviewData)=>void;error?:string;tagOptions?:string[]}
```

## MediaPicker

业务组件 · 评价与媒体

```ts
{items:{id:string;src:string}[];selected:string[];onChange:(v:string[])=>void;max?:number;onDone:()=>void;onCamera:()=>void}
```

## PromoCodeForm

业务组件 · 优惠与账户

```ts
{value:string;onChange:(v:string)=>void;onSubmit:()=>void;onFocus?:()=>void;error?:string;loading?:boolean}
```

## CampaignBanner

业务组件 · 优惠与账户

```ts
{variant?:'default'|'source';src?:string;alt:string;onClick:()=>void;ratio?:string;title?:string;subtitle?:string;actionLabel?:string;artwork?:React.ReactNode;background?:string}
```

## NewUserOffer

业务组件 · 优惠与账户

```ts
{amount:string;coupons:CouponData[];onUse:()=>void;onDetails:()=>void;header?:React.ReactNode}
```

## AccountHeader

业务组件 · 优惠与账户

```ts
{name?:string;phone?:string;avatarSrc?:string;variant?:'card'|'profile';onLogin:()=>void}
```

## SettingGroup

业务组件 · 优惠与账户

```ts
{items:{id:string;title:string;description?:string;value?:React.ReactNode;icon?:IconName;leading?:React.ReactNode}[];onAction:(v:string)=>void}
```

## SupportEntryGrid

业务组件 · 客服与帮助

```ts
{entries:Option[];onSelect:(v:string)=>void}
```

## ChatMessage

业务组件 · 客服与帮助

```ts
{side?:'agent'|'user'|'system';text?:string;time?:string;children?:React.ReactNode;variant?:'bubble'|'notice'|'media'}
```

## ChatComposer

业务组件 · 客服与帮助

```ts
{value:string;onChange:(v:string)=>void;onSend:()=>void;onAttach:()=>void;disabled?:boolean;expanded?:boolean}
```

## ServiceQueue

业务组件 · 客服与帮助

```ts
{position:number;onCancel:()=>void}
```

## ServiceTicketCard

业务组件 · 客服与帮助

```ts
{id:string;time:string;status:'ongoing'|'ended';onContinue:()=>void;onHistory:()=>void}
```

## ServiceTicketDetail

业务组件 · 客服与帮助

```ts
{question:string;answer:string;onContact:()=>void;onLink?:()=>void}
```

## FAQList

业务组件 · 客服与帮助

```ts
{items:{id:string;title:string;content:React.ReactNode}[]}
```

## BrandLogo

业务组件 · 登录与授权

```ts
{variant?:'full'|'short'}
```

## LegalText

业务组件 · 登录与授权

```ts
{text:string;onLink?:(label:string)=>void}
```

## CountryPicker

业务组件 · 登录与授权

```ts
{open:boolean;onClose:()=>void;value:string;onChange:(value:string)=>void}
```

## PhoneLoginForm

业务组件 · 登录与授权

```ts
{country:string;phone:string;onCountry:(v:string)=>void;onPhone:(v:string)=>void;onSubmit:()=>void;error?:string;loading?:boolean;showCountry?:boolean;initialCountryOpen?:boolean;onEmail?:()=>void;onPolicy?:(title:string)=>void;onInputFocus?:()=>void;onCountryOpen?:()=>void;focused?:boolean}
```

## VerificationCodeField

业务组件 · 登录与授权

```ts
{value:string;onChange:(v:string)=>void;length?:4|6;error?:string;onResend:()=>void;remaining?:number;phone?:string;onMore?:()=>void;onFocus?:()=>void}
```

## ConsentSheet

业务组件 · 登录与授权

```ts
{open:boolean;children?:React.ReactNode;onAccept:()=>void;onDecline:()=>void;onClose:()=>void;longForm?:boolean}
```

## OrderRemarks

业务组件 · 支付与订单

```ts
{options:string[];selected:string[];onSelect:(v:string[])=>void;history:string[];note:string;onNote:(v:string)=>void;onConfirm:()=>void}
```

## OrderSubmitBar

业务组件 · 支付与订单

```ts
{total:string;label?:string;onSubmit:()=>void;disabled?:boolean;loading?:boolean;variant?:'default'|'integrated';paymentLogo?:string}
```

## AccountDeletionNotice

业务组件 · 优惠与账户

```ts
{conditions:string[];consequences:string[];onApply:()=>void}
```

## PromotionGroup

业务组件 · 商品与购物车

```ts
{kind?:'sale'|'gift'|'buy-get';title:string;eligible:boolean;remainingCount?:number;discount?:string;selected?:boolean;onSelect?:(v:boolean)=>void;onAction:()=>void;children:React.ReactNode}
```

## UnavailableProductsGroup

业务组件 · 商品与购物车

```ts
{products:Product[];expanded:boolean;onExpand:()=>void;onRemoveAll:()=>void;onRemove:(id:string)=>void;totalCount?:number}
```

## CartHeader

业务组件 · 导航

```ts
{count:number;address?:string;onAddress?:()=>void;onClear:()=>void}
```

## SearchHeader

业务组件 · 导航

```ts
{value:string;onChange:(v:string)=>void;onSearch:(v:string)=>void;onBack:()=>void;onCart:()=>void;cartCount?:number}
```

## SearchSuggestions

业务组件 · 输入与筛选

```ts
{title:string;items:string[];onSelect:(v:string)=>void;onClear?:()=>void;expandable?:boolean}
```

## CategoryTile

业务组件 · 导航

```ts
{item:CategoryItem;onSelect:()=>void}
```

## CategoryGrid

业务组件 · 导航

```ts
{items:CategoryItem[];onSelect:(id:string)=>void}
```

## HomeHeader

业务组件 · 导航

```ts
{address:string;delivery:string;information:string;query:string;onQuery:(v:string)=>void;onAddress:()=>void;onSearch?:()=>void}
```

## CategoryLayout

业务组件 · 导航

```ts
type ProductAvailability = 'available'|'sold-out'|'unavailable'|'not-for-sale';
type ProductSKU = {id:string;label:string;amount:string;unitPrice?:string;promotion?:string;max?:number};
type CommerceProduct = Product&{currency?:string;unit?:string;unitPrice?:string;promotion?:string;supplier?:string;orderBy?:string;availability?:ProductAvailability;purchase?:'add'|'quantity'|'count'|'notify'|'similar'|'none';max?:number;skus?:ProductSKU[]};
type CommerceCategory = {id:string;label:string;image?:string;selectedImage?:string;layers?:ArtworkLayer[]};

{variant?:'image-primary'|'text-primary';title:string;categories:CommerceCategory[];selected:string;onSelect:(id:string)=>void;products:CommerceProduct[];onAdd:(id:string)=>void;onQuantity?:(id:string,value:number)=>void;primaryCategories?:CommerceCategory[];primaryOptions:string[];primaryValue?:string;onPrimaryChange:(value:string)=>void;expanded?:boolean;onExpand:()=>void;query?:string;onQuery?:(v:string)=>void;onSearch?:()=>void;tertiaryOptions?:string[];tertiaryValue?:string;onTertiaryChange?:(v:string)=>void;sort?:'default'|'sales'|'price';onSort?:(sort:'default'|'sales'|'price')=>void}
```

## OrderStageProgress

业务组件 · 支付与订单

```ts
{current?:number}
```

## OrderArrival

业务组件 · 支付与订单

```ts
{time:string;actions?:string[];onAction:(action:string)=>void}
```

## OrderDeliveryDetails

业务组件 · 支付与订单

```ts
{time:string;address:Address}
```

## PhoneField

业务组件 · 登录与授权

```ts
{value:string;onChange:(v:string)=>void;country?:string;showCountry?:boolean;onCountry?:()=>void;placeholder?:string;disabled?:boolean;error?:string;focused?:boolean;onFocus?:()=>void}
```

## SupportOrderCard

业务组件 · 客服与帮助

```ts
{status?:string;count?:number;time?:string;onSelect?:()=>void}
```

## RiderReviewCard

业务组件 · 评价与媒体

```ts
{comment:string;rating?:number;name?:string}
```

## CartPromotionBar

业务组件 · 商品与购物车

```ts
{kind?:'sale'|'gift';title:string;description?:string;actionLabel?:string;onAction?:()=>void;celebrate?:boolean}
```

## VoucherList

业务组件 · 优惠与账户

```ts
{coupons:CouponData[];onUse:()=>void;onDetails:(index:number)=>void;empty?:boolean}
```

## VoucherSuccessDialog

业务组件 · 优惠与账户

```ts
{open:boolean;coupon:CouponData;onClose:()=>void;onUse:()=>void;onDetails:()=>void;showClose?:boolean}
```

## HomeVoucherBanner

业务组件 · 优惠与账户

```ts
{onClick:()=>void}
```

## Icon

基础组件 · 展示

```ts
{name:IconName;label?:string;className?:string}
```

