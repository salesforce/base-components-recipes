/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import labelShowActions from '@salesforce/label/c.lightning_LightningPrimitiveCellActions_showActions';
import { assert, classListMutation, normalizeString } from 'c/utilsPrivate';
import { LightningElement, api, track } from 'lwc';
import mediaTile from './mediaTile.html';
import standardTile from './standardTile.html';

const VALID_TYPE_VALUES = ['standard', 'media'];

const i18n = {
    showActions: labelShowActions
};

export default class cTile extends LightningElement {
    @api label;

    @api href = '';
    @track _type = 'standard';
    @track _actions = [];

    @api get actions() {
        return this._actions;
    }

    set actions(actions) {
        this._actions = actions;
    }

    @api get type() {
        return this._type;
    }

    set type(value) {
        assert(
            VALID_TYPE_VALUES.indexOf(value) !== -1,
            `Invalid type attribute value of ${value}. Must be one of ${VALID_TYPE_VALUES}.`
        );

        this._type = normalizeString(value, {
            fallbackValue: 'standard',
            validValues: VALID_TYPE_VALUES
        });

        if (this._connected) {
            this.setClassesAndTemplate();
        }
    }

    handleActionSelect(event) {
        this.dispatchEvent(
            new CustomEvent('actiontriggered', {
                detail: {
                    action: event.detail.value
                }
            })
        );
    }

    setClassesAndTemplate() {
        classListMutation(this.classList, {
            'slds-media': this.isMedia,
            'slds-hint-parent': this.hasActions
        });
    }

    connectedCallback() {
        this._connected = true;
        this.classList.add('slds-tile');
        this.setClassesAndTemplate();
    }

    render() {
        return this.isMedia ? mediaTile : standardTile;
    }

    get isMedia() {
        return this.type === 'media';
    }

    get hasActions() {
        return Object.keys(this.actions).length > 0;
    }

    get buttonAlternateText() {
        return `${i18n.showActions}`;
    }
}