/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/formattedUrl';
import { shadowQuerySelector } from 'lightning/testUtils';

const createComponent = (params = {}) => {
    const element = createElement('c-formatted-url', { is: Element });
    Object.assign(element, params);
    document.body.appendChild(element);
    return element;
};

describe('c-formatted-url', () => {
    it('default', () => {
        const element = createComponent();
        expect(element).toMatchSnapshot();
    });

    it('url without prefix', () => {
        const element = createComponent({
            value: 'foo/sss',
            target: '_blank'
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('url has http prefix', () => {
        const element = createComponent({
            value: 'http://foo/nns',
            target: '_blank'
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('url has https prefix', () => {
        const element = createComponent({
            value: 'https://foo/nns',
            target: '_blank'
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('url has ftp prefix', () => {
        const element = createComponent({
            value: 'https://foo/nns',
            target: '_blank',
            title: '123'
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('url has title', () => {
        const element = createComponent({
            value: 'https://foo/nns',
            target: '_blank',
            tooltip: '123'
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('url has title, and target is _self', () => {
        const element = createComponent({
            value: 'https://foo/nns',
            target: '_self',
            title: '123',
            label: 'TheLabel'
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('url has title, and target is a named iframe', () => {
        const element = createComponent({
            value: 'https://foo/nns',
            target: 'someIFrame',
            tooltip: '123',
            label: 'TheLabel'
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('label changes', () => {
        const element = createComponent({
            value: 'https://foo/nns',
            target: 'someIFrame',
            tooltip: '123'
        });

        return Promise.resolve()
            .then(() => {
                expect(element).toMatchSnapshot();
                element.label = 'A label';
            })
            .then(() => {
                expect(element).toMatchSnapshot();
                element.label = '';
            })
            .then(() => {
                expect(element).toMatchSnapshot();
            });
    });

    it('tooltip changes', () => {
        const element = createComponent({
            value: 'https://foo/nns',
            target: 'someIFrame',
            tooltip: '123'
        });

        return Promise.resolve()
            .then(() => {
                expect(element).toMatchSnapshot();
                element.tooltip = '';
            })
            .then(() => {
                expect(element).toMatchSnapshot();
                element.label = '123';
            })
            .then(() => {
                expect(element).toMatchSnapshot();
            });
    });

    it('target changes', () => {
        const element = createComponent({
            value: 'https://foo/nns',
            target: 'someIFrame'
        });

        return Promise.resolve()
            .then(() => {
                expect(element).toMatchSnapshot();
                element.target = '';
            })
            .then(() => {
                expect(element).toMatchSnapshot();
                element.target = '_blank';
            })
            .then(() => {
                expect(element).toMatchSnapshot();
            });
    });

    it('sets tabIndex', () => {
        const element = createComponent({
            value: 'somelink.com',
            tabIndex: '0'
        });

        return Promise.resolve().then(() => {
            expect(element.getAttribute('tabindex')).toBeFalsy();
            expect(
                shadowQuerySelector(element, 'a').getAttribute('tabindex')
            ).toBe('0');
        });
    });
});
