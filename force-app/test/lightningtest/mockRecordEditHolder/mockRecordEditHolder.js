/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api, track } from 'lwc';

export default class MockRecordEditHolder extends LightningElement {
    @track _showChild = false;

    @track _showNestedChild = false;

    @track _recordId;

    @track _recordTypeId;

    @track _showPicklist = false;

    @track _objectApiName;

    @track _density;

    @track _layoutType;

    set density(val) {
        this._density = val;
    }

    @api get density() {
        return this._density;
    }

    set recordId(id) {
        this._recordId = id;
    }

    set recordTypeId(id) {
        this._recordTypeId = id;
    }

    @api get recordTypeId() {
        return this._recordTypeId;
    }

    @api get recordId() {
        return this._recordId;
    }

    set showChild(val) {
        this._showChild = val;
    }

    @api get showChild() {
        return this._showChild;
    }

    set showNestedChild(val) {
        this._showNestedChild = val;
    }

    @api get showNestedChild() {
        return this._showNestedChild;
    }

    set showPicklist(val) {
        this._showPicklist = val;
    }

    @api get showPicklist() {
        return this._showPicklist;
    }

    set objectApiName(val) {
        this._objectApiName = val;
    }

    @api get objectApiName() {
        return this._objectApiName;
    }

    set layoutType(val) {
        this._layoutType = val;
    }

    @api get layoutType() {
        return this._layoutType;
    }

    handleLoad(e) {
        this.dispatchEvent(
            new CustomEvent('load', {
                detail: e.detail
            })
        );
    }
}
