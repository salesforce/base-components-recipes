/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

export const isIE11 = isIE11Test(navigator);
export const isChrome = isChromeTest(navigator);
export const isSafari = isSafariTest(navigator);

export function isIE11Test(navigator) {
    return /Trident.*rv[ :]*11\./.test(navigator.userAgent);
}

export function isChromeTest(navigator) {
    return (
        /Chrome/.test(navigator.userAgent) &&
        /Google Inc/.test(navigator.vendor)
    );
}

export function isSafariTest(navigator) {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
