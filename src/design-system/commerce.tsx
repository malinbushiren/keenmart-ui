import { useKeenLocale } from './locale';
import { PriceValue as Price } from './price-value';
import React, { useState } from 'react';
import { Tag, AddButton, QuantityStepper, Button, ChoiceChip, BottomSheet } from './components';
import { Icon } from './Icon';
import { SearchBar, Artwork, EmptyState } from './foundations';
import type { ArtworkLayer } from './foundations';
import type { Product } from './business';
import './commerce.css';
export type ProductCardVariant = 'grid' | 'full-width' | 'category';
export type ProductAvailability = 'available' | 'sold-out' | 'unavailable' | 'not-for-sale';
export type ProductSKU = {
    id: string;
    label: string;
    amount: string;
    unitPrice?: string;
    promotion?: string;
    max?: number;
};
export type CommerceProduct = Product & {
    currency?: string;
    unit?: string;
    unitPrice?: string;
    promotion?: string;
    supplier?: string;
    supplierVariant?: 'supplier' | 'comparison';
    orderBy?: string;
    availability?: ProductAvailability;
    purchase?: 'add' | 'quantity' | 'count' | 'notify' | 'similar' | 'none';
    max?: number;
    skus?: ProductSKU[];
};
export function CommercePrice({ amount, original, currency = 'SAR', unit, unitPrice, promotion = false, originalPlacement = 'inline' }: {
    amount: string;
    original?: string;
    currency?: string;
    unit?: string;
    unitPrice?: string;
    promotion?: boolean;
    originalPlacement?: 'inline' | 'below';
}) { const { t: kmText } = useKeenLocale(); return <div className={'cm-price cm-price-' + originalPlacement}><div><Price amount={amount} original={originalPlacement === 'inline' ? original : undefined} currency={currency} unit={unit} promotion={promotion}/>{unitPrice && <span className="cm-unit-price">{unitPrice}</span>}</div>{originalPlacement === 'below' && original && <del>{currency}{original}</del>}</div>; }
export function CommerceSupplier({ name, variant = 'supplier', onClick }: {
    name: string;
    variant?: 'supplier' | 'comparison';
    onClick?: () => void;
}) { const { t: kmText } = useKeenLocale(); const content = <><img src="/assets/2d8d7.svg" alt=""/><span>{variant === 'comparison' ? kmText("more supplier price") : name}</span><span className="cm-supplier-arrow"><img src="/assets/fb0f0.svg" alt=""/></span></>; return onClick ? <button className="cm-supplier" type="button" onClick={onClick}>{content}</button> : <span className="cm-supplier">{content}</span>; }
export function CommerceStatus({ status, locale = 'en', size = 'regular' }: {
    status: ProductAvailability;
    locale?: 'en' | 'zh';
    size?: 'regular' | 'compact';
}) {
    const { t: kmText } = useKeenLocale();
    if (status === 'available')
        return null;
    return <div className={'cm-status cm-status-' + size}><span>{locale === 'zh' ? { 'sold-out': '售罄', unavailable: '已下架', 'not-for-sale': '非卖品' }[status] : { 'sold-out': kmText("Sold out"), unavailable: kmText("Unavailable"), 'not-for-sale': kmText("Not for Sale") }[status]}</span></div>;
}
export function CommercePurchase({ mode = 'add', value = 0, max = 99, expanded = false, onAdd, onQuantity, onToggle, onNotify, onSimilar }: {
    mode?: 'add' | 'quantity' | 'count' | 'notify' | 'similar' | 'specs' | 'none';
    value?: number;
    max?: number;
    expanded?: boolean;
    onAdd: () => void;
    onQuantity?: (v: number) => void;
    onToggle?: () => void;
    onNotify?: () => void;
    onSimilar?: () => void;
}) {
    const { t: kmText } = useKeenLocale();
    if (mode === 'none')
        return null;
    if (mode === 'specs')
        return <Button size="compact" className="cm-specs" onClick={onToggle} aria-expanded={expanded}>{kmText("specs")}<Icon name={expanded ? 'up-2-12' : 'down-2-12'}/></Button>;
    if (mode === 'notify' || mode === 'similar')
        return <Button variant="outline" size="compact" className="cm-soft-action" onClick={mode === 'notify' ? onNotify : onSimilar}>{mode === 'notify' && <img src="/assets/71f5a.svg" alt=""/>}{mode === 'notify' ? kmText("notify me") : 'View Similar'}</Button>;
    if (value > 0 && mode !== 'count')
        return <QuantityStepper variant="overlay" min={0} value={value} max={max} onChange={onQuantity || (() => { })}/>;
    if (mode === 'count')
        return <button type="button" className="cm-count" onClick={onAdd} aria-label={kmText("Edit quantity")}>{value || 1}</button>;
    return <AddButton onClick={onAdd}/>;
}
function Promotion({ text }: {
    text: string;
}) { return <Tag tone="marketing" variant="outline"><span className="cm-coupon-icon" aria-hidden="true"><img src="/assets/d9633.svg" alt=""/><img src="/assets/878af.svg" alt=""/></span>{text}</Tag>; }
export type CommerceCardProps = {
    product: CommerceProduct;
    variant?: ProductCardVariant;
    quantity?: number;
    onAdd: () => void;
    onQuantity?: (value: number) => void;
    onSKUQuantity?: (id: string, value: number) => void;
    skuQuantities?: Record<string, number>;
    initialExpanded?: boolean;
    onNotify?: () => void;
    onSimilar?: () => void;
    onSupplier?: () => void;
    locale?: 'en' | 'zh';
};
export function CommerceProductCard({ product: p, variant = 'grid', quantity = 0, onAdd, onQuantity, skuQuantities = {}, onSKUQuantity, initialExpanded = false, onNotify, onSimilar, onSupplier, locale = 'en' }: CommerceCardProps) { const { t: kmText } = useKeenLocale(); const [expanded, setExpanded] = useState(initialExpanded); const status = p.availability || (p.unavailable ? 'sold-out' : 'available'); const mode = status === 'sold-out' ? 'notify' : status === 'unavailable' ? 'similar' : status === 'not-for-sale' ? 'none' : p.skus?.length ? 'specs' : p.purchase || (quantity > 0 ? 'quantity' : 'add'); const media = <div className="cm-card-media"><img className="cm-product-photo" src={p.image} alt={p.name} style={{ objectFit: p.imageFit || 'cover', objectPosition: p.image === '/assets/5a9f6.png' ? '85% center' : undefined }}/>{p.orderBy && <span className="cm-order-by" title={p.orderBy}>{p.orderBy}</span>}<CommerceStatus status={status} locale={locale} size={variant === 'category' ? 'compact' : 'regular'}/>{variant === 'grid' && <div className="cm-card-purchase"><CommercePurchase mode={mode} value={quantity} max={p.max} expanded={expanded} onToggle={() => setExpanded(!expanded)} onAdd={onAdd} onQuantity={onQuantity} onNotify={onNotify} onSimilar={onSimilar}/></div>}</div>; return <article className={'cm-product-card cm-product-card-' + variant} data-product-id={p.id} data-availability={status}><div className="cm-card-main">{media}<div className="cm-card-content"><div className="cm-card-title"><p title={p.name}>{p.titleBadge && <Tag tone="success">{p.titleBadge}</Tag>}{p.name}</p><small>{p.weight}</small></div><div className="cm-price-actions"><div><CommercePrice amount={p.amount} original={p.original} currency={p.currency} unit={p.unit} unitPrice={p.unitPrice} promotion={!!p.original || !!p.promotion} originalPlacement={variant === 'grid' && p.unitPrice ? 'below' : 'inline'}/>{(p.promotion || p.badge) && <Promotion text={p.promotion || p.badge!}/>}</div>{variant !== 'grid' && <CommercePurchase mode={mode} value={quantity} max={p.max} expanded={expanded} onToggle={() => setExpanded(!expanded)} onAdd={onAdd} onQuantity={onQuantity} onNotify={onNotify} onSimilar={onSimilar}/>}</div>{p.supplier && <CommerceSupplier name={p.supplier} variant={p.supplierVariant} onClick={onSupplier}/>}</div></div>{p.skus?.length && expanded && variant !== 'grid' && <div className="cm-sku-list">{p.skus.map(sku => <div key={sku.id} className="cm-sku-row"><span className="cm-sku-label">{sku.label}</span><div className="cm-sku-price"><CommercePrice amount={sku.amount} currency={p.currency} unitPrice={sku.unitPrice} promotion={!!sku.promotion}/></div>{sku.promotion && <div className="cm-sku-promotion"><Promotion text={sku.promotion}/></div>}<CommercePurchase mode={skuQuantities[sku.id] ? 'quantity' : 'add'} value={skuQuantities[sku.id] || 0} max={sku.max} onAdd={() => onSKUQuantity?.(sku.id, 1)} onQuantity={v => onSKUQuantity?.(sku.id, v)}/></div>)}</div>}{variant === 'grid' && p.skus?.length && <BottomSheet open={expanded} title={kmText("Choose options")} showClose onClose={() => setExpanded(false)}><div className="cm-sku-list cm-sku-sheet">{p.skus.map(sku => <div key={sku.id} className="cm-sku-row"><span className="cm-sku-label">{sku.label}</span><div className="cm-sku-price"><CommercePrice amount={sku.amount} currency={p.currency} unitPrice={sku.unitPrice} promotion={!!sku.promotion}/></div>{sku.promotion && <div className="cm-sku-promotion"><Promotion text={sku.promotion}/></div>}<CommercePurchase value={skuQuantities[sku.id] || 0} max={sku.max} onAdd={() => onSKUQuantity?.(sku.id, 1)} onQuantity={v => onSKUQuantity?.(sku.id, v)}/></div>)}</div></BottomSheet>}</article>; }
export type CommerceCategory = {
    id: string;
    label: string;
    image?: string;
    selectedImage?: string;
    layers?: ArtworkLayer[];
};
export type CategoryLayoutProps = {
    variant?: 'image-primary' | 'text-primary';
    title: string;
    categories: CommerceCategory[];
    selected: string;
    onSelect: (id: string) => void;
    products: CommerceProduct[];
    onAdd: (id: string) => void;
    onQuantity?: (id: string, value: number) => void;
    primaryCategories?: CommerceCategory[];
    primaryOptions: string[];
    primaryValue?: string;
    onPrimaryChange: (value: string) => void;
    expanded?: boolean;
    onExpand: () => void;
    query?: string;
    onQuery?: (v: string) => void;
    onSearch?: () => void;
    tertiaryOptions?: string[];
    tertiaryValue?: string;
    onTertiaryChange?: (v: string) => void;
    sort?: 'default' | 'sales' | 'price';
    onSort?: (sort: 'default' | 'sales' | 'price') => void;
};
function CategoryPicture({ category, selected = false }: {
    category: CommerceCategory;
    selected?: boolean;
}) { return category.image ? <img src={selected && category.selectedImage ? category.selectedImage : category.image} alt=""/> : category.layers ? <Artwork layers={category.layers} label=""/> : null; }
export function CommerceCategoryLayout({ variant = 'text-primary', title, categories, selected, onSelect, products, onAdd, onQuantity, primaryCategories = [], primaryOptions, primaryValue, onPrimaryChange, expanded = false, onExpand, query = '', onQuery, onSearch, tertiaryOptions = [], tertiaryValue, onTertiaryChange, sort = 'default', onSort }: CategoryLayoutProps) { const { t: kmText } = useKeenLocale(); const [skuCounts, setSkuCounts] = useState<Record<string, number>>({}), [showFilters, setShowFilters] = useState(false); const primary = primaryCategories.length ? primaryCategories : primaryOptions.map(label => ({ id: label, label })); return <section className={'cm-category-layout cm-category-' + variant}><header>{variant === 'image-primary' ? <><SearchBar value={query} onChange={onQuery || (() => { })} onSubmit={onSearch} placeholder={kmText("Search products")} surface="white" showSubmit={false}/><div className="cm-primary-strip"><nav aria-label={kmText("Primary categories")}>{primary.map(c => <button type="button" key={c.id} aria-current={(primaryValue || title) === c.id || (primaryValue || title) === c.label ? 'true' : undefined} onClick={() => onPrimaryChange(c.id)} title={c.label}><CategoryPicture category={c} selected={(primaryValue || title) === c.id}/><span>{c.label}</span></button>)}</nav><button className="cm-all-categories" type="button" onClick={onExpand}>{kmText("All")}<Icon name="down-2-12"/></button></div></> : <div className="cm-category-heading"><div><small>{kmText("Category")}</small><button type="button" onClick={onExpand} aria-expanded={expanded}>{title}<Icon name="down-2-12"/></button></div><button className="kb-icon-button" type="button" aria-label={kmText("Search categories")} onClick={onSearch}><Icon name="search-24"/></button></div>}</header><div className="cm-category-body"><nav className="cm-secondary-nav" aria-label={kmText("Secondary categories")}>{categories.map(c => <button type="button" key={c.id} aria-current={selected === c.id ? 'true' : undefined} onClick={() => onSelect(c.id)}>{variant === 'text-primary' && <span className="cm-category-picture"><CategoryPicture category={c}/></span>}<span>{c.label}</span></button>)}</nav><div className="cm-category-results">{variant === 'image-primary' && <><div className={'cm-tertiary ' + (showFilters ? 'is-expanded' : '')}><div>{tertiaryOptions.map(v => <ChoiceChip key={v} selected={v === tertiaryValue} onClick={() => onTertiaryChange?.(v)}>{v}</ChoiceChip>)}</div><button type="button" aria-label={kmText("Expand subcategories")} aria-expanded={showFilters} onClick={() => setShowFilters(!showFilters)}><Icon name={showFilters ? 'up-2-12' : 'down-2-12'}/></button></div><div className="cm-category-sort"><span>{tertiaryValue}</span><div><button type="button" aria-pressed={sort === 'sales'} onClick={() => onSort?.('sales')}>{kmText("Sales")}</button><button type="button" aria-pressed={sort === 'price'} onClick={() => onSort?.('price')}>{kmText("Price")}<Icon name="down-2-12"/></button></div></div></>}{products.length ? products.map((p, i) => <CommerceProductCard key={p.id} product={p} variant="category" quantity={p.action === 'stepper' ? p.quantity : undefined} onAdd={() => onAdd(p.id)} onQuantity={v => onQuantity?.(p.id, v)} initialExpanded={!!p.skus && i === 2} skuQuantities={skuCounts} onSKUQuantity={(id, v) => setSkuCounts({ ...skuCounts, [id]: v })}/>) : <EmptyState kind="goods" title={kmText("No products found")}/>}</div></div><BottomSheet open={expanded} title={kmText("Categories")} onClose={onExpand} showClose><nav className="cm-category-picker">{primary.map(c => <button type="button" key={c.id} onClick={() => { onPrimaryChange(c.id); onExpand(); }}><CategoryPicture category={c}/><span>{c.label}</span></button>)}</nav></BottomSheet></section>; }
