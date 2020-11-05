/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { normalizeString } from 'c/utilsPrivate';
import { classSet } from 'c/utils';

const SIZE_MIN = 1;
const SIZE_MAX = 12;
const DEFAULT_LAYOUT_SIZE = {
    default: null,
    small: null,
    medium: null,
    large: null
};

const PADDING = [
    'horizontal-small',
    'horizontal-medium',
    'horizontal-large',
    'around-small',
    'around-medium',
    'around-large'
];

const PADDING_CLASS = {
    'slds-p-right_small': 'horizontal-small',
    'slds-p-left_small': 'horizontal-small',
    'slds-p-right_medium': 'horizontal-medium',
    'slds-p-left_medium': 'horizontal-medium',
    'slds-p-right_large': 'horizontal-large',
    'slds-p-left_large': 'horizontal-large',
    'slds-p-around_small': 'around-small',
    'slds-p-around_medium': 'around-medium',
    'slds-p-around_large': 'around-large'
};

const FLEXIBILITY = [
    'auto',
    'shrink',
    'no-shrink',
    'grow',
    'no-grow',
    'no-flex'
];

const FLEX_CLASS = {
    'slds-col': 'auto',
    'slds-grow': 'grow',
    'slds-shrink': 'shrink',
    'slds-grow-none': 'no-grow',
    'slds-shrink-none': 'no-shrink',
    'slds-no-flex': 'no-flex'
};

const SIZE_CLASS = {
    default: 'slds-size_',
    small: 'slds-small-size_',
    medium: 'slds-medium-size_',
    large: 'slds-large-size_'
};

const DIRECTION = ['left', 'top', 'right', 'bottom'];

export const STYLE_ERROR = {
    FLEX_CONFLICT:
        'You cannot have `flexibility` value to be set to `auto` and `no-flex` together for <c-layout-item> component',
    SIZE_RANGE:
        'Invalid `size` attribute for <c-layout-item> component. The `size` attribute should be an integer between 1 and 12',
    SMALL_SIZE_RANGE:
        'Invalid `smallDeviceSize` attribute for <c-layout-item> component. The `smallDeviceSize` attribute should be an integer between 1 and 12',
    MEDIUM_SIZE_RANGE:
        'Invalid `mediumDeviceSize` attribute for <c-layout-item> component. The `mediumDeviceSize` attribute should be an integer between 1 and 12',
    LARGE_SIZE_RANGE:
        'Invalid `largeDeviceSize` attribute for <c-layout-item> component. The `largeDeviceSize` attribute should be an integer between 1 and 12',
    SIZE_REQUIRED:
        'You cannot have device specific size attributes for <c-layout-item> component without specifying the `size` attribute'
};

function hasConflict(value) {
    return (
        value.some((item) => item === 'auto') &&
        value.some((item) => item === 'no-flex')
    );
}

function toArray(value) {
    if (Array.isArray(value)) {
        return value;
    } else if (typeof value === 'string') {
        value = value.split(',');
        return value.map((item) => item.trim());
    }
    return [value];
}

export function normalizeDirection(value, fallback) {
    value = value ? value.toLowerCase() : ' ';
    return normalizeString(value, {
        fallbackValue: fallback || '',
        validValues: DIRECTION
    });
}

export function normalizePadding(value) {
    value = value ? value.toLowerCase() : ' ';
    return normalizeString(value, {
        fallbackValue: ' ',
        validValues: PADDING
    });
}

export function normalizeFlexibility(value) {
    value = toArray(value);
    if (hasConflict(value)) {
        throw new Error(STYLE_ERROR.FLEX_CONFLICT);
    }

    return value.filter((item) =>
        FLEXIBILITY.some((allowed) => item === allowed)
    );
}

export function normalizeSize(value) {
    if (value != null) {
        const size = parseFloat(value);
        return isNaN(size) ? null : Math.round(size);
    }
    return value;
}

function computePaddingClass(padding, computedClass) {
    computedClass = computedClass || classSet();
    padding = padding || ' ';
    Object.keys(PADDING_CLASS).forEach((key) => {
        if (PADDING_CLASS[key].toLowerCase() === padding) {
            computedClass.add(key);
        }
    });
    return computedClass;
}

function computeFlexibilityClass(flexibility, computedClass) {
    computedClass = computedClass || classSet();
    flexibility = flexibility || [];
    Object.keys(FLEX_CLASS).forEach((key) => {
        if (flexibility.some((flex) => flex === FLEX_CLASS[key])) {
            computedClass.add(key);
        }
    });
    return computedClass;
}

function computeSizeClass(layoutSize, computedClass) {
    computedClass = computedClass || classSet();
    layoutSize = layoutSize || DEFAULT_LAYOUT_SIZE;
    Object.keys(SIZE_CLASS).forEach((key) => {
        const size = layoutSize[key];
        if (size != null && size !== 0) {
            computedClass.add(`${SIZE_CLASS[key]}${size}-of-12`);
        }
    });
    return computedClass;
}

function computeBumpClass(direction, computedClass) {
    computedClass = computedClass || classSet();
    direction = direction || '';
    if (direction !== '') {
        computedClass.add(`slds-col_bump-${direction}`);
    }
    return computedClass;
}

export function computeLayoutClass(layoutSize, flexibility, padding, bump) {
    const computedClass = computePaddingClass(padding);
    computeFlexibilityClass(flexibility, computedClass);
    computeSizeClass(layoutSize, computedClass);
    computeBumpClass(bump, computedClass);
    return computedClass;
}

export function validateSize(
    size,
    smallDeviceSize,
    mediumDeviceSize,
    largeDeviceSize
) {
    if (size != null && !(SIZE_MIN <= size && size <= SIZE_MAX)) {
        throw new Error(STYLE_ERROR.SIZE_RANGE);
    }
    if (
        smallDeviceSize != null &&
        !(SIZE_MIN <= smallDeviceSize && smallDeviceSize <= SIZE_MAX)
    ) {
        throw new Error(STYLE_ERROR.SMALL_SIZE_RANGE);
    }
    if (
        mediumDeviceSize != null &&
        !(SIZE_MIN <= mediumDeviceSize && mediumDeviceSize <= SIZE_MAX)
    ) {
        throw new Error(STYLE_ERROR.MEDIUM_SIZE_RANGE);
    }
    if (
        largeDeviceSize &&
        !(SIZE_MIN <= largeDeviceSize && largeDeviceSize <= SIZE_MAX)
    ) {
        throw new Error(STYLE_ERROR.LARGE_SIZE_RANGE);
    }
    if (
        size == null &&
        (smallDeviceSize != null ||
            mediumDeviceSize != null ||
            largeDeviceSize != null)
    ) {
        throw new Error(STYLE_ERROR.SIZE_REQUIRED);
    }
    return true;
}
