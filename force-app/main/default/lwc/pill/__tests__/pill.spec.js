/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/pill';

const basePillProps = {
    tabIndex: 0,
    role: 'option',
    ariaSelected: true
};

const linkPillProps = {
    ...basePillProps,
    label: 'Link Pill Label',
    variant: 'link'
};

const plainPillProps = {
    ...basePillProps,
    label: 'Plain Pill Label',
    variant: 'plain'
};

const plainLinkPillProps = {
    ...basePillProps,
    label: 'Plain Link Pill Label',
    variant: 'plainLink'
};

const createComponent = (props = {}) => {
    const element = createElement('c-pill', { is: Element });
    Object.assign(element, props);
    document.body.appendChild(element);
    return element;
};

describe('c-pill', () => {
    it('should have a label when label prop is provided', () => {
        const element = createComponent({
            label: `Pill Label`
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });
    it('should have href when href prop is provided', () => {
        const element = createComponent();
        element.label = `Pill Label`;
        element.href = `/path/to/some/where`;
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });
    it('has error state', () => {
        const element = createComponent({
            label: `Pill Label`,
            hasError: true
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });
    it('is plain pill', () => {
        const element = createComponent({
            label: 'Plain Pill Label',
            variant: 'plain'
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('delete key should fire remove event', () => {
        const element = createComponent({
            label: `Plain Pill Label`,
            variant: 'plain'
        });

        let removed = false;
        element.addEventListener('remove', () => {
            removed = true;
        });

        const deleteKey = new KeyboardEvent('keydown', {
            bubbles: true,
            composed: true,
            keyCode: 46
        });

        element.dispatchEvent(deleteKey);
        expect(removed).toBe(true);
    });

    it('backspace key should fire remove event', () => {
        const element = createComponent({
            label: `Plain Pill Label`,
            variant: 'plain'
        });

        let removed = false;

        element.addEventListener('remove', () => {
            removed = true;
        });

        const backspaceKey = new KeyboardEvent('keydown', {
            bubbles: true,
            composed: true,
            keyCode: 8
        });

        element.dispatchEvent(backspaceKey);
        expect(removed).toBe(true);
    });

    it('isPlainLink return true if variant is plainLink', () => {
        const element = createComponent({
            label: 'Plain Pill Label',
            variant: 'plainLink'
        });

        expect(element.isPlainLink).toBe(true);
    });

    it("isPlainLink return false if variant isn't plainLink", () => {
        const element = createComponent({
            label: 'Plain Pill Label',
            variant: 'link'
        });

        expect(element.isPlainLink).toBe(false);
    });

    it('tabIndex/role/ariaSelected is set to anchor if variant is plainLink', () => {
        const element = createComponent(plainLinkPillProps);

        const a = element.shadowRoot.querySelector('a');
        expect(a.getAttribute('aria-selected')).toBe('true');
        expect(a.getAttribute('role')).toBe('option');
        expect(a.getAttribute('tabindex')).toBe('0');

        expect(element.getAttribute('aria-selected')).toBe(null);
        expect(element.getAttribute('role')).toBe(null);
        expect(element.getAttribute('tabindex')).toBe(null);
    });

    it("tabIndex/role/ariaSelected is set to self if variant isn't plainLink", () => {
        const element = createComponent(plainPillProps);
        expect(element.isPlainLink).toBe(false);
        expect(element.getAttribute('aria-selected')).toBe('true');
        expect(element.getAttribute('role')).toBe('option');
        expect(element.getAttribute('tabindex')).toBe('0');
    });
    it('should fire remove event when remove icon clicked on link variant', () => {
        const element = createComponent(linkPillProps);
        let removed = false;
        element.addEventListener('remove', () => {
            removed = true;
        });
        const removeIcon = element.shadowRoot.querySelector(
            '.slds-pill__remove'
        );

        removeIcon.click();
        expect(removed).toBe(true);
    });
    it('should fire remove event when remove icon clicked on plain variant', () => {
        const element = createComponent(plainPillProps);
        let removed = false;
        element.addEventListener('remove', () => {
            removed = true;
        });
        const removeIcon = element.shadowRoot.querySelector(
            '.slds-pill__remove'
        );

        removeIcon.click();
        expect(removed).toBe(true);
    });
    it('should fire remove event when remove icon clicked on plainLink variant', () => {
        const element = createComponent(plainLinkPillProps);
        let removed = false;
        element.addEventListener('remove', () => {
            removed = true;
        });
        const removeIcon = element.shadowRoot.querySelector(
            '.slds-pill__remove'
        );

        removeIcon.click();
        expect(removed).toBe(true);
    });
    it('should not fire remove event when label clicked on plainLink variant', () => {
        const element = createComponent(plainLinkPillProps);
        let removed = false;
        element.addEventListener('remove', () => {
            removed = true;
        });
        const actionElm = element.shadowRoot.querySelector(
            '.slds-pill__action'
        );

        actionElm.click();
        expect(removed).toBe(false);
    });
    it('should call click handler when enter key pressed', () => {
        const element = createComponent(plainLinkPillProps);
        let clicked = false;
        element.shadowRoot
            .querySelector('.slds-pill__label')
            .addEventListener('click', () => {
                clicked = true;
            });
        const enterKey = new KeyboardEvent('keydown', {
            bubbles: true,
            composed: true,
            keyCode: 13
        });

        element.dispatchEvent(enterKey);
        expect(clicked).toBe(true);
    });
    it('should not keep the class in root element, if passed from pill container', () => {
        const element = createComponent({
            ...plainPillProps,
            className: 'standard'
        });

        expect(element.classList.contains('standard')).not.toBe(true);
    });
});
