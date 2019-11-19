/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

export function getSectionByName(sortedSections, sectionName) {
    let i = 0;
    const n = sortedSections.length;

    while (i < n && sortedSections[i].name !== sectionName) {
        i++;
    }

    return i < n ? sortedSections[i] : null;
}

export function getSortedSections(sections) {
    const sortedSections = Object.values(sections);

    sortedSections.sort((a, b) => {
        const position = a.ref.compareDocumentPosition(b.ref);

        if (
            position & Node.DOCUMENT_POSITION_FOLLOWING ||
            position & Node.DOCUMENT_POSITION_CONTAINED_BY
        ) {
            return -1;
        } else if (
            position & Node.DOCUMENT_POSITION_PRECEDING ||
            position & Node.DOCUMENT_POSITION_CONTAINS
        ) {
            return 1;
        }

        return 0;
    });

    return sortedSections;
}

export function getNextSection(sortedSections, section, isReverseDirection) {
    let idx = sortedSections.indexOf(section);

    if (idx === -1) {
        return null;
    }

    idx += isReverseDirection ? -1 : 1;

    if (idx < 0) {
        idx = sortedSections.length - 1;
    }

    return sortedSections[idx % sortedSections.length];
}
