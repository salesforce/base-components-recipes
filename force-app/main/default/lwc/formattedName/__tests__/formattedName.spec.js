/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/formattedName';

jest.mock('@salesforce/i18n/locale', () => ({ default: 'en-US' }), {
    virtual: true
});

const defaultAttributes = {
    salutation: 'Mr.',
    firstName: 'John',
    lastName: 'Doe',
    middleName: 'Middleton',
    informalName: 'Jo',
    suffix: 'The 3rd'
};

const createFormattedNameComponent = (params) => {
    const element = createElement('c-formatted-name', {
        is: Element
    });

    Object.assign(element, defaultAttributes, params);
    document.body.appendChild(element);
    return element;
};

const getText = (element) => {
    return element.shadowRoot.textContent;
};

describe('c-formatted-name', () => {
    it('default by not passing any value', () => {
        const element = createFormattedNameComponent();
        expect(element).toMatchSnapshot();
    });

    it('defaults to en_US order and long format', () => {
        const element = createFormattedNameComponent();
        return Promise.resolve().then(() => {
            expect(getText(element)).toBe('Mr. John Middleton Doe The 3rd Jo');
        });
    });

    it('Name with short format', () => {
        const element = createFormattedNameComponent();
        element.format = 'short';
        return Promise.resolve().then(() => {
            expect(getText(element)).toBe('John Doe');
        });
    });

    it('Name with medium format', () => {
        const element = createFormattedNameComponent();
        element.format = 'medium';
        return Promise.resolve().then(() => {
            expect(getText(element)).toBe('John Middleton Doe');
        });
    });
});
