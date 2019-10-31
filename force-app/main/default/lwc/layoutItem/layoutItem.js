/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api, track } from 'lwc';
import {
    normalizeFlexibility,
    normalizePadding,
    validateSize,
    computeLayoutClass,
    normalizeSize,
    normalizeDirection
} from './styleUtils';

export default class cLayoutItem extends LightningElement {
    @api get flexibility() {
        return this._flexibility;
    }
    set flexibility(value) {
        this._flexibility = normalizeFlexibility(value);
        this.updateClassList();
    }
    @track _flexibility;

    @api get alignmentBump() {
        return this._alignmentBump;
    }
    set alignmentBump(value) {
        this._alignmentBump = normalizeDirection(value);
        this.updateClassList();
    }
    @track _alignmentBump;

    @api get padding() {
        return this._padding;
    }
    set padding(value) {
        this._padding = normalizePadding(value);
        this.updateClassList();
    }
    @track _padding;

    @api get size() {
        return this._size;
    }
    set size(value) {
        this._size = normalizeSize(value);
        this.validateSize();
        this.updateClassList();
    }
    @track _size;

    @api get smallDeviceSize() {
        return this._smallDeviceSize;
    }
    set smallDeviceSize(value) {
        this._smallDeviceSize = normalizeSize(value);
        this.validateSize();
        this.updateClassList();
    }
    @track _smallDeviceSize;

    @api get mediumDeviceSize() {
        return this._mediumDeviceSize;
    }
    set mediumDeviceSize(value) {
        this._mediumDeviceSize = normalizeSize(value);
        this.validateSize();
    }
    @track _mediumDeviceSize;

    @api get largeDeviceSize() {
        return this._largeDeviceSize;
    }
    set largeDeviceSize(value) {
        this._largeDeviceSize = normalizeSize(value);
        this.validateSize();
        this.updateClassList();
    }
    @track _largeDeviceSize;

    _layoutClass = [];

    connectedCallback() {
        this.updateClassList();
    }

    updateClassList() {
        this.classList.remove(...this._layoutClass);
        const config = computeLayoutClass(
            {
                default: this.size,
                small: this.smallDeviceSize,
                medium: this.mediumDeviceSize,
                large: this.largeDeviceSize
            },

            this.flexibility,
            this.padding,
            this.alignmentBump
        );

        this._layoutClass = Object.keys(config);
        this.classList.add(...this._layoutClass);
    }

    validateSize() {
        validateSize(
            this.size,
            this.smallDeviceSize,
            this.mediumDeviceSize,
            this.largeDeviceSize
        );
    }
}