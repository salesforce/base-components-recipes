import labelClickToDial from '@salesforce/label/c.lightning_LightningClickToDial_enabled';
import labelClickToDialDisabled from '@salesforce/label/c.lightning_LightningClickToDial_disabled';
import { LightningElement, api, track } from 'lwc';
import { toNorthAmericanPhoneNumber } from 'c/utilsPrivate';
import { getIconPath, polyfill } from 'c/iconUtils';
import {
    isEnabled,
    addStateChangeListener,
    dial,
    removeStateChangeListener
} from 'c/clickToDialService';

const Labels = {
    clickToDial: labelClickToDial,
    clickToDialDisabled: labelClickToDialDisabled
};

const enabledIconPath = getIconPath('utility:call');
const disabledIconPath = getIconPath('utility:end_call');

export default class ClickToDial extends LightningElement {
    @api value;

    @api recordId;

    @api params;

    @track
    state = {
        enabled: isEnabled()
    };

    stateChangeListener;

    connectedCallback() {
        this.stateChangeListener = () => {
            this.state.enabled = isEnabled();
        };
        addStateChangeListener(this.stateChangeListener);
    }

    disconnectedCallback() {
        removeStateChangeListener(this.stateChangeListener);
    }

    renderedCallback() {
        const iconPath = this.iconPath;
        if (iconPath !== this.prevIconPath) {
            this.prevIconPath = iconPath;
            polyfill(this.template.querySelector('svg'));
        }
    }

    get iconPath() {
        return this.state.enabled ? enabledIconPath : disabledIconPath;
    }

    get formattedPhoneNumber() {
        return toNorthAmericanPhoneNumber(this.value);
    }

    get enabled() {
        return this.state.enabled;
    }

    get i18n() {
        return Labels;
    }

    handleClick() {
        dial({
            number: this.value,
            recordId: this.recordId,
            params: this.params,
            pageInfo: {
                hashFragment: window.location.hash
            }
        });
    }
}
