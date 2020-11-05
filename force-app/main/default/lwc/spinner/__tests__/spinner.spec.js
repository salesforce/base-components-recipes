/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import cElement from 'c/spinner';

const alternativeText = 'required alternative text';

function createComponent(props = {}) {
    const element = createElement('c-spinner', {
        is: cElement
    });

    Object.assign(element, props);
    document.body.appendChild(element);
    return element;
}

describe('c-spinner', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('default', () => {
        const element = createComponent({
            alternativeText
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    ['small', 'medium', 'large'].forEach((size) => {
        it(`size=${size}`, () => {
            const element = createComponent({
                size,
                alternativeText
            });

            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });
    });

    ['base', 'brand', 'inverse'].forEach((variant) => {
        it(`variant=${variant}`, () => {
            const element = createComponent({
                variant,
                alternativeText
            });

            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });
    });
});
