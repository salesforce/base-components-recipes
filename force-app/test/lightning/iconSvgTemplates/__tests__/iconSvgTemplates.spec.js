/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import templates from 'lightning/iconSvgTemplates';

describe('iconSvgTemplates', () => {
    it('should export an object with the icon templates', () => {
        Object.keys(templates).forEach((propName) => {
            expect(typeof templates[propName]).toBe('function');
        });
    });
});
