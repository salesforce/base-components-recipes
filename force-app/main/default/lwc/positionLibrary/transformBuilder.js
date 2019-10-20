import { Transformers, toTransformFunctions } from './transformers';
import { Direction } from './direction';

export class TransformBuilder {
    type(value) {
        this._type = value;
        return this;
    }

    align(horizontal, vertical) {
        this._transformX = toTransformFunctions(horizontal);
        this._transformY = toTransformFunctions(vertical);
        return this;
    }

    pad(value) {
        this._pad = parseInt(value, 10);
        return this;
    }

    boxDirections(value) {
        this._boxDirections = value;
        return this;
    }
    build() {
        const AConstructor = Transformers[this._type]
            ? Transformers[this._type]
            : Transformers[Direction.Default];
        return new AConstructor(
            this._pad || 0,
            this._boxDirections || {},
            this._transformX || toTransformFunctions(Direction.left),
            this._transformY || toTransformFunctions(Direction.left)
        );
    }
}
