/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import {
    normalizeFlexibility,
    normalizePadding,
    validateSize,
    computeLayoutClass,
    STYLE_ERROR,
    normalizeSize,
    normalizeDirection
} from '../styleUtils';

describe('normalizeFlexibility', () => {
    it('should keep valid options', () => {
        let actual = normalizeFlexibility([
            'auto',
            'shrink',
            'no-shrink',
            'grow',
            'no-grow'
        ]);

        expect(actual).toEqual([
            'auto',
            'shrink',
            'no-shrink',
            'grow',
            'no-grow'
        ]);

        actual = normalizeFlexibility(['auto', 'shrink', 'no-shrink']);
        expect(actual).toEqual(['auto', 'shrink', 'no-shrink']);
    });

    it('should remove invalid options', () => {
        const actual = normalizeFlexibility([
            'auto',
            'shrink',
            'no-shrink',
            'grow',
            'no-grow',
            '122233'
        ]);

        expect(actual).toEqual([
            'auto',
            'shrink',
            'no-shrink',
            'grow',
            'no-grow'
        ]);
    });

    it('should throw error if has conflict', () => {
        const options = [
            'auto',
            'shrink',
            'no-shrink',
            'grow',
            'no-grow',
            'no-flex'
        ];

        expect(() => normalizeFlexibility(options)).toThrow(
            STYLE_ERROR.FLEX_CONFLICT
        );
    });
});

describe('normalizePadding', () => {
    it('should return fallback, if invalid', () => {
        expect(normalizePadding('auto')).toBe(' ');
    });
    it('should normalize padding', () => {
        expect(normalizePadding('Around-large')).toBe('around-large');
    });
});

describe('normalizeSize', () => {
    it('should parse and return size value as integer', () => {
        expect(normalizeSize('11')).toBe(11);
        expect(normalizeSize('11a')).toBe(11);
        expect(normalizeSize('11.11')).toBe(11);
        expect(normalizeSize('11.91')).toBe(12);
    });

    it('should return null if not integer value', () => {
        expect(normalizeSize('auto')).toBe(null);
        expect(normalizeSize('a11')).toBe(null);
        expect(normalizeSize([])).toBe(null);
        expect(normalizeSize(() => {})).toBe(null);
    });
});

describe('computeLayoutClass', () => {
    it('should compute layout class', () => {
        const layoutSize = {
            default: 7,
            small: 3,
            medium: 4,
            large: 12
        };

        const flexibility = ['auto', 'shrink'];
        const padding = 'horizontal-small';
        expect(
            computeLayoutClass(
                layoutSize,
                flexibility,
                padding,
                'left'
            ).toString()
        ).toBe(
            'slds-p-right_small slds-p-left_small slds-col slds-shrink slds-size_7-of-12 slds-small-size_3-of-12 slds-medium-size_4-of-12 slds-large-size_12-of-12 slds-col_bump-left'
        );
    });
    it('should  compute layout class without large', () => {
        const layoutSize = {
            default: 7,
            small: 3,
            medium: 4
        };

        const flexibility = ['auto', 'shrink'];
        const padding = 'horizontal-medium';
        expect(
            computeLayoutClass(layoutSize, flexibility, padding).toString()
        ).toBe(
            'slds-p-right_medium slds-p-left_medium slds-col slds-shrink slds-size_7-of-12 slds-small-size_3-of-12 slds-medium-size_4-of-12'
        );
    });

    it('should  compute layout class without medium and large', () => {
        const layoutSize = {
            default: 7,
            small: 3
        };

        const flexibility = ['auto', 'shrink'];
        const padding = 'horizontal-large';
        expect(
            computeLayoutClass(layoutSize, flexibility, padding).toString()
        ).toBe(
            'slds-p-right_large slds-p-left_large slds-col slds-shrink slds-size_7-of-12 slds-small-size_3-of-12'
        );
    });

    it('should  compute layout class without small, medium and large', () => {
        const layoutSize = {
            default: 7
        };

        const flexibility = ['auto', 'shrink', 'no-grow'];
        const padding = 'around-small';
        expect(
            computeLayoutClass(layoutSize, flexibility, padding).toString()
        ).toBe(
            'slds-p-around_small slds-col slds-shrink slds-grow-none slds-size_7-of-12'
        );
    });

    it('should compute layout class when missing flexibility', () => {
        const layoutSize = {
            default: 7
        };

        const padding = 'around-small';
        expect(computeLayoutClass(layoutSize, null, padding).toString()).toBe(
            'slds-p-around_small slds-size_7-of-12'
        );
    });
    it('should compute layout class when missing flexibility and padding', () => {
        const layoutSize = {
            default: 7
        };

        expect(computeLayoutClass(layoutSize).toString()).toBe(
            'slds-size_7-of-12'
        );
    });
    it('should compute layout class missing all params', () => {
        expect(computeLayoutClass().toString()).toBe('');
    });
});

describe('validateSize', () => {
    it('should not throw if size is in 1..12', () => {
        expect(validateSize(1, null, null, null)).toBeTruthy();
        expect(validateSize(12, null, null, null)).toBeTruthy();
        expect(validateSize(11, null, null, null)).toBeTruthy();
        expect(validateSize(6, null, null, null)).toBeTruthy();
    });

    it('should not throw if smallDeviceSize is in 1..12', () => {
        expect(validateSize(1, 1, null, null)).toBeTruthy();
        expect(validateSize(1, 12, null, null)).toBeTruthy();
        expect(validateSize(1, 11, null, null)).toBeTruthy();
        expect(validateSize(6, 6, null, null)).toBeTruthy();
    });

    it('should not throw if mediumDeviceSize is in 1..12', () => {
        expect(validateSize(1, null, 1, null)).toBeTruthy();
        expect(validateSize(1, null, 12, null)).toBeTruthy();
        expect(validateSize(1, null, 11, null)).toBeTruthy();
        expect(validateSize(6, null, 6, null)).toBeTruthy();
    });

    it('should not throw if largeDeviceSize is in 1..12', () => {
        expect(validateSize(1, null, null, 1)).toBeTruthy();
        expect(validateSize(1, null, null, 12)).toBeTruthy();
        expect(validateSize(1, null, null, 11)).toBeTruthy();
        expect(validateSize(6, null, null, 6)).toBeTruthy();
    });

    it('should throw error if size is not in 1..12', () => {
        expect(() => {
            validateSize(100, null, null, null);
        }).toThrow(STYLE_ERROR.SIZE_RANGE);
        expect(() => {
            validateSize(0, null, null, null);
        }).toThrow(STYLE_ERROR.SIZE_RANGE);
        expect(() => {
            validateSize(13, null, null, null);
        }).toThrow(STYLE_ERROR.SIZE_RANGE);
    });

    it('should throw error if smallDeviceSize is not in 1..12', () => {
        expect(() => {
            validateSize(12, 100, null, null);
        }).toThrow(STYLE_ERROR.SMALL_SIZE_RANGE);
    });

    it('should throw error if mediumDeviceSize is not in 1..12', () => {
        expect(() => {
            validateSize(12, null, 100, null);
        }).toThrow(STYLE_ERROR.MEDIUM_SIZE_RANGE);
    });

    it('should throw error if largeDeviceSize is not in 1..12', () => {
        expect(() => {
            validateSize(12, null, null, 100);
        }).toThrow(STYLE_ERROR.LARGE_SIZE_RANGE);
    });

    it('should throw error if size is not specified', () => {
        expect(() => {
            validateSize(null, null, null, 12);
        }).toThrow(STYLE_ERROR.SIZE_REQUIRED);
        expect(() => {
            validateSize(null, 12, null, 12);
        }).toThrow(STYLE_ERROR.SIZE_REQUIRED);
        expect(() => {
            validateSize(null, null, 12, null);
        }).toThrow(STYLE_ERROR.SIZE_REQUIRED);
    });
});

describe('normalizeDirection', () => {
    it('should keep lowercase', () => {
        expect(normalizeDirection('Left')).toBe('left');
        expect(normalizeDirection('rigHT')).toBe('right');
    });

    it('should use fallback', () => {
        expect(normalizeDirection('ALeft', 'default')).toBe('default');
    });
});
