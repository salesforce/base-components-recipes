/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api } from 'lwc';

export default class ctestVerticalNavigationTest extends LightningElement {
    @api compact;
    @api shaded;
    @api selectedItem;
    @api ariaLabel;

    handleBeforeSelect(event) {
        const mockBeforeSelectEvent = new CustomEvent('mockbeforeselect', {
            cancelable: true
        });

        this.dispatchEvent(mockBeforeSelectEvent);

        if (mockBeforeSelectEvent.defaultPrevented) {
            event.preventDefault();
        }
    }

    handleSelect() {
        this.dispatchEvent(new CustomEvent('mockselect'));
    }
}
