/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { address as addressFormat } from './address/AddressFormat';
import { name as nameFormat } from './name/NameFormat';
import { numberFormat } from './number/NumberFormat';
import { relativeFormat } from './duration/RelativeFormat';
import { dateTimeFormat } from './datetime/intlFormat';

export {
    addressFormat,
    nameFormat,
    numberFormat,
    dateTimeFormat,
    relativeFormat
};

export { getNameOfWeekdays, getMonthNames } from './datetime/intlDisplayNames';

export {
    normalizeISODate,
    normalizeISOTime,
    normalizeISODateTime,
    normalizeFormattedDate,
    normalizeFormattedTime,
    normalizeFormattedDateTime,
    getToday,
    getISODateString,
    getISOTimeString,
    getCurrentTime
} from './datetime/dateTimeUtils';

export {
    isBefore,
    isAfter,
    formatDate,
    formatTime,
    formatDateUTC,
    formatDateTimeUTC,
    parseTime,
    parseDateTime,
    parseDateTimeUTC,
    toOtherCalendar,
    fromOtherCalendar,
    toLocalizedDigits,
    fromLocalizedDigits,
    syncWallTimeToUTC,
    syncUTCToWallTime
} from './localizationService';
