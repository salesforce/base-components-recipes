import { timeout, animationFrame } from 'c/utilsPrivate';

const DELAY_TIMEOUT = 200;
export class LightningResizeObserver {
    constructor(resizeCallback) {
        this._resizeObserverAvailable = typeof ResizeObserver === 'function';

        const delayedCallback = callback => {
            if (this._running) {
                return;
            }
            this._running = true;

            timeout(DELAY_TIMEOUT)
                .then(() => animationFrame())
                .then(() => {
                    callback();
                    this._running = false;
                });
        };
        this._delayedResizeCallback = delayedCallback.bind(
            this,
            resizeCallback
        );

        if (this._resizeObserverAvailable) {
            this._resizeObserver = new ResizeObserver(
                this._delayedResizeCallback
            );
        }
    }

    observe(lightningElement) {
        this._requestAnimationId = requestAnimationFrame(() => {
            if (this._resizeObserverAvailable) {
                this._resizeObserver.observe(lightningElement);
            } else if (!this._hasWindowResizeHandler) {
                window.addEventListener('resize', this._delayedResizeCallback);
                this._hasWindowResizeHandler = true;
            }
        });
    }

    disconnect() {
        if (this._resizeObserver) {
            this._resizeObserver.disconnect();
        }
        if (this._requestAnimationId) {
            cancelAnimationFrame(this._requestAnimationId);
        }
        window.removeEventListener('resize', this._delayedResizeCallback);
        this._hasWindowResizeHandler = false;
    }
}
