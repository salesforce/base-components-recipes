/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { getUiField } from 'c/fieldUtils';
import store from './lookupNotInPageLayout.json';

describe('fieldUtils reference field', () => {
    it('should return field value when lookup field is not included page layout', () => {
        const fieldName = 'Account__c';

        const uiField = getUiField(fieldName, store.record, store.objectInfo);
        expect(uiField.value).toEqual(store.record.fields[fieldName].value);
    });
});
