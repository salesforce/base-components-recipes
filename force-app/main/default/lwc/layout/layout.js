/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api, track } from 'lwc';
import {
    normalizeParam,
    computeLayoutClass,
    HORIZONTAL_ALIGN,
    VERTICAL_ALIGN,
    BOUNDARY
} from './styleUtils';
import { normalizeBoolean } from 'c/utilsPrivate';

export default class cLayout extends LightningElement {
    @api get horizontalAlign() {
        return this._horizontalAlign;
    }
    set horizontalAlign(value) {
        this._horizontalAlign = normalizeParam(value, HORIZONTAL_ALIGN);
        this.updateClassList();
    }
    @track _horizontalAlign;

    @api get verticalAlign() {
        return this._verticalAlign;
    }
    set verticalAlign(value) {
        this._verticalAlign = normalizeParam(value, VERTICAL_ALIGN);
        this.updateClassList();
    }
    @track _verticalAlign;

    @api get pullToBoundary() {
        return this._pullToBoundary;
    }
    set pullToBoundary(value) {
        this._pullToBoundary = normalizeParam(value, BOUNDARY);
        this.updateClassList();
    }
    @track _pullToBoundary;

    @api get multipleRows() {
        return this._multipleRows || false;
    }
    set multipleRows(value) {
        this._multipleRows = normalizeBoolean(value);
        this.updateClassList();
    }
    @track _multipleRows;

    _layoutClass = [];

    connectedCallback() {
        this.updateClassList();
    }

    updateClassList() {
        this.classList.remove(...this._layoutClass);
        const config = computeLayoutClass(
            this.horizontalAlign,
            this.verticalAlign,
            this.pullToBoundary,
            this.multipleRows
        );

        this._layoutClass = Object.keys(config);
        this.classList.add(...this._layoutClass);
    }
}