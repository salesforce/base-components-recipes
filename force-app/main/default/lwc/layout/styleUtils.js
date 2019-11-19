/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { normalizeString } from 'c/utilsPrivate';
import { classSet } from 'c/utils';

const HALIN_CLASS = {
    center: 'slds-grid_align-center',
    space: 'slds-grid_align-space',
    spread: 'slds-grid_align-spread',
    end: 'slds-grid_align-end'
};

const VALIN_CLASS = {
    start: 'slds-grid_vertical-align-start',
    center: 'slds-grid_vertical-align-center',
    end: 'slds-grid_vertical-align-end',
    stretch: 'slds-grid_vertical-stretch'
};

const BOUNDARY_CLASS = {
    small: 'slds-grid_pull-padded',
    medium: 'slds-grid_pull-padded-medium',
    large: 'slds-grid_pull-padded-large'
};

export const VERTICAL_ALIGN = Object.keys(VALIN_CLASS);
export const BOUNDARY = Object.keys(BOUNDARY_CLASS);
export const HORIZONTAL_ALIGN = Object.keys(HALIN_CLASS);

const ROWS_CLASS = 'slds-wrap';
const GRID_CLASS = 'slds-grid';

export function normalizeParam(value, valid, fallback) {
    value = value ? value.toLowerCase() : ' ';
    return normalizeString(value, {
        fallbackValue: fallback || ' ',
        validValues: valid || []
    });
}

export function computeLayoutClass(hAlign, vAlign, boundary, multiRows) {
    const computedClass = classSet(GRID_CLASS);

    if (hAlign !== ' ' && HALIN_CLASS[hAlign]) {
        computedClass.add(HALIN_CLASS[hAlign]);
    }

    if (vAlign !== ' ' && VALIN_CLASS[vAlign]) {
        computedClass.add(VALIN_CLASS[vAlign]);
    }

    if (boundary !== ' ' && BOUNDARY_CLASS[boundary]) {
        computedClass.add(BOUNDARY_CLASS[boundary]);
    }

    if (multiRows) {
        computedClass.add(ROWS_CLASS);
    }

    return computedClass;
}