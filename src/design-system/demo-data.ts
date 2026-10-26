import type {Product,Address,Order,Payment} from './business';import type {CouponData} from './components';import type {Option} from './foundations';
export const products:Product[]=[{id:'p1',name:'Ningxia Mini Fresh Broccoli-Spain',image:'/assets/5a9f6.png',amount:'38.76',weight:'500–700g'},{id:'p2',name:'Fresh pumpkin',image:'/assets/87766.png',amount:'35.56',original:'40.76',weight:'700g',badge:'Save 32%'}];
export const addresses:Address[]=[{id:'a1',label:'Home',street:'King Saud University Building one King',detail:'Building 1, 2nd floor',name:'Dingxiaodong',phone:'+86 16660654099'},{id:'a2',label:'Work',street:'264 Jasim Bin Hamad St',detail:'Building 2, ground floor',name:'KeenMart customer',phone:'+966 512345678'}];
export const order:Order={id:'24544377643333',state:'completed',products,total:'38.76',time:'09 Oct 10:30'};
export const options:Option[]=[{value:'a',label:'Recommended'},{value:'b',label:'Price'},{value:'c',label:'New in'}];
export const navigation:Option[]=[{value:'home',label:'Home',icon:'home-24'},{value:'category',label:'Category',icon:'category-24'},{value:'cart',label:'Cart',icon:'cart-24',badge:2},{value:'account',label:'Account',icon:'user-24'}];
export const navigationFive:Option[]=[...navigation.slice(0,3),{value:'order',label:'Order',badge:4},navigation[3]];
export const payments:Payment[]=[{id:'apple',label:'Apple Pay',logo:'/assets/34ac4.svg'},{id:'stc',label:'Stc pay',logo:'/assets/12b24.png'},{id:'card',label:'Pay with a new card',logo:'/assets/39f6f.svg',detail:'VISA · Mastercard · AMEX'}];
export const coupon:CouponData={title:'20%OFF',tags:['No minimum','Save up to SAR 2000'],description:'New users exclusive voucher',date:'Expires today at 23:59',count:6,expiryTone:'success'};
export const offerCoupons:CouponData[]=['50% OFF','Free delivery','30% OFF','SAR30','20% OFF','20% OFF','10% OFF'].map((title,i)=>({title,tags:[],description:i===1?'unlimited':'Up to SAR 20',date:''}));
export const faq=[{id:'login',title:'Registration issues',content:'Please check your mobile number and verification code.'},{id:'payment',title:'Payment and refunds',content:'You can check your payment status in order details.'}];
export const remarks=['Don’t knock the door','Don’t ring the bell','Don’t make phone calls','Please deliver as soon as possible'];
export const orderEvents=[{title:'Order placed',description:'09 Oct 10:30'},{title:'Preparing',description:'Your items are being packed'},{title:'Delivering',description:'Your rider is on the way'},{title:'Completed',description:'Delivered to your address'}];

export const campaignArtwork=['/assets/daa64.png','/assets/98979.png','/assets/bcd1e.png','/assets/98ac6.png'];
