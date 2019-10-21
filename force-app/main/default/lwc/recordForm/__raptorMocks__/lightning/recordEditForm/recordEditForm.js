import { LightningElement, api } from 'lwc';

export default class cRecordEditForm extends LightningElement {
    @api objectApiName;
    @api recordId;
    @api formClass;
    @api fieldNames;
    @api recordTypeId;
    @api layoutType;
    _submitData = null;
    @api density = 'auto';

    @api
    getSubmitData() {
        return this._submitData;
    }

    @api
    submit(data) {
        this._submitData = data;
    }
}
