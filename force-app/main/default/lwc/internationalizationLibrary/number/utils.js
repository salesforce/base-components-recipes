/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import locale from '@salesforce/i18n/locale';
import numberFormat from '@salesforce/i18n/number.numberFormat';
import percentFormat from '@salesforce/i18n/number.percentFormat';
import currencyFormat from '@salesforce/i18n/number.currencyFormat';
import currency from '@salesforce/i18n/currency';

const POSSIBLE_OPTS = {
    style: true,
    currency: true,
    currencyDisplay: true,
    useGrouping: true,
    minimumIntegerDigits: true,
    minimumFractionDigits: true,
    maximumFractionDigits: true,
    minimumSignificantDigits: true,
    maximumSignificantDigits: true
};

const STYLE = {
    DECIMAL: 'decimal',
    CURRENCY: 'currency',
    PERCENT: 'percent'
};

const CURRENCY_DISPLAY = {
    CODE: 'code',
    SYMBOL: 'symbol',
    NAME: 'name'
};

const SAFE_NUM_LENGTH = 15;
const SAFE_NUM_REGEXP = /0+$/;

const numberFormatInstancesCache = {};

function getStringOfChar(char, amount) {
    return new Array(amount + 1).join(char);
}

function getGroupingCount(skeleton) {
    const match = skeleton.match(/,[#0]*\./);
    return match ? match[0].length - 2 : 0;
}

function getOptionsUniqueKey(options) {
    return Object.keys(options)
        .sort()
        .reduce((prev, optionName) => {
            if (POSSIBLE_OPTS[optionName]) {
                return prev + optionName + options[optionName] + '';
            }
            return prev;
        }, '');
}

function toNumber(value, defaultValue) {
    const number = parseInt(value, 10);
    if (isNaN(number)) {
        return defaultValue;
    }
    return number;
}

function getFractionPart(options) {
    const minimumDigits = toNumber(options.minimumFractionDigits, 0);
    const maximumDigits = Math.max(
        toNumber(options.maximumFractionDigits, 0),
        minimumDigits
    );

    return (
        '.' +
        new Array(minimumDigits + 1).join('0') +
        new Array(maximumDigits - minimumDigits + 1).join('#')
    );
}

function updateFractionPart(skeleton, options) {
    const fractionPart = getFractionPart(options);
    return addFractionsToPattern(skeleton, fractionPart);
}

function addFractionsToPattern(pattern, fractionPart) {
    if (!fractionPart) {
        return pattern;
    }

    if (pattern.indexOf(';') > 0) {
        const [positivePattern, negativePattern] = pattern.split(';');
        return `${addFractionsToPattern(
            positivePattern,
            fractionPart
        )};${addFractionsToPattern(negativePattern, fractionPart)}`;
    }

    if (pattern.indexOf('.') > 0) {
        return pattern.replace(/\.(0|#)*/, fractionPart);
    }

    const position =
        Math.max(pattern.lastIndexOf('0'), pattern.lastIndexOf('#')) + 1;
    return [
        pattern.slice(0, position),
        fractionPart,
        pattern.slice(position)
    ].join('');
}

function updateCurrencySymbol(skeleton, currencyCode, options) {
    const symbol = String.fromCharCode(164);
    if (options.currencyDisplay === CURRENCY_DISPLAY.NAME) {
        return skeleton.replace(symbol, '') + currencyCode;
    }
    return skeleton.replace(symbol, currencyCode);
}

function updateIntegerPart(skeleton, options) {
    const minimumIntegerDigits = options.minimumIntegerDigits;
    const groupingCount = getGroupingCount(skeleton);
    if (!minimumIntegerDigits) {
        return skeleton;
    }
    if (minimumIntegerDigits <= groupingCount) {
        return skeleton.replace(
            /,[#0]*\./,
            ',' +
                getStringOfChar('#', groupingCount - minimumIntegerDigits) +
                getStringOfChar('0', minimumIntegerDigits) +
                '.'
        );
    }
    return skeleton.replace(
        /[#0]*\./,
        getStringOfChar('0', minimumIntegerDigits - groupingCount) +
            ',' +
            getStringOfChar('0', groupingCount) +
            '.'
    );
}

function getBestMatchCurrencySymbol(code, currencyDisplay) {
    if (!('Intl' in window)) {
        return code;
    }
    const opts = {
        style: 'currency',
        currency: code,
        minimumFractionDigits: 0
    };

    if (currencyDisplay) {
        opts.currencyDisplay = currencyDisplay;
    }
    const nf = getFromCache(opts);
    return nf.format(2).replace(/2/g, '');
}

function getCurrency(options) {
    const currencyDisplay = options.currencyDisplay || CURRENCY_DISPLAY.SYMBOL;
    if (
        currencyDisplay === CURRENCY_DISPLAY.SYMBOL ||
        currencyDisplay === CURRENCY_DISPLAY.NAME
    ) {
        return getBestMatchCurrencySymbol(options.currency, currencyDisplay);
    }
    return options.currency;
}

function getFromCache(options) {
    const optionsUniqueKey = getOptionsUniqueKey(options);
    let numberFormatInstance = numberFormatInstancesCache[optionsUniqueKey];
    if (numberFormatInstance) {
        return numberFormatInstance;
    }
    numberFormatInstance = new Intl.NumberFormat(locale, options);
    numberFormatInstancesCache[optionsUniqueKey] = numberFormatInstance;
    return numberFormatInstance;
}

function exceedsSafeLength(value) {
    const numberAsString = value.toString();
    const [intPart, fractionPart] = numberAsString.split('.');

    const digitCount =
        intPart.length +
        (fractionPart ? fractionPart.replace(SAFE_NUM_REGEXP, '').length : 0);
    return digitCount >= SAFE_NUM_LENGTH;
}

function normalizedMinimumFractionDigits(options) {
    const fractionSkeleton = getFallbackFractionSkeleton(options.style);
    const fractionDigits = fractionSkeleton.replace(/[^0]/g, '');
    return fractionDigits.length;
}

function normalizedMaximumFractionDigits(options) {
    const fractionSkeleton = getFallbackFractionSkeleton(options.style);
    const fractionDigits = fractionSkeleton.replace(/[^0#]/g, '');
    return Math.max(options.minimumFractionDigits, fractionDigits.length);
}

function getFallbackFractionSkeleton(style) {
    let styleFormat = numberFormat;
    if (style === STYLE.CURRENCY) {
        styleFormat = currencyFormat;
    } else if (style === STYLE.PERCENT) {
        styleFormat = percentFormat;
    }
    const format = styleFormat.split(';')[0];
    return format.split('.')[1] || '';
}

function normalizeOptions(options) {
    const normalizedOpts = Object.assign({}, options);

    normalizedOpts.currency = normalizedOpts.currency || currency;

    if (normalizedOpts.minimumFractionDigits === undefined) {
        normalizedOpts.minimumFractionDigits = normalizedMinimumFractionDigits(
            normalizedOpts
        );
    }
    if (
        normalizedOpts.maximumFractionDigits === undefined ||
        normalizedOpts.maximumFractionDigits <
            normalizedOpts.minimumFractionDigits
    ) {
        normalizedOpts.maximumFractionDigits = normalizedMaximumFractionDigits(
            normalizedOpts
        );
    }
    return normalizedOpts;
}

export {
    exceedsSafeLength,
    getFromCache,
    getCurrency,
    normalizeOptions,
    updateIntegerPart,
    updateFractionPart,
    updateCurrencySymbol
};
