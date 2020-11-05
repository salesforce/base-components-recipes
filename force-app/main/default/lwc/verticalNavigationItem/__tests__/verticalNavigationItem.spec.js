/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/verticalNavigationItem';

function on(element, name) {
    return new Promise((resolve) => {
        element.addEventListener(name, (event) => {
            resolve(event);
        });
    });
}

describe('c-vertical-navigation-item', () => {
    it('should apply default classes and href', () => {
        const element = createElement('c-vertical-navigation-item', {
            is: Element
        });

        document.body.appendChild(element);
        expect(element.className).toBe('slds-nav-vertical__item');
        expect(element.href).toBe('javascript:void(0);'); // eslint-disable-line no-script-url
    });

    it('applies default classes to link', () => {
        const element = createElement('c-vertical-navigation-item', {
            is: Element
        });

        document.body.appendChild(element);
        const link = element.shadowRoot.querySelector('a');
        expect(link.className).toBe('slds-nav-vertical__action');
    });

    it('uses label', () => {
        const element = createElement('c-vertical-navigation-item', {
            is: Element
        });

        element.label = 'test';
        document.body.appendChild(element);

        return Promise.resolve().then(() => {
            const link = element.shadowRoot.querySelector('a');
            expect(link.textContent).toBe('test');
        });
    });

    it('adds expected class name on selection', () => {
        const element = createElement('c-vertical-navigation-item', {
            is: Element
        });

        const assert = on(element, 'privateitemregister')
            .then((event) => {
                event.detail.callbacks.select();
            })
            .then(() => {
                expect(element.classList.contains('slds-is-active')).toBe(true);
            });
        document.body.appendChild(element);
        return assert;
    });

    it('removes class name on deselection', () => {
        const element = createElement('c-vertical-navigation-item', {
            is: Element
        });

        const assert = on(element, 'privateitemregister')
            .then((event) => {
                event.detail.callbacks.select();
                return event;
            })
            .then((event) => {
                event.detail.callbacks.deselect();
            })
            .then(() => {
                expect(element.classList.contains('slds-is-active')).toBe(
                    false
                );
            });
        document.body.appendChild(element);
        return assert;
    });

    it('should show href argument in link', () => {
        const element = createElement('c-vertical-navigation-item', {
            is: Element
        });

        element.href = 'http://valid.href';
        document.body.appendChild(element);

        return Promise.resolve(() => {
            const link = element.querySelector('a');
            expect(link.href).toBe('http://valid.href');
        });
    });
});
