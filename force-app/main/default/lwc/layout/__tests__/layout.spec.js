import { createElement } from 'lwc';
import cElement from 'c/layout';

function createComponent(props = {}) {
    const element = createElement('c-layout', { is: cElement });
    Object.assign(element, props);
    document.body.appendChild(element);
    return element;
}

describe('c-layout-item', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('default', () => {
        const element = createComponent();

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });
    it('align', () => {
        const element = createComponent({
            horizontalAlign: 'center',
            verticalAlign: 'end'
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });
    it('pullToBoundary', () => {
        const element = createComponent({
            horizontalAlign: 'center',
            verticalAlign: 'end',
            pullToBoundary: 'small'
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });
    it('multiRows', () => {
        const element = createComponent({
            horizontalAlign: 'center',
            verticalAlign: 'end',
            multiRows: true
        });

        return Promise.resolve().then(() => {
            expect(element).toMatchSnapshot();
        });
    });
});
