import { bakeOff } from './elementProxyCache';
import { getZIndexBaseline } from 'c/utilsPrivate';

class RepositionQueue {
    callbacks = [];
    repositionScheduled = false;
    _constraints = [];
    timeoutId = 0;
    lastIndex = getZIndexBaseline();

    eventsBound = false;

    get nextIndex() {
        return this.lastIndex++;
    }

    get constraints() {
        return this._constraints;
    }

    set constraints(value) {
        this._constraints = this._constraints.concat(value);
    }

    dispatchRepositionCallbacks() {
        while (this.callbacks.length > 0) {
            this.callbacks.shift()();
        }
    }

    add(callback) {
        if (typeof callback === 'function') {
            this.callbacks.push(callback);
            return true;
        }
        return false;
    }

    scheduleReposition(callback) {
        if (this.timeoutId === 0) {
            this.timeoutId = setTimeout(() => {
                this.reposition(callback);
            }, 10);
        }
    }

    reposition(callback) {
        if (typeof callback === 'function') {
            this.callbacks.push(callback);
        }

        clearTimeout(this.timeoutId);
        this.timeoutId = 0;

        if (!this.repositionScheduled) {
            requestAnimationFrame(() => {
                this.repositionScheduled = false;

                this._constraints = this._constraints.filter(constraint => {
                    if (!constraint.destroyed) {
                        constraint.computeDisplacement().computePosition();
                        return true;
                    }
                    return false;
                });

                bakeOff();
                this.dispatchRepositionCallbacks();
            });
            this.repositionScheduled = true;
        }
    }

    get repositioning() {
        if (!this._reposition) {
            this._reposition = this.scheduleReposition.bind(this);
        }
        return this._reposition;
    }

    bindEvents() {
        if (!this.eventsBound) {
            window.addEventListener('resize', this.repositioning);
            window.addEventListener('scroll', this.repositioning);
            this.eventsBound = true;
        }
    }

    detachEvents() {
        window.removeEventListener('resize', this.repositioning);
        window.removeEventListener('scroll', this.repositioning);
        this.eventsBound = false;
    }
}

const positionQueue = new RepositionQueue();

export function scheduleReposition(callback) {
    positionQueue.scheduleReposition(callback);
}

export function bindEvents() {
    positionQueue.bindEvents();
}

export function addConstraints(list) {
    positionQueue.constraints = list;
}

export function reposition(callback) {
    positionQueue.reposition(callback);
}

export function nextIndex() {
    return positionQueue.nextIndex;
}
