import { createElement } from 'lwc';
import { shadowQuerySelector } from 'lightning/testUtils';
import Element from './../testCaseBase';

const createComponent = (props = {}) => {
  const element = createElement('c-progress-indicator-base', {
    is: Element
  });

  Object.assign(element, props);
  document.body.appendChild(element);
  return element;
};

describe('c-progress-indicator test case type="base"', () => {
  it('should have 4 steps', () => {
    const element = createComponent();
    const steps = element.shadowRoot.querySelectorAll(
      'lightning-progress-step'
    );

    expect(steps).toHaveLength(4);
  });
  it('should have the step rendered with the right state based on the current step', () => {
    const element = createComponent();
    const steps = Array.from(
      element.shadowRoot.querySelectorAll('lightning-progress-step')
    );

    expect(steps[0].className).toEqual(
      expect.stringContaining('slds-is-complete')
    );

    expect(steps[1].className).toEqual(
      expect.stringContaining('slds-is-complete')
    );

    expect(steps[2].className).toEqual(
      expect.not.stringContaining('slds-is-complete')
    );

    expect(steps[3].className).toEqual(
      expect.not.stringContaining('slds-is-complete')
    );
  });
  it('should set the progress-bar to 75% value', () => {
    const element = createComponent();
    const indicator = shadowQuerySelector(
      element,
      'lightning-progress-indicator'
    );

    const progressBar = shadowQuerySelector(
      indicator,
      'lightning-progress-bar'
    );

    return Promise.resolve().then(() => {
      expect(progressBar.value).toBe(66);
    });
  });
});
