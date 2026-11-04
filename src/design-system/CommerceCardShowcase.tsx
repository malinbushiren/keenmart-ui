import React, { useState } from 'react';
import { sortProductTags } from './commerce-tag-order';
import { ProductCard, ProductImage, ProductTag, ProductTemperatureTag, ProductPriceGroup, ProductPurchaseControl, ProductSupplierTag, ProductCollection, CategoryLayout } from './business';
import { LocaleProvider } from './locale';
import { commerceProduct, commerceSKUs, commerceProducts, textCategories, primaryCategories, tertiaryCategories } from './commerce-demo';
import type { CommerceProduct, ProductCardVariant, ProductTagTone } from './commerce';

export function CommerceCardShowcase() {
    const [showTemperature, setShowTemperature] = useState(true);
    const [locale, setLocale] = useState<'en' | 'zh-CN'>('en');
    const [quantities, setQuantities] = useState<Record<string, number>>({});
    const [skuCounts, setSkuCounts] = useState<Record<string, number>>({});
    const [category, setCategory] = useState('secondary-1');
    const [primary, setPrimary] = useState('primary-2');
    const [query, setQuery] = useState('');
    const [sort, setSort] = useState<'default' | 'sales' | 'price'>('default');
    const [tertiary, setTertiary] = useState(tertiaryCategories[0]);
    const [expanded, setExpanded] = useState(false);
    const [feedback, setFeedback] = useState('');
    const zh = locale === 'zh-CN';
    const product: CommerceProduct = { ...commerceProduct, temperature: 'frozen', priceTone: 'regular', original: '45.24', name: zh ? '宁夏新鲜西兰花 精选当季蔬菜 新鲜采摘品质之选' : commerceProduct.name, weight: zh ? '1袋（2kg/袋）' : commerceProduct.weight, titleBadge: zh ? '特惠' : 'Deal' };
    const items = commerceProducts.map((p, i) => ({ ...p, name: product.name, weight: product.weight, temperature: i % 2 ? 'chilled' as const : 'frozen' as const, action: quantities[p.id] ? 'stepper' as const : 'add' as const, quantity: quantities[p.id] || 0 }));
    function card(id: string, changes: Partial<CommerceProduct> = {}, variant: ProductCardVariant = 'grid', initiallyExpanded = false) {
        const p = { ...product, ...changes, id };
        return <ProductCard key={id} product={p} variant={variant} showTemperature={showTemperature} quantity={quantities[id] || 0} onAdd={() => setQuantities(q => ({ ...q, [id]: (q[id] || 0) + 1 }))} onQuantity={v => setQuantities(q => ({ ...q, [id]: v }))} initialExpanded={initiallyExpanded} skuQuantities={skuCounts} onSKUQuantity={(id, v) => setSkuCounts(q => ({ ...q, [id]: v }))} onNotify={() => setFeedback('已开启到货提醒')} onSimilar={() => setFeedback('查看相似商品')} onSupplier={() => setFeedback('查看供应商')}/>;
    }
    return <LocaleProvider locale={locale}><div className="cm-card-showcase">
        <section><h4>新版商卡总览 · 温层按需展示</h4><div className="cm-card-showcase-tags"><label><input type="checkbox" checked={showTemperature} onChange={e => setShowTemperature(e.target.checked)}/> 展示温层</label><label>语言 <select aria-label="商卡预览语言" value={locale} onChange={e => setLocale(e.target.value as typeof locale)}><option value="en">English</option><option value="zh-CN">中文</option></select></label></div><p className="cm-card-showcase-caption">同一个 showTemperature 参数贯穿商卡、feeds、猜你喜欢和分类框架。未提供温层数据的商品不显示温层。</p>{feedback && <output>{feedback}</output>}</section>
        <section><h4>① 双列商卡 · 冷冻／冷鲜／标题标签／多规格</h4><div className="cm-card-showcase-grid">{card('grid-frozen')}{card('grid-chilled', { temperature: 'chilled', promotion: undefined, original: undefined, titleBadge: undefined })}{card('grid-skus', { skus: commerceSKUs, unitPrice: undefined })}{card('grid-comparison', { supplierVariant: 'comparison', productTags: [{ text: zh ? '产地直供' : 'Direct supply', tone: 'green' }], titleBadge: undefined })}</div></section>
        <section><h4>② 单列通栏 · 120 商品图</h4><div className="cm-card-showcase-stack">{card('row', {}, 'full-width')}{card('row-skus', { skus: commerceSKUs, original: undefined }, 'full-width')}{card('row-expanded', { skus: commerceSKUs, original: undefined }, 'full-width', true)}</div></section>
        <section><h4>③ 单列分类 · 72 商品图</h4><div className="cm-card-showcase-stack" style={{ width: 294 }}>{card('category', { original: undefined }, 'category')}{card('category-expanded', { skus: commerceSKUs, original: undefined, temperature: 'chilled' }, 'category', true)}</div></section>
        <section><h4>④ 状态蒙层 · 已下架／售罄／非卖品</h4><div className="cm-card-showcase-grid">{(['unavailable', 'sold-out', 'not-for-sale'] as const).flatMap(status => (['en', 'zh'] as const).map(language => <ProductImage key={status + language} src={product.image} alt={product.name} status={status} locale={language} showTemperature={showTemperature} temperature="frozen"/>))}</div></section>
        <section><h4>⑤ 商品图 · 165／120／72</h4><div className="cm-card-showcase-tags">{([165, 120, 72] as const).map(size => <ProductImage key={size} src={product.image} alt={product.name} size={size} temperature="frozen" showTemperature={showTemperature} orderBy={zh ? '18:00前下单' : 'order by 18:00'} status="sold-out"/>)}</div></section>
        <section><h4>⑥ 温层标 · 冷冻／冷鲜 · 中英文</h4><div className="cm-card-showcase-tags">{(['en', 'zh'] as const).flatMap(language => (['frozen', 'chilled'] as const).map(temperature => <span key={language + temperature} style={{ position: 'relative', width: 42, height: 28 }}><ProductTemperatureTag temperature={temperature} locale={language}/></span>))}</div></section>
        <section><h4>⑦ 商品标签 · 实心优先，其次暖色／冷色／灰色</h4><p className="cm-card-showcase-caption">先比较实心与空心；同样式再比较色温，同级保持传入顺序。旧 blue 参数以中性灰显示。</p><div className="cm-card-showcase-tags">{sortProductTags((['red', 'orange', 'gold', 'green', 'gray'] as ProductTagTone[]).flatMap(tone => (['outline', 'solid'] as const).map(variant => ({tone, variant})))).map(({tone, variant}) => <ProductTag key={tone + variant} tone={tone} variant={variant} leadingIcon trailingArrow>{zh ? '满1500减150' : '¥150 off over ¥1500'}</ProductTag>)}</div></section>
        <section><h4>⑧ 供应商／供应商比价</h4><div className="cm-card-showcase-tags"><ProductSupplierTag name="foodmax"/><ProductSupplierTag name="foodmax" variant="comparison"/></div></section>
        <section><h4>⑨ 价格组 · 黑色售价、单位、单价与原价</h4><div className="cm-card-showcase-stack"><ProductPriceGroup amount="38.76" currency="$" unit="bag" unitPrice="$2.24/kg" original="45.24" originalPlacement="below" promotion/><ProductPriceGroup amount="38.76" currency="$" original="45.24" promotion/><ProductPriceGroup amount="38.76" currency="$" unit="bag" unitPrice="$2.24/kg"/><ProductPriceGroup amount="38.76" currency="$"/></div></section>
        <section><h4>⑩ 加购控件 · 点击、减至 0、上限、规格</h4><div className="cm-card-showcase-tags">{(['add', 'count', 'quantity', 'notify', 'similar', 'specs'] as const).map(mode => <ProductPurchaseControl key={mode} mode={mode} value={mode === 'quantity' ? quantities.control ?? 1 : 0} max={4} onAdd={() => setQuantities(q => ({ ...q, control: (q.control || 0) + 1 }))} onQuantity={v => setQuantities(q => ({ ...q, control: v }))} onToggle={() => setFeedback('商卡中的 specs 可展开真实规格')} onNotify={() => setFeedback('已开启到货提醒')} onSimilar={() => setFeedback('查看相似商品')}/>)}</div></section>
        <section><h4>⑪ 业务组合 · 猜你喜欢（双列）</h4><ProductCollection products={items.slice(0, 2)} showTemperature={showTemperature} onAdd={id => setQuantities(q => ({ ...q, [id]: (q[id] || 0) + 1 }))} onQuantity={(id, v) => setQuantities(q => ({ ...q, [id]: v }))}/></section>
        <section><h4>⑫ 业务组合 · 猜你喜欢（单列）</h4><ProductCollection products={items.slice(0, 2)} layout="row" showTemperature={showTemperature} onAdd={id => setQuantities(q => ({ ...q, [id]: (q[id] || 0) + 1 }))} onQuantity={(id, v) => setQuantities(q => ({ ...q, [id]: v }))}/></section>
        <section><h4>⑬ 分类框架 · 复用新版分类商卡</h4><div style={{ height: 600 }}><CategoryLayout variant="image-primary" title="Vegetables" primaryCategories={primaryCategories} primaryOptions={[]} primaryValue={primary} onPrimaryChange={setPrimary} categories={textCategories} selected={category} onSelect={setCategory} products={items} showTemperature={showTemperature} onAdd={id => setQuantities(q => ({ ...q, [id]: (q[id] || 0) + 1 }))} onQuantity={(id, v) => setQuantities(q => ({ ...q, [id]: v }))} query={query} onQuery={setQuery} tertiaryOptions={tertiaryCategories} tertiaryValue={tertiary} onTertiaryChange={setTertiary} sort={sort} onSort={setSort} expanded={expanded} onExpand={() => setExpanded(v => !v)}/></div></section>
    </div></LocaleProvider>;
}
