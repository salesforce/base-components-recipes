import { LightningElement, api, track } from 'lwc';

export default class cBaseComboboxFormattedText extends LightningElement {
    @track _text = '';
    @track hasParts;

    @api get text() {
        return this._text;
    }

    set text(value) {
        this.hasParts = Array.isArray(value) && value.length > 0;
        if (this.hasParts) {
            this._text = value.map((part, i) => ({ part, key: i }));
        } else {
            this._text = value;
        }
    }
}
