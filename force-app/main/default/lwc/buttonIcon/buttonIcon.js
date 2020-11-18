/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { api, track } from 'lwc';
import { classSet } from 'c/utils';
import { normalizeString as normalize } from 'c/utilsPrivate';

import cPrimitiveButton from 'c/primitiveButton';
import template from './buttonIcon.html';

const DEFAULT_SIZE = 'medium';
const DEFAULT_VARIANT = 'border';
const DEFAULT_TYPE = 'button';

export default class cButtonIcon extends cPrimitiveButton {
    static delegatesFocus = true;

    @api name;

    @api value;

    @api variant = DEFAULT_VARIANT;

    @api iconName;

    @api iconClass;

    @api size = DEFAULT_SIZE;

    @api type = DEFAULT_TYPE;

    @api alternativeText;

    @track _order = null;

    render() {
        return template;
    }

    get computedTitle() {
        return this.state.title || this.alternativeText || '';
    }

    get normalizedVariant() {
        return normalize(this.variant, {
            fallbackValue: DEFAULT_VARIANT,
            validValues: [
                'bare',
                'brand',
                'container',
                'border',
                'border-filled',
                'bare-inverse',
                'border-inverse'
            ]
        });
    }

    get normalizedType() {
        return normalize(this.type, {
            fallbackValue: DEFAULT_TYPE,
            validValues: ['button', 'reset', 'submit']
        });
    }

    get normalizedSize() {
        return normalize(this.size, {
            fallbackValue: DEFAULT_SIZE,
            validValues: ['xx-small', 'x-small', 'small', 'medium', 'large']
        });
    }

    getVariantBase() {
        return this.normalizedVariant.split('-')[0];
    }

    getVariantModifier() {
        return this.normalizedVariant.split('-')[1] || '';
    }

    get computedButtonClass() {
        const { normalizedSize, normalizedVariant } = this;
        const isBare = this.getVariantBase(normalizedSize) === 'bare';
        const classes = classSet('slds-button');
        classes.add('slds-button_icon');
        if (!isBare) {
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
                case 'large':
                    console.warn(
                        `<c-button-icon> The non-bare variants of buttonIcon do not support a size value of "large". Supported values include "xx-small", "x-small", "small", and "medium". Falling back to size value "medium".`
                    );

                case 'medium':
                default:
            }
        }
        return classes
            .add({
                'slds-button_icon-bare': isBare,
                'slds-button_icon-container': normalizedVariant === 'container',
                'slds-button_icon-border': normalizedVariant === 'border',
                'slds-button_icon-border-filled':
                    normalizedVariant === 'border-filled',
                'slds-button_icon-border-inverse':
                    normalizedVariant === 'border-inverse',
                'slds-button_icon-inverse':
                    normalizedVariant === 'bare-inverse',
                'slds-button_icon-brand': normalizedVariant === 'brand',
                'slds-button_first': this._order === 'first',
                'slds-button_middle': this._order === 'middle',
                'slds-button_last': this._order === 'last'
            })
            .toString();
    }

    get computedIconClass() {
        const { normalizedSize, normalizedVariant } = this;
        const isBare = this.getVariantBase(normalizedVariant) === 'bare';
        const iconClass = this.iconClass || '';
        const classes = classSet('slds-button__icon');
        classes.add(iconClass);

        if (isBare) {
            switch (normalizedSize) {
                case 'large':
                    classes.add('slds-button__icon_large');
                    break;
                case 'small':
                    classes.add('slds-button__icon_small');
                    break;
                case 'xx-small':
                    console.warn(
                        `<c-button-icon> The bare variant of buttonIcon does not support a size value of "xx-small". Supported values include "x-small", "small", "medium", and "large". The default is "medium".`
                    );

                case 'x-small':
                    classes.add('slds-button__icon_x-small');
                    break;
                case 'medium':
                default:
            }
        }
        if (this.getVariantModifier(normalizedVariant) === 'inverse') {
            classes.add('slds-button_icon-inverse');
        }

        return classes.toString();
    }

    handleFocus() {
        this.dispatchEvent(new CustomEvent('focus'));
    }

    handleBlur() {
        this.dispatchEvent(new CustomEvent('blur'));
    }

    @api
    focus() {
        if (this._connected) {
            this.template.querySelector('button').focus();
        }
    }

    @api
    click() {
        if (this._connected) {
            this.template.querySelector('button').click();
        }
    }

    setOrder(order) {
        this._order = order;
    }

    connectedCallback() {
        this._connected = true;
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

    renderedCallback() {
        super.renderedCallback();

        this.template.host.style.pointerEvents = this.disabled ? 'none' : '';
    }

    disconnectedCallback() {
        this._connected = false;
        if (this._deRegistrationCallback) {
            this._deRegistrationCallback();
        }
    }
}
