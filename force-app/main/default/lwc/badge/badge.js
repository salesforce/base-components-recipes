/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api } from 'lwc';
import { classSet } from 'c/utils';
import { normalizeString } from 'c/utilsPrivate';

const DEFAULT_POSITION = 'start';

export default class cBadge extends LightningElement {
    _iconPosition = DEFAULT_POSITION;

    @api label;

    @api iconName;

    @api iconAlternativeText;

    @api get iconPosition() {
        return this._iconPosition;
    }

    set iconPosition(value) {
        this._iconPosition = normalizeString(value, {
            fallbackValue: DEFAULT_POSITION,
            validValues: ['start', 'end']
        });
    }

    connectedCallback() {
        this.classList.add('slds-badge');
    }

    get computedClass() {
        let iconClass = classSet('slds-badge__icon');

        iconClass.add(
            this.isIconBeforeLabel
                ? 'slds-badge__icon_left'
                : 'slds-badge__icon_right'
        );

        return iconClass.toString();
    }

    get isIconBeforeLabel() {
        return this._iconPosition !== 'end';
    }
}
