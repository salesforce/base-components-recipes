import { LightningElement, api } from 'lwc';

export default class cOutputField extends LightningElement {
    @api fieldName;
    @api fieldClass;
}
