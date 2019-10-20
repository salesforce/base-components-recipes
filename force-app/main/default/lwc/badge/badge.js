import { LightningElement, api } from 'lwc';

export default class cBadge extends LightningElement {
    @api label;

    connectedCallback() {
        this.classList.add('slds-badge');
    }
}
