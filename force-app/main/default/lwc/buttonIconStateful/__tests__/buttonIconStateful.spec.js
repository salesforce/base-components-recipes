/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/buttonIconStateful';

const createButtonIconStateful = () => {
    const element = createElement('c-button-icon-stateful', {
        is: Element
    });

    document.body.appendChild(element);
    return element;
};

describe('c-button-icon-stateful', () => {
    it('default', () => {
        const element = createButtonIconStateful();
        expect(element).toMatchSnapshot();
    });

    it('default variant with iconName', () => {
        const element = createButtonIconStateful();
        element.iconName = 'utility:like';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('unsupported variant with iconName', () => {
        const element = createButtonIconStateful();
        element.iconName = 'utility:answer';
        element.variant = 'bare';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('border variant with iconName and size small', () => {
        const element = createButtonIconStateful();
        element.iconName = 'utility:answer';
        element.variant = 'border';
        element.size = 'small';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('border filled variant with iconName and size small', () => {
        const element = createButtonIconStateful();
        element.iconName = 'utility:answer';
        element.variant = 'border-filled';
        element.size = 'small';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('size small', () => {
        const element = createButtonIconStateful();
        element.iconName = 'utility:answer';
        element.size = 'small';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('size x-small', () => {
        const element = createButtonIconStateful();
        element.iconName = 'utility:answer';
        element.size = 'x-small';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('size xx-small', () => {
        const element = createButtonIconStateful();
        element.iconName = 'utility:answer';
        element.size = 'xx-small';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('invalid size large', () => {
        const element = createButtonIconStateful();
        element.iconName = 'utility:answer';
        element.size = 'large';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('variant change from border to border-inverse', () => {
        const element = createButtonIconStateful();
        element.iconName = 'utility:salesforce1';
        element.variant = 'border';
        return Promise.resolve()
            .then(() => {
                element.variant = 'border-inverse';
            })
            .then(() => {
                expect(element).toMatchSnapshot();
            });
    });

    it('selected state', () => {
        const element = createButtonIconStateful();
        element.iconName = 'utility:salesforce1';
        element.selected = 'true';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });

    it('changes in selected state', () => {
        const element = createButtonIconStateful();
        element.iconName = 'utility:salesforce1';
        element.selected = true;
        return Promise.resolve()
            .then(() => {
                expect(
                    element.shadowRoot
                        .querySelector('button')
                        .getAttribute('aria-pressed')
                ).toBe('true');
                element.selected = false;
            })
            .then(() => {
                expect(
                    element.shadowRoot
                        .querySelector('button')
                        .getAttribute('aria-pressed')
                ).toBe('false');
                element.selected = undefined;
            })
            .then(() => {
                expect(
                    element.shadowRoot
                        .querySelector('button')
                        .getAttribute('aria-pressed')
                ).toBe('false');
            });
    });

    it('size change from default to small and selected state', () => {
        const element = createButtonIconStateful();
        element.iconName = 'utility:salesforce1';
        element.selected = 'true';
        return Promise.resolve()
            .then(() => {
                element.size = 'small';
            })
            .then(() => {
                expect(element).toMatchSnapshot();
            });
    });
    it('outputs title and assitive text span', () => {
        const element = createButtonIconStateful();
        element.iconName = 'utility:answer';
        element.selected = 'true';
        element.alternativeText = 'Click to answer';
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });
    it('should set title attribute on the button', () => {
        const element = createButtonIconStateful();
        element.iconName = 'utility:answer';
        element.title = 'Click here';

        return Promise.resolve().then(() => {
            const btn = element.shadowRoot.querySelector('button');

            expect(btn.getAttribute('title')).toBe('Click here');
            expect(element.getAttribute('title')).toBe(null);
        });
    });
    it('should set aria-expanded attribute on the button when false', () => {
        const element = createButtonIconStateful();
        element.iconName = 'utility:answer';
        element.ariaExpanded = 'false';

        return Promise.resolve().then(() => {
            const btn = element.shadowRoot.querySelector('button');
            expect(btn.getAttribute('aria-expanded')).toBe('false');
            expect(element.getAttribute('aria-expanded')).toBe(null);
        });
    });
    it('should set aria-expanded attribute on the button when true', () => {
        const element = createButtonIconStateful();
        element.iconName = 'utility:answer';
        element.ariaExpanded = 'true';

        return Promise.resolve().then(() => {
            const btn = element.shadowRoot.querySelector('button');
            expect(btn.getAttribute('aria-expanded')).toBe('true');
            expect(element.getAttribute('aria-expanded')).toBe(null);
        });
    });
    it('should set aria-live attribute on the button', () => {
        const element = createButtonIconStateful({ ariaLive: 'polite' });
        element.iconName = 'utility:answer';
        element.ariaLive = 'polite';

        return Promise.resolve().then(() => {
            const btn = element.shadowRoot.querySelector('button');
            expect(btn.getAttribute('aria-live')).toBe('polite');
            expect(element.getAttribute('aria-live')).toBe(null);
        });
    });
    it('should set aria-controls attribute on the button', () => {
        const element = createButtonIconStateful();
        element.iconName = 'utility:answer';
        element.ariaControls = 'section1';

        return Promise.resolve().then(() => {
            const btn = element.shadowRoot.querySelector('button');
            expect(btn.getAttribute('aria-controls')).toEqual(
                expect.stringContaining('section1')
            );

            expect(element.getAttribute('aria-controls')).toBe(null);
        });
    });
    it('should set aria-label attribute on the button', () => {
        const element = createButtonIconStateful();
        element.iconName = 'utility:answer';
        element.ariaLabel = 'btn1';

        return Promise.resolve().then(() => {
            const btn = element.shadowRoot.querySelector('button');
            expect(btn.getAttribute('aria-label')).toBe('btn1');
            expect(element.getAttribute('aria-label')).toBe(null);
        });
    });
    it('should set aria-describedby attribute on the button', () => {
        const element = createButtonIconStateful({
            ariaDescribedBy: 'section1'
        });

        element.iconName = 'utility:answer';
        element.ariaDescribedBy = 'section1';

        return Promise.resolve().then(() => {
            const btn = element.shadowRoot.querySelector('button');
            expect(btn.getAttribute('aria-describedby')).toEqual(
                expect.stringContaining('section1')
            );

            expect(element.getAttribute('aria-describedby')).toBe(null);
        });
    });
    it('should match snapshot with aria-attributes', () => {
        const element = createButtonIconStateful();
        element.iconName = 'utility:answer';
        element.ariaExpanded = 'true';
        element.ariaAtomic = 'true';

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });
    it('should not set any aria-attribute and match snapshot', () => {
        const element = createButtonIconStateful();
        element.iconName = 'utility:answer';
        element.tabIndex = '-1';
        element.ariaAtomic = 'null';

        const btn = element.shadowRoot.querySelector('button');

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
            expect(btn.getAttribute('aria-expanded')).toBe(null);
            expect(btn.getAttribute('aria-atomic')).toBe(null);
        });
    });
    it('fires click event when button is clicked', () => {
        const element = createButtonIconStateful();
        const evtListenerMock = jest.fn();
        element.addEventListener('click', evtListenerMock);
        element.shadowRoot.querySelector('button').click();

        return Promise.resolve().then(() => {
            expect(evtListenerMock.mock.calls).toHaveLength(1);
        });
    });
});
