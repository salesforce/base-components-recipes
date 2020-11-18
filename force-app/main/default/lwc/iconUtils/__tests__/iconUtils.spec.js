/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import {
    computeSldsClass,
    getCategory,
    getIconPath,
    getName,
    isValidName
} from '../iconUtils';

const invalidIconNames = [
    '',
    ':foo',
    '1:foo',
    '1action:foo',
    'action1:foo',
    'foo_bar:baz',
    'foo-bar:baz',
    'foo:bar-baz'
];

const validIconNames = [
    'foo:bar',
    'foo:bar1',
    'foo:bar_baz',
    'foo:bar_baz2',
    'foo:bar_baz_piyo'
];

describe('computeSldsClass()', () => {
    it('returns empty string for invalid icon name', () => {
        invalidIconNames.forEach((invalidName) => {
            expect(computeSldsClass(invalidName)).toBe('');
        });
    });

    it('returns slds class for valid icon names', () => {
        expect(computeSldsClass('foo:bar')).toBe('slds-icon-foo-bar');
        expect(computeSldsClass('foo:bar1')).toBe('slds-icon-foo-bar1');
        expect(computeSldsClass('foo:bar_baz')).toBe('slds-icon-foo-bar-baz');
        expect(computeSldsClass('foo:bar_baz_piyo')).toBe(
            'slds-icon-foo-bar-baz-piyo'
        );
    });
});

describe('getCategory()', () => {
    it('returns empty string for invalid category', () => {
        invalidIconNames.forEach((invalidName) => {
            expect(getCategory(invalidName)).toBe('');
        });
    });

    it('returns category for valid category', () => {
        expect(getCategory('foo:bar')).toBe('foo');
    });
});

describe('getIconPath()', () => {
    it('returns empty string for invalid icon name', () => {
        invalidIconNames.forEach((invalidName) => {
            expect(getIconPath(invalidName)).toBe('');
        });
    });

    it('returns empty string for unknown icon category', () => {
        expect(getIconPath('foo:bar')).toBe('');
    });

    it('returns asset path for valid icon category', () => {
        expect(getIconPath('action:foo')).toBe(
            '/assets/icons/action-sprite/svg/symbols.svg#foo'
        );

        expect(getIconPath('custom:bar')).toBe(
            '/assets/icons/custom-sprite/svg/symbols.svg#bar'
        );

        expect(getIconPath('doctype:baz')).toBe(
            '/assets/icons/doctype-sprite/svg/symbols.svg#baz'
        );

        expect(getIconPath('standard:hoge')).toBe(
            '/assets/icons/standard-sprite/svg/symbols.svg#hoge'
        );

        expect(getIconPath('utility:piyo')).toBe(
            '/assets/icons/utility-sprite/svg/symbols.svg#piyo'
        );
    });
});

describe('getName()', () => {
    it('returns empty string for invalid name', () => {
        expect(getName('foo:')).toBe('');
        expect(getName('foo:2foo')).toBe('');
        expect(getName('foo:bar-baz')).toBe('');
    });

    it('returns name for valid name', () => {
        expect(getName('foo:bar')).toBe('bar');
        expect(getName('foo:bar_baz')).toBe('bar_baz');
        expect(getName('foo:bar2')).toBe('bar2');
        expect(getName('foo:bar_baz2')).toBe('bar_baz2');
    });

    it('legacy support for camel-case', () => {
        expect(getName('foo:filterList')).toBe('filterList');
    });
});

describe('isValidName()', () => {
    it('returns false for invalid name', () => {
        invalidIconNames.forEach((invalidName) => {
            expect(isValidName(invalidName)).toBe(false);
        });
    });

    it('returns true for valid name', () => {
        validIconNames.forEach((validName) => {
            expect(isValidName(validName)).toBe(true);
        });
    });
});
