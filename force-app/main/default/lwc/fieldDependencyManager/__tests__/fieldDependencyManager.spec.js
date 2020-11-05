/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import store from './mockDependencyData.json';
import { DependencyManager } from './../fieldDependencyManager';

function createDependencyManager() {
    const dependencyInfo = JSON.parse(JSON.stringify(store));
    return new DependencyManager(dependencyInfo);
}

function mockInputField(value, optionsMap) {
    return {
        setFieldValue: () => {},
        getFieldValue: () => {
            return value;
        },
        updateFieldOptions: (field, newOptions) => {
            optionsMap[field] = newOptions;
        }
    };
}

beforeEach(() => {});

describe('dependency manager with single select picklist fields', () => {
    describe('when registering fields', () => {
        describe('when single level of dependency', () => {
            it('sets correct options', () => {
                const controller = 'Country';
                const dependent = 'States_Provinces';
                const optionsMap = {};

                const depManager = createDependencyManager();
                depManager.registerField({
                    fieldName: controller,
                    fieldElement: mockInputField('United States', optionsMap)
                });

                depManager.registerField({
                    fieldName: dependent,
                    fieldElement: mockInputField('', optionsMap)
                });

                expect(optionsMap[dependent]).toContainOptions([
                    'New York',
                    'California'
                ]);

                expect(optionsMap[controller]).toContainOptions([
                    'United States',
                    'Canada',
                    'United Kingdom'
                ]);
            });

            it('sets correct options on dependent if controller is registered after dependent', () => {
                const controller = 'Country';
                const dependent = 'States_Provinces';
                const optionsMap = {};

                const depManager = createDependencyManager();
                depManager.registerField({
                    fieldName: dependent,
                    fieldElement: mockInputField('', optionsMap)
                });

                depManager.registerField({
                    fieldName: controller,
                    fieldElement: mockInputField('United States', optionsMap)
                });

                expect(optionsMap[dependent]).toContainOptions([
                    'New York',
                    'California'
                ]);

                expect(optionsMap[controller]).toContainOptions([
                    'United States',
                    'Canada',
                    'United Kingdom'
                ]);
            });

            it('sets correct options if no initial values', () => {
                const controller = 'Country';
                const dependent = 'States_Provinces';
                const optionsMap = {};

                const depManager = createDependencyManager();
                depManager.registerField({
                    fieldName: dependent,
                    fieldElement: mockInputField('', optionsMap)
                });

                depManager.registerField({
                    fieldName: controller,
                    fieldElement: mockInputField('', optionsMap)
                });

                expect(optionsMap[dependent]).toContainOptions([]);
                expect(optionsMap[controller]).toContainOptions([
                    'United States',
                    'Canada',
                    'United Kingdom'
                ]);
            });
        });
        describe('when multiple levels of dependency', () => {
            it('sets correct options', () => {
                const controller = 'Country';
                const dependent = 'States_Provinces';
                const subDependent = 'City';
                const optionsMap = {};

                const depManager = createDependencyManager();
                depManager.registerField({
                    fieldName: controller,
                    fieldElement: mockInputField('United States', optionsMap)
                });

                depManager.registerField({
                    fieldName: dependent,
                    fieldElement: mockInputField('New York', optionsMap)
                });

                depManager.registerField({
                    fieldName: subDependent,
                    fieldElement: mockInputField('', optionsMap)
                });

                expect(optionsMap[controller]).toContainOptions([
                    'United States',
                    'Canada',
                    'United Kingdom'
                ]);

                expect(optionsMap[dependent]).toContainOptions([
                    'New York',
                    'California'
                ]);

                expect(optionsMap[subDependent]).toContainOptions([
                    'New York City',
                    'Buffalo'
                ]);
            });

            it('sets correct options when no initial values', () => {
                const controller = 'Country';
                const dependent = 'States_Provinces';
                const subDependent = 'City';
                const optionsMap = {};

                const depManager = createDependencyManager();
                depManager.registerField({
                    fieldName: controller,
                    fieldElement: mockInputField('', optionsMap)
                });

                depManager.registerField({
                    fieldName: dependent,
                    fieldElement: mockInputField('', optionsMap)
                });

                depManager.registerField({
                    fieldName: subDependent,
                    fieldElement: mockInputField('', optionsMap)
                });

                expect(optionsMap[controller]).toContainOptions([
                    'United States',
                    'Canada',
                    'United Kingdom'
                ]);

                expect(optionsMap[dependent]).toContainOptions([]);
                expect(optionsMap[subDependent]).toContainOptions([]);
            });

            it('sets correct options when middle controller has no value', () => {
                const controller = 'Country';
                const dependent = 'States_Provinces';
                const subDependent = 'City';
                const optionsMap = {};

                const depManager = createDependencyManager();
                depManager.registerField({
                    fieldName: controller,
                    fieldElement: mockInputField('United States', optionsMap)
                });

                depManager.registerField({
                    fieldName: dependent,
                    fieldElement: mockInputField('', optionsMap)
                });

                depManager.registerField({
                    fieldName: subDependent,
                    fieldElement: mockInputField('', optionsMap)
                });

                expect(optionsMap[controller]).toContainOptions([
                    'United States',
                    'Canada',
                    'United Kingdom'
                ]);

                expect(optionsMap[dependent]).toContainOptions([
                    'New York',
                    'California'
                ]);

                expect(optionsMap[subDependent]).toContainOptions([]);
            });
        });
    });
    describe('when changing fields', () => {
        describe('when single level of dependency', () => {
            it('sets correct options', () => {
                const controller = 'Country';
                const dependent = 'States_Provinces';
                const optionsMap = {};

                const depManager = createDependencyManager();
                depManager.registerField({
                    fieldName: controller,
                    fieldElement: mockInputField('United States', optionsMap)
                });

                depManager.registerField({
                    fieldName: dependent,
                    fieldElement: mockInputField('', optionsMap)
                });

                depManager.handleFieldValueChange(controller, 'Canada');

                expect(optionsMap[dependent]).toContainOptions([
                    'Ontario',
                    'British Columbia'
                ]);

                expect(optionsMap[controller]).toContainOptions([
                    'United States',
                    'Canada',
                    'United Kingdom'
                ]);
            });

            it('sets correct options when no initial value', () => {
                const controller = 'Country';
                const dependent = 'States_Provinces';
                const optionsMap = {};

                const depManager = createDependencyManager();
                depManager.registerField({
                    fieldName: controller,
                    fieldElement: mockInputField('', optionsMap)
                });

                depManager.registerField({
                    fieldName: dependent,
                    fieldElement: mockInputField('', optionsMap)
                });

                depManager.handleFieldValueChange(controller, 'Canada');

                expect(optionsMap[dependent]).toContainOptions([
                    'Ontario',
                    'British Columbia'
                ]);

                expect(optionsMap[controller]).toContainOptions([
                    'United States',
                    'Canada',
                    'United Kingdom'
                ]);
            });

            it('changing dependent does not affect options', () => {
                const controller = 'Country';
                const dependent = 'States_Provinces';
                const optionsMap = {};

                const depManager = createDependencyManager();
                depManager.registerField({
                    fieldName: controller,
                    fieldElement: mockInputField('United States', optionsMap)
                });

                depManager.registerField({
                    fieldName: dependent,
                    fieldElement: mockInputField('', optionsMap)
                });

                depManager.handleFieldValueChange(dependent, 'Canada');

                expect(optionsMap[dependent]).toContainOptions([
                    'New York',
                    'California'
                ]);

                expect(optionsMap[controller]).toContainOptions([
                    'United States',
                    'Canada',
                    'United Kingdom'
                ]);
            });
        });
        describe('when multiple levels of dependency', () => {
            it('sets correct options when changing controller', () => {
                const controller = 'Country';
                const dependent = 'States_Provinces';
                const subDependent = 'City';
                const optionsMap = {};

                const depManager = createDependencyManager();
                depManager.registerField({
                    fieldName: controller,
                    fieldElement: mockInputField('United States', optionsMap)
                });

                depManager.registerField({
                    fieldName: dependent,
                    fieldElement: mockInputField('', optionsMap)
                });

                depManager.registerField({
                    fieldName: subDependent,
                    fieldElement: mockInputField('', optionsMap)
                });

                depManager.handleFieldValueChange(controller, 'Canada');

                expect(optionsMap[controller]).toContainOptions([
                    'United States',
                    'Canada',
                    'United Kingdom'
                ]);

                expect(optionsMap[dependent]).toContainOptions([
                    'Ontario',
                    'British Columbia'
                ]);

                expect(optionsMap[subDependent]).toContainOptions([]);
            });

            it('sets correct options when changing middle controller', () => {
                const controller = 'Country';
                const dependent = 'States_Provinces';
                const subDependent = 'City';
                const optionsMap = {};

                const depManager = createDependencyManager();
                depManager.registerField({
                    fieldName: controller,
                    fieldElement: mockInputField('United States', optionsMap)
                });

                depManager.registerField({
                    fieldName: dependent,
                    fieldElement: mockInputField('', optionsMap)
                });

                depManager.registerField({
                    fieldName: subDependent,
                    fieldElement: mockInputField('', optionsMap)
                });

                depManager.handleFieldValueChange(dependent, 'New York');

                expect(optionsMap[controller]).toContainOptions([
                    'United States',
                    'Canada',
                    'United Kingdom'
                ]);

                expect(optionsMap[dependent]).toContainOptions([
                    'New York',
                    'California'
                ]);

                expect(optionsMap[subDependent]).toContainOptions([
                    'New York City',
                    'Buffalo'
                ]);
            });

            it('changing the field without dependents does not affect options', () => {
                const controller = 'Country';
                const dependent = 'States_Provinces';
                const subDependent = 'City';
                const optionsMap = {};

                const depManager = createDependencyManager();
                depManager.registerField({
                    fieldName: controller,
                    fieldElement: mockInputField('United States', optionsMap)
                });

                depManager.registerField({
                    fieldName: dependent,
                    fieldElement: mockInputField('New York', optionsMap)
                });

                depManager.registerField({
                    fieldName: subDependent,
                    fieldElement: mockInputField('', optionsMap)
                });

                depManager.handleFieldValueChange(
                    subDependent,
                    'New York City'
                );

                expect(optionsMap[controller]).toContainOptions([
                    'United States',
                    'Canada',
                    'United Kingdom'
                ]);

                expect(optionsMap[dependent]).toContainOptions([
                    'New York',
                    'California'
                ]);

                expect(optionsMap[subDependent]).toContainOptions([
                    'New York City',
                    'Buffalo'
                ]);
            });
        });
    });
});

describe('dependency manager including multi select picklists fields', () => {
    describe('when registering fields', () => {
        it('sets correct options', () => {
            const controller = 'Country';
            const dependent = 'MultiCity';
            const optionsMap = {};

            const depManager = createDependencyManager();
            depManager.registerField({
                fieldName: controller,
                fieldElement: mockInputField('Canada', optionsMap)
            });

            depManager.registerField({
                fieldName: dependent,
                fieldElement: mockInputField('', optionsMap)
            });

            expect(optionsMap[dependent]).toContainOptions([
                'Montreal',
                'Vancouver',
                'Toronto'
            ]);

            expect(optionsMap[controller]).toContainOptions([
                'United States',
                'Canada',
                'United Kingdom'
            ]);
        });

        it('sets correct options on dependent if controller is registered after dependent', () => {
            const controller = 'Country';
            const dependent = 'MultiCity';
            const optionsMap = {};

            const depManager = createDependencyManager();
            depManager.registerField({
                fieldName: dependent,
                fieldElement: mockInputField('', optionsMap)
            });

            depManager.registerField({
                fieldName: controller,
                fieldElement: mockInputField('Canada', optionsMap)
            });

            expect(optionsMap[dependent]).toContainOptions([
                'Montreal',
                'Vancouver',
                'Toronto'
            ]);

            expect(optionsMap[controller]).toContainOptions([
                'United States',
                'Canada',
                'United Kingdom'
            ]);
        });

        it('sets correct options if no initial values', () => {
            const controller = 'Country';
            const dependent = 'MultiCity';
            const optionsMap = {};

            const depManager = createDependencyManager();
            depManager.registerField({
                fieldName: dependent,
                fieldElement: mockInputField('', optionsMap)
            });

            depManager.registerField({
                fieldName: controller,
                fieldElement: mockInputField('', optionsMap)
            });

            expect(optionsMap[dependent]).toContainOptions([]);
            expect(optionsMap[controller]).toContainOptions([
                'United States',
                'Canada',
                'United Kingdom'
            ]);
        });

        it('sets correct options if more than one dependent', () => {
            const controller = 'Country';
            const dependent = 'MultiCity';
            const otherDependent = 'States_Provinces';
            const optionsMap = {};

            const depManager = createDependencyManager();
            depManager.registerField({
                fieldName: controller,
                fieldElement: mockInputField('Canada', optionsMap)
            });

            depManager.registerField({
                fieldName: dependent,
                fieldElement: mockInputField('', optionsMap)
            });

            depManager.registerField({
                fieldName: otherDependent,
                fieldElement: mockInputField('', optionsMap)
            });

            expect(optionsMap[controller]).toContainOptions([
                'United States',
                'Canada',
                'United Kingdom'
            ]);

            expect(optionsMap[dependent]).toContainOptions([
                'Montreal',
                'Vancouver',
                'Toronto'
            ]);

            expect(optionsMap[otherDependent]).toContainOptions([
                'Ontario',
                'British Columbia'
            ]);
        });
    });
    describe('when changing fields', () => {
        it('sets correct options', () => {
            const controller = 'Country';
            const dependent = 'MultiCity';
            const optionsMap = {};

            const depManager = createDependencyManager();
            depManager.registerField({
                fieldName: controller,
                fieldElement: mockInputField('Canada', optionsMap)
            });

            depManager.registerField({
                fieldName: dependent,
                fieldElement: mockInputField('', optionsMap)
            });

            depManager.handleFieldValueChange(controller, 'United Kingdom');

            expect(optionsMap[dependent]).toContainOptions([
                'Manchester',
                'Birmingham',
                'London'
            ]);

            expect(optionsMap[controller]).toContainOptions([
                'United States',
                'Canada',
                'United Kingdom'
            ]);
        });

        it('sets correct options when no initial value', () => {
            const controller = 'Country';
            const dependent = 'MultiCity';
            const optionsMap = {};

            const depManager = createDependencyManager();
            depManager.registerField({
                fieldName: controller,
                fieldElement: mockInputField('', optionsMap)
            });

            depManager.registerField({
                fieldName: dependent,
                fieldElement: mockInputField('', optionsMap)
            });

            depManager.handleFieldValueChange(controller, 'Canada');

            expect(optionsMap[dependent]).toContainOptions([
                'Montreal',
                'Vancouver',
                'Toronto'
            ]);

            expect(optionsMap[controller]).toContainOptions([
                'United States',
                'Canada',
                'United Kingdom'
            ]);
        });

        it('changing dependent does not affect options', () => {
            const controller = 'Country';
            const dependent = 'MultiCity';
            const optionsMap = {};

            const depManager = createDependencyManager();
            depManager.registerField({
                fieldName: controller,
                fieldElement: mockInputField('Canada', optionsMap)
            });

            depManager.registerField({
                fieldName: dependent,
                fieldElement: mockInputField('', optionsMap)
            });

            depManager.handleFieldValueChange(dependent, 'Toronto');

            expect(optionsMap[dependent]).toContainOptions([
                'Montreal',
                'Vancouver',
                'Toronto'
            ]);

            expect(optionsMap[controller]).toContainOptions([
                'United States',
                'Canada',
                'United Kingdom'
            ]);
        });

        it('sets correct options if more than one dependent', () => {
            const controller = 'Country';
            const dependent = 'MultiCity';
            const otherDependent = 'States_Provinces';
            const optionsMap = {};

            const depManager = createDependencyManager();
            depManager.registerField({
                fieldName: controller,
                fieldElement: mockInputField('Canada', optionsMap)
            });

            depManager.registerField({
                fieldName: dependent,
                fieldElement: mockInputField('', optionsMap)
            });

            depManager.registerField({
                fieldName: otherDependent,
                fieldElement: mockInputField('', optionsMap)
            });

            depManager.handleFieldValueChange(controller, 'United States');

            expect(optionsMap[controller]).toContainOptions([
                'United States',
                'Canada',
                'United Kingdom'
            ]);

            expect(optionsMap[dependent]).toContainOptions([]);
            expect(optionsMap[otherDependent]).toContainOptions([
                'New York',
                'California'
            ]);
        });
    });
});

describe('dependency manager including checkbox fields', () => {
    describe('when registering fields', () => {
        it('sets correct options', () => {
            const controller = 'Has_Weakness';
            const dependent = 'Weakness';
            const optionsMap = {};

            const depManager = createDependencyManager();
            depManager.registerField({
                fieldName: controller,
                fieldElement: mockInputField('true', optionsMap)
            });

            depManager.registerField({
                fieldName: dependent,
                fieldElement: mockInputField('', optionsMap)
            });

            expect(optionsMap[dependent]).toContainOptions([
                'Silver Bullet',
                'Emotional Blackmail'
            ]);
        });

        it('sets correct options on dependent if controller is registered after dependent', () => {
            const controller = 'Has_Weakness';
            const dependent = 'Weakness';
            const optionsMap = {};

            const depManager = createDependencyManager();
            depManager.registerField({
                fieldName: dependent,
                fieldElement: mockInputField('', optionsMap)
            });

            depManager.registerField({
                fieldName: controller,
                fieldElement: mockInputField('false', optionsMap)
            });

            expect(optionsMap[dependent]).toContainOptions(['Water', 'Poison']);
        });
    });
    describe('when changing fields', () => {
        it('sets correct options', () => {
            const controller = 'Has_Weakness';
            const dependent = 'Weakness';
            const optionsMap = {};

            const depManager = createDependencyManager();
            depManager.registerField({
                fieldName: controller,
                fieldElement: mockInputField('false', optionsMap)
            });

            depManager.registerField({
                fieldName: dependent,
                fieldElement: mockInputField('', optionsMap)
            });

            depManager.handleFieldValueChange(controller, 'true');

            expect(optionsMap[dependent]).toContainOptions([
                'Silver Bullet',
                'Emotional Blackmail'
            ]);
        });

        it('sets correct options toggling checkbox twice', () => {
            const controller = 'Has_Weakness';
            const dependent = 'Weakness';
            const optionsMap = {};

            const depManager = createDependencyManager();
            depManager.registerField({
                fieldName: controller,
                fieldElement: mockInputField('false', optionsMap)
            });

            depManager.registerField({
                fieldName: dependent,
                fieldElement: mockInputField('', optionsMap)
            });

            depManager.handleFieldValueChange(controller, 'true');
            depManager.handleFieldValueChange(controller, 'false');

            expect(optionsMap[dependent]).toContainOptions(['Water', 'Poison']);
        });
    });
});

expect.extend({
    toContainOptions(actual, expected) {
        const valueExists = (valueToCheck) =>
            [...actual].some((actualValue) => {
                return actualValue.value === valueToCheck;
            });
        const lengthCheck = actual.length === expected.length;
        const pass =
            lengthCheck &&
            [...expected].every((expectedValue) => {
                return valueExists(expectedValue);
            });

        return {
            message: () =>
                `expected the picklist to contain options: ${expected}`,
            pass
        };
    }
});
