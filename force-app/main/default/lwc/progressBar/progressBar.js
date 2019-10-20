import labelProgress from '@salesforce/label/c.lightning_LightningProgressBar_progress';

import { LightningElement, track, api } from 'lwc';
import { classSet } from 'c/utils';
import { normalizeString as normalize } from 'c/utilsPrivate';
import { numberFormat } from 'c/internationalizationLibrary';

const i18n = {
    progress: labelProgress
};

const DEFAULT_SIZE = 'medium';
const DEFAULT_VARIANT = 'base';

export default class cProgressBar extends LightningElement {
    @track privateVariant = DEFAULT_VARIANT;
    @track privateSize = DEFAULT_SIZE;

    @api value = 0;

    @api get variant() {
        return this.privateVariant;
    }
    set variant(value) {
        this.privateVariant = normalize(value, {
            fallbackValue: DEFAULT_VARIANT,
            validValues: ['base', 'circular']
        });
    }

    @api get size() {
        return this.privateSize;
    }
    set size(value) {
        this.privateSize = normalize(value, {
            fallbackValue: DEFAULT_SIZE,
            validValues: ['x-small', 'small', 'medium', 'large']
        });
    }
    get ariaBusy() {
        const value = this.percentValue;
        if (value > 0 && value < 100) {
            return 'true';
        }
        return null;
    }

    get computedClass() {
        const { size, variant } = this;
        const classes = classSet('slds-progress-bar');

        classes.add(`slds-progress-bar_${size}`);

        if (variant === 'circular') {
            classes.add('slds-progress-bar_circular');
        }

        return classes.toString();
    }

    get percentValue() {
        const { value } = this;

        if (!value || value <= 0) {
            return 0;
        }
        if (value >= 100) {
            return 100;
        }
        return Math.round(value);
    }

    get computedStyle() {
        return `width: ${this.percentValue}%;`;
    }

    get assistiveText() {
        const formattedPercent = numberFormat({ style: 'percent' }).format(
            this.percentValue / 100
        );

        return `${i18n.progress} ${formattedPercent}`;
    }
}
