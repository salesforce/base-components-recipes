import { createElement } from 'lwc';
import Element from 'c/primitiveIcon';
import iconSvgTemplates from 'lightning/iconSvgTemplates';
import { getIconSvgTemplates } from 'lightning/configProvider';

jest.mock('lightning/configProvider', () => ({
  getIconSvgTemplates: jest.fn(),
  getPathPrefix: jest.fn()
}));

const createPrimitiveIcon = (props = {}) => {
  const element = createElement('c-primitive-icon', { is: Element });
  Object.assign(element, props);
  document.body.appendChild(element);
  return element;
};

describe('when iconSvgTemplates was provided', () => {
  it('should render the icon with inline svg', () => {
    getIconSvgTemplates.mockReturnValue(iconSvgTemplates);
    const element = createPrimitiveIcon({
      iconName: 'utility:salesforce1'
    });

    expect(element).toMatchSnapshot();
  });
});
