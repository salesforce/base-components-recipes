/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import { shadowQuerySelector } from 'lightning/testUtils';
import showMoreLabel from '@salesforce/label/c.lightning_LightningVerticalNavigation_showMore';
import showLessLabel from '@salesforce/label/c.lightning_LightningVerticalNavigation_showLess';
import Element from 'c/verticalNavigationOverflow';

const selector = {
    overflow: '.slds-nav-vertical__overflow',
    overflowButton: '.slds-nav-vertical__action_overflow',
    overflowContent: 'button + div'
};

const createOverflow = () => {
    const element = createElement('c-vertical-navigation-overflow', {
        is: Element
    });

    document.body.appendChild(element);
    return element;
};

function getOverflowButton(element) {
    const button = shadowQuerySelector(element, selector.overflowButton);
    expect(button).toBeTruthy();
    return button;
}

function getOverflowContent(element) {
    const content = shadowQuerySelector(element, selector.overflowContent);
    expect(content).toBeTruthy();
    return content;
}

describe('c-vertical-navigation-overflow', () => {
    it('overflow collapsed', () => {
        const element = createOverflow();
        const button = getOverflowButton(element);
        const content = getOverflowContent(element);

        return Promise.resolve().then(() => {
            expect(button.textContent).toContain(showMoreLabel);

            expect(button.getAttribute('aria-expanded')).toBe('false');

            expect(content.className).toBe('slds-hide');
        });
    });
    it('overflow expanded', () => {
        const element = createOverflow();
        const button = getOverflowButton(element);
        button.click();
        const content = getOverflowContent(element);

        return Promise.resolve().then(() => {
            expect(button.textContent).toContain(showLessLabel);

            expect(button.getAttribute('aria-expanded')).toBe('true');

            expect(content.className).toBe('slds-show');
        });
    });
    it('overflow aria controls', () => {
        const element = createOverflow();

        const overflowButton = getOverflowButton(element);
        const ariaControls = overflowButton.getAttribute('aria-controls');

        const overflowContent = getOverflowContent(element);
        const contentId = overflowContent.id;

        expect(ariaControls).toBe(contentId);
    });
});
