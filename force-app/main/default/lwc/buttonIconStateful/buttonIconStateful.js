/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { api, track } from 'lwc';
import { classSet } from 'c/utils';
import { normalizeString, normalizeBoolean } from 'c/utilsPrivate';
import cPrimitiveButton from 'c/primitiveButton';
import template from './buttonIconStateful.html';

const DEFAULT_SIZE = 'medium';
const DEFAULT_VARIANT = 'border';

export default class cButtonIconStateful extends cPrimitiveButton {
    static delegatesFocus = true;

    @api name;

    @api value;

    @api variant = DEFAULT_VARIANT;

    @api iconName;

    @api size = DEFAULT_SIZE;

    @api alternativeText;

    @track _order = null;

    render() {
        return template;
    }

    get computedTitle() {
        return this.state.title || this.alternativeText || null;
    }

    get normalizedVariant() {
        return normalizeString(this.variant, {
            fallbackValue: DEFAULT_VARIANT,
            validValues: ['border', 'border-filled', 'border-inverse']
        });
    }

    get normalizedSize() {
        return normalizeString(this.size, {
            fallbackValue: DEFAULT_SIZE,
            validValues: ['xx-small', 'x-small', 'small', 'medium']
        });
    }

    @api get selected() {
        return this.state.selected || false;
    }

    set selected(value) {
        this.state.selected = normalizeBoolean(value);
    }

    get computedAriaPressed() {
        return String(this.selected);
    }

    get computedButtonClass() {
        const { normalizedSize, normalizedVariant } = this;
        const classes = classSet('slds-button slds-button_icon');
        switch (normalizedSize) {
            case 'small':
                classes.add('slds-button_icon-small');
                break;
            case 'x-small':
                classes.add('slds-button_icon-x-small');
                break;
            case 'xx-small':
                classes.add('slds-button_icon-xx-small');
                break;
            case 'medium':
            default:
        }

        classes.add({
            'slds-button_icon-border': normalizedVariant === 'border',
            'slds-button_icon-border-filled':
                normalizedVariant === 'border-filled',

            'slds-button_icon-border slds-button_icon-inverse':
                normalizedVariant === 'border-inverse',
            'slds-is-selected': this.selected === true,

            'slds-button_first': this._order === 'first',
            'slds-button_middle': this._order === 'middle',
            'slds-button_last': this._order === 'last'
        });

        return classes.toString();
    }

    @api
    focus() {
        this.template.querySelector('button').focus();
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
