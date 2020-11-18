/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import {
    isValidISOTimeString,
    isValidISODateTimeString,
    removeTimeZoneSuffix,
    STANDARD_TIME_FORMAT,
    STANDARD_DATE_FORMAT,
    TIME_SEPARATOR
} from 'c/iso8601Utils';
import Duration from './defaultDurationConfig';

const MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const DATE_FORMAT = {
    short: 'M/d/yyyy',
    medium: 'MMM d, yyyy',
    long: 'MMMM d, yyyy'
};

const TIME_FORMAT = {
    short: 'h:mm a',
    medium: 'h:mm:ss a',
    long: 'h:mm:ss a'
};

const TIME_FORMAT_SIMPLE = {
    short: 'h:m a',
    medium: 'h:m:s a',
    long: 'h:m:s a'
};

function formatDate(value, format) {
    let isUTC = false;
    let dateString = value;
    if (typeof value === 'string') {
        dateString = value.split(TIME_SEPARATOR)[0];
        isUTC = true;
    }
    return formatDateInternal(dateString, format, isUTC);
}

function formatDateUTC(value, format) {
    return formatDateInternal(value, format, true);
}

function formatTime(date, format) {
    if (!isDate(date)) {
        return new Date('');
    }

    const hours = ((date.getHours() + 11) % 12) + 1;
    const suffix = date.getHours() >= 12 ? 'PM' : 'AM';

    switch (format) {
        case STANDARD_TIME_FORMAT:
            return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
                date.getSeconds()
            )}.${doublePad(date.getMilliseconds())}`;
        case TIME_FORMAT.short:
            return `${hours}:${pad(date.getMinutes())} ${suffix}`;
        case TIME_FORMAT.medium:
        case TIME_FORMAT.long:
        default:
            return `${hours}:${pad(date.getMinutes())}:${pad(
                date.getSeconds()
            )} ${suffix}`;
    }
}

function formatDateTimeUTC(value) {
    if (!isDate(value)) {
        return new Date('');
    }
    const date = new Date(value.getTime());
    return `${formatDateUTC(date)}, ${formatTime(addTimezoneOffset(date))}`;
}

function parseDateTimeISO8601(value) {
    let isoString = null;
    let shouldAddOffset = true;
    if (isValidISOTimeString(value)) {
        isoString = `${getTodayInISO()}T${addTimezoneSuffix(value)}`;
    } else if (isValidISODateTimeString(value)) {
        if (value.indexOf(TIME_SEPARATOR) > 0) {
            isoString = addTimezoneSuffix(value);
            shouldAddOffset = false;
        } else {
            isoString = `${value}T00:00:00.000Z`;
        }
    }

    if (isoString) {
        const parsedDate = new Date(isoString);
        if (shouldAddOffset) {
            addTimezoneOffset(parsedDate);
        }
        return parsedDate;
    }
    return null;
}

function parseDateTime(value, format) {
    if (format === STANDARD_DATE_FORMAT && isValidISODateTimeString(value)) {
        return parseDateTimeISO8601(value);
    }
    if (Object.values(DATE_FORMAT).includes(format)) {
        return parseFormattedDate(value, format);
    }
    if (Object.values(TIME_FORMAT_SIMPLE).includes(format)) {
        return parseFormattedTime(value);
    }
    return null;
}

function parseDateTimeUTC(value) {
    return parseDateTimeISO8601(addTimezoneSuffix(value));
}

function isBefore(date1, date2, unit) {
    const normalizedDate1 = getDate(date1);
    const normalizedDate2 = getDate(date2);
    if (!normalizedDate1 || !normalizedDate2) {
        return false;
    }
    return (
        startOf(normalizedDate1, unit).getTime() <
        startOf(normalizedDate2, unit).getTime()
    );
}

function isAfter(date1, date2, unit) {
    const normalizedDate1 = getDate(date1);
    const normalizedDate2 = getDate(date2);
    if (!normalizedDate1 || !normalizedDate2) {
        return false;
    }
    return (
        startOf(normalizedDate1, unit).getTime() >
        startOf(normalizedDate2, unit).getTime()
    );
}

function UTCToWallTime(date, timezone, callback) {
    const utcDate = new Date(date.getTime());
    callback(subtractTimezoneOffset(utcDate));
}

function WallTimeToUTC(date, timezone, callback) {
    const localDate = new Date(date.getTime());
    callback(addTimezoneOffset(localDate));
}

function translateToOtherCalendar(date) {
    return date;
}

function translateFromOtherCalendar(date) {
    return date;
}

function translateToLocalizedDigits(input) {
    return input;
}

function translateFromLocalizedDigits(input) {
    return input;
}

function getNumberFormat() {
    return {
        format: (value) => {
            // eslint-disable-next-line no-console
            console.warn(
                `The current environment does not support large numbers and the original value of ${value} will be returned.`
            );

            return value;
        }
    };
}

function duration(minutes) {
    return new Duration(minutes * 60 * 1000);
}

function displayDuration(value) {
    return value.humanize('en');
}

function parseFormattedTime(value) {
    const values = value.trim().split(/[:.\s*]/);

    const length = values.length;
    if (!values || length < 2 || length > 5) {
        return null;
    }
    const ampm = values[length - 1];
    const isBeforeNoon = ampm.toLowerCase() === 'am';
    const isAfternoon = ampm.toLowerCase() === 'pm';

    values.splice(-1, 1);
    const allNumbers = values.every((item) => !isNaN(item));
    if ((!isAfternoon && !isBeforeNoon) || !allNumbers) {
        return null;
    }
    const hours = values[0];
    const hour24 = pad(isAfternoon ? (hours % 12) + 12 : hours % 12);

    const minutes = (length >= 3 && values[1]) || '0';
    const seconds = (length >= 4 && values[2]) || '0';
    const milliseconds = (length === 5 && values[3]) || '0';

    const newDate = new Date(getTodayInISO());
    newDate.setHours(hour24, minutes, seconds, milliseconds);

    return isDate(newDate) ? newDate : null;
}

function parseFormattedDate(value, format) {
    let pattern = /^([a-zA-Z]{3})\s*(\d{1,2}),\s*(\d{4})$/;
    switch (format) {
        case DATE_FORMAT.short:
            pattern = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
            break;
        case DATE_FORMAT.long:
            pattern = /^([a-zA-Z]+)\s*(\d{1,2}),\s*(\d{4})$/;
            break;
        default:
    }

    const match = pattern.exec(value.trim());
    if (!match) {
        return null;
    }

    let month = match[1];
    const day = match[2];
    const year = match[3];

    if (format !== DATE_FORMAT.short) {
        month = MONTH_NAMES.findIndex((item) =>
            item.toLowerCase().includes(month.toLowerCase())
        );

        month += 1;
    }

    const isoValue = `${year}-${pad(month)}-${pad(day)}`;
    const newDate = new Date(`${isoValue}T00:00:00.000Z`);

    return isDate(newDate) ? addTimezoneOffset(newDate) : null;
}

function formatDateInternal(value, format, isUTC) {
    const date = getDate(value);
    if (!date) {
        return new Date('');
    }
    if (isUTC && isDate(value)) {
        addTimezoneOffset(date);
    }

    switch (format) {
        case STANDARD_DATE_FORMAT:
            return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
                date.getDate()
            )}`;
        case DATE_FORMAT.short:
            return `${
                date.getMonth() + 1
            }/${date.getDate()}/${date.getFullYear()}`;
        case DATE_FORMAT.long:
            return `${
                MONTH_NAMES[date.getMonth()]
            } ${date.getDate()}, ${date.getFullYear()}`;
        case DATE_FORMAT.medium:
        default: {
            const shortMonthName = MONTH_NAMES[date.getMonth()].substring(0, 3);
            return `${shortMonthName} ${date.getDate()}, ${date.getFullYear()}`;
        }
    }
}

function startOf(date, unit) {
    switch (unit) {
        case 'day':
            date.setHours(0);
            date.setMinutes(0);

        case 'minute':
            date.setSeconds(0);
            date.setMilliseconds(0);
            break;
        default:
    }

    return date;
}

function isDate(value) {
    return (
        Object.prototype.toString.call(value) === '[object Date]' &&
        !isNaN(value.getTime())
    );
}

function addTimezoneSuffix(value) {
    return removeTimeZoneSuffix(value) + 'Z';
}

function addTimezoneOffset(date) {
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    return date;
}

function subtractTimezoneOffset(date) {
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date;
}

function getDate(value) {
    if (!value) {
        return null;
    }
    if (isDate(value)) {
        return new Date(value.getTime());
    }
    if (
        isFinite(value) &&
        (typeof value === 'number' || typeof value === 'string')
    ) {
        return new Date(parseInt(value, 10));
    }
    if (typeof value === 'string') {
        return parseDateTimeISO8601(value);
    }
    return null;
}

function getTodayInISO() {
    return new Date().toISOString().split('T')[0];
}

function pad(n) {
    return Number(n) < 10 ? '0' + n : n;
}

function doublePad(n) {
    return Number(n) < 10 ? '00' + n : Number(n) < 100 ? '0' + n : n;
}

export default {
    formatDate,
    formatDateUTC,
    formatTime,
    formatDateTimeUTC,
    parseDateTimeISO8601,
    parseDateTime,
    parseDateTimeUTC,
    isBefore,
    isAfter,
    UTCToWallTime,
    WallTimeToUTC,
    translateToOtherCalendar,
    translateFromOtherCalendar,
    translateToLocalizedDigits,
    translateFromLocalizedDigits,
    getNumberFormat,
    duration,
    displayDuration
};
