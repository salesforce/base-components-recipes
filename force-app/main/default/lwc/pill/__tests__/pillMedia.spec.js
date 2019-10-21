import { createElement } from 'lwc';
import Element from 'snapshot/pill';

const createComponent = () => {
    const element = createElement('snapshot-pill', { is: Element });
    document.body.appendChild(element);
    return element;
};

describe('pass in media', () => {
    it('label', () => {
        const element = createComponent();
        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });
});
