import { LightningElement, track } from 'lwc';

export default class RadioGroupRecipes extends LightningElement {   
    @track value = '';

    get options() {
        return [
            { label: 'Sales', value: 'option1' },
            { label: 'Force', value: 'option2' },
        ];
    }

}