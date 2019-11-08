/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/*
 * !! NOTE: Do not commit changes to this file. It is intended as a starter shell only.
 */
import { LightningElement, track } from 'lwc';

export default class BadgeRecipes extends LightningElement {
    @track badgeLabel = 'badge Label';

    handleButtonOneClick() {
        this.badgeLabel = null;
    }

    handleButtonTwoClick() {
        this.badgeLabel = 'Hello';
    }
}
