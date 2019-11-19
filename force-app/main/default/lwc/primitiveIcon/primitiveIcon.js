/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import dir from '@salesforce/i18n/dir';
import { LightningElement, api } from 'lwc';
import { classSet } from 'c/utils';
import { normalizeString as normalize } from 'c/utilsPrivate';
import * as iconUtils from 'c/iconUtils';
import standardTemplate from './primitiveIcon.html';
import { getIconSvgTemplates } from 'lightning/configProvider';

export default class cPrimitiveIcon extends LightningElement {
    @api iconName;
    @api src;
    @api svgClass;
    @api size = 'medium';
    @api variant;

    privateIconSvgTemplates = getIconSvgTemplates();

    get inlineSvgProvided() {
        return !!this.privateIconSvgTemplates;
    }

    renderedCallback() {
        if (this.iconName !== this.prevIconName && !this.inlineSvgProvided) {
            this.prevIconName = this.iconName;
            const svgElement = this.template.querySelector('svg');
            iconUtils.polyfill(svgElement);
        }
    }

    get href() {
        return this.src || iconUtils.getIconPath(this.iconName, dir);
    }

    get name() {
        return iconUtils.getName(this.iconName);
    }

    get normalizedSize() {
        return normalize(this.size, {
            fallbackValue: 'medium',
            validValues: ['xx-small', 'x-small', 'small', 'medium', 'large']
        });
    }

    get normalizedVariant() {
        return normalize(this.variant, {
            fallbackValue: '',
            validValues: ['bare', 'error', 'inverse', 'warning', 'success']
        });
    }

    get computedClass() {
        const { normalizedSize, normalizedVariant } = this;
        const classes = classSet(this.svgClass);

        if (normalizedVariant !== 'bare') {
            classes.add('slds-icon');
        }

        switch (normalizedVariant) {
            case 'error':
                classes.add('slds-icon-text-error');
                break;
            case 'warning':
                classes.add('slds-icon-text-warning');
                break;
            case 'success':
                classes.add('slds-icon-text-success');
                break;
            case 'inverse':
            case 'bare':
                break;
            default:
                if (!this.src) {
                    classes.add('slds-icon-text-default');
                }
        }

        if (normalizedSize !== 'medium') {
            classes.add(`slds-icon_${normalizedSize}`);
        }

        return classes.toString();
    }

    resolveTemplate() {
        const name = this.iconName;
        if (iconUtils.isValidName(name)) {
            const [spriteName, iconName] = name.split(':');
            const template = this.privateIconSvgTemplates[
                `${spriteName}_${iconName}`
            ];

            if (template) {
                return template;
            }
        }
        return standardTemplate;
    }

    render() {
        if (this.inlineSvgProvided) {
            return this.resolveTemplate();
        }
        return standardTemplate;
    }
}