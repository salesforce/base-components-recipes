/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/carouselImage';
import { registerSa11yMatcher } from '@sa11y/jest';

const createCarouselImage = (attributes) => {
    const element = createElement('c-carousel-image', { is: Element });

    Object.assign(element, attributes);
    document.body.appendChild(element);

    return element;
};

const DEFAULT_ATTRIBUTES = {
    alternativeText: 'This is a card',
    description: 'first card description',
    header: 'First card',
    href: 'https://www.salesforce.com',
    src:
        'https://latest-212.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg'
};

describe('c-carousel-image', () => {
    registerSa11yMatcher();

    it('default', () => {
        const element = createCarouselImage(DEFAULT_ATTRIBUTES);

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('runs accessibility testing on default template', () => {
        const element = createCarouselImage(DEFAULT_ATTRIBUTES);

        return Promise.resolve().then(() => expect(element).toBeAccessible());
    });
});
