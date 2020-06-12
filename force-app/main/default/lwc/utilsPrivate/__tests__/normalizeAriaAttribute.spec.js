/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { normalizeAriaAttribute as normalize } from 'c/utilsPrivate';

describe('normalizeAriaAttribute', () => {
    it('returns null for non-string value', () => {
        expect(normalize(undefined)).toBe(null);
        expect(normalize(null)).toBe(null);
        expect(normalize(false)).toBe(null);
        expect(normalize(2)).toBe(null);
        expect(normalize([])).toBe(null);
        expect(normalize({})).toBe(null);
    });

    it('returns as is if just a single word', () => {
        expect(normalize('abc')).toBe('abc');
    });

    it('strips extra spaces', () => {
        expect(normalize(' a b    c 1  2  \n ')).toBe('a b c 1 2');
    });

    it('accepts array of values', () => {
        expect(normalize(['a', 'b', 'c'])).toBe('a b c');
    });

    it('strips extra spaces for array of values', () => {
        expect(normalize([' a ', 'b  \n '])).toBe('a b');
    });

    it('strips falsy values for array of values', () => {
        expect(normalize([' a ', '', undefined, null, 'b'])).toBe('a b');
    });
});
