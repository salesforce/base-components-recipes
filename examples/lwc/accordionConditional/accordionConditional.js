/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, track } from 'lwc';

export default class LightningExampleAccordionConditional extends LightningElement {
    @track activeSectionMessage = '';
    @track isDVisible = false;

    handleToggleSection(event) {
        this.activeSectionMessage =
            'Open section name:  ' + event.detail.openSections;
    }

    handleToggleSectionD() {
        this.isDVisible = !this.isDVisible;
    }

    get isMessageVisible() {
        return this.activeSectionMessage.length > 0;
    }
}
