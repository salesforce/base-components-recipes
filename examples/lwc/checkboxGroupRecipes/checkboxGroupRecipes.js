/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/*
 * !! NOTE: Do not commit changes to this file. It is intended as a starter shell only.
 */
import { LightningElement, track } from 'lwc';

export default class CheckboxGroupRecipes extends LightningElement {
    @track value1 = ['option1'];
    @track value2 = [];
    @track value3 = [];

    get options() {
        return [
            { label: 'Ross', value: 'option1' },
            { label: 'Rachel', value: 'option2' },
            { label: 'Bob', value: 'option3' },
            { label: 'Greg', value: 'option4' },
            { label: 'Lokesh', value: 'option5' }
        ];
    }

    get selectedValues() {
        return this.value1.join(',');
    }

    handleChangeOne(e) {
        this.value1 = e.detail.value;
    }
    handleChangeTwo(e) {
        this.value2 = e.detail.value;
    }
}
