/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { ArraySlice } from './utility';

export class EventEmitter {
    constructor() {
        this.registry = {};
    }

    on(name, listener) {
        this.registry[name] = this.registry[name] || [];
        this.registry[name].push(listener);
        return this;
    }

    once(name, listener) {
        const doOnce = function() {
            listener.apply(null, arguments);
            this.removeListener(name, doOnce);
        }.bind(this);
        this.on(name, doOnce);
        return this;
    }

    emit(name) {
        const args = ArraySlice.call(arguments, 1);
        const listeners = this.registry[name];
        let count = 0;

        if (listeners) {
            listeners.forEach(listener => {
                count += 1;
                listener.apply(null, args);
            });
        }
        return count > 0;
    }

    removeListener(name, listener) {
        const listeners = this.registry[name];
        if (listeners) {
            for (let i = 0, len = listeners.length; i < len; i += 1) {
                if (listeners[i] === listener) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        }
        return this;
    }
}
