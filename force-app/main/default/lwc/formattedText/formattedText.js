/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api, track } from 'lwc';
import {
    normalizeBoolean,
    parseToFormattedLinkifiedParts,
    parseToFormattedParts
} from 'c/utilsPrivate';

export default class FormattedText extends LightningElement {
    @api value = '';

    @track _linkify = false;

    @api get linkify() {
        return this._linkify;
    }
    set linkify(value) {
        this._linkify = normalizeBoolean(value);
    }

    get formattedParts() {
        if (!this.value || typeof this.value !== 'string') {
            return [];
        }
        return this.linkify
            ? parseToFormattedLinkifiedParts(this.value)
            : parseToFormattedParts(this.value);
    }
}
