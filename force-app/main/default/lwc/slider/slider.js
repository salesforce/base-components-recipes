/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api, track } from 'lwc';
import { classSet } from 'c/utils';
import {
    assert,
    normalizeBoolean,
    normalizeString as normalize
} from 'c/utilsPrivate';
import numberUtils from 'c/numberUtils';
import { numberFormat } from 'c/internationalizationLibrary';
import {
    InteractingState,
    normalizeVariant,
    FieldConstraintApiWithProxyInput,
    VARIANT
} from 'c/inputUtils';

const defaultMin = 0;
const defaultMax = 100;
const defaultStep = 1;

export default class cSlider extends LightningElement {
    @api size;

    @api type = 'horizontal';

    @api label;

    @api messageWhenRangeOverflow;

    @api messageWhenRangeUnderflow;

    @api messageWhenStepMismatch;

    @api messageWhenValueMissing;

    @api messageWhenTooLong;

    @api messageWhenBadInput;

    @api messageWhenPatternMismatch;

    @api messageWhenTypeMismatch;

    @track _helpMessage;
    @track _min = defaultMin;
    @track _max = defaultMax;
    @track _step = defaultStep;
    @track _variant;
    @track _value;
    @track _disabled = false;

    constructor() {
        super();
        this.interactingState = new InteractingState();
        this.interactingState.onleave(() => this.showHelpMessageIfInvalid());
    }

    connectedCallback() {
        this.classList.add('slds-form-element');

        this.setAttribute('data-handles-touch', true);
        assert(this.label, `<c-slider> Missing required "label" attribute.`);
    }

    @api get min() {
        return this._min;
    }

    set min(value) {
        this._min = value || defaultMin;
        this._updateProxyInputAttributes('min');
    }

    @api get max() {
        return this._max;
    }

    set max(value) {
        this._max = value || defaultMax;
        this._updateProxyInputAttributes('max');
    }

    @api get step() {
        return this._step;
    }

    set step(value) {
        this._step = value || defaultStep;
        this._updateProxyInputAttributes('step');
    }

    @api get disabled() {
        return this._disabled;
    }

    set disabled(value) {
        this._disabled = normalizeBoolean(value);
        this._updateProxyInputAttributes('disabled');
    }

    @api get variant() {
        return this._variant || VARIANT.STANDARD;
    }

    set variant(value) {
        this._variant = normalizeVariant(value);
    }

    @api get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
        this._updateProxyInputAttributes('value');
    }

    @api
    focus() {
        this.inputElement.focus();
    }

    @api
    blur() {
        this.inputElement.blur();
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

    get computedValue() {
        return Number.isFinite(parseFloat(this._value)) ? this._value : null;
    }

    get formattedValue() {
        if (!Number.isFinite(parseFloat(this._value))) {
            return '';
        }

        const decimalPlaces = numberUtils.decimalPlaces(this._step);
        const formatConfig = { style: 'decimal' };

        if (decimalPlaces > 0) {
            formatConfig.minimumFractionDigits = decimalPlaces;
        }
        return numberFormat(formatConfig).format(this.computedValue);
    }

    get computedClass() {
        const { normalizedSize, normalizedType } = this;
        const classes = classSet('slds-slider');

        if (normalizedType === 'vertical') {
            classes.add('slds-slider_vertical');
        }
        if (normalizedSize) {
            classes.add(`slds-size_${normalizedSize}`);
        }
        return classes.toString();
    }

    get normalizedSize() {
        return normalize(this.size, {
            fallbackValue: '',
            validValues: ['x-small', 'small', 'medium', 'large']
        });
    }

    handleChange(event) {
        event.stopPropagation();

        const shouldIgnoreChangeEvent = this._value === event.target.value;
        if (shouldIgnoreChangeEvent) {
            return;
        }

        this.handleInput(event);
    }

    get normalizedType() {
        return normalize(this.type, {
            fallbackValue: 'horizontal',
            validValues: ['horizontal', 'vertical']
        });
    }

    get isLabelHidden() {
        return this.variant === VARIANT.LABEL_HIDDEN;
    }

    get computedLabelClass() {
        const classes = classSet();

        classes.add(
            this.isLabelHidden
                ? 'slds-assistive-text'
                : 'slds-slider-label__label'
        );

        return classes.toString();
    }

    handleInput(event) {
        this.interactingState.interacting();
        event.stopPropagation();

        const newValue = event.target.value;

        this._value = newValue;
        this._updateProxyInputAttributes('value');

        const customEvent = this.createCustomChangeEvent(newValue);
        this.dispatchEvent(customEvent);
    }

    createCustomChangeEvent(value) {
        const detail = { value };

        return new CustomEvent('change', {
            bubbles: true,
            composed: true,
            detail
        });
    }

    handleFocus() {
        this.interactingState.enter();
        this.dispatchEvent(new CustomEvent('focus'));
    }

    handleBlur() {
        this.interactingState.leave();
        this.dispatchEvent(new CustomEvent('blur'));
    }

    handleTouchMove(event) {
        event.stopPropagation();
    }

    get inputElement() {
        return this.template.querySelector('input');
    }

    get computedAriaDescribedBy() {
        return this._helpMessage ? this.computedUniqueHelpElementId : null;
    }

    _updateProxyInputAttributes(attributes) {
        if (this._constraintApiProxyInputUpdater) {
            this._constraintApiProxyInputUpdater(attributes);
        }
    }

    get _constraint() {
        if (!this._constraintApi) {
            this._constraintApi = new FieldConstraintApiWithProxyInput(
                () => this
            );

            this._constraintApiProxyInputUpdater = this._constraint.setInputAttributes(
                {
                    type: () => 'range',
                    value: () => this.value,
                    max: () => this.max,
                    min: () => this.min,
                    step: () => this.step,
                    disabled: () => this.disabled
                }
            );
        }
        return this._constraintApi;
    }
}

cSlider.interopMap = {
    exposeNativeEvent: {
        change: true,
        focus: true,
        blur: true
    }
};
