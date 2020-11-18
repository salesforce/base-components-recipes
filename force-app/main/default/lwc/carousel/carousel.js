/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import labelAutoPlay from '@salesforce/label/c.lightning_LightningCarousel_autoPlay';
import labelTabString from '@salesforce/label/c.lightning_LightningCarousel_tabString';
import { LightningElement, api, track } from 'lwc';
import { keyCodes, normalizeBoolean } from 'c/utilsPrivate';

const INDICATOR_ACTION = 'slds-carousel__indicator-action';
const SLDS_ACTIVE = 'slds-is-active';
const PAUSE_ICON = 'utility:pause';
const PLAY_ICON = 'utility:right';
const FALSE_STRING = 'false';
const TRUE_STRING = 'true';
const SWIPE_DISTANCE_THRESHOLD = 20;
const DIRECTION_LEFT = 'left';
const DIRECTION_RIGHT = 'right';

const i18n = {
    autoPlay: labelAutoPlay,
    tabString: labelTabString
};

export default class cCarousel extends LightningElement {
    get i18n() {
        return i18n;
    }

    @api get disableAutoScroll() {
        return this._disableAutoScroll || false;
    }
    set disableAutoScroll(value) {
        this._disableAutoScroll = normalizeBoolean(value);
    }

    @api get disableAutoRefresh() {
        return this._disableAutoRefresh || false;
    }
    set disableAutoRefresh(value) {
        this._disableAutoRefresh = normalizeBoolean(value);
    }

    @api scrollDuration = 5;

    @track paginationItems = [];

    @track autoScrollIcon = PAUSE_ICON;

    @track ariaPressed = FALSE_STRING;

    @track carouselPanelsStyle;

    togglePlayString = i18n.autoPlay;

    initialRender = true;

    activeIndexItem = 0;

    carouselItems = [];

    autoScrollTimeOut;

    swipeXStart = 0;

    handlePrivateImageRegister(event) {
        const target = event.target,
            item = event.detail,
            currentIndex = this.carouselItems.length,
            isItemActive = currentIndex === this.activeIndexItem,
            paginationItemDetail = {
                key: item.guid,
                id: `pagination-item-${currentIndex}`,
                tabTitle: target.description
                    ? target.description + ' ' + i18n.tabString
                    : null,
                className: isItemActive
                    ? INDICATOR_ACTION + ' ' + SLDS_ACTIVE
                    : INDICATOR_ACTION,
                tabIndex: isItemActive ? '0' : '-1',
                contentId: event.detail.contentId,
                ariaSelected: isItemActive ? TRUE_STRING : FALSE_STRING
            };

        event.stopPropagation();

        if (currentIndex > 5) {
            return;
        }

        if (isItemActive) {
            item.callbacks.select();
        }

        this.paginationItems.push(paginationItemDetail);
        this.carouselItems.push(item);
    }

    connectedCallback() {
        this.setAttribute('data-handles-touch', true);
        this.addEventListener(
            'privateimageregister',
            this.handlePrivateImageRegister.bind(this)
        );
    }

    renderedCallback() {
        if (this.initialRender) {
            if (!this.disableAutoScroll) {
                this.setAutoScroll();
            }
        }
        this.synchronizeA11y();
        this.initialRender = false;
    }

    synchronizeA11y() {
        if (!this.hasSyncChronizedA11y) {
            const paginationElements = this.template.querySelectorAll(
                '.slds-carousel__indicators a'
            );

            paginationElements.forEach((element, index) => {
                element.setAttribute(
                    'aria-controls',
                    this.paginationItems[index].contentId
                );

                this.carouselItems[index].callbacks.setLabelledBy(element.id);
                this.hasSyncChronizedA11y = true;
            });
        }
    }

    setAutoScroll() {
        const scrollDuration = parseInt(this.scrollDuration, 10) * 1000;
        const carouselItemsLength = this.carouselItems.length;

        if (
            this.activeIndexItem === carouselItemsLength - 1 &&
            this.disableAutoRefresh
        ) {
            this.autoScrollOff();
            return;
        }

        this.cancelAutoScrollTimeOut();
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        this.autoScrollTimeOut = setTimeout(
            this.startAutoScroll.bind(this),
            scrollDuration
        );
    }

    startAutoScroll() {
        this.selectNextSibling();
        this.setAutoScroll();
    }

    cancelAutoScrollTimeOut() {
        clearTimeout(this.autoScrollTimeOut);
    }

    toggleAutoScroll() {
        const ariaPressed = this.ariaPressed;

        if (ariaPressed === FALSE_STRING) {
            this.autoScrollOff();
        } else {
            this.autoScrollOn();
        }
    }

    autoScrollOn() {
        const carouselItemsLength = this.carouselItems.length;

        if (!this.disableAutoScroll) {
            if (
                this.activeIndexItem === carouselItemsLength - 1 &&
                this.disableAutoRefresh
            ) {
                this.unselectCurrentItem();
                this.selectNewItem(0);
            }

            this.autoScrollIcon = PAUSE_ICON;
            this.ariaPressed = FALSE_STRING;
            this.setAutoScroll();
        }
    }

    autoScrollOff() {
        if (!this.disableAutoScroll) {
            this.ariaPressed = TRUE_STRING;
            this.autoScrollIcon = PLAY_ICON;
            this.cancelAutoScrollTimeOut();
        }
    }

    onItemSelect(event) {
        const currentTarget = event.currentTarget,
            itemIndex = currentTarget.getAttribute('data-index');

        this.autoScrollOff();

        if (this.activeIndexItem !== itemIndex) {
            this.unselectCurrentItem();
            this.selectNewItem(itemIndex);
            this.activeIndexItem = parseInt(itemIndex, 10);
        }
    }

    unselectCurrentItem() {
        const activePaginationItem = this.paginationItems[this.activeIndexItem];

        activePaginationItem.tabIndex = '-1';
        activePaginationItem.ariaSelected = FALSE_STRING;
        activePaginationItem.className = INDICATOR_ACTION;

        this.carouselItems[this.activeIndexItem].callbacks.unselect();
    }

    selectNewItem(itemIndex) {
        const activePaginationItem = this.paginationItems[itemIndex];

        if (!this.carouselItems[itemIndex].callbacks.isSelected()) {
            activePaginationItem.tabIndex = '0';
            activePaginationItem.ariaSelected = TRUE_STRING;
            activePaginationItem.className =
                INDICATOR_ACTION + ' ' + SLDS_ACTIVE;

            this.carouselPanelsStyle = `transform:translateX(-${
                itemIndex * 100
            }%);`;
            this.carouselItems[itemIndex].callbacks.select();
            this.activeIndexItem = itemIndex;
        }
    }

    keyDownHandler(event) {
        const key = event.keyCode;
        let indicatorActionsElements = this.indicatorActionsElements;

        if (key === keyCodes.right) {
            event.preventDefault();
            event.stopPropagation();

            this.autoScrollOff();
            this.selectNextSibling();
        }

        if (key === keyCodes.left) {
            event.preventDefault();
            event.stopPropagation();

            this.autoScrollOff();
            this.selectPreviousSibling();
        }

        if (!indicatorActionsElements) {
            indicatorActionsElements = this.template.querySelectorAll(
                '.slds-carousel__indicator-action'
            );

            this.indicatorActionsElements = indicatorActionsElements;
        }

        indicatorActionsElements[this.activeIndexItem].focus();
    }

    selectNextSibling() {
        const carouselItemsLength = this.carouselItems.length;
        let itemIndex = this.activeIndexItem + 1;

        if (this.activeIndexItem === carouselItemsLength - 1) {
            if (this.disableAutoRefresh) {
                this.autoScrollOff();
                return;
            }

            itemIndex = 0;
        }

        this.unselectCurrentItem();
        this.selectNewItem(itemIndex);
    }

    selectPreviousSibling() {
        const carouselItemsLength = this.carouselItems.length;
        let itemIndex = this.activeIndexItem - 1;

        if (this.activeIndexItem === 0) {
            if (this.disableAutoRefresh) {
                this.autoScrollOff();
                return;
            }
            itemIndex = carouselItemsLength - 1;
        }

        this.unselectCurrentItem();
        this.selectNewItem(itemIndex);
    }

    handleTouchStart({ changedTouches }) {
        this.swipeXStart = (changedTouches && changedTouches[0].clientX) || 0;
    }

    handleTouchEnd(event) {
        const { changedTouches } = event;
        const swipeXEnd = (changedTouches && changedTouches[0].clientX) || 0;
        const dx = swipeXEnd - this.swipeXStart;
        const direction =
            Math.sign(dx) === 1 ? DIRECTION_LEFT : DIRECTION_RIGHT;
        if (Math.abs(dx) > SWIPE_DISTANCE_THRESHOLD) {
            if (direction === DIRECTION_RIGHT) {
                this.selectNextSibling();
            } else {
                this.selectPreviousSibling();
            }
            event.preventDefault();
        }
        this.swipeXStart = 0;
    }
}
