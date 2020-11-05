/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import locale from '@salesforce/i18n/locale';
import { DateTimeOptions } from './dateTimeOptions';
import {
    formatDateUTC,
    formatDate,
    toOtherCalendar,
    syncUTCToWallTime
} from '../localizationService';
import { isValidISODateTimeString, TIME_SEPARATOR } from 'c/iso8601Utils';

const dateTimeFormatInstancesCache = {};
const POSSIBLE_OPTS = {
    weekday: true,
    era: true,
    year: true,
    month: true,
    day: true,
    hour: true,
    minute: true,
    second: true,
    timeZone: true,
    timeZoneName: true,
    hour12: true
};

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

function getFromCache(options) {
    const optionsUniqueKey = getOptionsUniqueKey(options);
    let formatInstance = dateTimeFormatInstancesCache[optionsUniqueKey];

    if (!formatInstance) {
        formatInstance = new Intl.DateTimeFormat(locale, options);
        dateTimeFormatInstancesCache[optionsUniqueKey] = formatInstance;
    }

    return formatInstance;
}

function convertAndFormatDate(date, format, timeZone) {
    const translatedDate = toOtherCalendar(date);
    const converted = syncUTCToWallTime(translatedDate, timeZone);
    return formatDateUTC(converted, format);
}

function isDate(value) {
    return (
        Object.prototype.toString.call(value) === '[object Date]' &&
        !isNaN(value.getTime())
    );
}

function toDate(value) {
    let dateObj = value;
    if (
        !isDate(value) &&
        (typeof value === 'string' || typeof value === 'number')
    ) {
        dateObj = new Date(
            isFinite(value) ? parseInt(value, 10) : Date.parse(value)
        );
    }
    return dateObj;
}

const isTimeZonesSupported = (function () {
    try {
        // eslint-disable-next-line new-cap
        Intl.DateTimeFormat('en-US', { timeZone: 'America/Los_Angeles' });
    } catch (err) {
        return false;
    }
    return true;
})();

function dateTimeFormatFallback(dto) {
    const format = dto.hasFormattingOptions() ? dto.getSkeleton() : null;
    const { timeZone } = dto.options;
    return {
        format: (value) => {
            if (
                isValidISODateTimeString(value) &&
                value.indexOf(TIME_SEPARATOR) < 0
            ) {
                return formatDate(value);
            }

            const dateObj = toDate(value);
            if (isDate(dateObj)) {
                if (timeZone === 'UTC') {
                    dateObj.setTime(
                        dateObj.getTime() +
                            dateObj.getTimezoneOffset() * 60 * 1000
                    );
                }
                return convertAndFormatDate(dateObj, format, timeZone);
            }
            return '';
        }
    };
}

export function dateTimeFormat(opts) {
    const options = opts || {};
    const dto = new DateTimeOptions(options);

    if (
        !('Intl' in window) ||
        !dto.hasFormattingOptions() ||
        !isTimeZonesSupported
    ) {
        return dateTimeFormatFallback(dto);
    }

    return {
        format: (value) => {
            const dtf = getFromCache(options);
            return dtf.format(toDate(value));
        }
    };
}
