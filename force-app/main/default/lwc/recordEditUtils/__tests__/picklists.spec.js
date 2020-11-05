/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { filterByPicklistsInForm, formHasPicklists } from 'c/recordEditUtils';
import FAKE_OBJECT_INFO from './mockdata.json';

describe('formHasPicklists()', () => {
    it('should return false when the form does not have a picklist', () => {
        expect(
            formHasPicklists(FAKE_OBJECT_INFO, [
                'Lead.Description',
                'Lead.OwnerId',
                'Lead.PostalCode'
            ])
        ).toBe(false);
    });

    it('should return true when the form has a single-select picklist', () => {
        expect(
            formHasPicklists(FAKE_OBJECT_INFO, [
                'Lead.OwnerId',
                'Lead.PostalCode',
                'Lead.Rating'
            ])
        ).toBe(true);
    });

    it('should return true when the form has a multi-select picklist', () => {
        expect(
            formHasPicklists(FAKE_OBJECT_INFO, [
                'Lead.OwnerId',
                'Lead.PostalCode',
                'Lead.MultiPicklist__c'
            ])
        ).toBe(true);
    });

    it('should return true when the form has a picklist subfield of a compound field', () => {
        expect(
            formHasPicklists(FAKE_OBJECT_INFO, [
                'Lead.Salutation',
                'Lead.FirstName'
            ])
        ).toBe(true);
    });

    it('should return true when the form has a compound field with a picklist subfield', () => {
        expect(
            formHasPicklists(FAKE_OBJECT_INFO, ['Lead.OwnerId', 'Lead.Address'])
        ).toBe(true);
    });
});

describe('filterByPicklistsInForm()', () => {
    it('should return an empty object when there are no picklists in the form', () => {
        const fieldsInForm = [
            'Lead.Description',
            'Lead.OwnerId',
            'Lead.PostalCode'
        ];

        const picklistsForRecordType = {
            LeadSource: { values: [] },
            Rating: { values: [] },
            MultiPicklist__c: { values: [] }
        };

        expect(
            filterByPicklistsInForm(
                FAKE_OBJECT_INFO,
                picklistsForRecordType,
                fieldsInForm
            )
        ).toEqual({});
    });

    it('should return correct picklists when the picklists are in the form', () => {
        const fieldsInForm = [
            'Lead.Description',
            'Lead.OwnerId',
            'Lead.StateCode',
            'Lead.MultiPicklist__c'
        ];

        const picklistsForRecordType = {
            LeadSource: { values: [] },
            StateCode: { values: [] },
            MultiPicklist__c: { values: [] }
        };

        expect(
            filterByPicklistsInForm(
                FAKE_OBJECT_INFO,
                picklistsForRecordType,
                fieldsInForm
            )
        ).toEqual({
            MultiPicklist__c: {
                values: []
            },

            StateCode: {
                values: []
            }
        });
    });

    it('should return correct picklists when there are compound fields with picklists in the form', () => {
        const fieldsInForm = [
            'Lead.Description',
            'Lead.OwnerId',
            'Lead.Address',
            'Lead.MultiPicklist__c'
        ];

        const picklistsForRecordType = {
            LeadSource: { values: [] },
            StateCode: { values: [] },
            CountryCode: { values: [] },
            MultiPicklist__c: { values: [] }
        };

        expect(
            filterByPicklistsInForm(
                FAKE_OBJECT_INFO,
                picklistsForRecordType,
                fieldsInForm
            )
        ).toEqual({
            MultiPicklist__c: {
                values: []
            },

            StateCode: {
                values: []
            },

            CountryCode: {
                values: []
            }
        });
    });
});
