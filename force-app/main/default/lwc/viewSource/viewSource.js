import { LightningElement, api } from 'lwc';

export default class ViewSource extends LightningElement {
    baseURL =
        'https://github.com/salesforce/base-components-recipes/tree/master/examples/lwc/';

    @api source;

    get sourceURL() {
        return this.baseURL + this.source;
    }
}
