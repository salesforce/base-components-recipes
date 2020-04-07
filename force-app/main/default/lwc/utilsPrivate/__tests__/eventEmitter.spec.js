/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { EventEmitter } from '../eventEmitter';

describe('EventEmitter', () => {
    it('on() should register a listener', () => {
        const emitter = new EventEmitter();

        let fooCount = 0;
        emitter.on('foo', () => {
            fooCount += 1;
        });

        let barCount = 0;
        emitter.on('bar', () => {
            barCount += 1;
        });

        emitter.emit('foo');
        emitter.emit('baz');
        emitter.emit('bar');
        emitter.emit('baz');
        emitter.emit('foo');

        expect(fooCount).toBe(2);
        expect(barCount).toBe(1);
    });

    it('on() should return a reference to the event emitter', () => {
        const emitter = new EventEmitter();
        expect(emitter.on()).toBe(emitter);
        expect(emitter.on('foo')).toBe(emitter);
        expect(emitter.on('foo', () => {})).toBe(emitter);
    });

    it('removeListener() should remove a listener', () => {
        const emitter = new EventEmitter();

        let count = 0;
        const handleFoo = () => {
            count += 1;
        };
        emitter.on('foo', handleFoo);

        emitter.emit('foo');
        emitter.removeListener('foo', handleFoo);
        emitter.emit('foo');

        expect(count).toBe(1);
    });

    it('removeListener() should remove the correct listener', () => {
        const emitter = new EventEmitter();

        let count = 0;
        const handleFoo = () => {
            count += 1;
        };
        emitter.on('foo', handleFoo);
        emitter.on('bar', handleFoo);

        emitter.emit('foo');
        emitter.removeListener('bar', handleFoo);
        emitter.emit('foo');
        emitter.removeListener('foo', handleFoo);
        emitter.emit('foo');

        expect(count).toBe(2);
    });

    it('removeListener() should return a reference to the event emitter', () => {
        const emitter = new EventEmitter();

        const handleFoo = () => {};
        emitter.on('foo', handleFoo);

        expect(emitter.removeListener()).toBe(emitter);
        expect(emitter.removeListener('foo')).toBe(emitter);
        expect(emitter.removeListener('foo', () => {})).toBe(emitter);
        expect(emitter.removeListener('foo', handleFoo)).toBe(emitter);
    });

    it('emit() should return true if the event had listeners', () => {
        const emitter = new EventEmitter();

        const handleFoo = () => {};
        emitter.on('foo', handleFoo);

        expect(emitter.emit('foo')).toBe(true);
    });

    it('emit() should return false if the event once had listeners but no longer does', () => {
        const emitter = new EventEmitter();

        const handleFoo = () => {};
        emitter.on('foo', handleFoo);
        emitter.removeListener('foo', handleFoo);

        expect(emitter.emit('foo')).toBe(false);
    });

    it('emit() should return false if the event did not have listeners', () => {
        const emitter = new EventEmitter();
        expect(emitter.emit('foo')).toBe(false);
    });

    it('emit() should pass supplied arguments to each listener', () => {
        const emitter = new EventEmitter();

        let first;
        let second;
        const handleFoo = (arg1, arg2) => {
            first = arg1;
            second = arg2;
        };
        emitter.on('foo', handleFoo);

        let firstOnce;
        let secondOnce;
        const handleFooOnce = (arg1, arg2) => {
            firstOnce = arg1;
            secondOnce = arg2;
        };
        emitter.on('foo', handleFooOnce);

        emitter.emit('foo', 'first', 'second');

        expect(first).toBe('first');
        expect(second).toBe('second');
        expect(firstOnce).toBe('first');
        expect(secondOnce).toBe('second');
    });

    it('once() should only listen for the event once', () => {
        const emitter = new EventEmitter();

        let count = 0;
        const handleFoo = () => {
            count += 1;
        };
        emitter.once('foo', handleFoo);

        emitter.emit('foo');
        emitter.emit('foo');

        expect(count).toBe(1);
    });

    it('once() should return a reference to the event emitter', () => {
        const emitter = new EventEmitter();
        expect(emitter.once()).toBe(emitter);
        expect(emitter.once('foo')).toBe(emitter);
        expect(emitter.once('foo', () => {})).toBe(emitter);
    });
});
