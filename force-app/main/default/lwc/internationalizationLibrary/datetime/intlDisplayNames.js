/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import salesforceLocale from '@salesforce/i18n/locale';
import salesforceLanguage from '@salesforce/i18n/lang';

const FALLBACK_LOCALES = [salesforceLocale, 'en-us'];
const symbolsCache = {};

export function getNameOfWeekdays(languageOverride) {
    const language = languageOverride || salesforceLanguage;
    const languageDataCache = symbolsCache[language];

    if (languageDataCache && languageDataCache.weekdays) {
        return languageDataCache.weekdays;
    }

    const intlLocales = [language, ...FALLBACK_LOCALES];
    const fullNameFormatter = new Intl.DateTimeFormat(intlLocales, {
        weekday: 'long',
        timeZone: 'UTC'
    });

    const shortNameFormatter = new Intl.DateTimeFormat(intlLocales, {
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

    if (!symbolsCache[language]) {
        symbolsCache[language] = {};
    }
    symbolsCache[language].weekdays = weekdays;

    return weekdays;
}

export function getMonthNames(languageOverride) {
    const language = languageOverride || salesforceLanguage;
    const languageDataCache = symbolsCache[language];

    if (languageDataCache && languageDataCache.months) {
        return languageDataCache.months;
    }

    const intlLocales = [language, ...FALLBACK_LOCALES];
    const monthNameFormatter = new Intl.DateTimeFormat(intlLocales, {
        month: 'long'
    });

    const months = [];

    for (let i = 0; i <= 11; i++) {
        const date = new Date(1970, i, 4);
        months.push({
            fullName: format(monthNameFormatter, date)
        });
    }

    if (!symbolsCache[language]) {
        symbolsCache[language] = {};
    }
    symbolsCache[language].months = months;

    return months;
}

function format(dateTimeFormat, date) {
    const formattedDate = dateTimeFormat.format(date);
    return removeIE11Markers(formattedDate);
}

function removeIE11Markers(formattedString) {
    return formattedString.replace(/[\u200E\u200F]/g, '');
}
