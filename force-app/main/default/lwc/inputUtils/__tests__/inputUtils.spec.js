/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { generateUniqueId } from 'c/inputUtils';

describe('generateUniqueId', () => {
    it('generates unique ids', () => {
        const uniqueIds = {};
        const iterations = 10;
        for (let i = 0; i < iterations; i++) {
            uniqueIds[generateUniqueId()] = true;
        }
        expect(Object.keys(uniqueIds)).toHaveLength(iterations);
    });
});
