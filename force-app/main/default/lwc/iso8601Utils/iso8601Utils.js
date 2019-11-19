/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

const ISO8601_STRICT_PATTERN = /^\d{4}(-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z){1})?)?)?$/i;

const ISO8601_TIME_PATTERN = /^\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/i;

export const STANDARD_TIME_FORMAT = 'HH:mm:ss.SSS';
export const STANDARD_DATE_FORMAT = 'YYYY-MM-DD';
export const TIME_SEPARATOR = 'T';
const TIMEZONE_INDICATOR = /(Z|([+-])(\d{2}):(\d{2}))$/;

export function isValidISODateTimeString(dateTimeString) {
    return isValidISO8601String(dateTimeString) && isValidDate(dateTimeString);
}

export function isValidISOTimeString(timeString) {
    if (!isValidISO8601TimeString(timeString)) {
        return false;
    }

    const timeOnly = removeTimeZoneSuffix(timeString);
    return isValidDate(`2018-09-09T${timeOnly}Z`);
}

export function removeTimeZoneSuffix(dateTimeString) {
    if (typeof dateTimeString === 'string') {
        return dateTimeString.split(TIMEZONE_INDICATOR)[0];
    }
    return dateTimeString;
}

function isValidISO8601String(dateTimeString) {
    if (typeof dateTimeString !== 'string') {
        return false;
    }
    return ISO8601_STRICT_PATTERN.test(dateTimeString);
}

function isValidISO8601TimeString(timeString) {
    if (typeof timeString !== 'string') {
        return false;
    }
    return ISO8601_TIME_PATTERN.test(timeString);
}

function isValidDate(value) {
    const timeStamp = Date.parse(value);
    return isFinite(timeStamp);
}
