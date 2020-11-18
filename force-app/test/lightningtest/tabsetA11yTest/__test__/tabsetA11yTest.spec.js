/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import TabsetA11yTest from './../tabsetA11yTest';
import { createElement } from 'lwc';

function createTabset(props = {}) {
    const tabset = createElement('c-tabset-a11y-test', {
        is: TabsetA11yTest
    });

    Object.assign(tabset, props);

    document.body.appendChild(tabset);
    return tabset;
}

function generateTabs(numTabs) {
    const result = [];

    for (let i = 0; i < numTabs; i++) {
        result.push({
            id: i,
            label: `Item ${i}`,
            content: `Tab ${i} content`
        });
    }
    return result;
}

describe('c-tabset a11y', () => {
    it('should match tab labelledby with anchor link id', () => {
        const elem = createTabset({
            tabs: generateTabs(3)
        });

        return Promise.resolve().then(() => {
            const tabElements = elem.getTabs();
            const tabBar = elem.getTabBar();
            const anchorLinks = Array.from(
                tabBar.shadowRoot.querySelectorAll('a[role="tab"]')
            );

            expect(tabElements).toHaveLength(anchorLinks.length);

            tabElements.forEach((tabElement) => {
                const labelledByValue = tabElement.getAttribute(
                    'aria-labelledby'
                );

                const anchorsWithIdMatchingTabLabelledBy = anchorLinks.filter(
                    (anchor) => anchor.id === labelledByValue
                );

                expect(anchorsWithIdMatchingTabLabelledBy).toHaveLength(1);
            });
        });
    });

    it('should match tab header dom id with anchor aria-control', () => {
        const elem = createTabset({
            tabs: generateTabs(3)
        });

        return Promise.resolve().then(() => {
            const tabElements = elem.getTabs();
            const tabBar = elem.getTabBar();
            const anchorLinks = Array.from(
                tabBar.shadowRoot.querySelectorAll('a[role="tab"]')
            );

            expect(tabElements).toHaveLength(anchorLinks.length);

            tabElements.forEach((tabElement) => {
                const tabId = tabElement.id;
                const anchorsWithAriaControlMatchingTabId = anchorLinks.filter(
                    (anchor) => anchor.getAttribute('aria-controls') === tabId
                );

                expect(anchorsWithAriaControlMatchingTabId).toHaveLength(1);
            });
        });
    });
});
