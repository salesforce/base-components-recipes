/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import {
    FieldTypes,
    LocalizedFieldTypes,
    DensityValues,
    LabelAlignValues,
    DensityLabelAlignMapping
} from './constants';

export const Fields = FieldTypes;

export const UNSUPPORTED_REFERENCE_FIELDS = [
    'OwnerId',
    'CreatedById',
    'LastModifiedById'
];

export const labelAlignValues = LabelAlignValues;

export const densityValues = DensityValues;

export const densityLabelAlignMapping = DensityLabelAlignMapping;

const getCompoundValue = (field, record, fieldInfo, objectInfo) => {
    if (FieldTypes.LOCATION === fieldInfo.dataType) {
        const prefix = field.slice(0, field.indexOf('__c'));
        const longitude = record.fields[prefix + '__Longitude__s'].value;
        const latitude = record.fields[prefix + '__Latitude__s'].value;

        return { longitude, latitude };
    }

    const compoundFields = getCompoundFields(field, record, objectInfo);
    const ret = {};
    compoundFields.forEach(childField => {
        if (record.fields[childField]) {
            ret[childField] = record.fields[childField].value;
        }
    });
    return ret;
};

export function isPersonAccount(record) {
    if (record.apiName !== 'Account' && record.apiName !== 'PersonAccount') {
        return false;
    }

    return record.fields.IsPersonAccount
        ? record.fields.IsPersonAccount.value
        : false;
}

export function getMissingRelationshipFields(record, relationships) {
    const incompleteFields = Object.keys(relationships).filter(
        key => !record.fields[relationships[key].name]
    );

    return Array.prototype.concat.apply(
        [],
        incompleteFields.map(key =>
            relationships[key].nameFields.map(
                nameField => relationships[key].name + '.' + nameField
            )
        )
    );
}

export function getReferenceRelationships(fields, objectInfo) {
    return fields
        .filter(
            field =>
                objectInfo.fields[field] && objectInfo.fields[field].reference
        )
        .reduce((relationships, field) => {
            const fieldInfo = objectInfo.fields[field];
            relationships[field] = {
                name: fieldInfo.relationshipName,
                nameFields: fieldInfo.referenceToInfos[0]
                    ? fieldInfo.referenceToInfos[0].nameFields
                    : []
            };

            return relationships;
        }, {});
}

export function getCompoundFields(field, record, objectInfo) {
    return Object.keys(objectInfo.fields).filter(key => {
        return (
            key !== field &&
            record.fields[key] &&
            objectInfo.fields[key].compoundFieldName === field
        );
    });
}

const getReferenceInfo = (record, fieldInfo) => {
    const relationshipName = fieldInfo.relationshipName;

    const relationshipNameFields = fieldInfo.referenceToInfos[0].nameFields;
    const relationship = record.fields[relationshipName];

    if (!relationship || !relationship.value) {
        return { referenceId: null, displayValue: null };
    }

    const referenceField = relationship.value.fields;
    const displayValue =
        relationship.displayValue ||
        relationshipNameFields
            .reduce((acc, nameField) => {
                const thisField = referenceField[nameField];
                if (thisField) {
                    return acc + ' ' + thisField.value;
                }
                return acc;
            }, '')
            .trim();
    return {
        referenceId: referenceField.Id.value,
        displayValue
    };
};

export const getUiField = (field, record, objectInfo) => {
    const fieldInfo = objectInfo.fields[field];
    if (!fieldInfo) {
        throw new Error(`Field [${field}] was not found`);
    }

    const personAccount = isPersonAccount(record);

    const value = isCompoundField(field, objectInfo, personAccount)
        ? getCompoundValue(field, record, fieldInfo, objectInfo)
        : record.fields[field] && record.fields[field].value;

    let result = {
        type: fieldInfo.dataType,
        extraTypeInfo: fieldInfo.extraTypeInfo,
        label: fieldInfo.label,
        inlineHelpText: fieldInfo.inlineHelpText,
        value
    };

    result = Object.assign(result, fieldInfo);

    if (fieldInfo.reference) {
        const referenceInfo = getReferenceInfo(record, fieldInfo);

        result.value = referenceInfo.referenceId;
        result.displayValue = referenceInfo.displayValue;
    } else {
        const includeDisplayValue = LocalizedFieldTypes.includes(
            fieldInfo.dataType
        );

        if (includeDisplayValue) {
            result.displayValue = record.fields[field].displayValue;
        }
    }
    return result;
};

export const getUiFields = (fields, record, objectInfos) => {
    const fieldValues = fields.map(field =>
        getUiField(field, record, objectInfos)
    );

    return fieldValues;
};

export function compoundFieldIsUpdateable(fields, record, objectInfo) {
    return fieldAttributesTruthy('updateable', fields, objectInfo);
}

export function compoundFieldIsCreateable(fields, record, objectInfo) {
    return fieldAttributesTruthy('createable', fields, objectInfo);
}

function fieldAttributesTruthy(attribute, fields, objectInfo) {
    for (let i = 0; i < fields.length; i++) {
        if (!objectInfo.fields[fields[i]]) {
            throw new Error(`Constituent field "${fields[i]}" does not exist`);
        }
        if (objectInfo.fields[fields[i]][attribute]) {
            return true;
        }
    }
    return false;
}

export function isCompoundField(field, objectInfo, personAccount = false) {
    const fieldInfo = objectInfo.fields[field];
    if (!fieldInfo) {
        return false;
    }

    if (fieldInfo.compound === false) {
        return false;
    }

    const keys = Object.keys(objectInfo.fields);
    for (let i = 0; i < keys.length; i++) {
        if (
            keys[i] !== field &&
            objectInfo.fields[keys[i]].compoundFieldName === field
        ) {
            if (
                objectInfo.apiName === 'Account' &&
                objectInfo.fields[keys[i]].compoundFieldName === 'Name' &&
                !personAccount
            ) {
                return false;
            }

            return true;
        }
    }

    return false;
}

export function parseError(err) {
    let message = '',
        output = {},
        detail = '';

    if (err) {
        if (err.body && err.body.output) {
            message = err.body.message;

            if (err.body.output.errors.length > 0) {
                detail = err.body.output.errors[0].message;
            }

            output = JSON.parse(JSON.stringify(err.body.output));
        } else if (Array.isArray(err.body) && err.body.length > 0) {
            message = err.body[0].message;
            detail = err.body[0].errorCode;
        } else if (err.body && err.body.message) {
            message = err.body.message;
        } else if (err.body) {
            message = err.body;
        } else if (err.statusText) {
            message.err = err.statusText;
        } else if (err.message) {
            message = err.message;
        } else {
            message = err;
        }
    }

    return { message, detail, output };
}

export function createErrorEvent(err) {
    const { message, detail } = parseError(err);
    const error = new Error(message);
    return new ErrorEvent('error', {
        error,
        message,
        detail
    });
}

class FieldSet {
    constructor(objectApiName) {
        this._set = new Set();
        if (typeof objectApiName !== 'string') {
            throw new Error('objectApiName must be a string');
        }
        this._apiName = objectApiName;
    }

    set objectApiName(objectApiName) {
        if (typeof objectApiName !== 'string') {
            throw new Error('objectApiName must be a string');
        }
        this._apiName = objectApiName;
    }

    add(val) {
        this._set.add(val);
    }

    concat(arr) {
        arr.forEach(item => {
            this.add(item);
        });
    }

    getList() {
        const apiName = this._apiName;
        return [...this._set].map(field => {
            return `${apiName}.${field}`;
        });
    }

    getUnqualifiedList() {
        return [...this._set];
    }
}

export function getFieldSet(objectApiName) {
    return new FieldSet(objectApiName);
}

export function getFieldsForLayout(layout, objectInfo) {
    const processedFieldNames = {};

    const fieldsAccumulator = (listToReduce, fieldsGetterFn) => {
        return listToReduce.reduce((fields, item) => {
            return fields.concat(fieldsGetterFn(item));
        }, []);
    };

    const getFieldsFromLayoutComponent = layoutComponent => {
        let fieldName = layoutComponent.apiName;
        const fieldInfo = objectInfo.fields[layoutComponent.apiName];

        if (fieldInfo && fieldInfo.compoundFieldName) {
            fieldName = fieldInfo.compoundFieldName;
        }
        if (fieldInfo && !processedFieldNames[fieldName]) {
            processedFieldNames[fieldName] = true;
            return fieldName;
        }
        return [];
    };
    const getFieldsFromItem = item =>
        fieldsAccumulator(item.layoutComponents, getFieldsFromLayoutComponent);
    const getFieldsFromRow = row =>
        fieldsAccumulator(row.layoutItems, getFieldsFromItem);
    const getFieldsFromSection = section =>
        fieldsAccumulator(section.layoutRows, getFieldsFromRow);
    const getFieldsFromSections = sections =>
        fieldsAccumulator(sections, getFieldsFromSection);
    return getFieldsFromSections(layout.sections);
}