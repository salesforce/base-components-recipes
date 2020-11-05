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

    it('should render bare variant', () => {
        const element = createComponent({
            variant: 'bare'
        });

        element.items = items;
        document.body.appendChild(element);
        expect(element).toMatchSnapshot();
    });

    it('should fire itemremove event with item and only once', () => {
        const mockListener = jest.fn();
        const element = createComponent({ items, singleLine: true });
        element.addEventListener('itemremove', mockListener);

        const pill = element.shadowRoot.querySelector(PILL_SELECTOR);
        const icon =
            pill && pill.shadowRoot.querySelector('.slds-pill__remove');
        icon.click();

        expect(mockListener.mock.calls.length).toBe(1);
        const event = mockListener.mock.calls[0][0];
        expect(event.detail.index).toBe(0);
        expect(event.detail.item.type).toBe(items[0].type);
    });

    it('should focus on the first pill when focus called', () => {
        const element = createComponent({ items });
        const mockListener = jest.fn();
        const firstPill = element.shadowRoot.querySelector('c-pill');
        firstPill.addEventListener('focus', mockListener);
        element.focus();
        expect(mockListener).toHaveBeenCalled();
    });

    it('should focus on the first pill when clicked', () => {
        const element = createComponent({ items });
        const ul = element.shadowRoot.querySelector('ul');
        const mockListener = jest.fn();
        const firstPill = element.shadowRoot.querySelector('c-pill');
        firstPill.addEventListener('focus', mockListener);
        ul.click();
        expect(mockListener).toHaveBeenCalled();
    });

    it('should focus on the ul element when no items present and focus is called', () => {
        const element = createComponent();
        const mockListener = jest.fn();
        const ul = element.shadowRoot.querySelector('ul');
        ul.addEventListener('focus', mockListener);
        element.focus();
        expect(mockListener).toHaveBeenCalled();
    });

    it('should focus on the pill when clicked', () => {
        const element = createComponent({ items });
        const allPills = element.shadowRoot.querySelectorAll('c-pill');
        const secondPill = allPills[1];
        const mockListener = jest.fn();
        secondPill.addEventListener('focus', mockListener);
        secondPill.click();
        expect(mockListener).toHaveBeenCalled();
    });

    it('should move the focus to the pill on the right/left when using right/left arrow key', () => {
        const element = createComponent({ items });
        const ul = element.shadowRoot.querySelector('ul');
        const firstPillMockListener = jest.fn();
        const secondPillMockListener = jest.fn();
        const thirdPillMockListener = jest.fn();
        const [
            firstPill,
            secondPill,
            thirdPill
        ] = element.shadowRoot.querySelectorAll('c-pill');
        firstPill.addEventListener('focus', firstPillMockListener);
        secondPill.addEventListener('focus', secondPillMockListener);
        thirdPill.addEventListener('focus', thirdPillMockListener);

        const rightArrowKeyEvent = new KeyboardEvent('keydown', {
            keyCode: 39
        });

        const leftArrowKeyEvent = new KeyboardEvent('keydown', {
            keyCode: 37
        });

        element.focus();
        ul.dispatchEvent(rightArrowKeyEvent);
        ul.dispatchEvent(rightArrowKeyEvent);
        ul.dispatchEvent(rightArrowKeyEvent);
        ul.dispatchEvent(leftArrowKeyEvent);
        ul.dispatchEvent(leftArrowKeyEvent);
        ul.dispatchEvent(leftArrowKeyEvent);

        expect(firstPillMockListener.mock.calls.length).toBe(3);
        expect(secondPillMockListener.mock.calls.length).toBe(2);
        expect(thirdPillMockListener.mock.calls.length).toBe(2);
    });
});
