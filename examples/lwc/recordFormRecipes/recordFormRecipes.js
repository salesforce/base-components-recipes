/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, wire, track } from 'lwc';
import getRecord  from '@salesforce/apex/GetAccountId.GetAccountId';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import BILLING_FIELD from '@salesforce/schema/Account.BillingAddress';

export default class RecordFormEditExample extends LightningElement {
    fields = [NAME_FIELD, REVENUE_FIELD, BILLING_FIELD];
    @track accountId;

    @wire(getRecord)
    wiredProperty(value) {
        if(value.data) {
            this.accountId = value.data.Id;
        } else if (value.error) {
            console.log("OOOPS: ", value.error)
        }
    }


    handleSubmit(event) {
        event.preventDefault(); // stop the form from submitting
        const fields = event.detail.fields;
        fields.LastName = 'My New Last Name'; // modify a field
        this.template.querySelector('c-record-form').submit(fields);
    }
}
