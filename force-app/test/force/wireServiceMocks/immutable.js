/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

export function getImmutable(obj) {
    const handler = {
        get: (target, key) => {
            const value = target[key];
            if (value && typeof value === 'object') {
                return getImmutable(value);
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

    return new Proxy(obj, handler);
}

export function getImmutableObservable(promise) {
    return {
        subscribe: (config) => {
            promise.then((value) => {
                config.next(getImmutable(value));
            }, config.error);
            return {
                unsubscribe: () => {}
            };
        }
    };
}
