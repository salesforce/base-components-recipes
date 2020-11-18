/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { Fields } from 'c/fieldUtils';

export function filterByPicklistsInForm(objectInfo, picklistValues, fields) {
    const picklistsInForm = getPicklistFields(objectInfo, fields);
    return filterPicklistValues(picklistValues, picklistsInForm);
}

export function formHasPicklists(objectInfo, fields) {
    return getPicklistFields(objectInfo, fields).size > 0;
}

function getPicklistFields(objectInfo, fields) {
    const picklistFields = new Set();
    for (const fieldName in objectInfo.fields) {
        // eslint-disable-next-line no-prototype-builtins
        if (objectInfo.fields.hasOwnProperty(fieldName)) {
            const field = objectInfo.fields[fieldName];
            if (
                field.dataType === Fields.PICKLIST ||
                field.dataType === Fields.MULTI_PICKLIST
            ) {
                if (
                    fields.includes(`${objectInfo.apiName}.${fieldName}`) ||
                    (field.compoundFieldName &&
                        fields.includes(
                            `${objectInfo.apiName}.${field.compoundFieldName}`
                        ))
                ) {
                    picklistFields.add(field.apiName);
                }
            }
        }
    }

    return picklistFields;
}

function filterPicklistValues(picklistsByRecordType, picklistsInForm) {
    return Object.keys(picklistsByRecordType)
        .filter((key) => picklistsInForm.has(key))
        .reduce((obj, key) => {
            return {
                ...obj,
                [key]: picklistsByRecordType[key]
            };
        }, {});
}
