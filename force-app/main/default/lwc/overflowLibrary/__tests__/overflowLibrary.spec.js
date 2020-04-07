/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { calculateOverflow } from 'c/overflowLibrary';

describe('overflow-library', () => {
    it('has empty overflow if all items fit, disregarding the overflow width', () => {
        const items = [
            { value: '1', width: 50 },
            { value: '2', width: 70 },
            { value: '3', width: 40 }
        ];

        const result = calculateOverflow({
            items,
            activeItem: items[1],
            containerWidth: 161,
            overflowWidth: 100
        });

        expect(result.visibleItems).toEqual(items);
        expect(result.overflowItems).toEqual([]);
    });
    it('has an overflow when an inactive item does not fit', () => {
        const items = [
            { value: '1', width: 50 },
            { value: '2', width: 70 },
            { value: '3', width: 100 }
        ];

        const result = calculateOverflow({
            items,
            activeItem: items[1],
            containerWidth: 171,
            overflowWidth: 50
        });

        expect(result.visibleItems).toEqual([items[0], items[1]]);
        expect(result.overflowItems).toEqual([items[2]]);
    });
    it('keeps the active item visible when it would not fit with preceding items', () => {
        const items = [
            { value: '1', width: 50 },
            { value: '2', width: 70 },
            { value: '3', width: 100 }
        ];

        const result = calculateOverflow({
            items,
            activeItem: items[2],
            containerWidth: 171,
            overflowWidth: 50
        });

        expect(result.visibleItems).toEqual([items[2]]);
        expect(result.overflowItems).toEqual([items[0], items[1]]);
    });
    it('counts the width of the overflow', () => {
        const items = [
            { value: '1', width: 50 },
            { value: '2', width: 70 },
            { value: '3', width: 60 }
        ];

        const result = calculateOverflow({
            items,
            activeItem: items[0],
            containerWidth: 120,
            overflowWidth: 50
        });

        expect(result.visibleItems).toEqual([items[0]]);
        expect(result.overflowItems).toEqual([items[1], items[2]]);
    });
    it('returns all items as visible if container width is zero', () => {
        const items = [
            { value: '1', width: 50 },
            { value: '2', width: 70 }
        ];

        const result = calculateOverflow({
            items,
            activeItem: items[0],
            containerWidth: 0,
            overflowWidth: 0
        });

        expect(result.visibleItems).toEqual(items);
        expect(result.overflowItems).toEqual([]);
    });
});
