/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { getIconPath } from '../iconUtils';
import cp from 'lightning/configProvider';

describe('getIconPath()', () => {
    it('respects lightning-config-provider overrides', () => {
        cp({
            getPathPrefix: () => '/overridePrefix'
        });

        expect(getIconPath('action:foo')).toBe(
            '/overridePrefix/assets/icons/action-sprite/svg/symbols.svg#foo'
        );
    });

    it('requests the RTL sprites when specified', () => {
        cp({
            getToken: (name) => `/${name}`
        });

        expect(getIconPath('action:foo', 'rtl')).toBe(
            '/overridePrefix/lightning.actionSpriteRtl#foo'
        );

        expect(getIconPath('custom:bar', 'rtl')).toBe(
            '/overridePrefix/lightning.customSpriteRtl#bar'
        );

        expect(getIconPath('doctype:baz', 'rtl')).toBe(
            '/overridePrefix/lightning.doctypeSpriteRtl#baz'
        );

        expect(getIconPath('standard:hoge', 'rtl')).toBe(
            '/overridePrefix/lightning.standardSpriteRtl#hoge'
        );

        expect(getIconPath('utility:piyo', 'rtl')).toBe(
            '/overridePrefix/lightning.utilitySpriteRtl#piyo'
        );
    });
});
