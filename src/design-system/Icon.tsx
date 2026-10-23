import React from 'react';import icons from './icons.json';import type {IconName} from './icon-names';
const lookup=Object.fromEntries(icons.map(x=>[x.key,x]));
/** Original SVG at its native size; omit label for decorative icons. */
export function Icon({name,label,className=''}:{name:IconName;label?:string;className?:string}){const item=lookup[name];if(!item)throw new Error(`Unknown icon: ${name}`);return <img className={'ds-icon '+className} src={item.src} width={item.width} height={item.height} alt={label||''} aria-hidden={label?undefined:true} data-icon={name} data-icon-node={item.nodeId}/>}
export type {IconName};
