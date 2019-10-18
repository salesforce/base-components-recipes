import { createElement } from 'lwc';
import Element from './../testCasePath';

const createComponent = (props = {}) => {
  const element = createElement('c-progress-indicator-path', {
    is: Element
  });

  Object.assign(element, props);
  document.body.appendChild(element);
  return element;
};

describe('c-progress-indicator test case type="path"', () => {
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
  it('should have all the steps with the class "slds-path__item"', () => {
    const element = createComponent();
    const steps = element.querySelectorAll('lightning-progress-step');
    steps.forEach(step =>
      expect(step.classList.contains('slds-path__item')).toBe(true)
    );
  });
  it('should have step3 marked as current', () => {
    const element = createComponent();
    const steps = Array.from(
      element.shadowRoot.querySelectorAll('lightning-progress-step')
    );

    const step = steps[2];
    expect(step.className).toEqual(expect.stringContaining('slds-is-current'));
  });
});
