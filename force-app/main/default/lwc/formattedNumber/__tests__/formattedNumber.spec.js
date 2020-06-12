/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/formattedNumber';

const createComponent = () => {
    const element = createElement('c-formatted-number', {
        is: Element
    });

    document.body.appendChild(element);
    return element;
};

describe('c-formatted-number', () => {
    it('should format value as currency when "formatStyle" is "currency"', () => {
        const element = createComponent();
        element.value = '123';

        element.formatStyle = 'currency';

        return Promise.resolve().then(() => {
            expect(element.shadowRoot.textContent).toBe('$123.00');
        });
    });

    it('should format value as percent (multiplied by 100) when "formatStyle" is "percent"', () => {
        const element = createComponent();
        element.value = '0.5';

        element.formatStyle = 'percent';

        return Promise.resolve().then(() => {
            expect(element.shadowRoot.textContent).toBe('50%');
        });
    });

    it('should return an empty string when "value" is null', () => {
        const element = createComponent();
        element.formatStyle = 'currency';

        element.value = null;

        return Promise.resolve().then(() => {
            expect(element.shadowRoot.textContent).toBe('');
        });
    });

    it('should format value as percent (not multiplied by 100) when "formatStyle" is "percent-fixed"', () => {
        const element = createComponent();
        element.formatStyle = 'percent-fixed';

        element.value = '0.78';
        element.minimumFractionDigits = 16;

        return Promise.resolve().then(() => {
            expect(element.shadowRoot.textContent).toBe('0.7800000000000000%');
        });
    });

    it('should format value as percent when "formatStyle" is "percent-fixed" and value is of type number', () => {
        const element = createComponent();
        element.formatStyle = 'percent-fixed';
        element.minimumFractionDigits = 16;

        element.value = 0.78;

        return Promise.resolve().then(() => {
            expect(element.shadowRoot.textContent).toBe('0.7800000000000000%');
        });
    });
});
