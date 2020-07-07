/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/buttonIcon';

const createButtonIcon = (props = {}) => {
    const element = createElement('c-button-icon', { is: Element });
    Object.assign(element, props);
    document.body.appendChild(element);
    return element;
};

describe('c-button-icon', () => {
    it('fires click event when button is clicked', () => {
        const element = createButtonIcon({ variant: 'brand' });
        const evtListenerMock = jest.fn();
        element.addEventListener('click', evtListenerMock);
        element.shadowRoot.querySelector('button').click();

        return Promise.resolve().then(() => {
            expect(evtListenerMock.mock.calls).toHaveLength(1);
        });
    });

    it('should has the "brand" class when the variant="brand"', () => {
        const element = createButtonIcon({ variant: 'brand' });
        expect(element.shadowRoot.querySelector('button').className).toEqual(
            expect.stringContaining('slds-button_icon-brand')
        );
    });
    it('should set title attribute on the button', () => {
        const element = createButtonIcon({ title: 'Click here' });

        const btn = element.shadowRoot.querySelector('button');

        expect(btn.getAttribute('title')).toBe('Click here');
        expect(element.getAttribute('title')).toBe(null);
    });
    it('should set aria-expanded attribute on the button when false', () => {
        const element = createButtonIcon({ ariaExpanded: 'false' });

        const btn = element.shadowRoot.querySelector('button');

        return Promise.resolve().then(() => {
            expect(btn.getAttribute('aria-expanded')).toBe('false');
            expect(element.getAttribute('aria-expanded')).toBe(null);
        });
    });
    it('should set aria-expanded attribute on the button when true', () => {
        const element = createButtonIcon({ ariaExpanded: 'true' });

        const btn = element.shadowRoot.querySelector('button');

        return Promise.resolve().then(() => {
            expect(btn.getAttribute('aria-expanded')).toBe('true');
            expect(element.getAttribute('aria-expanded')).toBe(null);
        });
    });
    it('should set aria-live attribute on the button', () => {
        const element = createButtonIcon({ ariaLive: 'polite' });

        const btn = element.shadowRoot.querySelector('button');

        return Promise.resolve().then(() => {
            expect(btn.getAttribute('aria-live')).toBe('polite');
            expect(element.getAttribute('aria-live')).toBe(null);
        });
    });
    it('should set aria-controls attribute on the button', () => {
        const element = createButtonIcon({ ariaControls: 'section1' });

        const btn = element.shadowRoot.querySelector('button');

        return Promise.resolve().then(() => {
            expect(btn.getAttribute('aria-controls')).toEqual(
                expect.stringContaining('section1')
            );

            expect(element.getAttribute('aria-controls')).toBe(null);
        });
    });
    it('should set aria-label attribute on the button', () => {
        const element = createButtonIcon({ ariaLabel: 'btn1' });

        const btn = element.shadowRoot.querySelector('button');

        return Promise.resolve().then(() => {
            expect(btn.getAttribute('aria-label')).toBe('btn1');
            expect(element.getAttribute('aria-label')).toBe(null);
        });
    });
    it('should set aria-describedby attribute on the button', () => {
        const element = createButtonIcon({ ariaDescribedBy: 'section1' });

        const btn = element.shadowRoot.querySelector('button');

        return Promise.resolve().then(() => {
            expect(btn.getAttribute('aria-describedby')).toEqual(
                expect.stringContaining('section1')
            );

            expect(element.getAttribute('aria-describedby')).toBe(null);
        });
    });
    it('should match snapshot with aria-attributes', () => {
        const element = createButtonIcon({
            label: 'Test',
            title: 'Click here',
            ariaExpanded: 'true',
            ariaAtomic: 'true'
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });
    it('should set not set any aria-attribute and match snapshot', () => {
        const element = createButtonIcon({
            label: 'Test',
            title: 'Click here',
            tabIndex: '-1',
            ariaAtomic: null
        });

        const btn = element.shadowRoot.querySelector('button');

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
            expect(btn.getAttribute('aria-expanded')).toBe(null);
            expect(btn.getAttribute('aria-atomic')).toBe(null);
        });
    });
    it('should set pointer-events to none when buttonIcon is disabled', () => {
        const element = createButtonIcon({
            label: 'Test',
            title: 'Click here',
            disabled: true
        });

        expect(element.style.pointerEvents).toBe('none');

        element.disabled = false;
        return Promise.resolve()
            .then(() => {
                expect(element.style.pointerEvents).toBe('');
                element.disabled = true;
            })
            .then(() => {
                expect(element.style.pointerEvents).toBe('none');
            });
    });
});
