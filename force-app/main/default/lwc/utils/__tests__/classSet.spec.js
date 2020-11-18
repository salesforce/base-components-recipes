/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { classSet } from 'c/utils';

describe('classSet()', () => {
    describe('initialization', () => {
        it('returns empty string by default', () => {
            expect(classSet().toString()).toBe('');
        });

        it('returns empty string when initialized with an empty string', () => {
            expect(classSet('').toString()).toBe('');
        });

        it('returns empty string when initialized with undefined', () => {
            expect(classSet(undefined).toString()).toBe('');
        });

        it('returns empty string when initialized with null', () => {
            expect(classSet(null).toString()).toBe('');
        });

        it('returns empty string when initialized with a boolean', () => {
            expect(classSet(false).toString()).toBe('');
            expect(classSet(true).toString()).toBe('');
        });

        it('returns empty string when initialized with an empty object', () => {
            expect(classSet({}).toString()).toBe('');
        });

        it('handles initialization with a string', () => {
            expect(classSet('foo').toString()).toBe('foo');
            expect(classSet('foo bar').toString()).toBe('foo bar');
        });

        it('handles initialization with an object', () => {
            expect(classSet({ foo: true, bar: true }).toString()).toBe(
                'foo bar'
            );

            expect(classSet({ foo: true, bar: false }).toString()).toBe('foo');
            expect(classSet({ foo: false }).toString()).toBe('');
        });
    });

    describe('add()', () => {
        it('handles strings', () => {
            expect(classSet().add('foo').toString()).toBe('foo');

            expect(classSet('foo').add('bar').toString()).toBe('foo bar');

            expect(classSet({ foo: true }).add('bar').toString()).toBe(
                'foo bar'
            );
        });

        it('handles objects', () => {
            expect(classSet().add({ foo: true }).toString()).toBe('foo');

            expect(classSet('foo').add({ bar: true }).toString()).toBe(
                'foo bar'
            );

            expect(classSet({ foo: true }).add({ bar: true }).toString()).toBe(
                'foo bar'
            );
        });

        it('returns empty string by default', () => {
            expect(classSet().add().toString()).toBe('');
        });

        it('returns empty string when given an empty string', () => {
            expect(classSet().add('').toString()).toBe('');
        });

        it('returns empty string when given undefined', () => {
            expect(classSet().add(undefined).toString()).toBe('');
        });

        it('returns empty string when given null', () => {
            expect(classSet().add(null).toString()).toBe('');
        });

        it('returns empty string when given a boolean', () => {
            expect(classSet().add(false).toString()).toBe('');
            expect(classSet().add(true).toString()).toBe('');
        });

        it('returns empty string when given an empty object', () => {
            expect(classSet().add({}).toString()).toBe('');
        });

        it('supports chaining', () => {
            expect(
                classSet().add('foo').add({ bar: true }).add('baz').toString()
            ).toBe('foo bar baz');
        });
    });

    describe('invert()', () => {
        it('handles strings', () => {
            expect(classSet('foo').add('bar').invert().toString()).toBe('');
        });

        it('handles objects', () => {
            expect(classSet({ foo: true }).invert().toString()).toBe('');

            expect(
                classSet({ foo: true, bar: false }).invert().toString()
            ).toBe('bar');
        });

        it('handles strings and objects', () => {
            expect(
                classSet({ foo: true, bar: false })
                    .add('baz')
                    .invert()
                    .toString()
            ).toBe('bar');
        });
    });
});
