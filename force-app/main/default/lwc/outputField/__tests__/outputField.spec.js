/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/outputField';
import store from './mockData.json';

jest.mock('@salesforce/i18n/locale', () => ({ default: 'en-US' }), {
    virtual: true
});

const createOutputField = (fieldName, fieldLabelAlignment, variant) => {
    const element = createElement('c-output-field', { is: Element });
    element.fieldName = fieldName;
    document.body.appendChild(element);
    store.labelAlignment = fieldLabelAlignment;
    element.variant = variant;
    element.wireRecordUi(store);
    return element;
};

function waitForReady(element) {
    let pollCount = 0;
    function pollClassList(resolve, reject) {
        if (pollCount > 10) {
            reject('timed out waiting for ready');
        } else if (element.classList.contains('slds-hide')) {
            pollCount++;
            // eslint-disable-next-line @lwc/lwc/no-async-operation
            setTimeout(pollClassList(resolve, reject), 0);
        } else {
            resolve();
        }
    }

    return new Promise((resolve, reject) => {
        pollClassList(resolve, reject);
    });
}

const fields = {
    NameSimple: {
        label: 'Simple Name',
        value: 'Simple Name'
    }
};

describe('c-output-field', () => {
    it('text', () => {
        const element = createOutputField('Text');
        return waitForReady(element).then(() => {
            return expect(element).toMatchSnapshot();
        });
    });

    it('text with field reference', () => {
        const element = createOutputField({
            fieldApiName: 'Text',
            objectApiName: 'entity'
        });

        return waitForReady(element).then(() => {
            return expect(element).toMatchSnapshot();
        });
    });

    it('throws an error on objectApiName mismatch', () => {
        const element = createElement('c-output-field', {
            is: Element
        });

        const data = JSON.parse(JSON.stringify(store));
        element.fieldName = {
            fieldApiName: 'Text',
            objectApiName: 'notEntity'
        };

        document.body.appendChild(element);
        expect(() => {
            element.wireRecordUi(data);
        }).toThrowErrorMatchingSnapshot();
    });

    it('noLabel', () => {
        const element = createOutputField('Text');
        element.variant = 'label-hidden';
        return waitForReady(element).then(() => {
            return expect(element).toMatchSnapshot();
        });
    });

    // eslint-disable-next-line @lwc/lwc/no-async-await
    it('nonexistent', async () => {
        const element = createOutputField('NonField');
        return Promise.resolve().then(() => {
            return expect(element).toMatchSnapshot();
        });
    });

    it('boolean', () => {
        const element = createOutputField('Boolean');
        return waitForReady(element).then(() => {
            return expect(element).toMatchSnapshot();
        });
    });

    it('email', () => {
        const element = createOutputField('Email');
        return waitForReady(element).then(() => {
            return expect(element).toMatchSnapshot();
        });
    });

    it('phone', () => {
        const element = createOutputField('Phone');
        return waitForReady(element).then(() => {
            return expect(element).toMatchSnapshot();
        });
    });

    it('picklist', () => {
        const element = createOutputField('Picklist');
        return waitForReady(element).then(() => {
            return expect(element).toMatchSnapshot();
        });
    });

    it('richtext fallback', () => {
        const element = createOutputField('RichText');
        return waitForReady(element).then(() => {
            return expect(element).toMatchSnapshot();
        });
    });

    it('url', () => {
        const element = createOutputField('Url');
        return waitForReady(element).then(() => {
            return expect(element).toMatchSnapshot();
        });
    });

    it('adds slds-hide to invalid or hidden field', () => {
        const element = createOutputField('InvalidField');
        return expect(waitForReady(element)).rejects.toBeDefined();
    });

    describe('formatted-name', () => {
        it('Default Name', () => {
            const element = createOutputField('Name');
            return waitForReady(element).then(() => {
                return expect(element).toMatchSnapshot();
            });
        });
        it('renders simple names as text field', () => {
            const element = createOutputField('NameSimple');
            return waitForReady(element).then(() => {
                const textElement = element.shadowRoot.querySelector(
                    'c-formatted-text'
                );

                expect(textElement).toBeDefined();
                expect(textElement.shadowRoot.textContent).toEqual(
                    fields.NameSimple.value
                );
            });
        });
    });

    describe('formatted-address', () => {
        it('Default Address', () => {
            const element = createOutputField('BillingAddress');
            return waitForReady(element).then(() => {
                return expect(element).toMatchSnapshot();
            });
        });
    });

    describe('alignment of labels', () => {
        it('Default alignment of labels', () => {
            const element = createOutputField('Text');
            return waitForReady(element).then(() => {
                return expect(
                    element.classList.contains('slds-form-element_stacked')
                ).toBeTruthy();
            });
        });
        it('alignment changes when value changes in payload', () => {
            const element = createOutputField('Text');
            return waitForReady(element)
                .then(() => {
                    expect(
                        element.classList.contains('slds-form-element_stacked')
                    ).toBeTruthy();
                    store.labelAlignment = 'horizontal';
                    element.wireRecordUi(store);
                })
                .then(() => {
                    expect(
                        element.classList.contains(
                            'slds-form-element_horizontal'
                        )
                    ).toBeTruthy();
                    store.labelAlignment = 'stacked';
                });
        });
    });

    describe('class with variant', () => {
        it('is based on labelAlignment when no variant', () => {
            const element = createOutputField('Text', 'stacked');
            return waitForReady(element)
                .then(() => {
                    expect(
                        element.classList.contains('slds-form-element_stacked')
                    ).toBeTruthy();
                    store.labelAlignment = 'horizontal';
                    element.wireRecordUi(store);
                })
                .then(() => {
                    expect(
                        element.classList.contains(
                            'slds-form-element_horizontal'
                        )
                    ).toBeTruthy();
                });
        });
        it('is based on variant when there is variant', () => {
            const element = createOutputField(
                'Text',
                'stacked',
                'label-hidden'
            );

            return waitForReady(element)
                .then(() => {
                    expect(
                        element.classList.contains('slds-form-element_stacked')
                    ).toBeFalsy();
                    element.variant = 'label-stacked';
                    element.wireRecordUi(store);
                })
                .then(() => {
                    expect(
                        element.classList.contains('slds-form-element_stacked')
                    ).toBeTruthy();
                });
        });
    });
});
