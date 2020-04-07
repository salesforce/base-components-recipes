/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api } from 'lwc';
import { toNorthAmericanPhoneNumber } from 'c/utilsPrivate';

export default class cFormattedPhone extends LightningElement {
    @api value;

    @api tabIndex;

    _connected = false;

    connectedCallback() {
        this._connected = true;
    }

    disconnectedCallback() {
        this._connected = false;
    }

    @api
    focus() {
        if (this.phoneAnchor) {
            this.phoneAnchor.focus();
        }
    }

    @api
    blur() {
        if (this.phoneAnchor) {
            this.phoneAnchor.blur();
        }
    }

    @api
    click() {
        const anchor = this.phoneAnchor;
        if (anchor && anchor.click) {
            anchor.click();
        }
    }

    get phoneAnchor() {
        if (this._connected && this.showLink) {
            return this.template.querySelector('a');
        }
        return undefined;
    }

    get showLink() {
        return this.value != null && this.value !== '';
    }

    get formattedPhoneNumber() {
        return toNorthAmericanPhoneNumber(this.value);
    }

    get link() {
        return `tel:${this.value}`;
    }
}