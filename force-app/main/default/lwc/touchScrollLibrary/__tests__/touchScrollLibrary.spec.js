/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { TouchScroller } from '../touchScrollLibrary';

class MockElement {
    listeners = {};

    setAttribute(name, value) {
        this[name] = value;
    }

    getAttribute(name) {
        return this[name];
    }

    addEventListener(listener, handler) {
        if (!this.listeners[listener]) {
            this.listeners[listener] = [];
        }
        this.listeners[listener].push(handler);
    }
}

function createMockElement(id) {
    const el = new MockElement();
    el.id = id;
    return el;
}

const touchListeners = ['touchstart', 'touchmove'];

describe('c-touch-scroll-library', () => {
    it('throws an error when a target for the touch scroller has not been specified', () => {
        expect(() => {
            return new TouchScroller();
        }).toThrow(Error);
    });

    describe('Desktop', () => {
        it('does not add touch listeners to the target for non-mobile form factors', () => {
            const target = createMockElement('target');
            TouchScroller.isMobile = jest.fn(() => false);
            const touchScroller = new TouchScroller(target);
            const hasExcludedListeners = touchListeners.some((current) => {
                const handlers = touchScroller._target.listeners[current];
                return handlers && handlers.length === 1;
            });
            expect(hasExcludedListeners).toBe(false);
        });
    });

    describe('Mobile', () => {
        it('adds touch listeners to the target for mobile form factors', () => {
            const target = createMockElement('target');
            TouchScroller.isMobile = jest.fn(() => true);
            const touchScroller = new TouchScroller(target);
            const hasExpectedListeners = touchListeners.every((current) => {
                const handlers = touchScroller._target.listeners[current];
                return handlers && handlers.length === 1;
            });
            expect(hasExpectedListeners).toBe(true);
        });
    });
});
