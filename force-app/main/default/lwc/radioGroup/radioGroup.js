/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import labelRequired from '@salesforce/label/c.lightning_LightningControl_required';
import { LightningElement, api, track } from 'lwc';
import {
    normalizeBoolean,
    synchronizeAttrs,
    getRealDOMId,
    normalizeString as normalize,
    classListMutation
} from 'c/utilsPrivate';
import {
    isEmptyString,
    InteractingState,
    FieldConstraintApi,
    generateUniqueId,
    normalizeVariant,
    VARIANT
} from 'c/inputUtils';
import { classSet } from 'c/utils';

const i18n = {
    required: labelRequired
};

export default class cRadioGroup extends LightningElement {
    static delegatesFocus = true;

    @api type = 'radio';

    @api label;

    @api options;

    @api messageWhenValueMissing;

    @api name = generateUniqueId();

    @track _required = false;
    @track _disabled = false;
    @track _helpMessage;
    @track _value;

    synchronizeA11y() {
        const inputs = this.template.querySelectorAll('input');
        Array.prototype.slice.call(inputs).forEach((input) => {
            synchronizeAttrs(input, {
                'aria-describedby': this.computedUniqueHelpElementId
            });
        });
    }
    connectedCallback() {
        this.classList.add('slds-form-element');
        this.updateClassList();
        this.interactingState = new InteractingState();
        this.interactingState.onleave(this.showHelpMessageIfInvalid.bind(this));
    }

    updateClassList() {
        classListMutation(this.classList, {
            'slds-form-element_stacked': this.variant === VARIANT.LABEL_STACKED,
            'slds-form-element_horizontal':
                this.variant === VARIANT.LABEL_INLINE
        });
    }

    renderedCallback() {
        this.synchronizeA11y();
    }

    @api get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }

    get radioButtonElements() {
        return this.template.querySelectorAll('input');
    }

    @api get disabled() {
        return this._disabled;
    }

    set disabled(value) {
        this._disabled = normalizeBoolean(value);
    }

    @api get required() {
        return this._required;
    }

    set required(value) {
        this._required = normalizeBoolean(value);
    }

    @api get variant() {
        return this._variant || VARIANT.STANDARD;
    }

    set variant(value) {
        this._variant = normalizeVariant(value);
        this.updateClassList();
    }

    get i18n() {
        return i18n;
    }

    get transformedOptions() {
        const { options, value } = this;
        if (Array.isArray(options)) {
            return options.map((option, index) => ({
                label: option.label,
                value: option.value,
                isChecked: value === option.value,
                indexId: `radio-${index}`
            }));
        }
        return [];
    }

    get isRadio() {
        return this.normalizedType === 'radio';
    }

    get isButton() {
        return this.normalizedType === 'button';
    }

    get normalizedType() {
        return normalize(this.type, {
            fallbackValue: 'radio',
            validValues: ['radio', 'button']
        });
    }

    @api get validity() {
        return this._constraint.validity;
    }

    @api
    checkValidity() {
        return this._constraint.checkValidity();
    }

    @api
    reportValidity() {
        return this._constraint.reportValidity((message) => {
            this._helpMessage = message;
        });
    }

    @api
    setCustomValidity(message) {
        this._constraint.setCustomValidity(message);
    }

    @api
    showHelpMessageIfInvalid() {
        this.reportValidity();
    }

    @api
    focus() {
        const firstRadio = this.template.querySelector('input');
        if (firstRadio) {
            firstRadio.focus();
        }
    }

    handleFocus() {
        this.interactingState.enter();

        this.dispatchEvent(new CustomEvent('focus'));
    }

    handleBlur() {
        this.interactingState.leave();

        this.dispatchEvent(new CustomEvent('blur'));
    }

    handleChange(event) {
        event.stopPropagation();

        this.interactingState.interacting();

        const value = Array.from(this.radioButtonElements)
            .filter((radioButton) => radioButton.checked)
            .map((radioButton) => radioButton.value)
            .toString();

        this._value = value;

        this.dispatchEvent(
            new CustomEvent('change', {
                detail: {
                    value
                },

                composed: true,
                bubbles: true,
                cancelable: true
            })
        );
    }

    get computedUniqueHelpElementId() {
        return getRealDOMId(this.template.querySelector('[data-help-message]'));
    }

    get _constraint() {
        if (!this._constraintApi) {
            this._constraintApi = new FieldConstraintApi(() => this, {
                valueMissing: () =>
                    !this.disabled && this.required && isEmptyString(this.value)
            });
        }
        return this._constraintApi;
    }

    get computedLegendClass() {
        const classnames = classSet(
            'slds-form-element__legend slds-form-element__label'
        );

        return classnames
            .add({
                'slds-assistive-text': this.variant === VARIANT.LABEL_HIDDEN
            })
            .toString();
    }
}
