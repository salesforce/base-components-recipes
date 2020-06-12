/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api } from 'lwc';

export default class AccordionTest extends LightningElement {
    @api isBVisible = false;
    @api activeSection;
    @api sectiontoggleHandler;
    @api allowMultipleSectionsOpen = false;
    @api isAccordionHidden = false;

    @api
    getAccordionActiveSectionName() {
        return this.template.querySelector('c-accordion').activeSectionName;
    }
}
