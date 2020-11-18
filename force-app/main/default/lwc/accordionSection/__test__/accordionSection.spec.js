/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/accordionSection';

const createAccordionSection = (props) => {
    const element = createElement('c-accordion-section', {
        is: Element
    });

    Object.assign(element, props);
    document.body.appendChild(element);
    return element;
};

function assertSectionIsOpen(elem) {
    const isAriaExpanded = elem.shadowRoot
        .querySelector('section button')
        .getAttribute('aria-expanded');
    const hasSldsIsOpenClass = elem.shadowRoot
        .querySelector('section')
        .classList.contains('slds-is-open');
    const isAriaHidden = elem.shadowRoot
        .querySelector('.slds-accordion__content')
        .getAttribute('aria-hidden');

    expect(isAriaHidden).toBe('false');
    expect(hasSldsIsOpenClass).toBe(true);
    expect(isAriaExpanded).toBe('true');
}

function assertSectionIsClosed(elem) {
    const isAriaExpanded = elem.shadowRoot
        .querySelector('section button')
        .getAttribute('aria-expanded');
    const hasSldsIsOpenClass = elem.shadowRoot
        .querySelector('section')
        .classList.contains('slds-is-open');
    const isAriaHidden = elem.shadowRoot
        .querySelector('.slds-accordion__content')
        .getAttribute('aria-hidden');

    expect(isAriaHidden).toBe('true');
    expect(hasSldsIsOpenClass).toBe(false);
    expect(isAriaExpanded).toBe('false');
}

describe('c-accordion-section', () => {
    describe('accordion section markup', () => {
        it('default', () => {
            const elem = createAccordionSection({
                name: 'name-val',
                label: 'label-val'
            });

            return Promise.resolve().then(() => {
                expect(elem).toMatchSnapshot();
            });
        });

        it('should render closed by default', () => {
            const elem = createAccordionSection();
            return Promise.resolve().then(() => {
                assertSectionIsClosed(elem);
            });
        });
    });

    describe('accordion section behavior', () => {
        const createSectionWithMock = (mock) => {
            const element = createElement('c-accordion-section', {
                is: Element
            });

            const parentDiv = document.createElement('div');

            document.body.appendChild(parentDiv);
            parentDiv.addEventListener('privateaccordionsectionregister', mock);

            parentDiv.appendChild(element);

            return element;
        };

        it('should trigger privateaccordionsectionregister event', () => {
            const accordionHandlerMock = jest.fn();
            createSectionWithMock(accordionHandlerMock);

            return Promise.resolve().then(() => {
                expect(accordionHandlerMock).toHaveBeenCalled();
            });
        });

        it('should open section once open is called', () => {
            const accordionHandlerMock = jest.fn();
            const elem = createSectionWithMock(accordionHandlerMock);

            return Promise.resolve().then(() => {
                const evtDetails = accordionHandlerMock.mock.calls[0][0].detail;
                expect(evtDetails).toBeTruthy();
                evtDetails.openSection();

                return Promise.resolve().then(() => {
                    assertSectionIsOpen(elem);
                });
            });
        });

        it('should close section once close is called', () => {
            const accordionHandlerMock = jest.fn();
            const elem = createSectionWithMock(accordionHandlerMock);

            return Promise.resolve().then(() => {
                const evtDetails = accordionHandlerMock.mock.calls[0][0].detail;
                expect(evtDetails).toBeTruthy();
                evtDetails.openSection();

                return Promise.resolve().then(() => {
                    evtDetails.closeSection();

                    return Promise.resolve().then(() => {
                        assertSectionIsClosed(elem);
                    });
                });
            });
        });

        it('should focus the button once focus is called', () => {
            const accordionHandlerMock = jest.fn();
            const elem = createSectionWithMock(accordionHandlerMock);

            return Promise.resolve()
                .then(() => {
                    const evtDetails =
                        accordionHandlerMock.mock.calls[0][0].detail;
                    expect(evtDetails).toBeTruthy();
                    evtDetails.focusSection();
                })
                .then(() => {
                    const controlBtn = elem.shadowRoot.querySelector(
                        'section button'
                    );

                    expect(elem.shadowRoot.activeElement).toBe(controlBtn);
                });
        });
    });

    describe('accordion section interactions', () => {
        const createSectionWithMock = (mock) => {
            const element = createElement('c-accordion-section', {
                is: Element
            });

            const parentDiv = document.createElement('div');

            document.body.appendChild(parentDiv);
            parentDiv.addEventListener('privateaccordionsectionregister', mock);

            parentDiv.appendChild(element);

            return element;
        };

        const createSectionObserver = () => {
            return {
                notifySectionDeregister: jest.fn(),
                notifySectionSelect: jest.fn(),
                notifySectionKeyNav: jest.fn()
            };
        };

        it('should notify of section select on button click', () => {
            const sectionObserver = createSectionObserver();
            const accordionHandlerMock = jest.fn((evt) =>
                evt.detail.ackParentAccordion(sectionObserver)
            );

            const elem = createSectionWithMock(accordionHandlerMock);

            return Promise.resolve().then(() => {
                elem.shadowRoot.querySelector('button').click();
                expect(sectionObserver.notifySectionSelect).toHaveBeenCalled();
            });
        });

        ['up', 'left', 'down', 'right'].forEach((keyDesc) => {
            const keyCodeMap = {
                left: 37,
                up: 38,
                right: 39,
                down: 40
            };

            it(`should notify of section keynav on ${keyDesc} keydown`, () => {
                const sectionObserver = createSectionObserver();
                const accordionHandlerMock = jest.fn((evt) =>
                    evt.detail.ackParentAccordion(sectionObserver)
                );

                const elem = createSectionWithMock(accordionHandlerMock);

                return Promise.resolve().then(() => {
                    const keydownEvent = new CustomEvent('keydown');
                    keydownEvent.keyCode = keyCodeMap[keyDesc];

                    elem.shadowRoot
                        .querySelector('h3')
                        .dispatchEvent(keydownEvent);

                    expect(
                        sectionObserver.notifySectionKeyNav
                    ).toHaveBeenCalled();
                    expect(
                        sectionObserver.notifySectionKeyNav.mock.calls[0][0]
                    ).toBe(keyCodeMap[keyDesc]);
                });
            });
        });

        it('should NOT notify of section keynav on any other than arrow keydown', () => {
            const sectionObserver = createSectionObserver();
            const accordionHandlerMock = jest.fn((evt) =>
                evt.detail.ackParentAccordion(sectionObserver)
            );

            const elem = createSectionWithMock(accordionHandlerMock);

            return Promise.resolve().then(() => {
                const keydownEvent = new CustomEvent('keydown');
                keydownEvent.keyCode = 41 + Math.ceil(Math.random() * 50);
                elem.shadowRoot.querySelector('h3').dispatchEvent(keydownEvent);

                expect(
                    sectionObserver.notifySectionKeyNav
                ).not.toHaveBeenCalled();
            });
        });

        it('should notify of section deregister when element is removed form dom', () => {
            const sectionObserver = createSectionObserver();
            const accordionHandlerMock = jest.fn((evt) =>
                evt.detail.ackParentAccordion(sectionObserver)
            );

            const elem = createSectionWithMock(accordionHandlerMock);

            return Promise.resolve().then(() => {
                elem.parentNode.removeChild(elem);

                expect(
                    sectionObserver.notifySectionDeregister
                ).toHaveBeenCalled();
            });
        });
    });
});
