import { createElement } from 'lwc';
import Element from 'c/progressIndicator';
import TestCaseBase from './testCaseBase/testCaseBase';

const createComponent = (props = {}) => {
    const element = createElement('c-progress-indicator', {
        is: Element
    });

    Object.assign(element, props);
    document.body.appendChild(element);
    return element;
};

describe('c-progress-indicator', () => {
    describe('when type="base"', () => {
        it('should fallback to type="base" when no type was passed', () => {
            const element = createComponent();
            expect(element.type).toBe('base');
        });
        it('should have class "slds-progress" in the wrapper div', () => {
            const element = createComponent({
                type: 'base'
            });

            const wrapper = element.shadowRoot.querySelector('.slds-progress');
            expect(wrapper).not.toBeNull();
        });
        it('should render a small progress bar', () => {
            const element = createComponent({
                type: 'base'
            });

            const progress = element.shadowRoot.querySelector('c-progress-bar');

            expect(progress).not.toBeNull();
        });
        it('should call onstepfocus when a step is focused', () => {
            const element = createElement('c-progress-indicator-base', {
                is: TestCaseBase
            });

            document.body.appendChild(element);

            return Promise.resolve().then(() => {
                const mockHandler = jest.fn();
                const step = element.shadowRoot
                    .querySelector('lightning-progress-step')
                    .shadowRoot.querySelector('button');
                const progressIndicator = element.shadowRoot.querySelector(
                    'c-progress-indicator'
                );

                progressIndicator.addEventListener('stepfocus', mockHandler);
                step.focus();
                expect(mockHandler).toHaveBeenCalled();
            });
        });
        it('should call onstepblur when a step is blured', () => {
            const element = createElement('c-progress-indicator-base', {
                is: TestCaseBase
            });

            document.body.appendChild(element);

            return Promise.resolve().then(() => {
                const mockHandler = jest.fn();
                const step = element.shadowRoot
                    .querySelector('lightning-progress-step')
                    .shadowRoot.querySelector('button');
                const progressIndicator = element.shadowRoot.querySelector(
                    'c-progress-indicator'
                );

                progressIndicator.addEventListener('stepblur', mockHandler);
                step.focus();
                step.blur();
                expect(mockHandler).toHaveBeenCalled();
            });
        });
        it('should call onstepmouseenter when a steps has entered via a point device', () => {
            const element = createElement('c-progress-indicator-base', {
                is: TestCaseBase
            });

            document.body.appendChild(element);

            return Promise.resolve().then(() => {
                const mockHandler = jest.fn();
                const step = element.shadowRoot
                    .querySelector('lightning-progress-step')
                    .shadowRoot.querySelector('button');
                const progressIndicator = element.shadowRoot.querySelector(
                    'c-progress-indicator'
                );

                progressIndicator.addEventListener(
                    'stepmouseenter',
                    mockHandler
                );

                step.dispatchEvent(
                    new Event('mouseenter', { bubbles: true, composed: true })
                );

                return Promise.resolve().then(() => {
                    expect(mockHandler).toHaveBeenCalled();
                });
            });
        });
        it('should call onstepmousleave when a steps has leaved via a point device', () => {
            const element = createElement('c-progress-indicator-base', {
                is: TestCaseBase
            });

            document.body.appendChild(element);

            return Promise.resolve().then(() => {
                const mockHandler = jest.fn();
                const step = element.shadowRoot
                    .querySelector('lightning-progress-step')
                    .shadowRoot.querySelector('button');

                const progressIndicator = element.shadowRoot.querySelector(
                    'c-progress-indicator'
                );

                progressIndicator.addEventListener(
                    'stepmouseleave',
                    mockHandler
                );

                step.dispatchEvent(
                    new Event('mouseleave', { bubbles: true, composed: true })
                );

                return Promise.resolve().then(() => {
                    expect(mockHandler).toHaveBeenCalled();
                });
            });
        });
    });
});
