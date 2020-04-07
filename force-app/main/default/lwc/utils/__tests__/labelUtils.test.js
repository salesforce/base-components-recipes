/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { formatLabel } from '../labelUtils';

describe('labelUtils', () => {
    describe('#formatLabel', () => {
        it('should return a fully formatted string', () => {
            expect(formatLabel('Hello, {0}', 'Hal')).toEqual('Hello, Hal');
        });

        it('should return a formatted string with multiple placeholders', () => {
            expect(
                formatLabel('Hello, {0}. You are a {1} Lantern', 'Guy', 'Red')
            ).toEqual('Hello, Guy. You are a Red Lantern');
        });

        it('should return a formatted string with 10+ replacements', () => {
            const label =
                    'The Green Lanterns are: {0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}, and {10}',
                expected =
                    'The Green Lanterns are: Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Rayner, Simon Baz, Jessica Cruz, Jade, Vidar, Rond Vidar, and Yalan Gur';
            expect(
                formatLabel(
                    label,
                    'Alan Scott',
                    'Hal Jordan',
                    'Guy Gardner',
                    'John Stewart',
                    'Kyle Rayner',
                    'Simon Baz',
                    'Jessica Cruz',
                    'Jade',
                    'Vidar',
                    'Rond Vidar',
                    'Yalan Gur'
                )
            ).toEqual(expected);
        });

        it('should return a formatted string when given an array', () => {
            const label =
                    'The Green Lanterns are: {0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}, and {10}',
                args = [
                    'Alan Scott',
                    'Hal Jordan',
                    'Guy Gardner',
                    'John Stewart',
                    'Kyle Rayner',
                    'Simon Baz',
                    'Jessica Cruz',
                    'Jade',
                    'Vidar',
                    'Rond Vidar',
                    'Yalan Gur'
                ],
                expected =
                    'The Green Lanterns are: Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Rayner, Simon Baz, Jessica Cruz, Jade, Vidar, Rond Vidar, and Yalan Gur';
            expect(formatLabel(label, args)).toEqual(expected);
        });

        it('should return a string with placeholders when not enough parameters are given', () => {
            const str = '{0} Lanterns are {1} than Red ones',
                expected = 'Green Lanterns are undefined than Red ones';
            expect(formatLabel(str, 'Green')).toEqual(expected);
        });

        it('should replace all instances of the same placeholder', () => {
            const str = '{0} is such a {0}',
                expected = 'Guy is such a Guy';
            expect(formatLabel(str, 'Guy')).toEqual(expected);
        });
    });
});
