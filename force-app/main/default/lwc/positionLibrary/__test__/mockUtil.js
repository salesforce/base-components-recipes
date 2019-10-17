import { WindowManager } from '../util';

export class MockElement {
  style = {};
  constructor(dims, offsetParent, computedStyle) {
    const dimensions = dims || {
      top: 2,
      left: 2,
      right: 2,
      bottom: 2,
      width: 2,
      height: 2
    };

    if (computedStyle) {
      this.computedStyle = computedStyle;
    } else {
      this.computedStyle = {
        top: 'auto',
        left: 'auto'
      };
    }

    this.offsetParent = offsetParent || null;
    this.offsetLeft = dimensions.left;
    this.offsetTop = dimensions.top;
    this._dimensions = dimensions;
  }

  setAttribute(name, value) {
    this[name] = value;
  }

  getAttribute(name) {
    return this[name];
  }

  set dimensions(dims) {
    this._dimensions = dims;
  }

  getBoundingClientRect() {
    return this._dimensions;
  }
}

export function getMockElement(clientBoundingRect) {
  const mockElement = {};

  Object.keys(clientBoundingRect).forEach(key => {
    mockElement[key] = clientBoundingRect[key];
  });

  mockElement.setDirection = function(key, value) {
    this[key] = value;
  };

  mockElement.refresh = function() {};

  return mockElement;
}
class MockMutationObserver {
  observe() {}
}

const MockWindow = new MockElement({
  top: 2,
  left: 2,
  right: 2,
  bottom: 2,
  width: 2,
  height: 2
});

MockWindow.scrollX = 0;
MockWindow.scrollY = 0;
MockWindow.getComputedStyle = e => {
  return e.computedStyle;
};
MockWindow.MutationObserver = MockMutationObserver;

export function mockWindow(mock) {
  mock = mock || MockWindow;
  WindowManager.mockWindow(mock);
}
