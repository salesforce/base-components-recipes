import { LightningElement, track } from 'lwc';

export default class ButtonRecipes extends LightningElement {
    @track clickedButtonLabel;

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
    }
}
