/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { handleKeyDownOnInput } from '../keyboard.js';

function createFakeEventWithKey(eventKey) {
    return {
        key: eventKey,
        stopPropagation: jest.fn(),
        preventDefault: jest.fn()
    };
}

function createDropdownInterface({ readOnly, visible }) {
    return {
        getTotalOptions() {
            return 10;
        },
        isInputReadOnly: () => readOnly,
        isDropdownVisible: () => visible,
        openDropdownIfNotEmpty: jest.fn(),
        closeDropdown: jest.fn(),

        selectByIndex: jest.fn(),

        highlightOptionWithIndex: jest.fn(),

        highlightOptionWithText: jest.fn()
    };
}

describe('Keyboard navigation for a base combobox', () => {
    beforeAll(() => {
        window.requestAnimationFrame = window.setTimeout = (action) => {
            action();
        };
    });

    describe('common behaviour for read-only and non-readonly input', () => {
        describe('dropdown is closed', () => {
            const lookupInputWithClosedDropdown = {
                readOnly: false,
                visible: false
            };

            it('should open the dropdown and highlight the first item when event.key is "ArrowDown" ', () => {
                const event = createFakeEventWithKey('ArrowDown');
                const dropdownInterface = createDropdownInterface(
                    lookupInputWithClosedDropdown
                );

                handleKeyDownOnInput({ event, dropdownInterface });

                expect(event.preventDefault).toHaveBeenCalled();
                expect(event.stopPropagation).toHaveBeenCalled();
                expect(
                    dropdownInterface.openDropdownIfNotEmpty
                ).toHaveBeenCalled();
                expect(
                    dropdownInterface.highlightOptionWithIndex
                ).toHaveBeenCalled();

                expect(
                    dropdownInterface.highlightOptionWithIndex.mock.calls[0][0]
                ).toBe(0);
            });
            it('should open the dropdown when event.key is "Enter" ', () => {
                const event = createFakeEventWithKey('Enter');
                const dropdownInterface = createDropdownInterface(
                    lookupInputWithClosedDropdown
                );

                handleKeyDownOnInput({ event, dropdownInterface });

                expect(event.preventDefault).toHaveBeenCalled();
                expect(event.stopPropagation).toHaveBeenCalled();
                expect(
                    dropdownInterface.openDropdownIfNotEmpty
                ).toHaveBeenCalled();
            });
            it('should open the dropdown and highlight the first item when event.key is "Down" (used by IE11/Edge)', () => {
                const event = createFakeEventWithKey('Down');
                const dropdownInterface = createDropdownInterface(
                    lookupInputWithClosedDropdown
                );

                handleKeyDownOnInput({ event, dropdownInterface });

                expect(event.preventDefault).toHaveBeenCalled();
                expect(event.stopPropagation).toHaveBeenCalled();
                expect(
                    dropdownInterface.openDropdownIfNotEmpty
                ).toHaveBeenCalled();
                expect(
                    dropdownInterface.highlightOptionWithIndex
                ).toHaveBeenCalled();

                expect(
                    dropdownInterface.highlightOptionWithIndex.mock.calls[0][0]
                ).toBe(0);
            });
            it('should open the dropdown and highlight the last item when event.key is "ArrowUp" ', () => {
                const event = createFakeEventWithKey('ArrowUp');
                const dropdownInterface = createDropdownInterface(
                    lookupInputWithClosedDropdown
                );

                handleKeyDownOnInput({ event, dropdownInterface });

                expect(event.preventDefault).toHaveBeenCalled();
                expect(event.stopPropagation).toHaveBeenCalled();
                expect(
                    dropdownInterface.openDropdownIfNotEmpty
                ).toHaveBeenCalled();
                expect(
                    dropdownInterface.highlightOptionWithIndex
                ).toHaveBeenCalled();

                expect(
                    dropdownInterface.highlightOptionWithIndex.mock.calls[0][0]
                ).toBe(9);
            });
            it('should open the dropdown and highlight the last item when event.key is "Up" (used by IE11/Edge)', () => {
                const event = createFakeEventWithKey('Up');
                const dropdownInterface = createDropdownInterface(
                    lookupInputWithClosedDropdown
                );

                handleKeyDownOnInput({ event, dropdownInterface });

                expect(event.preventDefault).toHaveBeenCalled();
                expect(event.stopPropagation).toHaveBeenCalled();
                expect(
                    dropdownInterface.openDropdownIfNotEmpty
                ).toHaveBeenCalled();
                expect(
                    dropdownInterface.highlightOptionWithIndex
                ).toHaveBeenCalled();

                expect(
                    dropdownInterface.highlightOptionWithIndex.mock.calls[0][0]
                ).toBe(9);
            });
        });

        describe('dropdown is open', () => {
            const lookupInputWithOpenDropdown = {
                readOnly: false,
                visible: true
            };

            it('should close the dropdown when event.key is "Escape"', () => {
                const event = createFakeEventWithKey('Escape');
                const dropdownInterface = createDropdownInterface(
                    lookupInputWithOpenDropdown
                );

                handleKeyDownOnInput({ event, dropdownInterface });

                expect(event.preventDefault).not.toHaveBeenCalled();
                expect(event.stopPropagation).toHaveBeenCalled();
                expect(dropdownInterface.closeDropdown).toHaveBeenCalled();
            });
            it('should close the dropdown when event.key is "Esc" (used by IE11/Edge)', () => {
                const event = createFakeEventWithKey('Esc');
                const dropdownInterface = createDropdownInterface(
                    lookupInputWithOpenDropdown
                );

                handleKeyDownOnInput({ event, dropdownInterface });

                expect(event.preventDefault).not.toHaveBeenCalled();
                expect(event.stopPropagation).toHaveBeenCalled();
                expect(dropdownInterface.closeDropdown).toHaveBeenCalled();
            });
            it('should close the dropdown and not prevent the default event when event.key is "Tab"', () => {
                const event = createFakeEventWithKey('Tab');
                const dropdownInterface = createDropdownInterface(
                    lookupInputWithOpenDropdown
                );

                handleKeyDownOnInput({ event, dropdownInterface });

                expect(event.preventDefault).not.toHaveBeenCalled();
                expect(event.stopPropagation).toHaveBeenCalled();
                expect(dropdownInterface.closeDropdown).toHaveBeenCalled();
            });
            it('should highlight the second option when event.key is "ArrowDown" and first option is highlighted', () => {
                const event = createFakeEventWithKey('ArrowDown');
                const dropdownInterface = createDropdownInterface(
                    lookupInputWithOpenDropdown
                );

                handleKeyDownOnInput({
                    event,
                    currentIndex: 0,
                    dropdownInterface
                });

                expect(
                    dropdownInterface.highlightOptionWithIndex
                ).toHaveBeenCalled();

                expect(
                    dropdownInterface.highlightOptionWithIndex.mock.calls[0][0]
                ).toBe(1);
            });
            it('should highlight the first option when event.key is "ArrowDown" and last option is highlighted', () => {
                const event = createFakeEventWithKey('ArrowDown');
                const dropdownInterface = createDropdownInterface(
                    lookupInputWithOpenDropdown
                );

                handleKeyDownOnInput({
                    event,
                    currentIndex: 9,
                    dropdownInterface
                });

                expect(
                    dropdownInterface.highlightOptionWithIndex
                ).toHaveBeenCalled();

                expect(
                    dropdownInterface.highlightOptionWithIndex.mock.calls[0][0]
                ).toBe(0);
            });
            it('should highlight the second option when event.key is "ArrowUp" and the third option is highlighted', () => {
                const event = createFakeEventWithKey('ArrowUp');
                const dropdownInterface = createDropdownInterface(
                    lookupInputWithOpenDropdown
                );

                handleKeyDownOnInput({
                    event,
                    currentIndex: 2,
                    dropdownInterface
                });

                expect(
                    dropdownInterface.highlightOptionWithIndex
                ).toHaveBeenCalled();

                expect(
                    dropdownInterface.highlightOptionWithIndex.mock.calls[0][0]
                ).toBe(1);
            });
            it('should highlight the last option when event.key is "ArrowUp" and first option is highlighted', () => {
                const event = createFakeEventWithKey('ArrowUp');
                const dropdownInterface = createDropdownInterface(
                    lookupInputWithOpenDropdown
                );

                handleKeyDownOnInput({
                    event,
                    currentIndex: 0,
                    dropdownInterface
                });

                expect(
                    dropdownInterface.highlightOptionWithIndex
                ).toHaveBeenCalled();

                expect(
                    dropdownInterface.highlightOptionWithIndex.mock.calls[0][0]
                ).toBe(9);
            });
            it('should select the option when event.key is "Enter" and an option is highlighted', () => {
                const event = createFakeEventWithKey('Enter');
                const dropdownInterface = createDropdownInterface(
                    lookupInputWithOpenDropdown
                );

                handleKeyDownOnInput({
                    event,
                    currentIndex: 3,
                    dropdownInterface
                });

                expect(dropdownInterface.selectByIndex).toHaveBeenCalled();

                expect(dropdownInterface.selectByIndex.mock.calls[0][0]).toBe(
                    3
                );
            });
        });
    });

    describe('input is read only', () => {
        const readOnlyInputWithOpenDropdown = { readOnly: true, visible: true };

        it('should highlight the first option when event.key is "Home" and the third option is highlighted', () => {
            const event = createFakeEventWithKey('Home');
            const dropdownInterface = createDropdownInterface(
                readOnlyInputWithOpenDropdown
            );

            handleKeyDownOnInput({ event, currentIndex: 2, dropdownInterface });

            expect(
                dropdownInterface.highlightOptionWithIndex
            ).toHaveBeenCalled();

            expect(
                dropdownInterface.highlightOptionWithIndex.mock.calls[0][0]
            ).toBe(0);
        });
        it('should highlight the last option when event.key is "End" and the third option is highlighted', () => {
            const event = createFakeEventWithKey('End');
            const dropdownInterface = createDropdownInterface(
                readOnlyInputWithOpenDropdown
            );

            handleKeyDownOnInput({ event, currentIndex: 2, dropdownInterface });

            expect(
                dropdownInterface.highlightOptionWithIndex
            ).toHaveBeenCalled();

            expect(
                dropdownInterface.highlightOptionWithIndex.mock.calls[0][0]
            ).toBe(9);
        });
        it('should call for highlighting option with the typed text, and prevent the default event when event.key is a character', () => {
            const event = createFakeEventWithKey('a');
            const dropdownInterface = createDropdownInterface(
                readOnlyInputWithOpenDropdown
            );

            handleKeyDownOnInput({ event, currentIndex: 2, dropdownInterface });

            expect(event.preventDefault).toHaveBeenCalled();
            expect(
                dropdownInterface.highlightOptionWithText
            ).toHaveBeenCalled();

            expect(
                dropdownInterface.highlightOptionWithText.mock.calls[0][0]
            ).toBe(2);

            expect(
                dropdownInterface.highlightOptionWithText.mock.calls[0][1]
            ).toBe('a');
        });
    });

    describe('input can be typed into (lookup)', () => {
        const lookupInputWithOpenDropdown = { readOnly: false, visible: true };

        it('should not change highlight, and not prevent the default event when event.key is "Home"', () => {
            const event = createFakeEventWithKey('Home');
            const dropdownInterface = createDropdownInterface(
                lookupInputWithOpenDropdown
            );

            handleKeyDownOnInput({ event, currentIndex: 0, dropdownInterface });

            expect(event.preventDefault).not.toHaveBeenCalled();
            expect(
                dropdownInterface.highlightOptionWithIndex
            ).not.toHaveBeenCalled();
        });
        it('should not change highlight, and not prevent the default event when event.key is "End"', () => {
            const event = createFakeEventWithKey('End');
            const dropdownInterface = createDropdownInterface(
                lookupInputWithOpenDropdown
            );

            handleKeyDownOnInput({ event, currentIndex: 0, dropdownInterface });

            expect(event.preventDefault).not.toHaveBeenCalled();
            expect(
                dropdownInterface.highlightOptionWithIndex
            ).not.toHaveBeenCalled();
        });
        it('should not change highlight, and not prevent the default event when event.key is a character', () => {
            const event = createFakeEventWithKey('a');
            const dropdownInterface = createDropdownInterface(
                lookupInputWithOpenDropdown
            );

            handleKeyDownOnInput({ event, currentIndex: 0, dropdownInterface });

            expect(event.preventDefault).not.toHaveBeenCalled();
            expect(
                dropdownInterface.highlightOptionWithText
            ).not.toHaveBeenCalled();
        });
    });
});
