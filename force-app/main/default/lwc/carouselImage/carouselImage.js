/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { api, track, LightningElement } from 'lwc';
import { assert, guid } from 'c/utilsPrivate';

export default class cCarouselImage extends LightningElement {
    @api get src() {
        return this._src;
    }
    @track _src;
    set src(value) {
        this._src = value;
        this.validateSrc();
    }

    @api header;

    @api description;

    @api get alternativeText() {
        return this._alternativeText;
    }
    @track _alternativeText;
    set alternativeText(value) {
        this._alternativeText = value;
        this.validateAlternativeText();
    }

    @api href;

    @track ariaHidden = 'true';

    @track ariaLabelledby;

    @track computedId;

    @track tabIndex = '-1';

    _selected = false;

    initialRender = true;

    constructor() {
        super();
        this.selected = false;
    }

    connectedCallback() {
        this.setAttribute('data-handles-touch', true);
    }

    set selected(value) {
        this._selected = value;

        if (value === true) {
            this.ariaHidden = 'false';
            this.setTabIndex('0');
        } else {
            this.ariaHidden = 'true';
            this.setTabIndex('-1');
        }
    }

    get selected() {
        return this._selected;
    }

    setLabelledBy(value) {
        this.panelElement.setAttribute('aria-labelledby', value);
    }

    setTabIndex(value) {
        this.tabIndex = value;
    }

    select() {
        const privateimageselect = new CustomEvent('privateimageselect', {
            bubbles: true,
            composed: true
        });

        this.selected = true;
        this.dispatchEvent(privateimageselect);
    }

    unselect() {
        this.selected = false;
    }

    isSelected() {
        return this.selected;
    }

    validateAll() {
        this.validateAlternativeText();
        this.validateSrc();
    }
    validateAlternativeText() {
        assert(
            typeof this._alternativeText === 'string' &&
                this._alternativeText.length,
            `<c-carousel-image> The "alternative-text" attribute value is required.`
        );
    }
    validateSrc() {
        assert(
            typeof this._src === 'string' && this._src.length,
            `<c-carousel-image> The "src" attribute value is required.`
        );
    }

    renderedCallback() {
        if (this.initialRender) {
            this.validateAll();
            this.panelElement = this.template.querySelector('div');

            const privateimageregister = new CustomEvent(
                'privateimageregister',
                {
                    bubbles: true,
                    detail: {
                        callbacks: {
                            select: this.select.bind(this),
                            unselect: this.unselect.bind(this),
                            isSelected: this.isSelected.bind(this),
                            setTabIndex: this.setTabIndex.bind(this),
                            setLabelledBy: this.setLabelledBy.bind(this)
                        },

                        contentId: this.panelElement.getAttribute('id'),
                        guid: guid()
                    }
                }
            );

            this.classList.add('slds-carousel__panel');
            this.dispatchEvent(privateimageregister);
            this.initialRender = false;
        }
    }
}