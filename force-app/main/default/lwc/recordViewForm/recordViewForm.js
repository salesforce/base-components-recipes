/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import labelApiNameMismatch from '@salesforce/label/c.lightning_LightningRecordEditForm_apiNameMismatch';
import labelInvalidId from '@salesforce/label/c.lightning_LightningRecordEditForm_invalidID';
import { LightningElement, api, track, wire } from 'lwc';
import { getRecordUi } from 'lightning/uiRecordApi';

import {
    getFieldSet,
    createErrorEvent,
    densityValues,
    labelAlignValues
} from 'c/fieldUtils';
import { normalizeRecordId } from 'c/recordUtils';
import { debounce } from 'c/inputUtils';
import { arraysEqual } from 'c/utilsPrivate';
import {
    doNormalization,
    resetResizeObserver,
    setLabelAlignment,
    disconnectResizeObserver
} from 'c/formDensityUtilsPrivate';

export default class cRecordViewForm extends LightningElement {
    optionalFields = [];
    fieldSet;

    _recordId;
    _wiredRecordId;
    _objectApiName;
    _recordUi;

    _density = densityValues.AUTO;
    _fieldLabelAlignment = labelAlignValues.HORIZONTAL;
    _initialRender = true;

    @track recordUi;

    constructor() {
        super();
        this.fieldSet = getFieldSet(this.objectApiName || '');
        this._formLayoutInterface = this.formLayoutInterface();
    }

    connectedCallback() {
        if (!this.recordId) {
            this.displayWarning(
                'record id is required but is currently undefined or null'
            );
        }

        if (!this.objectApiName) {
            this.displayWarning(
                'API name is required but is currently undefined or null'
            );
        }
    }

    disconnectedCallback() {
        disconnectResizeObserver(this);
    }

    renderedCallback() {
        if (this._initialRender) {
            setLabelAlignment(this._formLayoutInterface);
            resetResizeObserver(
                this,
                this._formLayoutInterface,
                this._initialRender
            );
        }
        this._initialRender = false;
    }

    @api get density() {
        return this._density;
    }

    set density(val) {
        doNormalization(val, this._formLayoutInterface);
        if (!this._initialRender) {
            resetResizeObserver(this, this._formLayoutInterface);
        }
    }

    set recordId(value) {
        if (!value) {
            this.displayWarning(
                'record id is required but is currently undefined or null'
            );

            this._recordId = value;
            this._wiredRecordId = this._recordId;
            this.wireViewData(null);
            return;
        }

        this._recordId = normalizeRecordId(value);
        if (!this._recordId) {
            const error = { message: labelInvalidId };
            this.handleError(error);

            return;
        }

        if (this.objectApiName) {
            this._wiredRecordId = [this._recordId];
        }
    }

    @api get recordId() {
        return this._recordId;
    }

    set objectApiName(value) {
        let apiName;
        if (value && value.objectApiName) {
            apiName = value.objectApiName;
        } else {
            apiName = value;
        }
        this._objectApiName = apiName;

        if (!apiName) {
            this.displayWarning(
                'API Name is required but is currently undefined or null'
            );

            return;
        }

        this.fieldSet.objectApiName = apiName || '';
        this.handlePersonAccounts();

        this.optionalFields = this.fieldSet.getList();
        if (this.recordId) {
            this._wiredRecordId = [this.recordId];
        }
    }

    @api get objectApiName() {
        return this._objectApiName;
    }

    @wire(getRecordUi, {
        recordIds: '$_wiredRecordId',
        layoutTypes: ['Full'],
        modes: ['View'],
        optionalFields: '$optionalFields'
    })
    wiredRecordUi(value) {
        this.handleData(value);
    }

    handleData({ error, data }) {
        if (error) {
            this.handleError(error);
            return;
        } else if (!data || !this.recordId) {
            return;
        }

        const record = data.records[this.recordId];
        if (record.apiName !== this.objectApiName) {
            const message = labelApiNameMismatch
                .replace('{0}', this.objectApiName)
                .replace('{1}', record.apiName);
            this.handleError({ message });
            return;
        }
        const viewData = {
            record,
            objectInfo: data.objectInfos[record.apiName],
            labelAlignment: this._fieldLabelAlignment
        };

        this.wireViewData(viewData);
        this.dispatchEvent(
            new CustomEvent('load', {
                detail: data
            })
        );
    }

    handleError(error) {
        this.dispatchEvent(createErrorEvent(error));
    }

    registerOptionalFields = debounce((fields) => {
        this.optionalFields = fields;
    }, 0);

    handleRegisterOutputField() {
        this.fieldSet.concat(this.getFields());

        if (this.objectApiName) {
            this.handlePersonAccounts();
            const newList = this.fieldSet.getList().sort();
            if (!arraysEqual(newList, this.optionalFields)) {
                this.registerOptionalFields(newList);
            } else if (this._recordUi) {
                this.wireViewData(this._recordUi);
            }
        }
    }

    handlePersonAccounts() {
        if (
            this.objectApiName === 'Account' ||
            this.objectApiName === 'PersonAccount'
        ) {
            this.fieldSet.add('IsPersonAccount');
        }
    }

    getFields() {
        const fields = this.getOutputFieldComponents();

        return Array.prototype.map.call(fields, (field) => {
            return field.fieldName;
        });
    }

    getOutputFieldComponents() {
        return this.querySelectorAll('c-output-field');
    }

    displayWarning(message) {
        // eslint-disable-next-line no-console
        console.warn(message);
    }

    wireViewData(viewData) {
        this._recordUi = viewData;
        this.getOutputFieldComponents().forEach((outputField) => {
            outputField.wireRecordUi(viewData);
        });
    }

    formLayoutInterface() {
        const that = this;
        return {
            getDensityPrivate() {
                return that._density;
            },
            setDensityPrivate(value) {
                that._density = value;
            },
            getDensity() {
                return that.density;
            },
            getLabelAlignmentPrivate() {
                return that._fieldLabelAlignment;
            },
            getContainerElement() {
                return that.template.querySelector('div');
            },
            getInputOutputFields() {
                return that.getOutputFieldComponents();
            },
            setLabelAlignmentPrivate(value) {
                that._fieldLabelAlignment = value;
            },
            getRecordUi() {
                return that._recordUi;
            },
            getResizeObserverCallback(callback) {
                return () => {
                    callback(that._formLayoutInterface);
                };
            }
        };
    }
}
