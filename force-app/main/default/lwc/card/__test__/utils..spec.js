import { isNarrow, isBase } from './../utils';

describe('c-card utils', () => {
    describe('isNarrow', () => {
        ['narrow', 'Narrow', 'NARROW'].forEach(variant => {
            it(`should return true when ${variant}`, () => {
                expect(isNarrow(variant)).toBe(true);
            });
        });
        [undefined, null, '', [], {}].forEach(variant => {
            it(`should return false when ${variant}`, () => {
                expect(isNarrow(variant)).toBe(false);
            });
        });
    });
    describe('isBase', () => {
        ['base', 'Base', 'BASE'].forEach(variant => {
            it(`should return true when ${variant}`, () => {
                expect(isBase(variant)).toBe(true);
            });
        });
        [undefined, null, '', [], {}].forEach(variant => {
            it(`should return false when ${variant}`, () => {
                expect(isBase(variant)).toBe(false);
            });
        });
    });
});
