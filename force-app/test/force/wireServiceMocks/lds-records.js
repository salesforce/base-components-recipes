/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { store } from './lds-records-data.js';
import { defaults } from './create-defaults.js';
import { picklistRepresentation } from './picklist-data.js';
import { getMockFieldInfo } from './object-infos-mocks';
import { getImmutableObservable } from './immutable';

export { store };

function getMockRecordUi(recordId, optionalFields) {
    const record = store.records[recordId];
    if (!record) {
        return Promise.reject();
    }
    return Promise.resolve(
        optionalFields
            ? mockWithOptionalFields(recordId, optionalFields)
            : store
    );
}

function mockWithOptionalFields(recordId, optionalFields) {
    const ret = JSON.parse(JSON.stringify(store));

    if (optionalFields) {
        optionalFields.forEach((qualifiedField) => {
            const tokenizedField = qualifiedField.split('.');
            const entity = tokenizedField[0];
            const field = tokenizedField[1];

            const objectInfo = ret.objectInfos[entity];
            if (objectInfo && !objectInfo.fields[field]) {
                ret.objectInfos[entity].fields[field] = getMockFieldInfo(field);

                const record = ret.records[recordId];
                if (record && !record.fields[field]) {
                    ret.records[recordId].fields[field] = {
                        displayValue: 'mockOptionalDisplayValue',
                        value: 'mockOptionalValue'
                    };
                }
            }
        });
    }

    return ret;
}

function getMockObjectInfo(objectApiName) {
    const objectInfo = store.objectInfos[objectApiName];
    if (!objectInfo) {
        return Promise.reject(
            new Error(`objectInfo ${objectApiName} not found`)
        );
    }
    return objectInfo;
}

function getMockRecordCreateDefaults(apiName) {
    const resp = JSON.parse(JSON.stringify(store));
    delete resp.records;
    resp.record = defaults[apiName];
    return Promise.resolve(resp);
}

function getRecordWithFields(recordId) {
    return getMockRecordUi(recordId).then(
        (recordUi) => recordUi.records[recordId]
    );
}

function packageMockPicklistData(objectApiName, recordTypeId, fieldApiName) {
    const object = picklistRepresentation[objectApiName];

    if (!object) {
        return Promise.reject(
            new Error(`no picklist values found for object ${objectApiName}`)
        );
    } else if (!object[recordTypeId]) {
        return Promise.reject(
            new Error(
                `no picklist values found for record type ${recordTypeId} of object ${objectApiName}`
            )
        );
    } else if (!object[recordTypeId][fieldApiName]) {
        return Promise.reject(
            new Error(
                `picklist values for ${fieldApiName} not found on object ${objectApiName}`
            )
        );
    }

    return Promise.resolve(object[recordTypeId][fieldApiName]);
}

function packageMockPicklistDataByRecordType(objectApiName, recordTypeId) {
    const object = picklistRepresentation[objectApiName];

    if (!object) {
        return Promise.reject(
            new Error(`no picklist values found for object ${objectApiName}`)
        );
    } else if (!object[recordTypeId]) {
        return Promise.reject(
            new Error(
                `no picklist values found for record type ${recordTypeId} of object ${objectApiName}`
            )
        );
    }

    return Promise.resolve(object[recordTypeId]);
}

function getMockPicklistValues(objectApiName, recordTypeId, fieldApiName) {
    let ret;
    if (picklistRepresentation) {
        ret = packageMockPicklistData(
            objectApiName,
            recordTypeId,
            fieldApiName
        );
    }

    return ret;
}

function getMockPicklistValuesByRecordType(objectApiName, recordTypeId) {
    let ret;
    if (picklistRepresentation) {
        ret = packageMockPicklistDataByRecordType(objectApiName, recordTypeId);
    }

    return ret;
}

export function getRecord(config) {
    if (this && this.constructor.adapter) {
        return new this.constructor.adapter(config);
    }

    if (!config || !config.recordId || !config.fields) {
        return undefined;
    }
    if (config.layoutTypes || config.modes) {
        throw new Error(
            '@wire(getRecord) with layout or mode is not implemented yet. Follow W-4045854.'
        );
    }
    return getImmutableObservable(
        getRecordWithFields(config.recordId, config.fields)
    );
}

export function getObjectInfo(config) {
    if (this && this.constructor.adapter) {
        return new this.constructor.adapter(config);
    }

    if (!config || !config.objectApiName) {
        return undefined;
    }
    return getImmutableObservable(getMockObjectInfo(config.objectApiName));
}

export function getPicklistValues(config) {
    if (this && this.constructor.adapter) {
        return new this.constructor.adapter(config);
    }

    if (
        !config ||
        !config.objectApiName ||
        !config.recordTypeId ||
        !config.fieldApiName
    ) {
        return undefined;
    }
    return getImmutableObservable(
        getMockPicklistValues(
            config.objectApiName,
            config.recordTypeId,
            config.fieldApiName
        )
    );
}

export function getPicklistValuesByRecordType(config) {
    if (this && this.constructor.adapter) {
        return new this.constructor.adapter(config);
    }

    if (!config || !config.objectApiName || !config.recordTypeId) {
        return undefined;
    }
    return getImmutableObservable(
        getMockPicklistValuesByRecordType(
            config.objectApiName,
            config.recordTypeId
        )
    );
}

export function getRecordUi(config) {
    if (this && this.constructor.adapter) {
        return new this.constructor.adapter(config);
    }

    if (!config || !config.recordIds || !config.layoutTypes || !config.modes) {
        return undefined;
    }
    return getImmutableObservable(
        getMockRecordUi(config.recordIds[0], config.optionalFields)
    );
}

export function getRecordCreateDefaults(config) {
    if (this && this.constructor.adapter) {
        return new this.constructor.adapter(config);
    }
    if (!config || !config.objectApiName) {
        return undefined;
    }
    return getImmutableObservable(
        getMockRecordCreateDefaults(config.objectApiName)
    );
}
