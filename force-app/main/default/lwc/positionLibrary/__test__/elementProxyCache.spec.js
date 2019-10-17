import { createProxy, bakeOff, count, reset } from '../elementProxyCache';
import { mockWindow, MockElement } from './mockUtil';
import { POSITION_ATTR_NAME } from '../util';

function createMockElement(id, dims, computedStyle) {
  const el = new MockElement(dims, null, computedStyle);
  el.id = id;
  el.parentNode = {
    tagName: 'body'
  };

  return el;
}

describe('c-position-library Element Proxy Cache', () => {
  beforeEach(() => {
    mockWindow();
    reset();
  });

  it('should create ElementProxy for element', () => {
    const el = createMockElement('foo', null, {});
    el.nodeType = 1;
    el.setAttribute(POSITION_ATTR_NAME, 'asdasd');

    const proxy = createProxy(el);
    expect(proxy).not.toBeNull();
  });

  it('should returns same element for id', () => {
    const el = createMockElement('foo', null, {});
    el.nodeType = 1;
    el.setAttribute(POSITION_ATTR_NAME, 'asdasd');

    const first = createProxy(el);
    const second = createProxy(el);

    expect(first).toBe(second);
  });

  it('should throw exceptions for null', () => {
    const el = null;
    const expected = `Element Proxy requires an element and has property ${POSITION_ATTR_NAME}`;

    try {
      createProxy(el);
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe(expected);
    }
  });

  it('should throw exceptions for non element', () => {
    const el = createMockElement({ id: 1 });
    const expected = `Element Proxy requires an element and has property ${POSITION_ATTR_NAME}`;
    try {
      createProxy(el);
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe(expected);
    }
  });

  it('should bake one', () => {
    const mockBake = jest.fn();
    const mockIsDirty = jest.fn(() => {
      return true;
    });
    const el = createMockElement('foo', null, {});
    el.nodeType = 1;
    el.setAttribute(POSITION_ATTR_NAME, 'asdasd');

    const proxy = createProxy(el);
    proxy.bake = mockBake;
    proxy.isDirty = mockIsDirty;

    bakeOff();

    expect(mockIsDirty.mock.calls).toHaveLength(1);
    expect(mockBake.mock.calls).toHaveLength(1);
  });

  it('should bake many', () => {
    const mockBake = jest.fn();
    const mockIsDirty = jest.fn(() => {
      return true;
    });

    const el = createMockElement('foo', null, {});
    el.nodeType = 1;
    el.setAttribute(POSITION_ATTR_NAME, 'asdasd1');

    const el2 = createMockElement('foo', null, {});
    el2.nodeType = 1;
    el2[POSITION_ATTR_NAME] = 'asdasd2';

    const el3 = createMockElement('foo', null, {});
    el3.nodeType = 1;
    el3[POSITION_ATTR_NAME] = 'asdasd3';

    let proxy = createProxy(el);
    proxy.bake = mockBake;
    proxy.isDirty = mockIsDirty;
    proxy = createProxy(el2);
    proxy.bake = mockBake;
    proxy.isDirty = mockIsDirty;
    proxy = createProxy(el3);
    proxy.bake = mockBake;
    proxy.isDirty = mockIsDirty;

    bakeOff();

    expect(mockIsDirty.mock.calls).toHaveLength(3);
    expect(mockBake.mock.calls).toHaveLength(3);
  });

  it('should bake dirty proxy', () => {
    const mockBake = jest.fn();
    const mockIsDirty = jest.fn(() => {
      return true;
    });

    const el = createMockElement('foo1', null, {});
    el.nodeType = 1;
    el.setAttribute(POSITION_ATTR_NAME, 'asdasd1');

    const el2 = createMockElement('foo2', null, {});
    el2.nodeType = 1;
    el2.setAttribute(POSITION_ATTR_NAME, 'asdasd2');

    const el3 = createMockElement('foo3', null, {});
    el3.nodeType = 1;
    el3.setAttribute(POSITION_ATTR_NAME, 'asdasd3');

    let proxy = createProxy(el);
    proxy.bake = mockBake;
    proxy.isDirty = mockIsDirty;

    proxy = createProxy(el2);
    proxy.bake = mockBake;
    proxy.isDirty = () => {
      return false;
    };

    proxy = createProxy(el3);
    proxy.bake = mockBake;
    proxy.isDirty = mockIsDirty;

    bakeOff();

    expect(mockIsDirty.mock.calls).toHaveLength(2);
    expect(mockBake.mock.calls).toHaveLength(2);
  });

  it('should increase count', () => {
    const el = createMockElement('foo1', null, {});
    el.nodeType = 1;
    el.setAttribute(POSITION_ATTR_NAME, 'asdasd1');

    const el2 = createMockElement('foo2', null, {});
    el2.nodeType = 1;
    el2[POSITION_ATTR_NAME] = 'asdasd2';

    createProxy(el);
    createProxy(el2);

    expect(count()).toBe(2);
  });

  it('should eviction', () => {
    const el = createMockElement('foo1', null, {});
    el.nodeType = 1;
    el.setAttribute(POSITION_ATTR_NAME, 'asdasd1');

    const el2 = createMockElement('foo2', null, {});
    el2.nodeType = 1;
    el2[POSITION_ATTR_NAME] = 'asdasd2';

    createProxy(el).release();
    createProxy(el2).release();

    expect(count()).toBe(0);
  });
});
