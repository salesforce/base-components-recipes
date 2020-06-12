/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api } from 'lwc';
import { numberFormat } from 'c/internationalizationLibrary';

export default class cFormattedNumber extends LightningElement {
    @api value;

    @api formatStyle = 'decimal';

    @api currencyCode;

    @api currencyDisplayAs = 'symbol';

    @api minimumIntegerDigits;

    @api minimumFractionDigits;

    @api maximumFractionDigits;

    @api minimumSignificantDigits;

    @api maximumSignificantDigits;

    get formattedNumber() {
        const value = this.value;
        const options = {
            style: this.formatStyle,
            currency: this.currencyCode,
            currencyDisplay: this.currencyDisplayAs,
            minimumIntegerDigits: this.minimumIntegerDigits,
            minimumFractionDigits: this.minimumFractionDigits,
            maximumFractionDigits: this.maximumFractionDigits,
            minimumSignificantDigits: this.minimumSignificantDigits,
            maximumSignificantDigits: this.maximumSignificantDigits
        };

        const canReturnValue =
            value !== undefined &&
            value !== null &&
            value !== '' &&
            isFinite(value);

        if (canReturnValue) {
            const valueAsString = value.toString();

            let valueToFormat = valueAsString;

            if (this.formatStyle === 'percent-fixed') {
                options.style = 'percent';

                valueToFormat = parseFloat(value) / 100;

                if (
                    valueAsString.indexOf('.') > 0 &&
                    valueAsString.indexOf('e') < 0
                ) {
                    valueToFormat = valueToFormat.toFixed(
                        valueAsString.split('.')[1].length + 2
                    );
                }
            }
            return numberFormat(options).format(valueToFormat);
        }

        return '';
    }
}

cFormattedNumber.interopMap = {
    props: {
        formatStyle: 'style'
    }
};
