/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/relativeDateTime';

const createRelativeDateTime = (value) => {
    const element = createElement('c-relative-date-time', {
        is: Element
    });

    element.value = value;
    document.body.appendChild(element);
    return element;
};

const getText = (element) => {
    return element.shadowRoot.textContent;
};

describe('c-relative-date-time', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    it('should throw when invalid value provided', () => {
        const elem = createRelativeDateTime();
        expect(() => {
            elem.value = 'not valid value';
        }).toThrow();
    });

    it('should change formattedValue with time', () => {
        jest.clearAllTimers();
        const element = createRelativeDateTime(Date.now());
        jest.runOnlyPendingTimers();
        expect(getText(element)).toBe('a few seconds ago');
    });

    it('should change formattedValue after a few minutes', () => {
        jest.clearAllTimers();

        const now = Date.now();
        const element = createRelativeDateTime(Date.now());

        const addMinutes = 10 * 60 * 1000;
        jest.spyOn(Date, 'now').mockImplementation(() => now + addMinutes);
        jest.advanceTimersByTime(addMinutes);

        return Promise.resolve().then(() => {
            expect(getText(element)).toBe('10 minutes ago');
        });
    });

    it('should change formattedValue after a few hours', () => {
        jest.clearAllTimers();

        const now = Date.now();
        const element = createRelativeDateTime(Date.now());

        const addMinutes = 5 * 60 * 60 * 1000;
        jest.spyOn(Date, 'now').mockImplementation(() => now + addMinutes);
        jest.advanceTimersByTime(addMinutes);

        return Promise.resolve().then(() => {
            expect(getText(element)).toBe('5 hours ago');
        });
    });

    it('should change formattedValue after a few days', () => {
        jest.clearAllTimers();

        const now = Date.now();
        const element = createRelativeDateTime(Date.now());

        const addMinutes = 23 * 24 * 60 * 60 * 1000;
        jest.spyOn(Date, 'now').mockImplementation(() => now + addMinutes);
        jest.advanceTimersByTime(addMinutes);

        return Promise.resolve().then(() => {
            expect(getText(element)).toBe('23 days ago');
        });
    });
});
