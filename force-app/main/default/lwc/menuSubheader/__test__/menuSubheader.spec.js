/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/menuSubheader';

const createMenuSubheader = () => {
    const element = createElement('c-menu-subheader', { is: Element });
    document.body.appendChild(element);
    return element;
};

describe('c-menu-subheader', () => {
    it('default state', () => {
        const menuSubheader = createMenuSubheader();
        menuSubheader.label = 'Subheader';

        return Promise.resolve().then(() => {
            expect(menuSubheader).toMatchSnapshot();
        });
    });
});
