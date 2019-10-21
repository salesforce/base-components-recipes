import { numberFormatFallback } from './numberFormatFallback';
import { normalizeOptions, exceedsSafeLength, getFromCache } from './utils';

export function numberFormat(options) {
    const normalizedOpts = Object.assign({}, normalizeOptions(options));
    if (!('Intl' in window)) {
        return numberFormatFallback(normalizedOpts);
    }

    return {
        format: value => {
            if (
                value &&
                exceedsSafeLength(value, normalizedOpts.maximumFractionDigits)
            ) {
                return numberFormatFallback(normalizedOpts).format(value);
            }
            const numberFormatInstance = getFromCache(normalizedOpts);
            return numberFormatInstance.format(value);
        }
    };
}
