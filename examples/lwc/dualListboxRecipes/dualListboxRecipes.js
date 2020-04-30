/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, track } from 'lwc';

export default class dualListboxRecipes extends LightningElement {
    @track _selectedSimpleListbox = [];
    @track _selectedRequiredListbox = ['en'];

    get options() {
        return [
            { label: 'English', value: 'en' },
            { label: 'German', value: 'de' },
            { label: 'Spanish', value: 'es' },
            { label: 'French', value: 'fr' },
            { label: 'Italian', value: 'it' },
            { label: 'Japanese', value: 'ja' }
        ];
    }

    get requiredOptions() {
        return ['en'];
    }

    get selectedSimpleListbox() {
        return this._selectedSimpleListbox.length
            ? this._selectedSimpleListbox
            : 'none';
    }

    get selectedRequiredListbox() {
        return this._selectedRequiredListbox.length
            ? this._selectedRequiredListbox
            : 'none';
    }

    handleChangeInSimpleListbox(e) {
        this._selectedSimpleListbox = e.detail.value;
    }

    handleChangeInRequiredListbox(e) {
        this._selectedRequiredListbox = e.detail.value;
    }
}
