/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { name as nameFormat } from './../name/NameFormat';

const nameObject = {
    salutation: 'Mr.',
    first: 'firstName',
    middle: 'middleName',
    last: 'lastName',
    suffix: 'suffix',
    informal: 'informalName'
};

const incompleteName = {
    salutation: 'Mr.',
    last: 'lastName'
};

describe('When using the name formatter for en-US', () => {
    const locale = 'en-US';

    it('should correctly create the short name format', () => {
        expect(nameFormat.formatNameShort(locale, nameObject)).toBe(
            'firstName lastName'
        );
    });
    it('should correctly create the medium name format', () => {
        expect(nameFormat.formatNameMedium(locale, nameObject)).toBe(
            'firstName middleName lastName'
        );
    });
    it('should correctly create the long name format', () => {
        expect(nameFormat.formatNameLong(locale, nameObject)).toBe(
            'Mr. firstName middleName lastName suffix informalName'
        );
    });
    it('should correctly create the short name format of an incomplete name', () => {
        expect(nameFormat.formatNameShort(locale, incompleteName)).toBe(
            'lastName'
        );
    });
    it('should correctly create the medium name format of an incomplete name', () => {
        expect(nameFormat.formatNameMedium(locale, incompleteName)).toBe(
            'lastName'
        );
    });

    it('should correctly create the long name format of an incomplete name', () => {
        expect(nameFormat.formatNameLong(locale, incompleteName)).toBe(
            'Mr.  lastName'
        );
    });
});

describe('When using the name formatter for ja_JP', () => {
    const locale = 'ja_JP';

    it('should correctly create the short name format', () => {
        expect(nameFormat.formatNameShort(locale, nameObject)).toBe(
            'lastName firstName'
        );
    });
    it('should correctly create the medium name format', () => {
        expect(nameFormat.formatNameMedium(locale, nameObject)).toBe(
            'lastName middleName firstName'
        );
    });
    it('should correctly create the long name format', () => {
        expect(nameFormat.formatNameLong(locale, nameObject)).toBe(
            'lastName middleName firstName suffix informalName'
        );
    });
    it('should correctly create the short name format of an incomplete name', () => {
        expect(nameFormat.formatNameShort(locale, incompleteName)).toBe(
            'lastName'
        );
    });
    it('should correctly create the medium name format of an incomplete name', () => {
        expect(nameFormat.formatNameMedium(locale, incompleteName)).toBe(
            'lastName'
        );
    });
    it('should correctly create the long name format of an incomplete name', () => {
        expect(nameFormat.formatNameLong(locale, incompleteName)).toBe(
            'lastName'
        );
    });
    it('should correctly create the long name format when locale is only ja', () => {
        expect(nameFormat.formatNameLong('ja', nameObject)).toBe(
            'lastName middleName firstName suffix informalName'
        );
    });
});
