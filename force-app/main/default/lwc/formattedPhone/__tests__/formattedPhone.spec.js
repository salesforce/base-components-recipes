/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/formattedPhone';
import { shadowQuerySelector } from 'lightning/testUtils';

const createComponent = (params = {}) => {
    const element = createElement('c-formatted-phone', { is: Element });
    Object.assign(element, params);
    document.body.appendChild(element);
    return element;
};

describe('c-formatted-phone', () => {
    it('default', () => {
        const element = createComponent();
        expect(element).toMatchSnapshot();
    });

    it('10 digits, should be formatted.', () => {
        const element = createComponent({
            value: '4255552255'
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('11 digits (start with 1), should be formatted.', () => {
        const element = createComponent({
            value: '14255552255'
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('11 digits (not start with 1), should not be formatted.', () => {
        const element = createComponent({
            value: '24255552255'
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('Non North American Phone Number, should not be formatted.', () => {
        const element = createComponent({
            value: '+24255552255'
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('North American Phone Number with extensions, should not be formatted', () => {
        const element = createComponent({
            value: '1234567890 ext. 225'
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('If no phone number, should show nothing.', () => {
        const element = createComponent({
            value: ''
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('sets tabIndex', () => {
        const element = createComponent({
            value: '1234567890',
            tabIndex: '0'
        });

        return Promise.resolve().then(() => {
            expect(element.getAttribute('tabindex')).toBeFalsy();
            expect(
                shadowQuerySelector(element, 'a').getAttribute('tabindex')
            ).toBe('0');
        });
    });
    it('propagates click events down to the inner anchor', () => {
        const element = createComponent({
            value: '1234567890'
        });

        return Promise.resolve().then(() => {
            const anchor = element.shadowRoot.querySelector('a');
            anchor.click = jest.fn();
            element.click();
            expect(anchor.click).toHaveBeenCalled();
        });
    });
});
