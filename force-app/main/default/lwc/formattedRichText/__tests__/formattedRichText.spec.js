import { createElement } from 'lwc';
import Element from 'c/formattedRichText';
import { updateRawLinkInfo } from 'c/routingService';

jest.mock('lightning/routingService', () => ({
  updateRawLinkInfo: jest.fn()
}));

const createRichText = () => {
  const element = createElement('c-formatted-rich-text', {
    is: Element
  });

  document.body.appendChild(element);
  return element;
};

describe('c-formatted-rich-text', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('should have the following default template', () => {
    const element = createRichText();
    expect(element).toMatchSnapshot();
  });

  it('should have the following structure when no formatting is used', () => {
    const element = createRichText();
    element.value = 'This is plain text';
    return Promise.resolve().then(() => {
      expect(element).toMatchSnapshot();
    });
  });

  it('should have the following structure when rich text is used', () => {
    const element = createRichText();
    element.value =
      '<h2>This</h2> <p>is <i>some</i> simple <b>rich</b> text</p>';
    return Promise.resolve().then(() => {
      expect(element).toMatchSnapshot();
    });
  });

  it('should have the following structure when a link is used', () => {
    const element = createRichText();
    element.value =
      'This is a link to <a href="www.salesforce.com">Salesforce</a>';
    return Promise.resolve().then(() => {
      expect(element).toMatchSnapshot();
    });
  });

  it('should have the following structure when rich text and a link are used', () => {
    const element = createRichText();
    element.value =
      '<ul><li><a href="http://www.google.com">www.google.com</a></li><li>www.salesforce.com</li><li>http://www.google.com</li><li>salesforce.com</li><li>email@richtext.com</li></ul>';
    return Promise.resolve().then(() => {
      expect(element).toMatchSnapshot();
    });
  });

  it('should not throw any errors when value is set to null', () => {
    const element = createRichText();
    expect(() => {
      element.value = null;
    }).not.toThrow();
  });

  it('should update anchor url when the routing service returns a new url', () => {
    const element = createRichText();
    element.value = '<a href="http://some-url/">Link</a>';

    return Promise.resolve()
      .then(() => {
        updateRawLinkInfo.mockReturnValue(
          new Promise(resolve =>
            resolve({
              url: 'http://new-url/',
              dispatcher: jest.fn()
            })
          )
        );

        const anchor = element.shadowRoot.querySelector('a');
        anchor.click();
      })
      .then(() => {
        expect(element.shadowRoot.querySelector('a').href).toBe(
          'http://new-url/'
        );
      });
  });

  it('should update anchor url when the routing service returns a new url and content within the anchor is clicked', () => {
    const element = createRichText();
    element.value =
      '<div><a href="http://some-url/"><img src="image.png"></a></div>';

    return Promise.resolve()
      .then(() => {
        updateRawLinkInfo.mockReturnValue(
          new Promise(resolve =>
            resolve({
              url: 'http://new-url/',
              dispatcher: jest.fn()
            })
          )
        );

        const image = element.shadowRoot.querySelector('img');
        image.click();
      })
      .then(() => {
        expect(element.shadowRoot.querySelector('a').href).toBe(
          'http://new-url/'
        );
      });
  });

  it('should not throw any errors when content is clicked and there is no parent anchor', () => {
    const element = createRichText();
    element.value = '<div><img src="image.png"></div>';

    return Promise.resolve().then(() => {
      const image = element.shadowRoot.querySelector('img');
      expect(() => {
        image.click();
      }).not.toThrow();
    });
  });
});
