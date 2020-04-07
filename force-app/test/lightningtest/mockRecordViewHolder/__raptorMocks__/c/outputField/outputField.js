/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api } from 'lwc';

export default class MockOutputField extends LightningElement {
    wiredData = null;

    @api fieldName;

    @api
    getWiredData() {
        return this.wiredData;
    }

    @api
    wireRecordUi(data) {
        this.wiredData = data;
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
