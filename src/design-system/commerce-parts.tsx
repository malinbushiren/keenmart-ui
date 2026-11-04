import React from 'react';
import { useKeenLocale } from './locale';
import type { ProductAvailability } from './commerce';

export function CommerceStatus({ status, locale, size = 'regular' }: {
    status: ProductAvailability;
    locale?: 'en' | 'zh';
    size?: 'regular' | 'compact';
}) {
    const { locale: currentLocale } = useKeenLocale();
    const chinese = locale ? locale === 'zh' : currentLocale === 'zh-CN';
    if (status === 'available')
        return null;
    return <div className={'cm-status cm-status-' + size}><span>{chinese ? { 'sold-out': '售罄', unavailable: '已下架', 'not-for-sale': '非卖品' }[status] : { 'sold-out': "Sold out", unavailable: "Unavailable", 'not-for-sale': "Not for Sale" }[status]}</span></div>;
}

export type ProductTemperature = 'frozen' | 'chilled';
export type ProductTagTone = 'red' | 'blue' | 'orange' | 'gray' | 'green' | 'gold';
export type ProductTagData = {
    text: string;
    tone?: ProductTagTone;
    variant?: 'outline' | 'solid';
    leadingIcon?: boolean;
    trailingArrow?: boolean;
};

export function CommerceTemperatureTag({ temperature, locale }: { temperature: ProductTemperature; locale?: 'en' | 'zh' }) {
    const { locale: currentLocale } = useKeenLocale();
    const zh = locale ? locale === 'zh' : currentLocale === 'zh-CN';
    const frozen = temperature === 'frozen';
    return <span className={'cm-temperature cm-temperature-' + temperature} data-temperature={temperature}>
        <strong>{zh ? frozen ? '冷冻' : '冷鲜' : frozen ? 'Frozen' : 'Chilled'}</strong>
        <small>{frozen ? zh ? '低于 -18°C' : 'below -18°C' : '0–4°C'}</small>
    </span>;
}

export function CommerceTag({ children, tone = 'red', variant = 'outline', leadingIcon = false, trailingArrow = false }: Omit<ProductTagData, 'text'> & { children: React.ReactNode }) {
    return <span className={`cm-product-tag cm-product-tag-${tone} cm-product-tag-${variant}`}>
        {leadingIcon && <span className="cm-product-tag-icon" aria-hidden="true"><i/><b/></span>}
        <span>{children}</span>
        {trailingArrow && <span className="cm-product-tag-arrow" aria-hidden="true"/>}
    </span>;
}

export function CommerceTitle({ title, badge, badgeTone = 'red' }: { title: string; badge?: string; badgeTone?: ProductTagTone }) {
    return <p className="cm-product-title" title={title}>{badge && <CommerceTag tone={badgeTone} variant="solid">{badge}</CommerceTag>}{title}</p>;
}

export type CommerceImageProps = {
    src: string;
    alt: string;
    size?: 165 | 120 | 72;
    imageFit?: 'cover' | 'contain';
    orderBy?: string;
    temperature?: ProductTemperature;
    showTemperature?: boolean;
    status?: ProductAvailability;
    locale?: 'en' | 'zh';
    action?: React.ReactNode;
};
export function CommerceImage({ src, alt, size = 165, imageFit = 'cover', orderBy, temperature, showTemperature = false, status = 'available', locale, action }: CommerceImageProps) {
    return <div className={'cm-card-media cm-product-image cm-product-image-' + size} data-image-size={size}>
        <img className="cm-product-photo" src={src} alt={alt} style={{ objectFit: imageFit, objectPosition: src === '/assets/5a9f6.png' ? '85% center' : undefined }}/>
        {orderBy && <span className="cm-order-by" title={orderBy}>{orderBy}</span>}
        {showTemperature && temperature && <CommerceTemperatureTag temperature={temperature} locale={locale}/>}
        <CommerceStatus status={status} locale={locale} size={size === 72 ? 'compact' : 'regular'}/>
        {action && <div className="cm-card-purchase">{action}</div>}
    </div>;
}
