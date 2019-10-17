import { createElement } from 'lwc';
import cElement from 'c/textarea';

function createComponent(props = {}) {
  const element = createElement('c-textarea', {
    is: cElement
  });

  Object.assign(element, props);
  document.body.appendChild(element);
  return element;
}

describe('c-textarea', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('should not render undefined', () => {
    createComponent({
      value: undefined
    });

    return Promise.resolve().then(() => {
      const txt = document
        .querySelector('c-textarea')
        .shadowRoot.querySelector('textarea');
      expect(txt.textContent).toBe('');
    });
  });

  it('should render with default value', () => {
    createComponent();
    return Promise.resolve().then(() => {
      const txt = document
        .querySelector('c-textarea')
        .shadowRoot.querySelector('textarea');
      expect(txt.textContent).toBe('');
    });
  });

  it.skip('should render with value', () => {
    createComponent({
      value: 'ASB'
    });

    return Promise.resolve().then(() => {
      const txt = document
        .querySelector('c-textarea')
        .shadowRoot.querySelector('textarea');
      expect(txt.textContent).toBe('ASB');
    });
  });

  it.skip('should be invalid when required and empty', () => {
    createComponent({
      required: true
    });

    return Promise.resolve().then(() => {
      const txt = document
        .querySelector('c-textarea')
        .shadowRoot.querySelector('textarea');
      const valid = txt.checkValidity();
      expect(valid).toBe(false);
    });
  });

  it('should be valid when required and filled', () => {
    createComponent({
      required: true,
      value: 'I am content.'
    });

    return Promise.resolve().then(() => {
      const txt = document
        .querySelector('c-textarea')
        .shadowRoot.querySelector('textarea');
      expect(txt.checkValidity()).toBe(true);
    });
  });
});
