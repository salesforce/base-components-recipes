/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

const POSITION_CHANGE_THRESHOLD = 5;
export function observePosition(
    target,
    threshold = POSITION_CHANGE_THRESHOLD,
    originalRect,
    callback
) {
    const newBoundingRect = target.getBoundingClientRect();
    const newLeft = newBoundingRect.left;
    const newTop = newBoundingRect.top;

    const oldLeft = originalRect.left;
    const oldTop = originalRect.top;

    const horizontalShiftDelta = Math.abs(newLeft - oldLeft);
    const verticalShiftDelta = Math.abs(newTop - oldTop);

    if (horizontalShiftDelta >= threshold || verticalShiftDelta >= threshold) {
        callback();
    }
}
