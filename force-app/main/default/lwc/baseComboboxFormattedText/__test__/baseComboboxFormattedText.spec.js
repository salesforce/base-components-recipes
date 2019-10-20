import { createElement } from 'lwc';
import Element from 'c/baseComboboxFormattedText';

const createComponent = (params = {}) => {
    const element = createElement('base-combobox-formatted-text', {
        is: Element
    });

    Object.assign(element, params);
    document.body.appendChild(element);
    return element;
};

describe('base-combobox-formatted-text', () => {
    it('renders', () => {
        const element = createComponent({
            text: [{ text: 'text one' }, { text: 'text two' }]
        });

        expect(element).toMatchSnapshot();
    });
});
