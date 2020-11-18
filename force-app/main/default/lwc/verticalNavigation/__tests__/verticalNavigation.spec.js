/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import {
    shadowQuerySelector,
    shadowQuerySelectorAll,
    verifyClassSet
} from 'lightning/testUtils';
import LightningElement from 'lightningtest/verticalNavigationTest';
import subPage from '@salesforce/label/c.lightning_LightningVerticalNavigation_subPage';

const selector = {
    nav: '.slds-nav-vertical',
    firstNavigationSection: '.first-navigation-section',
    activeItem: '.slds-is-active',
    item: '.slds-nav-vertical__item',
    section: '.asection',
    heading: '.slds-nav-vertical__title',
    overflow: '.anoverflow',
    overflowButton: '.slds-nav-vertical__action_overflow',
    overflowContent: 'button + div',
    assistiveText: '.slds-assistive-text',
    ulContainer: '.slds-nav-vertical__section ul'
};

const createVerticalNavigation = (props = {}) => {
    const element = createElement('lightningtest-vertical-navigation-test', {
        is: LightningElement
    });

    Object.assign(element, props);
    document.body.appendChild(element);
    return element;
};

function assertNthItemActive(n) {
    return (element) => {
        const items = shadowQuerySelectorAll(element, selector.item);
        expect(items).toHaveLength(11);

        items.forEach((item, index) => {
            verifyClassSet(item, {
                'slds-is-active': index === n ? true : false
            });
        });
    };
}

const assertFirstItemActive = assertNthItemActive(0);
const assertSecondItemActive = assertNthItemActive(1);
const assertThirdItemActive = assertNthItemActive(2);

function getItemByName(element, name) {
    const items = shadowQuerySelectorAll(element, selector.item);
    for (let i = 0; i < items.length; i++) {
        if (items[i].name === name) {
            return items[i];
        }
    }
    return null;
}

function getItemLinkByName(element, name) {
    return shadowQuerySelector(getItemByName(element, name), 'a');
}

function getSectionByIndex(element, index) {
    const section = shadowQuerySelectorAll(
        element,
        'c-vertical-navigation-section'
    )[index];
    expect(section).toBeTruthy();
    return section;
}

function getSectionHeadingByIndex(element, index) {
    const section = getSectionByIndex(element, index);
    const heading = shadowQuerySelector(section, selector.heading);
    expect(heading).toBeTruthy();
    return heading;
}

function getOverflowByIndex(element, index) {
    const overflow = shadowQuerySelectorAll(
        element,
        'c-vertical-navigation-overflow'
    )[index];
    expect(overflow).toBeTruthy();
    return overflow;
}

function getOverflowButtonByIndex(element, index) {
    const overflow = getOverflowByIndex(element, index);
    const button = shadowQuerySelector(overflow, selector.overflowButton);
    expect(button).toBeTruthy();
    return button;
}

describe('c-vertical-navigation', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('default classes', () => {
        const element = createVerticalNavigation();
        const verticalNavigationELement = shadowQuerySelector(
            element,
            'c-vertical-navigation'
        );

        const navEl = shadowQuerySelector(verticalNavigationELement, 'nav');

        verifyClassSet(navEl, {
            'slds-nav-vertical': true,
            'slds-nav-vertical_shade': false,
            'slds-nav-vertical_compact': false
        });
    });
    it('compact only', () => {
        const element = createVerticalNavigation({
            compact: true
        });

        const verticalNavigationELement = shadowQuerySelector(
            element,
            'c-vertical-navigation'
        );

        const navEl = shadowQuerySelector(verticalNavigationELement, 'nav');

        verifyClassSet(navEl, {
            'slds-nav-vertical': true,
            'slds-nav-vertical_shade': false,
            'slds-nav-vertical_compact': true
        });
    });

    it('shaded only', () => {
        const element = createVerticalNavigation({
            shaded: true
        });

        const verticalNavigationELement = shadowQuerySelector(
            element,
            'c-vertical-navigation'
        );

        const navEl = shadowQuerySelector(verticalNavigationELement, 'nav');

        verifyClassSet(navEl, {
            'slds-nav-vertical': true,
            'slds-nav-vertical_shade': true,
            'slds-nav-vertical_compact': false
        });
    });

    it('shaded and compact', () => {
        const element = createVerticalNavigation({
            shaded: true,
            compact: true
        });

        const verticalNavigationELement = shadowQuerySelector(
            element,
            'c-vertical-navigation'
        );

        const navEl = shadowQuerySelector(verticalNavigationELement, 'nav');

        verifyClassSet(navEl, {
            'slds-nav-vertical': true,
            'slds-nav-vertical_shade': true,
            'slds-nav-vertical_compact': true
        });
    });

    it('initial selected item and update', () => {
        jest.useFakeTimers();
        const element = createVerticalNavigation({
            selectedItem: 'item3'
        });

        return Promise.resolve()
            .then(() => {
                assertThirdItemActive(element);
                element.selectedItem = 'item5';
            })
            .then(() => {
                assertNthItemActive(4);
                element.selectedItem = 'item6';
            })
            .then(() => {
                assertNthItemActive(5);
                element.selectedItem = 'Item2';
            })
            .then(() => {
                assertNthItemActive(5);
            });
    });

    it('click on link', () => {
        const element = createVerticalNavigation();

        return Promise.resolve()
            .then(() => {
                const link1 = getItemLinkByName(element, 'item1');
                link1.click();
            })
            .then(() => {
                assertFirstItemActive(element);
            })
            .then(() => {
                const link2 = getItemLinkByName(element, 'item2');
                link2.click();
            })
            .then(() => {
                assertSecondItemActive(element);
            });
    });

    // eslint-disable-next-line jest/no-disabled-tests
    it.skip('header assistive text regular item', () => {
        const element = createVerticalNavigation();

        const heading = getSectionHeadingByIndex(element, 0);
        const headingId = heading.id;

        const link = getItemLinkByName(element, 'item1');
        const describedby = link.getAttribute('aria-describedby');

        expect(describedby).toBe(headingId);
    });

    // eslint-disable-next-line jest/no-disabled-tests
    it.skip('header assistive text overflow item', () => {
        const element = createVerticalNavigation();

        const heading = getSectionHeadingByIndex(element, 1);
        const headingId = heading.id;

        const link = getItemLinkByName(element, 'item7');
        const describedby = link.getAttribute('aria-describedby');

        expect(describedby).toBe(headingId);
    });

    it('aria current', () => {
        const element = createVerticalNavigation({
            selectedItem: 'item2'
        });

        return Promise.resolve()
            .then(() => {
                const item2 = getItemLinkByName(element, 'item2');
                expect(item2.getAttribute('aria-current')).toBe('page');
            })
            .then(() => {
                element.selectedItem = 'item3';
            })
            .then(() => {
                const item2 = getItemLinkByName(element, 'item2');
                const item3 = getItemLinkByName(element, 'item3');
                expect(item2.getAttribute('aria-current')).toBe(null);
                expect(item3.getAttribute('aria-current')).toBe('page');
            });
    });

    it('default aria label', () => {
        const element = createVerticalNavigation();
        const verticalNavigationELement = shadowQuerySelector(
            element,
            'c-vertical-navigation'
        );

        const navEl = shadowQuerySelector(verticalNavigationELement, 'nav');

        expect(navEl.getAttribute('aria-label')).toBe(subPage);
    });

    it('set aria label', () => {
        const customAriaLabel = 'my custom aria label';
        const element = createVerticalNavigation({
            ariaLabel: customAriaLabel
        });

        const verticalNavigationELement = shadowQuerySelector(
            element,
            'c-vertical-navigation'
        );

        const navEl = shadowQuerySelector(verticalNavigationELement, 'nav');

        expect(navEl.getAttribute('aria-label')).toBe(customAriaLabel);
    });

    it('overflow assistive text', () => {
        const element = createVerticalNavigation();

        const heading = getSectionHeadingByIndex(element, 1);
        const overflowButton = getOverflowButtonByIndex(element, 0);

        const assistiveText = overflowButton.querySelector(
            selector.assistiveText
        );

        expect(assistiveText.textContent).toBe(heading.textContent);
    });

    it('public events', () => {
        const element = createVerticalNavigation();
        const beforeSelectHandler = jest.fn();
        const selectHandler = jest.fn();
        element.addEventListener('mockbeforeselect', beforeSelectHandler);
        element.addEventListener('mockselect', selectHandler);

        return Promise.resolve()
            .then(() => {
                element.selectedItem = 'item2';
            })
            .then(() => {
                expect(beforeSelectHandler).toHaveBeenCalledTimes(1);
                expect(selectHandler).toHaveBeenCalledTimes(1);
            })
            .then(() => {
                const link1 = getItemLinkByName(element, 'item1');
                link1.click();
            })
            .then(() => {
                expect(beforeSelectHandler).toHaveBeenCalledTimes(2);
                expect(selectHandler).toHaveBeenCalledTimes(2);
            });
    });

    it('default action prevented', () => {
        const element = createVerticalNavigation();
        const selectHandler = jest.fn();
        element.addEventListener('mockbeforeselect', (e) => e.preventDefault());
        element.addEventListener('mockselect', selectHandler);

        return Promise.resolve()
            .then(() => {
                element.selectedItem = 'item2';
            })
            .then(() => {
                expect(selectHandler).toHaveBeenCalledTimes(0);
            });
    });

    it('should set aria-current when section is consists of item icons', () => {
        const element = createVerticalNavigation({
            selectedItem: 'item10'
        });

        return Promise.resolve().then(() => {
            const item10 = getItemLinkByName(element, 'item10');
            const item11 = getItemLinkByName(element, 'item11');

            expect(item10.getAttribute('aria-current')).toBe('page');
            expect(item11.getAttribute('aria-current')).toBe(null);
        });
    });

    it('should set aria-current when clicking on item icon', () => {
        const element = createVerticalNavigation();

        let item10, item11;

        return Promise.resolve()
            .then(() => {
                item10 = getItemLinkByName(element, 'item10');
                item11 = getItemLinkByName(element, 'item11');

                expect(item10.getAttribute('aria-current')).toBe(null);
                expect(item11.getAttribute('aria-current')).toBe(null);

                item11.click();
            })
            .then(() => {
                expect(item10.getAttribute('aria-current')).toBe(null);
                expect(item11.getAttribute('aria-current')).toBe('page');
            });
    });
});
