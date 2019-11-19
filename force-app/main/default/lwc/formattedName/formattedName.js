/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import locale from '@salesforce/i18n/locale';
import { LightningElement, api, track } from 'lwc';
import { normalizeString as normalize } from 'c/utilsPrivate';
import { nameFormat } from 'c/internationalizationLibrary';

const DEFAULT_FORMAT = 'long';

export default class cFormattedName extends LightningElement {
    @api format = DEFAULT_FORMAT;

    @track _salutation;
    @track _firstName;
    @track _lastName;
    @track _middleName;
    @track _suffix;
    @track _informalName;

    @api get salutation() {
        return this._salutation;
    }

    set salutation(value) {
        this._salutation = value;
    }

    @api get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    @api get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    @api get middleName() {
        return this._middleName;
    }

    set middleName(value) {
        this._middleName = value;
    }

    @api get suffix() {
        return this._suffix;
    }

    set suffix(value) {
        this._suffix = value;
    }

    @api get informalName() {
        return this._informalName;
    }

    set informalName(value) {
        this._informalName = value;
    }

    get normalizedFormat() {
        return normalize(this.format, {
            fallbackValue: DEFAULT_FORMAT,
            validValues: ['short', 'medium', 'long']
        });
    }

    get hasValue() {
        return !!(
            this.salutation ||
            this.firstName ||
            this.lastName ||
            this.middleName ||
            this.suffix ||
            this.informalName
        );
    }

    get formattedName() {
        const { normalizedFormat } = this;
        const nameObject = {
            first: this.firstName,
            middle: this.middleName,
            last: this.lastName,
            salutation: this.salutation,
            suffix: this.suffix,
            informal: this.informalName
        };

        let formattedName = '';
        const localeTag = locale.replace(/-/g, '_');
        switch (normalizedFormat) {
            case 'short':
                formattedName = nameFormat.formatNameShort(
                    localeTag,
                    nameObject
                );

                break;
            case 'medium':
                formattedName = nameFormat.formatNameMedium(
                    localeTag,
                    nameObject
                );

                break;
            case 'long':
            default:
                formattedName = nameFormat.formatNameLong(
                    localeTag,
                    nameObject
                );
        }

        return formattedName;
    }
}