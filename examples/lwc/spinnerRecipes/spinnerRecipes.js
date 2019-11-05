import { LightningElement, track } from 'lwc';

export default class SpinnerRecipes extends LightningElement {
    @track loaded = false;

    handleClick() {
        this.loaded = !this.loaded;
    }
}
