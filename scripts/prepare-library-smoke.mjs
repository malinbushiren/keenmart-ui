import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
export function prepareLibrarySmoke(){
 const root=process.cwd(),target=path.join(root,'.library-smoke'),cache=path.join(target,'npm-cache');
 fs.mkdirSync(target,{recursive:true});
 for(const file of ['index.html','main.tsx','tsconfig.json'])fs.copyFileSync(path.join(root,'scripts/library-smoke',file),path.join(target,file));
 const npmArgs=process.env.npm_execpath?[process.env.npm_execpath]:[];
 const npm=(args)=>execFileSync(npmArgs.length?process.execPath:'npm',[...npmArgs,...args],{cwd:root,encoding:'utf8'});
 const packed=JSON.parse(npm(['pack','./packages/keenmart-ui','--json','--pack-destination',target,'--cache',cache]))[0];
 const pkg=JSON.parse(fs.readFileSync('packages/keenmart-ui/package.json','utf8'));
 const name=pkg.name;
 // Keep fixtures in sync with the package name.
 const fixture=fs.readFileSync(path.join(target,'main.tsx'),'utf8').replaceAll('keenmart-ui-kit',name);
 fs.writeFileSync(path.join(target,'main.tsx'),fixture);
 fs.writeFileSync(path.join(target,'package.json'),JSON.stringify({private:true,type:'module',dependencies:{[name]:'file:'+path.join(target,packed.filename),'@fontsource/poppins':'file:'+path.join(root,'node_modules/@fontsource/poppins'),'@fontsource/leckerli-one':'file:'+path.join(root,'node_modules/@fontsource/leckerli-one')}},null,2));
 fs.rmSync(path.join(target,'node_modules',...name.split('/')),{recursive:true,force:true});
 fs.rmSync(path.join(target,'package-lock.json'),{force:true});
 npm(['install','--prefix',target,'--ignore-scripts','--legacy-peer-deps','--offline','--cache',cache]);
 execFileSync(process.execPath,['node_modules/typescript/bin/tsc','-p',path.join(target,'tsconfig.json')],{cwd:root,stdio:'inherit'});
 return {root:target,name,packed};
}
