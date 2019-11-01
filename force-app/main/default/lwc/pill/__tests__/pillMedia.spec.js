/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'snapshot/pill';

const createComponent = () => {
    const element = createElement('snapshot-pill', { is: Element });
    document.body.appendChild(element);
    return element;
};

describe('pass in media', () => {
    it('label', () => {
        const element = createComponent();
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });
});