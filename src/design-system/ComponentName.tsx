import React from 'react';
import names from './component-names.json';

export function componentLabel(name: string) {
  const chinese = names[name as keyof typeof names];
  return chinese ? `${chinese}（${name}）` : name;
}

/** 中文承担阅读层级，英文保留为接口和代码检索辅助。 */
export function ComponentName({name}: {name: string}) {
  const chinese = names[name as keyof typeof names];
  return <span className="cw-component-name"><span>{chinese || name}</span>{chinese && <small lang="en">{name}</small>}</span>;
}
