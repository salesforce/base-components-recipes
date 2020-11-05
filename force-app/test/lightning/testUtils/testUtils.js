/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import {
    querySelector as kkQuerySelector,
    querySelectorAll as kkQuerySelectorAll
} from './utils/kagekiri';

export function getShadowRoot(element) {
    if (!element || !element.shadowRoot) {
        const tagName =
            element && element.tagName && element.tagName.toLowerCase();
        throw new Error(
            `Attempting to retrieve the shadow root of '${
                tagName || element
            }' but no shadowRoot property found`
        );
    }
    return element.shadowRoot;
}

export function shadowQuerySelector(element, selector) {
    return getShadowRoot(element).querySelector(selector);
}

export function shadowQuerySelectorAll(element, selector) {
    return Array.from(getShadowRoot(element).querySelectorAll(selector));
}

// eslint-disable-next-line @lwc/lwc/no-rest-parameter
export function testConnectedElement(element, attributes, ...tests) {
    Object.assign(element, attributes);
    document.body.appendChild(element);
    return tests
        .reduce((promise, test) => promise.then(test), Promise.resolve())
        .then(
            (value) => {
                document.body.removeChild(element);
                return value;
            },
            (value) => {
                document.body.removeChild(element);
                return Promise.reject(value);
            }
        );
}

export function verifyClassSet(node, classSet) {
    const nodeClasses = node.getAttribute('class').split(' ');
    const expectedClasses = Object.keys(classSet).filter((className) => {
        return classSet[className];
    });
    const hasExpectedClasses = expectedClasses.reduce((soFar, className) => {
        return soFar && nodeClasses.indexOf(className) !== -1;
    }, true);
    const hasUnexpectedClasses = Object.keys(classSet)
        .filter((className) => {
            return !classSet[className];
        })
        .reduce((soFar, className) => {
            return soFar || nodeClasses.indexOf(className) !== -1;
        }, false);
    expect(hasExpectedClasses).toBe(true);
    expect(hasUnexpectedClasses).toBe(false);
}

export function getInputElements(element) {
    return querySelectorAll(element, 'input');
}

export function querySelector(element, selector) {
    return kkQuerySelector(selector, element);
}

export function querySelectorAll(element, selector) {
    return Array.from(kkQuerySelectorAll(selector, element));
}

export function isElementWithFocus(element) {
    let currentFocusedElement = document.activeElement;
    while (currentFocusedElement && currentFocusedElement !== element) {
        currentFocusedElement = currentFocusedElement.shadowRoot
            ? currentFocusedElement.shadowRoot.activeElement
            : null;
    }

    return currentFocusedElement === element;
}

export function getElementWithFocus() {
    let focusedElement = document.activeElement;
    let currentFocusedElement = focusedElement;

    while (focusedElement && focusedElement.shadowRoot) {
        focusedElement = getShadowRoot(currentFocusedElement).activeElement;
        if (focusedElement) {
            currentFocusedElement = focusedElement;
        }
    }

    return currentFocusedElement;
}

export function getMock(path) {
    const mock = window.__mockData[path];
    return JSON.parse(JSON.stringify(mock));
}
