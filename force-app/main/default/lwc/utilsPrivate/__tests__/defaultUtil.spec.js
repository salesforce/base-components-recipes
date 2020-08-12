/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { getZIndexBaseline, escapeHTML } from '../utilsPrivate';

describe('utilsPrivate', () => {
    describe('getZIndexBaseline', () => {
        it("should return default value if variable isn't defined", () => {
            const value = getZIndexBaseline();
            expect(value).toBe(9000);
        });
    });

    describe('escapeHTML', () => {
        it('should escape html string', () => {
            const str = `<b>'Hello', "world"</b>`;
            expect(escapeHTML(str)).toBe(
                '&lt;b&gt;&#039;Hello&#039;, &quot;world&quot;&lt;/b&gt;'
            );
        });
    });
});
