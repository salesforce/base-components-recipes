import { LightningElement } from 'lwc';

export default class RelativeDateTimeRecipes extends LightningElement {
    SfdcDay = new Date('1999-02-01');
    today9AM = new Date().setHours(9, 0, 0, 0);
    now = Date.now();
    future20500104 = new Date('2050-01-04');
}
