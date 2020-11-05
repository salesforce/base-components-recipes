/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'lightningtest/pillTest';

const createComponent = () => {
    const element = createElement('lightningtest-pill-test', { is: Element });
    document.body.appendChild(element);
    return element;
};

describe('pill with media elements', () => {
    it('label', () => {
        const element = createComponent();
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });
});
