import catalog from './component-catalog.json';
export const registry=catalog.map(x=>({...x,states:x.states.join(' / '),status:x.origin==='observed'?'页面提取 · 候选':'规范补充 · 候选'}));
