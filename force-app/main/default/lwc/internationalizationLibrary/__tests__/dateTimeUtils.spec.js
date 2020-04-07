/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import {
    normalizeISODate,
    normalizeISODateTime,
    normalizeISOTime,
    normalizeFormattedDate,
    normalizeFormattedTime,
    normalizeFormattedDateTime
} from './../datetime/dateTimeUtils';

describe('normalizeISODate', () => {
    it('formats an ISO formatted date string', () => {
        const normalizedValue = normalizeISODate('2018-09-10');

        expect(normalizedValue.displayValue).toBe('Sep 10, 2018');
        expect(normalizedValue.isoValue).toBe('2018-09-10');
    });

    it('formats an ISO formatted date&time string', () => {
        const normalizedValue = normalizeISODate('2018-09-10T11:23:44.222Z');

        expect(normalizedValue.displayValue).toBe('Sep 10, 2018');
        expect(normalizedValue.isoValue).toBe('2018-09-10');
    });

    it('returns null when value is null', () => {
        const normalizedValue = normalizeISODate(null);

        expect(normalizedValue.displayValue).toBe('');
        expect(normalizedValue.isoValue).toBeNull();
    });

    it('throws error when value is not ISO formatted', () => {
        expect(() => {
            normalizeISODate('Sept 9th, 2018');
        }).toThrow();
    });
});

describe('normalizeISOTime', () => {
    it('formats an ISO formatted time string', () => {
        const normalizedValue = normalizeISOTime('11:23:44.222');

        expect(normalizedValue.displayValue).toBe('11:23:44 AM');
        expect(normalizedValue.isoValue).toBe('11:23:44.222');
    });

    it('formats an ISO formatted time string with timezone', () => {
        const normalizedValue = normalizeISOTime('11:23:44.222Z');

        expect(normalizedValue.displayValue).toBe('11:23:44 AM');
        expect(normalizedValue.isoValue).toBe('11:23:44.222');
    });

    it('formats a time string with minutes only', () => {
        const normalizedValue = normalizeISOTime('11:23');

        expect(normalizedValue.displayValue).toBe('11:23:00 AM');
        expect(normalizedValue.isoValue).toBe('11:23:00.000');
    });

    it('returns null when value is null', () => {
        const normalizedValue = normalizeISOTime(null);

        expect(normalizedValue.displayValue).toBe('');
        expect(normalizedValue.isoValue).toBeNull();
    });

    it('throws error when value is not ISO formatted', () => {
        expect(() => {
            normalizeISODate('8:13 AM');
        }).toThrow();
    });
});

describe('normalizeISODateTime', () => {
    it('formats an ISO formatted datetime string', () => {
        const normalizedValue = normalizeISODateTime(
            '2018-09-10T11:23:44.222Z'
        );

        expect(normalizedValue.displayValue).toBe('Sep 10, 2018, 11:23:44 AM');
        expect(normalizedValue.isoValue).toBe('2018-09-10T11:23:44.222');
    });

    it('formats an ISO formatted datetime string without seconds', () => {
        const normalizedValue = normalizeISODateTime('2018-09-10T11:23Z');

        expect(normalizedValue.displayValue).toBe('Sep 10, 2018, 11:23:00 AM');
        expect(normalizedValue.isoValue).toBe('2018-09-10T11:23:00.000');
    });

    it('returns null when value is null', () => {
        const normalizedValue = normalizeISODateTime(null);

        expect(normalizedValue.displayValue).toBe('');
        expect(normalizedValue.isoValue).toBeNull();
    });

    it('throws error when value is not ISO formatted', () => {
        expect(() => {
            normalizeISODateTime('Sept 9th, 2018 10:23 AM');
        }).toThrow();
    });

    it('throws error when value does not have timezone offset', () => {
        expect(() => {
            normalizeISODateTime('2018-09-10T10:23:44.222');
        }).toThrow();
    });
});

describe('normalizeFormattedDate', () => {
    it('converts a formatted date string to ISO', () => {
        const normalizedValue = normalizeFormattedDate('Sep 10, 2018');

        expect(normalizedValue).toBe('2018-09-10');
    });

    it('returns null value is null', () => {
        const normalizedValue = normalizeFormattedDate(null);

        expect(normalizedValue).toBeNull();
    });
});

describe('normalizeFormattedTime', () => {
    it('converts a formatted time string to ISO', () => {
        const normalizedValue = normalizeFormattedTime('11:23 AM', 'h:m a');

        expect(normalizedValue).toBe('11:23:00.000');
    });

    it('returns null value is null', () => {
        const normalizedValue = normalizeFormattedTime(null);

        expect(normalizedValue).toBeNull();
    });
});

describe('normalizeFormattedDateTime', () => {
    it('converts a formatted datetime string to ISO', () => {
        const normalizedValue = normalizeFormattedDateTime('2018-09-10T12:23');

        expect(normalizedValue).toBe('2018-09-10T12:23:00.000Z');
    });

    it('returns null value is null', () => {
        const normalizedValue = normalizeFormattedDateTime(null);

        expect(normalizedValue).toBeNull();
    });
});
