/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/tree';
import { getTreeNested, getTree } from '../treeDataGenerator';
import { shadowQuerySelector } from 'lightning/testUtils';

describe('c-tree', () => {
    it('simple tree', () => {
        const element = createElement('c-tree', { is: Element });
        document.body.appendChild(element);
        element.items = getTree('Snapshot_Tree_Simple', 4);
        element.header = 'Sample Tree';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('nested tree', () => {
        let i = 0;
        const levelOptions = {
            [++i]: 3,
            [++i]: 3
        };

        const element = createElement('c-tree', { is: Element });
        document.body.appendChild(element);
        element.items = getTreeNested('Snapshot_Tree_Nested', levelOptions);
        element.header = 'Sample Tree';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('nested tree with metatext on nodes', () => {
        let i = 0;
        const levelOptions = {
            [++i]: 3,
            [++i]: 3
        };

        const element = createElement('c-tree', { is: Element });
        document.body.appendChild(element);
        element.items = getTreeNested(
            'Snapshot_Tree_Nested_With_Metatext',
            levelOptions,
            true
        );

        element.header = 'Sample Tree';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });
    it('selects node when selected attribute is set and reacts to changes', () => {
        const element = createElement('c-tree', { is: Element });
        document.body.appendChild(element);
        const items = [];
        const a = { label: 'Item a', name: 'a', items: [] };
        const b = { label: 'Item b', name: 'b', items: [] };
        const c = { label: 'Item c', name: 'c', items: [] };
        const d = { label: 'Item d', name: 'd', items: [] };
        items[0] = a;
        a.items[0] = b;
        a.items[1] = d;
        b.items[0] = c;
        element.items = items;
        element.selectedItem = 'c';
        return Promise.resolve().then(() => {
            let tree = shadowQuerySelector(element, 'c-tree-item[role="tree"]');

            let levelOneChild = shadowQuerySelector(
                tree,
                'c-tree-item:nth-of-type(1)'
            );

            expect(levelOneChild.getAttribute('aria-expanded')).toBe('true');

            let firstChild = shadowQuerySelector(
                levelOneChild,
                'div[role="group"] c-tree-item:nth-of-type(1)'
            );

            expect(firstChild.getAttribute('aria-expanded')).toBe('true');

            firstChild = shadowQuerySelector(
                firstChild,
                'div[role="group"] c-tree-item:nth-of-type(1)'
            );

            expect(firstChild.getAttribute('aria-selected')).toBe('true');

            element.selectedItem = 'd';
            return Promise.resolve().then(() => {
                tree = shadowQuerySelector(element, 'c-tree-item[role="tree"]');

                levelOneChild = shadowQuerySelector(
                    tree,
                    'c-tree-item:nth-of-type(1)'
                );

                const secondChild = shadowQuerySelector(
                    levelOneChild,
                    'div[role="group"] c-tree-item:nth-of-type(2)'
                );

                expect(secondChild.getAttribute('aria-selected')).toBe('true');
            });
        });
    });
    it('when selected attribute is not set doesnt set aria-selected on any node', () => {
        const element = createElement('c-tree', { is: Element });
        document.body.appendChild(element);
        const items = [];
        const a = { label: 'Item a', name: 'a', items: [] };
        const b = { label: 'Item b', name: 'b', items: [] };
        const c = { label: 'Item c', name: 'c', items: [] };
        const d = { label: 'Item d', name: 'd', items: [] };
        items[0] = a;
        items[1] = d;
        a.items[0] = b;
        b.items[0] = c;
        element.items = items;
        return Promise.resolve().then(() => {
            const tree = shadowQuerySelector(
                element,
                'c-tree-item[role="tree"]'
            );

            let firstChild = shadowQuerySelector(
                tree,
                'c-tree-item:nth-of-type(1)'
            );

            expect(firstChild.getAttribute('aria-expanded')).toBe('false');
            expect(firstChild.getAttribute('aria-selected')).toBe('false');
            firstChild = shadowQuerySelector(
                firstChild,
                'div[role="group"] c-tree-item:nth-of-type(1)'
            );

            expect(firstChild).toBe(null);
            const secondChild = shadowQuerySelector(
                tree,
                'c-tree-item:nth-of-type(2)'
            );

            expect(secondChild.getAttribute('aria-selected')).toBe('false');
        });
    });
});
