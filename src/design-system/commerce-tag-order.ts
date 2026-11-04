/** Solid before outline; within each style: warm, cool, neutral. Stable within each tier. */
export function sortProductTags<T extends { variant?: 'solid' | 'outline'; tone?: string }>(tags: readonly T[]): T[] {
    const temperature = (tone = 'red') => ['red', 'orange', 'gold'].includes(tone) ? 0 : tone === 'green' ? 1 : 2;
    return tags.map((tag, index) => ({ tag, index })).sort((a, b) =>
        Number(a.tag.variant !== 'solid') - Number(b.tag.variant !== 'solid') ||
        temperature(a.tag.tone) - temperature(b.tag.tone) || a.index - b.index
    ).map(({ tag }) => tag);
}
