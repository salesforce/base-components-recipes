/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import { shadowQuerySelector } from 'lightning/testUtils';
import Element from 'c/treeItem';

describe('c-tree-item', () => {
    it('renders leaf tree-item', () => {
        const element = createElement('c-tree-item', { is: Element });
        document.body.appendChild(element);
        element.isRoot = false;
        element.label = 'label';
        element.href = 'href';
        element.metatext = 'metatext';
        element.nodeRef = {
            expanded: false
        };

        element.isExpanded = false;
        element.isDisabled = false;
        element.nodename = '2234';
        element.nodeKey = '1.1';
        element.isLeaf = true;

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('should render disabled tree item', () => {
        const element = createElement('c-tree-item', { is: Element });

        Object.assign(element, {
            isRoot: false,
            label: 'label',
            metatext: 'metatext',
            isExpanded: true,
            isDisabled: true,
            ariaDisabled: true
        });

        document.body.appendChild(element);

        return Promise.resolve().then(() => {
            const itemEl = element.shadowRoot.querySelector('.slds-tree__item');
            const buttonEl = itemEl.querySelector('button');
            const labelEl = itemEl.querySelector('.slds-tree__item-label');
            const metaEl = itemEl.querySelector('.slds-tree__item-meta');

            expect(itemEl.querySelector('a')).toBe(null);
            expect(buttonEl.classList.contains('slds-hidden')).toBe(true);
            expect(labelEl.textContent).toBe('label');
            expect(metaEl.textContent).toBe(':metatext');
        });
    });

    it('should hide children items of disabled item', () => {
        const element = createElement('c-tree-item', { is: Element });

        Object.assign(element, {
            isRoot: false,
            label: 'label',
            metatext: 'metatext',
            isExpanded: true,
            isDisabled: true,
            ariaDisabled: true,
            nodeRef: {
                expanded: true
            },

            childItems: [
                {
                    isRoot: false,
                    label: 'label-child',
                    isExpanded: false,
                    isDisabled: false,
                    href: 'href',
                    isLeaf: true,
                    key: 'key'
                }
            ]
        });

        document.body.appendChild(element);

        return Promise.resolve().then(() => {
            expect(element.shadowRoot.querySelector('c-tree-item')).toBe(null);
        });
    });

    it('uses the correct icon for LTR', () => {
        const element = createElement('c-tree-item', { is: Element });
        document.body.appendChild(element);

        element.isRoot = false;
        element.label = 'label';
        element.href = 'href';

        return Promise.resolve().then(() => {
            const lightningIcon = shadowQuerySelector(
                element,
                'c-primitive-icon'
            );

            expect(lightningIcon.iconName).toBe('utility:chevronright');
        });
    });

    it('uses the correct icon for RTL', () => {
        const element = createElement('c-tree-item', { is: Element });
        document.dir = 'rtl';
        document.body.appendChild(element);

        element.isRoot = false;
        element.label = 'label';
        element.href = 'href';

        return Promise.resolve().then(() => {
            const lightningIcon = shadowQuerySelector(
                element,
                'c-primitive-icon'
            );

            expect(lightningIcon.iconName).toBe('utility:chevronleft');
        });
    });
});
