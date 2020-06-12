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
