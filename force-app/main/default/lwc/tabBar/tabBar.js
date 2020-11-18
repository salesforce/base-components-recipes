/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import labelOverflowMore from '@salesforce/label/c.lightning_LightningTabs_overflowMore';
import labelOverflowMoreAlternativeText from '@salesforce/label/c.lightning_LightningTabs_overflowMoreAlternativeText';
import labelOverflowMoreTitle from '@salesforce/label/c.lightning_LightningTabs_overflowMoreTitle';
import labelErrorStateAlternativeText from '@salesforce/label/c.lightning_LightningTabs_errorStateAlternativeText';

import { api, LightningElement, track } from 'lwc';
import { classSet } from 'c/utils';
import { calculateOverflow } from 'c/overflowLibrary';
import { LightningResizeObserver } from 'c/resizeObserver';
import { handleKeyDownOnTabList } from './keyboard';

const i18n = {
    more: labelOverflowMore,
    moreAlternativeText: labelOverflowMoreAlternativeText,
    moreTitle: labelOverflowMoreTitle,
    errorStateAlternativeText: labelErrorStateAlternativeText
};

const RECOMPUTE_OVERFLOW_THRESHOLD_PX = 30;

export default class cTabBar extends LightningElement {
    @api disableOverflow = false;

    @track _allTabs = [];
    @track _hasOverflow = false;

    @track _variant;

    @track _queueSynchronizeA11 = false;

    connectedCallback() {
        this._connected = true;
        if (this.overflowSupported) {
            this._queueOverflow();
        }
    }

    renderedCallback() {
        if (this.overflowSupported && !this._resizeObserver) {
            this._resizeObserver = this._setupResizeObserver();
        }

        if (this._queueSynchronizeA11) {
            this._synchronizeA11y();
            this._queueSynchronizeA11 = false;
        }
    }

    disconnectedCallback() {
        this._connected = false;
        if (this._resizeObserver) {
            this._resizeObserver.disconnect();
        }
    }

    @api get variant() {
        return this._variant;
    }

    set variant(value) {
        if (this._connected && value === 'vertical') {
            if (this._resizeObserver) {
                this._resizeObserver.disconnect();

                this._allTabs.forEach((tab) => {
                    tab.visible = true;
                });
            }
        }
        this._variant = value;
    }

    @api get tabHeaders() {
        return this._tabHeaders;
    }

    set tabHeaders(tabHeaders = []) {
        this._tabHeaders = tabHeaders;
        const allTabs = tabHeaders.map((tab) => {
            const classNames = this._tabClass({});
            const linkClassNames = this.computedLinkClass;
            return {
                label: tab.label,
                title: tab.title || tab.label,
                linkId: tab.value + '__item',
                domId: tab.domId,
                value: String(tab.value),
                class: classNames,
                linkClass: linkClassNames,
                tabIndex: -1,
                ariaSelected: false,
                contentId: '',
                visible: true,
                iconName: tab.iconName,
                iconAlternativeText: tab.iconAlternativeText,
                endIconName: tab.endIconName,
                endIconAlternativeText: tab.endIconAlternativeText,
                showErrorIndicator: tab.showErrorIndicator
            };
        });

        let selectedTab = allTabs[0];
        if (this._selectedTab) {
            selectedTab = allTabs.find(
                (tab) => tab.value === this._selectedTab.value
            );

            if (!selectedTab) {
                selectedTab = allTabs[0];
            }
        }
        if (selectedTab) {
            this._selectedTab = selectedTab;
            selectedTab.class = this._tabClass({ selected: true });
            selectedTab.ariaSelected = 'true';
            selectedTab.tabIndex = 0;
        }
        this._allTabs = allTabs;

        this._queueSynchronizeA11 = true;

        if (this._connected && this.overflowSupported) {
            // eslint-disable-next-line @lwc/lwc/no-async-operation
            requestAnimationFrame(this._queueOverflow.bind(this));
        }
    }

    @api
    selectTabByValue(tabValue) {
        this._selectTab(tabValue);
    }

    @api
    focus() {
        if (!this._selectedTab) {
            return;
        }
        const tab = this.template.querySelector(
            `a[data-tab-value="${this._selectedTab.value}"]`
        );

        if (tab) {
            tab.focus();
        }
    }

    get overflowSupported() {
        return this._variant !== 'vertical' && !this.disableOverflow;
    }

    get isVerticalVariant() {
        return this._variant === 'vertical';
    }

    get computedLinkClass() {
        const isScopedVariant = this._variant === 'scoped';
        const isVerticalVariant = this.isVerticalVariant;

        return classSet()
            .add({
                'slds-tabs_default__link':
                    !isScopedVariant && !isVerticalVariant,
                'slds-tabs_scoped__link': isScopedVariant,
                'slds-vertical-tabs__link': isVerticalVariant
            })
            .toString();
    }

    get computedOverflowVisibility() {
        return this._hasOverflow ? '' : 'visibility: hidden;';
    }

    get i18n() {
        return i18n;
    }

    get _visibleTabs() {
        return this._allTabs.filter((tab) => tab.visible);
    }

    get computedAriaOrientation() {
        return this.isVerticalVariant ? 'vertical' : null;
    }

    get computedListClass() {
        const isScoped = this._variant === 'scoped';
        const isVertical = this.isVerticalVariant;
        return classSet()
            .add({
                'slds-tabs_scoped__nav': isScoped,
                'slds-vertical-tabs__nav': isVertical,
                'slds-tabs_default__nav': !isScoped && !isVertical
            })
            .toString();
    }

    get computedLeftIconClass() {
        return this.isVerticalVariant
            ? 'slds-vertical-tabs__left-icon'
            : 'slds-tabs__left-icon';
    }

    get computedRightIconClass() {
        return this.isVerticalVariant
            ? 'slds-vertical-tabs__right-icon'
            : 'slds-tabs__right-icon';
    }

    get computedOverflowClass() {
        const tabStyle = this._variant === 'scoped' ? 'scoped' : 'default';
        return `slds-tabs_${tabStyle}__item slds-tabs_${tabStyle}__overflow-button`;
    }

    handleOverflowSelect(event) {
        event.stopPropagation();
        this._selectTabAndFireSelectEvent(event.detail.value);

        if (this._hasOverflow) {
            this._recomputeOverflow();
        }
    }

    handleTabClick(event) {
        event.preventDefault();

        const clickedTabValue = event.target.getAttribute('data-tab-value');
        this._selectTabAndFireSelectEvent(clickedTabValue, { hasFocus: true });
    }

    _findTabByValue(tabValue) {
        return this._allTabs.find((tab) => tab.value === tabValue);
    }

    _selectTabAndFireSelectEvent(tabValue, options) {
        this._selectTab(tabValue, options);

        const tab = this._findTabByValue(tabValue);

        this.dispatchEvent(
            new CustomEvent('select', {
                detail: {
                    value: tab.value,
                    label: tab.label
                }
            })
        );
    }

    _selectTab(tabValue, options = {}) {
        const tab = this._findTabByValue(tabValue);

        if (!tab) {
            return;
        }

        if (this._selectedTab) {
            if (this._selectedTab.value === tabValue) {
                return;
            }

            this._selectedTab.hasFocus = false;
            this._selectedTab.ariaSelected = 'false';
            this._selectedTab.class = this._tabClass({});
            this._selectedTab.tabIndex = -1;
        }
        tab.hasFocus = true;
        tab.ariaSelected = 'true';
        tab.class = this._tabClass({
            selected: true,
            hasFocus: options.hasFocus
        });

        tab.tabIndex = 0;

        this._selectedTab = tab;
    }

    handleBlur(event) {
        const tabValue = event.target.getAttribute('data-tab-value');
        const tab = this._findTabByValue(tabValue);
        if (tab) {
            tab.class = this._tabClass({
                selected: this._selectedTab.value === tab.value,
                hasFocus: false
            });
        }
    }

    handleFocus(event) {
        const tabValue = event.target.getAttribute('data-tab-value');
        const tab = this._findTabByValue(tabValue);

        tab.class = this._tabClass({
            selected: this._selectedTab.value === tab.value,
            hasFocus: true
        });
    }

    handleKeyDown(event) {
        let currentFocusedIndex = 0;

        if (this._selectedTab) {
            currentFocusedIndex = this._visibleTabs.findIndex(
                (tab) => tab.value === this._selectedTab.value
            );
        }
        handleKeyDownOnTabList(event, currentFocusedIndex, {
            isVerticalOrientation: () => this.isVerticalVariant,
            totalTabs: () => this._visibleTabs.length,
            selectTabIndex: (index) => {
                const tab = this._visibleTabs[index];
                this._selectTabAndFireSelectEvent(tab.value, {
                    hasFocus: true
                });

                this.template
                    .querySelector(`a[data-tab-value="${tab.value}"]`)
                    .focus();
            }
        });
    }

    _tabClass({ selected = false, hasFocus = false }) {
        const isScopedVariant = this._variant === 'scoped';
        const isVertical = this.isVerticalVariant;
        return classSet()
            .add({
                'slds-tabs_default__item': !isScopedVariant && !isVertical,
                'slds-tabs_scoped__item': isScopedVariant,
                'slds-vertical-tabs__nav-item': isVertical,
                'slds-is-active': selected,
                'slds-has-focus': hasFocus
            })
            .toString();
    }

    _synchronizeA11y() {
        const tabLinks = this.template.querySelectorAll('a[role="tab"]');

        tabLinks.forEach((tabLink) => {
            const tabData = this._allTabs.find(
                (tab) => tabLink.getAttribute('data-tab-value') === tab.value
            );

            tabLink.setAttribute('id', tabData.linkId);
            tabLink.setAttribute('aria-controls', tabData.domId);
        });
    }

    _setupResizeObserver() {
        const resizeObserver = new LightningResizeObserver(() => {
            if (this._connected) {
                const newWidth = this.getBoundingClientRect().width;

                if (
                    this._containerWidthWhenLastResized &&
                    newWidth <
                        this._containerWidthWhenLastResized +
                            RECOMPUTE_OVERFLOW_THRESHOLD_PX &&
                    newWidth >
                        this._containerWidthWhenLastResized -
                            RECOMPUTE_OVERFLOW_THRESHOLD_PX
                ) {
                    return;
                }

                this._containerWidthWhenLastResized = newWidth;
                this._queueOverflow();
            }
        });
        resizeObserver.observe(this.template.querySelector('[role="tablist"]'));
        return resizeObserver;
    }

    _queueOverflow() {
        this._allTabs.forEach((tab) => {
            tab.visible = true;
        });
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        requestAnimationFrame(this._recomputeOverflow.bind(this));
    }

    _recomputeOverflow() {
        if (!this._connected) {
            return;
        }

        const containerWidth =
            this.getBoundingClientRect().width -
            RECOMPUTE_OVERFLOW_THRESHOLD_PX;

        const tabHeaderElements = this.template.querySelectorAll('[data-tab]');
        for (let i = 0; i < tabHeaderElements.length; i++) {
            const tabHeaderElement = tabHeaderElements[i];
            const tabValue = tabHeaderElement.getAttribute('data-tab-value');

            const tab = this._findTabByValue(tabValue);
            let tabWidth = tabHeaderElement.getBoundingClientRect().width;
            // eslint-disable-next-line lightning-global/check-return-value-for-nullable-call
            const computedStyle = getComputedStyle(tabHeaderElement);
            if (computedStyle) {
                tabWidth +=
                    parseFloat(computedStyle.marginLeft) +
                    parseFloat(computedStyle.marginRight);
            }
            tab.width = tabWidth;
        }
        const overflowElement = this.template.querySelector('[data-overflow]');

        const overflowData = calculateOverflow({
            items: this._allTabs,
            activeItem: this._selectedTab,
            containerWidth,
            overflowWidth: overflowElement.getBoundingClientRect().width
        });

        overflowData.overflowItems.forEach((overflowItem) => {
            if (overflowItem.visible) {
                overflowItem.visible = false;
            }
        });
        this._hasOverflow =
            overflowData.overflowItems && overflowData.overflowItems.length > 0;

        overflowData.visibleItems.forEach((overflowItem) => {
            if (!overflowItem.visible) {
                overflowItem.visible = true;
            }
        });

        this._queueSynchronizeA11 = true;
    }
}
