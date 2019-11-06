import { LightningElement, track } from 'lwc';

export default class ButtonMenuRecipes extends LightningElement {
    @track selectedItemValue;

    // basic data source with minimal content
    myMenuItems = [
        {
            id: 'item-01',
            label: 'Alpha',
            value: 'alpha',
        },
        {
            id: 'item-02',
            label: 'Beta',
            value: 'beta',
        },
        {
            id: 'item-03',
            label: 'Gamma',
            value: 'gamma',
        },
        {
            id: 'item-04',
            label: 'Delta',
            value: 'delta',
        },
        {
            id: 'item-05',
            label: 'Epsilon',
            value: 'epsilon',
        },
    ];

    // more complex data source with additional content
    myComplexMenuItems = [
        {
            id: 'item-01',
            label: 'Alpha',
            value: 'alpha',
            disabled: false,
            prefixIconName: 'utility:bookmark',
            iconName: 'utility:animal_and_nature',
        },
        {
            id: 'item-02',
            label: 'Beta',
            value: 'beta',
            disabled: true,
            iconName: 'utility:company',
        },
        {
            id: 'item-03',
            label: 'Gamma',
            value: 'gamma',
            prefixIconName: 'utility:date_input',
        },
        {
            id: 'item-04',
            label: 'Delta',
            value: 'delta',
        },
        {
            id: 'item-05',
            label: 'Epsilon',
            value: 'epsilon',
            iconName: 'utility:knowledge_base',
        },
    ];

    handleOnselect(event) {
        this.selectedItemValue = event.detail.value;
    }
}
