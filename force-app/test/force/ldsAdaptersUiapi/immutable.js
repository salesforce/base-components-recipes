/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

export function getImmutable(obj) {
    return obj;
}

export function getImmutableObservable(promise) {
    return {
        subscribe: (config) => {
            promise
                .then((value) => {
                    config.next(getImmutable(value));
                })
                .catch(config.error);
            return {
                unsubscribe: () => {}
            };
        }
    };
}
