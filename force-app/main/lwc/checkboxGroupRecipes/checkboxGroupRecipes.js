/*
 * !! NOTE: Do not commit changes to this file. It is intended as a starter shell only.
 */
import { LightningElement, track } from 'lwc';

export default class CheckboxGroupRecipes extends LightningElement {
    @track value = ['option1'];

    get options() {
        return [
            { label: 'Ross', value: 'option1' },
            { label: 'Rachel', value: 'option2' },
            { label: 'Bob', value: 'option3' },
            { label: 'Greg', value: 'option4' },
            { label: 'Lokesh', value: 'option5' }
        ];
    }

    get selectedValues() {
        return this.value ? this.value.join(',') : '';
    }

    handleChange(e) {
        this.value = e.detail.value;
    }

    handleReset() {
        this.value = [];
    }
    handleSetToNull() {
        this.value = null;
    }
    handleCheckAll() {
        this.value = [1, 2, 3, 4, 5, 6].map(i => `option${i}`);
    }
}
