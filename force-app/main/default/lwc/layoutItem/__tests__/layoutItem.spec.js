/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import cElement from 'c/layoutItem';

function createComponent(props = {}) {
    const element = createElement('c-layout-item', {
        is: cElement
    });

    Object.assign(element, props);
    document.body.appendChild(element);
    return element;
}

describe('c-layout-item', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('default', () => {
        const element = createComponent({
            size: 12
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });
    it('flexibility', () => {
        const element = createComponent({
            size: 12,
            flexibility: 'auto,grow,shrink'
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });
    it('alignment-bump', () => {
        const element = createComponent({
            size: 12,
            alignmentBump: 'right'
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });
    it('padding', () => {
        const element = createComponent({
            size: 12,
            padding: 'around-medium'
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });
});
