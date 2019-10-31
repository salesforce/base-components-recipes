/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

export { Direction } from './direction';
import { Constraint } from './constraint';
import {
    checkFlipPossibility,
    Direction,
    flipDirection,
    mapToHorizontal,
    mapToVertical,
    normalizeDirection
} from './direction';
import { createProxy } from './elementProxyCache';
import {
    containsScrollingElement,
    getPositionTarget,
    getScrollableParent,
    isDomNode,
    isInsideModal,
    normalizeElement,
    normalizePosition,
    queryScrollableChildren,
    requestAnimationFrameAsPromise,
    WindowManager
} from './util';
import {
    addConstraints,
    bindEvents,
    nextIndex,
    reposition,
    scheduleReposition
} from './reposition';
import { assert } from 'c/utilsPrivate';
import { Relationship } from './relationship';

const DEFAULT_MIN_HEIGHT = '1.875rem';

function setupObserver(config, scrollableParent) {
    let proxyWheelEvents = true;

    const observedElement = config.element;

    if (WindowManager.MutationObserver && !observedElement.isObserved) {
        let scrollableChildren = queryScrollableChildren(observedElement);
        const observer = new WindowManager.MutationObserver(() => {
            scrollableChildren = queryScrollableChildren(observedElement);
            proxyWheelEvents = !containsScrollingElement(scrollableChildren);
        });

        if (containsScrollingElement(scrollableChildren)) {
            proxyWheelEvents = false;
        }

        observer.observe(observedElement, {
            attributes: true,
            subtree: true,
            childList: true
        });

        observedElement.isObserved = true;
    }

    if (scrollableParent) {
        scrollableParent.addEventListener('scroll', scheduleReposition);

        const wheelCallback = e => {
            if (
                proxyWheelEvents &&
                scrollableParent &&
                typeof scrollableParent.scrollTop !== 'undefined'
            ) {
                scrollableParent.scrollTop += e.deltaY;
            }
        };
        observedElement.addEventListener('wheel', wheelCallback);

        config.removeListeners = () => {
            scrollableParent.removeEventListener('scroll', scheduleReposition);
            observedElement.removeEventListener('wheel', wheelCallback);
        };
    }
}

function validateConfig(config) {
    assert(
        config.element && isDomNode(config.element),
        'Element is undefined or missing, or not a Dom Node'
    );

    assert(
        config.target &&
            (WindowManager.isWindow(config.target) || isDomNode(config.target)),
        'Target is undefined or missing'
    );
}

function createRelationship(config) {
    bindEvents();

    if (config.alignWidth && config.element.style.position === 'fixed') {
        config.element.style.width =
            config.target.getBoundingClientRect().width + 'px';
    }

    const constraintList = [];
    const scrollableParent = getScrollableParent(
        getPositionTarget(config.target),
        WindowManager.window
    );

    setupObserver(config, scrollableParent);

    if (config.appendToBody) {
        document.body.appendChild(config.element);
    }

    config.element = createProxy(config.element);
    config.target = createProxy(config.target);

    const horizontalConfig = Object.assign({}, config);
    if (horizontalConfig.padLeft !== undefined) {
        horizontalConfig.pad = horizontalConfig.padLeft;
    }

    const verticalConfig = Object.assign({}, config);
    if (verticalConfig.padTop !== undefined) {
        verticalConfig.pad = verticalConfig.padTop;
    }

    constraintList.push(
        new Constraint(
            mapToHorizontal(config.align.horizontal),
            horizontalConfig
        )
    );

    constraintList.push(
        new Constraint(mapToVertical(config.align.vertical), verticalConfig)
    );

    const autoShrink = config.autoShrink.height || config.autoShrink.width;
    if (config.scrollableParentBound && scrollableParent) {
        const parent = normalizeElement(scrollableParent);
        const boxConfig = {
            element: config.element,
            enabled: config.enabled,
            target: createProxy(parent),
            align: {},
            targetAlign: {},
            pad: 3,
            boxDirections: {
                top: true,
                bottom: true,
                left: true,
                right: true
            }
        };

        if (autoShrink) {
            const style = boxConfig.element.getNode().style;
            if (!style.minHeight) {
                style.minHeight = config.minHeight;
                boxConfig.element._removeMinHeight = true;
            }

            boxConfig.boxDirections = {
                top: !!config.autoShrink.height,
                bottom: !!config.autoShrink.height,
                left: !!config.autoShrink.width,
                right: !!config.autoShrink.width
            };

            constraintList.push(new Constraint('shrinking box', boxConfig));
        } else {
            constraintList.push(new Constraint('bounding box', boxConfig));
        }
    }

    addConstraints(constraintList);
    reposition();

    return new Relationship(config, constraintList, scrollableParent);
}

function isAutoFlipHorizontal(config) {
    return config.autoFlip || config.autoFlipHorizontal;
}

function isAutoFlipVertical(config) {
    return config.autoFlip || config.autoFlipVertical;
}

function normalizeAlignments(config, flipConfig) {
    const align = {
        horizontal: config.align.horizontal,
        vertical: config.align.vertical
    };

    const targetAlign = {
        horizontal: config.targetAlign.horizontal,
        vertical: config.targetAlign.vertical
    };

    if (document.dir === 'rtl') {
        align.horizontal = flipDirection(align.horizontal);
        targetAlign.horizontal = flipDirection(targetAlign.horizontal);
    }

    let vFlip = false;
    if (isAutoFlipVertical(config)) {
        if (align.vertical === Direction.Bottom) {
            vFlip = !flipConfig.hasSpaceAbove && flipConfig.hasSpaceBelow;
        } else if (align.vertical === Direction.Top) {
            vFlip = flipConfig.hasSpaceAbove && !flipConfig.hasSpaceBelow;
        } else if (align.vertical === Direction.Center) {
            if (
                flipConfig.centerOverflow.top &&
                !flipConfig.centerOverflow.bottom
            ) {
                align.vertical = targetAlign.vertical = Direction.Top;
            } else if (
                flipConfig.centerOverflow.bottom &&
                !flipConfig.centerOverflow.top
            ) {
                align.vertical = targetAlign.vertical = Direction.Bottom;
            }
        }
    }

    let hFlip = false;
    if (isAutoFlipHorizontal(config)) {
        if (align.horizontal === Direction.Left) {
            hFlip = flipConfig.shouldAlignToRight;
        } else if (align.horizontal === Direction.Right) {
            hFlip = flipConfig.shouldAlignToLeft;
        } else if (align.horizontal === Direction.Center) {
            if (
                flipConfig.centerOverflow.left &&
                !flipConfig.centerOverflow.right
            ) {
                align.horizontal = targetAlign.horizontal = Direction.Left;
            } else if (
                flipConfig.centerOverflow.right &&
                !flipConfig.centerOverflow.left
            ) {
                align.horizontal = targetAlign.horizontal = Direction.Right;
            }
        }
    }

    return {
        align: {
            horizontal: hFlip
                ? flipDirection(align.horizontal)
                : normalizeDirection(align.horizontal, Direction.Left),
            vertical: vFlip
                ? flipDirection(align.vertical)
                : normalizeDirection(align.vertical, Direction.Top)
        },

        targetAlign: {
            horizontal: hFlip
                ? flipDirection(targetAlign.horizontal)
                : normalizeDirection(targetAlign.horizontal, Direction.Left),
            vertical: vFlip
                ? flipDirection(targetAlign.vertical)
                : normalizeDirection(targetAlign.vertical, Direction.Bottom)
        }
    };
}

function normalizeConfig(config) {
    config.align = config.align || {};
    config.targetAlign = config.targetAlign || {};
    config.isInsideModal = isInsideModal(config.element);

    const flipConfig = checkFlipPossibility(
        config.element,
        config.target,
        config.leftAsBoundary
    );

    const { align, targetAlign } = normalizeAlignments(config, flipConfig);

    if (
        config.isInsideModal &&
        !flipConfig.hasSpaceAbove &&
        !flipConfig.hasSpaceBelow
    ) {
        config.scrollableParentBound = true;
    }

    return {
        target: config.target,
        element: config.element,
        align,
        targetAlign,
        alignWidth: config.alignWidth,
        scrollableParentBound: config.scrollableParentBound,
        pad: config.pad,
        padTop: config.padTop,
        padLeft: config.padLeft,
        autoShrink: {
            height: config.autoShrink || config.autoShrinkHeight,
            width: config.autoShrink || config.autoShrinkWidth
        },

        minHeight: config.minHeight || DEFAULT_MIN_HEIGHT
    };
}

function toElement(root, target) {
    if (target && typeof target === 'string') {
        return root.querySelector(target);
    } else if (target && typeof target === 'function') {
        return target();
    }
    return target;
}

export function startPositioning(root, config) {
    assert(root, 'Root is undefined or missing');
    assert(config, 'Config is undefined or missing');
    const node = normalizeElement(root);
    const target = toElement(node, config.target);
    const element = toElement(node, config.element);

    if (!target || !element) {
        return null;
    }

    config.target = normalizeElement(target);
    config.element = normalizeElement(element);

    config.element = normalizePosition(
        config.element,
        nextIndex(),
        config.target,
        config.alignWidth
    );

    validateConfig(config);
    return createRelationship(normalizeConfig(config));
}

export function stopPositioning(relationship) {
    if (relationship) {
        relationship.destroy();
    }
}

export class AutoPosition {
    _autoPositionUpdater = null;

    constructor(root) {
        this._root = root;
    }

    start(config) {
        return requestAnimationFrameAsPromise().then(() => {
            let promise = Promise.resolve();
            if (!this._autoPositionUpdater) {
                this._autoPositionUpdater = startPositioning(
                    this._root,
                    config
                );
            } else {
                promise = promise.then(() => {
                    return this._autoPositionUpdater.reposition();
                });
            }

            return promise.then(() => {
                return this._autoPositionUpdater;
            });
        });
    }

    stop() {
        if (this._autoPositionUpdater) {
            stopPositioning(this._autoPositionUpdater);
            this._autoPositionUpdater = null;
        }
        return Promise.resolve();
    }
}