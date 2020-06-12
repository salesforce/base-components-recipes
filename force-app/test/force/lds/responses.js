/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

const INVALID_INPUT_COMBINATION = {
    ok: false,
    status: 400,
    statusText: 'Bad Request',
    body: [
        {
            errorCode: 'INVALID_INPUT_COMBINATION',
            message: "Must provide either 'fields' or 'layoutTypes'."
        }
    ]
};

const ILLEGAL_QUERY_PARAMETER_VALUE = {
    ok: false,
    status: 400,
    statusText: 'Bad Request',
    body: [
        {
            errorCode: 'ILLEGAL_QUERY_PARAMETER_VALUE',
            message: 'Record input is required for PATCH.'
        }
    ]
};

const POST_BODY_PARSE_ERROR = {
    ok: false,
    status: 400,
    statusText: 'Bad Request',
    body: [
        {
            message:
                "Value for field 'Name' in object 'Bad_Guy__c' with data type 'STRING' should be a String but instead is a Integer.",
            errorCode: 'POST_BODY_PARSE_ERROR'
        }
    ]
};

const VALIDATION_ERROR = {
    ok: false,
    status: 400,
    statusText: 'Bad Request',
    body: {
        message:
            'An error occurred while trying to update the record. Please try again.',
        enhancedErrorType: 'RecordError',
        output: {
            errors: [
                {
                    constituentField: null,
                    duplicateRecordError: null,
                    errorCode: 'FIELD_CUSTOM_VALIDATION_EXCEPTION',
                    field: null,
                    fieldLabel: null,
                    message: 'The color must be yellow'
                }
            ],

            fieldErrors: {}
        }
    }
};

const FIELD_ERROR = {
    ok: false,
    status: 400,
    statusText: 'Bad Request',
    body: {
        enhancedErrorType: 'RecordError',
        message:
            'An error occurred while trying to update the record. Please try again.',
        stackTrace:
            'core.connect.api.ConnectInJavaException: An error occurred while trying to update the record. Please try again.\n\tat core.connect.java.direct.JavaResourceWrapper.makeJavaErrorWithOutputRepException(JavaResourceWrapper.java:630)\n\tat core.connect.java.direct.JavaResourceWrapper.patch(JavaResourceWrapper.java:244)\n\tat sfdc.uisdk.connect.api.wrappers.direct.RecordUiDirect.updateRecord(RecordUiDirect.java:949)\n\tat ui.force.components.controllers.UiApiController$12.run(UiApiController.java:270)\n\tat ui.force.components.controllers.UiApiController$12.run(UiApiController.java:1)',
        statusCode: 400,
        output: {
            errors: [],
            fieldErrors: {
                // eslint-disable-next-line camelcase
                Email_Address__c: [
                    {
                        constituentField: null,
                        duplicateRecordError: null,
                        errorCode: 'INVALID_EMAIL_ADDRESS',
                        field: 'Email_Address__c',
                        fieldLabel: 'Email Address',
                        message: 'Email Address: invalid email address: s'
                    }
                ]
            }
        }
    }
};

const REQUIRED_FIELD_MISSING = {
    ok: false,
    status: 400,
    statusText: 'Bad Request',
    body: {
        enhancedErrorType: 'RecordError',
        message:
            'An error occurred while trying to update the record. Please try again.',
        output: {
            errors: [],
            fieldErrors: {
                Name: [
                    {
                        constituentField: 'Name',
                        duplicateRecordError: null,
                        errorCode: 'REQUIRED_FIELD_MISSING',
                        field: 'Name',
                        fieldLabel: 'Account Name',
                        message: 'Required fields are missing: [Name]'
                    }
                ]
            }
        }
    }
};

const NOT_FOUND = {
    ok: false,
    status: 400,
    statusText: 'Bad Request',
    body: [
        {
            errorCode: 'NOT_FOUND',
            message: 'The requested resource does not exist'
        }
    ]
};

const DISCONNECTED = {
    ok: false,
    status: 400,
    statusText: 'Bad Request',
    body: {
        message: 'Disconnected or Canceled'
    }
};

export const RESPONSES = {
    INVALID_INPUT_COMBINATION,
    ILLEGAL_QUERY_PARAMETER_VALUE,
    POST_BODY_PARSE_ERROR,
    FIELD_ERROR,
    REQUIRED_FIELD_MISSING,
    NOT_FOUND,
    VALIDATION_ERROR,
    DISCONNECTED
};
