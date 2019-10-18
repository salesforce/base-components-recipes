import { LightningElement, track } from 'lwc';

export default class LightningExampleAccordionMultiple extends LightningElement {
    @track activeSections = ['A', 'C'];
    @track activeSectionsMessage = '';

    handleSectionToggle(event) {
        const openSections = event.detail.openSections;

        if (openSections.length === 0) {
            this.activeSectionsMessage = 'All sections are closed';
        } else {
            this.activeSectionsMessage =
                'Open sections: ' + openSections.join(', ');
        }
    }
}
