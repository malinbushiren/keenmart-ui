import ts from 'typescript';
import fs from 'node:fs/promises';
const root='src/design-system/',out={},functions={},aliases={};
for(const file of ['components.tsx','foundations.tsx','business.tsx','commerce.tsx','Icon.tsx']){
 const text=await fs.readFile(root+file,'utf8'),source=ts.createSourceFile(file,text,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
 source.forEachChild(n=>{
  if(ts.isTypeAliasDeclaration(n))aliases[n.name.text]=n.type.getText(source);
  if(ts.isFunctionDeclaration(n)&&n.modifiers?.some(m=>m.kind===ts.SyntaxKind.ExportKeyword)&&n.name){
   const props=n.parameters[0]?.type?.getText(source)||'No props';functions[n.name.text]=props;
   if(file!=='commerce.tsx')out[n.name.text]={file,props};
  }
 });
}
const delegates={ProductCard:'CommerceProductCard',ProductPriceGroup:'CommercePrice',ProductPurchaseControl:'CommercePurchase',ProductStatusOverlay:'CommerceStatus',ProductSupplierTag:'CommerceSupplier',CategoryLayout:'CommerceCategoryLayout'};
for(const [name,implementation] of Object.entries(delegates)){
 let props=functions[implementation];props=aliases[props]||props;
 const shared=name==='ProductCard'?['ProductCardVariant','ProductAvailability','ProductSKU','CommerceProduct']:name==='CategoryLayout'?['ProductAvailability','ProductSKU','CommerceProduct','CommerceCategory']:[];
 out[name].props=shared.map(type=>'type '+type+' = '+aliases[type]+';').join('\n')+(shared.length?'\n\n':'')+props;
}
const publicNames=new Set(JSON.parse(await fs.readFile(root+'component-catalog.json','utf8')).map(row=>row.name));
for(const name of Object.keys(out))if(!publicNames.has(name))delete out[name];
await fs.writeFile(root+'component-api.json',JSON.stringify(out,null,2));console.log('Extracted',Object.keys(out).length,'APIs');
