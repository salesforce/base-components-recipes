/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/dualListbox';
import { verifyClassSet, shadowQuerySelector } from 'lightning/testUtils';

expect.extend({
    toContainText(actual, expected) {
        const pass = actual.textContent.includes(expected);
        return {
            message: () =>
                `expected element's text \n\n "${actual.textContent}" \n\n to ${
                    pass ? 'NOT ' : ''
                }contain text ${expected}`,
            pass
        };
    }
});

let mockIdCounter = 0;
jest.mock('../../inputUtils/idGenerator.js', () => ({
    generateUniqueId: () => {
        mockIdCounter += 1;
        return 'dualListbox-mock-id-' + mockIdCounter;
    }
}));

beforeEach(() => {
    mockIdCounter = 0;
});

const createDualListbox = () => {
    const element = createElement('c-dual-listbox', { is: Element });
    element.label = 'dual listbox label';
    element.sourceLabel = 'source list';
    element.selectedLabel = 'selected list';
    element.options = [];
    document.body.appendChild(element);
    return element;
};

describe('c-dual-listbox', () => {
    const options = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
        { value: '4', label: 'Option 4' },
        { value: '5', label: 'Option 5' },
        { value: '6', label: 'Option 6' },
        { value: '7', label: 'Option 7' },
        { value: '8', label: 'Option 8' }
    ];

    it('default no options', () => {
        const element = createDualListbox();
        expect(element).toMatchSnapshot();
    });

    it('default with options and size', () => {
        const element = createDualListbox();
        element.options = options;
        element.size = 5;
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('default selected options', () => {
        const element = createDualListbox();
        element.options = options;
        element.value = ['2', '6', '5'];
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('default and required options', () => {
        const element = createDualListbox();
        element.options = options;
        element.value = ['2', '6', '5'];
        element.requiredOptions = ['6', '7'];
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('required field', () => {
        const element = createDualListbox();
        element.options = options;
        element.label = 'dual listbox label';
        element.required = true;
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('required field variant hidden-label', () => {
        const element = createDualListbox();
        element.options = options;
        element.variant = 'hidden-label';
        element.required = true;
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('has spinner with show-loading-indicator', () => {
        const element = createDualListbox();
        element.showActivityIndicator = true;
        element.required = true;
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('shows error on showHelpMessageIfInvalid', () => {
        const element = createDualListbox();
        element.options = options;
        element.label = 'dual listbox label';
        element.required = true;
        element.showHelpMessageIfInvalid();
        return Promise.resolve().then(() => {
            expect(element.shadowRoot).toContainText(
                'An option must be selected'
            );
        });
    });

    it('default override button labels', () => {
        const element = createDualListbox();
        element.upButtonLabel = 'Move item up';
        element.downButtonLabel = 'Move item down';
        element.removeButtonLabel = 'Remove item';
        element.addButtonLabel = 'Add item';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('renders lightning-helptext ', () => {
        const element = createDualListbox();
        element.fieldLevelHelp = 'Some text';
        return Promise.resolve().then(() => {
            expect(shadowQuerySelector(element, 'lightning-helptext')).not.toBe(
                null
            );
        });
    });

    it('form element class for default variant', () => {
        const element = createDualListbox();
        element.options = options;

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
        const element = createDualListbox();
        element.options = options;
        element.variant = 'label-stacked';

        return Promise.resolve().then(() => {
            verifyClassSet(element, {
                'slds-form-element': true,
                'slds-form-element_stacked': true,
                'slds-form-element_horizontal': false
            });
        });
    });
    it('form element class for label-inline variant', () => {
        const element = createDualListbox();
        element.options = options;
        element.variant = 'label-inline';

        return Promise.resolve().then(() => {
            verifyClassSet(element, {
                'slds-form-element': true,
                'slds-form-element_stacked': false,
                'slds-form-element_horizontal': true
            });
        });
    });
});
