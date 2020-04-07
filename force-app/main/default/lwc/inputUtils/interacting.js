/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { EventEmitter } from 'c/utilsPrivate';

export class InteractingState {
    constructor(options) {
        const duration =
            options && options.duration >= 0 ? options.duration : 2000;

        this.eventemitter = new EventEmitter();
        this._interacting = false;
        this._debouncedLeave = debounce(this.leave.bind(this), duration);

        this._debounceInteraction = options && options.debounceInteraction;
        this._interactedRecently = false;
        if (this._debounceInteraction) {
            this._debouncedEmitLeave = debounce(() => {
                if (!this._interacting) {
                    this._interactedRecently = false;
                    this.eventemitter.emit('leave');
                }
            }, 200);

            this._debouncedEmitEnter = () => {
                if (!this._interactedRecently) {
                    this._interactedRecently = true;
                    this.eventemitter.emit('enter');
                }
            };
        }
    }

    isInteracting() {
        return this._interacting;
    }

    enter() {
        if (!this._interacting) {
            this._interacting = true;
            if (this._debounceInteraction) {
                this._debouncedEmitEnter();
            } else {
                this.eventemitter.emit('enter');
            }
        }
    }

    onenter(handler) {
        this.eventemitter.on('enter', handler);
    }

    leave() {
        if (this._interacting) {
            this._interacting = false;
            if (this._debounceInteraction) {
                this._debouncedEmitLeave();
            } else {
                this.eventemitter.emit('leave');
            }
        }
    }

    onleave(handler) {
        this.eventemitter.on('leave', handler);
    }

    interacting() {
        this.enter();
        this._debouncedLeave();
    }
}

export function debounce(func, delay, options) {
    const _options = options || {};
    let invokeLeading = _options.leading;
    let timer;

    return function debounced() {
        const args = Array.prototype.slice.apply(arguments);
        if (invokeLeading) {
            func.apply(this, args);
            invokeLeading = false;
        }
        clearTimeout(timer);
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        timer = setTimeout(function() {
            func.apply(this, args);
            invokeLeading = _options.leading;
        }, delay);
    };
}
