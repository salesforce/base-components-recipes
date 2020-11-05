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
    classListMutation
} from 'c/utilsPrivate';
import {
    FieldConstraintApi,
    debounce,
    normalizeVariant,
    VARIANT
} from 'c/inputUtils';
import { classSet } from 'c/utils';

const i18n = {
    required: labelRequired
};

const DEBOUNCE_PERIOD = 200;

export default class cCheckboxGroup extends LightningElement {
    static delegatesFocus = true;

    @api label;

    @api options;

    @api messageWhenValueMissing;

    @api name;

    @track _helpMessage;
    @track _disabled;
    @track _required;
    @track _value;

    constructor() {
        super();
        this.itemIndex = 0;

        this.debouncedShowIfBlurred = debounce(() => {
            if (!this.containsFocus) {
                this.showHelpMessageIfInvalid();
            }
        }, DEBOUNCE_PERIOD);
    }

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

    @api get disabled() {
        return this._disabled || false;
    }
    set disabled(value) {
        this._disabled = normalizeBoolean(value);
    }

    @api get required() {
        return this._required || false;
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
            return options.map((option) => ({
                label: option.label,
                value: option.value,
                id: `checkbox-${this.itemIndex++}`,
                isChecked: value.indexOf(option.value) !== -1
            }));
        }
        return [];
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

    get computedUniqueHelpElementId() {
        const helpElement = this.template.querySelector('[data-helptext]');
        return getRealDOMId(helpElement);
    }

    @api
    focus() {
        const firstCheckbox = this.template.querySelector('input');
        if (firstCheckbox) {
            firstCheckbox.focus();
        }
    }

    handleFocus() {
        this.containsFocus = true;

        this.dispatchEvent(new CustomEvent('focus'));
    }

    handleBlur() {
        this.containsFocus = false;
        this.debouncedShowIfBlurred();

        this.dispatchEvent(new CustomEvent('blur'));
    }

    handleClick(event) {
        if (this.template.activeElement !== event.target) {
            event.target.focus();
        }
    }

    handleChange(event) {
        event.stopPropagation();

        const checkboxes = this.template.querySelectorAll('input');
        const value = Array.from(checkboxes)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);

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

    get _constraint() {
        if (!this._constraintApi) {
            this._constraintApi = new FieldConstraintApi(() => this, {
                valueMissing: () =>
                    !this.disabled && this.required && this.value.length === 0
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
