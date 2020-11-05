/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import AccordionTest from './../accordionTest';
import { createElement } from 'lwc';
import { shadowQuerySelector, querySelectorAll } from 'lightning/testUtils';

function createAccordion(props = {}) {
    const accordion = createElement('c-accordion-test', {
        is: AccordionTest
    });

    Object.assign(accordion, props);

    if (!props.sectiontoggleHandler) {
        accordion.sectiontoggleHandler = jest.fn();
    }

    document.body.appendChild(accordion);
    return accordion;
}

describe('c-accordion using slots', () => {
    it('should render with the right markup', () => {
        const elem = createAccordion({
            activeSection: 'C'
        });

        return Promise.resolve().then(() => {
            expect(elem).toMatchSnapshot();
        });
    });

    it('should allow lwc:ifs', () => {
        const elem = createAccordion();

        return Promise.resolve().then(() => {
            const qsa = (selector) => querySelectorAll(elem, selector);

            expect(qsa('c-accordion-section')).toHaveLength(2);
            elem.isBVisible = true;

            return Promise.resolve().then(() => {
                expect(qsa('c-accordion-section')).toHaveLength(3);
            });
        });
    });

    it('should open new section when active name changes', () => {
        const elem = createAccordion({
            activeSection: 'C'
        });

        return Promise.resolve()
            .then(() => {
                const sectionC = shadowQuerySelector(elem, '.section-c');
                expect(
                    shadowQuerySelector(sectionC, '.slds-is-open')
                ).not.toBeNull();
            })
            .then(() => {
                elem.activeSection = 'A';
            })
            .then(() => {
                const sectionA = shadowQuerySelector(elem, '.section-a');
                expect(
                    shadowQuerySelector(sectionA, '.slds-is-open')
                ).not.toBeNull();
            });
    });
});

describe('c-accordion that allows multiple sections open', () => {
    const getDomInSection = (elem) => {
        const testCmpShadow = elem.shadowRoot;
        return (sectionSelector, elementSelector) => {
            const section = testCmpShadow.querySelector(sectionSelector);

            return section
                ? shadowQuerySelector(section, elementSelector)
                : section;
        };
    };

    it('should render all sections close by default', () => {
        const elem = createAccordion({
            allowMultipleSectionsOpen: true
        });

        const qs = getDomInSection(elem);

        return Promise.resolve().then(() => {
            expect(
                qs('c-accordion-section.section-a', '.slds-is-open')
            ).toBeNull();
            expect(
                qs('c-accordion-section.section-b', '.slds-is-open')
            ).toBeNull();
            expect(
                qs('c-accordion-section.section-c', '.slds-is-open')
            ).toBeNull();
        });
    });

    it('should open sections when setting active section name', () => {
        const elem = createAccordion({
            allowMultipleSectionsOpen: true,
            activeSection: ['A', 'C']
        });

        const qs = getDomInSection(elem);

        return Promise.resolve().then(() => {
            expect(
                qs('c-accordion-section.section-a', '.slds-is-open')
            ).not.toBeNull();
            expect(
                qs('c-accordion-section.section-c', '.slds-is-open')
            ).not.toBeNull();

            elem.activeSection = ['A'];

            return Promise.resolve().then(() => {
                expect(
                    qs('c-accordion-section.section-a', '.slds-is-open')
                ).not.toBeNull();
                expect(
                    qs('c-accordion-section.section-c', '.slds-is-open')
                ).toBeNull();
            });
        });
    });

    it('should open sections when setting active section name to string', () => {
        const elem = createAccordion({
            allowMultipleSectionsOpen: true,
            activeSection: 'B',
            isBVisible: true
        });

        const qs = getDomInSection(elem);

        return Promise.resolve().then(() => {
            expect(
                qs('c-accordion-section.section-a', '.slds-is-open')
            ).toBeNull();
            expect(
                qs('c-accordion-section.section-b', '.slds-is-open')
            ).not.toBeNull();
            expect(
                qs('c-accordion-section.section-c', '.slds-is-open')
            ).toBeNull();
        });
    });

    it('should collapse sections when selected', () => {
        const elem = createAccordion({
            allowMultipleSectionsOpen: true,
            activeSection: 'C'
        });

        const qs = getDomInSection(elem);

        return Promise.resolve().then(() => {
            let activeSectionName = elem.getAccordionActiveSectionName();
            expect(activeSectionName).toHaveLength(1);
            expect(
                qs('c-accordion-section.section-c', '.slds-is-open')
            ).not.toBeNull();

            qs('c-accordion-section.section-c', 'button').click();

            return Promise.resolve().then(() => {
                activeSectionName = elem.getAccordionActiveSectionName();
                expect(activeSectionName).toHaveLength(0);
                expect(
                    qs('c-accordion-section.section-c', '.slds-is-open')
                ).toBeNull();

                qs('c-accordion-section.section-c', 'button').click();

                return Promise.resolve().then(() => {
                    activeSectionName = elem.getAccordionActiveSectionName();
                    expect(activeSectionName).toHaveLength(1);
                    expect(
                        qs('c-accordion-section.section-c', '.slds-is-open')
                    ).not.toBeNull();
                });
            });
        });
    });

    it('should triggers sectiontoggle event when multiple', () => {
        const handleSectionToggle = jest.fn();
        const elem = createAccordion({
            allowMultipleSectionsOpen: true,
            activeSection: 'C',
            sectiontoggleHandler: handleSectionToggle
        });

        const qs = getDomInSection(elem);

        return Promise.resolve().then(() => {
            expect(
                qs('c-accordion-section.section-c', '.slds-is-open')
            ).not.toBeNull();

            expect(handleSectionToggle).toHaveBeenCalled();
            expect(handleSectionToggle.mock.calls).toHaveLength(1);

            let evtDetails = handleSectionToggle.mock.calls[0][0].detail;
            expect(evtDetails.openSections).toHaveLength(1);

            qs('c-accordion-section.section-a', 'button').click();

            return Promise.resolve().then(() => {
                expect(
                    qs('c-accordion-section.section-a', '.slds-is-open')
                ).not.toBeNull();
                expect(
                    qs('c-accordion-section.section-c', '.slds-is-open')
                ).not.toBeNull();

                expect(handleSectionToggle.mock.calls).toHaveLength(2);

                evtDetails = handleSectionToggle.mock.calls[1][0].detail;
                expect(evtDetails.openSections).toHaveLength(2);
                expect(evtDetails.openSections[0]).toBe('A');
                expect(evtDetails.openSections[1]).toBe('C');
            });
        });
    });

    it('should triggerssectiontoggle event when simple', () => {
        const handleSectionToggle = jest.fn();
        const elem = createAccordion({
            allowMultipleSectionsOpen: false,
            activeSection: 'C',
            sectiontoggleHandler: handleSectionToggle
        });

        const qs = getDomInSection(elem);

        return Promise.resolve().then(() => {
            expect(
                qs('c-accordion-section.section-c', '.slds-is-open')
            ).not.toBeNull();

            expect(handleSectionToggle).toHaveBeenCalled();
            expect(handleSectionToggle.mock.calls).toHaveLength(1);

            let evtDetails = handleSectionToggle.mock.calls[0][0].detail;
            expect(evtDetails.openSections).toHaveLength(1);

            qs('c-accordion-section.section-a', 'button').click();

            return Promise.resolve().then(() => {
                expect(
                    qs('c-accordion-section.section-a', '.slds-is-open')
                ).not.toBeNull();
                expect(
                    qs('c-accordion-section.section-c', '.slds-is-open')
                ).toBeNull();

                expect(handleSectionToggle.mock.calls).toHaveLength(2);

                evtDetails = handleSectionToggle.mock.calls[1][0].detail;
                expect(evtDetails.openSections).toHaveLength(1);
                expect(evtDetails.openSections[0]).toBe('A');
            });
        });
    });

    it('should return string as active section name if is single', () => {
        const elem = createAccordion({
            allowMultipleSectionsOpen: false,
            activeSection: 'C'
        });

        const qs = getDomInSection(elem);

        return Promise.resolve().then(() => {
            let activeSectionName = elem.getAccordionActiveSectionName();
            expect(activeSectionName).toBe('C');

            qs('c-accordion-section.section-a', 'button').click();

            return Promise.resolve().then(() => {
                activeSectionName = elem.getAccordionActiveSectionName();
                expect(activeSectionName).toBe('A');
            });
        });
    });

    it('should return an array as active section name if is multiple', () => {
        const elem = createAccordion({
            allowMultipleSectionsOpen: true,
            activeSection: 'C'
        });

        const qs = getDomInSection(elem);

        return Promise.resolve().then(() => {
            let activeSectionName = elem.getAccordionActiveSectionName();
            expect(Array.isArray(activeSectionName)).toBe(true);
            expect(activeSectionName).toHaveLength(1);
            expect(activeSectionName[0]).toBe('C');

            qs('c-accordion-section.section-a', 'button').click();

            return Promise.resolve().then(() => {
                activeSectionName = elem.getAccordionActiveSectionName();
                expect(Array.isArray(activeSectionName)).toBe(true);
                expect(activeSectionName).toHaveLength(2);
                expect(activeSectionName[0]).toBe('A');
                expect(activeSectionName[1]).toBe('C');
            });
        });
    });
});

describe('accordion sectiontoggle event', () => {
    it('should not be triggered when accordion is disconnected', () => {
        const handleSectionToggle = jest.fn();
        const elem = createAccordion({
            allowMultipleSectionsOpen: false,
            activeSection: 'C',
            sectiontoggleHandler: handleSectionToggle
        });

        return Promise.resolve().then(() => {
            expect(handleSectionToggle).toHaveBeenCalled();
            expect(handleSectionToggle.mock.calls).toHaveLength(1);

            elem.isAccordionHidden = true;

            return Promise.resolve().then(() => {
                expect(handleSectionToggle.mock.calls).toHaveLength(1);
            });
        });
    });
});
