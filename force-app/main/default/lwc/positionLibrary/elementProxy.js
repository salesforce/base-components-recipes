/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { isInDom, WindowManager } from './util';

export class ElementProxy {
    constructor(el, id) {
        this.id = id;
        this.width = 0;
        this.height = 0;
        this.left = 0;
        this.top = 0;
        this.right = 0;
        this.bottom = 0;
        this._dirty = false;
        this._node = null;
        this._releaseCb = null;

        if (!el) {
            throw new Error('Element missing');
        }

        if (WindowManager.isWindow(el)) {
            el = WindowManager.window;
        }

        this._node = el;
        this.setupObserver();
        this.refresh();
    }

    setupObserver() {
        if (WindowManager.MutationObserver && !this._node.isObserved) {
            this._observer = new WindowManager.MutationObserver(
                this.refresh.bind(this)
            );

            if (!WindowManager.isWindow(this._node)) {
                this._observer.observe(this._node, {
                    attributes: true,
                    childList: true,
                    characterData: true,
                    subtree: true
                });

                this._node.isObserved = true;
            }
        }
    }

    setReleaseCallback(cb, scope) {
        const scopeObj = scope || this;
        this._releaseCb = cb.bind(scopeObj);
    }

    checkNodeIsInDom() {
        if (!isInDom(this._node)) {
            return false;
        }
        return true;
    }

    refresh() {
        const w = WindowManager.window;

        if (!this.isDirty()) {
            if (!this.checkNodeIsInDom()) {
                return this.release();
            }

            let box, x, scrollTop, scrollLeft;

            if (typeof w.pageYOffset !== 'undefined') {
                scrollTop = w.pageYOffset;
                scrollLeft = w.pageXOffset;
            } else {
                scrollTop = w.scrollY;
                scrollLeft = w.scrollX;
            }

            if (!WindowManager.isWindow(this._node)) {
                const offsetHeight = this._node.offsetHeight;
                box = this._node.getBoundingClientRect();

                for (x in box) {
                    this[x] = Math.floor(box[x]);
                }
                this.top = Math.floor(this.top + scrollTop);
                this.bottom = Math.floor(this.top + box.height);
                this.left = Math.floor(this.left + scrollLeft);
                this.right = Math.floor(this.left + box.width);
            } else {
                box = {};
                this.width = WindowManager.documentElement.clientWidth;
                this.height = WindowManager.documentElement.clientHeight;
                this.left = scrollLeft;
                this.top = scrollTop;
                this.right =
                    WindowManager.documentElement.clientWidth + scrollLeft;
                this.bottom = WindowManager.documentElement.clientHeight;
            }

            this._dirty = false;
        }
        return this._dirty;
    }

    getNode() {
        return this._node;
    }

    isDirty() {
        return this._dirty;
    }

    bake() {
        const w = WindowManager.window;
        const absPos = this._node.getBoundingClientRect();
        const style = w.getComputedStyle(this._node) || this._node.style;

        const hasPageOffset = typeof w.pageYOffset !== 'undefined';
        const scrollTop = hasPageOffset ? w.pageYOffset : w.scrollY;
        const scrollLeft = hasPageOffset ? w.pageXOffset : w.scrollX;

        const originalLeft = style.left.match(/auto|fixed/)
            ? '0'
            : parseInt(style.left.replace('px', ''), 10);
        const originalTop = style.top.match(/auto|fixed/)
            ? '0'
            : parseInt(style.top.replace('px', ''), 10);

        const leftDif = Math.round(this.left - (absPos.left + scrollLeft));
        const topDif = this.top - (absPos.top + scrollTop);

        this._node.style.left = `${originalLeft + leftDif}px`;
        this._node.style.top = `${originalTop + topDif}px`;

        if (this._restoreSize) {
            this.originalHeight =
                this.originalHeight || this._node.style.height;
            this.originalWidth = this.originalWidth || this._node.style.width;

            this._node.style.width = `${this.width}px`;
            this._node.style.height = `${this.height}px`;
        }

        this._dirty = false;
    }

    setDirection(direction, val) {
        this[direction] = val;
        this._dirty = true;

        if (direction === 'height' || direction === 'width') {
            this._restoreSize = true;
        }
    }

    release() {
        if (this._restoreSize) {
            this._node.style.width = this.originalWidth;
            this._node.style.height = this.originalHeight;
            if (this._removeMinHeight) {
                this._node.style.minHeight = '';
            }
        }
        if (this._releaseCb) {
            this._releaseCb(this);
        }
    }

    querySelectorAll(selector) {
        return this._node.querySelectorAll(selector);
    }
}