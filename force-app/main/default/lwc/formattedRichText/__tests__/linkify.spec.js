import { linkify } from '../linkify';

describe('linkify', () => {
    it('Does not throw when passed a non-string value', () => {
        expect(linkify()).toBe('');
        expect(linkify(null)).toBe('');
        expect(linkify(true)).toBe('');
        expect(linkify(256)).toBe('');
    });
});
