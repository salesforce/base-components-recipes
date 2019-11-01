/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { relativeFormat } from 'c/internationalizationLibrary';

export function getTimeoutUnitsTillInvalid(datetime) {
    const now = Date.now();
    const time = new Date(datetime).getTime();
    const delta = Math.abs(time - now);

    const MINUTE = 1000 * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;

    if (delta < MINUTE) {
        return MINUTE;
    }

    if (delta < HOUR) {
        return MINUTE;
    }

    if (delta < DAY) {
        return HOUR;
    }

    return DAY;
}

export function getFormattedRelativeDate(date) {
    const isUndefined = date === undefined;
    const isNull = date === null;
    const isEmptyString = date === '';

    return isUndefined || isNull || isEmptyString
        ? ''
        : relativeFormat().format(date);
}