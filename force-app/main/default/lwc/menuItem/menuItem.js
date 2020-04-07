/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api, track } from 'lwc';
import { classSet } from 'c/utils';
import { normalizeBoolean, normalizeString, keyCodes } from 'c/utilsPrivate';

export default class cMenuItem extends LightningElement {
    @api value;

    @api label;

    @api iconName;

    @api download;

    @track _accesskey = null;
    @track _disabled = false;
    @track _tabindex = '-1';
    @track _checked = undefined;
    @track _isDraft = false;
    @track _target = null;

    @api prefixIconName;

    @api href;

    @api draftAlternativeText;

    connectedCallback() {
        this.classList.add('slds-dropdown__item');

        this.setAttribute('role', 'presentation');
    }

    @api get isDraft() {
        return this._isDraft;
    }

    set isDraft(value) {
        this._isDraft = normalizeBoolean(value);
    }

    @api get accessKey() {
        return this._accesskey;
    }

    set accessKey(newValue) {
        this._accesskey = newValue;
        this.handleAccessKeyChange(newValue);
    }

    @api get tabIndex() {
        return this._tabindex;
    }

    set tabIndex(newValue) {
        this._tabindex = newValue;
        this.handleTabIndexChange(newValue);
    }

    @api get target() {
        return this._target;
    }

    set target(newValue) {
        this._target = normalizeString(newValue, {
            fallbackValue: null,
            validValues: ['_self', '_blank']
        });
    }

    handleAccessKeyChange(value) {
        this._accesskey = value;
    }

    handleTabIndexChange(value) {
        this._tabindex = value;
    }

    get computedAccessKey() {
        return this._accesskey;
    }

    get computedTabIndex() {
        return this._tabindex;
    }

    @api get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = normalizeBoolean(value);
    }

    @api get checked() {
        return this._checked;
    }
    set checked(value) {
        if (typeof value === 'string') {
            value = normalizeString(value, {
                fallbackValue: undefined,
                validValues: ['true', 'false']
            });

            if (value !== undefined) {
                value = value === 'true';
            }
        }
        if (value !== undefined) {
            value = normalizeBoolean(value);
        }
        this._checked = value;

        this.classList.toggle('slds-is-selected', this.checked === true);
    }

    get computedCheckedIconClass() {
        return classSet(
            'slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small'
        )
            .add({ 'slds-icon_selected': !this.checked })
            .toString();
    }

    get computedHref() {
        // eslint-disable-next-line no-script-url
        return this.href ? this.href : 'javascript:void(0)';
    }

    get computedAriaChecked() {
        return this.isMenuItemCheckbox ? this.checked + '' : null;
    }

    get computedAriaDisabled() {
        return this.disabled ? 'true' : 'false';
    }

    get isMenuItemCheckbox() {
        return this.checked !== undefined;
    }

    get computedRole() {
        return this.isMenuItemCheckbox ? 'menuitemcheckbox' : 'menuitem';
    }

    handleBlur() {
        this.dispatchEvent(new CustomEvent('blur'));

        this.dispatchEvent(
            new CustomEvent('privateblur', {
                composed: true,
                bubbles: true,
                cancelable: true
            })
        );
    }

    handleFocus() {
        this.dispatchEvent(
            new CustomEvent('privatefocus', {
                bubbles: true,
                cancelable: true
            })
        );
    }

    handleClick(event) {
        if (this.disabled) {
            event.preventDefault();

            return;
        }

        if (this.href) {
        } else {
            event.preventDefault();
            this.dispatchSelect();
        }
    }

    handleKeyDown(event) {
        if (this.disabled) {
            return;
        }

        if (event.keyCode === keyCodes.space) {
            if (this.href) {
                this.template.querySelector('a').click();
            } else {
                this.dispatchSelect();
            }
        }
    }

    dispatchSelect() {
        if (!this.disabled) {
            this.dispatchEvent(
                new CustomEvent('privateselect', {
                    bubbles: true,
                    cancelable: true,
                    detail: {
                        value: this.value
                    }
                })
            );
        }
    }

    @api
    focus() {
        this.template.querySelector('a').focus();

        this.dispatchEvent(new CustomEvent('focus'));
    }

    @api
    click() {
        const anchor = this.template.querySelector('a');
        if (anchor) {
            anchor.click();
        }
    }
}