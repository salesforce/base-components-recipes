/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import {
    parseError,
    createOrSaveRecord,
    getRecordTypeId,
    getFormValues,
    validateForm
} from 'c/recordEditUtils';
import { RESPONSES } from 'force/ldsAdaptersUiapi';

describe('page level errors', () => {
    it('handles body parse error', () => {
        expect(parseError(RESPONSES.POST_BODY_PARSE_ERROR)).toEqual({
            detail: RESPONSES.POST_BODY_PARSE_ERROR.body[0].errorCode,
            message: RESPONSES.POST_BODY_PARSE_ERROR.body[0].message,
            output: {}
        });
    });

    it('handles weird transport errors', () => {
        expect(parseError(RESPONSES.ILLEGAL_QUERY_PARAMETER_VALUE)).toEqual({
            detail: RESPONSES.ILLEGAL_QUERY_PARAMETER_VALUE.body[0].errorCode,
            message: RESPONSES.ILLEGAL_QUERY_PARAMETER_VALUE.body[0].message,
            output: {}
        });
    });

    it('handles page validation errors', () => {
        expect(parseError(RESPONSES.VALIDATION_ERROR)).toEqual({
            detail: RESPONSES.VALIDATION_ERROR.body.output.errors[0].message,
            message: RESPONSES.VALIDATION_ERROR.body.message,
            output: RESPONSES.VALIDATION_ERROR.body.output
        });
    });

    it('handles disconnected errors', () => {
        expect(parseError(RESPONSES.DISCONNECTED)).toEqual({
            detail: '',
            message: RESPONSES.DISCONNECTED.body.message,
            output: {}
        });
    });
});

jest.mock(
    'lightning/uiRecordApi',
    () => ({
        generateRecordInputForCreate: jest.fn(),
        generateRecordInputForUpdate: jest.fn(),
        createRecordInputFilteredByEditedFields: jest.fn(),
        createRecord: () => Promise.resolve(),
        updateRecord: () => Promise.resolve()
    }),

    { virtual: true }
);

describe('lds create record', () => {
    // eslint-disable-next-line jest/no-disabled-tests
    it.skip('generates a normalized record', () => {
        const lds = require('lightning/uiRecordApi');
        const newRecord = {
            fields: {
                FirstName: null,
                LastName: 'fff',
                Salutation: 'Ms.'
            },

            apiName: 'Contact'
        };

        const objectInfo = { fake: 'objectInfo' };

        return createOrSaveRecord(newRecord, null, objectInfo).then(() => {
            expect(lds.generateRecordInputForCreate.mock.calls[0][0]).toEqual({
                fields: {
                    FirstName: {
                        value: null
                    },

                    LastName: {
                        value: 'fff'
                    },

                    Salutation: {
                        value: 'Ms.'
                    }
                },

                apiName: 'Contact'
            });
        });
    });
});

describe('lds update record', () => {
    // eslint-disable-next-line jest/no-disabled-tests
    it.skip('generates a normalized record and creates a recordInput for it', () => {
        const ldsRecords = require('lightning/uiRecordApi');
        const originalRecord = {
            fields: {
                FirstName: { value: null },
                LastName: { value: 'bbb' },
                Salutation: { value: 'hey' }
            },

            id: 'FAKEID',
            apiName: 'Contact'
        };

        const newRecord = {
            fields: {
                FirstName: null,
                LastName: 'fff',
                Salutation: 'Ms.'
            },

            apiName: 'Contact'
        };

        const objectInfo = { fake: 'objectInfo' };
        return createOrSaveRecord(newRecord, originalRecord, objectInfo).then(
            () => {
                expect(
                    ldsRecords.generateRecordInputForUpdate.mock.calls[0][0]
                ).toEqual({
                    id: 'FAKEID',
                    fields: {
                        FirstName: {
                            value: null
                        },

                        LastName: {
                            value: 'fff'
                        },

                        Salutation: {
                            value: 'Ms.'
                        }
                    },

                    apiName: null
                });
            }
        );
    });
});

describe('validateForm', () => {
    const getMockInputField = (isValid) => {
        return {
            tagName: 'LIGHTNING-INPUT-FIELD',
            reportValidity() {
                return isValid;
            }
        };
    };

    const getMockoutOutputField = () => {
        return {
            tagName: 'C-OUTPUT-FIELD'
        };
    };

    it('returns true if all fields are valid', () => {
        const fields = [getMockInputField(true), getMockInputField(true)];
        expect(validateForm(fields)).toEqual(true);
    });

    it('returns false if any field is invalid', () => {
        const fields = [
            getMockInputField(true),
            getMockInputField(false),
            getMockInputField(true)
        ];

        expect(validateForm(fields)).toEqual(false);
    });

    it('should return true for valid fields with an outputField in the array', () => {
        const fields = [
            getMockInputField(true),
            getMockInputField(true),
            getMockoutOutputField()
        ];

        expect(validateForm(fields)).toEqual(true);
    });
});

describe('getFormValues', () => {
    it('returns a hash of fieldNames and values', () => {
        const fields = [
            {
                fieldName: 'field1',
                value: 'Hello'
            },

            {
                fieldName: 'field2',
                value: 'Goodbye'
            },

            {
                fieldName: 'field3',
                value: 'Auf wiedersehen'
            }
        ];

        expect(getFormValues(fields)).toEqual({
            field1: 'Hello',
            field2: 'Goodbye',
            field3: 'Auf wiedersehen'
        });
    });

    it('flattens compound values', () => {
        const fields = [
            {
                fieldName: 'Name',
                value: 'Bob'
            },

            {
                fieldName: 'BillingAddres',
                value: {
                    BillingCity: 'Denver',
                    BillingCountry: 'United States',
                    BillingPostalCode: '80202',
                    BillingState: 'CO',
                    BillingStreet: '222 fake st'
                }
            },

            {
                fieldName: 'Geo__c',
                value: {
                    longitude: 10,
                    latitude: 20
                }
            }
        ];

        expect(getFormValues(fields)).toEqual({
            Name: 'Bob',
            BillingCity: 'Denver',
            BillingCountry: 'United States',
            BillingPostalCode: '80202',
            BillingState: 'CO',
            BillingStreet: '222 fake st',
            // eslint-disable-next-line camelcase
            Geo__Longitude__s: 10,
            // eslint-disable-next-line camelcase
            Geo__Latitude__s: 20
        });
    });

    it('does not get confused by null values', () => {
        const fields = [
            {
                fieldName: 'Name',
                value: 'Bob'
            },

            {
                fieldName: 'NullLookup',
                value: null
            }
        ];

        expect(getFormValues(fields)).toEqual({
            Name: 'Bob',
            NullLookup: null
        });
    });

    it('does not return values for readOnly fields', () => {
        const fields = [
            {
                fieldName: 'field1',
                value: 'Hello'
            },

            {
                fieldName: 'field2',
                value: 'Goodbye'
            },

            {
                fieldName: 'field3',
                value: 'Auf wiedersehen',
                readOnly: true
            }
        ];

        expect(getFormValues(fields)).toEqual({
            field1: 'Hello',
            field2: 'Goodbye'
        });
    });
});

describe('retrieveRecordTypeId', () => {
    it('should return the default recordTypeId when creating record', () => {
        const recordTypeId = getRecordTypeId({
            objectInfo: {
                defaultRecordTypeId: 'defaultRecordTypeId'
            },

            record: {
                recordTypeId: 'recordTypeId',
                id: null
            }
        });

        expect(recordTypeId).toEqual('defaultRecordTypeId');
    });

    it('should return master record type id when creating record and there is no default value in object metadata', () => {
        const recordTypeId = getRecordTypeId({
            objectInfo: {
                defaultRecordTypeId: null
            },

            record: {
                recordTypeId: 'recordTypeId',
                id: null
            }
        });

        expect(recordTypeId).toEqual('012000000000000AAA');
    });

    it('should return record type id when editing record', () => {
        const recordTypeId = getRecordTypeId({
            objectInfo: {
                defaultRecordTypeId: 'defaultRecordTypeId'
            },

            record: {
                recordTypeId: 'recordTypeId',
                id: 'a07B0000007sodiIAA'
            }
        });

        expect(recordTypeId).toEqual('recordTypeId');
    });
});
