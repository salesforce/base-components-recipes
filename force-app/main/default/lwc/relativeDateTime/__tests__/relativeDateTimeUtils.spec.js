/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { getFormattedRelativeDate, getTimeoutUnitsTillInvalid } from '../utils';

describe('getTimeoutUnitsTillInvalid', () => {
    const MINUTE = 1000 * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;

    it('should return minute when delta is seconds', () => {
        const testValues = [1000, MINUTE - 1000];

        expect(getTimeoutUnitsTillInvalid(new Date())).toBe(MINUTE);

        testValues.forEach((delta) => {
            expect(getTimeoutUnitsTillInvalid(Date.now() + delta)).toBe(MINUTE);
            expect(getTimeoutUnitsTillInvalid(Date.now() - delta)).toBe(MINUTE);
        });
    });

    it('should return minute when delta is minutes', () => {
        const testValues = [MINUTE + 1000, HOUR - 1000];

        testValues.forEach((delta) => {
            expect(getTimeoutUnitsTillInvalid(Date.now() + delta)).toBe(MINUTE);
            expect(getTimeoutUnitsTillInvalid(Date.now() - delta)).toBe(MINUTE);
        });
    });

    it('should return hour when delta is hours', () => {
        const testValues = [HOUR + 1000, DAY - 1000];

        testValues.forEach((delta) => {
            expect(getTimeoutUnitsTillInvalid(Date.now() + delta)).toBe(HOUR);
            expect(getTimeoutUnitsTillInvalid(Date.now() - delta)).toBe(HOUR);
        });
    });

    it('should return days when delta is hour or more', () => {
        const testValues = [DAY + 1000, 360 * DAY, 400 * DAY];

        testValues.forEach((delta) => {
            expect(getTimeoutUnitsTillInvalid(Date.now() + delta)).toBe(DAY);
            expect(getTimeoutUnitsTillInvalid(Date.now() - delta)).toBe(DAY);
        });
    });
});

describe('getFormattedRelativeDate', () => {
    it('should return empty on null, undefined or empty string', () => {
        expect(getFormattedRelativeDate(null)).toBe('');
        expect(getFormattedRelativeDate(undefined)).toBe('');
        expect(getFormattedRelativeDate('')).toBe('');
    });

    it('should call Intl RelativeFormat', () => {
        const arg = Date.now() - 43245;

        expect(getFormattedRelativeDate(arg)).toBe('a few seconds ago');
    });
});
