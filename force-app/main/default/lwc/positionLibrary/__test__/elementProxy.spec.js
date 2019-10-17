import { ElementProxy } from '../elementProxy';
import { mockWindow, MockElement } from './mockUtil';
import { WindowManager } from '../util';

function createMockElement(id, dims, computedStyle) {
  const el = new MockElement(dims, null, computedStyle);
  el.id = id;
  el.parentNode = {
    tagName: 'body'
  };

  return el;
}

describe('c-position-library ElementProxy', () => {
  beforeEach(() => {
    mockWindow();
  });

  it('should define class ElementProxy', () => {
    expect(ElementProxy).not.toBeNull();
  });

  it('should instantiation', () => {
    const expected = createMockElement('foo');
    const proxy = new ElementProxy(expected, 'foo');
    const actual = proxy.getNode();
    expect(actual).toBe(expected);
  });

  it('should instantiation with window calculated width', () => {
    const el = {
      toString() {
        return '[object Window]';
      }
    };

    WindowManager.window.dimensions = {
      top: 2,
      left: 2,
      right: 2,
      bottom: 2,
      width: 415,
      height: 2
    };

    const proxy = new ElementProxy(el, 'foo');

    expect(proxy.width).toBe(415);
  });

  it('should instantiation with window sets node as window', () => {
    const el = {
      toString() {
        return '[object Window]';
      }
    };

    const proxy = new ElementProxy(el, 'foo');

    expect(proxy.getNode()).toBe(WindowManager.window);
  });

  it('should throws if element is missing', () => {
    const el = null;
    const expected = 'Element missing';

    try {
      const proxy = new ElementProxy(el, 'foo');
      expect(proxy).toBe(null);
    } catch (e) {
      expect(e.message).toBe(expected);
    }
  });

  it('should set left', () => {
    const el = new MockElement('foo');
    const proxy = new ElementProxy(el, 'foo');

    proxy.setDirection('left', 413);

    expect(proxy.left).toBe(413);
  });

  it('should set value to make proxy dirty', () => {
    const el = createMockElement('foo');
    const proxy = new ElementProxy(el, 'foo');

    proxy.setDirection('left', 413);

    expect(proxy.isDirty()).toBe(true);
  });

  it('should parse left property', () => {
    const el = createMockElement('foo', {
      top: 0,
      left: 1,
      right: 500,
      bottom: 500,
      width: 500,
      height: 500
    });

    const proxy = new ElementProxy(el, 'bar');

    expect(proxy.left).toBe(1);
  });

  it('should refresh and reparse left property', () => {
    const el = createMockElement('foo', {
      top: 0,
      left: 1,
      right: 500,
      bottom: 500,
      width: 500,
      height: 500
    });

    const proxy = new ElementProxy(el, 'bar');

    el._dimensions.left = 25;
    proxy.refresh();

    expect(proxy.left).toBe(25);
  });

  it('should bake left ', () => {
    const el = createMockElement(
      'foo',
      {
        top: 0,
        left: 0,
        width: 20,
        height: 20
      },

      {
        left: '0px',
        top: '0px'
      }
    );

    const expected = { top: '0px', left: '314px' };

    const proxy = new ElementProxy(el, 'foo');
    proxy.setDirection('left', 314);
    proxy.bake();
    const actual = { top: el.style.top, left: el.style.left };

    expect(actual.top).toBe(expected.top);
    expect(actual.left).toBe(expected.left);
  });

  it('should recalculate height/width, when bake the size of element', () => {
    const el = createMockElement(
      'foo',
      {
        top: 0,
        left: 0,
        width: 20,
        height: 20
      },

      {
        left: '0px',
        top: '0px',
        height: '21px',
        width: '21px'
      }
    );

    el.style = { height: '21px', width: '21px' };

    const proxy = new ElementProxy(el, 'foo');
    proxy.setDirection('height', 314);
    proxy.setDirection('width', 314);
    proxy.bake();
    expect(el.style.height).toBe('314px');
    expect(el.style.width).toBe('314px');
    expect(proxy.originalHeight).toBe('21px');
    expect(proxy.originalWidth).toBe('21px');

    proxy.setDirection('height', 14);
    proxy.setDirection('width', 14);
    proxy.bake();
    expect(el.style.height).toBe('14px');
    expect(el.style.width).toBe('14px');
    expect(proxy.originalHeight).toBe('21px');
    expect(proxy.originalWidth).toBe('21px');
  });
  it('should bake top ', () => {
    const el = createMockElement(
      'foo',
      { top: 0, left: 0, width: 20, height: 20 },
      {
        top: '0px',
        left: '0px'
      }
    );

    const expected = { top: '314px', left: '0px' };

    const proxy = new ElementProxy(el, 'foo');
    proxy.setDirection('top', 314);
    proxy.bake();
    const actual = { top: el.style.top, left: el.style.left };

    expect(actual.top).toBe(expected.top);
    expect(actual.left).toBe(expected.left);
  });

  it('should bake deep in DOM ', () => {
    const body = new MockElement({
      top: 0,
      left: 0,
      width: 600,
      height: 800
    });

    const wrapper = new MockElement(
      { top: 100, left: 400, width: 600, height: 800 },
      body
    );

    const el = new MockElement(
      { top: 200, left: 800, width: 400, height: 400 },
      wrapper,
      {
        left: '400px',
        top: '100px'
      }
    );

    const expected = { left: '-380px', top: '-80px' };

    el.id = 'foo';
    const proxy = new ElementProxy(el, 'foo');
    proxy.setDirection('top', 20);
    proxy.setDirection('left', 20);
    proxy.bake();
    const actual = { left: el.style.left, top: el.style.top };

    expect(actual.top).toBe(expected.top);
    expect(actual.left).toBe(expected.left);
  });

  it('should bake and set proxy dirty to clean ', () => {
    const el = createMockElement(
      'foo',
      {
        top: 0,
        left: 0,
        width: 20,
        height: 20
      },

      {
        left: '0px',
        top: '0px'
      }
    );

    const proxy = new ElementProxy(el, 'foo');
    proxy.setDirection('left', 314);
    proxy.bake();

    expect(proxy.isDirty()).toBe(false);
  });
  it('should set restoreSize to be true when height changed', () => {
    const el = createMockElement(
      'foo',
      {
        top: 0,
        left: 0,
        width: 20,
        height: 20
      },

      {
        left: '0px',
        top: '0px'
      }
    );

    const proxy = new ElementProxy(el, 'foo');
    proxy.setDirection('height', 314);

    expect(proxy._restoreSize).toBe(true);
  });

  it('should set restoreSize to be true when width changed', () => {
    const el = createMockElement(
      'foo',
      {
        top: 0,
        left: 0,
        width: 20,
        height: 20
      },

      {
        left: '0px',
        top: '0px'
      }
    );

    const proxy = new ElementProxy(el, 'foo');
    proxy.setDirection('width', 314);

    expect(proxy._restoreSize).toBe(true);
  });
});
