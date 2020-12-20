/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import {
    shadowQuerySelector,
    shadowQuerySelectorAll
} from 'lightning/testUtils';
import Element from 'c/buttonMenu';
import ButtonMenuWithItems from 'lightningtest/buttonMenuTest';

const createButtonMenu = () => {
    const element = createElement('c-button-menu', { is: Element });
    document.body.appendChild(element);
    return element;
};

describe('c-button-menu', () => {
    it('should render by default (variant=border, size=medium, icon=utility:down, menuAlignment=left)', () => {
        const buttonMenu = createButtonMenu();

        return Promise.resolve().then(() => {
            expect(buttonMenu).toMatchSnapshot();
        });
    });

    it('should show dropdown if button is clicked', () => {
        const buttonMenu = createButtonMenu();
        shadowQuerySelector(buttonMenu, 'button').click();
        return Promise.resolve().then(() => {
            expect(buttonMenu).toMatchSnapshot();
        });
    });
});

describe('c-button-menu-label', () => {
    it('should default with label defined', () => {
        const buttonMenu = createButtonMenu();
        buttonMenu.label = 'label';

        return Promise.resolve().then(() => {
            expect(buttonMenu).toMatchSnapshot();
        });
    });
});

describe('c-button-menu-class-attr', () => {
    it('should add slds-open when menu is open', () => {
        const buttonMenu = createButtonMenu();
        shadowQuerySelector(buttonMenu, 'button').click();
        expect(buttonMenu.classList.contains('slds-is-open')).toBe(true);
    });

    it('should remove slds-open when menu is closed', () => {
        const buttonMenu = createButtonMenu();
        shadowQuerySelector(buttonMenu, 'button').click();
        shadowQuerySelector(buttonMenu, 'button').click();
        expect(buttonMenu.classList.contains('slds-is-open')).toBe(false);
    });
});

describe('c-button-menu-onclose', () => {
    it('should trigger close event on close of menu', () => {
        const buttonMenu = createButtonMenu();
        const closeHandler = jest.fn();
        buttonMenu.addEventListener('close', closeHandler);
        shadowQuerySelector(buttonMenu, 'button').click();
        shadowQuerySelector(buttonMenu, 'button').click();
        expect(closeHandler).toHaveBeenCalled();
    });
});

describe('c-button-menu-onselect', () => {
    it('should fire onselect event when click on a menu item', () => {
        const buttonMenu = createElement('snapshot-button-menu-test', {
            is: ButtonMenuWithItems
        });

        document.body.appendChild(buttonMenu);

        const callback = jest.fn();
        buttonMenu.selectAction = callback;

        return Promise.resolve().then(() => {
            shadowQuerySelector(
                shadowQuerySelector(buttonMenu, '.slds-dropdown-trigger'),
                'button'
            ).click();

            return Promise.resolve().then(() => {
                shadowQuerySelector(
                    shadowQuerySelectorAll(buttonMenu, 'c-menu-item')[2],
                    'a'
                ).click();
                expect(callback.mock.calls).toHaveLength(1);
                const selectedMenu =
                    callback.mock.calls[0][0].selectEvent.detail.value;
                expect(selectedMenu).toBe('menu3-value');
            });
        });
    });
});

describe('c-button-menu-variant-attr', () => {
    [
        'bare',
        'container',
        'border',
        'border-filled',
        'bare-inverse',
        'border-inverse'
    ].forEach((variant) =>
        it(`button class attribute should reflect variant=${variant}`, () => {
            const buttonMenu = createButtonMenu();
            buttonMenu.variant = variant;

            return Promise.resolve().then(() => {
                const classes = shadowQuerySelector(buttonMenu, 'button')
                    .className;
                expect(classes).toMatchSnapshot();
            });
        })
    );
});

describe('c-button-menu-icon-size-attr', () => {
    ['xx-small', 'x-small', 'small', 'medium', 'large'].forEach((iconSize) =>
        it(`button class attribute should reflect size=${iconSize}`, () => {
            const buttonMenu = createButtonMenu();
            buttonMenu.iconSize = iconSize;

            return Promise.resolve().then(() => {
                const classes = shadowQuerySelector(buttonMenu, 'button')
                    .className;
                expect(classes).toMatchSnapshot();
            });
        })
    );

    ['bare', 'bare-inverse'].forEach((variant) => {
        ['xx-small', 'x-small', 'small', 'medium', 'large'].forEach(
            (iconSize) =>
                it(`Button size = ${iconSize} should be medium if variant=${variant}`, () => {
                    const buttonMenu = createButtonMenu();
                    buttonMenu.variant = variant;
                    buttonMenu.iconSize = iconSize;

                    const classes = shadowQuerySelector(buttonMenu, 'button')
                        .className;
                    expect(classes).toMatchSnapshot();
                })
        );
    });
});

describe('c-button-menu-icon-name-attr', () => {
    const getIconCount = (buttonMenu) => {
        return shadowQuerySelectorAll(buttonMenu, 'c-primitive-icon').length;
    };

    it('should only show one icon when icon-name is utility:down', () => {
        const buttonMenu = createButtonMenu();
        buttonMenu.iconName = 'utility:down';

        return Promise.resolve().then(() => {
            expect(getIconCount(buttonMenu)).toBe(1);
        });
    });

    it('should only show one icon when icon-name is utility:chevrondown', () => {
        const buttonMenu = createButtonMenu();
        buttonMenu.iconName = 'utility:down';

        return Promise.resolve().then(() => {
            expect(getIconCount(buttonMenu)).toBe(1);
        });
    });

    it('should show two icons when icon-name is not :down', () => {
        const buttonMenu = createButtonMenu();
        buttonMenu.iconName = 'utility:settings';

        return Promise.resolve().then(() => {
            expect(getIconCount(buttonMenu)).toBe(2);
            expect(buttonMenu).toMatchSnapshot();
        });
    });
});

describe('c-button-menu-menu-alignment-attr', () => {
    const menuContainerSelector = '.slds-dropdown';

    [
        { value: 'left', class: 'left' },
        { value: 'center', class: 'center' },
        { value: 'right', class: 'right' },
        { value: 'bottom-left', class: 'bottom-left' },
        { value: 'bottom-center', class: 'bottom' },
        { value: 'bottom-right', class: 'bottom-right' }
    ].forEach((menuAlignment) => {
        it(`should have correct classes when menu-alignment=${menuAlignment.value}`, () => {
            const buttonMenu = createButtonMenu();
            buttonMenu.menuAlignment = menuAlignment.value;
            buttonMenu.isLoading = true;

            shadowQuerySelector(buttonMenu, 'button').click();

            return Promise.resolve().then(() => {
                const dropdown = shadowQuerySelector(
                    buttonMenu,
                    menuContainerSelector
                );

                expect(
                    dropdown.classList.contains(
                        `slds-dropdown_${menuAlignment.class}`
                    )
                ).toBe(true);
            });
        });
    });

    it(`should render when value is 'undefined'`, () => {
        const buttonMenu = createButtonMenu();
        buttonMenu.menuAlignment = undefined;

        shadowQuerySelector(buttonMenu, 'button').click();
        expect(buttonMenu.classList.contains('slds-is-open')).toBe(true);
    });

    it(`should render when value is invalid`, () => {
        const buttonMenu = createButtonMenu();
        buttonMenu.menuAlignment = 'pickles';

        shadowQuerySelector(buttonMenu, 'button').click();
        expect(buttonMenu.classList.contains('slds-is-open')).toBe(true);
    });
});

describe('c-button-menu-disabled-attr', () => {
    it('should show disabled', () => {
        const buttonMenu = createButtonMenu();
        buttonMenu.disabled = true;

        return Promise.resolve().then(() => {
            expect(
                shadowQuerySelector(buttonMenu, 'button').hasAttribute(
                    'disabled'
                )
            ).toBe(true);
        });
    });
});

describe('c-button-alternative-text-attr', () => {
    it('should render custom alternative text if value is provided', () => {
        const buttonMenu = createButtonMenu();
        buttonMenu.alternativeText = 'alternative text';

        return Promise.resolve().then(() => {
            const alternativeTextEl = shadowQuerySelector(
                buttonMenu,
                'button .slds-assistive-text'
            );

            expect(alternativeTextEl.textContent).toBe('alternative text');
        });
    });

    it('should render alternative text even if value is omitted', () => {
        const buttonMenu = createButtonMenu();

        return Promise.resolve().then(() => {
            const alternativeTextEl = shadowQuerySelector(
                buttonMenu,
                'button .slds-assistive-text'
            );

            expect(alternativeTextEl.textContent).toBeTruthy();
        });
    });
});

describe('is-loading attribute', () => {
    it('if set to false, or omitted, spinner should be hidden when menu is opened', () => {
        const buttonMenu = createButtonMenu();
        const buttonEl = shadowQuerySelector(buttonMenu, 'button');
        buttonEl.click();

        return Promise.resolve().then(() => {
            const spinnerEl = shadowQuerySelector(buttonMenu, 'c-spinner');

            expect(spinnerEl).toBeNull();
        });
    });

    it('if set to true spinner should be visible when menu is opened', () => {
        const buttonMenu = createButtonMenu();
        buttonMenu.isLoading = true;
        const buttonEl = shadowQuerySelector(buttonMenu, 'button');
        buttonEl.click();

        return Promise.resolve().then(() => {
            const spinnerEl = shadowQuerySelector(buttonMenu, 'c-spinner');

            expect(buttonMenu.shadowRoot.contains(spinnerEl)).toBeTruthy();
        });
    });

    it('if set to truthy, non-false, value spinner should be visible when menu is opened', () => {
        const buttonMenu = createButtonMenu();
        buttonMenu.isLoading = 'truthy';
        const buttonEl = shadowQuerySelector(buttonMenu, 'button');
        buttonEl.click();

        return Promise.resolve().then(() => {
            const spinnerEl = shadowQuerySelector(buttonMenu, 'c-spinner');

            expect(buttonMenu.shadowRoot.contains(spinnerEl)).toBeTruthy();
        });
    });

    it('if set to true spinner should be visible and have an alternative text value when menu is opened', () => {
        const buttonMenu = createButtonMenu();
        buttonMenu.isLoading = true;
        const buttonEl = shadowQuerySelector(buttonMenu, 'button');
        buttonEl.click();

        return Promise.resolve().then(() => {
            const spinnerEl = shadowQuerySelector(buttonMenu, 'c-spinner');

            const spinnerAlternativeText = shadowQuerySelector(
                spinnerEl,
                '.slds-assistive-text'
            );

            expect(buttonMenu.shadowRoot.contains(spinnerEl)).toBeTruthy();
            expect(spinnerAlternativeText.textContent).toBeTruthy();
        });
    });
});

describe('label attribute', () => {
    it('if value is NOT set it should not be shown in button', () => {
        const buttonMenu = createButtonMenu();

        expect(buttonMenu.shadowRoot.textContent.indexOf('Menu')).toEqual(-1);
    });

    it('if value is set it should be shown in button', () => {
        const buttonMenu = createButtonMenu();
        buttonMenu.label = 'Menu';

        return Promise.resolve().then(() => {
            expect(
                buttonMenu.shadowRoot.textContent.indexOf('Menu')
            ).toBeGreaterThanOrEqual(0);
        });
    });
});

describe('is-draft attribute', () => {
    it('if set to false, or omitted, draft marker on button should be hidden', () => {
        const buttonMenu = createButtonMenu();

        const draftMarkerEl = shadowQuerySelector(
            buttonMenu,
            '.slds-indicator_unsaved'
        );

        expect(draftMarkerEl).toBeNull();
    });

    it('if set to true draft marker on button should be visible', () => {
        const buttonMenu = createButtonMenu();
        buttonMenu.isDraft = true;

        return Promise.resolve().then(() => {
            const draftMarkerEl = shadowQuerySelector(
                buttonMenu,
                '.slds-indicator_unsaved'
            );

            expect(buttonMenu.shadowRoot.contains(draftMarkerEl)).toBeTruthy();
        });
    });

    it('if set to truthy, non-false, value draft marker on button should be visible', () => {
        const buttonMenu = createButtonMenu();
        buttonMenu.isDraft = 'truthy';

        return Promise.resolve().then(() => {
            const draftMarkerEl = shadowQuerySelector(
                buttonMenu,
                '.slds-indicator_unsaved'
            );

            expect(buttonMenu.shadowRoot.contains(draftMarkerEl)).toBeTruthy();
        });
    });

    describe('draft-alternative-text attribute', () => {
        it('if value is NOT set the `title` attribute of the draft marker should not be set', () => {
            const buttonMenu = createButtonMenu();
            buttonMenu.isDraft = true;

            return Promise.resolve().then(() => {
                const draftMarkerEl = shadowQuerySelector(
                    buttonMenu,
                    '.slds-indicator_unsaved'
                );

                expect(draftMarkerEl.getAttribute('title')).toBeFalsy();
            });
        });

        it('if value is set the `title` attribute of the draft marker should be set', () => {
            const altText = 'Tab not saved';
            const buttonMenu = createButtonMenu();
            buttonMenu.isDraft = true;
            buttonMenu.draftAlternativeText = altText;

            return Promise.resolve().then(() => {
                const draftMarkerEl = shadowQuerySelector(
                    buttonMenu,
                    '.slds-indicator_unsaved'
                );

                expect(draftMarkerEl.getAttribute('title')).toBe(altText);
            });
        });
    });
});

describe('menu `open` event', () => {
    it('should be fired once when menu is opened', () => {
        const buttonMenu = createButtonMenu();
        const buttonEl = shadowQuerySelector(buttonMenu, 'button');

        const callback = jest.fn();
        buttonMenu.addEventListener('open', callback);

        buttonEl.click();

        return Promise.resolve().then(() => {
            expect(callback.mock.calls).toHaveLength(1);
        });
    });
});

describe('Accessibility', () => {
    it('button "aria-expanded" attribute should have value of "false" by default', () => {
        const buttonMenu = createButtonMenu();
        const buttonEl = shadowQuerySelector(buttonMenu, 'button');
        expect(buttonEl.getAttribute('aria-expanded')).toBe('false');
    });

    it('button "aria-expanded" attribute should have value of "true" when menu is open', () => {
        const buttonMenu = createButtonMenu();
        const buttonEl = shadowQuerySelector(buttonMenu, 'button');
        buttonEl.click();

        return Promise.resolve().then(() => {
            expect(buttonEl.getAttribute('aria-expanded')).toBe('true');
        });
    });
});
