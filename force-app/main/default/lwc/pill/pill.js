/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import labelPillDelete from '@salesforce/label/c.lightning_LightningPill_delete';
import labelPillError from '@salesforce/label/c.lightning_LightningPill_error';
import labelPillRemove from '@salesforce/label/c.lightning_LightningPill_remove';
import labelPillWarning from '@salesforce/label/c.lightning_LightningPill_warning';
import labelPillDeleteAndNavigate from '@salesforce/label/c.lightning_LightningPill_deleteAndNavigate';
import formFactor from '@salesforce/client/formFactor';
import { LightningElement, api, track } from 'lwc';
import {
    keyCodes,
    classListMutation,
    normalizeBoolean,
    isAbsoluteUrl
} from 'c/utilsPrivate';
import link from './link.html';
import plain from './plain.html';
import plainLink from './plainLink.html';
import { updateRawLinkInfo } from 'c/routingService';

const i18n = {
    pillDelete: labelPillDelete,
    pillError: labelPillError,
    pillRemove: labelPillRemove,
    pillWarning: labelPillWarning,
    pillDeleteAndNavigate: labelPillDeleteAndNavigate
};

const STANDARD_CONTAINER = 'standard';
const VARIANT = {
    PLAIN: 'plain',
    PLAIN_LINK: 'plainLink',
    LINK: 'link'
};

function modifyAttribute(el, name, value) {
    if (!el.isPlainLink) {
        if (value !== null && value !== undefined && value !== '') {
            el.setAttribute(name, value);
        } else {
            el.removeAttribute(name);
        }
    } else {
        el.removeAttribute(name);
    }
}

export default class cPill extends LightningElement {
    @api get href() {
        return this._href;
    }
    set href(value) {
        this._href = value;
        if (this._connected && (this.isPlainLink || this.isLink)) {
            this.updateLinkInfo(value);
        }
    }
    @track _href;

    @api label;

    @api name;

    @api variant = VARIANT.LINK;

    @track _role;
    @track _ariaSelected;
    @track _hasMedia = true;
    @track _hasError;
    @track _tabIndex;
    @track _standardContainer;

    _connected = false;
    _dispatcher = () => {};

    render() {
        if (this.isPlainLink) {
            return plainLink;
        } else if (this.isPlain) {
            return plain;
        }
        return link;
    }

    @api get hasError() {
        return this._hasError || false;
    }
    set hasError(value) {
        this._hasError = normalizeBoolean(value);
    }

    get assistiveText() {
        return this.variant === VARIANT.PLAIN_LINK
            ? this.i18n.pillDeleteAndNavigate
            : this.i18n.pillDelete;
    }

    constructor() {
        super();
        this.addEventListener('keydown', this.handleKeypress.bind(this));
    }

    checkMediaElement() {
        if (!this._mediaElement) {
            this._mediaElement = this.template.querySelector('slot');
        }
        return (
            this._mediaElement && this._mediaElement.assignedNodes().length > 0
        );
    }
    renderedCallback() {
        this._hasMedia = this.checkMediaElement();
        const wrapper = this.template.querySelector('span');

        classListMutation(wrapper.classList, {
            'slds-pill': true,
            'slds-pill_link': this.isPlainLink || this.isLink,
            'slds-has-error': this.hasError
        });

        modifyAttribute(this, 'tabindex', this.tabIndex);
        modifyAttribute(this, 'role', this.role);
        modifyAttribute(this, 'aria-selected', this.ariaSelected);

        this.checkAndRemoveContainerClassName();
    }

    @api get isPlainLink() {
        return this.variant === VARIANT.PLAIN_LINK;
    }

    get isPlain() {
        return this.variant === VARIANT.PLAIN || !this.href;
    }

    get isLink() {
        return this.variant === VARIANT.LINK && !!this.href;
    }

    @api get tabIndex() {
        return this._tabIndex;
    }
    set tabIndex(value) {
        this._tabIndex = value;
        modifyAttribute(this, 'tabindex', this._tabIndex);
    }

    @api get ariaSelected() {
        return this._ariaSelected;
    }
    set ariaSelected(value) {
        this._ariaSelected = normalizeBoolean(value);
        modifyAttribute(this, 'aria-selected', this._ariaSelected);
    }

    @api get role() {
        return this._role;
    }
    set role(value) {
        this._role = value;
        modifyAttribute(this, 'role', this._role);
    }

    get i18n() {
        return i18n;
    }

    get hasHref() {
        return !!this.href;
    }

    get labelElement() {
        if (!this._labelElement) {
            this._labelElement = this.template.querySelector(
                '.slds-pill__label'
            );
        }
        return this._labelElement;
    }

    get removeIconElement() {
        if (!this._removeIconElement) {
            this._removeIconElement = this.template.querySelector(
                'c-primitive-icon'
            );
        }
        return this._removeIconElement;
    }

    get useRemoveButton() {
        return !this._standardContainer || formFactor === 'Small';
    }

    connectedCallback() {
        this._connected = true;
        if (this.isPlainLink || this.isLink) {
            this.updateLinkInfo(this.href);
        }
    }

    disconnectedCallback() {
        this._connected = false;
    }

    handleKeypress(event) {
        switch (event.keyCode) {
            case keyCodes.delete:
            case keyCodes.backspace:
                this.handleRemove(event);
                break;
            case keyCodes.enter:
                this.handleEnter(event);
                break;
            default:
        }
    }

    handleEnter() {
        if (this.isPlainLink) {
            if (this.labelElement) {
                this.labelElement.click();
            }
        }
    }

    handleClick(event) {
        if (event.target === this.removeIconElement) {
            this.handleRemoveClick(event);
        } else if (this.isPlainLink || this.isLink) {
            this._dispatcher(event);
        }
    }

    handleRemoveClick(event) {
        event.preventDefault();
        this.handleRemove(event);
    }

    handleRemove(event) {
        const removeEvent = new CustomEvent('remove', {
            cancelable: true,
            detail: {
                name: this.name
            }
        });

        this.dispatchEvent(removeEvent);

        if (removeEvent.defaultPrevented) {
            event.stopPropagation();
        }
    }

    @api
    focusLink() {
        const el = this.template.querySelector('A');
        if (el) {
            el.focus();
        }
    }

    updateLinkInfo(url) {
        updateRawLinkInfo(this, { url: this.makeAbsoluteUrl(url) }).then(
            (linkInfo) => {
                this._url = linkInfo.url;
                this._dispatcher = linkInfo.dispatcher;
            }
        );
    }

    checkAndRemoveContainerClassName() {
        if (this.classList.contains(STANDARD_CONTAINER)) {
            this._standardContainer = true;
            this.classList.remove(STANDARD_CONTAINER);
            if (this.classList.length === 0) {
                this.removeAttribute('class');
            }
        }
    }

    makeAbsoluteUrl(url) {
        return isAbsoluteUrl(url) ? url : `http://${url}`;
    }
}
