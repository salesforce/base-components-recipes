/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, track, wire } from 'lwc';
import getRecord from '@salesforce/apex/GetAccountId.GetAccountId';

export default class FormattedLookupRecipes extends LightningElement {
    @track accountId;
    @track accountName;

    @wire(getRecord)
    wiredProperty(value) {
        if (value.data) {
            this.accountId = value.data.Id;
            this.accountName = value.data.Name;
        } else if (value.error) {
            console.log('OOOPS: ', value.error);
        }
    }
}
