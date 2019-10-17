import { reposition } from './reposition';
import { POSITION_ATTR_NAME } from './util';

export class Relationship {
  constructor(config, constraintList, scrollableParent) {
    this.config = config;
    this.constraintList = constraintList;
    this.scrollableParent = scrollableParent;
  }
  disable() {
    this.constraintList.forEach(constraintToDisable => {
      constraintToDisable.detach();
    });
  }

  enable() {
    this.constraintList.forEach(constraintToEnable => {
      constraintToEnable.attach();
    });
  }

  destroy() {
    if (this.config.removeListeners) {
      this.config.removeListeners();
      this.config.removeListeners = undefined;
    }

    while (this.constraintList.length > 0) {
      this.constraintList.pop().destroy();
    }

    if (this.config.appendToBody && this.config.element) {
      const nodeToRemove = document.querySelector(
        `[${POSITION_ATTR_NAME}="${this.config.element.getAttribute(
          POSITION_ATTR_NAME
        )}"]`
      );

      if (nodeToRemove) {
        nodeToRemove.parentNode.removeChild(nodeToRemove);
      }
    }
  }

  reposition() {
    return new Promise(resolve => {
      reposition(() => {
        resolve();
      });
    });
  }
}
