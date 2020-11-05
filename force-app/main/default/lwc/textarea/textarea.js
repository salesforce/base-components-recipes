/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import labelRequired from '@salesforce/label/c.lightning_LightningControl_required';
import { LightningElement, api, track } from 'lwc';
import { classSet } from 'c/utils';
import {
    normalizeBoolean,
    synchronizeAttrs,
    getRealDOMId,
    classListMutation,
    decorateInputForDragon,
    setDecoratedDragonInputValueWithoutEvent
} from 'c/utilsPrivate';
import {
    InteractingState,
    normalizeVariant,
    FieldConstraintApiWithProxyInput,
    isEmptyString,
    VARIANT
} from 'c/inputUtils';
import { TouchScroller } from 'c/touchScrollLibrary';

const i18n = {
    required: labelRequired
};

export default class cTextarea extends LightningElement {
    static delegatesFocus = true;

    @api label;

    @api placeholder;

    @api name;

    @api messageWhenBadInput;

    @api messageWhenTooShort;

    @api messageWhenTooLong;

    @api messageWhenValueMissing;

    @api accessKey;

    @track _maxLength;
    @track _minLength;
    @track _defaultValue = '';
    @track _disabled = false;
    @track _required = false;
    @track _readOnly = false;
    @track _variant;

    @track _helpMessage;
    @track _fieldLevelHelp;

    connectedCallback() {
        this.classList.add('slds-form-element');
        this.updateClassList();
        this._connected = true;
        this.interactingState = new InteractingState();
        this.interactingState.onleave(() => this.showHelpMessageIfInvalid());
    }

    updateClassList() {
        classListMutation(this.classList, {
            'slds-form-element_stacked': this.variant === VARIANT.LABEL_STACKED,
            'slds-form-element_horizontal':
                this.variant === VARIANT.LABEL_INLINE
        });
    }

    synchronizeA11y() {
        const input = this.template.querySelector('textarea');
        synchronizeAttrs(input, {
            'aria-describedby': this.computedUniqueHelpElementId
        });
    }

    renderedCallback() {
        if (!this._rendered) {
            this._rendered = true;
            this._setInputValue(this._defaultValue);
            this.synchronizeA11y();

            const scrollTarget = this.template.querySelector(
                '.textarea-container'
            );

            this.touchScroller = new TouchScroller(scrollTarget);
        }
        this.synchronizeA11y();
    }

    disconnectedCallback() {
        this._connected = false;
    }

    @api get maxLength() {
        return this._maxLength;
    }

    set maxLength(value) {
        this._maxLength = value;
        this._updateProxyInputAttributes('maxlength');
    }

    @api get minLength() {
        return this._minLength;
    }

    set minLength(value) {
        this._minLength = value;
        this._updateProxyInputAttributes('minlength');
    }

    @api get value() {
        return this._value;
    }

    set value(value) {
        if (this._value !== value) {
            this._value = value || '';
            if (this._connected) {
                this._setInputValue(this._value);
            } else {
                this._defaultValue = this._value;
            }
        }

        this._updateProxyInputAttributes('value');
    }

    @api get disabled() {
        return this._disabled;
    }

    set disabled(value) {
        this._disabled = normalizeBoolean(value);
        this._updateProxyInputAttributes('disabled');
    }

    @api get readOnly() {
        return this._readOnly;
    }

    set readOnly(value) {
        this._readOnly = normalizeBoolean(value);
        this._updateProxyInputAttributes('readonly');
    }

    @api get required() {
        return this._required;
    }

    set required(value) {
        this._required = normalizeBoolean(value);
        this._updateProxyInputAttributes('required');
    }

    @api get variant() {
        return this._variant || VARIANT.STANDARD;
    }

    set variant(value) {
        this._variant = normalizeVariant(value);
        this.updateClassList();
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

    set fieldLevelHelp(value) {
        this._fieldLevelHelp = value;
    }

    @api get fieldLevelHelp() {
        return this._fieldLevelHelp;
    }

    @api
    focus() {
        if (this._connected) {
            this.inputElement.focus();
        }
    }

    @api
    blur() {
        if (this._connected) {
            this.inputElement.blur();
        }
    }

    @api
    setRangeText() {
        if (this._connected) {
            this.inputElement.setRangeText.apply(this.inputElement, arguments);
            this.value = this.inputElement.value;
        }
    }

    get isLabelHidden() {
        return this.variant === VARIANT.LABEL_HIDDEN;
    }

    get i18n() {
        return i18n;
    }

    get computedLabelClass() {
        return classSet('slds-form-element__label')
            .add({ 'slds-assistive-text': this.isLabelHidden })
            .toString();
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
    }

    handleInput(event) {
        event.stopPropagation();

        if (!this._connected || this._value === event.target.value) {
            return;
        }

        this.interactingState.interacting();

        this._value = this.inputElement.value;
        this._updateProxyInputAttributes('value');

        this.dispatchEvent(
            new CustomEvent('change', {
                bubbles: true,
                composed: true,
                detail: {
                    value: this._value
                }
            })
        );
    }

    get inputElement() {
        if (this._inputElement) {
            return this._inputElement;
        }
        this._inputElement = this.template.querySelector('textarea');
        decorateInputForDragon(this._inputElement);
        return this._inputElement;
    }

    get computedUniqueHelpElementId() {
        const helpMessage = this.template.querySelector('[data-help-message]');
        return getRealDOMId(helpMessage);
    }

    _setInputValue(value) {
        setDecoratedDragonInputValueWithoutEvent(this.inputElement, value);
    }

    _updateProxyInputAttributes(attributes) {
        if (this._constraintApiProxyInputUpdater) {
            this._constraintApiProxyInputUpdater(attributes);
        }
    }

    get _constraint() {
        if (!this._constraintApi) {
            this._constraintApi = new FieldConstraintApiWithProxyInput(
                () => this,
                {
                    valueMissing: () =>
                        this._required && isEmptyString(this._value),

                    tooShort: () =>
                        this._connected && this.inputElement.validity.tooShort,
                    tooLong: () =>
                        this._connected && this.inputElement.validity.tooLong
                },

                'textarea'
            );

            this._constraintApiProxyInputUpdater = this._constraint.setInputAttributes(
                {
                    value: () => this.value,
                    maxlength: () => this.maxLength,
                    minlength: () => this.minLength,
                    disabled: () => this.disabled,
                    readonly: () => this.readOnly,
                    required: () => this.required
                }
            );
        }
        return this._constraintApi;
    }
}

cTextarea.interopMap = {
    exposeNativeEvent: {
        change: true,
        focus: true,
        blur: true
    }
};
