/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import { verifyClassSet, querySelector } from 'lightning/testUtils';
import Element from 'c/icon';

const createIcon = () => {
    const element = createElement('c-icon', { is: Element });
    document.body.appendChild(element);
    return element;
};

function getHref(iconElement) {
    const icon = querySelector(iconElement, 'c-primitive-icon');
    const use = querySelector(icon, 'use');
    return use.getAttribute('xlink:href');
}

describe('c-icon', () => {
    it('default', () => {
        const element = createIcon();
        expect(element).toMatchSnapshot();
    });

    it('invalid iconName, size, and variant', () => {
        const element = createIcon();
        element.iconName = 'foo';
        element.size = 'foo';
        element.variant = 'foo';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('non-utility variant value error (variant only works for utility)', () => {
        const element = createIcon();
        element.iconName = 'standard:account';
        element.variant = 'error';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('variant value bare (same effect as inverse but supported until fully deprecated)', () => {
        const element = createIcon();
        element.iconName = 'utility:salesforce1';
        element.variant = 'bare';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('variant value error', () => {
        const element = createIcon();
        element.iconName = 'utility:salesforce1';
        element.variant = 'error';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('variant value inverse', () => {
        const element = createIcon();
        element.iconName = 'utility:salesforce1';
        element.variant = 'inverse';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('variant value warning', () => {
        const element = createIcon();
        element.iconName = 'utility:salesforce1';
        element.variant = 'warning';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('variant change from inverse to error', () => {
        const element = createIcon();
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

    it('size value xx-small', () => {
        const element = createIcon();
        element.iconName = 'utility:salesforce1';
        element.size = 'xx-small';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('size value x-small', () => {
        const element = createIcon();
        element.iconName = 'utility:salesforce1';
        element.size = 'x-small';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('size value small', () => {
        const element = createIcon();
        element.iconName = 'utility:salesforce1';
        element.size = 'small';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('size value medium', () => {
        const element = createIcon();
        element.iconName = 'utility:salesforce1';
        element.size = 'medium';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('size value large', () => {
        const element = createIcon();
        element.iconName = 'utility:salesforce1';
        element.size = 'large';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('size change from small to large', () => {
        const element = createIcon();
        element.iconName = 'utility:salesforce1';
        element.size = 'small';
        return Promise.resolve()
            .then(() => {
                element.size = 'large';
            })
            .then(() => {
                expect(element).toMatchSnapshot();
            });
    });

    it('iconName value utility:salesforce1 (has number)', () => {
        const element = createIcon();
        element.iconName = 'utility:salesforce1';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('iconName value utility:text_background_color (has underscores)', () => {
        const element = createIcon();
        element.iconName = 'utility:text_background_color';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('iconName value change from utility:salesforce1 to standard:account', () => {
        const element = createIcon();
        element.iconName = 'utility:salesforce1';
        return Promise.resolve()
            .then(() => {
                element.iconName = 'standard:account';
            })
            .then(() => {
                expect(element).toMatchSnapshot();
            });
    });

    it('sets the icon URL to a custom uri when a iconRef is present', () => {
        const element = createIcon();

        element.src = '/my/url/my.svg#custom-icon';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('tests that icoName persists its value after src is set to null', () => {
        const element = createIcon();

        element.src = '/my/url/my.svg#custom-icon';
        element.iconName = 'utility:up';
        document.body.appendChild(element);

        return Promise.resolve()
            .then(() => {
                expect(getHref(element)).toBe('/my/url/my.svg#custom-icon');
                element.src = null;
            })
            .then(() => {
                expect(getHref(element)).toBe(
                    '/assets/icons/utility-sprite/svg/symbols.svg#up'
                );
            });
    });

    it('tests that src always overrides iconName', () => {
        const element = createIcon();

        element.iconName = 'utility:up';
        document.body.appendChild(element);

        return Promise.resolve()
            .then(() => {
                expect(getHref(element)).toBe(
                    '/assets/icons/utility-sprite/svg/symbols.svg#up'
                );

                element.src = '/my/url/my.svg#custom-icon';
            })
            .then(() => {
                expect(getHref(element)).toBe('/my/url/my.svg#custom-icon');
            });
    });

    it('tests that src still overrides iconName even if we set iconName to a new value.', () => {
        const element = createIcon();

        element.iconName = 'utility:up';
        document.body.appendChild(element);

        return Promise.resolve()
            .then(() => {
                expect(getHref(element)).toBe(
                    '/assets/icons/utility-sprite/svg/symbols.svg#up'
                );

                element.src = '/my/url/my.svg#custom-icon';
                element.iconName = 'utility:down';
            })
            .then(() => {
                expect(getHref(element)).toBe('/my/url/my.svg#custom-icon');
            });
    });

    it('tests that we maintained updates to iconName during the time the src overrode it.', () => {
        const element = createIcon();

        element.iconName = 'utility:up';
        element.src = '/my/url/my.svg#custom-icon';
        document.body.appendChild(element);

        return Promise.resolve()
            .then(() => {
                expect(getHref(element)).toBe('/my/url/my.svg#custom-icon');
                element.src = null;
                element.iconName = 'utility:down';
            })
            .then(() => {
                expect(getHref(element)).toBe(
                    '/assets/icons/utility-sprite/svg/symbols.svg#down'
                );
            });
    });

    it('src attribute overrules iconName attribute', () => {
        const element = createIcon();

        element.iconName = 'utility:up';
        element.src = '/my/url/my.svg#custom-icon';
        document.body.appendChild(element);

        return Promise.resolve().then(() => {
            expect(getHref(element)).toBe('/my/url/my.svg#custom-icon');
        });
    });

    it('if src attribute is set, then it takes precedence over iconName ', () => {
        const element = createIcon();

        element.src = '/my/url/my.svg#custom-icon';
        element.iconName = 'utility:down';
        document.body.appendChild(element);

        return Promise.resolve().then(() => {
            expect(getHref(element)).toBe('/my/url/my.svg#custom-icon');
        });
    });

    it('sets src to a custom uri then sets it back to an SLDS icon', () => {
        const element = createIcon();

        element.src = '/my/url/my.svg#custom-icon';
        document.body.appendChild(element);

        return Promise.resolve()
            .then(() => {
                expect(getHref(element)).toBe('/my/url/my.svg#custom-icon');
                element.src = null;
                element.iconName = 'utility:down';
            })
            .then(() => {
                expect(getHref(element)).toBe(
                    '/assets/icons/utility-sprite/svg/symbols.svg#down'
                );
            });
    });
    it('sets the container classes correctly on iconName change', () => {
        const element = createIcon();
        element.iconName = 'standard:account';

        document.body.appendChild(element);

        return Promise.resolve()
            .then(() => {
                verifyClassSet(element, {
                    'slds-icon_container': true,
                    'slds-icon-standard-account': true,
                    'slds-icon_container_circle': false
                });

                element.iconName = 'standard:account';
            })
            .then(() => {
                verifyClassSet(element, {
                    'slds-icon_container': true,
                    'slds-icon-standard-account': true,
                    'slds-icon_container_circle': false
                });

                element.iconName = 'action:question_post_action';
            })
            .then(() => {
                verifyClassSet(element, {
                    'slds-icon_container': true,
                    'slds-icon-standard-account': false,
                    'slds-icon_container_circle': true,
                    'slds-icon-action-question-post-action': true
                });
            });
    });
});
