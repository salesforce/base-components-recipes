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

function setFocusOnNextOption(option, moveUp, intf) {
    const index = parseInt(option.getAttribute('data-index'), 10);
    const i = index + (moveUp ? -1 : 1);
    const options = intf.getElementsOfList(option.getAttribute('data-type'));
    const next = options[i];
    if (next) {
        next.focus();
    }
}

function selectNextOption(option, moveUp, intf) {
    const selected = option.getAttribute('aria-selected') === 'true';
    const index = parseInt(option.getAttribute('data-index'), 10);
    const i = index + (selected ? (moveUp ? -1 : 1) : 0);
    const options = intf.getElementsOfList(option.getAttribute('data-type'));
    const next = options[i];
    if (next) {
        intf.updateSelectedOptions(next, true, false);
    }
}

function selectNextOptionFromShift(option, moveUp, isMultiple, intf) {
    const curr = parseInt(option.getAttribute('data-index'), 10);
    if (intf.getShiftIndex() < 0) {
        intf.setShiftIndex(curr);
        intf.setLastShift(moveUp);
    }
    const next = curr + (intf.getLastShift() !== moveUp ? 0 : moveUp ? -1 : 1);
    const pos = next < intf.getShiftIndex();
    const shiftAdd = pos === moveUp || intf.getShiftIndex() === next;
    const options = intf.getElementsOfList(option.getAttribute('data-type'));
    const nextOption = options[next];
    if (nextOption) {
        intf.updateSelectedOptions(nextOption, shiftAdd, true);
        intf.setLastShift(moveUp);
    }
}

export function handleKeyDownOnOption(event, keyboardInterface) {
    if (event.metaKey || event.ctrlKey) {
        keyboardInterface.setShiftIndex(-1);
        const keyCodesA = 'A'.charCodeAt(0);
        const selected = event.target.getAttribute('aria-selected') === 'true';
        switch (event.keyCode) {
            case keyCodes.up:
                preventDefaultAndStopPropagation(event);
                setFocusOnNextOption(event.target, true, keyboardInterface);
                break;
            case keyCodes.down:
                preventDefaultAndStopPropagation(event);
                setFocusOnNextOption(event.target, false, keyboardInterface);
                break;
            case keyCodes.right:
                preventDefaultAndStopPropagation(event);
                keyboardInterface.moveOptionsBetweenLists(true);
                break;
            case keyCodes.left:
                preventDefaultAndStopPropagation(event);
                keyboardInterface.moveOptionsBetweenLists(false);
                break;
            case keyCodes.space:
                preventDefaultAndStopPropagation(event);
                keyboardInterface.updateSelectedOptions(
                    event.target,
                    !selected,
                    true
                );

                break;
            case keyCodesA:
                preventDefaultAndStopPropagation(event);
                keyboardInterface.selectAllOptions(event.target);
                break;
            default:
        }
    } else if (event.shiftKey) {
        switch (event.keyCode) {
            case keyCodes.up:
                preventDefaultAndStopPropagation(event);
                selectNextOptionFromShift(
                    event.target,
                    true,
                    true,
                    keyboardInterface
                );

                break;
            case keyCodes.down:
                preventDefaultAndStopPropagation(event);
                selectNextOptionFromShift(
                    event.target,
                    false,
                    true,
                    keyboardInterface
                );

                break;
            default:
        }
    } else {
        keyboardInterface.setShiftIndex(-1);
        switch (event.keyCode) {
            case keyCodes.up:
                preventDefaultAndStopPropagation(event);
                selectNextOption(event.target, true, keyboardInterface);
                break;
            case keyCodes.down:
                preventDefaultAndStopPropagation(event);
                selectNextOption(event.target, false, keyboardInterface);
                break;
            default:
        }
    }
}