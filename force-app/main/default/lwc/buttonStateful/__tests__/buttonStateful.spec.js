/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/buttonStateful';

const createButtonStateful = (attributes) => {
    const element = createElement('c-button-stateful', { is: Element });
    Object.assign(element, attributes);
    document.body.appendChild(element);

    return element;
};

describe('c-button-stateful', () => {
    it('default', () => {
        const element = createButtonStateful({
            labelWhenOff: 'Follow',
            labelWhenOn: 'Following',
            labelWhenHover: 'Unfollow'
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    describe('testIconNames', () => {
        it('Expected icons should render for each state', () => {
            const element = createButtonStateful({
                iconNameWhenOff: 'utility:add',
                iconNameWhenOn: 'utility:check',
                iconNameWhenHover: 'utility:close',
                labelWhenOff: 'Follow',
                labelWhenOn: 'Following',
                labelWhenHover: 'Unfollow'
            });

            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });

        it('Invalid or empty icon names should render empty icon elements', () => {
            const element = createButtonStateful({
                iconNameWhenOff: 'utility:',
                iconNameWhenOn: '',
                iconNameWhenHover: 'utility:pickle',
                labelWhenOff: 'Follow',
                labelWhenOn: 'Following',
                labelWhenHover: 'Unfollow'
            });

            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });
    });

    describe('Variant', () => {
        const createButtonStatefulWithVariant = (variant) => {
            const element = createButtonStateful({
                iconNameWhenOff: 'utility:add',
                iconNameWhenOn: 'utility:check',
                iconNameWhenHover: 'utility:close',
                labelWhenOff: 'Follow',
                labelWhenOn: 'Following',
                labelWhenHover: 'Unfollow',
                variant
            });

            return element;
        };

        it('should add default classes on invalid variant', () => {
            const element = createButtonStatefulWithVariant('invalid');

            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });

        it('should add correct classes on neutral variant', () => {
            const element = createButtonStatefulWithVariant('neutral');

            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });

        it('should add correct classes on brand variant', () => {
            const element = createButtonStatefulWithVariant('brand');

            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });

        it('should add correct classes on inverse variant', () => {
            const element = createButtonStatefulWithVariant('inverse');

            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });

        it('should add correct classes on text variant', () => {
            const element = createButtonStatefulWithVariant('text');

            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });
    });

    describe('testLabels', () => {
        it('Expected labels should render for each state', () => {
            const element = createButtonStateful({
                labelWhenOff: 'Seek',
                labelWhenOn: 'Seeking',
                labelWhenHover: 'Ignore'
            });

            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });

        it('`labelWhenOn` value should be used when `labelWhenHover` is missing or invalid', () => {
            const element = createButtonStateful({
                labelWhenOff: 'Seek',
                labelWhenOn: 'Seeking'
            });

            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });
    });
});
