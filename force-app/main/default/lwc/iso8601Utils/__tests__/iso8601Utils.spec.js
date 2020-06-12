/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import {
    isValidISODateTimeString,
    isValidISOTimeString,
    removeTimeZoneSuffix
} from './../iso8601Utils';

describe('isValidISODateTimeString', () => {
    it('accepts date and time ISO string', () => {
        const value = '2018-09-10T11:23:44.222Z';

        expect(isValidISODateTimeString(value)).toBeTruthy();
    });

    it('accepts date and time ISO string with timezone offset', () => {
        const value = '2018-09-10T11:23:44.222+05:00';

        expect(isValidISODateTimeString(value)).toBeTruthy();
    });

    it('accepts date and time ISO string without milliseconds', () => {
        const value = '2018-09-10T11:23:44Z';

        expect(isValidISODateTimeString(value)).toBeTruthy();
    });

    it('accepts date and time ISO string without seconds', () => {
        const value = '2018-09-10T11:23Z';

        expect(isValidISODateTimeString(value)).toBeTruthy();
    });

    it('accepts date ISO string', () => {
        const value = '2018-09-10';

        expect(isValidISODateTimeString(value)).toBeTruthy();
    });

    it('rejects date and time ISO string without timezone', () => {
        const value = '2018-09-10T11:23:44.222';

        expect(isValidISODateTimeString(value)).toBeFalsy();
    });

    it('rejects date and time ISO string without minutes', () => {
        const value = '2018-09-10T11Z';

        expect(isValidISODateTimeString(value)).toBeFalsy();
    });

    it('rejects non-ISO date string', () => {
        const value = '2018/09/10';

        expect(isValidISODateTimeString(value)).toBeFalsy();
    });

    it('rejects invalid date and time string', () => {
        const value = '2018-09-99T11:23:44.222Z';

        expect(isValidISODateTimeString(value)).toBeFalsy();
    });
});

describe('isValidISOTimeString', () => {
    it('accepts time ISO string without timezone designator', () => {
        const value = '11:23:44.222';

        expect(isValidISOTimeString(value)).toBeTruthy();
    });

    it('accepts time ISO string with timezone designator', () => {
        const value = '11:23:44.222Z';

        expect(isValidISOTimeString(value)).toBeTruthy();
    });

    it('accepts time ISO string with timezone offset', () => {
        const value = '11:23:44.222+05:00';

        expect(isValidISOTimeString(value)).toBeTruthy();
    });

    it('accepts time ISO string without milliseconds', () => {
        const value = '11:23:44';

        expect(isValidISOTimeString(value)).toBeTruthy();
    });

    it('accepts time ISO string without seconds', () => {
        const value = '11:23';

        expect(isValidISOTimeString(value)).toBeTruthy();
    });

    it('rejects time ISO string without minutes', () => {
        const value = '11';

        expect(isValidISOTimeString(value)).toBeFalsy();
    });

    it('rejects non-ISO time string', () => {
        const value = '11:30 AM';

        expect(isValidISOTimeString(value)).toBeFalsy();
    });

    it('rejects invalid time string', () => {
        const value = '11:77:44.222Z';

        expect(isValidISOTimeString(value)).toBeFalsy();
    });
});

describe('removeTimeZoneSuffix', () => {
    it('removes Z', () => {
        const value = '11:23:44.222Z';
        const expectedValue = '11:23:44.222';

        expect(removeTimeZoneSuffix(value)).toBe(expectedValue);
    });

    it('removes positive timezone offset', () => {
        const value = '11:23:44.222+05:00';
        const expectedValue = '11:23:44.222';

        expect(removeTimeZoneSuffix(value)).toBe(expectedValue);
    });

    it('removes negative timezone offset', () => {
        const value = '11:23:44.222-05:00';
        const expectedValue = '11:23:44.222';

        expect(removeTimeZoneSuffix(value)).toBe(expectedValue);
    });

    it('does not change an ISO string without timezone designator', () => {
        const value = '11:23:44.222';

        expect(removeTimeZoneSuffix(value)).toBe(value);
    });
});
