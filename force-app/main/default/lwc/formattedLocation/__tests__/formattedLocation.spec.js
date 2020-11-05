/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/formattedLocation';

const createComponent = (attributes) => {
    const element = createElement('c-formatted-location', {
        is: Element
    });

    Object.assign(element, attributes);
    document.body.appendChild(element);
    return element;
};

describe('c-formatted-location', () => {
    it('default', () => {
        const element = createComponent({
            longitude: 100.0,
            latitude: 90
        });

        expect(element).toMatchSnapshot();
    });

    it('normal longitude and latitude', () => {
        const element = createComponent({
            longitude: 122.222,
            latitude: 22.222
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('too big longitude', () => {
        const element = createComponent({
            longitude: 182.222,
            latitude: 22.222
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('too big latitude', () => {
        const element = createComponent({
            longitude: 182.222,
            latitude: 99.222
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('invalid longitude and latitude', () => {
        const element = createComponent({
            longitude: '122.222sss',
            latitude: 22.222
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('missing longitude and latitude', () => {
        const element = createComponent({
            longitude: null,
            latitude: 22.222
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });
});
