import { createElement } from 'lwc';
import Element from 'c/progressBar';
import { shadowQuerySelector } from 'lightning/testUtils';

const createProgressBar = (props = {}) => {
  const element = createElement('c-progress-bar', { is: Element });
  Object.assign(element, props);
  document.body.appendChild(element);
  return element;
};

describe('c-progress-bar', () => {
  it('default', () => {
    const element = createProgressBar();
    expect(element).toMatchSnapshot();
  });
  it('invalid variant and size', () => {
    const element = createProgressBar({
      variant: 'foo',
      size: 'foo'
    });

    return Promise.resolve().then(() => {
      expect(element).toMatchSnapshot();
    });
  });
  it('variant value base', () => {
    const element = createProgressBar({
      variant: 'base'
    });

    return Promise.resolve().then(() => {
      expect(element).toMatchSnapshot();
    });
  });
  it('variant value circular', () => {
    const element = createProgressBar({
      variant: 'circular'
    });

    return Promise.resolve().then(() => {
      expect(element).toMatchSnapshot();
    });
  });
  it('variant change from circular to base', () => {
    const element = createProgressBar({
      variant: 'circular'
    });

    element.variant = 'base';
    return Promise.resolve().then(() => {
      expect(element).toMatchSnapshot();
    });
  });
  it('size value x-small', () => {
    const element = createProgressBar({
      size: 'x-small'
    });

    return Promise.resolve().then(() => {
      expect(element).toMatchSnapshot();
    });
  });
  it('size value small', () => {
    const element = createProgressBar({
      size: 'small'
    });

    return Promise.resolve().then(() => {
      expect(element).toMatchSnapshot();
    });
  });
  it('size value medium', () => {
    const element = createProgressBar({
      size: 'medium'
    });

    return Promise.resolve().then(() => {
      expect(element).toMatchSnapshot();
    });
  });
  it('size value large', () => {
    const element = createProgressBar();
    element.size = 'large';
    return Promise.resolve().then(() => {
      expect(element).toMatchSnapshot();
    });
  });

  it('size change from small to large', () => {
    const element = createProgressBar({
      size: 'small'
    });

    element.size = 'large';
    return Promise.resolve().then(() => {
      expect(element).toMatchSnapshot();
    });
  });
  it('value at -10', () => {
    const element = createProgressBar({
      value: -10
    });

    return Promise.resolve().then(() => {
      expect(element).toMatchSnapshot();
    });
  });
  it('value at 50', () => {
    const element = createProgressBar({
      value: 50
    });

    return Promise.resolve().then(() => {
      expect(element).toMatchSnapshot();
    });
  });
  it('value at 200', () => {
    const element = createProgressBar({
      value: 200
    });

    return Promise.resolve().then(() => {
      expect(element).toMatchSnapshot();
    });
  });
  it('value change from 25 to 75', () => {
    const element = createProgressBar({
      value: 25
    });

    element.value = 75;
    return Promise.resolve().then(() => {
      expect(element).toMatchSnapshot();
    });
  });
  it('should not have aria-busy when the value is then 0', () => {
    const element = createProgressBar({
      value: 0
    });

    const processDiv = shadowQuerySelector(element, '.slds-progress-bar');
    expect(processDiv.getAttribute('aria-busy')).toBeNull();
  });
  it('should not have aria-busy when the value is then 100', () => {
    const element = createProgressBar({
      value: 100
    });

    const processDiv = shadowQuerySelector(element, '.slds-progress-bar');
    expect(processDiv.getAttribute('aria-busy')).toBeNull();
  });
  it('should have aria-busy when the value is more then 0', () => {
    const element = createProgressBar({
      value: 25
    });

    const processDiv = shadowQuerySelector(element, '.slds-progress-bar');
    expect(processDiv.getAttribute('aria-busy')).toBe('true');
  });
});
