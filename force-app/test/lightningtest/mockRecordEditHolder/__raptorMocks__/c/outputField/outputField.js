/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api } from 'lwc';

export default class MockInputField extends LightningElement {
    wiredData = null;
    errors = null;
    internalValue = null;
    @api fieldName;

    set value(val) {
        this.internalValue = val;
    }

    @api get value() {
        return this.internalValue;
    }

    @api dirty = false;
    @api variant;

    @api
    getWiredData() {
        return this.wiredData;
    }

    @api
    setErrors(errors) {
        this.errors = errors;
    }

    @api
    wireRecordUi(data) {
        this.wiredData = data;
    }

    @api
    setValue(val) {
        this.internalValue = val;
    }

    renderedCallback() {
        this.dispatchEvent(
            // eslint-disable-next-line lightning-global/no-custom-event-bubbling
            new CustomEvent('registeroutputfield', {
                bubbles: true,
                composed: true,
                cancelable: true
            })
        );
    }
}
