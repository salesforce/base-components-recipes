/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import { shadowQuerySelector } from 'lightning/testUtils';
import LightningCard from './../card';

function createCard(props = {}) {
    const card = createElement('c-card', { is: LightningCard });
    Object.assign(card, props);
    document.body.appendChild(card);
    return card;
}

describe('c-card', () => {
    describe('when variant="narrow"', () => {
        it('should compute classes in the wrapper based on the variant', () => {
            const card = createCard({
                variant: 'narrow'
            });

            const wrapper = shadowQuerySelector(card, '.slds-card');
            expect(wrapper.classList.contains('slds-card_narrow')).toBe(true);
        });
    });
    it('should contains the c-icon when icon-name prop is passed', () => {
        const iconName = 'standard:opportunity';
        const card = createCard({
            iconName
        });

        const icon = shadowQuerySelector(card, 'c-icon');
        expect(icon).not.toBeNull();
        expect(icon.iconName).toBe(iconName);
    });
    it('should not render the footer wrapper when no footer was passed', () => {
        const card = createCard();
        return Promise.resolve().then(() => {
            const footerWrapper = shadowQuerySelector(
                card,
                '.slds-card__footer'
            );

            expect(footerWrapper).toBeNull();
        });
    });
    it('should not throw in subsequent renders when no footer was passed', () => {
        const card = createCard({ iconName: 'utility:down' });
        return Promise.resolve().then(() => {
            card.iconName = 'action:approval';

            return new Promise(setTimeout);
        });
    });
});
