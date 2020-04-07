/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { address as addressFormat } from './../address/AddressFormat';

const addressObject = {
    address: 'Street',
    city: 'City',
    state: 'State',
    country: 'Country',
    zipCode: 'ZipCode'
};

const incompleteAddress = {
    address: 'Street',
    city: 'City',
    country: 'Country'
};

describe('When using the address formatter for en-US', () => {
    const langCode = 'en';
    const countryCode = 'US';

    it('should correctly format an address object', () => {
        const formattedAddress = addressFormat.formatAddressAllFields(
            langCode,
            countryCode,
            addressObject,
            ' '
        );

        expect(formattedAddress).toBe('Street City, State ZipCode Country');
    });
    it('should correctly format an incomplete address object', () => {
        const formattedAddress = addressFormat.formatAddressAllFields(
            langCode,
            countryCode,
            incompleteAddress,
            ' '
        );

        expect(formattedAddress).toBe('Street City Country');
    });
    it('should return the correct required fields for the country', () => {
        expect(
            addressFormat.getAddressRequireFields(langCode, countryCode)
        ).toBe('ACSZ');
    });
});

describe('When using the address formatter for de_AT', () => {
    const langCode = 'de';
    const countryCode = 'AT';

    it('should correctly format an address object', () => {
        const formattedAddress = addressFormat.formatAddressAllFields(
            langCode,
            countryCode,
            addressObject,
            ' '
        );

        expect(formattedAddress).toBe('Street ZipCode City State Country');
    });
    it('should correctly format an incomplete address object', () => {
        const formattedAddress = addressFormat.formatAddressAllFields(
            langCode,
            countryCode,
            incompleteAddress,
            ' '
        );

        expect(formattedAddress).toBe('Street City Country');
    });
    it('should return the correct required fields for the country', () => {
        expect(
            addressFormat.getAddressRequireFields(langCode, countryCode)
        ).toBe('AZC');
    });
});

describe('When using the address formatter for ja-JP', () => {
    const langCode = 'ja';
    const countryCode = 'JP';

    it('should correctly format an address object', () => {
        const formattedAddress = addressFormat.formatAddressAllFields(
            langCode,
            countryCode,
            addressObject,
            ' '
        );

        expect(formattedAddress).toBe('Street City State ZipCode Country');
    });

    it('should correctly format an address object that contains Han characters', () => {
        const japaneseAddress = {
            address: '郵便局 #1',
            country: '日本',
            city: 'Tokyo',
            state: '',
            zipCode: '123456'
        };

        const formattedAddress = addressFormat.formatAddressAllFields(
            langCode,
            countryCode,
            japaneseAddress,
            ' '
        );

        expect(formattedAddress).toBe('日本 〒123456 Tokyo 郵便局 #1');
    });
});

describe('When using the address formatter for cn-CN', () => {
    const langCode = 'ja';
    const countryCode = 'JP';

    it('should correctly format an address object', () => {
        const formattedAddress = addressFormat.formatAddressAllFields(
            langCode,
            countryCode,
            addressObject,
            ' '
        );

        expect(formattedAddress).toBe('Street City State ZipCode Country');
    });

    it('should correctly format an address object that contains Han characters', () => {
        const japaneseAddress = {
            address: '郵便局 #1',
            country: '日本',
            city: 'Tokyo',
            state: '',
            zipCode: '123456'
        };

        const formattedAddress = addressFormat.formatAddressAllFields(
            langCode,
            countryCode,
            japaneseAddress,
            ' '
        );

        expect(formattedAddress).toBe('日本 〒123456 Tokyo 郵便局 #1');
    });
});

describe('When using the address formatter for pl-PL', () => {
    const langCode = 'pl';
    const countryCode = 'PL';

    it('should correctly format an address object', () => {
        const formattedAddress = addressFormat.formatAddressAllFields(
            langCode,
            countryCode,
            addressObject,
            ' '
        );

        expect(formattedAddress).toBe('Street ZipCode City State Country');
    });
});
