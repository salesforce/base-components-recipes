/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import {
    getSectionByName,
    getSortedSections,
    getNextSection
} from './accordionUtils';

export class AccordionSectionList {
    privateSectionBag = {};
    privateSortedSections = [];

    add(accordionSectionInterface) {
        this.privateSectionBag[
            accordionSectionInterface.id
        ] = accordionSectionInterface;

        this.privateSortedSections = getSortedSections(this.privateSectionBag);
    }

    get sections() {
        return this.privateSortedSections;
    }

    remove(sectionId) {
        delete this.privateSectionBag[sectionId];
        this.privateSortedSections = getSortedSections(this.privateSectionBag);
    }

    getSectionById(sectionId) {
        return this.privateSectionBag[sectionId];
    }

    get openSections() {
        return this.privateSortedSections.filter((section) => section.isOpen());
    }

    getSectionByName(name) {
        return getSectionByName(this.privateSortedSections, name);
    }

    getNextSectionTo(sectionId) {
        return getNextSection(
            this.privateSortedSections,
            this.privateSectionBag[sectionId],
            false
        );
    }

    getPrevSectionTo(sectionId) {
        return getNextSection(
            this.privateSortedSections,
            this.privateSectionBag[sectionId],
            true
        );
    }
}
