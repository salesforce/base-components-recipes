import { LightningElement, wire } from 'lwc';

import { getRecord } from 'lightning/uiRecordApi';
export default class ProductCard extends LightningElement {
    // Id of Product__c to display.
    recordId;

    // Product__c to display //
    product;

    // Product__c field values to display. //
    name = '';

    @wire(getRecord, { recordId: '$recordId',
        fields: ["Product__c.Name"]
    })
    wiredRecord({ data }) {
        if (data) {
            this.product = data;
            this.name = data.fields.Name.value;
        }
    }
}
