/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/avatar';
import { shadowQuerySelector } from 'lightning/testUtils';

const createAvatar = (attributes) => {
    const element = createElement('c-avatar', { is: Element });

    Object.assign(element, attributes);
    document.body.appendChild(element);
    return element;
};

describe('c-avatar', () => {
    it('default', () => {
        const element = createAvatar({
            alternativeText: 'required alternative text',
            fallbackIconName: 'standard:account'
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    describe('testFallbackIconName', () => {
        it('lightning:icon should render', () => {
            const element = createAvatar({
                alternativeText: 'required alternative text',
                fallbackIconName: 'standard:account',
                initials: '',
                src: ''
            });

            return Promise.resolve().then(() => {
                const icon = shadowQuerySelector(element, 'c-icon');
                expect(icon).toBeTruthy();
            });
        });
    });

    describe('initials', () => {
        it('should not render when invalid', () => {
            const element = createAvatar({
                alternativeText: 'required alternative text',
                fallbackIconName: 'standard:account',
                initials: '',
                src: ''
            });

            return Promise.resolve().then(() => {
                const abbr = shadowQuerySelector(element, 'abbr');
                expect(abbr).toBeFalsy();
            });
        });

        it('should render when valid', () => {
            const element = createAvatar({
                alternativeText: 'required alternative text',
                fallbackIconName: 'standard:account',
                initials: 'EK',
                src: ''
            });

            return Promise.resolve().then(() => {
                const abbr = shadowQuerySelector(element, 'abbr');
                expect(abbr).toBeTruthy();
            });
        });

        it('should render class slds-icon-custom-custom79 when fallbackIconName is custom:custom79', () => {
            const element = createAvatar({
                alternativeText: 'required alternative text',
                fallbackIconName: 'custom:custom79',
                initials: 'EK',
                src: ''
            });

            return Promise.resolve().then(() => {
                const abbr = shadowQuerySelector(element, 'abbr');
                expect(abbr.className).toContain('slds-icon-custom-custom79');
            });
        });
    });

    describe('testSrcAttribute', () => {
        it('image src should be correct when changed', () => {
            const element = createAvatar({
                alternativeText: 'account owner',
                fallbackIconName: 'standard:account',
                initials: 'EK',
                src: '/assets/images/avatar2.jpg'
            });

            return Promise.resolve()
                .then(() => {
                    expect(element).toMatchSnapshot();
                    element.src = '/assets/images/avatar1.jpg';
                    return Promise.resolve();
                })
                .then(() => {
                    expect(element).toMatchSnapshot();
                });
        });

        it('An img element should not render when v.src is undefined', () => {
            const element = createAvatar({
                fallbackIconName: 'standard:account',
                alternativeText: 'account owner',
                initials: 'EK'
            });

            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });
    });

    describe('testAltTitleAttributes', () => {
        it('Avatar component should set title of image correctly', () => {
            const element = createAvatar({
                alternativeText: 'account owner',
                fallbackIconName: 'standard:account',
                src: '/assets/images/avatar2.jpg'
            });

            return Promise.resolve()
                .then(() => {
                    expect(element).toMatchSnapshot();
                    element.alternativeText = 'Salesforce Contact';

                    return Promise.resolve();
                })
                .then(() => {
                    expect(element).toMatchSnapshot();
                });
        });
    });

    describe('Variant', () => {
        const createAvatarWithVariant = (variant) => {
            const element = createAvatar({
                alternativeText: 'account owner',
                fallbackIconName: 'standard:account',
                src: '/assets/images/avatar2.jpg',
                variant
            });

            return element;
        };

        it('should add default classes on invalid variant', () => {
            const element = createAvatarWithVariant('invalid');

            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });

        it('should add correct classes on circle variant', () => {
            const element = createAvatarWithVariant('circle');

            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });

        it('should add correct classes on square variant', () => {
            const element = createAvatarWithVariant('square');

            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });
    });

    describe('Size', () => {
        const createAvatarWithSize = (size) => {
            const element = createAvatar({
                alternativeText: 'account owner',
                fallbackIconName: 'standard:account',
                src: '/assets/images/avatar2.jpg',
                size
            });

            return element;
        };

        it('should add default classes on invalid size', () => {
            const element = createAvatarWithSize('invalid');

            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });

        it('should add correct classes on x-small size', () => {
            const element = createAvatarWithSize('x-small');

            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });

        it('should add correct classes on small size', () => {
            const element = createAvatarWithSize('small');

            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });

        it('should add correct classes on medium size', () => {
            const element = createAvatarWithSize('medium');

            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });

        it('should add correct classes on large size', () => {
            const element = createAvatarWithSize('large');

            return Promise.resolve().then(() => {
                expect(element).toMatchSnapshot();
            });
        });
    });

    it('testTypePriority', () => {
        const element = createAvatar({
            alternativeText: 'required alternative text',
            fallbackIconName: 'standard:account',
            src: '/assets/images/avatar2.jpg'
        });

        return Promise.resolve()
            .then(() => {
                expect(element).toMatchSnapshot();

                element.src = '';
                element.initials = 'EK';

                return Promise.resolve();
            })
            .then(() => {
                expect(element).toMatchSnapshot();

                element.src = '';
                element.initials = '';

                return Promise.resolve();
            })
            .then(() => {
                expect(element).toMatchSnapshot();

                element.src = '/assets/images/avatar1.jpg';
                element.initials = 'Xx';

                return Promise.resolve();
            })
            .then(() => {
                expect(element).toMatchSnapshot();
            });
    });

    it('testSrcAttribute using valid and invalid src', () => {
        const element = createAvatar({
            alternativeText: 'account owner',
            fallbackIconName: 'standard:account',
            initials: 'EK',
            src: '/assets/images/avatar2.jpg'
        });

        return Promise.resolve()
            .then(() => {
                const img = shadowQuerySelector(element, 'img');
                expect(img).not.toBeNull();
                expect(img.src).toBe(
                    'http://localhost/assets/images/avatar2.jpg'
                );

                element.src = '';
            })
            .then(() => {
                expect(shadowQuerySelector(element, 'img')).toBeNull();
                element.src = 'http://localhost/assets/images/avatar1.jpg';
            })
            .then(() => {
                const img = shadowQuerySelector(element, 'img');
                expect(img).not.toBeNull();
                expect(img.src).toBe(
                    'http://localhost/assets/images/avatar1.jpg'
                );
            });
    });
});
