/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/badge';
import { shadowQuerySelector } from 'lightning/testUtils';

const selectors = {
    badgeIcon: '.slds-badge__icon'
};

const iconClasses = {
    iconLeft: 'slds-badge__icon_left',
    iconRight: 'slds-badge__icon_right'
};

const createBadge = (attributes) => {
    const element = createElement('c-badge', { is: Element });

    Object.assign(element, attributes);
    document.body.appendChild(element);
    return element;
};

describe('c-badge', () => {
    it('default', () => {
        const element = createBadge({
            label: 'Alpha'
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    describe('withIcon', () => {
        it('should render the icon on the left by default', () => {
            const element = createBadge({
                label: 'With Left Icon',
                iconName: 'standard:account'
            });

            return Promise.resolve().then(() => {
                const icon = shadowQuerySelector(element, selectors.badgeIcon);
                expect(icon).toBeTruthy();
                expect(icon.classList.contains(iconClasses.iconLeft)).toEqual(
                    true
                );

                expect(element.shadowRoot.firstChild.tagName).toEqual('SPAN');
            });
        });

        it('should render the icon on the right', () => {
            const label = 'With Right Icon';

            const element = createBadge({
                label: label,
                iconName: 'standard:account',
                iconPosition: 'end'
            });

            return Promise.resolve().then(() => {
                const icon = shadowQuerySelector(element, selectors.badgeIcon);
                expect(icon).toBeTruthy();
                expect(icon.classList.contains(iconClasses.iconRight)).toEqual(
                    true
                );

                expect(element.shadowRoot.firstChild.textContent).toEqual(
                    label
                );
            });
        });

        it('should render the icon on the left when an invalid value is passed', () => {
            const element = createBadge({
                label: 'With Right Icon',
                iconName: 'standard:account',
                iconPosition: 'invalid'
            });

            return Promise.resolve().then(() => {
                const icon = shadowQuerySelector(element, selectors.badgeIcon);
                expect(icon).toBeTruthy();
                expect(icon.classList.contains(iconClasses.iconLeft)).toEqual(
                    true
                );

                expect(element.shadowRoot.firstChild.tagName).toEqual('SPAN');
            });
        });

        it('should change the icon position programmatically', () => {
            const label = 'Changed to the right';

            const element = createBadge({
                label: 'With Left Icon',
                iconName: 'standard:account'
            });

            element.iconPosition = 'end';
            element.label = label;

            return Promise.resolve().then(() => {
                const icon = shadowQuerySelector(element, selectors.badgeIcon);
                expect(icon).toBeTruthy();
                expect(icon.classList.contains(iconClasses.iconRight)).toEqual(
                    true
                );

                expect(element.shadowRoot.firstChild.textContent).toEqual(
                    label
                );
            });
        });
    });
});
