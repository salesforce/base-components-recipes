/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { RESPONSES } from './responses';
import { RecordInput } from './recordInput';
import { getImmutableObservable } from './immutable';
export {
    getRecordUi,
    getRecordCreateDefaults,
    getPicklistValuesByRecordType
} from 'force/wireServiceMocks';
// eslint-disable-next-line lwc/no-aura-libs
import { mockDataRetriever } from 'force:mockDataLibrary';
const RECORD_UI_REPRESENTATION = window.RECORD_UI_REPRESENTATION;
const PICKLIST_REPRESENTATION = window.PICKLIST_REPRESENTATION;
const store = {
    RECORD_UI_REPRESENTATION,
    PICKLIST_REPRESENTATION
};

export function getLookupActions(dataCallback) {
    return new this.constructor.adapter(dataCallback);
}

const typeUtils = { isPlainObject };
function deepFreeze(value) {
    let response = value;
    if (typeUtils.isPlainObject(value)) {
        response = {};
        const valueKeysArray = Object.keys(value);
        for (let len = valueKeysArray.length, n = 0; n < len; n++) {
            const key = valueKeysArray[n];
            response[key] = deepFreeze(value[key]);
        }
    } else if (Array.isArray(value)) {
        response = value.map((val) => deepFreeze(val));
    }
    return Object.freeze(response);
}

export function getValueForAura(value) {
    return deepFreeze(value);
}
export function getListUi() {}
export function getLookupRecords(data) {
    return new this.constructor.adapter(data);
}

export function checkType(value, type, required) {
    const req = required === undefined ? true : required;
    if (value === undefined) {
        throw new Error('Variable cannot be defined as undefined.');
    }
    if (value === null) {
        if (req) {
            throw new Error('Unexpected null value.');
        }
    } else if (type === Function) {
        if (!isFunction(value)) {
            throw new Error(
                'Value is not of type function, got: ' + value + '.'
            );
        }
    } else if (type === Array && !Array.isArray(value)) {
        throw new Error(
            'Value does not have expected type: ' +
                type.name +
                ', got: ' +
                value +
                '.'
        );
    } else if (
        type === Object
            ? !isPlainObject(value)
            : !type.prototype.isPrototypeOf(Object(value)) && type !== Array
    ) {
        throw new Error(
            'Value does not have expected type: ' +
                type.name +
                ', got: ' +
                value +
                '.'
        );
    }
}

export function checkArray(value, required, innerType, innerRequired) {
    checkType(value, Array, required);
    if (value !== null) {
        value.forEach((val) => {
            checkType(val, innerType, innerRequired);
        });
    }
}

export function isFunction(value) {
    const type = typeof value;
    if (type === 'function') {
        return true;
    }
    return false;
}

export function checkPlainObject(value, required, innerType, innerRequired) {
    checkType(value, Object, required);
    if (value !== null) {
        Object.keys(value).forEach((key) => {
            checkType(value[key], innerType, innerRequired);
        });
    }
}

export function isPlainObject(value) {
    const objectProto =
        value !== null &&
        typeof value === 'object' &&
        Object.getPrototypeOf(value);
    return (
        value !== null &&
        typeof value === 'object' &&
        ((value.constructor && value.constructor.name === 'Object') ||
            (objectProto &&
                objectProto.constructor &&
                objectProto.constructor.name === 'Object'))
    );
}

export function freeze(value) {
    let response = value;
    if (isPlainObject(value)) {
        response = {};
        Object.keys(value).forEach((key) => {
            response[key] = freeze(value[key]);
        });
    } else if (Array.isArray(value)) {
        response = value.map((val) => freeze(val));
    }
    return Object.freeze(response);
}

export function proxyLock(value) {
    const handler = {
        get: (target, key) => {
            value = target[key];
            if (value && typeof value === 'object') {
                return proxyLock(value);
            }
            return value;
        },
        set: () => {
            return false;
        },
        deleteProperty: () => {
            return false;
        }
    };

    return new Proxy(value, handler);
}

export function equivalent(value1, value2, maxDepth) {
    if (value1 === value2) {
        return true;
    } else if (typeof value1 === 'object' && typeof value2 === 'object') {
        const value1Keys = Object.keys(value1);
        return (
            value1Keys.length === Object.keys(value2).length &&
            (maxDepth === 0 ||
                value1Keys.every((key) =>
                    equivalent(
                        value1[key],
                        value2[key],
                        maxDepth ? maxDepth - 1 : undefined
                    )
                ))
        );
    } else if (Array.isArray(value1) && Array.isArray(value2)) {
        return (
            value1.length === value2.length &&
            (maxDepth === 0 ||
                value1.every((value, ind) =>
                    equivalent(
                        value,
                        value2[ind],
                        maxDepth ? maxDepth - 1 : undefined
                    )
                ))
        );
    }
    return false;
}

export function createInterface(methods) {
    checkArray(methods, true, String);
    const response = {};
    methods.forEach((method) => {
        response[method] = () => {
            throw new Error('The method is not implemented: ' + method + '.');
        };
    });
    return createClass(null, null, response);
}

export function createClass(inter, constructor, methods) {
    checkType(inter, Function, false);
    checkType(constructor, Function, false);
    checkPlainObject(methods, true, Function);
    const response = constructor === null ? function () {} : constructor;
    response.prototype = inter === null ? {} : Object.create(inter.prototype);
    response.prototype.constructor = response;
    Object.keys(methods).forEach((key) => {
        response.prototype[key] = methods[key];
    });
    return response;
}

export class LdsError extends Error {
    constructor(id, errorMessage, data) {
        super(errorMessage);
        if (id) {
            this.id = id;
        }
        this.data = data;
    }
}

export function addAllToSet(set, values) {
    values.forEach((item) => {
        set.add(item);
    });
}

export function setContainsAll(set, values) {
    for (let c = 0; c < values.length; ++c) {
        if (!set.has(values[c])) {
            return false;
        }
    }
    return true;
}

export class MappedQueue {
    constructor() {
        this._map = new Map();
        this._back = null;
        this._front = null;
    }

    enqueue(key, value) {
        if (this._map.has(key)) {
            this.remove(key);
        }
        const entry = { key, value, previous: this._back };
        if (this._back) {
            this._back.next = entry;
        } else {
            this._front = entry;
        }
        this._back = entry;
        this._map.set(key, entry);
    }

    dequeue() {
        const entry = this._front;
        if (!entry) {
            return undefined;
        }
        this.remove(entry.key);
        return [entry.key, entry.value];
    }

    remove(key) {
        const entry = this._map.get(key);
        if (entry) {
            this._map.delete(key);
            if (entry === this._back) {
                this._back = entry.previous;
            } else {
                entry.next.previous = entry.previous;
            }
            if (entry === this._front) {
                this._front = entry.next;
            } else {
                entry.previous.next = entry.next;
            }
        }
    }

    getSize() {
        return this._map.size;
    }
}

export function handleNextObservation(observable, nextFn, errorFn, completeFn) {
    const observer = {
        done: false,
        subscription: undefined,
        finish: (sub) => {
            if (!observer.subscription && sub) {
                observer.subscription = sub;
            }
            if (observer.done && observer.subscription) {
                observer.subscription.unsubscribe();
            }
        },
        next: (value) => {
            if (!observer.done && nextFn) {
                nextFn(value);
                observer.done = true;
                observer.finish();
            }
        },
        error: (error) => {
            if (!observer.done && errorFn) {
                errorFn(error);
                observer.done = true;
                observer.finish();
            }
        },
        complete: () => {
            if (!observer.done && completeFn) {
                completeFn();
                observer.done = true;
                observer.finish();
            }
        }
    };

    const subscription = observable.subscribe(observer);
    observer.finish(subscription);
}
const mockFieldInfo = {
    calculated: false,
    compound: false,
    compoundComponentName: null,
    compoundFieldName: null,
    controllerName: null,
    createable: true,
    custom: true,
    dataType: 'String',
    extraTypeInfo: null,
    filterable: true,
    filteredLookupInfo: null,
    highScaleNumber: false,
    htmlFormatted: false,
    inlineHelpText: null,
    label: 'Optional Field Label',
    length: 255,
    nameField: false,
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
    updateable: true
};

export function getMockFieldInfo(apiName) {
    const result = mockFieldInfo;
    result.apiName = apiName;
    return result;
}

window.RECORD_CREATE_COUNT = 0;
window.RECORD_SAVE_COUNT = 0;

export function createRecordInputFilteredByEditedFields(
    recordInput,
    originalRecord
) {
    if (!recordInput) {
        throw new Error('recordInput must be defined');
    }
    if (!originalRecord) {
        throw new Error('originalRecord must be defined');
    }
    const filteredRecordInput = new RecordInput();
    filteredRecordInput.apiName = originalRecord.apiName;
    Object.getOwnPropertyNames(recordInput.fields).forEach((fieldName) => {
        const hasOriginalRecordFieldValue =
            originalRecord &&
            originalRecord.fields &&
            originalRecord.fields[fieldName]
                ? true
                : false;
        if (
            !hasOriginalRecordFieldValue ||
            recordInput.fields[fieldName] !==
                originalRecord.fields[fieldName].value
        ) {
            filteredRecordInput.fields[fieldName] =
                recordInput.fields[fieldName];
        }
    });
    return filteredRecordInput;
}

export function generateRecordInputForUpdate(record, objectInfo) {
    const recordInput = generateRecordInputForCreate(record, objectInfo);
    if (!record.id) {
        throw new Error('record must have id for update');
    }
    recordInput.fields.Id = record.id;
    return recordInput;
}

export function generateRecordInputForCreate(record, objectInfo) {
    if (!record) {
        throw new TypeError('record must be defined');
    }
    const recordInput = new RecordInput();
    recordInput.apiName = record.apiName;

    Object.getOwnPropertyNames(record.fields).forEach((fieldName) => {
        if (fieldName === 'RecordTypeId') {
            recordInput.fields[fieldName] = record.fields[fieldName].value;
        }

        if (
            record.fields[fieldName].value === null ||
            typeof record.fields[fieldName].value !== 'object'
        ) {
            if (objectInfo) {
                if (
                    objectInfo.fields &&
                    objectInfo.fields[fieldName] &&
                    objectInfo.fields[fieldName].updateable === true
                ) {
                    recordInput.fields[fieldName] =
                        record.fields[fieldName].value;
                }
            } else {
                recordInput.fields[fieldName] = record.fields[fieldName].value;
            }
        }
    });
    return recordInput;
}

export async function updateRecord(recordInput) {
    checkType(recordInput, RecordInput, true);
    window.RECORD_SAVE_COUNT++;
    if (!recordInput.fields || !recordInput.fields.Id) {
        throw new Error('recordInput must have its fields.Id property set');
    }
    window.LAST_SAVED_RECORD = recordInput;

    const resultPromise = new Promise((resolve, reject) => {
        if (window.RECORD_UI_CURRENT_ERROR) {
            // eslint-disable-next-line @lwc/lwc/no-async-operation
            setTimeout(() => {
                // eslint-disable-next-line no-console
                console.error(
                    'Sending fake error',
                    window.RECORD_UI_CURRENT_ERROR
                );

                reject(window.RECORD_UI_CURRENT_ERROR);
            }, 500);
        } else {
            // eslint-disable-next-line @lwc/lwc/no-async-operation
            setTimeout(() => {
                // eslint-disable-next-line no-console
                console.info('Record "updated"', recordInput);
                resolve({
                    records: {
                        [recordInput.fields.id]: recordInput
                    }
                });
            }, 500);
        }
    });
    return resultPromise;
}
export function createRecord(recordInput) {
    checkType(recordInput, RecordInput, true);
    window.RECORD_CREATE_COUNT++;

    window.LAST_SAVED_RECORD = JSON.parse(JSON.stringify(recordInput));

    const resultPromise = new Promise((resolve, reject) => {
        if (window.RECORD_UI_CURRENT_ERROR) {
            // eslint-disable-next-line @lwc/lwc/no-async-operation
            setTimeout(() => {
                reject(window.RECORD_UI_CURRENT_ERROR);
            }, 500);
        } else {
            // eslint-disable-next-line @lwc/lwc/no-async-operation
            setTimeout(() => {
                const returnRecord = recordInput;
                returnRecord.id = parseInt(
                    Math.random() * 100000000000,
                    10
                ).toString(36);
                returnRecord.eTag = '1337';
                returnRecord.childRelationships = {};
                resolve(returnRecord);
            }, 1000);
        }
    });
    return resultPromise;
}
function packageMockRecordUi(recordId, optionalFields) {
    recordId = recordId.replace(/;.+/, '');
    const record = store.RECORD_UI_REPRESENTATION.records[recordId];
    const ret = packageMissingFields(
        { ...store.RECORD_UI_REPRESENTATION },
        optionalFields
    );

    if (!record) {
        return Promise.reject(new Error(`record ${recordId} not found`));
    }
    return Promise.resolve(ret);
}
function packageMissingFields(recordUi, optionalFields) {
    optionalFields.forEach((qualifiedField) => {
        const tokenizedField = qualifiedField.split('.');
        const entity = tokenizedField[0];
        const field = tokenizedField[1];
        const objectInfo = recordUi.objectInfos[entity];
        if (objectInfo) {
            const fieldInfo = objectInfo.fields[field];
            if (!fieldInfo) {
                recordUi.objectInfos[entity].fields[field] = getMockFieldInfo(
                    field
                );
            }
        }
    });
    return recordUi;
}
function packageMockPicklistData(objectApiName, recordTypeId, fieldApiName) {
    const object = store.PICKLIST_REPRESENTATION[objectApiName];
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
    const object = store.PICKLIST_REPRESENTATION[objectApiName];
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
    return Promise.resolve({
        picklistFieldValues: object[recordTypeId]
    });
}
export async function createRecordImpl(recordInput) {
    const record = await createRecord(recordInput);

    if (store.RECORD_UI_REPRESENTATION) {
        store.RECORD_UI_REPRESENTATION.records[record.id] = record;
    }
    // eslint-disable-next-line no-console
    return record;
}
async function getMockDefaults(objectApiName) {
    const result = await mockDataRetriever.fetchMockData();
    store.RECORD_UI_REPRESENTATION = result;
    const ret = {};

    let recordIdForDefaults;
    const keys = Object.keys(result.records);
    for (let i = 0; i < keys.length; i++) {
        if (result.records[keys[i]].apiName === objectApiName) {
            recordIdForDefaults = keys[i];
            break;
        }
    }
    ret.objectInfos = result.objectInfos;
    ret.record = result.records[recordIdForDefaults];

    for (const field in ret.record.fields) {
        if (
            typeof ret.record.fields[field].value === 'string' &&
            ret.record.fields[field].value === ''
        ) {
            ret.record.fields[field].value = null;
        }
    }
    if (ret.record.fields.Description__c) {
        ret.record.fields.Description__c.value = null;
    }
    ret.record.id = null;
    return ret;
}

function getMockRecordUi(recordId, optionalFields) {
    let ret;
    if (store.RECORD_UI_REPRESENTATION) {
        ret = packageMockRecordUi(recordId, optionalFields);
    } else {
        ret = mockDataRetriever.fetchMockData().then((result) => {
            store.RECORD_UI_REPRESENTATION = result;
            return packageMockRecordUi(recordId, optionalFields);
        });
    }
    return ret;
}

function getMockObjectInfo(objectApiName) {
    const objectInfo =
        store.RECORD_UI_REPRESENTATION.objectInfos[objectApiName];
    if (!objectInfo) {
        return Promise.reject(
            new Error(`objectInfo ${objectApiName} not found`)
        );
    }
    return objectInfo;
}
function getMockPicklistValues(objectApiName, recordTypeId, fieldApiName) {
    let ret;

    if (window.PICKLIST_REPRESENTATION) {
        store.PICKLIST_REPRESENTATION = window.PICKLIST_REPRESENTATION;
    }
    if (store.PICKLIST_REPRESENTATION) {
        ret = packageMockPicklistData(
            objectApiName,
            recordTypeId,
            fieldApiName
        );
    } else {
        ret = mockDataRetriever.fetchMockPicklistData().then((result) => {
            store.PICKLIST_REPRESENTATION = result;
            return packageMockPicklistData(
                objectApiName,
                recordTypeId,
                fieldApiName
            );
        });
    }
    return ret;
}
function getMockPicklistValuesByRecordType(objectApiName, recordTypeId) {
    let ret;

    if (window.PICKLIST_REPRESENTATION) {
        store.PICKLIST_REPRESENTATION = window.PICKLIST_REPRESENTATION;
    }
    if (store.PICKLIST_REPRESENTATION) {
        ret = packageMockPicklistDataByRecordType(objectApiName, recordTypeId);
    } else {
        ret = mockDataRetriever.fetchMockPicklistData().then((result) => {
            store.PICKLIST_REPRESENTATION = result;
            return packageMockPicklistDataByRecordType(
                objectApiName,
                recordTypeId
            );
        });
    }
    return ret;
}

export function getRecordUiObservable(
    recordIds,
    layouts,
    modes,
    optionalFields
) {
    return getImmutableObservable(
        getMockRecordUi(recordIds[0], optionalFields)
    );
}

export function getRecordWithFieldsObservable(recordId) {
    return getMockRecordUi(recordId).then(
        (recordUi) => recordUi.records[recordId]
    );
}

export function getObjectInfo(objectApiName) {
    return getMockObjectInfo(objectApiName);
}
export function getPicklistValuesObservable(
    objectApiName,
    recordTypeId,
    fieldApiName
) {
    return getImmutableObservable(
        getMockPicklistValues(objectApiName, recordTypeId, fieldApiName)
    );
}
export function getPicklistValuesByRecordTypeObservable(
    objectApiName,
    recordTypeId
) {
    return getImmutableObservable(
        getMockPicklistValuesByRecordType(objectApiName, recordTypeId)
    );
}
export function getRecordCreateDefaultsObservable(objectApiName) {
    return getImmutableObservable(getMockDefaults(objectApiName));
}
export function saveRecord() {
    return new Promise((resolve, reject) => {
        if (window.RECORD_UI_CURRENT_ERROR) {
            // eslint-disable-next-line @lwc/lwc/no-async-operation
            setTimeout(() => {
                reject(window.RECORD_UI_CURRENT_ERROR);
            }, 200);
        } else {
            // eslint-disable-next-line @lwc/lwc/no-async-operation
            setTimeout(resolve, 200);
        }
    });
}

export function getServiceTypes() {
    const serviceRecord = (config) => {
        if (config.layoutTypes || config.modes) {
            throw new Error(
                "@wire('record') with layout or mode is not implemented yet. Follow W-4045854."
            );
        }
        if (!config.recordId || !config.fields) {
            return undefined;
        }
        return getImmutableObservable(
            getRecordWithFieldsObservable(config.recordId, config.fields)
        );
    };

    const serviceObjectInfo = (config) => {
        if (!config.objectApiName) {
            return undefined;
        }
        return getImmutableObservable(getObjectInfo(config.objectApiName));
    };

    const servicePicklist = (config) => {
        if (
            !config.objectApiName ||
            !config.recordTypeId ||
            !config.fieldApiName
        ) {
            return undefined;
        }
        return getPicklistValuesObservable(
            config.objectApiName,
            config.recordTypeId,
            config.fieldApiName
        );
    };

    function serviceRecordUi(config) {
        if (!config.recordIds || !config.layoutTypes || !config.modes) {
            return undefined;
        }
        return getImmutableObservable(
            getRecordUiObservable(
                config.recordIds,
                config.layoutTypes,
                config.modes,
                config.fields
            )
        );
    }
    return {
        record: serviceRecord,
        'object-info': serviceObjectInfo,
        'picklist-values': servicePicklist,
        'record-ui': serviceRecordUi
    };
}
export { RESPONSES };
