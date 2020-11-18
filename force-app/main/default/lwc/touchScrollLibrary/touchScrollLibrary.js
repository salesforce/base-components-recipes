/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { assert } from 'c/utilsPrivate';
import formFactor from '@salesforce/client/formFactor';

function getPositionY(event) {
    return event.touches ? event.touches[0].screenY : event.screenY;
}

function canScroll(el) {
    var canScrollY = el.scrollHeight > el.offsetHeight;
    var canScrollX = el.scrollWidth > el.offsetWidth;
    return canScrollY || canScrollX;
}

function alwaysScrolls(el) {
    var isInputRange = el.tagName === 'INPUT' && el.type === 'range';
    return isInputRange;
}

function nativeScroll(el) {
    var isTextarea = el.tagName === 'TEXTAREA';
    return isTextarea;
}

function isAtTop(el) {
    return el.scrollTop === 0;
}

function isAtBottom(el) {
    return (
        el.scrollHeight - el.scrollTop === el.offsetHeight ||
        el.scrollHeight - el.scrollTop === el.clientHeight
    );
}

function skipUiScroller(event) {
    event.cancelScrolling = true;
    event.preventBounce = false;
}

function enableUiScroller(event) {
    event.cancelScrolling = false;
    event.preventBounce = true;
}

export class TouchScroller {
    _initialized = false;
    _startY = null;

    static isMobile() {
        return formFactor !== 'Large';
    }

    constructor(target) {
        assert(
            target,
            'a non-empty target is required for TouchScroller to add touch listeners to'
        );

        this._target = target;
        this.initialize();
    }

    initialize() {
        if (!this._initialized && this._target) {
            if (TouchScroller.isMobile()) {
                this._target.addEventListener('touchstart', (event) =>
                    this.handleTouchStart(event)
                );

                this._target.addEventListener('touchmove', (event) =>
                    this.handleTouchMove(event)
                );
            }

            this._initialized = true;
        }
    }

    handleTouchStart(event) {
        this._startY = getPositionY(event);
    }

    handleTouchMove(event) {
        const target = event.target;

        if (alwaysScrolls(target)) {
            skipUiScroller(event);
            return;
        }

        const canScrollTarget = nativeScroll(target) && canScroll(target);

        if (canScrollTarget) {
            const curY = getPositionY(event);
            let atTop, atBottom;

            if (canScrollTarget && !event.preventBounce) {
                atTop = this._startY < curY && isAtTop(target);
                atBottom = this._startY > curY && isAtBottom(target);
            }

            if (!atTop && !atBottom) {
                skipUiScroller(event);
            } else {
                enableUiScroller(event);
            }
        }
    }
}
