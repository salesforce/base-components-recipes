import {api, LightningElement, wire} from 'lwc';

// Wire adapter to load records.
console.warn("LOCAL productCard");
debugger;

import { getRecord } from 'lightning/uiRecordApi';
console.warn(`JOSE `, getRecord);
export default class ProductCard extends LightningElement {
    // Id of Product__c to display.
    // @api
    recordId;

    // Product__c to display //
    // @api
    product;

    // Product__c field values to display. //
    // @api
    name = '';

    /*
    Trevor example
    @wire(getRecord, { recordId: '$recordId', ['Contact.Name']})
     */

    @wire(getRecord, { recordId: '$recordId',
    // fields
        fields: ["Product__c.Name"]
    })
    wiredRecord({ data, error}) {
        debugger
        console.error(error)
        console.error('DOING WIRE')
        console.error(data)
        if (data) {
            console.error('Have Data WIRE')
            this.product = data;
            this.name = data.fields.Name.value;
        } else {
            console.error('DID NOT Have Data WIRE')
        }
    }

    /*
    @wire(getRecordCreateDefaults, {
        objectApiName: '$getRecordCreateDefaultsConfig.data.objectApiName',
        recordTypeId: '$recordTypeId',
        optionalFields: '$getRecordCreateDefaultsConfig.data.optionalFields',
    })
    wiredRecordUiCreate;
     */
}
