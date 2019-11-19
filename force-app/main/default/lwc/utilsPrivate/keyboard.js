/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

export const keyCodes = {
    tab: 9,
    backspace: 8,
    enter: 13,
    escape: 27,
    space: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    delete: 46,
    shift: 16
};

export function normalizeKeyValue(value) {
    switch (value) {
        case 'Spacebar':
            return ' ';
        case 'Esc':
            return 'Escape';
        case 'Del':
            return 'Delete';
        case 'Left':
            return 'ArrowLeft';
        case 'Right':
            return 'ArrowRight';
        case 'Down':
            return 'ArrowDown';
        case 'Up':
            return 'ArrowUp';
        default:
            return value;
    }
}

const buffer = {};

export function isShiftMetaOrControlKey(event) {
    return event.shiftKey || event.metaKey || event.ctrlKey;
}

export function runActionOnBufferedTypedCharacters(event, action) {
    const letter = event.key;

    if (letter.length > 1) {
        return;
    }

    if (buffer._clearBufferId) {
        clearTimeout(buffer._clearBufferId);
    }

    buffer._keyBuffer = buffer._keyBuffer || [];
    buffer._keyBuffer.push(letter);

    const matchText = buffer._keyBuffer.join('').toLowerCase();

    action(matchText);

    // eslint-disable-next-line @lwc/lwc/no-async-operation
    buffer._clearBufferId = setTimeout(() => {
        buffer._keyBuffer = [];
    }, 700);
}
