import {createServer} from 'vite';
import React from 'react';
import {renderToStaticMarkup as render} from 'react-dom/server';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const server=await createServer({server:{middlewareMode:true,hmr:false,ws:false,watch:null},appType:'custom'});
try{
 const F=await server.ssrLoadModule('/src/design-system/foundations.tsx');
 const B=await server.ssrLoadModule('/src/design-system/business.tsx');
 const {ComponentExample}=await server.ssrLoadModule('/src/design-system/ComponentExample.tsx');
 const {PageAssembly}=await server.ssrLoadModule('/src/design-system/PageAssembly.tsx');
 const {cancelReasons}=await server.ssrLoadModule('/src/design-system/cancel-reasons.ts');
 const catalog=JSON.parse(await fs.readFile('src/design-system/component-catalog.json','utf8'));
 const rules=JSON.parse(await fs.readFile('src/design-system/design-rules.json','utf8'));
 const recipes=JSON.parse(await fs.readFile('src/design-system/page-recipes.json','utf8'));
 const selectedNames=['SelectField','Section','Checkbox','ActionSheet','SwipeAction','PullRefresh','StickyBar','ProductCard','ProductList','ProductCollection','CartGroup','AddressForm','OrderCard','ReviewEditor','PromoCodeForm','OrderRemarks','PromotionGroup','CategoryLayout','CancelReasonPicker'];
 const rendered=[],assets=new Set(),checks=[];
 function html(Component,props){const s=render(React.createElement(Component,props));for(const match of s.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)"/g))assets.add(match[1]);return s}
 for(const name of selectedNames)for(const variant of catalog.find(c=>c.name===name).states){html(ComponentExample,{name,variant});rendered.push({name,variant})}
 function check(name,test){assert(test,name);checks.push(name)}
 const no=()=>{},element=React.createElement('span',null,'Row');
 const select=html(F.SelectField,{label:'Sort',options:[{value:'a',label:'Price'}],value:'a',onChange:no});check('SelectField uses styled combobox, not native select',select.includes('role="combobox"')&&!select.includes('<select'));
 const sheet=html(F.ActionSheet,{open:false,options:[{value:'camera',label:'Take a photo'},{value:'library',label:'Choose from library'}],onClose:no,onSelect:no});check('ActionSheet owns a vertical list container',sheet.includes('kb-action-sheet-list'));
 const swipe=html(F.SwipeAction,{children:element,actions:[{label:'Save',onAction:no},{label:'More',onAction:no},{label:'Delete',tone:'destructive',onAction:no}]});check('Three actions are hidden by default; only deletion is destructive',swipe.includes('--swipe-width:228px')&&swipe.includes('aria-hidden="true"')&&(swipe.match(/class="is-destructive"/g)||[]).length===1);
 const pull=html(F.PullRefresh,{children:element,onRefresh:async()=>{}});check('PullRefresh describes a gesture and has no fake Refresh button',pull.includes('Pull down to refresh')&&!pull.includes('<button'));
 const cancel=html(B.CancelReasonPicker,{open:false,onClose:no,options:cancelReasons,value:'',onChange:no,onConfirm:no,putBack:false,onPutBack:no});check('Cancellation is a sheet with seven radios, switch, footer confirmation',cancel.includes('ds-sheet-cancel-reason')&&(cancel.match(/type="radio"/g)||[]).length===7&&cancel.includes('role="switch"')&&cancel.includes('<footer>')&&!cancel.includes('<textarea'));
 const editor=html(ComponentExample,{name:'ReviewEditor',variant:'default'});check('ReviewEditor no longer owns Submit',!editor.includes('>Submit<'));
 check('Unsupported MembershipBenefits is removed from public library',!catalog.some(c=>c.name==='MembershipBenefits')&&!B.MembershipBenefits);
 for(const name of ['ProductList','ProductCollection']){const h=html(ComponentExample,{name,variant:'default'});check(name+' uses current custom ProductCard data and anatomy',h.includes('cm-product-card-grid')&&h.includes('foodmax')&&h.includes('cm-supplier'))}
 const category=html(ComponentExample,{name:'CategoryLayout',variant:'image-primary'});check('Category example and filters are English',!/[\u4e00-\u9fff]/.test(category));
 for(const surface of ['white','gray']){const address=html(B.AddressForm,{surface,value:{id:'1',label:'home',street:'Street',name:'Name',phone:'123'},onChange:no,onSubmit:no});check('AddressForm '+surface+' surface is explicit',address.includes('kc-form-surface-'+surface))}
 for(const recipe of recipes)html(PageAssembly,{nodeId:recipe.nodeId});
 for(const asset of assets)await fs.access('public'+asset);
 const css=await fs.readFile('src/design-system/acceptance-v12.css','utf8');
 check('Checkbox white check, neutral swipe actions, SKU grid, and form surfaces have scoped styles',css.includes('border:solid var(--ds-color-light-white)')&&css.includes('.kb-swipe-actions>button.is-destructive')&&css.includes('grid-template-columns:72px')&&css.includes('.kc-form-surface-gray'));
 check('New rules are included in shared rule source',['compose-before-create','form-surface','action-hierarchy','page-submit','component-purpose'].every(id=>rules.some(r=>r.id===id)));
 const report={date:'2026-10-23',sourceNode:'137:52176',acceptanceScreens:20,acceptanceItems:19,renderedStates:rendered.length,pagesRendered:recipes.length,localAssetsChecked:assets.size,checks,failures:[],visualReview:'pending',browser:'Unavailable: local browser use is disabled in Work settings. Static React rendering does not verify visual geometry or live gestures.'};
 await fs.writeFile('acceptance-v12-verification.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));
}finally{await server.close()}
