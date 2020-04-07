/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

export default class cPillItem {
    constructor(item) {
        this._item = item;
    }

    get item() {
        return this._item;
    }

    get isAvatar() {
        return this._item.type === 'avatar';
    }

    get isIcon() {
        return this._item.type === 'icon';
    }

    get variant() {
        return this._item.href && this._item.href !== ''
            ? 'plainLink'
            : 'plain';
    }
}