import { LightningElement, wire } from 'lwc';

// Wire adapter to load records.
import { getRecord } from 'lightning/uiRecordApi';

export default class ProductCard extends LightningElement {
    // Id of Product__c to display.
    recordId;

    // Product__c to display //
    product;

    // Product__c field values to display. //
    name = '';

    @wire(getRecord, { recordId: '$recordId', fields })
    wiredRecord({ data }) {
        if (data) {
            this.product = data;
            this.name = data.fields.Name.value;
        }
    }
}
