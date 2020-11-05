/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api, track } from 'lwc';
import { isAbsoluteUrl } from 'c/utilsPrivate';
import { updateRawLinkInfo } from 'c/routingService';

export default class cFormattedUrl extends LightningElement {
    @api target;

    @api tooltip;

    @api label;

    @api tabIndex;

    @track _url;
    @track _value;

    _connected = false;
    _dispatcher = () => {};

    @api get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        if (this._connected) {
            this.updateLinkInfo(value);
        }
    }

    connectedCallback() {
        this._connected = true;
        this.updateLinkInfo(this.value);
    }

    disconnectedCallback() {
        this._connected = false;
    }

    @api
    focus() {
        if (this.urlAnchor) {
            this.urlAnchor.focus();
        }
    }

    @api
    blur() {
        if (this.urlAnchor) {
            this.urlAnchor.blur();
        }
    }

    @api
    click() {
        const anchor = this.urlAnchor;
        if (anchor && anchor.click) {
            anchor.click();
        }
    }

    get urlAnchor() {
        if (this._connected && this.hasValue) {
            return this.template.querySelector('a');
        }
        return undefined;
    }

    handleClick(event) {
        this._dispatcher(event);
    }

    updateLinkInfo(url) {
        updateRawLinkInfo(this, {
            url: this.makeAbsoluteUrl(url),
            target: this.target
        }).then((linkInfo) => {
            this._url = linkInfo.url;
            this._dispatcher = linkInfo.dispatcher;
        });
    }

    get computedLabel() {
        const { label, computedUrl } = this;
        return label != null && label !== '' ? label : computedUrl;
    }

    get computedUrl() {
        return this._url || this.makeAbsoluteUrl(this.value);
    }

    get hasValue() {
        const url = this.value;
        return url != null && url !== '';
    }

    makeAbsoluteUrl(url) {
        return isAbsoluteUrl(url) ? url : `http://${url}`;
    }
}
