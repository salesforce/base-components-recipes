import { LightningElement, api } from 'lwc';

const DEFAULT_ICON_NAME = 'utility:info';

export default class LightningHelptext extends LightningElement {
    @api content = '';
    @api iconName = DEFAULT_ICON_NAME;
}
