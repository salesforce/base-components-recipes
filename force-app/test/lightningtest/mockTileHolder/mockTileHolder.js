/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api } from 'lwc';

export default class MockTileHolder extends LightningElement {
    @api mediaSlotText;
    @api contentSlotText;
    @api tileType = 'standard';

    get isMedia() {
        return this.tileType !== 'standard';
    }

    get isStandard() {
        return this.tileType === 'standard';
    }
}
