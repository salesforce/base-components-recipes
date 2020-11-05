/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement, register } from 'lwc';
import MockRecordHolder from 'lightningtest/mockRecordViewHolder';
import { registerMockedWireService } from 'lwc-wire-service-sfdc-mocks';
registerMockedWireService({ register });
import { shadowQuerySelector, getShadowRoot } from 'lightning/testUtils';
import * as densityUtils from 'c/formDensityUtilsPrivate';

const DEFAULT_RECORD_ID = 'a00R0000000jq5eIAA';
const NEW_RECORD_ID = 'a00R0000000xAHtIAM';
const DEFAULT_API_NAME = 'Bad_Guy__c';

const createMockedForm = (recordId, objectApiName, props = {}) => {
    const element = createElement('lightningtest-mock-record-view-holder', {
        is: MockRecordHolder
    });

    if (recordId) {
        element.recordId = recordId;
    }
    if (objectApiName) {
        element.objectApiName = objectApiName;
    }
    Object.assign(element, props);
    document.body.appendChild(element);

    return element;
};

const expectToEqualWiredData = (data) => {
    expect(data).toEqual(
        expect.objectContaining({
            record: expect.any(Object),
            objectInfo: expect.any(Object)
        })
    );
};

const verifyDefaultNameValue = (element, resolve, reject) => {
    const outputField = shadowQuerySelector(element, 'c-output-field');
    if (outputField) {
        try {
            const data = outputField.getWiredData();
            expectToEqualWiredData(data);

            expect(data.record.fields.Name.value).toEqual(
                'Wicked Witch of the West'
            );
        } catch (e) {
            reject(e);
        }
    } else {
        reject('Output field is missing');
    }
};

describe('record view form', () => {
    it('wires recordUi to output fields', () => {
        const element = createMockedForm(DEFAULT_RECORD_ID, DEFAULT_API_NAME);
        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                const outputField = shadowQuerySelector(
                    element,
                    'c-output-field'
                );

                if (outputField) {
                    try {
                        const data = outputField.getWiredData();
                        expectToEqualWiredData(data);

                        expect(data.record.fields.Name.value).toEqual(
                            'Wicked Witch of the West'
                        );
                    } catch (e) {
                        reject(e);
                    }
                    resolve();
                } else {
                    reject('Output field is missing');
                }
            });

            const form = shadowQuerySelector(element, 'c-record-view-form');

            form.addEventListener('error', (error) => {
                reject(error);
            });
        });
    });

    it('supports object for objectApiName', () => {
        const element = createMockedForm(DEFAULT_RECORD_ID, {
            objectApiName: DEFAULT_API_NAME
        });

        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                const outputField = shadowQuerySelector(
                    element,
                    'c-output-field'
                );

                if (outputField) {
                    try {
                        const data = outputField.getWiredData();
                        expectToEqualWiredData(data);

                        expect(data.record.fields.Name.value).toEqual(
                            'Wicked Witch of the West'
                        );
                    } catch (e) {
                        reject(e);
                    }
                    resolve();
                } else {
                    reject('Output field is missing');
                }
            });

            const form = shadowQuerySelector(element, 'c-record-view-form');

            form.addEventListener('error', (error) => {
                reject(error);
            });
        });
    });

    it('throws error when record id is invalid', () => {
        const element = createMockedForm(DEFAULT_RECORD_ID, DEFAULT_API_NAME);
        return new Promise((resolve, reject) => {
            const form = shadowQuerySelector(element, 'c-record-view-form');

            form.addEventListener('error', () => {
                resolve();
            });
            function loadHandler() {
                element.removeEventListener('load', loadHandler);
                element.addEventListener('load', () => {
                    reject('We should not have loaded properly');
                });

                element.recordId = 'NonexistentRecordId';
            }
            element.addEventListener('load', loadHandler);
        });
    });

    it('displays a warning in the console when record id is undefined', () => {
        return new Promise((resolve, reject) => {
            // eslint-disable-next-line no-console
            console.warn = jest.fn((warn) => {
                expect(warn).toEqual(
                    'record id is required but is currently undefined or null'
                );

                resolve();
            });

            createMockedForm(undefined, DEFAULT_API_NAME);
            reject();
        });
    });

    it('displays a warning in the console when api name is undefined', () => {
        return new Promise((resolve, reject) => {
            // eslint-disable-next-line no-console
            console.warn = jest.fn((warn) => {
                expect(warn).toEqual(
                    'API Name is required but is currently undefined or null'
                );

                resolve();
            });

            createMockedForm(DEFAULT_RECORD_ID);
            reject();
        });
    });

    it('waits for object api name before loading data', () => {
        return new Promise((resolve, reject) => {
            let warning = false;

            // eslint-disable-next-line no-console
            console.warn = jest.fn(() => {
                warning = true;
            });

            const element = createMockedForm(DEFAULT_RECORD_ID);

            function loadHandler() {
                reject(
                    'record view form should not be loading with object api name unset'
                );
            }
            element.addEventListener('load', loadHandler);

            const form = shadowQuerySelector(element, 'c-record-view-form');

            form.addEventListener('error', (error) => {
                reject(error.message);
            });

            Promise.resolve().then(() => {
                expect(warning).toBeTruthy();

                element.removeEventListener('load', loadHandler);
                element.addEventListener('load', () => {
                    try {
                        expect(element.recordId).toBeDefined();
                        expect(element.objectApiName).toBeDefined();
                    } catch (e) {
                        reject(
                            'recordId and objectApiName should both be defined when loading a record ui'
                        );
                    }

                    verifyDefaultNameValue(element, resolve, reject);
                    resolve();
                });

                element.objectApiName = DEFAULT_API_NAME;
            });
        });
    });

    it('displays a warning when recordId is set to empty', () => {
        const element = createMockedForm(DEFAULT_RECORD_ID, DEFAULT_API_NAME);
        return new Promise((resolve, reject) => {
            const form = shadowQuerySelector(element, 'c-record-view-form');

            form.addEventListener('error', (error) => {
                reject(error);
            });

            element.addEventListener('load', () => {
                // eslint-disable-next-line no-console
                console.warn = jest.fn(() => {
                    resolve();
                });

                element.recordId = null;

                Promise.resolve().then(() => {
                    reject('Expected warning for a null record id');
                });
            });
        });
    });

    it('clears the record ui when record id is set to empty', () => {
        const element = createMockedForm(DEFAULT_RECORD_ID, DEFAULT_API_NAME);
        return new Promise((resolve, reject) => {
            const form = shadowQuerySelector(element, 'c-record-view-form');

            form.addEventListener('error', (error) => {
                reject(error);
            });

            element.addEventListener('load', () => {
                verifyDefaultNameValue(element, resolve, reject);

                // eslint-disable-next-line no-console
                console.warn = jest.fn(() => {
                    Promise.resolve().then(() => {
                        const outputField = shadowQuerySelector(
                            element,
                            'c-output-field'
                        );

                        if (outputField) {
                            try {
                                const data = outputField.getWiredData();
                                expect(data).toBeFalsy();
                                resolve();
                            } catch (e) {
                                reject(e);
                            }
                        } else {
                            reject('Output field is missing');
                        }
                    });
                });

                element.recordId = null;
            });
        });
    });

    it('displays a warning when objectApiName is set to empty', () => {
        const element = createMockedForm(DEFAULT_RECORD_ID, DEFAULT_API_NAME);
        return new Promise((resolve, reject) => {
            const form = shadowQuerySelector(element, 'c-record-view-form');

            form.addEventListener('error', (error) => {
                reject(error);
            });

            element.addEventListener('load', () => {
                verifyDefaultNameValue(element, resolve, reject);

                // eslint-disable-next-line no-console
                console.warn = jest.fn((warn) => {
                    resolve(warn);
                });

                element.objectApiName = null;

                Promise.resolve().then(() => {
                    reject('Expected warning for a null api name');
                });
            });
        });
    });

    it('wires data for 15 digit record ids', () => {
        const element = createMockedForm('a00R0000000jq5e', DEFAULT_API_NAME);
        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                const outputField = shadowQuerySelector(
                    element,
                    'c-output-field'
                );

                if (outputField) {
                    try {
                        const data = outputField.getWiredData();

                        expect(data.record.fields.Name.value).toEqual(
                            'Wicked Witch of the West'
                        );
                    } catch (e) {
                        reject(e);
                    }
                    resolve();
                } else {
                    reject('Output field is missing');
                }
            });

            const form = shadowQuerySelector(element, 'c-record-view-form');

            form.addEventListener('error', (error) => {
                reject(error);
            });
        });
    });

    it('wires added fields already included in record-ui', () => {
        const element = createMockedForm(DEFAULT_RECORD_ID, DEFAULT_API_NAME);
        return new Promise((resolve, reject) => {
            function loadHandler() {
                element.removeEventListener('load', loadHandler);
                element.addEventListener('load', () => {
                    const includedField = shadowQuerySelector(
                        element,
                        '.includedField'
                    );

                    if (includedField) {
                        try {
                            const data = includedField.getWiredData();
                            expectToEqualWiredData(data);
                        } catch (e) {
                            reject(e);
                        }
                        resolve();
                    }
                });
                element.showIncludedField = true;
            }
            element.addEventListener('load', loadHandler);

            const form = shadowQuerySelector(element, 'c-record-view-form');

            form.addEventListener('error', (error) => {
                reject(error);
            });
        });
    });

    it('wires added optional fields', () => {
        const element = createMockedForm(DEFAULT_RECORD_ID, DEFAULT_API_NAME);
        return new Promise((resolve, reject) => {
            function loadHandler(initialData) {
                const expectedFields =
                    initialData.detail.objectInfos.Bad_Guy__c.fields;
                expect(expectedFields).toEqual(
                    expect.not.objectContaining({
                        // eslint-disable-next-line camelcase
                        Additional_Field__c: expect.any(Object)
                    })
                );

                element.removeEventListener('load', loadHandler);
                element.addEventListener('load', () => {
                    const excludedField = shadowQuerySelector(
                        element,
                        '.excludedField'
                    );

                    if (excludedField) {
                        try {
                            const data = excludedField.getWiredData();
                            expect(data.objectInfo.fields).toEqual(
                                expect.objectContaining({
                                    // eslint-disable-next-line camelcase
                                    Additional_Field__c: expect.any(Object)
                                })
                            );
                        } catch (e) {
                            reject(e);
                        }
                        resolve();
                    } else {
                        reject('Excluded field was not found');
                    }
                });
                element.showExcludedField = true;
            }
            element.addEventListener('load', loadHandler);

            const form = shadowQuerySelector(element, 'c-record-view-form');

            form.addEventListener('error', (error) => {
                reject(error);
            });
        });
    });

    it('should render dynamic fields that are wired before', () => {
        const element = createMockedForm(DEFAULT_RECORD_ID, DEFAULT_API_NAME, {
            showExcludedField: true
        });

        const getOutputField = () => {
            return shadowQuerySelector(element, '.excludedField');
        };

        return new Promise((resolve) => {
            setTimeout(() => {
                const outputField = getOutputField();
                expect(outputField.getWiredData()).not.toBe(null);

                element.showExcludedField = false;

                resolve();
            }, 1);
        })
            .then(() => {
                const outputField = getOutputField();
                expect(outputField).toBe(null);

                element.showExcludedField = true;
            })
            .then(() => {
                const outputField = getOutputField();
                expect(outputField.getWiredData()).not.toBe(null);
            });
    });

    it('should render fields when the outputField is a child of the slot element', () => {
        const element = createMockedForm('a00R0000000jq5e', DEFAULT_API_NAME);
        return new Promise((resolve) => {
            element.addEventListener('load', () => {
                element.showNestedChild = true;

                element.addEventListener('load', () => {
                    resolve();
                });
            });
        }).then(() => {
            return Promise.resolve().then(() => {
                const outputField = shadowQuerySelector(
                    element,
                    '.createdDate'
                );

                expect(getShadowRoot(outputField).textContent).toEqual(
                    'CreatedDate'
                );
            });
        });
    });

    it('supports dynamic id changes', () => {
        const element = createMockedForm(DEFAULT_RECORD_ID, DEFAULT_API_NAME);
        return new Promise((resolve, reject) => {
            function loadHandler() {
                element.removeEventListener('load', loadHandler);
                element.addEventListener('load', () => {
                    try {
                        const field = shadowQuerySelector(
                            element,
                            'c-output-field'
                        );

                        const data = field.getWiredData();

                        expect(data.record.fields.Name.value).toEqual(
                            'Darth Vader'
                        );
                    } catch (e) {
                        reject(e);
                    }
                    resolve();
                });
                element.recordId = NEW_RECORD_ID;
            }
            element.addEventListener('load', loadHandler);

            const form = shadowQuerySelector(element, 'c-record-view-form');

            form.addEventListener('error', (error) => {
                reject(error.message);
            });
        });
    });
    it('wires label alignment for auto density and reacts on changing density', () => {
        jest.spyOn(densityUtils, 'resetResizeObserver');
        const element = createMockedForm('a00R0000000jq5e', DEFAULT_API_NAME);
        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                const outputField = shadowQuerySelector(
                    element,
                    'c-output-field'
                );

                if (outputField) {
                    try {
                        expect(
                            densityUtils.resetResizeObserver
                        ).toHaveBeenCalledTimes(1);
                        resolve();
                    } catch (e) {
                        reject(e);
                    }
                } else {
                    reject('Output field is missing');
                }
            });
        }).then(() => {
            element.density = 'comfy';
            return Promise.resolve().then(() => {
                expect(densityUtils.resetResizeObserver).toHaveBeenCalledTimes(
                    2
                );
            });
        });
    });
    it('wires label alignment for compact density', () => {
        const element = createMockedForm('a00R0000000jq5e', DEFAULT_API_NAME, {
            density: 'compact'
        });

        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                const outputField = shadowQuerySelector(
                    element,
                    'c-output-field'
                );

                if (outputField) {
                    try {
                        const data = outputField.getWiredData();

                        expect(data.labelAlignment).toEqual('horizontal');
                    } catch (e) {
                        reject(e);
                    }
                    resolve();
                } else {
                    reject('Output field is missing');
                }
            });

            const form = shadowQuerySelector(element, 'c-record-view-form');

            form.addEventListener('error', (error) => {
                reject(error);
            });
        });
    });
    it('wires label alignment for comfy density and rewires on changing density', () => {
        const element = createMockedForm('a00R0000000jq5e', DEFAULT_API_NAME, {
            density: 'comfy'
        });

        return new Promise((resolve, reject) => {
            element.addEventListener('load', () => {
                const outputField = shadowQuerySelector(
                    element,
                    'c-output-field'
                );

                if (outputField) {
                    try {
                        const data = outputField.getWiredData();

                        expect(data.labelAlignment).toEqual('stacked');
                    } catch (e) {
                        reject(e);
                    }
                    resolve();
                } else {
                    reject('Output field is missing');
                }
            });

            const form = shadowQuerySelector(element, 'c-record-view-form');

            form.addEventListener('error', (error) => {
                reject(error);
            });
        }).then(() => {
            const outputField = shadowQuerySelector(element, 'c-output-field');

            const data = outputField.getWiredData();
            element.density = 'auto';
            return Promise.resolve().then(() => {
                expect(data.labelAlignment).toEqual('horizontal');
            });
        });
    });
});
