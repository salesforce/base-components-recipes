export function isNarrow(variant) {
    return typeof variant === 'string' && variant.toLowerCase() === 'narrow';
}

export function isBase(variant) {
    return typeof variant === 'string' && variant.toLowerCase() === 'base';
}
