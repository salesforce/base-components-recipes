import { LightningElement, api } from 'lwc';
const initial = 'initial';
export default class cInputField extends LightningElement {
  @api fieldName;
  val = 'initial';

  set value(val) {
    this.val = val;
  }

  @api get value() {
    return this.val;
  }

  @api
  reset() {
    this.val = initial;
  }
}
