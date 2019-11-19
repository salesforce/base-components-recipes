/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, track } from 'lwc';

const NUM_OF_TABS = 30;

export default class TabsetOverflow extends LightningElement {
    @track activeValueMessage = '';

    get tabs() {
        const tabs = [];
        for (let i = 0; i < NUM_OF_TABS; i++) {
            tabs.push({
                value: `${i}`,
                label: `Item ${i}`,
                content: `Tab Content ${i}`
            });
        }
        return tabs;
    }
}
