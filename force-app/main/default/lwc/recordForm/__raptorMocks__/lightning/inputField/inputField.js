/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api } from 'lwc';
const initial = 'initial';
export default class cInputField extends LightningElement {
    @api fieldName;
    val = 'initial';

    set value(val) {
        this.val = val;
    }

    @api get value() {
        return this.val;
    }

    @api
    reset() {
        this.val = initial;
    }
}
