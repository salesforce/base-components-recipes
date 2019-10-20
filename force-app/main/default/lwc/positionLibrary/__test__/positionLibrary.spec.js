import { MockElement } from './mockUtil';
jest.mock('../util', () => ({
    normalizeElement: jest.fn(el => el),
    normalizePosition: jest.fn(el => el),
    WindowManager: {
        isWindow: jest.fn(),
        window: {
            innerWidth: 800,
            innerHeight: 600
        }
    },

    isDomNode: jest.fn(() => true),
    getPositionTarget: jest.fn(el => el),
    getScrollableParent: jest.fn(el => el),
    isInDom: jest.fn(() => true),
    timeout: jest.fn(() => Promise.resolve()),
    isInsideModal: jest.fn(() => false),
    requestAnimationFrameAsPromise: jest.fn(() => Promise.resolve())
}));

import {
    startPositioning,
    stopPositioning,
    AutoPosition
} from '../positionLibrary';
import { POSITION_ATTR_NAME } from '../util';
import { Direction } from '../direction';

function createMockElement(id) {
    const el = new MockElement({}, null, {});
    el.id = id;
    el[POSITION_ATTR_NAME] = id;
    el.nodeType = 1;
    el.addEventListener = jest.fn();
    return el;
}
describe('c-position-library stopPosition', () => {
    it('should define stopPositioning', () => {
        expect(stopPositioning).not.toBeNull();
    });
});

describe('c-position-library startPosition', () => {
    beforeEach(() => {});

    it('should define startPositioning', () => {
        expect(startPositioning).not.toBeNull();
    });

    it('should start positioning', () => {
        const el = createMockElement('root');
        const calendar = createMockElement('calender');
        const input = createMockElement('input');

        el.querySelector = jest.fn(selector => {
            if (selector === 'input') {
                return input;
            }
            if (selector === 'lightning-calendar > div') {
                return calendar;
            }
            return null;
        });

        const relationship = startPositioning(el, {
            target: 'input',
            element: 'lightning-calendar > div',
            align: {
                horizontal: Direction.Left,
                vertical: Direction.Top
            },

            targetAlign: {
                horizontal: Direction.Left,
                vertical: Direction.Bottom
            },

            autoFlip: true
        });

        expect(relationship).not.toBeNull();
    });

    it('should accept element', () => {
        const el = createMockElement('root');
        const calendar = createMockElement('calender');
        const input = createMockElement('input');

        el.querySelector = jest.fn(selector => {
            if (selector === 'lightning-calendar > div') {
                return calendar;
            }
            return null;
        });

        const relationship = startPositioning(el, {
            target: input,
            element: 'lightning-calendar > div',
            align: {
                horizontal: Direction.Left,
                vertical: Direction.Top
            },

            targetAlign: {
                horizontal: Direction.Left,
                vertical: Direction.Bottom
            },

            autoFlip: true
        });

        expect(relationship).not.toBeNull();
    });

    it('should return null if target is null', () => {
        const el = createMockElement('root');
        el.querySelector = jest.fn(() => {
            return null;
        });
        const relationship = startPositioning(el, {
            target: null,
            element: 'lightning-calendar > div',
            align: {
                horizontal: Direction.Left,
                vertical: Direction.Top
            },

            targetAlign: {
                horizontal: Direction.Left,
                vertical: Direction.Bottom
            },

            autoFlip: true
        });

        expect(relationship).toBeNull();
    });

    it('should return null if target does not exist', () => {
        const el = createMockElement('root');
        el.querySelector = jest.fn(() => {
            return null;
        });
        const relationship = startPositioning(el, {
            target: null,
            element: 'lightning-calendar > div',
            align: {
                horizontal: Direction.Left,
                vertical: Direction.Top
            },

            targetAlign: {
                horizontal: Direction.Left,
                vertical: Direction.Bottom
            },

            autoFlip: true
        });

        expect(relationship).toBeNull();
    });

    it('should return null if element is null', () => {
        const el = createMockElement('root');
        const input = createMockElement('input');
        el.querySelector = jest.fn(selector => {
            if (selector === 'input') {
                return input;
            }
            return null;
        });
        const relationship = startPositioning(el, {
            target: 'input',
            element: 'lightning-calendar > div',
            align: {
                horizontal: Direction.Left,
                vertical: Direction.Top
            },

            targetAlign: {
                horizontal: Direction.Left,
                vertical: Direction.Bottom
            },

            autoFlip: true
        });

        expect(relationship).toBeNull();
    });

    it('should return null if element does not exist', () => {
        const el = createMockElement('root');
        const input = createMockElement('input');
        el.querySelector = jest.fn(selector => {
            if (selector === 'input') {
                return input;
            }
            return null;
        });
        const relationship = startPositioning(el, {
            target: 'input',
            element: 'lightning-calendar > div',
            align: {
                horizontal: Direction.Left,
                vertical: Direction.Top
            },

            targetAlign: {
                horizontal: Direction.Left,
                vertical: Direction.Bottom
            },

            autoFlip: true
        });

        expect(relationship).toBeNull();
    });
});

describe('c-position-library AutoPosition', () => {
    it('should start auto positioning', () => {
        const el = createMockElement('root');
        const input = createMockElement('input');
        el.querySelector = jest.fn(selector => {
            if (selector === 'input') {
                return input;
            }
            return null;
        });
        const auto = new AutoPosition(el);
        return auto
            .start({
                target: 'input',
                element: 'lightning-calendar > div',
                align: {
                    horizontal: Direction.Left,
                    vertical: Direction.Top
                },

                targetAlign: {
                    horizontal: Direction.Left,
                    vertical: Direction.Bottom
                },

                autoFlip: true
            })
            .then(relationship => {
                expect(relationship).toBeNull();
            });
    });
});
