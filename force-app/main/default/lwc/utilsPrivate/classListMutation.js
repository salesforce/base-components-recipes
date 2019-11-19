/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

export function classListMutation(classList, config) {
    Object.keys(config).forEach(key => {
        if (typeof key === 'string' && key.length) {
            if (config[key]) {
                classList.add(key);
            } else {
                classList.remove(key);
            }
        }
    });
}