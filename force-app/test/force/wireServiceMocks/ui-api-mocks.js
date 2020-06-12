/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import * as actions from './actions-data';
import * as lookups from './lookups-data';
import { getImmutableObservable } from './immutable';

function getMockError(errorMessage) {
    return {
        errorCode: 'MOCK_UI_API_ERROR_CODE',
        message: errorMessage
    };
}

function getMockGlobalActions() {
    return Promise.resolve(actions.ACTIONS_GLOBAL.actions.Global.actions);
}

function getMockListViewChartActions(objectApiName) {
    if (objectApiName !== 'ListViewChartInstance') {
        return Promise.reject(
            getMockError(
                'Only ListViewChartInstance is valid for objectApiName'
            )
        );
    }
    return Promise.resolve(
        actions.ACTIONS_LISTVIEWCHARTINSTANCE.actions.ListViewChartInstance
            .actions
    );
}

function getMockListViewActions(listViewId) {
    const ret = actions.ACTIONS_LISTVIEW.actions[listViewId];
    if (!ret) {
        return Promise.reject(
            getMockError(`listViewId ${listViewId} not found`)
        );
    }

    return Promise.resolve(ret.actions);
}

function getMockListViewRecordActions(recordId) {
    const ret = actions.ACTIONS_LISTVIEWRECORD.actions[recordId];
    if (!ret) {
        return Promise.reject(getMockError(`recordId ${recordId} not found`));
    }

    return Promise.resolve(ret.actions);
}

function getMockLookupActions(objectApiName) {
    const ret = actions.ACTIONS_LOOKUP.actions[objectApiName];
    if (!ret) {
        return Promise.reject(
            getMockError(`objectApiName ${objectApiName} not found`)
        );
    }

    return Promise.resolve(ret.actions);
}

function getMockMruListActions(objectApiName) {
    const ret = actions.ACTIONS_MRULIST.actions[objectApiName];
    if (!ret) {
        return Promise.reject(
            getMockError(`objectApiName ${objectApiName} not found`)
        );
    }

    return Promise.resolve(ret.actions);
}

function getMockRecordActions(recordId) {
    const ret = actions.ACTIONS_RECORDDETAIL.actions[recordId];
    if (!ret) {
        return Promise.reject(getMockError(`recordId ${recordId} not found`));
    }

    return Promise.resolve(ret.actions);
}

function getMockRecordEditActions(recordId) {
    const ret = actions.ACTIONS_RECORDEDIT.actions[recordId];
    if (!ret) {
        return Promise.reject(getMockError(`recordId ${recordId} not found`));
    }

    return Promise.resolve(ret.actions);
}

function getMockRecordRelatedListActions(recordId) {
    const ret = actions.ACTIONS_RELATEDLIST.actions[recordId];
    if (!ret) {
        return Promise.reject(getMockError(`recordId ${recordId} not found`));
    }

    return Promise.resolve(ret.actions);
}

function getMockRecordRelatedListRecordActions(recordId) {
    const ret = actions.ACTIONS_RELATEDLISTRECORD.actions[recordId];
    if (!ret) {
        return Promise.reject(getMockError(`recordId ${recordId} not found`));
    }

    return Promise.resolve(ret.actions);
}

function getMockFlexipageActions(flexipageName) {
    const ret = actions.ACTIONS_FLEXIPAGE.actions[flexipageName];
    if (!ret) {
        return Promise.reject(
            getMockError(`flexipageName ${flexipageName} not found`)
        );
    }

    return Promise.resolve(ret.actions);
}

function getMockPhotoActions(recordId) {
    const ret = actions.ACTIONS_PHOTO.actions[recordId];
    if (!ret) {
        return Promise.reject(getMockError(`recordId ${recordId} not found`));
    }

    return Promise.resolve(ret.actions);
}

function getMockLookups(
    objectApiName,
    fieldApiName,
    targetApiName,
    ...requestParams
) {
    const hasTarget = targetApiName !== undefined;
    const q =
        requestParams[0] && 'q' in requestParams[0] ? requestParams[0].q : '';
    const searchType =
        requestParams[0] && 'searchType' in requestParams[0]
            ? requestParams[0].searchType
            : undefined;
    const page =
        requestParams[0] && 'page' in requestParams[0]
            ? requestParams[0].page
            : undefined;
    const pageSize =
        requestParams[0] && 'pageSize' in requestParams[0]
            ? requestParams[0].pageSize
            : undefined;

    if (
        lookups.LOOKUPS.SUPPORTED_OBJECTS.indexOf(objectApiName) === -1 ||
        lookups.LOOKUPS.SUPPORTED_FIELDS.indexOf(fieldApiName) === -1 ||
        (hasTarget &&
            lookups.LOOKUPS.SUPPORTED_TARGETS.indexOf(targetApiName) === -1) ||
        lookups.LOOKUPS.SUPPORTED_TYPES.indexOf(searchType) === -1 ||
        lookups.LOOKUPS.SUPPORTED_PAGES.indexOf(page) === -1 ||
        lookups.LOOKUPS.SUPPORTED_PAGESIZES.indexOf(pageSize) === -1
    ) {
        return Promise.reject(getMockError(`unsupported lookup`));
    }

    const key = `${objectApiName}:${fieldApiName}:${targetApiName}:${q}:${searchType}:${page}:${pageSize}`;

    const val = lookups.LOOKUPS.RESULTS[key];
    if (val !== undefined) {
        return Promise.resolve(val);
    }
    return Promise.resolve(
        lookups.LOOKUPS.getNoResults(
            objectApiName,
            fieldApiName,
            targetApiName,
            q,
            searchType,
            page,
            pageSize
        )
    );
}

export function getGlobalActions(config) {
    if (!config) {
        return undefined;
    }

    return getImmutableObservable(getMockGlobalActions());
}

export function getRecordActions(config) {
    if (!config) {
        return undefined;
    }

    return getImmutableObservable(getMockRecordActions(config.recordId));
}

export function getRecordEditActions(config) {
    if (!config) {
        return undefined;
    }

    return getImmutableObservable(getMockRecordEditActions(config.recordId));
}

export function getRelatedListActions(config) {
    if (!config) {
        return undefined;
    }

    return getImmutableObservable(
        getMockRecordRelatedListActions(config.recordId)
    );
}

export function getRelatedListRecordActions(config) {
    if (!config) {
        return undefined;
    }

    return getImmutableObservable(
        getMockRecordRelatedListRecordActions(
            config.recordId,
            config.relatedRecordId
        )
    );
}

export function getListViewHeaderActions(config) {
    if (!config) {
        return undefined;
    }

    return getImmutableObservable(getMockListViewActions(config.listViewId));
}

export function getListViewRecordActions(config) {
    if (!config) {
        return undefined;
    }

    return getImmutableObservable(
        getMockListViewRecordActions(config.recordId)
    );
}

export function getListViewChartActions(config) {
    if (!config) {
        return undefined;
    }

    return getImmutableObservable(
        getMockListViewChartActions(config.objectApiName)
    );
}

export function getLightningPageActions(config) {
    if (!config) {
        return undefined;
    }

    return getImmutableObservable(
        getMockFlexipageActions(config.flexipageName)
    );
}

export function getLookupActions(config) {
    if (!config) {
        return undefined;
    }

    return getImmutableObservable(getMockLookupActions(config.objectApiName));
}

export function getMruListActions(config) {
    if (!config) {
        return undefined;
    }

    return getImmutableObservable(getMockMruListActions(config.objectApiName));
}

export function getPhotoActions(config) {
    if (!config) {
        return undefined;
    }

    return getImmutableObservable(getMockPhotoActions(config.recordId));
}

export function getLookupRecords(config) {
    if (!config || !config.objectApiName || !config.fieldApiName) {
        return undefined;
    }

    return getImmutableObservable(
        getMockLookups(
            config.objectApiName,
            config.fieldApiName,
            config.targetApiName,
            config.requestParams
        )
    );
}
