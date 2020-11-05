/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { isNarrow, isBase } from './../utils';

describe('c-card utils', () => {
    describe('isNarrow', () => {
        ['narrow', 'Narrow', 'NARROW'].forEach((variant) => {
            it(`should return true when ${variant}`, () => {
                expect(isNarrow(variant)).toBe(true);
            });
        });
        [undefined, null, '', [], {}].forEach((variant) => {
            it(`should return false when ${variant}`, () => {
                expect(isNarrow(variant)).toBe(false);
            });
        });
    });
    describe('isBase', () => {
        ['base', 'Base', 'BASE'].forEach((variant) => {
            it(`should return true when ${variant}`, () => {
                expect(isBase(variant)).toBe(true);
            });
        });
        [undefined, null, '', [], {}].forEach((variant) => {
            it(`should return false when ${variant}`, () => {
                expect(isBase(variant)).toBe(false);
            });
        });
    });
});
