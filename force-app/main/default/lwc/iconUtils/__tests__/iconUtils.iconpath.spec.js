/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { getIconPath } from '../iconUtils';
import cp from 'lightning/configProvider';

describe('getIconPath()', () => {
    it('requests the RTL sprites when specified', () => {
        cp({
            getToken: name => `/${name}`
        });

        expect(getIconPath('action:foo', 'rtl')).toBe(
            '/lightning.actionSpriteRtl#foo'
        );

        expect(getIconPath('custom:bar', 'rtl')).toBe(
            '/lightning.customSpriteRtl#bar'
        );

        expect(getIconPath('doctype:baz', 'rtl')).toBe(
            '/lightning.doctypeSpriteRtl#baz'
        );

        expect(getIconPath('standard:hoge', 'rtl')).toBe(
            '/lightning.standardSpriteRtl#hoge'
        );

        expect(getIconPath('utility:piyo', 'rtl')).toBe(
            '/lightning.utilitySpriteRtl#piyo'
        );
    });
});