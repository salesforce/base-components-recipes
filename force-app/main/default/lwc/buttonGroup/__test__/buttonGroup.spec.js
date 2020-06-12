/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import { shadowQuerySelector } from 'lightning/testUtils';
import * as buttonGroupUtils from 'lightning/testUtilsButtonGroup';
import Element from 'lightningtest/buttonGroupTest';

const createButtonGroup = (props = {}) => {
    const element = createElement('lightningtest-button-group-test', {
        is: Element
    });

    Object.assign(element, props);
    document.body.appendChild(element);
    return element;
};

describe('c-button-group', () => {
    // eslint-disable-next-line jest/no-disabled-tests
    it.skip('should have the correct number of child button elements', () => {
        const numButtons = 4;
        const numButtonStatefuls = 1;
        const numButtonIcons = 2;
        const numButtonIconStatefuls = 2;
        const numButtonMenus = 1;
        const totalNumChildren =
            numButtons +
            numButtonStatefuls +
            numButtonIcons +
            numButtonIconStatefuls +
            numButtonMenus;

        const element = createButtonGroup({
            buttons: buttonGroupUtils.generateRandomButtonsArray(numButtons),
            buttonStatefuls: buttonGroupUtils.generateRandomButtonStatefulsArray(
                numButtonStatefuls
            ),

            buttonIcons: buttonGroupUtils.generateRandomButtonIconsArray(
                numButtonIcons
            ),

            buttonIconStatefuls: buttonGroupUtils.generateRandomButtonIconStatefulsArray(
                numButtonIconStatefuls
            ),

            buttonMenus: buttonGroupUtils.generateRandomButtonMenusArray(
                numButtonMenus
            )
        });

        return Promise.resolve().then(() => {
            const children = element.querySelector('slot').children;

            expect(children).toHaveLength(totalNumChildren);
        });
    });

    // eslint-disable-next-line jest/no-disabled-tests
    it.skip('each child button element should have the correct position/order SLDS class when initially rendered', () => {
        const numButtons = 4;
        const numButtonStatefuls = 1;
        const numButtonIcons = 2;
        const numButtonIconStatefuls = 2;
        const numButtonMenus = 1;
        const totalNumChildren =
            numButtons +
            numButtonStatefuls +
            numButtonIcons +
            numButtonIconStatefuls +
            numButtonMenus;

        const element = createButtonGroup({
            buttons: buttonGroupUtils.generateRandomButtonsArray(numButtons),
            buttonStatefuls: buttonGroupUtils.generateRandomButtonStatefulsArray(
                numButtonStatefuls
            ),

            buttonIcons: buttonGroupUtils.generateRandomButtonIconsArray(
                numButtonIcons
            ),

            buttonIconStatefuls: buttonGroupUtils.generateRandomButtonIconStatefulsArray(
                numButtonIconStatefuls
            ),

            buttonMenus: buttonGroupUtils.generateRandomButtonMenusArray(
                numButtonMenus
            )
        });

        return Promise.resolve().then(() => {
            const children = element.querySelector('slot').children;

            expect(children).toHaveLength(totalNumChildren);

            return Promise.resolve().then(() => {
                const hasFirstClass = shadowQuerySelector(
                    children[0],
                    '.slds-button'
                ).classList.contains('slds-button_first');
                expect(hasFirstClass).toBe(true);

                for (let i = 1; i < children.length - 2; i++) {
                    const hasMiddleClass = shadowQuerySelector(
                        children[i],
                        '.slds-button'
                    ).classList.contains('slds-button_middle');
                    expect(hasMiddleClass).toBe(true);
                }

                const hasLastClass = shadowQuerySelector(
                    children[children.length - 1],
                    '.slds-button'
                ).classList.contains('slds-button_last');
                expect(hasLastClass).toBe(true);
            });
        });
    });

    // eslint-disable-next-line jest/no-disabled-tests
    it.skip('each child button element should have the correct position/order SLDS class when a button is appended', () => {
        const numButtons = 4;
        const numButtonStatefuls = 1;
        const numButtonIcons = 2;
        const numButtonIconStatefuls = 2;
        const numButtonMenus = 1;
        const totalNumChildren =
            numButtons +
            numButtonStatefuls +
            numButtonIcons +
            numButtonIconStatefuls +
            numButtonMenus;

        const buttons = buttonGroupUtils.generateRandomButtonsArray(numButtons);
        const buttonStatefuls = buttonGroupUtils.generateRandomButtonStatefulsArray(
            numButtonStatefuls
        );

        const buttonIcons = buttonGroupUtils.generateRandomButtonIconsArray(
            numButtonIcons
        );

        const buttonIconStatefuls = buttonGroupUtils.generateRandomButtonIconStatefulsArray(
            numButtonIconStatefuls
        );

        const buttonMenus = buttonGroupUtils.generateRandomButtonMenusArray(
            numButtonMenus
        );

        const element = createButtonGroup({
            buttons,
            buttonStatefuls,
            buttonIcons,
            buttonIconStatefuls,
            buttonMenus
        });

        return Promise.resolve().then(() => {
            buttons.push(buttonGroupUtils.generateRandomButtonsArray(1)[0]);
            element.buttons = buttons;

            return Promise.resolve().then(() => {
                return Promise.resolve().then(() => {
                    const children = element.querySelector('slot').children;
                    expect(children).toHaveLength(totalNumChildren + 1);

                    const hasFirstClass = shadowQuerySelector(
                        children[0],
                        '.slds-button'
                    ).classList.contains('slds-button_first');
                    expect(hasFirstClass).toBe(true);

                    for (let i = 1; i < children.length - 2; i++) {
                        const hasMiddleClass = shadowQuerySelector(
                            children[i],
                            '.slds-button'
                        ).classList.contains('slds-button_middle');
                        expect(hasMiddleClass).toBe(true);
                    }

                    const hasLastClass = shadowQuerySelector(
                        children[children.length - 1],
                        '.slds-button'
                    ).classList.contains('slds-button_last');
                    expect(hasLastClass).toBe(true);
                });
            });
        });
    });

    // eslint-disable-next-line jest/no-disabled-tests
    it.skip('each child button element should have the correct position/order SLDS class when a button is prepended', () => {
        const numButtons = 5;
        const numButtonStatefuls = 1;
        const numButtonIcons = 2;
        const numButtonIconStatefuls = 2;
        const numButtonMenus = 1;
        const totalNumChildren =
            numButtons +
            numButtonStatefuls +
            numButtonIcons +
            numButtonIconStatefuls +
            numButtonMenus;

        const buttons = buttonGroupUtils.generateRandomButtonsArray(numButtons);
        const buttonStatefuls = buttonGroupUtils.generateRandomButtonStatefulsArray(
            numButtonStatefuls
        );

        const buttonIcons = buttonGroupUtils.generateRandomButtonIconsArray(
            numButtonIcons
        );

        const buttonIconStatefuls = buttonGroupUtils.generateRandomButtonIconStatefulsArray(
            numButtonIconStatefuls
        );

        const buttonMenus = buttonGroupUtils.generateRandomButtonMenusArray(
            numButtonMenus
        );

        const element = createButtonGroup({
            buttons,
            buttonStatefuls,
            buttonIcons,
            buttonIconStatefuls,
            buttonMenus
        });

        return Promise.resolve().then(() => {
            buttons.unshift(buttonGroupUtils.generateRandomButtonsArray(1)[0]);
            element.buttons = buttons;

            return Promise.resolve().then(() => {
                return Promise.resolve().then(() => {
                    const children = element.querySelector('slot').children;

                    expect(children).toHaveLength(totalNumChildren + 1);

                    const hasFirstClass = shadowQuerySelector(
                        children[0],
                        '.slds-button'
                    ).classList.contains('slds-button_first');
                    expect(hasFirstClass).toBe(true);

                    for (let i = 1; i < children.length - 2; i++) {
                        const hasMiddleClass = shadowQuerySelector(
                            children[i],
                            '.slds-button'
                        ).classList.contains('slds-button_middle');
                        expect(hasMiddleClass).toBe(true);
                    }

                    const hasLastClass = shadowQuerySelector(
                        children[children.length - 1],
                        '.slds-button'
                    ).classList.contains('slds-button_last');
                    expect(hasLastClass).toBe(true);
                });
            });
        });
    });

    // eslint-disable-next-line jest/no-disabled-tests
    it.skip('each child button element should have the correct position/order SLDS class when a button is inserted', () => {
        const numButtons = 4;
        const numButtonStatefuls = 1;
        const numButtonIcons = 2;
        const numButtonIconStatefuls = 2;
        const numButtonMenus = 1;
        const totalNumChildren =
            numButtons +
            numButtonStatefuls +
            numButtonIcons +
            numButtonIconStatefuls +
            numButtonMenus;

        const buttons = buttonGroupUtils.generateRandomButtonsArray(numButtons);
        const buttonStatefuls = buttonGroupUtils.generateRandomButtonStatefulsArray(
            numButtonStatefuls
        );

        const buttonIcons = buttonGroupUtils.generateRandomButtonIconsArray(
            numButtonIcons
        );

        const buttonIconStatefuls = buttonGroupUtils.generateRandomButtonIconStatefulsArray(
            numButtonIconStatefuls
        );

        const buttonMenus = buttonGroupUtils.generateRandomButtonMenusArray(
            numButtonMenus
        );

        const element = createButtonGroup({
            buttons,
            buttonStatefuls,
            buttonIcons,
            buttonIconStatefuls,
            buttonMenus
        });

        return Promise.resolve().then(() => {
            const centerIndex = Math.round((buttons.length - 1) / 2);
            buttons.splice(
                centerIndex,
                0,
                buttonGroupUtils.generateRandomButtonsArray(1)[0]
            );

            element.buttons = buttons;

            return Promise.resolve().then(() => {
                return Promise.resolve().then(() => {
                    const children = element.querySelector('slot').children;

                    expect(children).toHaveLength(totalNumChildren + 1);

                    const hasFirstClass = shadowQuerySelector(
                        children[0],
                        '.slds-button'
                    ).classList.contains('slds-button_first');
                    expect(hasFirstClass).toBe(true);

                    for (let i = 1; i < children.length - 2; i++) {
                        const hasMiddleClass = shadowQuerySelector(
                            children[i],
                            '.slds-button'
                        ).classList.contains('slds-button_middle');
                        expect(hasMiddleClass).toBe(true);
                    }

                    const hasLastClass = shadowQuerySelector(
                        children[children.length - 1],
                        '.slds-button'
                    ).classList.contains('slds-button_last');
                    expect(hasLastClass).toBe(true);
                });
            });
        });
    });

    // eslint-disable-next-line jest/no-disabled-tests
    it.skip('when button list is reduced to only one button element the button should have no position/order SLDS class', () => {
        const numButtons = 2;
        const buttons = buttonGroupUtils.generateRandomButtonsArray(numButtons);
        const element = createButtonGroup({
            buttons
        });

        return Promise.resolve().then(() => {
            buttons.splice(1);
            element.buttons = buttons;

            return Promise.resolve().then(() => {
                return Promise.resolve().then(() => {
                    const children = element.querySelector('slot').children;

                    expect(children).toHaveLength(1);

                    const hasFirstClass = shadowQuerySelector(
                        children[0],
                        '.slds-button'
                    ).classList.contains('slds-button_first');
                    expect(hasFirstClass).toBe(false);
                });
            });
        });
    });

    // eslint-disable-next-line jest/no-disabled-tests
    it.skip('when only one button element is present it should have no position/order SLDS class', () => {
        const numButtons = 1;
        const buttons = buttonGroupUtils.generateRandomButtonsArray(numButtons);
        const element = createButtonGroup({
            buttons
        });

        return Promise.resolve().then(() => {
            const children = element.querySelector('slot').children;

            expect(children).toHaveLength(numButtons);

            const hasFirstClass = shadowQuerySelector(
                children[0],
                '.slds-button'
            ).classList.contains('slds-button_first');
            expect(hasFirstClass).toBe(false);
        });
    });
});
