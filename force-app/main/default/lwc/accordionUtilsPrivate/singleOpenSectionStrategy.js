/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

function openSection(sectionList, sectionToOpen) {
    let sectionChanged = false;

    if (sectionToOpen) {
        const sections = sectionList.sections;
        sections.forEach((section) => {
            if (section !== sectionToOpen) {
                sectionChanged = sectionChanged || section.isOpen();
                section.close();
            }
        });
        sectionChanged = sectionChanged || !sectionToOpen.isOpen();
        sectionToOpen.open();
    }

    return sectionChanged;
}

export class SingleOpenSectionStrategy {
    constructor(sectionList) {
        this.privateSectionList = sectionList;
    }

    openFirstSection() {
        const sections = this.privateSectionList.sections;

        if (sections.length) {
            return openSection(this.privateSectionList, sections[0]);
        }

        return false;
    }

    openSectionByName(name) {
        const normalizedName =
            Array.isArray(name) && name.length > 0 ? name[0] : name;
        const sectionToOpen = this.privateSectionList.getSectionByName(
            normalizedName
        );

        return openSection(this.privateSectionList, sectionToOpen);
    }

    handleSectionSelect(sectionId) {
        const selectedSection = this.privateSectionList.getSectionById(
            sectionId
        );

        return openSection(this.privateSectionList, selectedSection);
    }

    handleSectionWillDeregister(sectionId) {
        const sectionToDelete = this.privateSectionList.getSectionById(
            sectionId
        );

        if (sectionToDelete.isOpen()) {
            const sectionToOpen = this.privateSectionList.getNextSectionTo(
                sectionId
            );

            if (sectionToOpen && sectionToOpen !== sectionToDelete) {
                sectionToOpen.open();
            }

            return true;
        }

        return false;
    }
}
