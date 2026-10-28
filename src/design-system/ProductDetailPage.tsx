import React,{useState} from 'react';
import * as B from './business';
import * as F from './foundations';
import {BottomSheet,Button} from './components';
import {detailImages,detailVariants,detailAttributes,detailDescription,supplierName,supplierMetrics,detailServices,similarProducts,recommendedProducts} from './product-detail-data';
import './product-detail.css';
/** Page composition only. All reusable modules remain public business components. */
export function ProductDetailPage(){
 const [variant,setVariant]=useState('3'),[quantities,setQuantities]=useState<Record<string,number>>({}),[favorite,setFavorite]=useState(false),[related,setRelated]=useState<Record<string,number>>({}),[panel,setPanel]=useState(''),[preview,setPreview]=useState(-1),[message,setMessage]=useState('');
 const quantity=quantities[variant]||0,cartCount=Object.values(quantities).reduce((a,b)=>a+b,0)+Object.values(related).reduce((a,b)=>a+b,0);
 const changeQuantity=(n:number)=>setQuantities(v=>({...v,[variant]:n}));
 const collection=(items:typeof recommendedProducts)=>items.map(p=>({...p,action:related[p.id]?'stepper' as const:undefined,quantity:related[p.id]||0}));
 const addRelated=(id:string)=>setRelated(v=>({...v,[id]:(v[id]||0)+1}));
 const service=detailServices.find(s=>s.id===panel);
 const nav=<F.NavBar title="商品详情" onBack={()=>{if(history.length>1)history.back();else location.href='?view=system&panel=composition'}} right={<div className="pd-nav-actions"><F.IconButton name="headphones-24" label="联系客服" onClick={()=>setPanel('support')}/><F.IconButton name="share-24" label="分享商品" onClick={async()=>{try{await navigator.clipboard.writeText(location.href);setMessage('商品链接已复制')}catch{setPanel('share')}}}/></div>}/>;
 return <div className="assembly-root pd-page" data-template="product-detail-new" data-composition-node="140:54048"><F.Page height={812} background="gray" chromeBackground="var(--ds-color-light-white)" header={nav} footer={<B.ProductPurchaseBar quantity={quantity} onQuantity={changeQuantity} favorite={favorite} onFavorite={()=>setFavorite(v=>!v)} cartCount={cartCount} onCart={()=>setPanel('cart')} onAdd={()=>changeQuantity(1)}/>}>
 <B.ProductMediaGallery images={detailImages} onPreview={setPreview}/>
 <div className="pd-modules">
 <B.ProductVariantPricing variants={detailVariants} value={variant} onChange={setVariant} currency="¥" unit="袋" sales="月售7000+"/>
 <B.ProductSummary name="紫甘蓝" ranking="紫甘蓝普通销量第1名" attributes={detailAttributes.slice(0,4)} description={detailDescription} onDetails={()=>setPanel('description')}/>
 <B.ProductFulfillment delivery="明日上午达" deliveryDetail="00:00–23:00下单，明日06:00–10:00送达" afterSales="18小时售后" onAfterSales={()=>setPanel('after-sales')}/>
 <B.ProductCollection title="紫甘蓝 · 相似商品" products={collection(similarProducts)} onAdd={addRelated} onQuantity={(id,n)=>setRelated(v=>({...v,[id]:n}))}/>
 <B.ProductSupplierPanel name={supplierName} metrics={supplierMetrics} onClick={()=>setPanel('supplier')}/>
 <B.ProductAttributes items={detailAttributes}/>
 <B.ProductServiceBenefits items={detailServices} onSelect={setPanel}/>
 <F.Card className="pd-additional"><F.Collapse items={[{id:'extra',title:'补充说明',content:<p>{detailDescription} 商品图片仅供参考，请以实际收到的商品为准。</p>}]}/></F.Card>
 <B.ProductCollection title="猜你喜欢" products={collection(recommendedProducts)} onAdd={addRelated} onQuantity={(id,n)=>setRelated(v=>({...v,[id]:n}))}/>
 </div>
 </F.Page>
 <BottomSheet open={!!panel} title={panel==='cart'?'购物车':panel==='description'?'商品介绍':panel==='supplier'?'供应商':panel==='supplier-products'?'供应商商品':panel==='after-sales'?'售后说明':panel==='share'?'分享商品':service?.label||'联系客服'} onClose={()=>setPanel('')} footer={<Button onClick={()=>setPanel('')}>完成</Button>}>
 {panel==='cart'?<div className="pd-cart-summary">{cartCount===0?<F.EmptyState kind="cart" title="购物车暂无商品"/>:<>{detailVariants.filter(v=>quantities[v.id]>0).map(v=><p key={v.id}>紫甘蓝 · {v.label} <strong>¥{v.amount} × {quantities[v.id]}</strong></p>)}{[...similarProducts,...recommendedProducts].filter(p=>related[p.id]>0).map(p=><p key={p.id}>{p.name} · {p.weight} <strong>¥{p.amount} × {related[p.id]}</strong></p>)}<F.Text tone="secondary">共 {cartCount} 件商品；此处为组件交互演示，未提交真实订单。</F.Text></>}</div>:panel==='description'?<p>{detailDescription}</p>:panel==='supplier'?<><B.ProductSupplierPanel name={supplierName} metrics={supplierMetrics} onClick={()=>setPanel('supplier-products')}/><B.ProductList products={collection(similarProducts)} onAdd={addRelated} onQuantity={(id,n)=>setRelated(v=>({...v,[id]:n}))}/></>:panel==='supplier-products'?<B.ProductList products={collection(similarProducts)} onAdd={addRelated} onQuantity={(id,n)=>setRelated(v=>({...v,[id]:n}))}/>:panel==='after-sales'?<p>支持18小时售后。请保留商品及订单信息，通过客服入口反馈商品问题；实际服务范围以订单约定为准。</p>:panel==='share'?<p className="pd-share-url">{location.href}</p>:<p>{service?.description||'商品与订单问题请联系供应商客服。当前为页面预览，尚未接入在线客服服务。'}</p>}
 </BottomSheet>
 <F.ImageViewer open={preview>=0} src={detailImages[Math.max(preview,0)].src} alt={detailImages[Math.max(preview,0)].alt} counter={`${preview+1}/${detailImages.length}`} onClose={()=>setPreview(-1)}/>
 <F.Toast open={!!message} message={message} onClose={()=>setMessage('')}/>
 </div>;
}
