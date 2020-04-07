/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { NumberOptions } from '../number/numberOptions';

describe('NumberOptions', () => {
    it('should return default format', () => {
        const options = {};
        const skeleton = new NumberOptions(options).getDefaultSkeleton();

        expect(skeleton).toBe('#,##0.###');
    });

    it('should return percentage format when style is percent', () => {
        const options = {
            style: 'percent'
        };

        const skeleton = new NumberOptions(options).getSkeleton();

        expect(skeleton).toBe('#,##0.%');
    });

    it('should return currency format when style is currency', () => {
        const options = {
            style: 'currency'
        };

        const skeleton = new NumberOptions(options).getSkeleton();

        expect(skeleton).toBe('¤#,##0.;(¤#,##0.)');
    });
});
