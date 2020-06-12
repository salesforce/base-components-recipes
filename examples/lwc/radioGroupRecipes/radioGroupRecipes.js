/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, track } from 'lwc';

export default class RadioGroupRecipes extends LightningElement {
    @track value1 = '';
    @track value2 = '';
    @track value3 = '';
    @track value4 = '';
    @track value5 = '';
    @track value6 = '';

    get options() {
        return [
            { label: 'Sales', value: 'option1' },
            { label: 'Force', value: 'option2' }
        ];
    }
}
