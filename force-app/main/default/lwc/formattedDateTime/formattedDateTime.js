/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api, track } from 'lwc';
import { dateTimeFormat } from 'c/internationalizationLibrary';
import { isValidISODateTimeString } from 'c/iso8601Utils';
import { isIE11, normalizeBoolean } from 'c/utilsPrivate';

export default class cFormattedDateTime extends LightningElement {
    @api value;

    @api weekday;

    @api era;

    @api year;

    @api month;

    @api day;

    @api hour;

    @api minute;

    @api second;

    @api timeZoneName;

    @api timeZone;

    @track _hour12 = false;
    @track _hour12Set = false;

    @api get hour12() {
        return this._hour12;
    }

    set hour12(value) {
        if (value === undefined) {
            this._hour12Set = false;
            this._hour12 = value;
        } else {
            this._hour12Set = true;
            this._hour12 = normalizeBoolean(value);
        }
    }

    get formattedValue() {
        return this.computeFormattedValue();
    }

    computeFormattedValue() {
        const { value } = this;
        if (!this.isEmpty(value) && this.isValid(value)) {
            const formatted = dateTimeFormat(this.getOptions()).format(value);
            if (formatted) {
                return formatted;
            }
        }
        this.printError(value);
        return '';
    }

    isEmpty(value) {
        return value === undefined || value === null || value === '';
    }

    isValid(value) {
        return isFinite(value) || isValidISODateTimeString(value);
    }

    printError(value) {
        const errorMsg =
            `<c-formatted-date-time> The value attribute accepts either a Date object, a timestamp, or a valid ISO8601 formatted string ` +
            `with timezone offset. but we are getting the ${typeof value} value "${value}" instead.`;
        console.warn(errorMsg); // eslint-disable-line no-console
    }

    getOptions() {
        const options = {
            weekday: this.weekday,
            era: this.era,
            year: this.year,
            month: this.month,
            day: this.day,
            hour: this.hour,
            minute: this.minute,
            second: this.second,
            timeZoneName: this.timeZoneName,
            timeZone: this.timeZone
        };

        if (this._hour12Set) {
            options.hour12 = this.hour12;
        }

        if (options.hour12 === false && !isIE11) {
            options.hourCycle = 'h23';
            delete options.hour12;
        }
        return options;
    }
}
