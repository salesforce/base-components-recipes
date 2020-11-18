/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { validateCoordinate } from '../geolocation';

describe('validateCoordinate()', () => {
    it('should return true for valid latitude values', () => {
        ['88.123', '-81.2321231', '0'].forEach((coordinate) => {
            expect(validateCoordinate('Latitude', coordinate)).toBe(true);
        });
    });

    it('should return false for invalid latitude values', () => {
        expect(validateCoordinate('Latitude', '91.123')).toBe(false);
        expect(validateCoordinate('Latitude', '-91.2321231')).toBe(false);
    });

    it('should return true for valid longitude values', () => {
        ['179.123', '-178.2321231', '0'].forEach((coordinate) => {
            expect(validateCoordinate('Longitude', coordinate)).toBe(true);
        });
    });

    it('should return false for invalid longitude values', () => {
        expect(validateCoordinate('Longitude', '191.123')).toBe(false);
        expect(validateCoordinate('Longitude', '-191.2321231')).toBe(false);
    });

    it('should return false for invalid longitude values (bad format)', () => {
        ['191.12.3', '19$1.12', 'Latitude', '123,754', '</html>'].forEach(
            (coordinate) => {
                expect(validateCoordinate('Longitude', coordinate)).toBe(false);
            }
        );
    });
});
