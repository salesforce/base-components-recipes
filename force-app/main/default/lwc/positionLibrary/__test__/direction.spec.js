/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { checkFlipPossibility } from '../direction';
import { mockWindow, MockElement } from './mockUtil';

function createMockElement(id, dims, computedStyle) {
    const el = new MockElement(dims, null, computedStyle);
    el.id = id;
    el.parentNode = {
        tagName: 'div'
    };

    return el;
}

describe('c-position-library direction', () => {
    beforeEach(() => {
        mockWindow(
            new MockElement({
                top: 0,
                left: 0,
                right: 600,
                bottom: 800,
                width: 800,
                height: 600
            })
        );
    });

    it('should return whether space above and below', () => {
        const target = createMockElement('foo', {
            top: 0,
            left: 0,
            height: 200,
            width: 200
        });

        const element = createMockElement('bar', {
            top: 200,
            left: 0,
            height: 100,
            width: 100
        });

        const {
            shouldAlignToLeft,
            shouldAlignToRight,
            hasSpaceAbove,
            hasSpaceBelow
        } = checkFlipPossibility(element, target);

        expect(shouldAlignToLeft).toBe(false);
        expect(shouldAlignToRight).toBe(false);
        expect(hasSpaceAbove).toBe(false);
        expect(hasSpaceBelow).toBe(false);
    });

    it('should return that there is space above', () => {
        const target = createMockElement('foo', {
            top: 100,
            left: 100,
            height: 300,
            width: 300
        });

        const element = createMockElement('bar', {
            top: 200,
            left: 0,
            height: 100,
            width: 100
        });

        const {
            shouldAlignToLeft,
            shouldAlignToRight,
            hasSpaceAbove,
            hasSpaceBelow
        } = checkFlipPossibility(element, target);

        expect(shouldAlignToLeft).toBe(false);
        expect(shouldAlignToRight).toBe(false);
        expect(hasSpaceAbove).toBe(true);
        expect(hasSpaceBelow).toBe(false);
    });

    it('should return shouldAlignToLeft and shouldAlignToRight with true', () => {
        const target = createMockElement('foo', {
            top: 100,
            left: 200,
            right: 450,
            height: 300,
            width: 250
        });

        const element = createMockElement('bar', {
            top: 200,
            left: 0,
            height: 100,
            width: 300
        });

        const {
            shouldAlignToLeft,
            shouldAlignToRight,
            hasSpaceAbove,
            hasSpaceBelow
        } = checkFlipPossibility(element, target, true);

        expect(shouldAlignToLeft).toBe(false);
        expect(shouldAlignToRight).toBe(true);
        expect(hasSpaceAbove).toBe(true);
        expect(hasSpaceBelow).toBe(false);
    });
    it('should use viewport as boundary', () => {
        const target = createMockElement('foo', {
            top: 100,
            left: 10,
            right: 50,
            height: 300,
            width: 40
        });

        const element = createMockElement('bar', {
            top: 200,
            left: 0,
            height: 100,
            width: 300
        });

        const {
            shouldAlignToLeft,
            shouldAlignToRight,
            hasSpaceAbove,
            hasSpaceBelow
        } = checkFlipPossibility(element, target, false);

        expect(shouldAlignToLeft).toBe(false);
        expect(shouldAlignToRight).toBe(false);
        expect(hasSpaceAbove).toBe(true);
        expect(hasSpaceBelow).toBe(false);
    });
});