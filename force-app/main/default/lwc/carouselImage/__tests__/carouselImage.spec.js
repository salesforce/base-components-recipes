/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/carouselImage';
import { axe, toHaveNoViolations } from 'jest-axe';

const createCarouselImage = attributes => {
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

expect.extend(toHaveNoViolations);

describe('c-carousel-image', () => {
    it('default', () => {
        const element = createCarouselImage(DEFAULT_ATTRIBUTES);

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    // eslint-disable-next-line @lwc/lwc/no-async-await
    it('runs accesibility testing on default template', async () => {
        expect.extend(toHaveNoViolations);

        const element = createCarouselImage(DEFAULT_ATTRIBUTES);

        // eslint-disable-next-line @lwc/lwc/no-async-await
        return Promise.resolve().then(async () => {
            // eslint-disable-next-line @lwc/lwc/no-inner-html
            expect(await axe(element.outerHTML)).toHaveNoViolations();
        });
    });
});
