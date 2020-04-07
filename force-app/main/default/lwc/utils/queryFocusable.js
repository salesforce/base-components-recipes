/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

const inputableNode = /input|select|textarea|button|object/;

function visible(element) {
    const { width, height } = element.getBoundingClientRect();
    const noZeroSize = width > 0 || height > 0;
    return (
        noZeroSize && window.getComputedStyle(element).visibility !== 'hidden'
    );
}

function focusable(element) {
    const nodeName = element.tagName.toLowerCase();
    const res =
        (inputableNode.test(nodeName) && !element.disabled) ||
        (nodeName === 'a' && element.href);

    return res && visible(element);
}

function tabbable(element) {
    const isDataActionable =
        element.getAttribute('data-navigation') === 'enable';
    const tabIndex = element.tabIndex;
    return (tabIndex >= 0 && focusable(element)) || isDataActionable;
}

export function queryFocusable(element) {
    return [].slice.call(element.querySelectorAll('*'), 0).filter(tabbable);
}