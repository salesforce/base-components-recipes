/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api } from 'lwc';

const DEFAULT_ICON_NAME = 'utility:info';

export default class cHelptext extends LightningElement {
    @api content = '';
    @api iconName = DEFAULT_ICON_NAME;
}
