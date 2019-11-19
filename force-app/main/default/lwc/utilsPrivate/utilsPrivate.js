/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

export { assert } from './assert';
export { EventEmitter } from './eventEmitter';
export { toNorthAmericanPhoneNumber } from './phonify';
export * from './linkUtils';
export { deepCopy, arraysEqual, ArraySlice } from './utility';
export { guid } from './guid';
export { classListMutation } from './classListMutation';
export {
    normalizeBoolean,
    normalizeString,
    normalizeArray,
    normalizeAriaAttribute
} from './normalize';
export {
    keyCodes,
    runActionOnBufferedTypedCharacters,
    normalizeKeyValue,
    isShiftMetaOrControlKey
} from './keyboard';
export { raf } from './scroll';
export { isChrome, isIE11, isSafari } from './browser';
export { ContentMutation } from './contentMutation';
export { observePosition } from './observers';
export { hasOnlyAllowedVideoIframes } from './videoUtils';
import { smartSetAttribute } from './smartSetAttribute';

export function synchronizeAttrs(element, values) {
    if (!element) {
        return;
    }
    const attributes = Object.keys(values);
    attributes.forEach(attribute => {
        smartSetAttribute(element, attribute, values[attribute]);
    });
}

export function getRealDOMId(el) {
    if (el && typeof el === 'string') {
        return el;
    } else if (el) {
        return el.getAttribute('id');
    }
    return null;
}

const URL_CHECK_REGEX = /^(\/+|\.+|ftp|http(s?):\/\/)/i;

export function isAbsoluteUrl(url) {
    return URL_CHECK_REGEX.test(url);
}

export function getShadowActiveElement() {
    let activeElement = document.activeElement;
    while (activeElement.shadowRoot && activeElement.shadowRoot.activeElement) {
        activeElement = activeElement.shadowRoot.activeElement;
    }
    return activeElement;
}

export function getShadowActiveElements() {
    let activeElement = document.activeElement;
    const shadowActiveElements = [];
    while (
        activeElement &&
        activeElement.shadowRoot &&
        activeElement.shadowRoot.activeElement
    ) {
        shadowActiveElements.push(activeElement);
        activeElement = activeElement.shadowRoot.activeElement;
    }
    if (activeElement) {
        shadowActiveElements.push(activeElement);
    }
    return shadowActiveElements;
}

export function isRTL() {
    return document.dir === 'rtl';
}

export function isUndefinedOrNull(value) {
    return value === null || value === undefined;
}

export function isNotUndefinedOrNull(value) {
    return !isUndefinedOrNull(value);
}

const DEFAULT_ZINDEX_BASELINE = 9000;

export function getZIndexBaseline() {
    const value = (
        window.getComputedStyle(document.documentElement) ||
        document.documentElement.style
    ).getPropertyValue('--lwc-zIndexModal');

    const base = parseInt(value, 10);

    return isNaN(base) ? DEFAULT_ZINDEX_BASELINE : base;
}

export function timeout(interval) {
    return new Promise(resolve => {
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        setTimeout(resolve, interval);
    });
}

export function animationFrame() {
    return new Promise(resolve => {
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        window.requestAnimationFrame(resolve);
    });
}
