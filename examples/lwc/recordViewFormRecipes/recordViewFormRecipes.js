/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, track, wire } from 'lwc';
import getRecord  from '@salesforce/apex/GetAccountId.GetAccountId';

export default class RecordViewFormRecipes extends LightningElement {
    @track accountId;

    @wire(getRecord)
    wiredProperty(value) {
        if(value.data) {
            this.accountId = value.data.Id;
        } else if (value.error) {
            console.log("OOOPS: ", value.error)
        }
    }
}
