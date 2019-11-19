/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import locale from '@salesforce/i18n/locale';

const FALLBACK_LOCALE = 'en-us';
const symbolsCache = {};

export function getNameOfWeekdays() {
    const localeCache = symbolsCache[locale];

    if (localeCache && localeCache.weekdays) {
        return localeCache.weekdays;
    }

    const locales = [locale, FALLBACK_LOCALE];
    const fullNameFormatter = new Intl.DateTimeFormat(locales, {
        weekday: 'long',
        timeZone: 'UTC'
    });

    const shortNameFormatter = new Intl.DateTimeFormat(locales, {
        weekday: 'short',
        timeZone: 'UTC'
    });

    const weekdays = [];

    for (let i = 0; i <= 6; i++) {
        const date = new Date(Date.UTC(1970, 0, 4 + i));
        weekdays.push({
            fullName: format(fullNameFormatter, date),
            shortName: format(shortNameFormatter, date)
        });
    }

    if (!symbolsCache[locale]) {
        symbolsCache[locale] = {};
    }
    symbolsCache[locale].weekdays = weekdays;

    return weekdays;
}

export function getMonthNames() {
    const localeCache = symbolsCache[locale];

    if (localeCache && localeCache.months) {
        return localeCache.months;
    }

    const locales = [locale, FALLBACK_LOCALE];
    const monthNameFormatter = new Intl.DateTimeFormat(locales, {
        month: 'long'
    });

    const months = [];

    for (let i = 0; i <= 11; i++) {
        const date = new Date(1970, i, 4);
        months.push({
            fullName: format(monthNameFormatter, date)
        });
    }

    if (!symbolsCache[locale]) {
        symbolsCache[locale] = {};
    }
    symbolsCache[locale].months = months;

    return months;
}

function format(dateTimeFormat, date) {
    const formattedDate = dateTimeFormat.format(date);
    return removeIE11Markers(formattedDate);
}

function removeIE11Markers(formattedString) {
    return formattedString.replace(/[\u200E\u200F]/g, '');
}
