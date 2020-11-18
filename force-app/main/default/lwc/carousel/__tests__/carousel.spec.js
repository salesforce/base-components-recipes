/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import { shadowQuerySelector, querySelectorAll } from 'lightning/testUtils';
import Element from 'lightningtest/carouselTest';

const createCarousel = (attributes) => {
    const element = createElement('lightningtest-carousel-test', {
        is: Element
    });

    Object.assign(element, attributes);
    document.body.appendChild(element);

    return element;
};

const DEFAULT_ITEMS = [
    {
        alternativeText: 'https://www.salesforce.com',
        description: 'This is a card',
        header: 'First card',
        href: 'http://www.salesforce.com',
        src:
            'https://latest-212.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg'
    },

    {
        alternativeText: 'https://www.salesforce.com',
        description: 'This is a card',
        header: 'Second card',
        href: 'http://www.salesforce.com',
        src:
            'https://latest-212.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg'
    },

    {
        alternativeText: 'https://www.salesforce.com',
        description: 'This is a card',
        header: 'Third card',
        href: 'http://www.salesforce.com',
        src:
            'https://latest-212.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg'
    }
];

function assertNthItemActive(n) {
    return (element) => {
        const panels = querySelectorAll(element, '.slds-carousel__panel');
        const indicators = querySelectorAll(
            element,
            '.slds-carousel__indicator'
        );

        expect(panels).toHaveLength(indicators.length);

        panels.forEach((panel, index) => {
            const tabpanel = shadowQuerySelector(panel, '[role=tabpanel]');
            expect(tabpanel.getAttribute('aria-hidden')).toBe(
                index === n ? 'false' : 'true'
            );
        });
    };
}

const assertFirstItemActive = assertNthItemActive(0);
const assertSecondItemActive = assertNthItemActive(1);
const assertThirdItemActive = assertNthItemActive(2);

describe('c-carousel', () => {
    it('carousel with 3 images', () => {
        const element = createCarousel({ items: DEFAULT_ITEMS });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    describe('auto-scroll', () => {
        jest.useFakeTimers();

        it('first item active initially', () => {
            const element = createCarousel({ items: DEFAULT_ITEMS });

            return Promise.resolve().then(() => {
                assertFirstItemActive(element);
            });
        });

        it('second item active after first timer', () => {
            const element = createCarousel({ items: DEFAULT_ITEMS });

            return Promise.resolve().then(() => {
                jest.runOnlyPendingTimers();

                return Promise.resolve().then(() => {
                    assertSecondItemActive(element);
                });
            });
        });

        it('third item active after second timer', () => {
            const element = createCarousel({ items: DEFAULT_ITEMS });

            return Promise.resolve().then(() => {
                jest.runOnlyPendingTimers();
                return Promise.resolve().then(() => {
                    jest.runOnlyPendingTimers();
                    return Promise.resolve().then(() => {
                        assertThirdItemActive(element);
                    });
                });
            });
        });
    });

    describe('auto-scroll with auto-refresh', () => {
        jest.useFakeTimers();

        it('first item active after third timer', () => {
            const element = createCarousel({ items: DEFAULT_ITEMS });

            return Promise.resolve().then(() => {
                jest.runOnlyPendingTimers();
                return Promise.resolve().then(() => {
                    jest.runOnlyPendingTimers();
                    return Promise.resolve().then(() => {
                        jest.runOnlyPendingTimers();
                        return Promise.resolve().then(() => {
                            assertFirstItemActive(element);
                        });
                    });
                });
            });
        });
    });

    describe('auto-scroll without auto-refresh', () => {
        jest.useFakeTimers();

        it('third item active after third timer', () => {
            const element = createCarousel({
                items: DEFAULT_ITEMS,
                disableAutoRefresh: true
            });

            return Promise.resolve().then(() => {
                jest.runOnlyPendingTimers();
                return Promise.resolve().then(() => {
                    jest.runOnlyPendingTimers();
                    return Promise.resolve().then(() => {
                        jest.runOnlyPendingTimers();
                        return Promise.resolve().then(() => {
                            assertThirdItemActive(element);
                        });
                    });
                });
            });
        });
    });
    it('binds the right aria-control', () => {
        const element = createCarousel({ items: DEFAULT_ITEMS });

        return Promise.resolve().then(() => {
            const carousel = element.shadowRoot.querySelector('c-carousel');

            const paginationItem = carousel.shadowRoot.querySelector(
                '.slds-carousel__indicator a'
            );

            const ariaControls = paginationItem.getAttribute('aria-controls');
            const firstImage = carousel
                .querySelector('c-carousel-image')
                .shadowRoot.querySelector('div');
            const firstImageId = firstImage.id;

            expect(ariaControls).toEqual(firstImageId);
        });
    });

    it('binds the right aria-describedby', () => {
        const element = createCarousel({ items: DEFAULT_ITEMS });

        return Promise.resolve().then(() => {
            const carousel = element.shadowRoot.querySelector('c-carousel');

            const paginationItem = carousel.shadowRoot.querySelector(
                '.slds-carousel__indicator a'
            );

            const firstPaginationElementId = paginationItem.id;
            const firstImage = carousel
                .querySelector('c-carousel-image')
                .shadowRoot.querySelector('div');
            const firstImageAriaLablledBy = firstImage.getAttribute(
                'aria-labelledby'
            );

            expect(firstPaginationElementId).toEqual(firstImageAriaLablledBy);
        });
    });
});
