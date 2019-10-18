import { LightningElement, track } from 'lwc';
export default class CreateRecord extends LightningElement {
  @track fields = ['Name', 'AccountSource', 'BillingAddress'];
  @track accountId = '%%ACCOUNT%%';

  handleClick() {
    this.accountId = '%%ACCOUNT2%%';
  }
}
