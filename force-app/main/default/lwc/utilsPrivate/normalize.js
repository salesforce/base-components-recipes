/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

export function normalizeString(value, config = {}) {
    const { fallbackValue = '', validValues, toLowerCase = true } = config;
    let normalized = (typeof value === 'string' && value.trim()) || '';
    normalized = toLowerCase ? normalized.toLowerCase() : normalized;
    if (validValues && validValues.indexOf(normalized) === -1) {
        normalized = fallbackValue;
    }
    return normalized;
}

export function normalizeBoolean(value) {
    return typeof value === 'string' || !!value;
}

export function normalizeArray(value) {
    if (Array.isArray(value)) {
        return value;
    }
    return [];
}

export function normalizeAriaAttribute(value) {
    let arias = Array.isArray(value) ? value : [value];
    arias = arias
        .map(ariaValue => {
            if (typeof ariaValue === 'string') {
                return ariaValue.replace(/\s+/g, ' ').trim();
            }
            return '';
        })
        .filter(ariaValue => !!ariaValue);

    return arias.length > 0 ? arias.join(' ') : null;
}
