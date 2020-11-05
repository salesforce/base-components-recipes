/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/tabBar';
import { keyCodes } from 'c/utilsPrivate';
import {
    shadowQuerySelector,
    shadowQuerySelectorAll
} from 'lightning/testUtils';

function createComponent() {
    const element = createElement('c-tab-bar', { is: Element });
    document.body.appendChild(element);
    return element;
}
describe('c-tab-bar', () => {
    it('matches the snapshot', () => {
        const element = createComponent();
        element.tabHeaders = [
            { value: 'uniqueIdTab1', label: 'Tab One', domId: 'domIdTab1' },
            {
                value: 'uniqueIdTab2',
                title: 'Tab Two Title',
                label: 'Tab Two',
                domId: 'domIdTab2',
                iconName: 'utility:arrow',
                iconAlternativeText: 'Arrow',
                endIconName: 'utility:check',
                endIconAlternativeText: 'Selected',
                showErrorIndicator: true
            }
        ];

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('adds aria-orientation when variant is vertical', () => {
        const element = createComponent();
        element.variant = 'vertical';
        element.tabHeaders = [{ value: 'tab1', label: 'Tab One' }];
        return Promise.resolve().then(() => {
            const orientation = shadowQuerySelector(
                element,
                '[role="tablist"]'
            ).getAttribute('aria-orientation');
            expect(orientation).toBe('vertical');
        });
    });

    it('fires a select event when selecting a tab', () => {
        const element = createComponent();
        element.tabHeaders = [
            { value: 'tab1', label: 'Tab One' },
            { value: 'tab2', label: 'Tab Two' }
        ];

        let selectedTabId;
        element.addEventListener('select', (event) => {
            selectedTabId = event.detail.value;
        });
        return Promise.resolve()
            .then(() => {
                const tabs = shadowQuerySelectorAll(element, '[role="tab"]');
                tabs[1].click();
            })
            .then(() => {
                expect(selectedTabId).toBe('tab2');
            });
    });

    it('updates tabIndex when selecting a tab', () => {
        const element = createComponent();
        element.tabHeaders = [
            { value: 'tab1', label: 'Tab One' },
            { value: 'tab2', label: 'Tab Two' }
        ];

        return Promise.resolve()
            .then(() => {
                const tabs = shadowQuerySelectorAll(element, '[role="tab"]');
                expect(tabs[0].tabIndex).toBe(0);
                expect(tabs[1].tabIndex).toBe(-1);
                tabs[1].click();
            })
            .then(() => {
                const tabs = shadowQuerySelectorAll(element, '[role="tab"]');
                expect(tabs[0].tabIndex).toBe(-1);
                expect(tabs[1].tabIndex).toBe(0);
            });
    });

    it('updates ariaSelected when selecting a tab', () => {
        const element = createComponent();
        element.tabHeaders = [
            { value: 'tab1', label: 'Tab One' },
            { value: 'tab2', label: 'Tab Two' }
        ];

        return Promise.resolve()
            .then(() => {
                const tabs = shadowQuerySelectorAll(element, '[role="tab"]');
                expect(tabs[0].getAttribute('aria-selected')).toBe('true');
                expect(tabs[1].getAttribute('aria-selected')).toBe('false');
                tabs[1].click();
            })
            .then(() => {
                const tabs = shadowQuerySelectorAll(element, '[role="tab"]');
                expect(tabs[0].getAttribute('aria-selected')).toBe('false');
                expect(tabs[1].getAttribute('aria-selected')).toBe('true');
            });
    });

    it('selects the next tab when pressing the right arrow key', () => {
        const element = createComponent();
        element.tabHeaders = [
            { value: 'tab1', label: 'Tab One' },
            { value: 'tab2', label: 'Tab Two' }
        ];

        return Promise.resolve()
            .then(() => {
                const tabs = shadowQuerySelectorAll(element, '[role="tab"]');
                tabs[0].dispatchEvent(
                    new KeyboardEvent('keydown', {
                        bubbles: true,
                        keyCode: keyCodes.right
                    })
                );
            })
            .then(() => {
                const tabs = shadowQuerySelectorAll(element, '[role="tab"]');
                expect(tabs[1].getAttribute('aria-selected')).toBe('true');
            });
    });

    it('selects the previous tab when pressing the left arrow key', () => {
        const element = createComponent();
        element.tabHeaders = [
            { value: 'tab1', label: 'Tab One' },
            { value: 'tab2', label: 'Tab Two' },
            { value: 'tab3', label: 'Tab Three' },
            { value: 'tab4', label: 'Tab Four' }
        ];

        element.selectTabByValue('tab4');
        return Promise.resolve()
            .then(() => {
                const tabs = shadowQuerySelectorAll(element, '[role="tab"]');
                tabs[3].dispatchEvent(
                    new KeyboardEvent('keydown', {
                        bubbles: true,
                        keyCode: keyCodes.left
                    })
                );
            })
            .then(() => {
                const tabs = shadowQuerySelectorAll(element, '[role="tab"]');
                expect(tabs[2].getAttribute('aria-selected')).toBe('true');
            });
    });

    it('selects the last tab when pressing the left arrow key on the first active tab', () => {
        const element = createComponent();
        element.tabHeaders = [
            { value: 'tab1', label: 'Tab One' },
            { value: 'tab2', label: 'Tab Two' },
            { value: 'tab3', label: 'Tab Three' },
            { value: 'tab4', label: 'Tab Four' }
        ];

        return Promise.resolve()
            .then(() => {
                const tabs = shadowQuerySelectorAll(element, '[role="tab"]');
                tabs[0].dispatchEvent(
                    new KeyboardEvent('keydown', {
                        bubbles: true,
                        keyCode: keyCodes.left
                    })
                );
            })
            .then(() => {
                const tabs = shadowQuerySelectorAll(element, '[role="tab"]');
                expect(tabs[3].getAttribute('aria-selected')).toBe('true');
            });
    });

    it('selects the last tab when pressing the right arrow key on the last active tab', () => {
        const element = createComponent();
        element.tabHeaders = [
            { value: 'tab1', label: 'Tab One' },
            { value: 'tab2', label: 'Tab Two' },
            { value: 'tab3', label: 'Tab Three' },
            { value: 'tab4', label: 'Tab Four' }
        ];

        element.selectTabByValue('tab4');
        return Promise.resolve()
            .then(() => {
                const tabs = shadowQuerySelectorAll(element, '[role="tab"]');
                tabs[3].dispatchEvent(
                    new KeyboardEvent('keydown', {
                        bubbles: true,
                        keyCode: keyCodes.right
                    })
                );
            })
            .then(() => {
                const tabs = shadowQuerySelectorAll(element, '[role="tab"]');
                expect(tabs[0].getAttribute('aria-selected')).toBe('true');
            });
    });
});
