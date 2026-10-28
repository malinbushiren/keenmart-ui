import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
import ts from 'typescript';
import {build} from 'vite';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const pkg=path.join(root,'packages/keenmart-ui'),dist=path.join(pkg,'dist');
const seen=new Set();
function walk(p){
 if(seen.has(p))return;seen.add(p);
 if(!/\.(tsx?|css)$/.test(p))return;
 const text=fs.readFileSync(p,'utf8');
 for(const m of text.matchAll(/(?:from\s*|import\s*)['"](\.[^'"]+)['"]|@import\s*['"](\.[^'"]+)['"]/g)){
  const base=path.resolve(path.dirname(p),m[1]||m[2]);
  const found=[base,...['.ts','.tsx','.json','.css'].map(e=>base+e)].find(x=>fs.existsSync(x)&&fs.statSync(x).isFile());
  if(found)walk(found);
 }
}
walk(path.join(root,'src/design-system/index.ts'));
const text=[...seen].map(p=>fs.readFileSync(p,'utf8')).join('\n'),assets=new Set();
for(const m of text.matchAll(/\/assets\/([\w./-]+\.(?:svg|png|jpg|jpeg|webp))/g))assets.add(m[1]);
for(const m of text.matchAll(/['"]([a-f0-9]{5})['"]/g))for(const ext of ['svg','png'])if(fs.existsSync(path.join(root,'public/assets',m[1]+'.'+ext)))assets.add(m[1]+'.'+ext);
for(const m of text.matchAll(/\/assets\/([\w-]+\/)/g)){
 const dir=path.join(root,'public/assets',m[1]);
 if(fs.existsSync(dir))for(const f of fs.readdirSync(dir,{recursive:true}))if(fs.statSync(path.join(dir,f)).isFile())assets.add(m[1]+f);
}
for(const asset of assets)if(!fs.existsSync(path.join(root,'public/assets',asset)))throw new Error('Missing asset '+asset);
const resolver='__keenmartResolveAsset';
await build({root,configFile:false,publicDir:false,plugins:[{
 name:'keenmart-portable-assets',enforce:'pre',
 transform(code,id){
  if(!seen.has(id))return;
  if(id.endsWith('.css'))return code.replace(/url\((['"]?)\/assets\/([^)'"\s]+)\1\)/g,(_,q,p)=>`url(${JSON.stringify(path.join(root,'public/assets',p))})`);
  if(!id.endsWith('.tsx'))return;
  const source=ts.createSourceFile(id,code,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
  const result=ts.transform(source,[context=>{
   const visit=node=>{
    if(ts.isJsxAttribute(node)&&node.name.getText(source)==='src'&&node.initializer){
     const init=node.initializer;
     const expression=ts.isStringLiteral(init)?init:ts.isJsxExpression(init)?init.expression:undefined;
     if(expression)return ts.factory.updateJsxAttribute(node,node.name,ts.factory.createJsxExpression(undefined,ts.factory.createCallExpression(ts.factory.createIdentifier(resolver),undefined,[expression])));
    }
    return ts.visitEachChild(node,visit,context);
   };return node=>ts.visitNode(node,visit);
  }]);
  const output=`import {resolveAsset as ${resolver}} from '@keenmart-internal/assets';\n`+ts.createPrinter().printFile(result.transformed[0]);result.dispose();return output;
 }
}],build:{outDir:dist,emptyOutDir:true,minify:false,lib:{entry:path.join(pkg,'entry.ts'),formats:['es'],fileName:()=> 'index.js',cssFileName:'styles'},rollupOptions:{output:{paths:{'@keenmart-internal/assets':'./asset-map.js'}},external:id=>id==='react'||id==='react-dom'||id.startsWith('react/')||id==='@keenmart-internal/assets'}}});
fs.mkdirSync(path.join(dist,'assets'),{recursive:true});
const map=[...assets].sort().map(asset=>{
 const target=path.join(dist,'assets',asset);fs.mkdirSync(path.dirname(target),{recursive:true});fs.copyFileSync(path.join(root,'public/assets',asset),target);
 return `${JSON.stringify('/assets/'+asset)}:new URL(${JSON.stringify('./assets/'+asset)},import.meta.url).href`;
});
fs.writeFileSync(path.join(dist,'asset-map.js'),`const assets={\n${map.join(',\n')}\n};\nexport function resolveAsset(src){return typeof src==='string'?(assets[src]||src):src;}\n`);
// Public distribution uses the licensed fontsource dependencies. Custom DdmcSans
// files have no redistribution license in this repository and stay in the local app.
fs.writeFileSync(path.join(dist,'fonts.css'),`@import '@fontsource/poppins/400.css';\n@import '@fontsource/poppins/500.css';\n@import '@fontsource/poppins/600.css';\n@import '@fontsource/poppins/700.css';\n@import '@fontsource/leckerli-one/400.css';\n`);
fs.copyFileSync(path.join(root,'src/design-system/tokens.json'),path.join(dist,'tokens.json'));
fs.writeFileSync(path.join(pkg,'tsconfig.build.json'),JSON.stringify({extends:'../../tsconfig.json',compilerOptions:{noEmit:false,declaration:true,emitDeclarationOnly:true,rootDir:'../..',outDir:'dist/types'},include:['entry.ts']},null,2));
execFileSync(process.execPath,[path.join(root,'node_modules/typescript/bin/tsc'),'-p',path.join(pkg,'tsconfig.build.json')],{stdio:'inherit'});
// Declaration files can retain JSON imports; copy their referenced schemas alongside them.
for(const p of seen)if(p.endsWith('.json')){const dest=path.join(dist,'types',path.relative(root,p));fs.mkdirSync(path.dirname(dest),{recursive:true});fs.copyFileSync(p,dest);}
console.log(`Library ready: ${seen.size} source modules, ${assets.size} portable assets. No screens, credentials or server endpoints included.`);
