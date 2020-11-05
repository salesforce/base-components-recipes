/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/inputLocation';
import { verifyClassSet } from 'lightning/testUtils';

function getInputElements(element) {
    return Array.from(
        element.shadowRoot.querySelectorAll('lightning-input')
    ).map((input) => input.shadowRoot.querySelector('input'));
}

const createComponent = (config = {}) => {
    const element = createElement('c-input-location', { is: Element });
    Object.assign(element, config);
    document.body.appendChild(element);
    return element;
};

describe('c-input-location', () => {
    it('renders the label', () => {
        const element = createComponent({
            label: 'Label of Input Location'
        });

        return Promise.resolve().then(() => {
            const label = element.shadowRoot.querySelector('legend');
            expect(label.textContent).toBe('Label of Input Location');
        });
    });

    it("Adds assistive-text class to legend if variant is set to 'label-hidden'", () => {
        const element = createComponent({
            label: 'foo',
            variant: 'label-hidden'
        });

        return Promise.resolve().then(() => {
            const label = element.shadowRoot.querySelector('legend');
            expect(label.className).toMatch(/slds-assistive-text/);
        });
    });

    it("renders lightning inputs with latitude and longitude if they're defined", () => {
        const element = createComponent({
            label: 'Location',
            latitude: '15.5',
            longitude: '-108.75'
        });

        return Promise.resolve().then(() => {
            const inputs = getInputElements(element);
            expect(inputs[0].value).toBe('15.5');
            expect(inputs[1].value).toBe('-108.75');
        });
    });

    it('renders lightning inputs by passing decimal value for latitude and longitude', () => {
        const element = createComponent({
            label: 'Location',
            latitude: parseFloat(15.5),
            longitude: parseFloat(-108.75)
        });

        return Promise.resolve().then(() => {
            const inputs = getInputElements(element);
            expect(inputs[0].value).toBe('15.5');
            expect(inputs[1].value).toBe('-108.75');
        });
    });

    it('renders lightning inputs with latitude and longitude set to zero', () => {
        const latitude = 0;
        const longitude = 0;
        const element = createComponent();
        element.label = 'Location';
        element.latitude = latitude;
        element.longitude = longitude;
        return Promise.resolve().then(() => {
            const inputs = getInputElements(element);
            expect(inputs[0].value).toBe(latitude.toString());
            expect(inputs[1].value).toBe(longitude.toString());
        });
    });

    it('renders required attribute in the dom', () => {
        const element = createComponent({
            required: true,
            label: 'Location',
            latitude: '10.5',
            longitude: '-10.5'
        });

        return Promise.resolve().then(() => {
            const input = element.shadowRoot.querySelector('lightning-input');
            const inputEl = input.shadowRoot.querySelector('input');
            expect(inputEl.hasAttribute('required')).toBe(true);
        });
    });

    it("returns 'invalid' if coordinates are required and unset", () => {
        const element = createComponent({
            required: true,
            label: 'Location required',
            longitude: '108.75'
        });

        expect(element.checkValidity()).toBe(false);
    });

    it("returns 'valid' if coordinates are required and set", () => {
        const element = createComponent({
            label: 'Location',
            latitude: '12.5',
            longitude: '108.75'
        });

        expect(element.checkValidity()).toBe(true);
    });

    it('validates properly: invalid coordinates', () => {
        const element = createComponent({
            label: 'Location',
            latitude: '1200.5',
            longitude: '108.75'
        });

        expect(element.checkValidity()).toBe(false);
    });

    it('renders disabled component', () => {
        const element = createComponent({
            disabled: true,
            label: 'Location',
            latitude: '10.5',
            longitude: '-10.5'
        });

        return Promise.resolve().then(() => {
            const input = element.shadowRoot.querySelector('lightning-input');
            const inputEl = input.shadowRoot.querySelector('input');
            expect(inputEl.hasAttribute('disabled')).toBe(true);
        });
    });

    it('renders readonly component', () => {
        const element = createComponent({
            readOnly: true,
            label: 'Location',
            latitude: '10.5',
            longitude: '-10.5'
        });

        return Promise.resolve().then(() => {
            const input = element.shadowRoot.querySelector('lightning-input');
            const inputEl = input.shadowRoot.querySelector('input');
            expect(inputEl.hasAttribute('readonly')).toBe(true);
        });
    });

    it('focuses', () => {
        const element = createComponent({
            label: 'Location',
            latitude: '10.5'
        });

        return Promise.resolve()
            .then(() => {
                element.focus();
            })
            .then(() => {
                const input = element.shadowRoot.querySelector(
                    'lightning-input'
                );

                expect(element.shadowRoot.activeElement).toBe(input);
            });
    });

    it('blurs', () => {
        const element = createComponent({
            label: 'Location',
            latitude: '10.5'
        });

        return Promise.resolve()
            .then(() => {
                element.focus();
            })
            .then(() => {
                element.blur();
            })
            .then(() => {
                expect(element.shadowRoot.activeElement).toBe(null);
            });
    });

    it('normalizes value when null is being passed', () => {
        const element = createComponent({
            label: 'Location',
            latitude: null
        });

        expect(element.latitude).toBe('');
    });

    it('renders fieldLevelHelp', () => {
        const element = createComponent({
            label: 'Location',
            fieldLevelHelp: 'Some text example'
        });

        return Promise.resolve().then(() => {
            const helptext = element.shadowRoot.querySelector(
                'lightning-helptext'
            );

            expect(helptext.shadowRoot.textContent).toEqual(
                'Some text example utility:info'
            );
        });
    });

    it('form element class for default variant', () => {
        const element = createComponent({
            readOnly: true,
            label: 'Location',
            latitude: '10.5',
            longitude: '-10.5'
        });

        return Promise.resolve().then(() => {
            verifyClassSet(element, {
                'slds-form-element': true,
                'slds-form-element_stacked': false,
                'slds-form-element_horizontal': false
            });

            element.variant = 'label-stacked';
            return Promise.resolve().then(() => {
                verifyClassSet(element, {
                    'slds-form-element': true,
                    'slds-form-element_stacked': true,
                    'slds-form-element_horizontal': false
                });
            });
        });
    });
    it('form element class for label-stacked variant', () => {
        const element = createComponent({
            readOnly: true,
            label: 'Location',
            latitude: '10.5',
            longitude: '-10.5',
            variant: 'label-stacked'
        });

        return Promise.resolve().then(() => {
            verifyClassSet(element, {
                'slds-form-element': true,
                'slds-form-element_stacked': true,
                'slds-form-element_horizontal': false
            });
        });
    });
    it('form element class for label-inline variant', () => {
        const element = createComponent({
            readOnly: true,
            label: 'Location',
            latitude: '10.5',
            longitude: '-10.5',
            variant: 'label-inline'
        });

        return Promise.resolve().then(() => {
            verifyClassSet(element, {
                'slds-form-element': true,
                'slds-form-element_stacked': false,
                'slds-form-element_horizontal': true
            });
        });
    });
});
