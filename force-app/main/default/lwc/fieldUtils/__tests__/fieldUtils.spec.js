/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import {
    getCompoundFields,
    isCompoundField,
    getFieldsForLayout,
    getMissingRelationshipFields,
    getReferenceRelationships,
    getUiField,
    compoundFieldIsUpdateable,
    compoundFieldIsCreateable,
    parseError,
    isPersonNameField,
    Fields
} from 'c/fieldUtils';
import store from './mockdata.json';
import notperson from './notperson.json';
import person from './yesperson.json';

const PERSON_ACCOUNT_NAME_FILED = {
    type: 'String',
    apiName: 'Name',
    calculated: false,
    compound: true,
    compoundComponentName: null,
    compoundFieldName: 'Name',
    controllerName: null,
    controllingFields: [],
    createable: true,
    custom: false,
    dataType: 'String',
    extraTypeInfo: 'SwitchablePersonName',
    filterable: true,
    filteredLookupInfo: null,
    highScaleNumber: false,
    htmlFormatted: false,
    inlineHelpText: null,
    label: 'Account Name',
    length: 255,
    nameField: true,
    polymorphicForeignKey: false,
    precision: 0,
    reference: false,
    referenceTargetField: null,
    referenceToInfos: [],
    relationshipName: null,
    required: false,
    scale: 0,
    searchPrefilterable: false,
    sortable: true,
    unique: false,
    updateable: true,
    value: {
        FirstName: 'person',
        LastName: 'person',
        MiddleName: 'account',
        Salutation: null,
        Suffix: null
    },

    displayValue: {
        Salutation: null
    }
};

describe('getCompoundFields', () => {
    it('returns a list of component fields for Name', () => {
        const fields = getCompoundFields(
            'Name',
            store.record,
            store.objectInfos.Lead
        );

        expect(fields).toEqual(['FirstName', 'LastName', 'Salutation']);
    });

    it('returns a list of component fields for Address', () => {
        const fields = getCompoundFields(
            'Name',
            store.record,
            store.objectInfos.Lead
        );

        expect(fields).toEqual(['FirstName', 'LastName', 'Salutation']);
    });
});

describe('isPersonNameField', () => {
    it('should return true if field is SWITCHABLE_PERSON_NAME', () => {
        expect(isPersonNameField(PERSON_ACCOUNT_NAME_FILED)).toBeTruthy();
    });
    it('should return true if field is PERSON_NAME', () => {
        const NonPersonNameField = Object.assign({}, PERSON_ACCOUNT_NAME_FILED);
        NonPersonNameField.extraTypeInfo = Fields.PERSON_NAME;
        expect(isPersonNameField(NonPersonNameField)).toBeTruthy();
    });
    it('should return false if field is not PERSON_NAME or SWITCHABLE_PERSON_NAME', () => {
        const NonPersonNameField = Object.assign({}, PERSON_ACCOUNT_NAME_FILED);
        NonPersonNameField.extraTypeInfo = '';
        expect(isPersonNameField(NonPersonNameField)).toBeFalsy();
    });
});

describe('compoundFieldIsUpdateable', () => {
    it('returns true for a name field if all fields are updateable', () => {
        Object.keys(store.objectInfos.Lead.fields).forEach((key) => {
            if (key.match(/FirstName|LastName|Salutation/)) {
                store.objectInfos.Lead.fields[key].updateable = true;
            }
        });
        expect(
            compoundFieldIsUpdateable(
                ['FirstName', 'LastName', 'Salutation'],
                null,
                store.objectInfos.Lead
            )
        ).toEqual(true);
    });

    it('returns false for a name field if any field is not updateable', () => {
        Object.keys(store.objectInfos.Lead.fields).forEach((key) => {
            if (key.match(/FirstName|LastName|Salutation/)) {
                store.objectInfos.Lead.fields[key].updateable = false;
            }
        });
        expect(
            compoundFieldIsUpdateable(
                ['FirstName', 'LastName', 'Salutation'],
                null,
                store.objectInfos.Lead
            )
        ).toEqual(false);
    });
});

describe('compoundFieldIsCreateable', () => {
    it('returns true for a name field if all fields are createable', () => {
        Object.keys(store.objectInfos.Lead.fields).forEach((key) => {
            if (key.match(/FirstName|LastName|Salutation/)) {
                store.objectInfos.Lead.fields[key].createable = true;
            }
        });
        expect(
            compoundFieldIsCreateable(
                ['FirstName', 'LastName', 'Salutation'],
                null,
                store.objectInfos.Lead
            )
        ).toEqual(true);
    });

    it('returns false for a name field if any field is not createable', () => {
        Object.keys(store.objectInfos.Lead.fields).forEach((key) => {
            if (key.match(/FirstName|LastName|Salutation/)) {
                store.objectInfos.Lead.fields[key].createable = false;
            }
        });
        expect(
            compoundFieldIsCreateable(
                ['FirstName', 'LastName', 'Salutation'],
                null,
                store.objectInfos.Lead
            )
        ).toEqual(false);
    });
});

describe('isCompoundField', () => {
    it('returns true for a standard name field', () => {
        const isCompound = isCompoundField('Name', store.objectInfos.Lead);
        expect(isCompound).toEqual(true);
    });

    it('returns true for a person account name field', () => {
        const isCompound = isCompoundField(
            'Name',
            person.objectInfos.Account,
            true
        );

        expect(isCompound).toEqual(true);
    });

    it('returns false for a business account name field when person account is enabled', () => {
        const isCompound = isCompoundField(
            'Name',
            notperson.objectInfos.Account,
            false
        );

        expect(isCompound).toEqual(false);
    });
});

describe('getUiField', () => {
    it('returns a map of values for compound fields', () => {
        const compoundField = getUiField(
            'Name',
            store.record,
            store.objectInfos.Lead
        );

        expect(compoundField.value).toEqual({
            FirstName: 'Jim',
            LastName: 'Steele',
            Salutation: 'Mr.'
        });

        expect(compoundField.displayValue).toEqual({
            Salutation: 'Mister'
        });
    });
});

describe('getFieldsForLayout', () => {
    it('should return the field list with their layout labels when getting the fields for the Full layout', () => {
        const fields = getFieldsForLayout(store, 'Lead', 'Full');
        expect(fields).toEqual({
            Address: {
                label: 'Address'
            },

            AnnualRevenue: {
                label: 'Annual Revenue'
            },

            Company: {
                label: 'Company'
            },

            Description: {
                label: 'Description'
            },

            Email: {
                label: 'Email'
            },

            Name: {
                label: 'Name'
            },

            OwnerId: {
                label: 'Lead Owner'
            },

            Phone: {
                label: 'Phone'
            },

            Rating: {
                label: 'Rating'
            },

            Status: {
                label: 'Lead Status'
            },

            Title: {
                label: 'Title'
            },

            Website: {
                label: 'Website'
            }
        });
    });
});

describe('reference utils', () => {
    it('gets the expected reference info', () => {
        const referenceInfo = getUiField(
            'OwnerId',
            store.record,
            store.objectInfos.Lead
        );

        expect(referenceInfo).toEqual(
            expect.objectContaining({
                displayValue: 'Test User',
                value: '005R0000000F9tkIAC'
            })
        );
    });
    it('gets the reference relationships from an objectInfo', () => {
        const relationships = getReferenceRelationships(
            ['Name', 'OwnerId', 'CreatedById', 'State'],
            store.objectInfos.Lead
        );

        expect(relationships).toEqual({
            OwnerId: {
                name: 'Owner',
                nameFields: ['FirstName', 'LastName', 'Name']
            },

            CreatedById: {
                name: 'CreatedBy',
                nameFields: ['Name']
            }
        });
    });
    it('finds the missing relationships in a record', () => {
        const missingRelationships = getMissingRelationshipFields(
            {
                fields: {
                    OwnerId: {},
                    CreatedBy: {},
                    CreatedById: {}
                }
            },

            {
                OwnerId: {
                    name: 'Owner',
                    nameFields: ['FirstName', 'LastName', 'Name']
                },

                CreatedById: {
                    name: 'CreatedBy',
                    nameFields: ['Name']
                }
            }
        );

        expect(missingRelationships).toEqual([
            'Owner.FirstName',
            'Owner.LastName',
            'Owner.Name'
        ]);
    });
});

describe('parseError', () => {
    it('should extract error message when event came from LDS error event', () => {
        const errorFromLDSWire = {
            status: 500,
            body: {
                error: 'Disconnected or Canceled'
            },

            headers: {}
        };

        const parsedError = parseError(errorFromLDSWire);

        expect(parsedError.message).toBe(errorFromLDSWire.body.error);
    });
});
