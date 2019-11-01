/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { keyCodes } from 'c/utilsPrivate';

function preventDefaultAndStopPropagation(event) {
    event.preventDefault();
    event.stopPropagation();
}

export function handleKeyDownOnTabList(
    event,
    currentFocusedIndex,
    tabsetInterface
) {
    switch (event.keyCode) {
        case keyCodes.left:
        case keyCodes.right:
        case keyCodes.down:
        case keyCodes.up: {
            const isArrowUp = event.keyCode === keyCodes.up;
            const isArrowDown = event.keyCode === keyCodes.down;
            const isArrowLeft = event.keyCode === keyCodes.left;
            const isArrowRight = event.keyCode === keyCodes.right;
            const verticalNavigation =
                tabsetInterface.isVerticalOrientation() &&
                (isArrowUp || isArrowDown);
            const horizontalNavigation =
                !tabsetInterface.isVerticalOrientation() &&
                (isArrowLeft || isArrowRight);
            if (verticalNavigation || horizontalNavigation) {
                preventDefaultAndStopPropagation(event);
                const increment = isArrowLeft || isArrowUp ? -1 : 1;
                let newIndex = currentFocusedIndex + increment;
                if (newIndex < 0) {
                    newIndex = tabsetInterface.totalTabs() - 1;
                }
                if (newIndex + 1 > tabsetInterface.totalTabs()) {
                    newIndex = 0;
                }
                tabsetInterface.selectTabIndex(newIndex);
            }
            break;
        }
        default:
            break;
    }
}