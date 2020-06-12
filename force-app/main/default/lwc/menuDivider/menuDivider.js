/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api, track } from 'lwc';
import { classSet } from 'c/utils';
import { normalizeString as normalize } from 'c/utilsPrivate';

export default class cMenuDivider extends LightningElement {
    @track _variant = 'standard';

    connectedCallback() {
        this.setAttribute('role', 'separator');
    }

    @api get variant() {
        return this._variant;
    }

    set variant(value) {
        this._variant = normalize(value, {
            fallbackValue: 'standard',
            validValues: ['standard', 'compact']
        });
    }

    get computedClass() {
        return classSet({
            'slds-has-divider_top-space': this.variant === 'standard',
            'slds-has-divider_top': this.variant === 'compact'
        }).toString();
    }
}
