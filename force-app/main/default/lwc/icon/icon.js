/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api, track } from 'lwc';
import { classListMutation, normalizeString, isIE11 } from 'c/utilsPrivate';
import { computeSldsClass, getCategory, isValidName } from 'c/iconUtils';

export default class cIcon extends LightningElement {
    @track state = {};

    @api alternativeText;

    @api get src() {
        return this.privateSrc;
    }

    set src(value) {
        this.privateSrc = value;

        if (!value) {
            this.state.iconName = this.iconName;
            this.classList.remove('slds-icon-standard-default');
        }

        if (value && isIE11) {
            this.setDefault();
            return;
        }

        this.state.src = value;
    }

    @api get iconName() {
        return this.privateIconName;
    }

    set iconName(value) {
        this.privateIconName = value;

        if (this.src) {
            return;
        }

        if (isValidName(value)) {
            const isAction = getCategory(value) === 'action';

            if (value !== this.state.iconName) {
                classListMutation(this.classList, {
                    'slds-icon_container_circle': isAction,
                    [computeSldsClass(value)]: true,
                    [computeSldsClass(this.state.iconName)]: false
                });
            }
            this.state.iconName = value;
        } else {
            console.warn(`<c-icon> Invalid icon name ${value}`); // eslint-disable-line no-console

            classListMutation(this.classList, {
                'slds-icon_container_circle': false,
                [computeSldsClass(this.state.iconName)]: false
            });

            this.state.iconName = undefined;
        }
    }

    @api get size() {
        return normalizeString(this.state.size, {
            fallbackValue: 'medium',
            validValues: ['xx-small', 'x-small', 'small', 'medium', 'large']
        });
    }

    set size(value) {
        this.state.size = value;
    }

    @api get variant() {
        return normalizeVariant(this.state.variant, this.state.iconName);
    }

    set variant(value) {
        this.state.variant = value;
    }

    connectedCallback() {
        this.classList.add('slds-icon_container');
    }

    setDefault() {
        this.state.src = undefined;
        this.state.iconName = 'standard:default';
        this.classList.add('slds-icon-standard-default');
    }
}

function normalizeVariant(variant, iconName) {
    if (variant === 'bare') {
        variant = 'inverse';
    }

    if (getCategory(iconName) === 'utility') {
        return normalizeString(variant, {
            fallbackValue: '',
            validValues: ['error', 'inverse', 'warning', 'success']
        });
    }
    return 'inverse';
}
