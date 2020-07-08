/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/button';

const createButton = (props = {}) => {
    const element = createElement('c-button', { is: Element });
    Object.assign(element, props);
    document.body.appendChild(element);
    return element;
};

describe('c-button', () => {
    it('should trigger focus when button is focused', () => {
        const element = createButton({});

        const evtListenerMock = jest.fn();
        element.addEventListener('focus', evtListenerMock);

        element.shadowRoot.querySelector('button').focus();
        expect(evtListenerMock).toHaveBeenCalled();
    });
    it('should trigger blur when button lost focus', () => {
        const element = createButton({});

        const evtListenerMock = jest.fn();
        element.addEventListener('blur', evtListenerMock);

        const btn = element.shadowRoot.querySelector('button');
        btn.focus();
        btn.blur();

        expect(evtListenerMock).toHaveBeenCalled();
    });
    it('should set title attribute on the button', () => {
        const element = createButton({ title: 'Click here' });

        const btn = element.shadowRoot.querySelector('button');

        expect(btn.getAttribute('title')).toBe('Click here');
        expect(element.getAttribute('title')).toBe(null);
    });
    it('should set aria-expanded attribute on the button when false', () => {
        const element = createButton({ ariaExpanded: 'false' });

        const btn = element.shadowRoot.querySelector('button');

        return Promise.resolve().then(() => {
            expect(btn.getAttribute('aria-expanded')).toBe('false');
            expect(element.getAttribute('aria-expanded')).toBe(null);
        });
    });
    it('should set aria-expanded attribute on the button when true', () => {
        const element = createButton({ ariaExpanded: 'true' });

        const btn = element.shadowRoot.querySelector('button');

        return Promise.resolve().then(() => {
            expect(btn.getAttribute('aria-expanded')).toBe('true');
            expect(element.getAttribute('aria-expanded')).toBe(null);
        });
    });
    it('shouldnt set aria-expanded attribute when boolean', () => {
        const element = createButton({ ariaExpanded: true });

        const btn = element.shadowRoot.querySelector('button');

        return Promise.resolve().then(() => {
            expect(btn.getAttribute('aria-expanded')).toBe(null);
            expect(element.getAttribute('aria-expanded')).toBe(null);
        });
    });
    it('should set aria-live attribute on the button', () => {
        const element = createButton({ ariaLive: 'polite' });

        const btn = element.shadowRoot.querySelector('button');

        return Promise.resolve().then(() => {
            expect(btn.getAttribute('aria-live')).toBe('polite');
            expect(element.getAttribute('aria-live')).toBe(null);
        });
    });
    it('should set aria-controls attribute on the button', () => {
        const element = createButton({ ariaControls: 'section1' });

        const btn = element.shadowRoot.querySelector('button');

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
            expect(btn.getAttribute('aria-controls')).toEqual(
                expect.stringContaining('[shadow:guid]')
            );

            expect(element.getAttribute('aria-controls')).toBe(null);
        });
    });
    it('should set aria-label attribute on the button', () => {
        const element = createButton({ ariaLabel: 'btn1' });

        const btn = element.shadowRoot.querySelector('button');

        return Promise.resolve().then(() => {
            expect(btn.getAttribute('aria-label')).toBe('btn1');
            expect(element.getAttribute('aria-label')).toBe(null);
        });
    });
    it('should set aria-describedby attribute on the button', () => {
        const element = createButton({ ariaDescribedBy: 'section1' });
        const btn = element.shadowRoot.querySelector('button');
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
            expect(btn.getAttribute('aria-describedby')).toEqual(
                '[shadow:guid]'
            );

            expect(element.getAttribute('aria-describedby')).toBe(null);
        });
    });
    it('aria-attributes should be present and true', () => {
        const element = createButton({
            label: 'Test',
            title: 'Click here',
            ariaExpanded: 'true',
            ariaAtomic: 'true'
        });

        const btn = element.shadowRoot.querySelector('button');

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
            expect(btn.getAttribute('aria-expanded')).toBe('true');
            expect(btn.getAttribute('aria-atomic')).toBe('true');
        });
    });
    it('should set not set any aria-attributes', () => {
        const element = createButton({
            label: 'Test',
            title: 'Click here',
            tabIndex: '-1',
            ariaExpanded: null
        });

        const btn = element.shadowRoot.querySelector('button');

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
            expect(btn.getAttribute('aria-expanded')).toBe(null);
            expect(btn.getAttribute('aria-atomic')).toBe(null);
        });
    });
    it('fires click event when button is clicked', () => {
        const element = createButton({ label: 'Submit' });
        const evtListenerMock = jest.fn();
        element.addEventListener('click', evtListenerMock);
        element.shadowRoot.querySelector('button').click();

        return Promise.resolve().then(() => {
            expect(evtListenerMock.mock.calls).toHaveLength(1);
        });
    });

    it('should set pointer-events to none when button is disabled', () => {
        const element = createButton({ label: 'Submit', disabled: true });
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
