import React from 'react';
export function LayoutSpace({children,gap=12,vertical=false}:{children:React.ReactNode;gap?:3|6|9|12|18|24|30;vertical?:boolean}){return <div className={'kb-space '+(vertical?'kb-space-column':'')} style={{gap:`var(--ds-space-${gap})`}}>{children}</div>}
