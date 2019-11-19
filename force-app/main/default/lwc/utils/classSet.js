/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

const proto = {
    add(className) {
        if (typeof className === 'string') {
            this[className] = true;
        } else {
            Object.assign(this, className);
        }
        return this;
    },
    invert() {
        Object.keys(this).forEach(key => {
            this[key] = !this[key];
        });
        return this;
    },
    toString() {
        return Object.keys(this)
            .filter(key => this[key])
            .join(' ');
    }
};

export function classSet(config) {
    if (typeof config === 'string') {
        const key = config;
        config = {};
        config[key] = true;
    }
    return Object.assign(Object.create(proto), config);
}