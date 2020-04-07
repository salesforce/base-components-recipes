/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/tile';
import MockTileHolder from 'lightningtest/mockTileHolder';
import { shadowQuerySelector } from 'lightning/testUtils';

const TILE_TITLE = 'Information tile';

const createComponent = (params = {}) => {
    const element = createElement('c-tile', {
        is: Element
    });

    element.label = TILE_TITLE;
    Object.assign(element, params);
    document.body.appendChild(element);
    return element;
};

const createComponentWithHolder = (params = {}) => {
    const element = createElement('lightningtest-tile-holder', {
        is: MockTileHolder
    });

    Object.assign(element, params);
    document.body.appendChild(element);
    return element;
};

describe('c-tile variant snapshots', () => {
    it('renders standard', () => {
        const element = createComponent();
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('renders media', () => {
        const element = createComponent({ type: 'media' });
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });
});

describe('c-tile slots', () => {
    it('renders content slot properly', () => {
        const slotContent = 'The Slot Content';
        const element = createComponentWithHolder({
            contentSlotText: slotContent
        });

        const tile = shadowQuerySelector(element, 'c-tile');
        const slot = shadowQuerySelector(tile, '.slds-tile__detail slot');
        const content = slot.assignedElements()[0];
        expect(content.textContent).toContain(slotContent);
    });

    it('doesn`t render media slot properly for standard variant', () => {
        const slotContent = 'TheMediaSlot';
        const element = createComponentWithHolder({
            mediaSlotText: slotContent
        });

        const tile = shadowQuerySelector(element, 'c-tile');
        const mediaSlotMarkup = shadowQuerySelector(
            tile,
            '.slds-media__figure'
        );

        return Promise.resolve().then(() => {
            expect(mediaSlotMarkup).toBe(null);
            expect(tile.textContent).not.toContain(slotContent);
        });
    });

    it('renders content slot properly for media variant', () => {
        const slotContent = 'The Slot Content';
        const element = createComponentWithHolder({
            contentSlotText: slotContent,
            tileType: 'media'
        });

        const tile = shadowQuerySelector(element, 'c-tile');
        const slot = shadowQuerySelector(tile, '.slds-tile__detail slot');
        const content = slot.assignedElements()[0];
        expect(content.textContent).toContain(slotContent);
    });

    it('renders media slot properly for media variant', () => {
        const slotContent = 'TheMediaSlot';
        const element = createComponentWithHolder({
            mediaSlotText: slotContent,
            tileType: 'media'
        });

        const tile = shadowQuerySelector(element, 'c-tile');
        const slot = shadowQuerySelector(tile, '.slds-media__figure slot');
        const content = slot.assignedElements()[0];
        expect(content.textContent).toContain(slotContent);
    });
});

describe('c-tile', () => {
    it('renders title', () => {
        const element = createComponent();
        return Promise.resolve().then(() => {
            expect(element.shadowRoot.textContent).toContain(TILE_TITLE);
        });
    });

    it('renders href', () => {
        const exampleHref = 'http://website.salesforce.com/';
        const element = createComponent({
            href: exampleHref
        });

        const link = shadowQuerySelector(element, 'a');
        return Promise.resolve().then(() => {
            expect(link.href).toBe(exampleHref);
        });
    });

    it('renders href for media', () => {
        const exampleHref = 'http://website.salesforce.com/';
        const element = createComponent({
            href: exampleHref,
            type: 'media'
        });

        const link = shadowQuerySelector(element, 'a');
        return Promise.resolve().then(() => {
            expect(link.href).toBe(exampleHref);
        });
    });

    it('renders media tile', () => {
        const element = createComponent({
            type: 'media'
        });

        return Promise.resolve().then(() => {
            expect(element.classList).toContain('slds-media');
        });
    });

    it('renders actions', () => {
        const element = createComponent({
            actions: [{ label: 'action1label', value: 'action1value' }]
        });

        const buttonMenu = shadowQuerySelector(element, 'c-button-menu');

        const lightningIcon = shadowQuerySelector(
            buttonMenu,
            'c-primitive-icon'
        );

        return Promise.resolve().then(() => {
            expect(lightningIcon).not.toBe(null);
        });
    });
});
