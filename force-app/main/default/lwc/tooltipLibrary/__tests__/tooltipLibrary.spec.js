import { Tooltip } from '../tooltipLibrary';

const MOBILE_MODE = true;
const ALIGN = {
  horizontal: 'center for test',
  vertical: 'bottom for test'
};

class MockElement {
  listeners = {};

  setAttribute(name, value) {
    this[name] = value;
  }

  getAttribute(name) {
    return this[name];
  }

  addEventListener(listener, handler) {
    if (!this.listeners[listener]) {
      this.listeners[listener] = [];
    }
    this.listeners[listener].push(handler);
  }

  getBoundingClientRect() {
    return {
      width: 32,
      height: 32,
      left: 100,
      x: 100,
      top: 50,
      y: 50,
      right: 132,
      bottom: 82
    };
  }
}

function createMockElement(id) {
  const el = new MockElement();
  el.id = id;
  return el;
}

function createMockAutoPosition() {
  return {
    start: jest.fn(() => {
      return Promise.resolve().then(() => {
        return {
          config: {
            align: ALIGN
          }
        };
      });
    }),
    stop: jest.fn()
  };
}

function createTooltip(value, config, isMobile) {
  const root = createMockElement('root');
  const target = createMockElement('target');
  const tooltipConfig = {
    root,
    target: () => target
  };

  if (config) {
    tooltipConfig.element = config.element ? () => config.element : undefined;
    tooltipConfig.type = config.type ? config.type : undefined;
  }
  Tooltip.isMobile = jest.fn(() => !!isMobile);
  const tooltip = new Tooltip(value, tooltipConfig);
  tooltip.initialize();
  tooltip._autoPosition = createMockAutoPosition();
  return tooltip;
}

function simulateDocumentTouch() {
  document.dispatchEvent(new Event('touchstart'), {
    bubbles: true,
    cancelable: true,
    composed: true
  });
}

describe('Tooltip', () => {
  describe('Initialization', () => {
    function verifyInitialState(tooltip, value, root, target, element) {
      expect(tooltip._autoPosition).toBeFalsy();
      expect(tooltip._disabled).toBe(!value);
      expect(tooltip._root).toBe(root);
      expect(tooltip._target()).toBe(target);

      if (element) {
        expect(tooltip._element()).toBe(element);
      } else {
        expect(tooltip._element).toBeTruthy();
      }

      expect(tooltip.initialized).toBe(false);
      expect(tooltip.value).toEqual(value);
      expect(tooltip.visible).toBe(false);
    }

    it('throws an error when a target for the tooltip has not been specified', () => {
      expect(() => {
        return new Tooltip('A tooltip', {
          root: {}
        });
      }).toThrow(Error);
    });

    it('is disabled after creation when the given value is empty', () => {
      const value = '';
      const root = createMockElement('root');
      const target = createMockElement('target');
      const config = {
        root,
        target: () => target
      };

      const tooltip = new Tooltip(value, config);
      verifyInitialState(tooltip, value, root, target);
    });

    it('has the correct initial state after creation using the global tooltip element', () => {
      const value = 'A tooltip';
      const root = createMockElement('root');
      const target = createMockElement('target');
      const config = {
        root,
        target: () => target
      };

      const tooltip = new Tooltip(value, config);
      verifyInitialState(tooltip, value, root, target);
    });

    it('has the correct initial state after creation using the given tooltip element', () => {
      const value = 'A tooltip';
      const root = createMockElement('root');
      const target = createMockElement('target');
      const element = createMockElement('element');
      const config = {
        root,
        target: () => target,
        element: () => element
      };

      const tooltip = new Tooltip(value, config);
      verifyInitialState(tooltip, value, root, target, element);
    });

    it('links the target to the tooltip element via aria-describedby', () => {
      const tooltip = createTooltip('A tooltip');

      const expectedAriaDescribedBy = tooltip._element().contentId;
      expect(tooltip._target().getAttribute('aria-describedby')).toEqual(
        expectedAriaDescribedBy
      );

      expect(tooltip.initialized).toBe(true);
    });

    it('adds appropriate listeners for an info type tooltip to the target', () => {
      const tooltip = createTooltip('A tooltip');

      const expectedListeners = [
        'mouseenter',
        'mouseleave',
        'focus',
        'blur',
        'click',
        'keydown'
      ];

      const hasExpectedListeners = expectedListeners.every(current => {
        const handlers = tooltip._target().listeners[current];
        return handlers && handlers.length === 1;
      });
      expect(hasExpectedListeners).toBe(true);
    });

    it('adds appropriate listeners for a toggle type tooltip to the target', () => {
      const tooltip = createTooltip('A tooltip', { type: 'toggle' });
      const expectedListeners = ['mouseenter', 'mouseleave', 'focus', 'blur'];

      const hasExpectedListeners = expectedListeners.every(current => {
        const handlers = tooltip._target().listeners[current];
        return handlers && handlers.length === 1;
      });
      expect(hasExpectedListeners).toBe(true);
    });

    describe('Mobile', () => {
      let tooltip;

      beforeEach(() => {
        tooltip = createTooltip('A tooltip', { type: 'toggle' }, MOBILE_MODE);
      });

      it('adds appropriate listeners for a toggle type tooltip to the target for mobile', () => {
        const expectedListeners = ['touchstart'];
        const hasExpectedListeners = expectedListeners.every(current => {
          const handlers = tooltip._target().listeners[current];
          return handlers && handlers.length === 1;
        });

        expect(hasExpectedListeners).toBe(true);
      });

      it('does not add touchstart listener upon init', () => {
        tooltip.handleDocumentTouch = jest.fn();
        tooltip.attach();
        simulateDocumentTouch();
        expect(tooltip.handleDocumentTouch).not.toBeCalled();
      });

      it('adds touchstart listener to document when tooltip is shown', () => {
        tooltip.handleDocumentTouch = jest.fn();
        tooltip.attach();
        tooltip.show();
        simulateDocumentTouch();
        expect(tooltip.handleDocumentTouch).toBeCalled();
      });

      it('removes touchstart listener from document when tooltip is hidden', () => {
        tooltip.handleDocumentTouch = jest.fn();
        tooltip.attach();
        tooltip.show();
        tooltip.hide();
        simulateDocumentTouch();
        expect(tooltip.handleDocumentTouch).not.toBeCalled();
      });
    });
  });

  describe('Toggle Visibility and Auto Positioning', () => {
    let element, tooltip;
    beforeEach(() => {
      element = createMockElement('element');
      tooltip = createTooltip('A tooltip', { element });
    });

    it('shows the tooltip when it is enabled', () => {
      tooltip.attach();
      const spy = jest.spyOn(tooltip, 'startPositioning');

      tooltip.show();
      expect(tooltip.visible).toBe(true);
      expect(element.content).toEqual(tooltip.value);
      expect(spy).toHaveBeenCalled();
      return Promise.resolve()
        .then(() => {})
        .then(() => {
          expect(element.align).toMatchObject(ALIGN);
          expect(element.visible).toBe(true);
        });
    });

    it('does not show the tooltip when it is disabled', () => {
      tooltip.detach();
      const spy = jest.spyOn(tooltip, 'startPositioning');

      tooltip.show();
      expect(tooltip.visible).toBe(false);
      expect(spy).not.toHaveBeenCalled();
    });

    it('hides the tooltip when it is visible', () => {
      tooltip.attach();
      tooltip.show();
      const spy = jest.spyOn(tooltip, 'stopPositioning');

      tooltip.hide();
      expect(tooltip.visible).toBe(false);
      expect(spy).toHaveBeenCalled();
    });

    it('starts auto positioning of the tooltip', () => {
      const spy = jest.spyOn(tooltip._autoPosition, 'start');
      tooltip.startPositioning();
      expect(spy).toHaveBeenCalled();
    });

    it('stops auto positioning of the tooltip', () => {
      const spy = jest.spyOn(tooltip._autoPosition, 'stop');
      tooltip.stopPositioning();
      expect(spy).toHaveBeenCalled();
    });
  });
});
