/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api, track } from 'lwc';

export default class Input extends LightningElement {
    @api accept;
    @api autocomplete;
    @api checked;
    @api dateAriaControls;
    @api dateAriaDescribedBy;
    @api dateAriaLabel;
    @api dateAriaLabelledBy;
    @api dateStyle;

    @api get disabled() {
        return this._disabled;
    }

    set disabled(value) {
        this._disabled = value;
    }

    @api fieldLevelHelp;
    @api files;
    @api formatFractionDigits;
    @api formatter;
    @api isLoading;
    @api label;
    @api max;
    @api maxLength;
    @api messageToggleActive;
    @api messageToggleInactive;
    @api messageWhenBadInput;
    @api messageWhenPatternMismatch;
    @api messageWhenRangeOverflow;
    @api messageWhenRangeUnderflow;
    @api messageWhenStepMismatch;
    @api messageWhenTooLong;
    @api messageWhenTooShort;
    @api messageWhenTypeMismatch;
    @api messageWhenValueMissing;
    @api min;
    @api minLength;
    @api multiple;
    @api name;
    @api pattern;
    @api placeholder;

    @api get readOnly() {
        return this._readOnly;
    }

    set readOnly(value) {
        this._readOnly = value;
    }

    @api get required() {
        return this._required;
    }

    set required(value) {
        this._required = value;
    }

    @api step;
    @api timeAriaControls;
    @api timeAriaDescribedBy;
    @api timeAriaLabelledBy;
    @api timeStyle;
    @api timezone;
    @api type;
    @api validity;

    @api get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }

    @api variant;

    @api
    focus() {
        this.template.querySelector('input').focus();
    }

    @api
    blur() {
        this.template.querySelector('input').blur();
    }

    @track _disabled = false;
    @track _readOnly = false;
    @track _required = false;
    @track _value = '';
}
