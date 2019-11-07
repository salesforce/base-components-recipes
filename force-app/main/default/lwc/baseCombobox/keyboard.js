/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { runActionOnBufferedTypedCharacters } from 'c/utilsPrivate';

function preventDefaultAndStopPropagation(event) {
    event.preventDefault();
    event.stopPropagation();
}

function handleEnterKey({ event, currentIndex, dropdownInterface }) {
    preventDefaultAndStopPropagation(event);
    if (dropdownInterface.isDropdownVisible() && currentIndex >= 0) {
        dropdownInterface.selectByIndex(currentIndex);
    } else {
        dropdownInterface.openDropdownIfNotEmpty();
    }
}

function handlePageUpOrDownKey({ event, currentIndex, dropdownInterface }) {
    preventDefaultAndStopPropagation(event);

    if (!dropdownInterface.isDropdownVisible()) {
        dropdownInterface.openDropdownIfNotEmpty();
    }

    const pageUpDownOptionSkipCount = 10;

    if (dropdownInterface.getTotalOptions() > 0) {
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        requestAnimationFrame(() => {
            let highlightIndex = 0;
            if (event.key === 'PageUp') {
                highlightIndex = Math.max(
                    currentIndex - pageUpDownOptionSkipCount,
                    0
                );
            } else {
                highlightIndex = Math.min(
                    currentIndex + pageUpDownOptionSkipCount,
                    dropdownInterface.getTotalOptions() - 1
                );
            }
            dropdownInterface.highlightOptionWithIndex(highlightIndex);
        });
    }
}

function handleHomeOrEndKey({ event, dropdownInterface }) {
    if (!dropdownInterface.isInputReadOnly()) {
        return;
    }

    preventDefaultAndStopPropagation(event);

    if (!dropdownInterface.isDropdownVisible()) {
        dropdownInterface.openDropdownIfNotEmpty();
    }
    if (dropdownInterface.getTotalOptions() > 0) {
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        requestAnimationFrame(() => {
            const highlightIndex =
                event.key === 'Home'
                    ? 0
                    : dropdownInterface.getTotalOptions() - 1;
            dropdownInterface.highlightOptionWithIndex(highlightIndex);
        });
    }
}

function handleUpOrDownKey({ event, currentIndex, dropdownInterface }) {
    preventDefaultAndStopPropagation(event);

    if (!dropdownInterface.isDropdownVisible()) {
        dropdownInterface.openDropdownIfNotEmpty();
    }

    const isUpKey = event.key === 'Up' || event.key === 'ArrowUp';
    let nextIndex;
    if (currentIndex >= 0) {
        nextIndex = isUpKey ? currentIndex - 1 : currentIndex + 1;
        if (nextIndex >= dropdownInterface.getTotalOptions()) {
            nextIndex = 0;
        } else if (nextIndex < 0) {
            nextIndex = dropdownInterface.getTotalOptions() - 1;
        }
    } else {
        nextIndex = isUpKey ? dropdownInterface.getTotalOptions() - 1 : 0;
    }

    if (dropdownInterface.getTotalOptions() > 0) {
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        requestAnimationFrame(() => {
            dropdownInterface.highlightOptionWithIndex(nextIndex);
        });
    }
}

function handleEscapeOrTabKey({ event, dropdownInterface }) {
    if (dropdownInterface.isDropdownVisible()) {
        event.stopPropagation();
        dropdownInterface.closeDropdown();
    }
}

function handleTypedCharacters({ event, currentIndex, dropdownInterface }) {
    if (event.key && event.key.length > 1) {
        return;
    }
    if (!dropdownInterface.isDropdownVisible()) {
        dropdownInterface.openDropdownIfNotEmpty();
    }
    if (dropdownInterface.isInputReadOnly()) {
        event.preventDefault();

        // eslint-disable-next-line @lwc/lwc/no-async-operation
        requestAnimationFrame(() =>
            runActionOnBufferedTypedCharacters(
                event,
                dropdownInterface.highlightOptionWithText.bind(
                    this,
                    currentIndex || 0
                )
            )
        );
    }
}

const eventKeyToHandlerMap = {
    Enter: handleEnterKey,

    PageUp: handlePageUpOrDownKey,
    PageDown: handlePageUpOrDownKey,

    Home: handleHomeOrEndKey,
    End: handleHomeOrEndKey,

    Down: handleUpOrDownKey,
    Up: handleUpOrDownKey,
    ArrowUp: handleUpOrDownKey,
    ArrowDown: handleUpOrDownKey,

    Esc: handleEscapeOrTabKey,
    Escape: handleEscapeOrTabKey,
    Tab: handleEscapeOrTabKey
};

export function handleKeyDownOnInput({
    event,
    currentIndex,
    dropdownInterface
}) {
    const parameters = { event, currentIndex, dropdownInterface };

    if (eventKeyToHandlerMap[event.key]) {
        eventKeyToHandlerMap[event.key](parameters);
    } else {
        handleTypedCharacters(parameters);
    }
}