/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import { querySelector } from 'lightning/testUtils';
import Element from 'c/icon';

const createIcon = () => {
    const element = createElement('c-icon', { is: Element });
    document.body.appendChild(element);
    return element;
};

jest.mock('./../../utilsPrivate/browser', () => {
    return { isIE11: true };
});

function getHref(iconElement) {
    const icon = querySelector(iconElement, 'c-primitive-icon');
    const use = querySelector(icon, 'use');
    return use.getAttribute('xlink:href');
}

describe('c-icon', () => {
    it('Tests that custom icon is set to standard:default when ran in IE11', () => {
        const element = createIcon();

        element.src = '/my/url/my.svg#custom-icon';
        element.iconName = 'utility:down';
        document.body.appendChild(element);

        return Promise.resolve().then(() => {
            expect(getHref(element)).toBe(
                '/assets/icons/standard-sprite/svg/symbols.svg#default'
            );
        });
    });

    it('When running in IE11 and src attribute is set, then removed, it tests that xlink:href value is set back to the original iconName', () => {
        const element = createIcon();

        element.src = '/my/url/my.svg#custom-icon';
        element.iconName = 'utility:down';
        document.body.appendChild(element);

        return Promise.resolve()
            .then(() => {
                expect(getHref(element)).toBe(
                    '/assets/icons/standard-sprite/svg/symbols.svg#default'
                );

                element.src = null;
            })
            .then(() => {
                expect(getHref(element)).toBe(
                    '/assets/icons/utility-sprite/svg/symbols.svg#down'
                );
            });
    });
});
