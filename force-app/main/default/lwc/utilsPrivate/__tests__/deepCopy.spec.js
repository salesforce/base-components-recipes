/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { deepCopy } from '../utilsPrivate';

describe('deepCopy()', () => {
    it('should clone a string', () => {
        const value = 'some value';
        expect(deepCopy(value)).toEqual(value);
    });

    it('should clone a number', () => {
        const value = 1;
        expect(deepCopy(value)).toEqual(value);
    });

    it('should clone a function', () => {
        const value = function (num) {
            return num + 1;
        };
        const copy = deepCopy(value);
        expect(copy(2)).toEqual(value(2));
    });

    it('should clone an array', () => {
        const value = [1, 2, 3, 4, 5];
        const copy = deepCopy(value);
        expect(Array.isArray(copy)).toBeTruthy();
        expect(copy).toEqual(value);

        value.push(6);
        expect(copy).not.toEqual(value);
    });

    it('should clone an undefined value', () => {
        const value = undefined;
        const copy = deepCopy(value);
        expect(copy).toBeUndefined();
    });

    it('should clone a null value', () => {
        const value = null;
        const copy = deepCopy(value);
        expect(copy).toBeNull();
    });

    it('should clone an empty array', () => {
        const value = [];
        const copy = deepCopy(value);
        expect(copy).toEqual(value);

        value.push(1);
        expect(copy).not.toEqual(value);
    });

    it('should clone an empty string', () => {
        const value = '';
        const copy = deepCopy(value);
        expect(copy).toEqual(value);
    });

    it('should clone a boolean value', () => {
        const value = false;
        const copy = deepCopy(value);
        expect(copy).toEqual(value);
    });

    it('should clone a date object', () => {
        const value = new Date();
        const copy = deepCopy(value);
        expect(copy.getTime()).toEqual(value.getTime());

        value.setHours(value.getHours() - 1);
        expect(copy.getTime()).not.toEqual(value.getTime());
    });

    it('should clone a set', () => {
        const value = new Set([1, 2, 3, 4, 5]);
        const copy = deepCopy(value);
        expect(copy).toEqual(value);

        value.add(6);
        expect(copy).not.toEqual(value);
    });

    it('should clone an Error', () => {
        const value = new Error('error message');
        const copy = deepCopy(value);
        expect(copy.stackTrace).toEqual(value.stackTrace);
        expect(copy.message).toEqual(value.message);

        value.message = 'new message';
        expect(copy.message).not.toEqual(value.message);
    });

    it('should clone a simple object', () => {
        const value = {
            one: 'un',
            two: 'deux',
            three: 'trois'
        };

        const copy = deepCopy(value);
        expect(copy).toEqual(value);

        value.one = 'ein';
        expect(copy.one).not.toEqual(value.one);
    });

    it('should clone a more complex object', () => {
        const value = {
            a: 1,
            b: [
                {
                    c: 2,
                    d: ['alpha', 'beta', 'gamma']
                }
            ],

            f: new Set([1, 2, 3, 4, 5]),
            g: 'complex object',
            h: undefined
        };

        const copy = deepCopy(value);
        expect(copy).toEqual(value);

        value.b[0].d[0] = 'omega';
        expect(copy).not.toEqual(value);
        expect(copy.b[0].d[0]).not.toEqual(value.b[0].d[0]);
    });
});
