/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

export function assert(condition, message) {
    if (process.env.NODE_ENV !== 'production') {
        if (!condition) {
            throw new Error(message);
        }
    }
}
