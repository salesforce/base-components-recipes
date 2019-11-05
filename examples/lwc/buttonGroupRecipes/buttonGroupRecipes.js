import { LightningElement, track } from 'lwc';

export default class ButtonGroupRecipes extends LightningElement {
    @track buttonStatefulState = false;
    @track buttonIconStatefulState = false;

    handleButtonStatefulClick() {
        this.buttonStatefulState = !this.buttonStatefulState;
    }

    handleButtonIconStatefulClick() {
        this.buttonIconStatefulState = !this.buttonIconStatefulState;
    }
}
