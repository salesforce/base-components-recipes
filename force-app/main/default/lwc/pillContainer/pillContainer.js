/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import labelContainerLabel from '@salesforce/label/c.lightning_LightningPillContainer_label';
import pillContainerMoreLabel from '@salesforce/label/c.lightning_LightningPillContainer_more';
import { LightningElement, api, track } from 'lwc';
import LightningPillItem from './pillItem';
import { keyCodes, normalizeBoolean, normalizeString } from 'c/utilsPrivate';
import { LightningResizeObserver } from 'c/resizeObserver';
import formFactor from '@salesforce/client/formFactor';
import barePillContainer from './barePillContainer.html';
import standardPillContainer from './standardPillContainer.html';

const PILL_SELECTOR = 'c-pill';
const BARE = 'bare';
const STANDARD = 'standard';

const i18n = {
    containerLabel: labelContainerLabel
};

export default class cPillContainer extends LightningElement {
    @api label = i18n.containerLabel;

    @track _variant;
    @track _singleLine = false;
    @track _isExpanded = false;
    @track _isCollapsible = false;
    @track _focusedIndex = 0;
    @track _focusedTabIndex = 0;
    @track _pillsNotFittingCount;
    @track _pillContainerElementId;

    connectedCallback() {
        this._connected = true;
    }

    disconnectedCallback() {
        this._connected = false;
        if (this._resizeObserver) {
            this._resizeObserver.disconnect();
        }
    }

    render() {
        if (this.variant === BARE || formFactor === 'Small') {
            return barePillContainer;
        }
        return standardPillContainer;
    }

    renderedCallback() {
        if (this._resizeObserver) {
            if (!this.isCollapsible) {
                this._resizeObserver.disconnect();
                this._resizeObserver = undefined;
            }
        } else if (this.isCollapsible) {
            this._resizeObserver = this._setupResizeObserver();
        }

        const groupElm = this.template.querySelector(
            '.slds-listbox_selection-group'
        );

        if (groupElm) {
            groupElm.classList.toggle('slds-is-expanded', this._isExpanded);
        }

        const ul = this.template.querySelector('ul');
        if (ul) {
            if (this.pills.length === 0) {
                ul.tabIndex = 0;
            } else {
                ul.tabIndex = -1;
                this.setFocusedItemTabIndex(0);

                if (this.template.querySelector('ul:focus')) {
                    this.focus();
                }
            }
        }
    }

    @api get variant() {
        return this._variant || 'standard';
    }

    set variant(value) {
        this._variant = normalizeString(value, {
            fallbackValue: STANDARD,
            validValues: [STANDARD, BARE]
        });
    }

    @api get singleLine() {
        return this._singleLine;
    }

    set singleLine(value) {
        this._singleLine = normalizeBoolean(value);
    }

    @api get isCollapsible() {
        return this._isCollapsible;
    }

    set isCollapsible(value) {
        this._isCollapsible = normalizeBoolean(value);
    }

    @api get isExpanded() {
        return this._isExpanded;
    }

    set isExpanded(value) {
        this._isExpanded = normalizeBoolean(value);
    }

    @api items;

    get pills() {
        return Array.isArray(this.items) ? this.items : [];
    }

    get pillViewModels() {
        return this.pills.map((item, index) => {
            const pill = new LightningPillItem(item);
            return {
                pill,
                tabIndex:
                    this._focusedIndex === index ? this._focusedTabIndex : -1
            };
        });
    }

    get computedListboxClass() {
        const singleLineClass = this.singleLine ? 'slds-listbox_inline' : '';
        return `slds-listbox slds-listbox_horizontal ${singleLineClass}`;
    }

    get focusedIndex() {
        if (this._focusedIndex >= this.pills.length) {
            this._focusedIndex = this._deleteLast ? this.pills.length - 1 : 0;
            this._deleteLast = false;
        } else if (this._focusedIndex < 0) {
            this._focusedIndex = this.pills.length - 1;
        }
        return this._focusedIndex;
    }

    set focusedIndex(value) {
        this._focusedIndex = value;
    }

    get pillNodes() {
        return this.template.querySelectorAll(PILL_SELECTOR) || [];
    }

    get focusedNode() {
        const pills = this.pillNodes;
        return pills.length <= 0 ? null : pills[this.focusedIndex];
    }

    @api
    focus() {
        const focusedNode = this.focusedNode;
        if (focusedNode) {
            if (focusedNode.isPlainLink) {
                focusedNode.focusLink();
            } else {
                focusedNode.focus();
            }
        } else {
            const ul = this.template.querySelector('ul');
            if (ul) {
                ul.focus();
            }
        }
    }

    handleRemove(removeEvent) {
        const index = parseInt(removeEvent.detail.name, 10);
        if (typeof index !== 'number' || index < 0) {
            return;
        }

        this.fireEvent(index);
    }

    fireEvent(index) {
        if (this.focusedIndex !== index) {
            this.switchFocus(index);
        }

        this._deleteLast = index >= this.pills.length - 1;

        this.dispatchEvent(
            new CustomEvent('itemremove', {
                detail: {
                    item: this.pills[index],
                    index
                }
            })
        );
    }

    setFocusedItemTabIndex(value) {
        const focusedNode = this.focusedNode;
        if (focusedNode) {
            this._focusedTabIndex = value;
        }
    }

    switchFocus(newValue) {
        this.setFocusedItemTabIndex(-1);

        this.focusedIndex = newValue;

        this.setFocusedItemTabIndex(0);
        this.focus();
    }

    handleKeyDown(event) {
        if (this.pills.length <= 0) {
            return;
        }
        const index = this.focusedIndex;
        switch (event.keyCode) {
            case keyCodes.left:
            case keyCodes.up:
                this.switchFocus(index - 1);
                break;
            case keyCodes.right:
            case keyCodes.down:
                this.switchFocus(index + 1);
                break;
            default:
                this.focus();
        }
    }

    handlePillFocus() {
        if (!this._hasFocus) {
            this._hasFocus = true;
            this.dispatchEvent(new CustomEvent('focus'));
        }
    }

    handlePillBlur(event) {
        if (
            !event.relatedTarget ||
            !this.template.contains(event.relatedTarget)
        ) {
            this._hasFocus = false;
            this.dispatchEvent(new CustomEvent('blur'));
        }
    }

    handleClick() {
        this.focus();
    }

    handlePillClick(clickEvent) {
        const index = parseInt(clickEvent.currentTarget.name, 10);

        if (index >= 0 && this.focusedIndex !== index) {
            this.switchFocus(index);
        } else {
            this.focus();
        }

        clickEvent.stopPropagation();
    }

    handleMoreClick() {
        this.focus();
    }

    get _showMore() {
        return this.isCollapsible && !this.isExpanded;
    }

    get computedPillCountMoreLabel() {
        if (
            this._isExpanded ||
            isNaN(this._pillsNotFittingCount) ||
            this._pillsNotFittingCount <= 0
        ) {
            return undefined;
        }

        return pillContainerMoreLabel.replace(
            '{0}',
            this._pillsNotFittingCount
        );
    }

    _setupResizeObserver() {
        const listBox = this.template.querySelector('[role="listbox"]');
        if (!listBox) return null;
        const resizeObserver = new LightningResizeObserver(() => {
            const visibleHeight = this.getBoundingClientRect().height;

            let notFittingCount = 0;
            for (let i = 0; i < this.pillNodes.length; i++) {
                const node = this.pillNodes[i];
                if (node.offsetTop > visibleHeight) {
                    notFittingCount += 1;
                }
            }
            this._pillsNotFittingCount = notFittingCount;
        });
        resizeObserver.observe(listBox);
        return resizeObserver;
    }
}
