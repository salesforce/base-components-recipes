/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import labelApiNameMismatch from '@salesforce/label/c.lightning_LightningRecordEditForm_apiNameMismatch';
import labelInvalidId from '@salesforce/label/c.lightning_LightningRecordEditForm_invalidID';
import { LightningElement, api, track, wire } from 'lwc';
import { getRecordUi, getRecordCreateDefaults } from 'lightning/uiRecordApi';
import { getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import {
    createOrSaveRecord,
    getFormValues,
    getFieldSet,
    createErrorEvent,
    filterByPicklistsInForm,
    formHasPicklists,
    getRecordTypeId,
    validateForm
} from 'c/recordEditUtils';
import {
    densityValues,
    labelAlignValues,
    getFieldsForLayout
} from 'c/fieldUtils';
import {
    doNormalization,
    resetResizeObserver,
    setLabelAlignment,
    disconnectResizeObserver
} from 'c/formDensityUtilsPrivate';
import { debounce } from 'c/inputUtils';
import { deepCopy, arraysEqual } from 'c/utilsPrivate';

import { normalizeRecordId } from 'c/recordUtils';
import { DependencyManager } from 'c/fieldDependencyManager';

export default class cRecordEditForm extends LightningElement {
    @api fieldNames;

    @api recordTypeId;

    @api formClass;

    optionalFields = [];
    fieldSet;
    _recordId;
    _layout;
    _pendingAction = false;
    _wiredApiName = null;
    _wiredRecordId = null;
    _wiredLayoutTypes = null;
    _createMode = false;
    _layoutMode = false;
    _objectApiName = null;
    _connected = false;
    _recordIdError = false;
    _rendered = false;
    _pendingError;
    _inServerErrorState = false;

    _density = densityValues.AUTO;
    _fieldLabelAlignment = labelAlignValues.HORIZONTAL;
    _initialRender = true;

    _wiredPicklistApiName = null;
    _wiredRecordTypeId = null;

    @track recordUi;
    @track errors;

    _fields;
    _inputComponents;

    checkMode() {
        if (this._recordId) {
            this._createMode = false;

            this._wiredRecordId = [this._recordId];
            this._wiredApiName = null;
        } else if (!this._recordIdError && this.objectApiName) {
            this._createMode = true;

            this._wiredApiName = this.objectApiName;
            this._wiredRecordId = null;
        }

        if (this._layout) {
            this._wiredLayoutTypes = [this._layout];
            this._layoutMode = true;
        } else {
            this._layoutMode = false;
            this._wiredLayoutTypes = ['Full'];
        }
    }

    constructor() {
        super();
        this._formLayoutInterface = this.formLayoutInterface();
    }

    connectedCallback() {
        this.fieldSet = getFieldSet(this.objectApiName);

        if (
            this.objectApiName === 'Account' ||
            this.objectApiName === 'PersonAccount'
        ) {
            this.fieldSet.add('IsPersonAccount');
        }

        this.checkMode();

        this._connected = true;
    }

    disconnectedCallback() {
        this._connected = false;
        disconnectResizeObserver(this);
    }

    renderedCallback() {
        this._rendered = true;
        if (this._pendingError) {
            this.handleErrors(this._pendingError);
        }
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

    set layoutType(val) {
        this._layout = val;
        this.checkMode();
    }

    @api get layoutType() {
        return this._layout;
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

    set recordId(id) {
        if (!id) {
            this._createMode = true;
            this._recordId = null;
        }
        this._recordId = normalizeRecordId(id);
        if (!this._recordId && !this._createMode) {
            const error = { message: labelInvalidId };
            this.handleErrors(error);
            this._recordIdError = true;
            return;
        }
        this._recordIdError = false;

        this._wiredApiName = null;
        this._createMode = false;
        this._wiredRecordId = [this._recordId];
        if (this._connected) {
            this.checkMode();
        }
    }

    @api get recordId() {
        return this._recordId;
    }

    set objectApiName(val) {
        let apiName;

        if (val.objectApiName) {
            apiName = val.objectApiName;
        } else {
            apiName = val;
        }
        this._objectApiName = apiName;
        if (this.fieldSet) {
            this.fieldSet.objectApiName = apiName;
        }
        if (this._connected) {
            this.checkMode();
        }
    }

    @api get objectApiName() {
        return this._objectApiName;
    }

    @wire(getRecordUi, {
        recordIds: '$_wiredRecordId',
        layoutTypes: '$_wiredLayoutTypes',
        modes: ['View'],
        optionalFields: '$optionalFields'
    })
    wiredRecordUi(value) {
        this.handleData(value);
    }

    @wire(getRecordCreateDefaults, {
        objectApiName: '$_wiredApiName',
        recordTypeId: '$recordTypeId',
        optionalFields: '$optionalFields'
    })
    wiredRecordCreateDefaults(value) {
        this.handleData(value);
    }

    @wire(getPicklistValuesByRecordType, {
        objectApiName: '$_wiredPicklistApiName',
        recordTypeId: '$_wiredRecordTypeId'
    })
    wiredPicklistValuesByRecordType(value) {
        this.handlePicklistValues(value);
    }

    handleChange() {
        if (!this._inServerErrorState) {
            return;
        }

        this.inServerErrorState = false;
        const inputComponents = this.getInputFieldComponents();

        inputComponents.forEach((field) => {
            field.setErrors({});
        });
    }

    handleData({ error, data }) {
        if (error) {
            this.handleErrors(error);
            return;
        } else if (!data) {
            return;
        }

        this.wiredRecord = data;
        const record = data.records
            ? data.records[this._recordId]
            : data.record;

        if (record.apiName !== this.objectApiName) {
            const message = labelApiNameMismatch
                .replace('{0}', this.objectApiName)
                .replace('{1}', record.apiName);
            this.handleErrors({ message });
            return;
        }

        const layoutFieldData = getFieldsForLayout(
            data,
            this.objectApiName,
            this._layout
        );

        const viewData = {
            record,
            objectInfo: data.objectInfos[this.objectApiName],
            objectInfos: data.objectInfos,
            createMode: !this._recordId,
            labelAlignment: this._fieldLabelAlignment,
            layoutFieldData
        };

        this.recordUi = viewData;
        this.getInputAndOutputComponents().forEach((field) => {
            field.wireRecordUi(viewData);
        });

        if (formHasPicklists(viewData.objectInfo, this.optionalFields)) {
            this.triggerPicklistWire();
        } else {
            this.dispatchLoadEvent();
        }
    }

    triggerPicklistWire() {
        const oldRecordTypeId = this._wiredRecordTypeId;
        const oldObjectApiName = this._wiredPicklistApiName;

        this._wiredPicklistApiName = this.objectApiName;

        this._wiredRecordTypeId =
            this.recordTypeId || getRecordTypeId(this.recordUi);

        if (
            oldObjectApiName === this._wiredPicklistApiName &&
            oldRecordTypeId === this._wiredRecordTypeId
        ) {
            this.handlePicklistValues(this._picklistValues);
        }
    }

    handlePicklistValues(value) {
        this._picklistValues = value;
        const { error, data } = value;

        if (error) {
            this.handleErrors(error);
        }

        if (!data) {
            return;
        }

        const filteredPicklistValues = filterByPicklistsInForm(
            this.recordUi.objectInfo,
            data.picklistFieldValues || data,
            this.optionalFields
        );

        this._picklistValuesInForm = filteredPicklistValues;

        this.initDependencyManager({
            dependentFields: this.recordUi.objectInfo.dependentFields,
            picklistValues: filteredPicklistValues
        });

        this.getInputFieldComponents().forEach((field) => {
            field.wirePicklistValues(filteredPicklistValues);
        });

        this.dispatchLoadEvent();
    }

    validateForm() {
        const cmps = this.getInputFieldComponents();
        return validateForm(cmps);
    }

    @api
    submit(fields) {
        this.doSubmit(fields).catch((err) => {
            this.handleErrors(err);
        });
    }

    doSubmit(fields) {
        return new Promise((resolve, reject) => {
            this._pendingAction = true;
            const originalRecord = this._createMode
                ? null
                : this.recordUi.record;
            const newRecord = {
                fields: fields ? fields : this.getFormValues(),

                apiName: this._createMode ? this._objectApiName : null
            };

            if (this.recordTypeId) {
                newRecord.fields.RecordTypeId = this.recordTypeId;
            }

            createOrSaveRecord(
                newRecord,
                originalRecord,
                this.recordUi.objectInfo
            ).then(
                (savedRecord) => {
                    this._pendingAction = false;
                    const lightningMessages = this.querySelector('c-messages');

                    if (lightningMessages) {
                        lightningMessages.setError(null);
                    }

                    this.cleanFields();

                    this.dispatchEvent(
                        // eslint-disable-next-line lightning-global/no-custom-event-bubbling
                        new CustomEvent('success', {
                            composed: true,
                            bubbles: true,
                            detail: savedRecord
                        })
                    );

                    resolve();
                },
                (err) => {
                    this._pendingAction = false;
                    reject(err);
                }
            );
        });
    }

    getFormValues() {
        return getFormValues(this.getInputFieldComponents());
    }

    handleError(err) {
        err.stopPropagation();
        this.handleErrors(err.detail.error);
    }

    handleErrors(error) {
        const messages = this.querySelector('c-messages');
        const err = deepCopy(error);

        if (!this._rendered) {
            this._pendingError = err;
            return;
        }
        this._pendingError = null;
        const inputComponents = this.getInputFieldComponents();
        if (err.body && err.body.output && err.body.output.fieldErrors) {
            this._inServerErrorState = true;
            const fieldNames = inputComponents.map((field) => {
                return field.fieldName;
            });
            Object.keys(err.body.output.fieldErrors).forEach((field) => {
                if (fieldNames.indexOf(field) === -1) {
                    err.body.detail =
                        err.body.output.fieldErrors[field][0].message;
                }
            });
        }
        if (messages) {
            messages.setError(err);
        }

        inputComponents.forEach((field) => {
            field.setErrors(err);
        });

        this.dispatchEvent(createErrorEvent(err));
    }

    dispatchLoadEvent() {
        this.dispatchEvent(
            new CustomEvent('load', {
                detail: {
                    ...this.wiredRecord,
                    picklistValues: this._picklistValuesInForm
                }
            })
        );
    }

    rewireData = debounce(() => {
        this.handleData({ data: this.wiredRecord });
    }, 0);

    registerOptionalFields = debounce((fields) => {
        this.optionalFields = fields;
    }, 0);

    handleRegister() {
        if (this.fieldSet) {
            this.fieldSet.concat(this.getFields());
            const newList = this.fieldSet.getList().sort();
            if (!arraysEqual(newList, this.optionalFields)) {
                this.registerOptionalFields(newList);
            } else {
                this.rewireData();
            }
        }
    }

    registerDependentField(e) {
        e.stopPropagation();

        const { fieldName, fieldElement } = e.detail;
        this._depManager.registerField({ fieldName, fieldElement });
    }

    updateDependentFields(e) {
        e.stopPropagation();

        if (this._depManager) {
            this._depManager.handleFieldValueChange(
                e.detail.fieldName,
                e.detail.value
            );
        }
    }

    handleSubmit(e) {
        const eventHasNoTarget = e.target === undefined || e.target === null;

        if (eventHasNoTarget || e.target.type !== 'submit') {
            return;
        }

        e.preventDefault();
        e.stopPropagation();

        if (!this.recordUi) {
            return;
        }

        if (!this.validateForm()) {
            const form = this.template.querySelector('form');

            if (form.reportValidity) {
                form.reportValidity();
            }

            return;
        }

        const fields = JSON.parse(JSON.stringify(this.getFormValues()));

        // eslint-disable-next-line lightning-global/no-custom-event-bubbling
        const evt = new CustomEvent('submit', {
            composed: true,
            bubbles: true,
            cancelable: true,
            detail: { fields }
        });

        this.dispatchEvent(evt);

        // eslint-disable-next-line @lwc/lwc/no-async-operation
        setTimeout(() => {
            if (this._pendingAction) {
                return;
            }
            if (evt.defaultPrevented) {
                return;
            }

            this._pendingAction = true;
            this.doSubmit().catch((err) => {
                this.handleErrors(err);
            });
        }, 0);
    }

    getInputFieldComponents() {
        return [...this.querySelectorAll('lightning-input-field')];
    }

    getInputAndOutputComponents() {
        return [
            ...this.querySelectorAll('lightning-input-field,c-output-field')
        ];
    }

    getFields() {
        return this.getInputAndOutputComponents().map((field) => {
            return field.fieldName;
        });
    }

    initDependencyManager(dependencyInfo) {
        if (!this._depManager) {
            this._depManager = new DependencyManager(dependencyInfo);
        } else {
            this._depManager.registerDependencyInfo(dependencyInfo);
        }
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
                return that.template.querySelector('form');
            },
            getInputOutputFields() {
                return that.getInputAndOutputComponents();
            },
            setLabelAlignmentPrivate(value) {
                that._fieldLabelAlignment = value;
            },
            getRecordUi() {
                return that.recordUi;
            },
            getResizeObserverCallback(callback) {
                return () => {
                    callback(that._formLayoutInterface);
                };
            }
        };
    }

    cleanFields() {
        this.getInputFieldComponents().forEach((inputField) => {
            inputField.clean();
        });
    }
}
