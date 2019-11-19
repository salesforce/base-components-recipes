/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

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
