import { LightningElement, api } from 'lwc';

export default class Container extends LightningElement {
  @api currentStep;
  @api variant;
  @api type;
  @api hasError;
}
