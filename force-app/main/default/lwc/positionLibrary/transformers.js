/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

class Transformer {
    constructor(pad, boxDirections, transformX, transformY) {
        this.pad = pad || 0;
        this.boxDirections = boxDirections || { left: true, right: true };
        this.transformX = transformX || function() {};
        this.transformY = transformY || function() {};
    }
    transform() {}
}

class TopTransformer extends Transformer {
    transform(targetBox, elementBox) {
        return {
            top:
                this.transformY(targetBox.top, targetBox, elementBox) + this.pad
        };
    }
}

class BottomTransFormer extends Transformer {
    transform(targetBox, elementBox) {
        return {
            top:
                this.transformY(targetBox.top, targetBox, elementBox) -
                elementBox.height -
                this.pad
        };
    }
}

class CenterTransformer extends Transformer {
    transform(targetBox, elementBox) {
        return {
            left: Math.floor(
                this.transformX(targetBox.left, targetBox, elementBox) -
                    0.5 * elementBox.width
            )
        };
    }
}

class MiddleTransformer extends Transformer {
    transform(targetBox, elementBox) {
        return {
            top: Math.floor(
                0.5 * (2 * targetBox.top + targetBox.height - elementBox.height)
            )
        };
    }
}

export class LeftTransformer extends Transformer {
    transform(targetBox, elementBox) {
        return {
            left:
                this.transformX(targetBox.left, targetBox, elementBox) +
                this.pad
        };
    }
}

class RightTransformer extends Transformer {
    transform(targetBox, elementBox) {
        return {
            left:
                this.transformX(targetBox.left, targetBox, elementBox) -
                elementBox.width -
                this.pad
        };
    }
}

class BelowTransformer extends Transformer {
    transform(targetBox, elementBox) {
        const top = targetBox.top + targetBox.height + this.pad;
        return elementBox.top < top ? { top } : {};
    }
}

const MIN_HEIGHT = 36;
const MIN_WIDTH = 36;
class ShrinkingBoxTransformer extends Transformer {
    transform(targetBox, elementBox) {
        const retBox = {};

        if (
            this.boxDirections.top &&
            elementBox.top < targetBox.top + this.pad
        ) {
            retBox.top = targetBox.top + this.pad;
            retBox.height = Math.max(
                elementBox.height - (retBox.top - elementBox.top),
                MIN_HEIGHT
            );
        }

        if (
            this.boxDirections.left &&
            elementBox.left < targetBox.left + this.pad
        ) {
            retBox.left = targetBox.left + this.pad;
            retBox.width = Math.max(
                elementBox.width - (retBox.left - elementBox.left),
                MIN_WIDTH
            );
        }

        if (
            this.boxDirections.right &&
            elementBox.left + elementBox.width >
                targetBox.left + targetBox.width - this.pad
        ) {
            retBox.right = targetBox.left + targetBox.width - this.pad;
            retBox.width = Math.max(
                retBox.right - (retBox.left || elementBox.left),
                MIN_WIDTH
            );
        }

        if (
            this.boxDirections.bottom &&
            elementBox.top + elementBox.height >
                targetBox.top + targetBox.height - this.pad
        ) {
            retBox.bottom = targetBox.top + targetBox.height - this.pad;
            retBox.height = Math.max(
                retBox.bottom - (retBox.top || elementBox.top),
                MIN_HEIGHT
            );
        }

        return retBox;
    }
}

class BoundingBoxTransformer extends Transformer {
    transform(targetBox, elementBox) {
        const retBox = {};

        if (
            this.boxDirections.top &&
            elementBox.top < targetBox.top + this.pad
        ) {
            retBox.top = targetBox.top + this.pad;
        }

        if (
            this.boxDirections.left &&
            elementBox.left < targetBox.left + this.pad
        ) {
            retBox.left = targetBox.left + this.pad;
        }

        if (
            this.boxDirections.right &&
            elementBox.left + elementBox.width >
                targetBox.left + targetBox.width - this.pad
        ) {
            retBox.left =
                targetBox.left + targetBox.width - elementBox.width - this.pad;
        }

        if (
            this.boxDirections.bottom &&
            elementBox.top + elementBox.height >
                targetBox.top + targetBox.height - this.pad
        ) {
            retBox.top =
                targetBox.top + targetBox.height - elementBox.height - this.pad;
        }

        return retBox;
    }
}

class InverseBoundingBoxTransformer extends Transformer {
    transform(targetBox, elementBox) {
        const retBox = {};

        if (
            this.boxDirections.left &&
            targetBox.left - this.pad < elementBox.left
        ) {
            retBox.left = targetBox.left - this.pad;
        }

        if (
            this.boxDirections.right &&
            elementBox.left + elementBox.width <
                targetBox.left + targetBox.width + this.pad
        ) {
            retBox.left =
                targetBox.width + this.pad - elementBox.width + targetBox.left;
        }

        if (
            this.boxDirections.top &&
            targetBox.top < elementBox.top + this.pad
        ) {
            retBox.top = targetBox.top - this.pad;
        }

        if (
            this.boxDirections.bottom &&
            elementBox.top + elementBox.height <
                targetBox.top + targetBox.height + this.pad
        ) {
            retBox.top =
                targetBox.height + this.pad - elementBox.height + targetBox.top;
        }

        return retBox;
    }
}

const TransformFunctions = {
    center(input, targetBox) {
        return Math.floor(input + 0.5 * targetBox.width);
    },
    right(input, targetBox) {
        return input + targetBox.width;
    },
    left(input) {
        return input;
    },
    bottom(input, targetBox) {
        return input + targetBox.height;
    }
};

export const Transformers = {
    top: TopTransformer,
    bottom: BottomTransFormer,
    center: CenterTransformer,
    middle: MiddleTransformer,
    left: LeftTransformer,
    right: RightTransformer,
    below: BelowTransformer,
    'bounding box': BoundingBoxTransformer,
    'shrinking box': ShrinkingBoxTransformer,
    'inverse bounding box': InverseBoundingBoxTransformer,
    default: Transformer
};

export function toTransformFunctions(value) {
    return TransformFunctions[value] || TransformFunctions.left;
}