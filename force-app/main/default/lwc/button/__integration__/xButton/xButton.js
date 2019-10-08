import { LightningElement, track } from "lwc";

export default class Button extends LightningElement {
  @track label = "click me!";

  handleClick() {
    this.label = "I was clicked!!";
  }
}
