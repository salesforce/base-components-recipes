import { ElementProxy } from './elementProxy';
import { timeout, WindowManager, POSITION_ATTR_NAME } from './util';
import { assert } from 'c/utilsPrivate';

class ProxyCache {
  proxyCache = {};

  get count() {
    return Object.keys(this.proxyCache).length;
  }

  releaseOrphanProxies() {
    for (const proxy in this.proxyCache) {
      if (!this.proxyCache[proxy].el.checkNodeIsInDom()) {
        this.proxyCache[proxy].el.release();
      }
    }
  }

  bakeOff() {
    for (const proxy in this.proxyCache) {
      if (this.proxyCache[proxy].el.isDirty()) {
        this.proxyCache[proxy].el.bake();
      }
    }
  }
  getReferenceCount(proxy) {
    const id = proxy.id;
    if (!id || !this.proxyCache[id]) {
      return 0;
    }
    return this.proxyCache[id].refCount;
  }

  release(proxy) {
    const proxyInstance = this.proxyCache[proxy.id];
    if (proxyInstance) {
      --proxyInstance.refCount;
    }
    if (proxyInstance && proxyInstance.refCount <= 0) {
      delete this.proxyCache[proxy.id];
    }
  }

  reset() {
    this.proxyCache = {};
  }

  create(element) {
    let key = 'window';
    if (!WindowManager.isWindow(element)) {
      key = element ? element.getAttribute(POSITION_ATTR_NAME) : null;

      assert(
        key &&
          element.nodeType &&
          (element.nodeType !== 1 || element.nodeType !== 11),
        `Element Proxy requires an element and has property ${POSITION_ATTR_NAME}`
      );
    }

    if (this.proxyCache[key]) {
      this.proxyCache[key].refCount++;
      return this.proxyCache[key].el;
    }

    const newProxy = new ElementProxy(element, key);
    newProxy.setReleaseCallback(release, newProxy);

    this.proxyCache[key] = {
      el: newProxy,
      refCount: 1
    };

    timeout(0).then(() => {
      this.releaseOrphanProxies();
    });
    return this.proxyCache[key].el;
  }
}

const elementProxyCache = new ProxyCache();

export function releaseOrphanProxies() {
  return elementProxyCache.releaseOrphanProxies();
}

export function bakeOff() {
  elementProxyCache.bakeOff();
}

export function getReferenceCount(proxy) {
  return elementProxyCache.getReferenceCount(proxy);
}

export function release(proxy) {
  return elementProxyCache.release(proxy);
}

export function reset() {
  elementProxyCache.reset();
}

export function createProxy(element) {
  return elementProxyCache.create(element);
}

export function count() {
  return elementProxyCache.count;
}
