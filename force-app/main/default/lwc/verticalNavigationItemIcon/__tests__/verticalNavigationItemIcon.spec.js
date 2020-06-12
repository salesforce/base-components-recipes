/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/verticalNavigationItemIcon';

const createItem = () => {
    const element = createElement('c-vertical-navigation-item-icon', {
        is: Element
    });

    element.iconName = 'utility:add';
    document.body.appendChild(element);
    return element;
};

describe('c-vertical-navigation-item-icon', () => {
    it('should apply default classes and href', () => {
        const element = createItem();
        expect(element.className).toBe('slds-nav-vertical__item');
        expect(element.href).toBe('javascript:void(0);'); // eslint-disable-line no-script-url
    });

    it('applies default classes to link', () => {
        const element = createItem();
        const link = element.shadowRoot.querySelector('a');
        expect(link.className).toBe('slds-nav-vertical__action');
    });

    it('should show href argument in link', () => {
        const element = createItem();
        element.href = 'http://valid.href';

        return Promise.resolve(() => {
            const link = element.querySelector('a');
            expect(link.href).toBe('http://valid.href');
        });
    });
});
