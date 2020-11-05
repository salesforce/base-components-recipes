/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { EventEmitter, keyCodes, normalizeBoolean } from 'c/utilsPrivate';
import { AccordionSectionList } from './accordionSectionList';
import { SingleOpenSectionStrategy } from './singleOpenSectionStrategy';
import { MultipleOpenSectionStrategy } from './multipleOpenSectionStrategy';

const ACCORDION_SECTION_DEREGISTER = 'accordion-section-deregister';
const ACCORDION_SECTION_SELECT = 'accordion-section-select';
const ACCORDION_SECTION_KEYNAV = 'accordion-section-keynav';

function createAccordionSectionObserver(sectionId, eventEmitter) {
    return {
        notifySectionDeregister: () => {
            eventEmitter.emit(ACCORDION_SECTION_DEREGISTER, sectionId);
        },
        notifySectionSelect: () => {
            eventEmitter.emit(ACCORDION_SECTION_SELECT, sectionId);
        },
        notifySectionKeyNav: (keyCode) => {
            eventEmitter.emit(ACCORDION_SECTION_KEYNAV, sectionId, keyCode);
        }
    };
}

export class AccordionManager {
    privateAccordionSectionList;
    privateOpenSectionObservers = [];
    privateEventEmitter;
    privateCollapsible = false;
    privateAccordionStrategies;

    constructor(
        accordionSectionList,
        singleOpenSectionStrategy,
        multipleOpenSectionStrategy
    ) {
        this.privateAccordionSectionList = accordionSectionList;
        this.privateAccordionStrategies = {
            false: singleOpenSectionStrategy,
            true: multipleOpenSectionStrategy
        };

        this._configureSectionsEventEmitter();
    }

    get sectionStrategy() {
        return this.privateAccordionStrategies[this.collapsible];
    }

    get collapsible() {
        return this.privateCollapsible;
    }

    set collapsible(value) {
        this.privateCollapsible = normalizeBoolean(value);
    }

    attachOpenSectionObserver(observerCb) {
        this.privateOpenSectionObservers.push(observerCb);
    }

    get sections() {
        return this.privateAccordionSectionList.sections;
    }

    openFirstSection() {
        const openSectionsChange = this.sectionStrategy.openFirstSection();

        if (openSectionsChange) {
            this._notifyOpenSectionChange();
        }
    }

    get openSectionsNames() {
        const openSections = this.privateAccordionSectionList.openSections;

        const namesMap = openSections.reduce((accumulator, currentValue) => {
            if (currentValue.name) {
                accumulator[currentValue.name] = true;
            }

            return accumulator;
        }, {});

        return Object.keys(namesMap);
    }

    openSectionByName(sectionName) {
        const sectionsChanged = this.sectionStrategy.openSectionByName(
            sectionName
        );

        if (sectionsChanged) {
            this._notifyOpenSectionChange();
        }

        return sectionsChanged;
    }

    registerSection(accordionSectionInterface) {
        this.privateAccordionSectionList.add(accordionSectionInterface);

        accordionSectionInterface.ackParentAccordion(
            createAccordionSectionObserver(
                accordionSectionInterface.id,
                this.privateEventEmitter
            )
        );
    }

    _handleSectionSelect(sectionId) {
        const sectionChanged = this.sectionStrategy.handleSectionSelect(
            sectionId
        );

        if (sectionChanged) {
            this._notifyOpenSectionChange();
        }
    }

    _deregisterSection(deletedSectionId) {
        const sectionsChanged = this.sectionStrategy.handleSectionWillDeregister(
            deletedSectionId
        );

        this.privateAccordionSectionList.remove(deletedSectionId);

        if (sectionsChanged) {
            this._notifyOpenSectionChange();
        }
    }

    _configureSectionsEventEmitter() {
        this.privateEventEmitter = new EventEmitter();

        this.privateEventEmitter
            .on(ACCORDION_SECTION_DEREGISTER, (sectionId) => {
                this._deregisterSection(sectionId);
            })
            .on(ACCORDION_SECTION_KEYNAV, (sectionId, keyCode) => {
                this._handleSectionKeyNav(sectionId, keyCode);
            })
            .on(ACCORDION_SECTION_SELECT, (sectionId) => {
                this._handleSectionSelect(sectionId);
            });
    }

    _notifyOpenSectionChange() {
        this.privateOpenSectionObservers.forEach((observerCallback) =>
            observerCallback()
        );
    }

    _handleSectionKeyNav(selectedSectionId, keyCode) {
        const isReverseDirection =
            keyCode === keyCodes.left || keyCode === keyCodes.up;
        const sectionList = this.privateAccordionSectionList;
        const nextSection = isReverseDirection
            ? sectionList.getPrevSectionTo(selectedSectionId)
            : sectionList.getNextSectionTo(selectedSectionId);

        if (nextSection !== null) {
            nextSection.focus();
        }
    }
}

export function createAccordionManager() {
    const accordionSectionList = new AccordionSectionList();
    const singleOpenSectionStrategy = new SingleOpenSectionStrategy(
        accordionSectionList
    );

    const multipleOpenSectionStrategy = new MultipleOpenSectionStrategy(
        accordionSectionList
    );

    return new AccordionManager(
        accordionSectionList,
        singleOpenSectionStrategy,
        multipleOpenSectionStrategy
    );
}
