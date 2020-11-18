/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api, track } from 'lwc';
import {
    getUiField,
    Fields,
    isCompoundField,
    isPersonAccount
} from 'c/fieldUtils';
import { normalizeVariant, VARIANT } from 'c/inputUtils';
import { classListMutation } from 'c/utilsPrivate';

const STATE_FIELD = 'State';
const COUNTRY_FIELD = 'Country';
const STATE_CODE_FIELD = 'StateCode';
const COUNTRY_CODE_FIELD = 'CountryCode';
const SLDS_FIELD_CLASS = 'slds-form-element__static';

export default class cOutputField extends LightningElement {
    @track computedFieldClass = SLDS_FIELD_CLASS;
    @track _fieldName;
    @track _label = '';

    _rawFieldName;
    _labelAlignment = 'stacked';

    @track _variant;
    _rawVariant;

    set fieldClass(val) {
        this.computedFieldClass = `${val} ${SLDS_FIELD_CLASS}`;
    }

    @api get fieldClass() {
        return this.computedFieldClass;
    }

    @api get variant() {
        return this._variant || VARIANT.STANDARD;
    }

    set variant(value) {
        this._rawVariant = value;
        this._variant = normalizeVariant(value);
        this.updateClassList();
    }

    set fieldName(value) {
        this._rawFieldName = value;
        this._fieldName =
            value && value.fieldApiName ? value.fieldApiName : value;
    }

    @api get fieldName() {
        return this._fieldName;
    }

    setReady() {
        this.classList.remove('slds-hide');
    }

    connectedCallback() {
        this.classList.add('slds-form-element', 'slds-hide');
        this.updateClassList();
    }

    updateClassList() {
        classListMutation(this.classList, {
            'slds-form-element_stacked': this.isStackedLabel(),
            'slds-form-element_horizontal': this.isHorizontalLabel()
        });
    }

    isStackedLabel() {
        return (
            (this._labelAlignment === 'stacked' && !this._rawVariant) ||
            this._rawVariant === VARIANT.LABEL_STACKED
        );
    }

    isHorizontalLabel() {
        return (
            (this._labelAlignment === 'horizontal' && !this._rawVariant) ||
            this._rawVariant === VARIANT.LABEL_INLINE
        );
    }

    @track uiField = {};

    renderedCallback() {
        if (!this.uiField.type) {
            this.dispatchEvent(
                // eslint-disable-next-line lightning-global/no-custom-event-bubbling
                new CustomEvent('registeroutputfield', {
                    bubbles: true,
                    composed: true,
                    cancelable: true
                })
            );
        }
    }

    updateFieldInfo(record, objectInfo) {
        try {
            const fieldData = getUiField(this.fieldName, record, objectInfo);
            this.uiField = fieldData;
        } catch (e) {
            console.warn(e); // eslint-disable-line no-console
            return;
        }
        this.setReady();
    }

    @api
    wireRecordUi(data) {
        if (
            this._rawFieldName &&
            data.objectInfo &&
            this._rawFieldName.objectApiName &&
            this._rawFieldName.objectApiName !== data.objectInfo.apiName
        ) {
            throw new Error(
                `objectApiName (${this._rawFieldName.objectApiName}) for field ${this.fieldName} does not match the objectApiName provided for the form (${data.objectInfo.apiName}).`
            );
        }
        this.updateFieldInfo(data.record, data.objectInfo);
        this.isCompoundField = isCompoundField(
            this.fieldName,
            data.objectInfo,
            isPersonAccount(data.record)
        );

        this._labelAlignment = data.labelAlignment
            ? data.labelAlignment
            : 'stacked';
        this.updateFieldLabel(data.layoutFieldData);
        this.updateClassList();
    }

    updateFieldLabel(layoutData = {}) {
        const layoutLabel =
            layoutData[this.fieldName] && layoutData[this.fieldName].label;
        this._label = layoutLabel || this.uiField.label;
    }

    get showLabel() {
        return this.variant !== VARIANT.LABEL_HIDDEN;
    }

    get showInlineHelpText() {
        return this.inlineHelpText && this.inlineHelpText.trim() !== '';
    }

    get fieldLabel() {
        return this._label;
    }

    get displayValue() {
        if (this.uiField.displayValue == null) {
            return this.value;
        }

        let displayValue;
        if (this.isTypeAddress) {
            displayValue = this.normalizeAddressValue(
                this.uiField.displayValue
            );
        } else {
            displayValue = this.uiField.displayValue;
        }

        if (typeof this.uiField.displayValue === 'object') {
            return Object.assign({}, this.value, displayValue);
        }

        return displayValue;
    }

    get value() {
        if (this.isTypeAddress) {
            return this.normalizeAddressValue(this.uiField.value);
        }
        return this.uiField.value;
    }

    get scale() {
        return this.uiField.scale;
    }

    get latitude() {
        return this.uiField.value.latitude;
    }

    get longitude() {
        return this.uiField.value.longitude;
    }

    get inlineHelpText() {
        return this.uiField.inlineHelpText;
    }

    get dateValue() {
        const date = new Date(this.uiField.value);
        return date.getTime();
    }

    get isTypeString() {
        return (
            Fields.STRING === this.uiField.type &&
            !this.uiField.htmlFormatted &&
            !this.isCompoundField
        );
    }

    get isTypeReference() {
        return Fields.REFERENCE === this.uiField.type;
    }

    get isTypeBoolean() {
        return Fields.BOOLEAN === this.uiField.type;
    }

    get isTypeCurrency() {
        return Fields.CURRENCY === this.uiField.type;
    }

    get isTypeDate() {
        return Fields.DATE === this.uiField.type;
    }

    get isTypeDateTime() {
        return Fields.DATETIME === this.uiField.type;
    }

    get isTypeEmail() {
        return Fields.EMAIL === this.uiField.type;
    }

    get isTypeLocation() {
        return Fields.LOCATION === this.uiField.type;
    }

    get isTypeInt() {
        return Fields.INT === this.uiField.type;
    }

    get isTypeDouble() {
        return Fields.DOUBLE === this.uiField.type;
    }

    get isTypePercent() {
        return Fields.PERCENT === this.uiField.type;
    }

    get isTypePhone() {
        return Fields.PHONE === this.uiField.type;
    }

    get isTypePicklist() {
        return Fields.PICKLIST === this.uiField.type;
    }

    get isTypeMultiPicklist() {
        return Fields.MULTI_PICKLIST === this.uiField.type;
    }

    get isTypeTextArea() {
        return (
            Fields.TEXTAREA === this.uiField.type &&
            Fields.PLAIN_TEXTAREA === this.uiField.extraTypeInfo &&
            !this.uiField.htmlFormatted
        );
    }

    get isTypeRichText() {
        return (
            (Fields.TEXTAREA === this.uiField.type &&
                Fields.RICH_TEXTAREA === this.uiField.extraTypeInfo) ||
            (Fields.STRING === this.uiField.type && this.uiField.htmlFormatted)
        );
    }

    get isTypeEncryptedString() {
        return Fields.ENCRYPTED_STRING === this.uiField.type;
    }

    get isTypeUrl() {
        return this.uiField.type === Fields.URL;
    }

    get isTypeName() {
        return (
            this.isCompoundField &&
            (Fields.PERSON_NAME === this.uiField.extraTypeInfo ||
                Fields.SWITCHABLE_PERSON_NAME === this.uiField.extraTypeInfo)
        );
    }

    get isTypeAddress() {
        return this.uiField.compound && Fields.ADDRESS === this.uiField.type;
    }

    getStateCountryValue(fieldValue, fieldName) {
        const codeFieldName = `${fieldName}Code`;

        if (codeFieldName in fieldValue) {
            return fieldValue[codeFieldName];
        }

        return fieldValue[fieldName];
    }

    normalizeAddressValue(value) {
        const prefix = this.getFieldPrefix();

        return Object.keys(value).reduce((ret, rawKey) => {
            const key = this.removePrefix(rawKey, prefix);

            if (key === STATE_FIELD || key === STATE_CODE_FIELD) {
                ret[STATE_FIELD] = this.getStateCountryValue(value, rawKey);
            } else if (key === COUNTRY_FIELD || key === COUNTRY_CODE_FIELD) {
                ret[COUNTRY_FIELD] = this.getStateCountryValue(value, rawKey);
            } else {
                ret[key] = value[rawKey];
            }

            return ret;
        }, {});
    }

    getFieldPrefix() {
        if (!this.fieldPrefix) {
            this.fieldPrefix = this.fieldName.split(/Address$/)[0];
        }
        return this.fieldPrefix;
    }

    removePrefix(str, prefix) {
        return prefix ? str.replace(prefix, '') : str;
    }
}
