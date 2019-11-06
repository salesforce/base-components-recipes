import { LightningElement, track } from 'lwc';

export default class ComboboxRecipes extends LightningElement {
    value = 'inProgress'
    @track state = {
        progress: this.value,
        progressRequired: '',
        progressDisabled: ''
    };

    get options() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' }
        ];
    }

    handleChange(event) {
        this.state[event.target.name] = event.detail.value;
    }
}
