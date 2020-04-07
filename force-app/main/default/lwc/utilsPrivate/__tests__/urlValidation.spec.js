/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { isAbsoluteUrl } from '../utilsPrivate';

describe('valid url check regex', () => {
    it('start with ftp:// is expected url format.', () => {
        expect(isAbsoluteUrl('ftp://')).toBe(true);
        expect(isAbsoluteUrl('ftp://sasas')).toBe(true);
    });

    it('start with  http(s):// is expected url format.', () => {
        expect(isAbsoluteUrl('http://')).toBe(true);
        expect(isAbsoluteUrl('https://')).toBe(true);
        expect(isAbsoluteUrl('http://asas')).toBe(true);
        expect(isAbsoluteUrl('https://asas/iiion')).toBe(true);
    });

    it('start with // is expected url format.', () => {
        expect(isAbsoluteUrl('//')).toBe(true);
        expect(isAbsoluteUrl('//asas')).toBe(true);
    });

    it('start with /a..., .a/aa is expected url format.', () => {
        expect(isAbsoluteUrl('/a/a')).toBe(true);
        expect(isAbsoluteUrl('.a/a')).toBe(true);
    });

    it("if not start with ftp://, http(s)://, //, /a..., .a/aa, it isn't expected url format.", () => {
        expect(isAbsoluteUrl('uuuftp://')).toBe(false);
        expect(isAbsoluteUrl('uuhttp://')).toBe(false);
        expect(isAbsoluteUrl('hhhhttps://')).toBe(false);
        expect(isAbsoluteUrl('hhftp://sasas')).toBe(false);
        expect(isAbsoluteUrl('hhhttp://asas')).toBe(false);
        expect(isAbsoluteUrl('hhhttps://asas')).toBe(false);
        expect(isAbsoluteUrl('09//')).toBe(false);
        expect(isAbsoluteUrl('uu//asas')).toBe(false);
        expect(isAbsoluteUrl('a/a')).toBe(false);
    });
});
