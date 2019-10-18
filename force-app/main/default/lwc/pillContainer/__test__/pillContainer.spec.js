import { createElement } from 'lwc';
import Element from 'c/pillContainer';

const createComponent = () =>
  createElement('c-pill-container', { is: Element });
const Pills = [
  {
    type: 'avatar',
    href: '',
    label: 'Avatar Pill',
    src: '/assets/images/avatar2.jpg',
    fallbackIconName: 'standard:user',
    variant: 'circle',
    alternativeText: 'User avatar'
  },

  {
    type: 'icon',
    href: '',
    label: 'Icon Pill',
    iconName: 'standard:account',
    alternativeText: 'Account'
  },

  {
    type: 'default',
    href: '',
    label: 'Icon Pill Default',
    iconName: 'standard:account',
    alternativeText: 'Account'
  }
];

describe('c-pill-container', () => {
  it('has no items', () => {
    const element = createComponent();
    element.items = null;
    document.body.appendChild(element);
    expect(element).toMatchSnapshot();
  });
  it('has items', () => {
    const element = createComponent();
    element.items = Pills;
    document.body.appendChild(element);
    expect(element).toMatchSnapshot();
  });
  it('is single line', () => {
    const element = createComponent();
    element.items = Pills;
    element.singleLine = true;
    document.body.appendChild(element);
    expect(element).toMatchSnapshot();
  });
});
