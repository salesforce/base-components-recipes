/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api, track } from 'lwc';
import { normalizeBoolean } from 'c/utilsPrivate';
import { getLinkInfo } from 'c/routingService';

export default class cFormattedLookup extends LightningElement {
    @api displayValue;

    set recordId(value) {
        this.state.recordId = value;

        this.updateLinkData();
    }

    @api get recordId() {
        return this.state.recordId;
    }

    @api get disabled() {
        return this.state.disabled;
    }
    set disabled(value) {
        this.state.disabled = normalizeBoolean(value);
        this.state.isNavigable =
            !this.disabled && !!this.dispatcher && !!this.state.url;
    }

    _connected;

    dispatcher;

    @track
    state = {
        disabled: false,
        recordId: null,
        url: null,
        isNavigable: false
    };

    constructor() {
        super();
        this._connected = false;
        this.dispatcher = null;
    }

    connectedCallback() {
        this._connected = true;
        this.updateLinkData();
    }

    disconnectedCallback() {
        this._connected = false;
    }

    updateLinkData() {
        if (this._connected && this.state.recordId) {
            getLinkInfo(this, {
                stateType: 'standard__recordPage',
                attributes: {
                    recordId: this.state.recordId,
                    actionName: 'view'
                }
            }).then((linkInfo) => {
                this.state.url = linkInfo.url;
                this.dispatcher = linkInfo.dispatcher;
                this.state.isNavigable =
                    !this.disabled && !!this.dispatcher && !!this.state.url;
            });
        }
    }

    handleClick(event) {
        this.dispatcher(event);
    }
}
