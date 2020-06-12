/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api, track } from 'lwc';

export default class MockRecordViewHolder extends LightningElement {
    @track _recordId;
    @track _showIncludedField = false;
    @track _showExcludedField = false;
    @track _showNestedChild = false;

    @track _apiName;
    @track _density;

    set recordId(id) {
        this._recordId = id;
    }

    @api get recordId() {
        return this._recordId;
    }

    set density(val) {
        this._density = val;
    }

    @api get density() {
        return this._density;
    }

    set objectApiName(value) {
        this._apiName = value;
    }

    @api get objectApiName() {
        return this._apiName;
    }

    set showIncludedField(value) {
        this._showIncludedField = value;
    }

    @api get showIncludedField() {
        return this._showIncludedField;
    }

    set showExcludedField(value) {
        this._showExcludedField = value;
    }

    @api get showExcludedField() {
        return this._showExcludedField;
    }

    set showNestedChild(val) {
        this._showNestedChild = val;
    }

    @api get showNestedChild() {
        return this._showNestedChild;
    }

    handleLoad(e) {
        this.dispatchEvent(
            new CustomEvent('load', {
                detail: e.detail
            })
        );
    }
}
