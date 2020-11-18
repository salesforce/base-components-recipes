/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { deepCopy } from 'c/recordEditUtils';
import FAKE_OBJECT_INFO from './mockdata.json';

describe('deepCopy', () => {
    it('should match JSON.parse(JSON.stringify(object))', () => {
        const jsonClone = JSON.parse(JSON.stringify(FAKE_OBJECT_INFO));
        const deepClone = deepCopy(jsonClone);

        expect(deepClone).toEqual(jsonClone);
    });
});
