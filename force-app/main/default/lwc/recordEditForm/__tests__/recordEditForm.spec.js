import { createElement, register } from 'lwc';
import MockRecordHolder from 'lightningtest/mockRecordEditHolder';
import { registerMockedWireService } from 'lwc-wire-service-sfdc-mocks';
registerMockedWireService({ register });
import { RESPONSES } from 'force/lds';
const DEFAULT_RECORD_ID = 'a00R0000000jq5eIAA';
const DEFAULT_RECORD_TYPE_ID = '012000000000000AAA';
import picklistRepresentation from './mockPicklistData.json';
import { shadowQuerySelector } from 'lightning/testUtils';
import * as densityUtils from '../../../lightning/formDensityUtilsPrivate/formDensityUtilsPrivate';
import { deepCopy } from 'c/utilsPrivate';

const mockRegisterField = jest.fn();
const mockHandleFieldValueChange = jest.fn();
const mockConstructor = jest.fn();
jest.mock('lightning/fieldDependencyManager', () => {
    return {
        DependencyManager: jest.fn().mockImplementation((...args) => {
            mockConstructor(...args);
            return {
                registerDependencyInfo: () => {},
                registerField: mockRegisterField,
                handleFieldValueChange: mockHandleFieldValueChange
            };
        })
    };
});

describe('record edit form', () => {
    beforeAll(() => {
        jest.unmock('lightning/uiRecordApi');
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('wires recordUi to input fields', () => {
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        element.recordId = DEFAULT_RECORD_ID;
        element.objectApiName = 'Bad_Guy__c';
        document.body.appendChild(element);
        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                const inputField = shadowQuerySelector(
                    element,
                    'lightning-input-field'
                );

                if (inputField) {
                    try {
                        const data = inputField.getWiredData();
                        expect(data).toEqual(
                            expect.objectContaining({
                                record: expect.any(Object),
                                objectInfo: expect.any(Object),
                                objectInfos: expect.any(Object)
                            })
                        );

                        expect(data.record.fields.Name.value).toEqual(
                            'Wicked Witch of the West'
                        );
                    } catch (e) {
                        reject(e);
                    }
                    resolve();
                } else {
                    reject('Input field is missing');
                }
            });
        });
    });

    it('support object for api name', () => {
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        element.recordId = DEFAULT_RECORD_ID;
        element.objectApiName = { objectApiName: 'Bad_Guy__c' };
        document.body.appendChild(element);
        return new Promise((resolve, reject) => {
            element.addEventListener('error', err => {
                reject(err.detail);
            });
            element.addEventListener('load', () => {
                const inputField = shadowQuerySelector(
                    element,
                    'lightning-input-field'
                );

                if (inputField) {
                    try {
                        const data = inputField.getWiredData();
                        expect(data).toEqual(
                            expect.objectContaining({
                                record: expect.any(Object),
                                objectInfo: expect.any(Object),
                                objectInfos: expect.any(Object)
                            })
                        );

                        expect(data.record.fields.Name.value).toEqual(
                            'Wicked Witch of the West'
                        );
                    } catch (e) {
                        reject(e);
                    }
                    resolve();
                } else {
                    reject('Input field is missing');
                }
            });
        });
    });

    it('wires recordUi to output fields', () => {
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        element.recordId = DEFAULT_RECORD_ID;
        element.objectApiName = 'Bad_Guy__c';
        document.body.appendChild(element);
        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                const inputField = shadowQuerySelector(
                    element,
                    'lightning-output-field'
                );

                if (inputField) {
                    try {
                        const data = inputField.getWiredData();
                        expect(data).toEqual(
                            expect.objectContaining({
                                record: expect.any(Object),
                                objectInfo: expect.any(Object),
                                objectInfos: expect.any(Object)
                            })
                        );

                        expect(data.record.fields.Name.value).toEqual(
                            'Wicked Witch of the West'
                        );
                    } catch (e) {
                        reject(e);
                    }
                    resolve();
                } else {
                    reject('output field is missing');
                }
            });
        });
    });

    it('wires data for 15 digit record ids', () => {
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        element.recordId = 'a00R0000000jq5e';
        element.objectApiName = 'Bad_Guy__c';
        document.body.appendChild(element);
        return new Promise((resolve, reject) => {
            element.addEventListener('error', err => {
                reject(err.detail);
            });
            element.addEventListener('load', () => {
                const inputField = shadowQuerySelector(
                    element,
                    'lightning-input-field'
                );

                if (inputField) {
                    try {
                        const data = inputField.getWiredData();

                        expect(data.record.fields.Name.value).toEqual(
                            'Wicked Witch of the West'
                        );
                    } catch (e) {
                        reject(e);
                    }
                    resolve();
                } else {
                    reject('Input field is missing');
                }
            });
        });
    });

    it('wires added fields', () => {
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        element.recordId = DEFAULT_RECORD_ID;
        element.objectApiName = 'Bad_Guy__c';
        document.body.appendChild(element);

        return new Promise((resolve, reject) => {
            element.addEventListener('error', err => {
                reject(err.detail);
            });
            element.addEventListener('load', () => {
                element.showChild = true;
                const field2 = shadowQuerySelector(element, '.newChild');
                if (field2) {
                    try {
                        const data = field2.getWiredData();
                        expect(data).toEqual(
                            expect.objectContaining({
                                record: expect.any(Object),
                                objectInfo: expect.any(Object),
                                objectInfos: expect.any(Object)
                            })
                        );
                    } catch (err) {
                        reject(err);
                    }
                    resolve();
                }
            });
        });
    });

    it('supports dynamic id changes', () => {
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        element.recordId = DEFAULT_RECORD_ID;
        element.objectApiName = 'Bad_Guy__c';
        document.body.appendChild(element);

        return new Promise((resolve, reject) => {
            function loadHandler() {
                element.removeEventListener('load', loadHandler);
                element.addEventListener('load', () => {
                    try {
                        const inputField = shadowQuerySelector(
                            element,
                            'lightning-input-field'
                        );

                        const data = inputField.getWiredData();

                        expect(data.record.fields.Name.value).toEqual(
                            'Darth Vader'
                        );
                    } catch (e) {
                        reject(e);
                    }
                    resolve();
                });
                element.recordId = 'a00R0000000xAHtIAM';
            }
            element.addEventListener('load', loadHandler);
        });
    });

    it('submits dirty fields', () => {
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        element.recordId = DEFAULT_RECORD_ID;
        element.objectApiName = 'Bad_Guy__c';
        element.showChild = true;

        document.body.appendChild(element);
        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                const input = shadowQuerySelector(
                    element,
                    'lightning-input-field'
                );

                const form = shadowQuerySelector(
                    element,
                    'lightning-record-edit-form'
                );

                input.setValue('Banana');
                form.addEventListener('success', () => {
                    try {
                        expect(window.LAST_SAVED_RECORD.fields.Id).toEqual(
                            'a00R0000000jq5eIAA'
                        );

                        expect(window.LAST_SAVED_RECORD.fields.Name).toEqual(
                            'Banana'
                        );
                    } catch (err) {
                        reject(err);
                    }
                    resolve();
                });
                form.submit();
            });
        });
    });

    it('saves on form submit', () => {
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        element.recordId = DEFAULT_RECORD_ID;
        element.objectApiName = 'Bad_Guy__c';
        element.showChild = true;

        document.body.appendChild(element);
        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                const input = shadowQuerySelector(
                    element,
                    'lightning-input-field'
                );

                const button = shadowQuerySelector(element, 'lightning-button');
                input.setValue('Banana');

                element.addEventListener('success', () => {
                    try {
                        expect(window.LAST_SAVED_RECORD.fields.Id).toEqual(
                            'a00R0000000jq5eIAA'
                        );

                        expect(window.LAST_SAVED_RECORD.fields.Name).toEqual(
                            'Banana'
                        );
                    } catch (err) {
                        reject(err);
                    }
                    resolve();
                });
                shadowQuerySelector(button, 'button').click();
            });
        });
    });

    it('saves fields passed to submit method', () => {
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        element.recordId = DEFAULT_RECORD_ID;
        element.objectApiName = 'Bad_Guy__c';
        element.showChild = true;

        document.body.appendChild(element);
        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                const form = shadowQuerySelector(
                    element,
                    'lightning-record-edit-form'
                );

                form.addEventListener('success', () => {
                    try {
                        expect(window.LAST_SAVED_RECORD.fields.Id).toEqual(
                            'a00R0000000jq5eIAA'
                        );

                        expect(window.LAST_SAVED_RECORD.fields.Name).toEqual(
                            'Banana'
                        );
                    } catch (err) {
                        reject(err);
                    }
                    resolve();
                });

                form.submit({ Name: 'Banana' });
            });
        });
    });

    it('sends recordTypeId with fields when specified', () => {
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        element.recordId = DEFAULT_RECORD_ID;
        element.objectApiName = 'Bad_Guy__c';
        element.recordTypeId = 'blahblah';
        element.showChild = true;

        document.body.appendChild(element);
        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                const form = shadowQuerySelector(
                    element,
                    'lightning-record-edit-form'
                );

                const button = shadowQuerySelector(element, 'lightning-button');
                form.addEventListener('success', () => {
                    try {
                        expect(
                            window.LAST_SAVED_RECORD.fields.RecordTypeId
                        ).toEqual('blahblah');
                    } catch (err) {
                        reject(err);
                    }
                    resolve();
                });
                shadowQuerySelector(button, 'button').click();
            });
        });
    });

    it('prevents double submit', () => {
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        element.recordId = DEFAULT_RECORD_ID;
        element.objectApiName = 'Bad_Guy__c';
        document.body.appendChild(element);
        window.RECORD_SAVE_COUNT = 0;
        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                const form = shadowQuerySelector(
                    element,
                    'lightning-record-edit-form'
                );

                const button = shadowQuerySelector(element, 'lightning-button');
                form.addEventListener('success', () => {
                    try {
                        expect(window.RECORD_SAVE_COUNT).toEqual(1);
                    } catch (err) {
                        reject(err);
                    }
                    resolve();
                });
                shadowQuerySelector(button, 'button').click();
                shadowQuerySelector(button, 'button').click();
            });
        });
    });

    it('prevents submit on preventDefault()', () => {
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        element.recordId = DEFAULT_RECORD_ID;
        element.objectApiName = 'Bad_Guy__c';
        document.body.appendChild(element);
        window.RECORD_SAVE_COUNT = 0;
        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                const form = shadowQuerySelector(
                    element,
                    'lightning-record-edit-form'
                );

                const button = shadowQuerySelector(element, 'lightning-button');
                form.addEventListener('submit', e => {
                    e.preventDefault();
                });

                setTimeout(() => {
                    try {
                        expect(window.RECORD_SAVE_COUNT).toEqual(0);
                    } catch (err) {
                        reject(err);
                    }
                    resolve();
                }, 100);

                shadowQuerySelector(button, 'button').click();
            });
        });
    });

    it('loads record defaults', () => {
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        element.objectApiName = 'Bad_Guy__c';
        document.body.appendChild(element);
        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                const inputField = shadowQuerySelector(
                    element,
                    'lightning-input-field'
                );

                if (inputField) {
                    try {
                        const data = inputField.getWiredData();
                        expect(data.record.fields.Description__c.value).toEqual(
                            'A bad guy'
                        );
                    } catch (e) {
                        reject(e);
                    }
                    resolve();
                } else {
                    reject('Input field is missing');
                }
            });
        });
    });

    it('in create mode it should pass that information down to input fields', () => {
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        element.objectApiName = 'Bad_Guy__c';
        document.body.appendChild(element);
        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                const inputField = shadowQuerySelector(
                    element,
                    'lightning-input-field'
                );

                if (inputField) {
                    try {
                        const data = inputField.getWiredData();
                        expect(data.createMode).toEqual(true);
                    } catch (e) {
                        reject(e);
                    }
                    resolve();
                } else {
                    reject('Input field is missing');
                }
            });
        });
    });

    it('creates a record', () => {
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        element.showChild = true;
        element.objectApiName = 'Bad_Guy__c';

        document.body.appendChild(element);
        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                const input = shadowQuerySelector(
                    element,
                    'lightning-input-field'
                );

                const form = shadowQuerySelector(
                    element,
                    'lightning-record-edit-form'
                );

                const button = shadowQuerySelector(element, 'lightning-button');
                input.setValue('Banana');
                form.addEventListener('error', err => {
                    reject(err.detail);
                });
                form.addEventListener('success', () => {
                    try {
                        expect(
                            window.LAST_SAVED_RECORD.fields.Id
                        ).toBeUndefined();
                        expect(window.LAST_SAVED_RECORD.fields.Name).toEqual(
                            'Banana'
                        );
                    } catch (err) {
                        reject(err);
                    }
                    resolve();
                });
                shadowQuerySelector(button, 'button').click();
            });
        });
    });

    it('registers with dependecy manager', () => {
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        element.objectApiName = 'Bad_Guy__c';
        element.showPicklist = true;
        window.PICKLIST_REPRESENTATION = picklistRepresentation;
        window.DEPENDENCY_INFO = null;
        document.body.appendChild(element);
        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                try {
                    expect(mockConstructor).toHaveBeenCalledWith(
                        expect.objectContaining({
                            dependentFields: undefined,
                            picklistValues: expect.any(Object)
                        })
                    );
                } catch (e) {
                    reject(e);
                }
                resolve();
            });
        });
    });

    it('registers field dependencies based on the registerfielddependency event', () => {
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        element.objectApiName = 'Bad_Guy__c';
        element.showPicklist = true;
        window.PICKLIST_REPRESENTATION = picklistRepresentation;
        window.DEPENDENCY_INFO = null;
        document.body.appendChild(element);
        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                const event = new CustomEvent('registerfielddependency', {
                    composed: true,
                    bubbles: true,
                    cancelable: true,
                    detail: {
                        fieldName: 'bob',
                        fieldElement: {
                            updateFieldOptions: jest.fn(),
                            getFieldValue: jest.fn()
                        }
                    }
                });

                shadowQuerySelector(element, '.picklist').dispatchEvent(event);
                try {
                    expect(mockRegisterField).toHaveBeenCalledWith(
                        expect.objectContaining({
                            fieldName: 'bob',
                            fieldElement: expect.objectContaining({
                                updateFieldOptions: expect.any(Function),
                                getFieldValue: expect.any(Function)
                            })
                        })
                    );
                } catch (e) {
                    reject(e);
                }
                resolve();
            });
        });
    });

    it('calls handleFieldValueChange when updatedependentfields is fired', () => {
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        element.objectApiName = 'Bad_Guy__c';
        element.showPicklist = true;
        window.PICKLIST_REPRESENTATION = picklistRepresentation;
        window.DEPENDENCY_INFO = null;
        document.body.appendChild(element);
        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                const fieldElement = shadowQuerySelector(element, '.picklist');

                const event = new CustomEvent('updatedependentfields', {
                    composed: true,
                    bubbles: true,
                    cancelable: true,
                    detail: { fieldName: 'bob', value: 'banana' }
                });

                fieldElement.dispatchEvent(event);
                try {
                    expect(mockHandleFieldValueChange).toHaveBeenCalledWith(
                        'bob',
                        'banana'
                    );
                } catch (e) {
                    reject(e);
                }
                resolve();
            });
        });
    });

    it('provides picklist values', () => {
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        element.objectApiName = 'Bad_Guy__c';
        element.recordId = DEFAULT_RECORD_ID;
        window.PICKLIST_REPRESENTATION = picklistRepresentation;
        window.DEPENDENCY_INFO = null;
        element.showPicklist = true;
        document.body.appendChild(element);
        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                const inputField = shadowQuerySelector(
                    element,
                    'lightning-input-field'
                );

                if (inputField) {
                    try {
                        const data = inputField.getWiredPicklistValues();
                        expect(data.Weakness__c).toEqual(
                            picklistRepresentation.Bad_Guy__c[
                                DEFAULT_RECORD_TYPE_ID
                            ].Weakness__c
                        );
                    } catch (e) {
                        reject(e);
                    }
                    resolve();
                } else {
                    reject('Input field is missing');
                }
            });
        });
    });

    it('wires picklists for new recordTypeId', () => {
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        element.recordId = DEFAULT_RECORD_ID;
        window.PICKLIST_REPRESENTATION = picklistRepresentation;
        window.DEPENDENCY_INFO = null;
        element.showPicklist = true;
        element.recordTypeId = '012xx0000000011';
        element.objectApiName = 'Bad_Guy__c';
        document.body.appendChild(element);
        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                const inputField = shadowQuerySelector(
                    element,
                    'lightning-input-field'
                );

                if (inputField) {
                    try {
                        const data = inputField.getWiredPicklistValues();
                        expect(data.Country__c).toEqual(
                            picklistRepresentation.Bad_Guy__c['012xx0000000011']
                                .Country__c
                        );
                    } catch (e) {
                        reject(e);
                    }
                    resolve();
                } else {
                    reject('Picklist values were not wired properly');
                }
            });
        });
    });

    it('handles bubbled errors', () => {
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        element.objectApiName = 'Bad_Guy__c';
        document.body.appendChild(element);
        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                const input = shadowQuerySelector(
                    element,
                    'lightning-input-field'
                );

                const form = shadowQuerySelector(
                    element,
                    'lightning-record-edit-form'
                );

                const e = new Error('Error happened');

                const event = new CustomEvent('error', {
                    composed: true,
                    bubbles: true,
                    cancelable: true,
                    detail: { error: e }
                });

                form.addEventListener('error', () => {
                    const messages = shadowQuerySelector(
                        element,
                        'lightning-messages'
                    );

                    Promise.resolve().then(() => {
                        try {
                            expect(messages.error.message).toEqual(
                                'Error happened'
                            );
                        } catch (err) {
                            return reject(err);
                        }
                        return resolve();
                    });
                });
                input.dispatchEvent(event);
            });
        });
    });

    it('dispatches field errors', () => {
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        window.RECORD_UI_CURRENT_ERROR = RESPONSES.FIELD_ERROR;
        window.RECORD_UI_CURRENT_ERROR.body.output.fieldErrors.Name = [
            {
                constituentField: null,
                duplicateRecordError: null,
                errorCode: 'ERROR_CODE',
                field: 'Name',
                fieldLabel: 'Name',
                message: 'A fake error happened'
            }
        ];

        element.objectApiName = 'Bad_Guy__c';
        document.body.appendChild(element);
        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                const input = shadowQuerySelector(
                    element,
                    'lightning-input-field'
                );

                const form = shadowQuerySelector(
                    element,
                    'lightning-record-edit-form'
                );

                const button = shadowQuerySelector(element, 'lightning-button');
                input.setValue('Banana');
                form.addEventListener('error', () => {
                    const inputField = shadowQuerySelector(
                        element,
                        'lightning-input-field'
                    );

                    try {
                        const errors = deepCopy(inputField.getErrors());

                        expect(errors.body.detail).toBeDefined();
                        errors.body.detail = undefined;

                        expect(errors).toEqual(window.RECORD_UI_CURRENT_ERROR);
                    } catch (e) {
                        reject(e);
                    }
                    resolve();
                });
                form.addEventListener('success', () => {
                    reject('success should not be fired');
                });
                shadowQuerySelector(button, 'button').click();
            });
        });
    });

    it('display field errors from missing fields in messages', () => {
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        window.RECORD_UI_CURRENT_ERROR = RESPONSES.FIELD_ERROR;

        window.RECORD_UI_CURRENT_ERROR.body.output.fieldErrors.MissingField__c = [
            {
                constituentField: null,
                duplicateRecordError: null,
                errorCode: 'ERROR_CODE',
                field: 'MissingField__c',
                fieldLabel: 'Missing Field',
                message: 'A fake error happened'
            }
        ];

        element.objectApiName = 'Bad_Guy__c';
        document.body.appendChild(element);
        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                const input = shadowQuerySelector(
                    element,
                    'lightning-input-field'
                );

                const form = shadowQuerySelector(
                    element,
                    'lightning-record-edit-form'
                );

                const button = shadowQuerySelector(element, 'lightning-button');
                input.setValue('Banana');
                form.addEventListener('error', () => {
                    const messages = shadowQuerySelector(
                        element,
                        'lightning-messages'
                    );

                    try {
                        const errors = messages.error;
                        expect(errors.detail).toEqual('A fake error happened');
                    } catch (e) {
                        reject(e);
                    }
                    resolve();
                });
                shadowQuerySelector(button, 'button').click();
            });
        });
    });

    it('wires label alignment for auto density and reacts on changing density', () => {
        jest.spyOn(densityUtils, 'resetResizeObserver');
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        element.recordId = DEFAULT_RECORD_ID;
        element.objectApiName = 'Bad_Guy__c';
        document.body.appendChild(element);
        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                const outputField = shadowQuerySelector(
                    element,
                    'lightning-output-field'
                );

                if (outputField) {
                    try {
                        expect(
                            densityUtils.resetResizeObserver
                        ).toHaveBeenCalledTimes(1);
                    } catch (e) {
                        reject(e);
                    }
                    resolve();
                } else {
                    reject('output field is missing');
                }
            });
        }).then(() => {
            element.density = 'comfy';
            return Promise.resolve().then(() => {
                expect(densityUtils.resetResizeObserver).toHaveBeenCalledTimes(
                    2
                );
            });
        });
    });
    it('wires label alignment for compact density', () => {
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        element.recordId = DEFAULT_RECORD_ID;
        element.objectApiName = 'Bad_Guy__c';
        element.density = 'compact';
        document.body.appendChild(element);
        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                const outputField = shadowQuerySelector(
                    element,
                    'lightning-output-field'
                );

                if (outputField) {
                    try {
                        const data = outputField.getWiredData();
                        expect(data.labelAlignment).toEqual('horizontal');
                    } catch (e) {
                        reject(e);
                    }
                    resolve();
                } else {
                    reject('output field is missing');
                }
            });
        });
    });
    it('wires label alignment for comfy density in edit mode', () => {
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        element.recordId = DEFAULT_RECORD_ID;
        element.objectApiName = 'Bad_Guy__c';
        element.density = 'comfy';
        element.mode = 'edit';
        document.body.appendChild(element);
        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                const inputField = shadowQuerySelector(
                    element,
                    'lightning-input-field'
                );

                if (inputField) {
                    try {
                        const data = inputField.getWiredData();
                        expect(data.labelAlignment).toEqual('stacked');
                    } catch (e) {
                        reject(e);
                    }
                    resolve();
                } else {
                    reject('output field is missing');
                }
            });
        }).then(() => {
            const inputField = shadowQuerySelector(
                element,
                'lightning-input-field'
            );

            const data = inputField.getWiredData();
            element.density = 'compact';
            return Promise.resolve().then(() => {
                expect(data.labelAlignment).toEqual('horizontal');
            });
        });
    });
});
