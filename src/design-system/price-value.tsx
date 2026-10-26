import React from 'react';
// Internal amount formatting; the public commerce entry is ProductPriceGroup.
export function PriceValue({amount,original,promotion=false,currency='SAR',unit}:{amount:string;original?:string;promotion?:boolean;currency?:string;unit?:string}){const [major,minor]=amount.split('.');return <span className={'ds-price '+(promotion?'ds-price-promotion':'')}><span className="ds-currency">{currency}</span><strong>{major}{minor&&<small>.{minor}</small>}</strong>{unit&&<span className="ds-price-unit">/{unit}</span>}{original&&<del>{original}</del>}</span>}
