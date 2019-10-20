import { LightningElement, track } from 'lwc';

export default class ButtonStatefulRecipes extends LightningElement {
    @track isSelected = false;

    handleClick() {
        this.isSelected = !this.isSelected;
    }
}
