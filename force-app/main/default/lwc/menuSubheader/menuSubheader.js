/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api } from 'lwc';

export default class cMenuSubheader extends LightningElement {
    @api label;

    connectedCallback() {
        this.classList.add('slds-dropdown__header');
        this.classList.add('slds-truncate');

        this.setAttribute('role', 'separator');
    }
}