import type {CommerceProduct,CommerceCategory} from './commerce';
export const commerceProduct:CommerceProduct={id:'foodmax-broccoli',name:'Ningxia Mini Fresh Broccoli-Spain Broccoli-Spain',image:'/assets/5a9f6.png',weight:'1 bag (2kg/bag)',amount:'38.76',original:'56.6',currency:'$',unit:'bag',unitPrice:'$2.24/kg',promotion:'¥150 off over ¥1500',supplier:'foodmax',imageFit:'cover'};
export const commerceSKUs=[{id:'1-bag',label:'1 bag',amount:'38.76',unitPrice:'$19.8/kg'},{id:'5-bag',label:'5 bags',amount:'38.76',unitPrice:'$19.8/kg',promotion:'¥150 off over ¥1500'},{id:'10-bag',label:'10 bags',amount:'38.76',unitPrice:'$19.8/kg',promotion:'¥150 off over ¥1500'}];
export const commerceProducts:CommerceProduct[]=Array.from({length:6},(_,i)=>({...commerceProduct,id:'foodmax-'+i,name:'Ningxia Mini Fresh Broccoli-SpainBroccoliSpainBroccoliSpain',original:undefined,promotion:i===0?commerceProduct.promotion:undefined,supplierVariant:i===3?'comparison':'supplier',skus:i===1||i===2?commerceSKUs:undefined}));
export const primaryCategories:CommerceCategory[]=Array.from({length:8},(_,i)=>({id:'primary-'+i,label:'Seafood & aquatic',image:'/assets/3dab1.png',selectedImage:'/assets/70c5a.png'}));
export const pictureCategories:CommerceCategory[]=['69e8f.png','fc34f.png','550a1.png','281d7.png','d84c4.png','fc34f.png','550a1.png','69e8f.png','d84c4.png'].map((file,i)=>({id:'secondary-'+i,label:'New in',image:'/assets/'+file}));
export const textCategories:CommerceCategory[]=['Vegetables','Vegetarian','Premium poultry','hotpot','pork','meat','steak','chicken','mutton'].map((label,i)=>({id:'secondary-'+i,label}));
export const tertiaryCategories=['Local vegetables','Leafy greens','Potatoes / bacon','Tomatoes','Mushrooms'];

export const commerceGridProducts=commerceProducts.map(p=>({...p,name:commerceProduct.name,unitPrice:undefined}));
