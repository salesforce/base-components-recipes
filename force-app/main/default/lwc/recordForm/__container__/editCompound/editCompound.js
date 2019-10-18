import { LightningElement, track } from 'lwc';
export default class CreateRecord extends LightningElement {
  @track fields = ['Name', 'Address'];
  @track leadId = '%%LEAD%%';
}
