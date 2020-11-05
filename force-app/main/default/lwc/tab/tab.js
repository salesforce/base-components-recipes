/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api, track } from 'lwc';
import { normalizeBoolean } from 'c/utilsPrivate';

export default class cTab extends LightningElement {
    @track _loadContent = false;

    connectedCallback() {
        this._connected = true;

        this.dispatchEvent(
            new CustomEvent('privatetabregister', {
                cancelable: true,
                bubbles: true,
                composed: true,
                detail: {
                    setDeRegistrationCallback: (deRegistrationCallback) => {
                        this._deRegistrationCallback = deRegistrationCallback;
                    }
                }
            })
        );
    }

    @api
    loadContent() {
        this._loadContent = true;

        this.dispatchEvent(new CustomEvent('active'));
    }

    disconnectedCallback() {
        this._connected = false;

        if (this._deRegistrationCallback) {
            this._deRegistrationCallback();
        }
    }

    @api get value() {
        return this._value;
    }

    set value(newValue) {
        this._value = String(newValue);
        this._dispatchDataChangeEventIfConnected();
    }

    @api get label() {
        return this._label;
    }

    set label(value) {
        this._label = value;
        this._dispatchDataChangeEventIfConnected();
    }

    @api get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
        this._dispatchDataChangeEventIfConnected();
    }

    @api get iconName() {
        return this._iconName;
    }

    set iconName(value) {
        this._iconName = value;
        this._dispatchDataChangeEventIfConnected();
    }

    @api get iconAssistiveText() {
        return this._iconAlernativeText;
    }

    set iconAssistiveText(value) {
        this._iconAlernativeText = value;
        this._dispatchDataChangeEventIfConnected();
    }

    @api get endIconName() {
        return this._endIconName;
    }

    set endIconName(value) {
        this._endIconName = value;
        this._dispatchDataChangeEventIfConnected();
    }

    @api get endIconAlternativeText() {
        return this._endIconAlternativeText;
    }

    set endIconAlternativeText(value) {
        this._endIconAlternativeText = value;
        this._dispatchDataChangeEventIfConnected();
    }

    @api get showErrorIndicator() {
        return this._showErrorIndicator;
    }

    set showErrorIndicator(value) {
        this._showErrorIndicator = normalizeBoolean(value);
        this._dispatchDataChangeEventIfConnected();
    }

    _dispatchDataChangeEventIfConnected() {
        if (this._connected) {
            this.dispatchEvent(
                new CustomEvent('privatetabdatachange', {
                    cancelable: true,
                    bubbles: true,
                    composed: true
                })
            );
        }
    }
}
