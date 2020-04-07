/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { keyCodes, runActionOnBufferedTypedCharacters } from 'c/utilsPrivate';

function preventDefaultAndStopPropagation(event) {
    event.preventDefault();
    event.stopPropagation();
}

function moveFocusToTypedCharacters(event, menuInterface) {
    runActionOnBufferedTypedCharacters(
        event,
        menuInterface.focusMenuItemWithText
    );
}

export function handleKeyDownOnMenuItem(event, menuItemIndex, menuInterface) {
    switch (event.keyCode) {
        case keyCodes.down:
        case keyCodes.up: {
            preventDefaultAndStopPropagation(event);
            let nextIndex =
                event.keyCode === keyCodes.up
                    ? menuItemIndex - 1
                    : menuItemIndex + 1;
            const totalMenuItems = menuInterface.getTotalMenuItems();

            if (nextIndex >= totalMenuItems) {
                nextIndex = 0;
            } else if (nextIndex < 0) {
                nextIndex = totalMenuItems - 1;
            }
            menuInterface.focusOnIndex(nextIndex);
            break;
        }

        case keyCodes.home: {
            preventDefaultAndStopPropagation(event);
            menuInterface.focusOnIndex(0);
            break;
        }
        case keyCodes.end: {
            preventDefaultAndStopPropagation(event);
            menuInterface.focusOnIndex(menuInterface.getTotalMenuItems() - 1);
            break;
        }

        case keyCodes.escape:
        case keyCodes.tab: {
            if (menuInterface.isMenuVisible()) {
                if (event.keyCode === keyCodes.escape) {
                    preventDefaultAndStopPropagation(event);
                }

                menuInterface.toggleMenuVisibility();
            }
            menuInterface.returnFocus();
            break;
        }
        default:
            moveFocusToTypedCharacters(event, menuInterface);
    }
}

export function handleKeyDownOnMenuTrigger(event, menuInterface) {
    const isVisible = menuInterface.isMenuVisible();
    switch (event.keyCode) {
        case keyCodes.enter:
        case keyCodes.space:
            preventDefaultAndStopPropagation(event);
            menuInterface.toggleMenuVisibility();
            break;
        case keyCodes.down:
        case keyCodes.up:
            preventDefaultAndStopPropagation(event);
            if (!isVisible) {
                let focusNextIndex = 0;

                if (event.keyCode === keyCodes.up) {
                    focusNextIndex = 'LAST';
                }
                menuInterface.setNextFocusIndex(focusNextIndex);

                menuInterface.toggleMenuVisibility();
            }
            break;

        case keyCodes.home:
            preventDefaultAndStopPropagation(event);
            menuInterface.focusOnIndex(0);
            break;
        case keyCodes.end:
            preventDefaultAndStopPropagation(event);
            menuInterface.focusOnIndex(menuInterface.getTotalMenuItems() - 1);
            break;

        case keyCodes.escape:
        case keyCodes.tab:
            if (isVisible) {
                preventDefaultAndStopPropagation(event);
                menuInterface.toggleMenuVisibility();
            }
            break;
        default:
            if (!isVisible && menuInterface.showDropdownWhenTypingCharacters) {
                preventDefaultAndStopPropagation(event);
                menuInterface.toggleMenuVisibility();
            } else if (!isVisible) {
                break;
            }
            // eslint-disable-next-line @lwc/lwc/no-async-operation
            window.requestAnimationFrame(() => {
                moveFocusToTypedCharacters(event, menuInterface);
            });
    }
}