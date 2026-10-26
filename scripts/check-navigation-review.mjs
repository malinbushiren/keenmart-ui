import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {createServer} from 'vite';
const server=await createServer({server:{middlewareMode:true,hmr:false,ws:false},appType:'custom'});
try {
 const F=await server.ssrLoadModule('/src/design-system/foundations.tsx');
 const B=await server.ssrLoadModule('/src/design-system/business.tsx');
 const {navigation,navigationFive}=await server.ssrLoadModule('/src/design-system/demo-data.ts');
 const render=(c,p)=>renderToStaticMarkup(React.createElement(c,p));
 for(const options of [navigation,navigationFive]) {
  let selected;const nav=F.TabBar({options,value:'home',onChange:v=>selected=v});
  const buttons=nav.props.children;
  assert.equal(buttons.length,options.length);
  buttons[2].props.onClick();assert.equal(selected,'cart');
  assert(render(F.TabBar,{options,value:'home',onChange:()=>{}}).includes('e2b80.svg'));
 }
 for(const count of [0,1,12,100]) {
  const html=render(F.Badge,{count});
  assert.equal(html.includes('kb-badge-value'),count>0);
  if(count===100) assert(html.includes('99+'));
 }
 for(const [current,fills] of [[-1,['0%','0%','0%']],[0,['53.333%','0%','0%']],[1,['100%','53.333%','0%']],[2,['100%','100%','53.333%']],[3,['100%','100%','100%']]]) {
  const ol=B.OrderStageProgress({current});
  const rows=ol.props.children;
  assert.deepEqual(rows.slice(0,3).map(row=>row.props.children[2].props.children.props.style.width),fills);
  assert.equal(rows.filter(row=>row.props['aria-current']==='step').length,current<0?0:1);
 }
 const catalog=JSON.parse(await fs.readFile('src/design-system/component-catalog.json','utf8'));
 assert(!catalog.some(c=>c.name==='SupportEntryGrid'));
 assert.equal(catalog.find(c=>c.name==='CategoryGrid').displayName,'金刚区入口');
 const recipes=JSON.parse(await fs.readFile('src/design-system/page-recipes.json','utf8'));
 assert(!recipes.some(r=>r.components.includes('SupportEntryGrid')));
 const source=await fs.readFile('src/design-system/foundations.tsx','utf8')+await fs.readFile('src/design-system/business.tsx','utf8');
 const files=await fs.readdir('public/assets/navigation-v13');
 for(const file of files){assert((await fs.stat('public/assets/navigation-v13/'+file)).size>0);assert(source.includes(file),'Unused asset '+file)}
 console.log('PASS: four/five tabs, controlled selection, unchanged badge thresholds, five progress positions, renamed grid, retired support grid and local source assets.');
} finally {await server.close()}
