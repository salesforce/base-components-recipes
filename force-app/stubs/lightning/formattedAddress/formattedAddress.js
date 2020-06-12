/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api } from 'lwc';
import { addressFormat } from 'c/internationalizationLibrary';

export default class FormattedAddress extends LightningElement {
    @api city;
    @api country;
    @api disabled;
    @api latitude;
    @api longitude;
    @api postalCode;
    @api province;
    @api showStaticMap;
    @api street;

    get address() {
        return (
            addressFormat.formatAddressAllFields('en', 'US', {
                address: this.street,
                city: this.city,
                state: this.province,
                country: this.country,
                zipCode: this.postalCode
            }) || ''
        );
    }

    get addressLines() {
        return this.address.split('\n');
    }
}
