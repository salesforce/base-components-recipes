/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { numberFormatFallback } from '../number/numberFormatFallback';

describe('numberFormatFallback', () => {
    it('should format value as default format', () => {
        const options = {};
        const fallback = numberFormatFallback(options);
        expect(fallback.format('300.20')).toBe('300.20');
    });
});