/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

function normalizeSectionNames(sectionName) {
    let normalizedNames;

    if (Array.isArray(sectionName)) {
        normalizedNames = sectionName;
    } else {
        normalizedNames = [];
        normalizedNames.push(sectionName);
    }

    return normalizedNames;
}

function getSectionsToOpenMap(sectionList, namesToOpen) {
    const idsToOpenMap = {};

    namesToOpen.forEach((sectionName) => {
        const section = sectionList.getSectionByName(sectionName);

        if (section) {
            idsToOpenMap[section.id] = true;
        }
    });

    return idsToOpenMap;
}

export class MultipleOpenSectionStrategy {
    privateSectionList;

    constructor(sectionList) {
        this.privateSectionList = sectionList;
    }

    openFirstSection() {
        return false;
    }

    openSectionByName(sectionName) {
        const sectionsToOpenMap = getSectionsToOpenMap(
            this.privateSectionList,
            normalizeSectionNames(sectionName)
        );

        const sections = this.privateSectionList.sections;
        let sectionsChanged = false;

        sections.forEach((section) => {
            if (sectionsToOpenMap[section.id]) {
                sectionsChanged = sectionsChanged || !section.isOpen();
                section.open();
            } else {
                sectionsChanged = sectionsChanged || section.isOpen();
                section.close();
            }
        });

        return sectionsChanged;
    }

    handleSectionSelect(sectionId) {
        const section = this.privateSectionList.getSectionById(sectionId);

        if (section) {
            if (section.isOpen()) {
                section.close();
            } else {
                section.open();
            }

            return true;
        }

        return false;
    }

    handleSectionWillDeregister() {
        return false;
    }
}
