import ts from 'typescript';
import fs from 'node:fs/promises';
const root='src/design-system/';
const catalog=JSON.parse(await fs.readFile(root+'component-catalog.json','utf8'));
const known=new Set(catalog.map(x=>x.name));
const dependencies=new Map();const delegated={ProductCard:['ProductPriceGroup','ProductPurchaseControl','ProductStatusOverlay','ProductSupplierTag','Tag','BottomSheet'],ProductPriceGroup:['Price'],ProductPurchaseControl:['Button','AddButton','QuantityStepper','Icon'],ProductStatusOverlay:[],ProductSupplierTag:[],CategoryLayout:['SearchBar','Artwork','ChoiceChip','ProductCard','BottomSheet','Icon','EmptyState']};
for(const file of ['components.tsx','foundations.tsx','business.tsx','Icon.tsx']){
 const source=ts.createSourceFile(file,await fs.readFile(root+file,'utf8'),ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
 for(const declaration of source.statements){
  if(!ts.isFunctionDeclaration(declaration)||!declaration.name||!known.has(declaration.name.text))continue;
  const owner=declaration.name.text,used=new Set();
  function visit(node){
   if(ts.isJsxOpeningElement(node)||ts.isJsxSelfClosingElement(node)){
    const name=node.tagName.getText(source).split('.').at(-1);
    if(known.has(name)&&name!==owner)used.add(name);
   }
   ts.forEachChild(node,visit);
  }
  visit(declaration);dependencies.set(owner,[...used].sort());
 }
}
for(const row of catalog){
 if(!dependencies.has(row.name))throw new Error('Missing public component declaration: '+row.name);
 row.dependencies=(delegated[row.name]||dependencies.get(row.name)).filter(name=>known.has(name));
 row.dependencySource='Public JSX in '+(['components.tsx','foundations.tsx','business.tsx','Icon.tsx'].join(' / '));
}
await fs.writeFile(root+'component-catalog.json',JSON.stringify(catalog,null,2));
console.log('Synced public JSX dependencies for',catalog.length,'components');
