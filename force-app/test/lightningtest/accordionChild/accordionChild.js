/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, track, api } from 'lwc';

export default class AccordionChild extends LightningElement {
    @api value;
    @track divContent = '';

    renderedCallback() {
        if (this.value > 0) {
            const myWidth = this.template.querySelector('div').clientWidth;
            if (myWidth > 0) {
                this.divContent = 'visible';
            }
        }
    }
}
