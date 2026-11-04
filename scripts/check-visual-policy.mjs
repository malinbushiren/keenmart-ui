import fs from 'node:fs';
import assert from 'node:assert/strict';
import ts from 'typescript';
const code = ts.transpileModule(fs.readFileSync('src/design-system/commerce-tag-order.ts', 'utf8'), {compilerOptions:{module:ts.ModuleKind.ESNext}}).outputText;
const {sortProductTags} = await import('data:text/javascript;base64,' + Buffer.from(code).toString('base64'));
const tags = [
 {id:'outline-gray',tone:'gray'}, {id:'outline-cool',tone:'green'},
 {id:'solid-gray',tone:'gray',variant:'solid'}, {id:'outline-warm',tone:'orange'},
 {id:'solid-cool',tone:'green',variant:'solid'}, {id:'solid-warm',tone:'red',variant:'solid'},
 {id:'solid-warm-2',tone:'gold',variant:'solid'}, {id:'legacy-gray',tone:'blue'},
];
const before = JSON.stringify(tags);
assert.deepEqual(sortProductTags(tags).map(t=>t.id), ['solid-warm','solid-warm-2','solid-cool','solid-gray','outline-warm','outline-cool','outline-gray','legacy-gray']);
assert.equal(JSON.stringify(tags),before);
assert.deepEqual(sortProductTags([]),[]);
assert.deepEqual(sortProductTags([{id:1},{id:2,tone:'red'}]).map(t=>t.id),[1,2]);
function isBlue(r,g,b) {
 const max=Math.max(r,g,b), min=Math.min(r,g,b), d=max-min;
 if (!d) return false;
 let h=(max===r?(g-b)/d:max===g?(b-r)/d+2:(r-g)/d+4)*60;
 if(h<0) h+=360;
 return h>=180 && h<=270;
}
function inspect(text,label) {
 for(const m of text.matchAll(/#([\da-f]{6}|[\da-f]{3})\b/gi)) {
  const hex=m[1].length===3?[...m[1]].map(c=>c+c).join(''):m[1];
  assert.ok(!isBlue(...[0,2,4].map(i=>parseInt(hex.slice(i,i+2),16))),`${label}: forbidden blue hue ${m[0]}`);
 }
 for(const m of text.matchAll(/rgba?\(\s*(\d+)[ ,]+(\d+)[ ,]+(\d+)/g)) assert.ok(!isBlue(+m[1],+m[2],+m[3]),`${label}: forbidden blue RGB ${m[0]}`);
}
for(const file of fs.readdirSync('src/design-system').filter(f=>/\.(css|tsx|ts)$/.test(f))) inspect(fs.readFileSync('src/design-system/'+file,'utf8'),file);
const tokens=JSON.parse(fs.readFileSync('src/design-system/tokens.json','utf8'));
for(const [group,items] of Object.entries(tokens.color)) for(const [key,t] of Object.entries(items)) {
 const value=t.$value;
 if(typeof value==='string') inspect(value,`${group}.${key}`);
 else assert.ok(!isBlue(...value.components),`${group}.${key}: forbidden blue token`);
}
console.log('PASS: tag tier priority, stable ties, defaults, immutable input; no blue hues in active component colors or tokens.');
