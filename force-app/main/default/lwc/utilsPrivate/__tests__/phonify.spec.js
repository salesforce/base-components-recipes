/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { toNorthAmericanPhoneNumber } from '../phonify';

describe('isNorthAmericanPhoneNumber()', () => {
    it('should format an 11 digit number when the number starts with 1', () => {
        expect(toNorthAmericanPhoneNumber('14255550155', 'en-CA')).toBe(
            '(425) 555-0155'
        );
    });

    it('should not format an 11 digit number when the number does not start with 1', () => {
        expect(toNorthAmericanPhoneNumber('24255550155', 'en-CA')).toBe(
            '24255550155'
        );
    });

    it('should format a 10 digit number', () => {
        expect(toNorthAmericanPhoneNumber('4255550155', 'en-CA')).toBe(
            '(425) 555-0155'
        );
    });

    it('should not format a non 10 or 11 digit number', () => {
        expect(toNorthAmericanPhoneNumber('+14255550155', 'en-CA')).toBe(
            '+14255550155'
        );

        expect(toNorthAmericanPhoneNumber('56789', 'en-CA')).toBe('56789');
        expect(toNorthAmericanPhoneNumber('4s51221234', 'en-CA')).toBe(
            '4s51221234'
        );
    });

    it('should format the number when locale country is US', () => {
        expect(toNorthAmericanPhoneNumber('14255550155', 'en-US')).toBe(
            '(425) 555-0155'
        );
    });

    it('should not format the number when locale country is UK', () => {
        expect(toNorthAmericanPhoneNumber('14255550155', 'en-UK')).toBe(
            '14255550155'
        );
    });
});
