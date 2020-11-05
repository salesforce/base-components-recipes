/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { registerWireService, register, ValueChangedEvent } from 'wire-service';
import {
    getRecord,
    getObjectInfo,
    getPicklistValues,
    getPicklistValuesByRecordType,
    getRecordUi,
    getRecordCreateDefaults,
    store
} from './lds-records.js';
import {
    getGlobalActions,
    getRecordActions,
    getRecordEditActions,
    getRelatedListActions,
    getRelatedListRecordActions,
    getListViewHeaderActions,
    getListViewRecordActions,
    getListViewChartActions,
    getLightningPageActions,
    getLookupActions,
    getMruListActions,
    getPhotoActions,
    getLookupRecords
} from './ui-api-mocks.js';

function registerMockedWireService(engine) {
    registerWireService(engine.register);
    const mocks = [
        getRecord,
        getObjectInfo,
        getPicklistValues,
        getPicklistValuesByRecordType,
        getRecordUi,
        getRecordCreateDefaults,
        getGlobalActions,
        getRecordActions,
        getRecordEditActions,
        getRelatedListActions,
        getRelatedListRecordActions,
        getListViewHeaderActions,
        getListViewRecordActions,
        getListViewChartActions,
        getLightningPageActions,
        getLookupActions,
        getMruListActions,
        getPhotoActions,
        getLookupRecords
    ];

    mocks.forEach((mock) => {
        register(mock, (wiredEventTarget) => {
            let subscription;
            let config;

            wiredEventTarget.dispatchEvent(
                new ValueChangedEvent({ data: undefined, error: undefined })
            );

            const observer = {
                next: (data) =>
                    wiredEventTarget.dispatchEvent(
                        new ValueChangedEvent({ data, error: undefined })
                    ),

                error: (error) =>
                    wiredEventTarget.dispatchEvent(
                        new ValueChangedEvent({ data: undefined, error })
                    )
            };

            wiredEventTarget.addEventListener('connect', () => {
                const observable = mock(config);
                if (observable) {
                    subscription = observable.subscribe(observer);
                }
            });

            wiredEventTarget.addEventListener('disconnect', () => {
                subscription.unsubscribe();
            });

            wiredEventTarget.addEventListener('config', (newConfig) => {
                config = newConfig;
                if (subscription) {
                    subscription.unsubscribe();
                    subscription = undefined;
                }
                const observable = mock(config);
                if (observable) {
                    subscription = observable.subscribe(observer);
                }
            });
        });
    });
}

export {
    getRecord,
    getObjectInfo,
    getPicklistValues,
    getPicklistValuesByRecordType,
    getRecordUi,
    getRecordCreateDefaults,
    getGlobalActions,
    getRecordActions,
    getRecordEditActions,
    getRelatedListActions,
    getRelatedListRecordActions,
    getListViewHeaderActions,
    getListViewRecordActions,
    getListViewChartActions,
    getLightningPageActions,
    getLookupActions,
    getMruListActions,
    getPhotoActions,
    getLookupRecords,
    store,
    registerMockedWireService
};
