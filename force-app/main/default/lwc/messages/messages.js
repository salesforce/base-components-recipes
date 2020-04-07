/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, track, api } from 'lwc';
import { parseError } from 'c/recordEditUtils';
export default class cMessages extends LightningElement {
    @track err = {};

    @track hasError = false;

    @api
    setError(err) {
        const parsedError = parseError(err);
        this.hasError = !!err;
        this.err = parsedError;
    }

    @api get error() {
        return this.err;
    }

    set error(val) {
        this.setError(val);
    }
}
