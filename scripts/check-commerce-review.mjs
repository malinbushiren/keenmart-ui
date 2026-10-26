import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {createServer} from 'vite';
const server=await createServer({server:{middlewareMode:true,hmr:false,ws:false},appType:'custom'});
try {
 const C=await server.ssrLoadModule('/src/design-system/components.tsx');
 const B=await server.ssrLoadModule('/src/design-system/business.tsx');
 const commerce=await server.ssrLoadModule('/src/design-system/commerce.tsx');
 const catalog=JSON.parse(await fs.readFile('src/design-system/component-catalog.json','utf8'));
 assert(!catalog.some(c=>['Price','ProductDetailHeader'].includes(c.name)));
 const overlay=catalog.find(c=>c.name==='ProductStatusOverlay');assert.equal(overlay.states.length,12);
 const render=(component,props)=>renderToStaticMarkup(React.createElement(component,props));
 for(const size of ['regular','compact'])for(const locale of ['en','zh'])for(const status of ['sold-out','unavailable','not-for-sale']){
  const html=render(B.ProductStatusOverlay,{size,locale,status});
  assert(html.includes('cm-status-'+size));
  assert(html.includes((locale==='en'?{'sold-out':'Sold out',unavailable:'Unavailable','not-for-sale':'Not for Sale'}:{'sold-out':'售罄',unavailable:'已下架','not-for-sale':'非卖品'})[status]));
 }
 assert(render(B.ProductSupplierTag,{name:'foodmax'}).includes('foodmax'));
 assert(render(B.ProductSupplierTag,{name:'foodmax',variant:'comparison'}).includes('more supplier price'));
 let changed;
 const control=commerce.CommercePurchase({mode:'quantity',value:1,onAdd:()=>{},onQuantity:v=>changed=v});
 const step=C.QuantityStepper(control.props),minus=step.props.children[0];
 assert.equal(minus.props.disabled,false);minus.props.onClick();assert.equal(changed,0);
 assert.equal(commerce.CommercePurchase({value:0,onAdd:()=>{}}).type,C.AddButton);
 assert.equal(C.QuantityStepper({value:1,onChange:()=>{}}).props.children[0].props.disabled,true);
 assert.equal(C.QuantityStepper({value:4,max:4,min:0,onChange:()=>{}}).props.children[2].props.disabled,true);
 const product={id:'p',name:'Broccoli',image:'/assets/5a9f6.png',amount:'38.76',weight:'500–700g'};
 const common={products:[product],onAdd:()=>{}};
 assert(render(B.ProductList,{...common,layout:'grid'}).includes('cm-product-list-grid'));
 assert(render(B.ProductList,{...common,layout:'row'}).includes('cm-product-list-full-width'));
 for(const layout of ['grid','row'])assert(render(B.ProductCollection,{...common,layout}).includes('kc-product-collection'));
 let specChange;
 const groups=[{id:'cut',title:'Handling method',required:true,options:[{value:'slice',label:'Cut into slice'}]}];
 const panel=B.ProductSpecPicker({groups,values:{},onChange:v=>specChange=v,onConfirm:()=>{},product,quantity:1,onQuantity:()=>{},onClose:()=>{}});
 const group=panel.props.children[2][0],option=group.props.children[2].props.children[0];
 option.props.onClick();assert.deepEqual(specChange,{cut:'slice'});
 const specHTML=render(B.ProductSpecPicker,{groups,values:{cut:'slice'},onChange:()=>{},onConfirm:()=>{},product,quantity:2,onQuantity:()=>{},onClose:()=>{}});
 assert(specHTML.includes('Close options')&&specHTML.includes('Add to cart')&&specHTML.includes('kb-home'));
 const address={id:'a',street:'King Saud University',name:'Example',phone:'512345678',label:'home',detail:'Building 1'};
 const addressHTML=render(B.AddressForm,{value:address,onChange:()=>{},onSubmit:()=>{}});
 assert.equal((addressHTML.match(/ds-field-inside/g)||[]).length,2);
 console.log('PASS: 12 overlays, 2 supplier variants, commerce 1→0, cart min 1, max limit, both feeds layouts, specification selection, complete panel and inline address labels.');
} finally {await server.close();}
