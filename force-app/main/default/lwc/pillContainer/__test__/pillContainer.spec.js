/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/pillContainer';

const PILL_SELECTOR = 'c-pill';

function createComponent(props = {}) {
    const element = createElement('c-pill-container', { is: Element });
    Object.assign(element, props);
    document.body.appendChild(element);
    return element;
}

let items = [];

describe('c-pill-container', () => {
    beforeEach(() => {
        items = [
            {
                type: 'avatar',
                href: '',
                label: 'Avatar Pill',
                src: '/assets/images/avatar2.jpg',
                fallbackIconName: 'standard:user',
                variant: 'circle',
                alternativeText: 'User avatar'
            },

            {
                type: 'icon',
                href: '',
                label: 'Icon Pill',
                iconName: 'standard:account',
                alternativeText: 'Account'
            },

            {
                type: 'default',
                href: '',
                label: 'Icon Pill Default',
                iconName: 'standard:account',
                alternativeText: 'Account'
            }
        ];
    });
    it('should render when no items', () => {
        const element = createComponent();
        element.items = null;
        document.body.appendChild(element);
        expect(element).toMatchSnapshot();
    });

    it('should render with items', () => {
        const element = createComponent();
        element.items = items;
        document.body.appendChild(element);
        expect(element).toMatchSnapshot();
    });

    it('should render as single line', () => {
        const element = createComponent();
        element.items = items;
        element.singleLine = true;
        document.body.appendChild(element);
        expect(element).toMatchSnapshot();
    });

    it('should fire itemremove event with item and only once', () => {
        const mockListener = jest.fn();
        const element = createComponent({ items, singleLine: true });
        element.addEventListener('itemremove', mockListener);

        const pill = element.shadowRoot.querySelector(PILL_SELECTOR);
        const icon = pill && pill.shadowRoot.querySelector('c-primitive-icon');
        icon.click();

        expect(mockListener.mock.calls.length).toBe(1);
        const event = mockListener.mock.calls[0][0];
        expect(event.detail.index).toBe(0);
        expect(event.detail.item.type).toBe(items[0].type);
    });
});