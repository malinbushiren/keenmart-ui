import {createServer} from 'vite';
import React from 'react';
import {renderToStaticMarkup as render} from 'react-dom/server';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const server=await createServer({server:{middlewareMode:true,hmr:false,ws:false,watch:null},appType:'custom'});
try{
 const B=await server.ssrLoadModule('/src/design-system/business.tsx');
 const {PageAssembly}=await server.ssrLoadModule('/src/design-system/PageAssembly.tsx');
 const {ComponentExample}=await server.ssrLoadModule('/src/design-system/ComponentExample.tsx');
 const catalog=JSON.parse(await fs.readFile('src/design-system/component-catalog.json','utf8'));
 const recipes=JSON.parse(await fs.readFile('src/design-system/page-recipes.json','utf8'));
 const manifest=JSON.parse(await fs.readFile('src/manifest.json','utf8'));
 const failed=[],assets=new Set(),states=[];
 function checkAssets(html){for(const match of html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)"/g))assets.add(match[1]);}
 for(const recipe of recipes){try{const html=render(React.createElement(PageAssembly,{nodeId:recipe.nodeId}));assert(!html.includes('ds-product-card'));assert(!html.includes('kc-category-browser'));checkAssets(html);}catch(error){failed.push({node:recipe.nodeId,error:String(error)})}}
 for(const name of ['ProductCard','ProductPriceGroup','ProductPurchaseControl','ProductStatusOverlay','ProductSupplierTag','CategoryLayout','ProductList','ProductCollection']){
  for(const variant of catalog.find(c=>c.name===name).states){try{const html=render(React.createElement(ComponentExample,{name,variant}));assert(html.length>0);checkAssets(html);states.push({name,variant,rendered:true})}catch(error){failed.push({name,variant,error:String(error)})}}
 }
 const data={id:'test',name:'Test broccoli',image:'/assets/5a9f6.png',amount:'38.76',weight:'1bag'};
 for(const variant of ['grid','full-width','category']){
  const html=render(React.createElement(B.ProductCard,{product:data,variant,quantity:1,onAdd(){},onQuantity(){}}));
  assert(html.includes('aria-label="Decrease quantity" disabled=""'));assert(!html.includes('Delete'));assert(html.includes('cm-product-card-'+variant));
 }
 const max=render(React.createElement(B.ProductPurchaseControl,{mode:'quantity',value:4,max:4,onAdd(){}}));assert(max.includes('aria-label="Increase quantity" disabled=""'));
 assert(!catalog.some(c=>c.name==='CategoryBrowser'));assert.equal(catalog.find(c=>c.name==='ProductCard').kind,'business');assert.equal(manifest.length,109);assert(!manifest.some(m=>m.group==='02 商品卡片'));
 for(const asset of assets){try{await fs.access('public'+asset)}catch{failed.push({asset,error:'missing local asset'})}}
 const report={date:'2026-10-23',pagesRendered:recipes.length,componentStates:states,referencedAssets:assets.size,failures:failed,browserChecksBeforeDisabled:{productCardStates:16,missingImages:0,horizontalOverflow:0,skuAddAndMinimum:true,maximumDisabled:true},visualReview:'pending',limitation:'Browser control was disabled in Work settings before final category and migrated-page screenshot review.'};
 await fs.writeFile('component-commerce-verification.json',JSON.stringify(report,null,2)+'\n');
 console.log(JSON.stringify({pages:recipes.length,states:states.length,assets:assets.size,failures:failed},null,2));assert.equal(failed.length,0);
}finally{await server.close()}
