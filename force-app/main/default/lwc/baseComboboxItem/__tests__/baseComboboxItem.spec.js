/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/baseComboboxItem';

const createComponent = (params = {}) => {
    const element = createElement('c-base-combobox-item', {
        is: Element
    });

    Object.assign(element, params);
    document.body.appendChild(element);
    return element;
};

const exampleTextWithHighlight = [
    { text: 'Hi' },
    { text: 'ghl', highlight: true },
    { text: 'ighted Text' }
];

describe('c-base-combobox-item', () => {
    it('renders card', () => {
        const element = createComponent({
            item: {
                text: 'Item Example',
                subText: 'Item example info',
                iconName: `utility:search`,
                type: 'option-card'
            }
        });

        expect(element).toMatchSnapshot();
    });

    it('renders card w/o subtext', () => {
        const element = createComponent({
            item: {
                text: 'Item Example',
                iconName: `utility:search`,
                type: 'option-card'
            }
        });

        expect(element).toMatchSnapshot();
    });

    it('renders inline text', () => {
        const element = createComponent({
            item: {
                text: 'Inline Example',
                iconName: `utility:search`,
                type: 'option-inline'
            }
        });

        expect(element).toMatchSnapshot();
    });

    it('renders card w/ highlighted text', () => {
        const element = createComponent({
            item: {
                text: exampleTextWithHighlight,
                subText: exampleTextWithHighlight,
                iconName: `utility:search`,
                type: 'option-card'
            }
        });

        expect(element).toMatchSnapshot();
    });

    it('renders inline text w/ highlighted text', () => {
        const element = createComponent({
            item: {
                text: exampleTextWithHighlight,
                iconName: `utility:search`,
                type: 'option-inline'
            }
        });

        expect(element).toMatchSnapshot();
    });

    it('renders inline text w/ alternative text for inline', () => {
        const element = createComponent({
            item: {
                text: 'example text',
                iconAlternativeText: 'example alternative text',
                iconName: `utility:search`,
                type: 'option-inline'
            }
        });

        expect(element).toMatchSnapshot();
    });

    it('renders inline text w/ alternative text for card', () => {
        const element = createComponent({
            item: {
                text: 'example text',
                iconAlternativeText: 'example alternative text',
                iconName: `utility:search`,
                type: 'option-card'
            }
        });

        expect(element).toMatchSnapshot();
    });
});
