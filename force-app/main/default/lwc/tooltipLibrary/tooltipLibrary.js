import { createElement } from 'lwc';
import { AutoPosition, Direction } from 'c/positionLibrary';
import {
  assert,
  guid,
  normalizeAriaAttribute,
  normalizeString
} from 'c/utilsPrivate';
import LightningPrimitiveBubble from 'lightning/primitiveBubble';
import formFactor from '@salesforce/client/formFactor';

export { Direction } from 'c/positionLibrary';

const BUBBLE_ID = `salesforce-lightning-tooltip-bubble_${guid()}`;

function isResizeObserverSupported() {
  return window.ResizeObserver != null;
}

function buildResizeObserver(callback) {
  if (isResizeObserverSupported()) {
    return new ResizeObserver(callback);
  }
  return {
    observe() {},

    unobserve() {}
  };
}

let CACHED_BUBBLE_ELEMENT;

function getCachedBubbleElement() {
  if (!CACHED_BUBBLE_ELEMENT) {
    CACHED_BUBBLE_ELEMENT = createElement('lightning-primitive-bubble', {
      is: LightningPrimitiveBubble
    });

    CACHED_BUBBLE_ELEMENT.contentId = BUBBLE_ID;
    CACHED_BUBBLE_ELEMENT.style.position = 'absolute';
    CACHED_BUBBLE_ELEMENT.style.minWidth = '75px';
  }

  return CACHED_BUBBLE_ELEMENT;
}

const ARIA_DESCRIBEDBY = 'aria-describedby';

const NUBBIN_SIZE = 16;

const NUBBIN_OFFSET = 24;

export const TooltipType = {
  Info: 'info',
  Toggle: 'toggle'
};

export class Tooltip {
  _autoPosition = null;
  _disabled = true;
  _initialized = false;
  _visible = false;

  _config = {};

  constructor(value, config) {
    assert(config.target, 'target for tooltip is undefined or missing');

    this.value = value;

    this._root = config.root;
    this._target = config.target;

    this._config = { ...config };
    this._config.align = config.align || {};
    this._config.targetAlign = config.targetAlign || {};

    this._type = normalizeString(config.type, {
      fallbackValue: TooltipType.Info,
      validValues: Object.values(TooltipType)
    });

    this._element = config.element;
    if (!this._element) {
      this._element = getCachedBubbleElement;
      const bubbleElement = getCachedBubbleElement();
      if (bubbleElement.parentNode === null) {
        document.body.appendChild(bubbleElement);
      }
    }
    this.handleDocumentTouch = this.handleDocumentTouch.bind(this);
  }

  detach() {
    this._disabled = true;
  }

  attach() {
    this._disabled = false;
  }

  initialize() {
    const target = this._target();
    if (!this._initialized && target) {
      switch (this._type) {
        case TooltipType.Toggle:
          this.addToggleListeners();
          break;
        case TooltipType.Info:
        default:
          this.addInfoListeners();
          break;
      }

      const ariaDescribedBy = normalizeAriaAttribute([
        target.getAttribute(ARIA_DESCRIBEDBY),
        this._element().contentId
      ]);

      target.setAttribute(ARIA_DESCRIBEDBY, ariaDescribedBy);

      this._initialized = true;
    }
  }

  addInfoListeners() {
    const target = this._target();
    if (!this._initialized && target) {
      ['mouseenter', 'focus'].forEach(name =>
        target.addEventListener(name, () => this.show())
      );

      ['mouseleave', 'blur', 'click', 'keydown'].forEach(name =>
        target.addEventListener(name, event => this.hideIfNotSelfCover(event))
      );
    }
  }

  hideIfNotSelfCover(event) {
    if (event.type === 'mouseleave' && event.clientX && event.clientY) {
      try {
        const elementMouseIsOver = document.elementFromPoint
          ? document.elementFromPoint(event.clientX, event.clientY)
          : null;
        if (elementMouseIsOver === this._element()) {
          if (!isResizeObserverSupported()) {
            this.startPositioning();
          }
          return;
        }
      } catch (ex) {}
    }
    this.hide();
  }

  handleDocumentTouch() {
    if (this._visible) {
      this.hide();
    }
  }

  addToggleListeners() {
    const target = this._target();
    if (!this._initialized && target) {
      if (Tooltip.isMobile()) {
        target.addEventListener('touchstart', e => {
          e.stopPropagation();
          this.toggle();
        });
      } else {
        ['mouseenter', 'focus'].forEach(name =>
          target.addEventListener(name, () => this.show())
        );

        ['mouseleave', 'blur'].forEach(name =>
          target.addEventListener(name, event => this.hideIfNotSelfCover(event))
        );
      }
    }
  }

  get resizeObserver() {
    if (!this._resizeObserver) {
      this._resizeObserver = buildResizeObserver(() => {
        if (this._visible && this._autoPosition) {
          this.startPositioning();
        }
      });
    }
    return this._resizeObserver;
  }

  show() {
    if (this._disabled) {
      return;
    }

    this._visible = true;
    const tooltip = this._element();
    tooltip.content = this._value;

    this.startPositioning();

    if (Tooltip.isMobile()) {
      document.addEventListener('touchstart', this.handleDocumentTouch);
    }

    this.resizeObserver.observe(tooltip);
  }

  hide() {
    this._visible = false;
    const tooltip = this._element();
    tooltip.visible = this._visible;

    this.stopPositioning();

    if (Tooltip.isMobile()) {
      document.removeEventListener('touchstart', this.handleDocumentTouch);
    }

    this.resizeObserver.unobserve(tooltip);
  }

  toggle() {
    if (this._visible) {
      this.hide();
    } else {
      this.show();
    }
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
    this._disabled = !value;
  }

  get initialized() {
    return this._initialized;
  }

  get visible() {
    return this._visible;
  }

  startPositioning() {
    if (!this._autoPosition) {
      this._autoPosition = new AutoPosition(this._root);
    }

    const align = {
      horizontal: this._config.align.horizontal || Direction.Left,
      vertical: this._config.align.vertical || Direction.Bottom
    };

    const targetAlign = {
      horizontal: this._config.targetAlign.horizontal || Direction.Left,
      vertical: this._config.targetAlign.vertical || Direction.Top
    };

    const targetBox = this._target().getBoundingClientRect();
    const padLeft = targetBox.width * 0.5 - NUBBIN_OFFSET;

    this._autoPosition
      .start({
        target: this._target,
        element: this._element,
        align,
        targetAlign,
        autoFlip: true,
        padTop: NUBBIN_SIZE,
        padLeft
      })
      .then(autoPositionUpdater => {
        if (autoPositionUpdater) {
          const tooltip = this._element();
          tooltip.align = autoPositionUpdater.config.align;
          tooltip.visible = this._visible;
        }
      });
  }

  stopPositioning() {
    if (this._autoPosition) {
      this._autoPosition.stop();
    }
  }

  static isMobile() {
    return formFactor === 'Small';
  }
}
