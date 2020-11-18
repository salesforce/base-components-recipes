/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/recordForm';
import store from './mockdata.json';
import accountStore from './mockBusinessAndPersonAccountData.json';
import {
    shadowQuerySelector,
    shadowQuerySelectorAll
} from 'lightning/testUtils';

const createForm = (props = {}) => {
    const element = createElement('c-record-form', { is: Element });
    Object.assign(element, props);
    document.body.appendChild(element);
    return element;
};

function destroyAllForms() {
    while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild);
    }
}

function checkNodeListLength(list, length) {
    expect(Array.prototype.slice.call(list)).toHaveLength(length);
}

describe('record form', () => {
    afterEach(() => {
        destroyAllForms();
    });

    it('converts listed field to input fields', () => {
        const element = createForm({
            objectApiName: 'Lead',
            fields: ['Name']
        });

        return Promise.resolve().then(() => {
            const form = shadowQuerySelector(element, 'c-record-edit-form');

            form.dispatchEvent(
                new CustomEvent('load', {
                    detail: {
                        objectInfos: store.objectInfos,
                        layout: store.layouts.Lead.Full.View,
                        record: store.records.LEADDEFAULTS
                    }
                })
            );

            return Promise.resolve().then(() => {
                const inputFields = shadowQuerySelectorAll(
                    element,
                    'lightning-input-field'
                );

                expect(inputFields[0].fieldName).toBe('Name');
            });
        });
    });

    it('reacts to changes in field list (removing fields)', () => {
        const element = createForm({
            objectApiName: 'Lead',
            fields: ['Name', 'Company']
        });

        return Promise.resolve().then(() => {
            const form = shadowQuerySelector(element, 'c-record-edit-form');

            form.dispatchEvent(
                new CustomEvent('load', {
                    detail: {
                        objectInfos: store.objectInfos,
                        layout: store.layouts.Lead.Full.View,
                        record: store.records.LEADDEFAULTS
                    }
                })
            );

            return Promise.resolve().then(() => {
                element.fields = ['Name'];
                return Promise.resolve().then(() => {
                    const inputFields = shadowQuerySelectorAll(
                        element,
                        'lightning-input-field,c-output-field'
                    );

                    expect(inputFields).toHaveLength(1);
                });
            });
        });
    });

    it('reacts to changes in field list (adding fields)', () => {
        const element = createForm({
            objectApiName: 'Lead',
            fields: ['Name']
        });

        return Promise.resolve().then(() => {
            const form = shadowQuerySelector(element, 'c-record-edit-form');

            form.dispatchEvent(
                new CustomEvent('load', {
                    detail: {
                        objectInfos: store.objectInfos,
                        layout: store.layouts.Lead.Full.View,
                        record: store.records.LEADDEFAULTS
                    }
                })
            );

            return Promise.resolve().then(() => {
                element.fields = ['Name', 'Company'];
                return Promise.resolve().then(() => {
                    const inputFields = shadowQuerySelectorAll(
                        element,
                        'lightning-input-field,c-output-field'
                    );

                    expect(inputFields).toHaveLength(2);
                });
            });
        });
    });

    it('converts listed field to input field with object api name reference', () => {
        const element = createForm({
            objectApiName: { objectApiName: 'Lead' },
            fields: ['Name']
        });

        return Promise.resolve().then(() => {
            const form = shadowQuerySelector(element, 'c-record-edit-form');

            form.dispatchEvent(
                new CustomEvent('load', {
                    detail: {
                        objectInfos: store.objectInfos,
                        layout: store.layouts.Lead.Full.View,
                        record: store.records.LEADDEFAULTS
                    }
                })
            );

            return Promise.resolve().then(() => {
                const inputFields = shadowQuerySelectorAll(
                    element,
                    'lightning-input-field,c-output-field'
                );

                expect(inputFields[0].fieldName).toBe('Name');
            });
        });
    });

    it('converts listed fields in order to input fields', () => {
        const fields = ['Name', 'Company', 'Phone'];
        const element = createForm({
            objectApiName: 'Lead',
            fields
        });

        return Promise.resolve().then(() => {
            const form = shadowQuerySelector(element, 'c-record-edit-form');

            form.dispatchEvent(
                new CustomEvent('load', {
                    detail: {
                        objectInfos: store.objectInfos,
                        layout: store.layouts.Lead.Full.View,
                        record: store.records.LEADDEFAULTS
                    }
                })
            );

            return Promise.resolve().then(() => {
                const inputFields = shadowQuerySelectorAll(
                    element,
                    'lightning-input-field,c-output-field'
                );

                const fieldNames = Array.prototype.slice
                    .call(inputFields)
                    .map((field) => {
                        return field.fieldName;
                    });
                expect(fieldNames).toEqual(fields);
            });
        });
    });

    it('converts listed field references in order to input fields', () => {
        const fields = [
            { fieldApiName: 'Name', objectApiName: 'Lead' },
            { fieldApiName: 'Company', objectApiName: 'Lead' },
            { fieldApiName: 'Phone', objectApiName: 'Lead' }
        ];

        const element = createForm({
            objectApiName: 'Lead',
            fields
        });

        return Promise.resolve().then(() => {
            const form = shadowQuerySelector(element, 'c-record-edit-form');

            form.dispatchEvent(
                new CustomEvent('load', {
                    detail: {
                        objectInfos: store.objectInfos,
                        layout: store.layouts.Lead.Full.View,
                        record: store.records.LEADDEFAULTS
                    }
                })
            );

            return Promise.resolve().then(() => {
                const inputFields = shadowQuerySelectorAll(
                    element,
                    'lightning-input-field,c-output-field'
                );

                const fieldNames = Array.prototype.slice
                    .call(inputFields)
                    .map((field) => {
                        return field.fieldName;
                    });
                expect(fieldNames).toEqual(
                    fields.map((field) => {
                        return field.fieldApiName;
                    })
                );
            });
        });
    });

    it('passes the layout through to record edit form', () => {
        const element = createForm({
            objectApiName: 'Opportunity',
            layoutType: 'Full'
        });

        return Promise.resolve().then(() => {
            const form = shadowQuerySelector(element, 'c-record-edit-form');

            expect(form.layoutType).toEqual('Full');
        });
    });

    it('gets fieldnames from the layout when a layout is provided for create', () => {
        const element = createForm({
            objectApiName: 'Lead',
            layoutType: 'Full'
        });

        return Promise.resolve().then(() => {
            const fields = [
                'OwnerId',
                'Status',
                'Name',
                'Phone',
                'Company',
                'Email',
                'Title',
                'Rating',
                'Address',
                'Website',
                'AnnualRevenue',
                'Description'
            ];

            const form = shadowQuerySelector(element, 'c-record-edit-form');

            form.dispatchEvent(
                new CustomEvent('load', {
                    detail: {
                        objectInfos: store.objectInfos,
                        layout: store.layouts.Lead.Full.View,
                        record: store.records.LEADDEFAULTS
                    }
                })
            );

            return Promise.resolve().then(() => {
                const inputFields = shadowQuerySelectorAll(
                    element,
                    'lightning-input-field,c-output-field'
                );

                const fieldNames = Array.prototype.slice
                    .call(inputFields)
                    .map((field) => {
                        return field.fieldName;
                    });
                expect(fieldNames).toEqual(fields);
            });
        });
    });

    it('gets fieldnames from the layout when a layout is provided for edit', () => {
        const element = createForm({
            objectApiName: 'Lead',
            layoutType: 'Full'
        });

        const layouts = { Lead: {} };

        layouts.Lead.abcdefg = Object.assign({}, store.layouts.Lead);
        return Promise.resolve().then(() => {
            const fields = [
                'OwnerId',
                'Status',
                'Name',
                'Phone',
                'Company',
                'Email',
                'Title',
                'Rating',
                'Address',
                'Website',
                'AnnualRevenue',
                'Description'
            ];

            const form = shadowQuerySelector(element, 'c-record-edit-form');

            form.dispatchEvent(
                new CustomEvent('load', {
                    detail: {
                        objectInfos: store.objectInfos,
                        layouts,
                        record: store.records.LEADDEFAULTS
                    }
                })
            );

            return Promise.resolve().then(() => {
                const inputFields = shadowQuerySelectorAll(
                    element,
                    'lightning-input-field,c-output-field'
                );

                const fieldNames = Array.prototype.slice
                    .call(inputFields)
                    .map((field) => {
                        return field.fieldName;
                    });
                expect(fieldNames).toEqual(fields);
            });
        });
    });

    it('gets fieldNames for layout with object references for api name', () => {
        const element = createForm({
            objectApiName: { objectApiName: 'Lead' },
            layoutType: 'Full'
        });

        const layouts = { Lead: {} };

        layouts.Lead.abcdefg = Object.assign({}, store.layouts.Lead);
        return Promise.resolve().then(() => {
            const fields = [
                'OwnerId',
                'Status',
                'Name',
                'Phone',
                'Company',
                'Email',
                'Title',
                'Rating',
                'Address',
                'Website',
                'AnnualRevenue',
                'Description'
            ];

            const form = shadowQuerySelector(element, 'c-record-edit-form');

            form.dispatchEvent(
                new CustomEvent('load', {
                    detail: {
                        objectInfos: store.objectInfos,
                        layouts,
                        record: store.records.LEADDEFAULTS
                    }
                })
            );

            return Promise.resolve().then(() => {
                const inputFields = shadowQuerySelectorAll(
                    element,
                    'lightning-input-field,c-output-field'
                );

                const fieldNames = Array.prototype.slice
                    .call(inputFields)
                    .map((field) => {
                        return field.fieldName;
                    });
                expect(fieldNames).toEqual(fields);
            });
        });
    });

    it('throws an error when you specify an invalid layout name', () => {
        expect(() => {
            createForm({
                objectApiName: 'Lead',
                layoutType: 'banana'
            });
        }).toThrow('Invalid layout');
    });

    it('opens in edit mode by default for create', () => {
        const element = createForm({
            objectApiName: 'Lead',
            fields: 'Name'
        });

        return Promise.resolve().then(() => {
            const form = shadowQuerySelector(element, 'c-record-edit-form');

            form.dispatchEvent(
                new CustomEvent('load', {
                    detail: {
                        objectInfos: store.objectInfos,
                        layout: store.layouts.Lead.Full.View,
                        record: store.records.LEADDEFAULTS
                    }
                })
            );

            return Promise.resolve().then(() => {
                const inputFields = shadowQuerySelectorAll(
                    element,
                    'lightning-input-field'
                );

                checkNodeListLength(inputFields, 1);
            });
        });
    });

    it('opens in view mode by default for edit', () => {
        const element = createForm({
            objectApiName: 'Lead',
            fields: 'Name',
            recordId: 'a07B0000000TKNZ'
        });

        return Promise.resolve().then(() => {
            const form = shadowQuerySelector(element, 'c-record-edit-form');

            form.dispatchEvent(
                new CustomEvent('load', {
                    detail: {
                        objectInfos: store.objectInfos,
                        layout: store.layouts.Lead.Full.View,
                        records: store.records
                    }
                })
            );

            return Promise.resolve().then(() => {
                const inputFields = shadowQuerySelectorAll(
                    element,
                    'lightning-input-field'
                );

                const outputFields = shadowQuerySelectorAll(
                    element,
                    'c-output-field'
                );

                checkNodeListLength(inputFields, 0);
                checkNodeListLength(outputFields, 1);
            });
        });
    });

    it('opens in edit mode when specified', () => {
        const element = createForm({
            objectApiName: 'Lead',
            fields: 'Name',
            recordId: 'a07B0000000TKNZ',
            mode: 'edit'
        });

        return Promise.resolve().then(() => {
            const form = shadowQuerySelector(element, 'c-record-edit-form');

            form.dispatchEvent(
                new CustomEvent('load', {
                    detail: {
                        objectInfos: store.objectInfos,
                        layout: store.layouts.Lead.Full.View,
                        records: store.records
                    }
                })
            );

            return Promise.resolve().then(() => {
                const inputFields = shadowQuerySelectorAll(
                    element,
                    'lightning-input-field'
                );

                checkNodeListLength(inputFields, 1);
            });
        });
    });

    it('render output fields for un-updateable fields', () => {
        const element = createForm({
            objectApiName: 'Lead',
            fields: ['Name', 'ReadOnly__c'],
            recordId: 'a07B0000000TKNZ',
            mode: 'edit'
        });

        return Promise.resolve().then(() => {
            const form = shadowQuerySelector(element, 'c-record-edit-form');

            form.dispatchEvent(
                new CustomEvent('load', {
                    detail: {
                        objectInfos: store.objectInfos,
                        layout: store.layouts.Lead.Full.View,
                        records: store.records
                    }
                })
            );

            return Promise.resolve().then(() => {
                const inputFields = shadowQuerySelectorAll(
                    element,
                    'lightning-input-field'
                );

                const outputFields = shadowQuerySelectorAll(
                    element,
                    'c-output-field'
                );

                checkNodeListLength(inputFields, 1);
                checkNodeListLength(outputFields, 1);
            });
        });
    });

    it('opens in view mode when specified', () => {
        const element = createForm({
            objectApiName: 'Lead',
            fields: ['Name'],
            mode: 'view'
        });

        return Promise.resolve().then(() => {
            const form = shadowQuerySelector(element, 'c-record-edit-form');

            form.dispatchEvent(
                new CustomEvent('load', {
                    detail: {
                        objectInfos: store.objectInfos,
                        layout: store.layouts.Lead.Full.View,
                        record: store.records.LEADDEFAULTS
                    }
                })
            );

            return Promise.resolve().then(() => {
                const outputFields = shadowQuerySelectorAll(
                    element,
                    'c-output-field'
                );

                checkNodeListLength(outputFields, 1);
            });
        });
    });

    it('opens in readonly mode when specified', () => {
        const element = createForm({
            objectApiName: 'Lead',
            fields: 'Name',
            recordId: 'a07B0000000TKNZ',
            mode: 'readonly'
        });

        return Promise.resolve().then(() => {
            const form = shadowQuerySelector(element, 'c-record-edit-form');

            form.dispatchEvent(
                new CustomEvent('load', {
                    detail: {
                        objectInfos: store.objectInfos,
                        layout: store.layouts.Lead.Full.View,
                        records: store.records
                    }
                })
            );

            return Promise.resolve().then(() => {
                const buttons = shadowQuerySelectorAll(
                    element,
                    'c-button-icon'
                );

                const outputFields = shadowQuerySelectorAll(
                    element,
                    'c-output-field'
                );

                checkNodeListLength(outputFields, 1);
                checkNodeListLength(buttons, 0);
            });
        });
    });

    it('toggles to view mode when canceled and recordId is not null', () => {
        const element = createForm({
            objectApiName: 'Lead',
            fields: 'Name',
            recordId: 'a07B0000000TKNZ',
            mode: 'edit'
        });

        return Promise.resolve().then(() => {
            const form = shadowQuerySelector(element, 'c-record-edit-form');

            form.dispatchEvent(
                new CustomEvent('load', {
                    detail: {
                        objectInfos: store.objectInfos,
                        layout: store.layouts.Lead.Full.View,
                        records: store.records
                    }
                })
            );

            return Promise.resolve().then(() => {
                const el = shadowQuerySelector(
                    element,
                    'c-button.c-record-form-cancel'
                );

                shadowQuerySelector(el, 'button').click();
                return Promise.resolve().then(() => {
                    const outputFields = shadowQuerySelectorAll(
                        element,
                        'c-output-field'
                    );

                    checkNodeListLength(outputFields, 1);
                });
            });
        });
    });

    it('cancel clears values when recordID is null', () => {
        const element = createForm({
            objectApiName: 'Lead',
            fields: 'Name'
        });

        return Promise.resolve().then(() => {
            const form = shadowQuerySelector(element, 'c-record-edit-form');

            form.dispatchEvent(
                new CustomEvent('load', {
                    detail: {
                        objectInfos: store.objectInfos,
                        layout: store.layouts.Lead.Full.View,
                        record: store.records.LEADDEFAULTS
                    }
                })
            );

            return Promise.resolve().then(() => {
                const el = shadowQuerySelector(
                    element,
                    'c-button.c-record-form-cancel'
                );

                shadowQuerySelector(element, 'lightning-input-field').value =
                    'banana';
                shadowQuerySelector(el, 'button').click();
                return Promise.resolve().then(() => {
                    const inputField = shadowQuerySelector(
                        element,
                        'lightning-input-field'
                    );

                    expect(inputField.value).toBe('initial');
                });
            });
        });
    });

    it('should clear any errors when cancel is pressed', () => {
        const element = createForm({
            objectApiName: 'Lead',
            fields: 'Name'
        });

        return Promise.resolve().then(() => {
            const cancelButtonElement = shadowQuerySelector(
                element,
                'c-button.c-record-form-cancel'
            );

            shadowQuerySelector(element, 'c-messages').setError('an error');

            shadowQuerySelector(cancelButtonElement, 'button').click();

            return Promise.resolve().then(() => {
                const errorMessagesElement = shadowQuerySelector(
                    element,
                    'c-messages'
                );

                expect(errorMessagesElement.error.message).toBe('');
                expect(errorMessagesElement.textContent).toBe('');
            });
        });
    });

    it('fires a cancel event on cancel', (done) => {
        const element = createForm({
            objectApiName: 'Lead',
            fields: 'Name'
        });

        element.addEventListener('cancel', () => {
            done();
        });

        return Promise.resolve().then(() => {
            const el = shadowQuerySelector(
                element,
                'c-button.c-record-form-cancel'
            );

            shadowQuerySelector(el, 'button').click();
        });
    });

    it('passes through recordTypeId', () => {
        const element = createForm({
            objectApiName: 'Lead',
            fields: 'Name',
            recordTypeId: 'foo'
        });

        return Promise.resolve().then(() => {
            const form = shadowQuerySelector(element, 'c-record-edit-form');

            expect(form.recordTypeId).toEqual('foo');
        });
    });

    it('passes through objectApiName', () => {
        const element = createForm({
            objectApiName: 'Lead',
            fields: 'Name',
            recordTypeId: 'foo'
        });

        return Promise.resolve().then(() => {
            const form = shadowQuerySelector(element, 'c-record-edit-form');

            expect(form.objectApiName).toEqual('Lead');
        });
    });

    it('passes through objectApiName with object reference', () => {
        const element = createForm({
            objectApiName: { objectApiName: 'Lead' },
            fields: 'Name',
            recordTypeId: 'foo'
        });

        return Promise.resolve().then(() => {
            const form = shadowQuerySelector(element, 'c-record-edit-form');

            expect(form.objectApiName).toEqual({ objectApiName: 'Lead' });
        });
    });

    it('calls submit on the form with submit data', () => {
        const element = createForm({
            objectApiName: 'Lead',
            fields: 'Name',
            recordTypeId: 'foo'
        });

        return Promise.resolve().then(() => {
            const form = shadowQuerySelector(element, 'c-record-edit-form');

            element.submit({ foo: 'bar' });
            expect(form.getSubmitData()).toEqual({ foo: 'bar' });
        });
    });

    it('does not gack when it hits a field hidden by FLS', () => {
        const element = createForm({
            objectApiName: 'Lead',
            mode: 'view',
            fields: ['Name', 'FLS__c']
        });

        return Promise.resolve().then(() => {
            const form = shadowQuerySelector(element, 'c-record-edit-form');

            form.dispatchEvent(
                new CustomEvent('load', {
                    detail: {
                        objectInfos: store.objectInfos,
                        layout: store.layouts.Lead.Full.View,
                        record: store.records.LEADDEFAULTS
                    }
                })
            );

            return Promise.resolve().then(() => {
                const outputFields = shadowQuerySelectorAll(
                    element,
                    'c-output-field'
                );

                const length = outputFields.length;

                expect(length).toEqual(1);
            });
        });
    });

    it('Shows compound address field as editable (if it is)', () => {
        const element = createForm({
            objectApiName: 'Lead',
            recordId: 'a07B0000000TKNZ',
            mode: 'view',
            fields: ['Name', 'Address']
        });

        return Promise.resolve().then(() => {
            const form = shadowQuerySelector(element, 'c-record-edit-form');

            form.dispatchEvent(
                new CustomEvent('load', {
                    detail: {
                        objectInfos: store.objectInfos,
                        layout: store.layouts.Lead.Full.View,
                        records: store.records
                    }
                })
            );

            return Promise.resolve().then(() => {
                const outputFields = shadowQuerySelectorAll(
                    element,
                    'c-button-icon'
                );

                const length = outputFields.length;
                expect(length).toEqual(2);
            });
        });
    });

    it('does not render the pencil on non-editable fields', () => {
        const element = createForm({
            objectApiName: 'Lead',
            mode: 'view',
            fields: ['Name', 'ReadOnly__c']
        });

        return Promise.resolve().then(() => {
            const form = shadowQuerySelector(element, 'c-record-edit-form');

            form.dispatchEvent(
                new CustomEvent('load', {
                    detail: {
                        objectInfos: store.objectInfos,
                        layout: store.layouts.Lead.Full.View,
                        record: store.records.LEADDEFAULTS
                    }
                })
            );

            return Promise.resolve().then(() => {
                const outputFields = shadowQuerySelectorAll(
                    element,
                    'c-button-icon'
                );

                const length = outputFields.length;
                expect(length).toEqual(1);
            });
        });
    });

    it('does not render the pencil on unsupported lookup fields', () => {
        const element = createForm({
            objectApiName: 'Lead',
            mode: 'view',
            fields: ['Name', 'OwnerId', 'CreatedById', 'LastModifiedById']
        });

        return Promise.resolve().then(() => {
            const form = shadowQuerySelector(element, 'c-record-edit-form');

            form.dispatchEvent(
                new CustomEvent('load', {
                    detail: {
                        objectInfos: store.objectInfos,
                        layout: store.layouts.Lead.Full.View,
                        record: store.records.LEADDEFAULTS
                    }
                })
            );

            return Promise.resolve().then(() => {
                const outputFields = shadowQuerySelectorAll(
                    element,
                    'c-button-icon'
                );

                const length = outputFields.length;
                expect(length).toEqual(1);
            });
        });
    });

    it('should not gack when input recordId is 15-digit long', () => {
        const element = createForm({
            objectApiName: 'Lead',
            mode: 'view',
            layoutType: 'Full',
            recordId: 'a07B0000000TKNZ'
        });

        return Promise.resolve().then(() => {
            const form = shadowQuerySelector(element, 'c-record-edit-form');

            form.dispatchEvent(
                new CustomEvent('load', {
                    detail: {
                        objectInfos: store.objectInfos,
                        layout: store.layouts.Lead.Full.View,
                        records: store.records
                    }
                })
            );

            return Promise.resolve().then(() => {
                const outputFields = shadowQuerySelectorAll(
                    element,
                    'c-output-field'
                );

                const length = outputFields.length;
                expect(length).toBeGreaterThan(0);
            });
        });
    });

    it('should update the rendered fields when changing recordType', () => {
        const element = createForm({
            objectApiName: 'Account',
            mode: 'edit',
            layoutType: 'Full',
            recordTypeId: '012xx0000005s0WAAQ'
        });

        function findInFields(fields, fieldName) {
            return fields.find((field) => {
                return field.fieldName === fieldName;
            });
        }

        return Promise.resolve()
            .then(() => {
                shadowQuerySelector(
                    element,
                    'c-record-edit-form'
                ).dispatchEvent(
                    new CustomEvent('load', {
                        detail: {
                            objectInfos: accountStore.objectInfos,
                            layout: accountStore.layouts.BusinessAccount,
                            record: accountStore.records.BACreate
                        }
                    })
                );
            })
            .then(() => {
                const inputFields = shadowQuerySelectorAll(
                    element,
                    'lightning-input-field'
                );

                expect(
                    findInFields(inputFields, 'PersonMailingAddress')
                ).toBeUndefined();
                expect(
                    findInFields(inputFields, 'ParentId')
                ).not.toBeUndefined();

                element.recordTypeId = '012xx0000005s28AAA';
                shadowQuerySelector(
                    element,
                    'c-record-edit-form'
                ).dispatchEvent(
                    new CustomEvent('load', {
                        detail: {
                            objectInfos: accountStore.objectInfos,
                            layout: accountStore.layouts.PersonAccount,
                            record: accountStore.records.PACreate
                        }
                    })
                );
            })
            .then(() => {
                const inputFields = shadowQuerySelectorAll(
                    element,
                    'lightning-input-field'
                );

                expect(
                    findInFields(inputFields, 'PersonMailingAddress')
                ).not.toBeUndefined();
                expect(findInFields(inputFields, 'ParentId')).toBeUndefined();
            });
    });

    it('should update the rendered fields when switching to a record with a different recordType', () => {
        const element = createForm({
            objectApiName: 'Account',
            mode: 'edit',
            layoutType: 'Full',
            recordId: '001xx000003GaUNAA0'
        });

        function findInFields(fields, fieldName) {
            return fields.find((field) => {
                return field.fieldName === fieldName;
            });
        }

        return Promise.resolve()
            .then(() => {
                shadowQuerySelector(
                    element,
                    'c-record-edit-form'
                ).dispatchEvent(
                    new CustomEvent('load', {
                        detail: {
                            objectInfos: accountStore.objectInfos,
                            layout: accountStore.layouts.BusinessAccount,
                            record: accountStore.records['001xx000003GaUNAA0']
                        }
                    })
                );
            })
            .then(() => {
                const inputFields = shadowQuerySelectorAll(
                    element,
                    'lightning-input-field'
                );

                expect(
                    findInFields(inputFields, 'PersonMailingAddress')
                ).toBeUndefined();
                expect(
                    findInFields(inputFields, 'ParentId')
                ).not.toBeUndefined();

                element.recordId = '001xx000003GaSlAAK';
                shadowQuerySelector(
                    element,
                    'c-record-edit-form'
                ).dispatchEvent(
                    new CustomEvent('load', {
                        detail: {
                            objectInfos: accountStore.objectInfos,
                            layout: accountStore.layouts.PersonAccount,
                            record: accountStore.records['001xx000003GaSlAAK']
                        }
                    })
                );
            })
            .then(() => {
                const inputFields = shadowQuerySelectorAll(
                    element,
                    'lightning-input-field'
                );

                expect(
                    findInFields(inputFields, 'PersonMailingAddress')
                ).not.toBeUndefined();
                expect(findInFields(inputFields, 'ParentId')).toBeUndefined();
            });
    });

    describe('columns', () => {
        const fields = [
            { fieldApiName: 'Name', objectApiName: 'Opportunity' },
            { fieldApiName: 'BillingAddress', objectApiName: 'Opportunity' }
        ];

        it('renders two columns', () => {
            const element = createForm({
                objectApiName: 'Opportunity',
                fields,
                columns: 2
            });

            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });

        it('renders two columns with a string value', () => {
            const element = createForm({
                objectApiName: 'Opportunity',
                fields,
                columns: '2'
            });

            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });

        it('treats a zero value as 1', () => {
            const element = createForm({
                objectApiName: 'Opportunity',
                fields,
                columns: 0
            });

            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });

        it('treats a NaN value as 1', () => {
            const element = createForm({
                objectApiName: 'Opportunity',
                fields,
                columns: 'banana'
            });

            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });

        it('does treats a negative value as 1', () => {
            const element = createForm({
                objectApiName: 'Opportunity',
                fields,
                columns: -5
            });

            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });

        it('rounds a non-integer value', () => {
            const element = createForm({
                objectApiName: 'Opportunity',
                fields,
                columns: 2.2
            });

            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });
    });
});
