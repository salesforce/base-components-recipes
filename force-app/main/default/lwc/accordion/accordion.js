/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api } from 'lwc';
import { createAccordionManager } from 'c/accordionUtilsPrivate';

export default class cAccordion extends LightningElement {
    privateIsSectionLessInLastRender = true;
    _allowMultipleSectionsOpen = false;
    connected = false;

    constructor() {
        super();

        this.privateAccordionManager = createAccordionManager();
        this.privateAccordionManager.attachOpenSectionObserver(() => {
            const openSections = this.activeSectionName;

            if (this.connected) {
                this.dispatchEvent(
                    new CustomEvent('sectiontoggle', {
                        detail: {
                            openSections
                        }
                    })
                );
            }
        });
    }

    connectedCallback() {
        this.connected = true;
        this.setAttribute('role', 'list');
        this.classList.add('slds-accordion');

        this.addEventListener(
            'privateaccordionsectionregister',
            this.handleSectionRegister.bind(this)
        );
    }

    disconnectedCallback() {
        this.connected = false;
    }

    @api get title() {
        return this.getAttribute('title');
    }

    set title(value) {
        this.setAttribute('title', value);
    }

    @api get activeSectionName() {
        const openSections = this.privateAccordionManager.openSectionsNames;

        if (!this.allowMultipleSectionsOpen) {
            return openSections.length ? openSections[0] : undefined;
        }

        return openSections;
    }

    set activeSectionName(value) {
        this._activeSectionName = value;

        if (!this.privateIsSectionLessInLastRender) {
            this.privateAccordionManager.openSectionByName(value);
        }
    }

    @api get allowMultipleSectionsOpen() {
        return this._allowMultipleSectionsOpen;
    }

    set allowMultipleSectionsOpen(value) {
        this._allowMultipleSectionsOpen = value;
        this.privateAccordionManager.collapsible = value;
    }

    renderedCallback() {
        if (this.privateIsSectionLessInLastRender) {
            let hasOpenSection = false;

            if (this._activeSectionName) {
                hasOpenSection = this.privateAccordionManager.openSectionByName(
                    this._activeSectionName
                );
            }

            if (!(this._allowMultipleSectionsOpen || hasOpenSection)) {
                this.privateAccordionManager.openFirstSection();
            }
        }

        this.privateIsSectionLessInLastRender =
            this.privateAccordionManager.sections.length === 0;
    }

    get openedSection() {
        return this.privateAccordionManager.openedSection;
    }

    handleSectionRegister(event) {
        event.stopPropagation();
        event.preventDefault();
        const { detail } = event;

        const accordionSection = {
            id: detail.targetId,
            name: detail.targetName,
            ref: event.target,
            open: detail.openSection,
            isOpen: detail.isOpen,
            close: detail.closeSection,
            focus: detail.focusSection,
            ackParentAccordion: detail.ackParentAccordion
        };

        this.privateAccordionManager.registerSection(accordionSection);
    }
}
