/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, track, wire } from 'lwc';
import getRecord  from '@salesforce/apex/GetAccountId.GetAccountId';

export default class RecordEditFormRecipes extends LightningElement {
    @track accountId;
    @track formStatus = "Form loaded";

    @wire(getRecord)
    wiredProperty(value) {
        if(value.data) {
            this.accountId = value.data.Id;
        } else if (value.error) {
            console.log("OOOPS: ", value.error)
        }
    }

    handleSuccess() {
        this.formStatus = "Form successfully submitted"
    }

    handleError(e) {
        this.formStatus = "We encountered an error"
        console.log("An error occurred: ", e);
    }

    handleCancel(event) {
        this.formStatus = "Cancel button clicked"
        event.preventDefault();
    }
}
