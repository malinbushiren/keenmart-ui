import fs from 'node:fs';
const pkg=JSON.parse(fs.readFileSync(new URL('./package.json',import.meta.url)));
if(pkg.publishConfig.access!=='public'||pkg.publishConfig.registry!=='https://registry.npmjs.org/')throw new Error('Expected public npm registry.');
for(const file of ['dist/index.js','dist/styles.css','dist/fonts.css','dist/tokens.json','dist/types/packages/keenmart-ui/entry.d.ts'])if(!fs.existsSync(new URL(file,import.meta.url)))throw new Error('Run npm run library:build before publishing: '+file);
console.log(`Ready to publish ${pkg.name}@${pkg.version} publicly.`);
