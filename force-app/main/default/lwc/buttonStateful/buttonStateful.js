/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api, track } from 'lwc';
import { classSet } from 'c/utils';
import { normalizeBoolean, normalizeString as normalize } from 'c/utilsPrivate';

const DEFAULT_VARIANT = 'neutral';

export default class cButtonStateful extends LightningElement {
    static delegatesFocus = true;

    @api iconNameWhenOn;

    @api iconNameWhenOff;

    @api iconNameWhenHover;

    @api labelWhenOff;

    @api labelWhenOn;

    @api labelWhenHover;

    @api variant = DEFAULT_VARIANT;

    @track
    state = {
        isClicked: false
    };

    @track _order = null;

    @api get selected() {
        return this.state.selected || false;
    }
    set selected(value) {
        this.state.selected = normalizeBoolean(value);
    }

    @api
    focus() {
        this.template.querySelector('button').focus();
    }

    get computedButtonClass() {
        const classes = classSet('slds-button slds-button_stateful')
            .add({
                'slds-button_neutral': this.normalizedVariant === 'neutral',
                'slds-button_brand': this.normalizedVariant === 'brand',
                'slds-button_inverse': this.normalizedVariant === 'inverse',
                'slds-button_destructive':
                    this.normalizedVariant === 'destructive',
                'slds-button_success': this.normalizedVariant === 'success'
            })
            .add({
                'slds-not-selected': !this.selected,
                'slds-is-selected': this.selected && !this.state.isClicked,
                'slds-is-selected-clicked':
                    this.selected && this.state.isClicked,

                'slds-button_first': this._order === 'first',
                'slds-button_middle': this._order === 'middle',
                'slds-button_last': this._order === 'last'
            });

        return classes.toString();
    }

    get normalizedVariant() {
        return normalize(this.variant, {
            fallbackValue: DEFAULT_VARIANT,
            validValues: [
                'neutral',
                'brand',
                'inverse',
                'destructive',
                'success',
                'text'
            ]
        });
    }

    get privateLabelWhenOn() {
        let outputVal = this.labelWhenOn;

        if (this.isValidLabel(outputVal)) {
            return outputVal;
        }

        outputVal = '';
        // eslint-disable-next-line no-console
        console.warn(
            `<c-button-stateful> The "labelWhenOn" attribute value is required to show the label when selected has a value of true`
        );

        return outputVal;
    }

    get privateLabelWhenOff() {
        let outputVal = this.labelWhenOff;

        if (this.isValidLabel(outputVal)) {
            return outputVal;
        }

        outputVal = '';
        // eslint-disable-next-line no-console
        console.warn(
            `<c-button-stateful> The "labelWhenOff" attribute value is required to show the label when selected has a value of false`
        );

        return outputVal;
    }

    get privateLabelWhenHover() {
        const outputVal = this.labelWhenHover;

        if (this.isValidLabel(outputVal)) {
            return outputVal;
        }

        return this.privateLabelWhenOn;
    }

    get privateIconNameWhenHover() {
        if (this.iconNameWhenHover) {
            return this.iconNameWhenHover;
        }

        return this.iconNameWhenOn;
    }

    handleButtonClick() {
        this.state.isClicked = true;
    }

    handleButtonBlur() {
        this.state.isClicked = false;

        this.dispatchEvent(new CustomEvent('blur'));
    }

    handleButtonFocus() {
        this.dispatchEvent(new CustomEvent('focus'));
    }

    isValidLabel(labelVal) {
        if (typeof labelVal !== 'string' || labelVal.length === 0) {
            return false;
        }

        return true;
    }

    setOrder(order) {
        this._order = order;
    }

    connectedCallback() {
        const privatebuttonregister = new CustomEvent('privatebuttonregister', {
            bubbles: true,
            detail: {
                callbacks: {
                    setOrder: this.setOrder.bind(this),
                    setDeRegistrationCallback: (deRegistrationCallback) => {
                        this._deRegistrationCallback = deRegistrationCallback;
                    }
                }
            }
        });

        this.dispatchEvent(privatebuttonregister);
    }

    disconnectedCallback() {
        if (this._deRegistrationCallback) {
            this._deRegistrationCallback();
        }
    }
}

cButtonStateful.interopMap = {
    props: {
        selected: 'state'
    }
};
