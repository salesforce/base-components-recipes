/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api } from 'lwc';

const DEFAULT_HREF = 'javascript:void(0);'; // eslint-disable-line no-script-url

export default class cVerticalNavigationItemIcon extends LightningElement {
    @api label;

    @api name;

    @api iconName;

    @api href = DEFAULT_HREF;

    _selected = false;

    connectedCallback() {
        this.setAttribute('role', 'listitem');
        this.classList.add('slds-nav-vertical__item');
        this.dispatchEvent(
            new CustomEvent('privateitemregister', {
                bubbles: true,
                cancelable: true,
                detail: {
                    callbacks: {
                        select: this.select.bind(this),
                        deselect: this.deselect.bind(this)
                    },

                    name: this.name
                }
            })
        );
    }

    select() {
        this._selected = true;
        this.classList.add('slds-is-active');
    }

    deselect() {
        this._selected = false;
        this.classList.remove('slds-is-active');
    }

    get ariaCurrent() {
        return this._selected ? 'page' : null;
    }

    handleClick(event) {
        this.dispatchEvent(
            new CustomEvent('privateitemselect', {
                bubbles: true,
                cancelable: true,
                composed: true,
                detail: {
                    name: this.name
                }
            })
        );

        if (this.href === DEFAULT_HREF) {
            event.preventDefault();
        }
    }
}
