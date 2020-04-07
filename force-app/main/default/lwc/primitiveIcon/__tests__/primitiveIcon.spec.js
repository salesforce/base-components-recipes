/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/primitiveIcon';

const createPrimitiveIcon = () => {
    const element = createElement('c-primitive-icon', { is: Element });
    document.body.appendChild(element);
    return element;
};

describe('c-primitive-icon', () => {
    it('default (size=medium, variant="", svg renders but is blank)', () => {
        const element = createPrimitiveIcon();
        expect(element).toMatchSnapshot();
    });

    describe('should render as expected for size', () => {
        it('xx-small', () => {
            const element = createPrimitiveIcon();
            element.iconName = 'utility:text_background_color';
            element.size = 'xx-small';
            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });

        it('x-small', () => {
            const element = createPrimitiveIcon();
            element.iconName = 'utility:text_background_color';
            element.size = 'x-small';
            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });

        it('small', () => {
            const element = createPrimitiveIcon();
            element.iconName = 'utility:text_background_color';
            element.size = 'small';
            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });

        it('medium', () => {
            const element = createPrimitiveIcon();
            element.iconName = 'utility:text_background_color';
            element.size = 'medium';
            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });

        it('large', () => {
            const element = createPrimitiveIcon();
            element.iconName = 'utility:text_background_color';
            element.size = 'large';
            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });

        it('change from small to large', () => {
            const element = createPrimitiveIcon();
            element.iconName = 'utility:text_background_color';
            element.size = 'small';
            return Promise.resolve()
                .then(() => {
                    element.size = 'large';
                })
                .then(() => {
                    expect(element).toMatchSnapshot();
                });
        });
    });

    describe('should render as expected for variant', () => {
        it('bare', () => {
            const element = createPrimitiveIcon();
            element.iconName = 'utility:salesforce1';
            element.variant = 'bare';
            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });

        it('error', () => {
            const element = createPrimitiveIcon();
            element.iconName = 'utility:salesforce1';
            element.variant = 'error';
            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });

        it('inverse', () => {
            const element = createPrimitiveIcon();
            element.iconName = 'utility:salesforce1';
            element.variant = 'inverse';
            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });

        it('warning', () => {
            const element = createPrimitiveIcon();
            element.iconName = 'utility:salesforce1';
            element.variant = 'warning';
            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });

        it('change from inverse to error', () => {
            const element = createPrimitiveIcon();
            element.iconName = 'utility:salesforce1';
            element.variant = 'inverse';
            return Promise.resolve()
                .then(() => {
                    element.variant = 'error';
                })
                .then(() => {
                    expect(element).toMatchSnapshot();
                });
        });
    });

    it('iconName value change from utility:salesforce1 to standard:account', () => {
        const element = createPrimitiveIcon();
        element.iconName = 'utility:salesforce1';
        return Promise.resolve()
            .then(() => {
                element.iconName = 'standard:account';
            })
            .then(() => {
                expect(element).toMatchSnapshot();
            });
    });
});
