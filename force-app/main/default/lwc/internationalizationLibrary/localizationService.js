/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { getLocalizationService } from 'lightning/configProvider';
import { isValidISOTimeString } from 'c/iso8601Utils';

export function isBefore(date1, date2, unit) {
    return getLocalizationService().isBefore(date1, date2, unit);
}

export function isAfter(date1, date2, unit) {
    return getLocalizationService().isAfter(date1, date2, unit);
}

export function formatDateTimeUTC(date) {
    return getLocalizationService().formatDateTimeUTC(date);
}

export function formatDate(dateString, format, locale) {
    return getLocalizationService().formatDate(dateString, format, locale);
}

export function formatDateUTC(dateString, format, locale) {
    return getLocalizationService().formatDateUTC(dateString, format, locale);
}

export function formatTime(timeString, format) {
    return getLocalizationService().formatTime(timeString, format);
}

export function parseDateTimeUTC(dateTimeString) {
    return getLocalizationService().parseDateTimeUTC(dateTimeString);
}

export function parseDateTimeISO8601(dateTimeString) {
    return getLocalizationService().parseDateTimeISO8601(dateTimeString);
}

export function parseDateTime(dateTimeString, format, strictMode) {
    return getLocalizationService().parseDateTime(
        dateTimeString,
        format,
        strictMode
    );
}

export function syncUTCToWallTime(date, timeZone) {
    let converted = null;

    // eslint-disable-next-line new-cap
    getLocalizationService().UTCToWallTime(date, timeZone, (result) => {
        converted = result;
    });
    return converted;
}

export function syncWallTimeToUTC(date, timeZone) {
    let converted = null;

    // eslint-disable-next-line new-cap
    getLocalizationService().WallTimeToUTC(date, timeZone, (result) => {
        converted = result;
    });
    return converted;
}

export function toOtherCalendar(date) {
    return getLocalizationService().translateToOtherCalendar(date);
}

export function fromOtherCalendar(date) {
    return getLocalizationService().translateFromOtherCalendar(date);
}

export function toLocalizedDigits(input) {
    return getLocalizationService().translateToLocalizedDigits(input);
}

export function fromLocalizedDigits(input) {
    return getLocalizationService().translateFromLocalizedDigits(input);
}

export function parseTime(timeString, format, strictParsing) {
    if (!timeString) {
        return null;
    }

    if (!format) {
        if (!isValidISOTimeString(timeString)) {
            return null;
        }

        return parseDateTimeISO8601(timeString);
    }

    const parseString = timeString.replace(/(\d)([AaPp][Mm])/g, '$1 $2');

    const parseFormat = format
        .replace(/(\b|[^h])h{2}(?!h)/g, '$1h')
        .replace(/(\b|[^H])H{2}(?!H)/g, '$1H')
        .replace(/(\b|[^m])m{2}(?!m)/g, '$1m')
        .replace(/\s*A/g, ' A')
        .trim();

    const acceptableFormats = [parseFormat];

    acceptableFormats.push(
        parseFormat.replace('m', 'm:s'),
        parseFormat.replace('m', 'm:s.S'),
        parseFormat.replace('m', 'm:s.SS'),
        parseFormat.replace('m', 'm:s.SSS')
    );

    acceptableFormats.reverse();

    for (let i = 0; i < acceptableFormats.length; i++) {
        const time = parseDateTime(
            parseString,
            acceptableFormats[i],
            strictParsing
        );

        if (time) {
            return time;
        }
    }

    return null;
}

export function getNumberFormat(format) {
    return getLocalizationService().getNumberFormat(format);
}

export function duration(value, unit) {
    return getLocalizationService().duration(value, unit);
}

export function displayDuration(value, withSuffix) {
    return getLocalizationService().displayDuration(value, withSuffix);
}
