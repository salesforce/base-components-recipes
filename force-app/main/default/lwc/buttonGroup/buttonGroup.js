/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement } from 'lwc';

export default class cButtonGroup extends LightningElement {
    privateButtons = [];

    constructor() {
        super();

        this.template.addEventListener(
            'privatebuttonregister',
            this.handleButtonRegister.bind(this)
        );
    }

    connectedCallback() {
        this.classList.add('slds-button-group');
        this.setAttribute('role', 'group');
    }

    handleButtonRegister(event) {
        event.stopPropagation();

        const button = event.detail;
        const ref = event.target;

        button.callbacks.setDeRegistrationCallback(() => {
            const indexToDelete = this.privateButtons.findIndex(
                (el) => el.ref === ref
            );

            this.privateButtons.splice(indexToDelete, 1);
        });

        this.privateButtons.push({ button, ref });
    }

    handleSlotChange() {
        this.privateButtons = this.getSortedButtons(this.privateButtons);

        if (this.privateButtons.length === 1) {
            this.privateButtons[0].button.callbacks.setOrder(null);
        } else {
            for (let i = 0; i < this.privateButtons.length; i++) {
                let dataValue;
                if (i === 0) {
                    dataValue = 'first';
                } else if (i === this.privateButtons.length - 1) {
                    dataValue = 'last';
                } else {
                    dataValue = 'middle';
                }

                this.privateButtons[i].button.callbacks.setOrder(dataValue);
            }
        }
    }

    getSortedButtons(buttons) {
        const sortedButtons = Object.values(buttons);

        sortedButtons.sort((a, b) => {
            const position = a.ref.compareDocumentPosition(b.ref);

            if (
                position & Node.DOCUMENT_POSITION_FOLLOWING ||
                position & Node.DOCUMENT_POSITION_CONTAINED_BY
            ) {
                return -1;
            } else if (
                position & Node.DOCUMENT_POSITION_PRECEDING ||
                position & Node.DOCUMENT_POSITION_CONTAINS
            ) {
                return 1;
            }

            return 0;
        });

        return sortedButtons;
    }
}
