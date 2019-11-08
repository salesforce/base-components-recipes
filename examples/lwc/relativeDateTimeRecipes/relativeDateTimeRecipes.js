/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement } from 'lwc';

export default class RelativeDateTimeRecipes extends LightningElement {
    SfdcDay = new Date('1999-02-01');
    today9AM = new Date().setHours(9, 0, 0, 0);
    now = Date.now();
    future20500104 = new Date('2050-01-04');
}
