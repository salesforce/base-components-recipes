import { TransformBuilder } from './transformBuilder';

export class Constraint {
    constructor(type, config) {
        const { target, element, pad, boxDirections } = config;
        const { horizontal, vertical } = config.targetAlign;
        this._element = element;
        this._targetElement = target;
        this.destroyed = false;
        this._transformer = new TransformBuilder()
            .type(type)
            .align(horizontal, vertical)
            .pad(pad)
            .boxDirections(boxDirections)
            .build();
    }

    detach() {
        this._disabled = true;
    }

    attach() {
        this._disabled = false;
    }

    computeDisplacement() {
        if (!this._disabled) {
            this._targetElement.refresh();
            this._element.refresh();
            this._pendingBox = this._transformer.transform(
                this._targetElement,
                this._element
            );
        }
        return this;
    }

    computePosition() {
        const el = this._element;
        if (!this._disabled) {
            Object.keys(this._pendingBox).forEach(key => {
                el.setDirection(key, this._pendingBox[key]);
            });
        }
        return this;
    }

    destroy() {
        this._element.release();
        this._targetElement.release();
        this._disabled = true;
        this.destroyed = true;
    }
}
