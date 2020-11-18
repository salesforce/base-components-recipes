/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import labelSecondsLater from '@salesforce/label/c.lightning_Duration_secondsLater';
import labelSecondsAgo from '@salesforce/label/c.lightning_Duration_secondsAgo';
import { formatLabel } from 'c/utils';

const fallbackFutureLabel = 'in {0} {1}';
const fallbackPastLabel = '{0} {1} ago';
const fallbackPluralSuffix = 's';

const units = {
    SECONDS: { name: 'second', threshold: 45 },
    MINUTES: { name: 'minute', threshold: 45 },
    HOURS: { name: 'hour', threshold: 22 },
    DAYS: { name: 'day', threshold: 26 },
    MONTHS: { name: 'month', threshold: 11 },
    YEARS: { name: 'year' }
};

const SECOND_TO_MILLISECONDS = 1000;
const MINUTE_TO_MILLISECONDS = 6e4;
const HOUR_TO_MILLISECONDS = 36e5;
const DAY_TO_MILLISECONDS = 864e5;

export default class Duration {
    milliseconds = 0;

    constructor(milliseconds) {
        if (typeof milliseconds !== 'number') {
            this.isValid = false;
            // eslint-disable-next-line no-console
            console.warn(
                `The value of milliseconds passed into Duration must be of type number,
                but we are getting the ${typeof milliseconds} value "${milliseconds}" instead.
                `
            );

            return;
        }
        this.isValid = true;
        this.milliseconds = milliseconds;
    }

    humanize(locale) {
        if (!this.isValid) {
            return '';
        }

        const unit = findBestUnitMatch(this);
        if (unit === units.SECONDS) {
            const isLater = this.milliseconds > 0;
            return isLater ? labelSecondsLater : labelSecondsAgo;
        }

        return format(locale, this.asIn(unit), unit.name);
    }

    asIn(unit) {
        switch (unit) {
            case units.SECONDS:
                return Math.round(this.milliseconds / SECOND_TO_MILLISECONDS);
            case units.MINUTES:
                return Math.round(this.milliseconds / MINUTE_TO_MILLISECONDS);
            case units.HOURS:
                return Math.round(this.milliseconds / HOUR_TO_MILLISECONDS);
            case units.DAYS:
                return Math.round(this.milliseconds / DAY_TO_MILLISECONDS);
            case units.MONTHS:
                return Math.round(
                    daysToMonth(this.milliseconds / DAY_TO_MILLISECONDS)
                );

            case units.YEARS:
            default:
                return Math.round(
                    daysToMonth(this.milliseconds / DAY_TO_MILLISECONDS) / 12
                );
        }
    }
}

function daysToMonth(days) {
    const daysToMonthRatio = 4800 / 146097;

    return days * daysToMonthRatio;
}

function findBestUnitMatch(duration) {
    const match = Object.keys(units).find((key) => {
        const unit = units[key];

        return (
            unit === units.YEARS ||
            Math.abs(duration.asIn(unit)) < unit.threshold
        );
    });

    return units[match];
}

function format(locale, value, unit) {
    if ('Intl' in window && Intl.RelativeTimeFormat) {
        const formatter = new Intl.RelativeTimeFormat(locale, {
            style: 'long',
            numeric: 'always'
        });

        return formatter.format(value, unit);
    }
    return fallbackFormatter(value, unit);
}

function fallbackFormatter(value, unit) {
    // eslint-disable-next-line no-console
    console.warn(
        `The current environment does not support formatters for relative time.`
    );

    const absoluteValue = Math.abs(value);
    const unitString = absoluteValue !== 1 ? unit + fallbackPluralSuffix : unit;
    const label = value > 0 ? fallbackFutureLabel : fallbackPastLabel;
    return formatLabel(label, absoluteValue, unitString);
}
