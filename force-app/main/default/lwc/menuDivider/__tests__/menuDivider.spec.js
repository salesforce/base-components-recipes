/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/menuDivider';

const createMenuDivider = () => {
    const element = createElement('c-menu-divider', { is: Element });
    document.body.appendChild(element);
    return element;
};

describe('c-menu-divider', () => {
    it('default state', () => {
        const menuDivider = createMenuDivider();

        return Promise.resolve().then(() => {
            expect(menuDivider).toMatchSnapshot();
        });
    });

    it('if variant attribute is set to `compact`, element should have the CSS class `slds-has-divider_top`', () => {
        const menuDivider = createMenuDivider();
        menuDivider.variant = 'compact';

        return Promise.resolve().then(() => {
            const div = menuDivider.shadowRoot.querySelector('div');
            expect(div.classList.contains('slds-has-divider_top')).toBeTruthy();
        });
    });

    it('if variant attribute is set to invalid value, element should have the default CSS class `slds-has-divider_top-space`', () => {
        const menuDivider = createMenuDivider();
        menuDivider.variant = 'blahblah';

        return Promise.resolve().then(() => {
            const div = menuDivider.shadowRoot.querySelector('div');
            expect(
                div.classList.contains('slds-has-divider_top-space')
            ).toBeTruthy();
        });
    });
});
