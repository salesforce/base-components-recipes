/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api } from 'lwc';

export default class ButtonMenuTest extends LightningElement {
    @api selectAction;
    @api focusAction;

    handleSelect(event) {
        this.selectAction({ selectEvent: event });
    }

    handleFocus(event) {
        this.focusAction({ focusEvent: event });
    }

    get notChecked() {
        return undefined;
    }

    get unChecked() {
        return false;
    }
}
