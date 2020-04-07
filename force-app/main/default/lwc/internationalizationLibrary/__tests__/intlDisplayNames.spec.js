/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import {
    getNameOfWeekdays,
    getMonthNames
} from './../datetime/intlDisplayNames';

describe('getNameOfWeekdays', () => {
    it('should return the english weekday names when language passed is "en-US"', () => {
        const weekdays = getNameOfWeekdays('en-US');

        expect(weekdays.length).toEqual(7);
        expect(weekdays[0]).toEqual({
            fullName: 'Sunday',
            shortName: 'Sun'
        });
    });

    it('should return the english weekday names when language passed is "en"', () => {
        const spy = jest.spyOn(Intl, 'DateTimeFormat');
        getNameOfWeekdays('en');

        expect(spy).toHaveBeenCalledWith(
            expect.arrayContaining(['en']),
            expect.any(Object)
        );
    });

    it('should return the italian weekday names when language passed is "it"', () => {
        const spy = jest.spyOn(Intl, 'DateTimeFormat');
        getNameOfWeekdays('it');

        expect(spy).toHaveBeenCalledWith(
            expect.arrayContaining(['it']),
            expect.any(Object)
        );
    });
});

describe('getMonthNames', () => {
    it('should return the english month names when language passed is "en-US"', () => {
        const monthNames = getMonthNames('en-US');

        expect(monthNames.length).toEqual(12);
        expect(monthNames[0]).toEqual({
            fullName: 'January'
        });
    });

    it('should return the english month names when language passed is "en"', () => {
        const spy = jest.spyOn(Intl, 'DateTimeFormat');
        getMonthNames('en');

        expect(spy).toHaveBeenCalledWith(
            expect.arrayContaining(['en']),
            expect.any(Object)
        );
    });

    it('should return the italian month names when language passed is "it"', () => {
        const spy = jest.spyOn(Intl, 'DateTimeFormat');
        getMonthNames('it');

        expect(spy).toHaveBeenCalledWith(
            expect.arrayContaining(['it']),
            expect.any(Object)
        );
    });
});
