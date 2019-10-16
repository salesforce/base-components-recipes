import { createElement } from 'lwc';
import Element from 'c/formattedNumber';

const createComponent = () => {
  const element = createElement('c-formatted-number', {
    is: Element
  });

  document.body.appendChild(element);
  return element;
};

describe('c-formatted-number', () => {
  it('format currency', () => {
    const element = createComponent();
    element.formatStyle = 'currency';
    element.value = '123';
    return Promise.resolve().then(() => {
      expect(element).toMatchSnapshot();
    });
  });

  it('formats percent', () => {
    const element = createComponent();
    element.formatStyle = 'percent';
    element.value = '0.5';
    return Promise.resolve().then(() => {
      expect(element).toMatchSnapshot();
    });
  });

  it('returns an empty string for an empty value', () => {
    const element = createComponent();
    element.formatStyle = 'currency';
    element.value = null;
    return Promise.resolve().then(() => {
      expect(element).toMatchSnapshot();
    });
  });

  it('formats fixed percent', () => {
    const element = createComponent();
    element.formatStyle = 'percent-fixed';
    element.value = '50';
    return Promise.resolve().then(() => {
      expect(element).toMatchSnapshot();
    });
  });
});
