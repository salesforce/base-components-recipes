/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import { shadowQuerySelector } from 'lightning/testUtils';
import Element from 'c/menuItem';

const createMenuItem = () => {
    const element = createElement('c-menu-item', { is: Element });
    document.body.appendChild(element);
    return element;
};

describe('c-menu-item-default', () => {
    it('should default', () => {
        const menuItem = createMenuItem();

        return Promise.resolve().then(() => {
            expect(menuItem).toMatchSnapshot();
        });
    });
});

describe('c-menu-item-label', () => {
    it('should show label', () => {
        const menuItem = createMenuItem();
        menuItem.label = 'test-label';

        return Promise.resolve().then(() => {
            expect(menuItem).toMatchSnapshot();
        });
    });
});

describe('c-menu-item-iconName', () => {
    it('should show label and iconName', () => {
        const menuItem = createMenuItem();
        menuItem.label = 'test-label';
        menuItem.iconName = 'utility:table';

        return Promise.resolve().then(() => {
            expect(menuItem).toMatchSnapshot();
        });
    });
});

describe('c-menu-item-checked', () => {
    it('should show has role meuitemcheckbox', () => {
        const menuItem = createMenuItem();
        menuItem.label = 'test-label';
        menuItem.iconName = 'utility:table';
        menuItem.checked = false;

        return Promise.resolve().then(() => {
            expect(menuItem).toMatchSnapshot();
        });
    });

    it('should show has role meuitemcheckbox with aria-checked-true and checked icon', () => {
        const menuItem = createMenuItem();
        menuItem.label = 'test-label';
        menuItem.iconName = 'utility:table';
        menuItem.checked = true;

        return Promise.resolve().then(() => {
            expect(menuItem).toMatchSnapshot();
        });
    });
    it('should have role menuitem without aria-checked and without checked icon', () => {
        const menuItem = createMenuItem();
        menuItem.label = 'test-label';
        menuItem.iconName = 'utility:table';
        menuItem.checked = undefined;

        return Promise.resolve().then(() => {
            expect(menuItem).toMatchSnapshot();
        });
    });

    it('should react to changes in checked attribute', () => {
        const menuItem = createMenuItem();
        menuItem.label = 'test-label';
        menuItem.iconName = 'utility:table';
        menuItem.checked = true;

        return Promise.resolve()
            .then(() => {
                expect(
                    shadowQuerySelector(menuItem, 'a').getAttribute(
                        'aria-checked'
                    )
                ).toBe('true');
                expect(
                    shadowQuerySelector(
                        menuItem,
                        'span.slds-truncate > c-primitive-icon'
                    )
                ).not.toBeNull();
                menuItem.checked = undefined;
            })
            .then(() => {
                expect(
                    shadowQuerySelector(menuItem, 'a').getAttribute(
                        'aria-checked'
                    )
                ).toBe(null);
                expect(
                    shadowQuerySelector(
                        menuItem,
                        'span.slds-truncate > c-primitive-icon'
                    )
                ).toBeNull();
                menuItem.checked = false;
            })
            .then(() => {
                expect(
                    shadowQuerySelector(menuItem, 'a').getAttribute(
                        'aria-checked'
                    )
                ).toBe('false');
                expect(
                    shadowQuerySelector(
                        menuItem,
                        'span.slds-truncate > c-primitive-icon'
                    )
                ).not.toBeNull();
            });
    });
});

describe('c-menu-item-disabled', () => {
    it('should be disabled', () => {
        const menuItem = createMenuItem();
        menuItem.label = 'test-label';
        menuItem.checked = false;
        menuItem.disabled = true;

        return Promise.resolve().then(() => {
            expect(menuItem).toMatchSnapshot();
        });
    });

    it('should be disabled when its truthy', () => {
        const menuItem = createMenuItem();
        menuItem.label = 'test-label';
        menuItem.disabled = 'false';

        return Promise.resolve().then(() => {
            const anchor = shadowQuerySelector(
                menuItem,
                'a[aria-disabled=true]'
            );

            expect(anchor).toBeTruthy();
        });
    });

    it('should be enabled when not present', () => {
        const menuItem = createMenuItem();
        menuItem.label = 'test-label';

        return Promise.resolve().then(() => {
            const anchor = shadowQuerySelector(
                menuItem,
                'a[aria-disabled=true]'
            );

            expect(anchor).toBeFalsy();
        });
    });
});

describe('c-menu-item-onprivateselect', () => {
    const runCallbackTest = (disabled, calledTimes) => {
        return () => {
            const menuItem = createMenuItem();
            menuItem.label = 'test-label';
            menuItem.disabled = disabled;

            const callback = jest.fn();
            menuItem.addEventListener('privateselect', callback);

            return Promise.resolve()
                .then(() => {
                    shadowQuerySelector(menuItem, 'a').click();
                })
                .then(() => {
                    expect(callback.mock.calls).toHaveLength(calledTimes);
                });
        };
    };

    it(
        "should trigger private select event when it's enabled",
        runCallbackTest(false, 1)
    );

    it(
        "should not trigger private select event when it's disabled",
        runCallbackTest(true, 0)
    );
});

describe('href attribute', () => {
    it('if not set should have a value of `javascript:void(0)`', () => {
        const menuItem = createMenuItem();
        menuItem.label = 'test-label';

        expect(shadowQuerySelector(menuItem, 'a').getAttribute('href')).toBe(
            // eslint-disable-next-line no-script-url
            'javascript:void(0)'
        );
    });

    it('if set should have a value matching the provided content', () => {
        const url = 'https://salesforce.com';
        const menuItem = createMenuItem();
        menuItem.label = 'test-label';
        menuItem.href = url;

        return Promise.resolve().then(() => {
            expect(
                shadowQuerySelector(menuItem, 'a').getAttribute('href')
            ).toBe(url);
        });
    });
});

describe('prefix-icon-name attribute', () => {
    it('if not set, or omitted, then no prefix icon should be visible', () => {
        const menuItem = createMenuItem();
        menuItem.label = 'test-label';

        return Promise.resolve().then(() => {
            const primitiveIconEl = shadowQuerySelector(
                menuItem,
                'a > .slds-truncate c-primitive-icon'
            );

            if (primitiveIconEl) {
                const iconEl = shadowQuerySelector(
                    primitiveIconEl,
                    '.slds-icon:not([data-key=check])'
                );

                expect(iconEl).toBeFalsy();
            } else {
                expect(primitiveIconEl).toBeFalsy();
            }
        });
    });

    it('if set then a prefix icon should be visible', () => {
        const menuItem = createMenuItem();
        menuItem.label = 'test-label';
        menuItem.prefixIconName = 'utility:chat';

        return Promise.resolve().then(() => {
            const prefixIcon = menuItem.shadowRoot.querySelector(
                'a > .slds-truncate c-primitive-icon'
            );

            expect(prefixIcon).not.toBeNull();
        });
    });
});

describe('is-draft attribute', () => {
    it('if set to false, or omitted, draft marker on button should be hidden', () => {
        const menuItem = createMenuItem();

        const draftMarkerEl = shadowQuerySelector(
            menuItem,
            '.slds-indicator_unsaved'
        );

        expect(draftMarkerEl).toBeNull();
    });

    it('if set to true draft marker on button should be visible', () => {
        const menuItem = createMenuItem();
        menuItem.isDraft = true;

        return Promise.resolve().then(() => {
            const draftMarkerEl = shadowQuerySelector(
                menuItem,
                '.slds-indicator_unsaved'
            );

            expect(menuItem.shadowRoot.contains(draftMarkerEl)).toBeTruthy();
        });
    });

    it('if set to truthy, non-false, value draft marker on button should be visible', () => {
        const menuItem = createMenuItem();
        menuItem.isDraft = 'truthy';

        return Promise.resolve().then(() => {
            const draftMarkerEl = shadowQuerySelector(
                menuItem,
                '.slds-indicator_unsaved'
            );

            expect(menuItem.shadowRoot.contains(draftMarkerEl)).toBeTruthy();
        });
    });

    describe('draft-alternative-text attribute', () => {
        it('if value is NOT set the `title` attribute of the draft marker should not be set', () => {
            const menuItem = createMenuItem();
            menuItem.isDraft = true;

            return Promise.resolve().then(() => {
                const draftMarkerEl = shadowQuerySelector(
                    menuItem,
                    '.slds-indicator_unsaved'
                );

                expect(draftMarkerEl.getAttribute('title')).toBeFalsy();
            });
        });

        it('if value is set the `title` attribute of the draft marker should be set', () => {
            const altText = 'Tab not saved';
            const menuItem = createMenuItem();
            menuItem.isDraft = true;
            menuItem.draftAlternativeText = altText;

            return Promise.resolve().then(() => {
                const draftMarkerEl = shadowQuerySelector(
                    menuItem,
                    '.slds-indicator_unsaved'
                );

                expect(draftMarkerEl.getAttribute('title')).toBe(altText);
            });
        });
    });
});

describe('c-menu-item download', () => {
    it('should not be set', () => {
        const menuItem = createMenuItem();
        menuItem.href = 'file.txt';

        return Promise.resolve().then(() => {
            const anchor = shadowQuerySelector(menuItem, 'a[download]');
            expect(anchor).toBeFalsy();
        });
    });

    it('should not set with boolean', () => {
        const menuItem = createMenuItem();
        menuItem.href = 'file.txt';
        menuItem.download = true;

        return Promise.resolve().then(() => {
            const anchor = shadowQuerySelector(menuItem, 'a[download]');
            expect(anchor).toBeTruthy();
        });
    });

    it('should not set with file name', () => {
        const menuItem = createMenuItem();
        menuItem.href = 'file.txt';
        menuItem.download = 'file-name.txt';

        return Promise.resolve().then(() => {
            const anchor = shadowQuerySelector(
                menuItem,
                'a[download="file-name.txt"]'
            );

            expect(anchor).toBeTruthy();
        });
    });
});

describe('c-menu-item target', () => {
    it('should not set a "target" by default when "target" attribute was not passed', () => {
        const menuItem = createMenuItem();

        return Promise.resolve().then(() => {
            const anchor = shadowQuerySelector(menuItem, 'a[target]');
            expect(anchor).toBeFalsy();
        });
    });

    it('should set "target" to "_blank"', () => {
        const menuItem = createMenuItem();
        menuItem.target = '_blank';

        return Promise.resolve().then(() => {
            const anchor = shadowQuerySelector(menuItem, 'a[target="_blank"]');
            expect(anchor).toBeTruthy();
        });
    });

    it('should set "target" to "_self"', () => {
        const menuItem = createMenuItem();
        menuItem.target = '_self';

        return Promise.resolve().then(() => {
            const anchor = shadowQuerySelector(menuItem, 'a[target="_self"]');
            expect(anchor).toBeTruthy();
        });
    });

    it('should not set invalid "target" value to "_foo"', () => {
        const menuItem = createMenuItem();
        menuItem.target = '_foo';

        return Promise.resolve().then(() => {
            const anchor = shadowQuerySelector(menuItem, 'a[target="_foo"]');
            expect(anchor).toBeFalsy();
        });
    });
});

describe('c-menu-item click', () => {
    it('should trigger privateselect event handler on menuItem click', () => {
        const menuItem = createMenuItem();

        const callback = jest.fn();
        menuItem.addEventListener('privateselect', callback);
        menuItem.click();

        return Promise.resolve().then(() => {
            expect(callback).toHaveBeenCalledTimes(1);
        });
    });
});
