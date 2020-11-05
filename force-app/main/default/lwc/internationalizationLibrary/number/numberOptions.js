/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import numberFormat from '@salesforce/i18n/number.numberFormat';
import percentFormat from '@salesforce/i18n/number.percentFormat';
import currencyFormat from '@salesforce/i18n/number.currencyFormat';
import currency from '@salesforce/i18n/currency';
import {
    updateFractionPart,
    updateIntegerPart,
    updateCurrencySymbol,
    getCurrency
} from './utils';

function NumberOptions(options) {
    this.options = options || {};
}

NumberOptions.prototype.isCurrency = function () {
    return this.options.style === 'currency';
};

NumberOptions.prototype.isPercent = function () {
    return this.options.style === 'percent';
};

NumberOptions.prototype.isDefaultCurrency = function () {
    return !this.options.currency || currency === this.options.currency;
};

NumberOptions.prototype.getDefaultSkeleton = function () {
    return this.isCurrency()
        ? currencyFormat
        : this.isPercent()
        ? percentFormat
        : numberFormat;
};

NumberOptions.prototype.getSkeleton = function () {
    const options = this.options;
    const defaultSkeleton = this.getDefaultSkeleton();
    let skeleton = updateFractionPart(defaultSkeleton, options);
    skeleton = updateIntegerPart(skeleton, options);
    if (!this.isDefaultCurrency()) {
        skeleton = updateCurrencySymbol(
            skeleton,
            getCurrency(options),
            options
        );
    }
    return skeleton;
};

export { NumberOptions };
