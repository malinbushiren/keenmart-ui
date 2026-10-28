import {build,preview} from 'vite';
import {chromium} from '@playwright/test';
import path from 'node:path';
import fs from 'node:fs';
import {pathToFileURL,fileURLToPath} from 'node:url';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {prepareLibrarySmoke} from './prepare-library-smoke.mjs';
const {root,name}=prepareLibrarySmoke();
const installed=path.join(root,'node_modules',...name.split('/'),'dist/index.js');
const C=await import(pathToFileURL(installed));
const markup=renderToStaticMarkup(React.createElement(C.Page,{background:'gray'},React.createElement(C.OrderStageProgress,{current:1}),React.createElement(C.Icon,{name:'down-2-12'}),React.createElement(C.ProductSupplierTag,{name:'Foodmax'})));
for(const match of markup.matchAll(/src="([^"]+)"/g)){
 const src=match[1].replaceAll('&amp;','&');
 if(src.startsWith('file:')&&!fs.existsSync(fileURLToPath(src)))throw new Error('Missing installed asset '+src);
 if(src.startsWith('/assets/'))throw new Error('Nonportable asset '+src);
}
if(!markup.includes('km-system')||!markup.includes('Foodmax'))throw new Error('Component SSR failed');
await build({root,configFile:false,build:{outDir:'dist',emptyOutDir:true},logLevel:'warn'});
if(process.argv.includes('--static')){console.log('PASS: packed tarball installed offline; strict consumer types, Vite production build, server rendering and installed image/icon paths checked. Browser interactions not checked.');process.exit(0);}
const server=await preview({root,configFile:false,preview:{host:'127.0.0.1',port:5197,strictPort:true}});
let browser;
try{
 browser=await chromium.launch({headless:true});
 const page=await browser.newPage({viewport:{width:375,height:812}}),errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 page.on('response',r=>{if(r.status()>=400)errors.push(r.status()+' '+r.url())});
 await page.goto('http://127.0.0.1:5197',{waitUntil:'networkidle'});
 const broken=await page.locator('img').evaluateAll(imgs=>imgs.filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src));
 if(broken.length)throw new Error('Broken images: '+JSON.stringify(broken));
 await page.getByRole('button',{name:'Add to cart',exact:true}).click();
 if(await page.getByTestId('quantity').textContent()!=='1')throw new Error('Add did not update quantity');
 await page.getByRole('button',{name:'Decrease quantity',exact:true}).click();
 if(await page.getByTestId('quantity').textContent()!=='0')throw new Error('Decrement 1→0 failed');
 await page.getByRole('button',{name:'Cart',exact:true}).click();
 if(await page.getByTestId('tab').textContent()!=='cart')throw new Error('Tab switch failed');
 const surface=await page.locator('.km-system').evaluate(el=>getComputedStyle(el).backgroundColor);
 if(surface!=='rgb(245, 245, 245)')throw new Error('Page surface differs: '+surface);
 await page.screenshot({path:path.join(root,'installed-package.png'),fullPage:true});
 if(errors.length)throw new Error(errors.join('\n'));
 console.log('PASS: installed package type check/build, portable images/icons, styles, add/decrement, tab selection, no HTTP/runtime errors.');
}finally{await browser?.close();await new Promise(resolve=>server.httpServer.close(resolve));}
