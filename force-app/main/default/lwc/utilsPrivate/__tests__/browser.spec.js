/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { isIE11Test, isChromeTest, isSafariTest } from '../browser';

const userAgents = {
    edge42Win10: {
        userAgent:
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134',
        vendor: ''
    },

    chrome67HighSierra: {
        userAgent:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
        vendor: 'Google Inc.'
    },

    chromeIOSEmulator: {
        userAgent:
            'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
        vendor: 'Google Inc.'
    },

    ie11Win7: {
        userAgent:
            'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko',
        vendor: ''
    },

    ie11Win8: {
        userAgent:
            'Mozilla/5.0 (compatible, MSIE 11, Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko',
        vendor: ''
    },

    ie10WinNT: {
        userAgent:
            'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 7.0; InfoPath.3; .NET CLR 3.1.40767; Trident/6.0; en-IN)',
        vendor: ''
    },

    chrome60Win10: {
        userAgent:
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
        vendor: 'Google Inc.'
    },

    firefox41Android: {
        userAgent:
            'Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0',
        vendor: ''
    },

    safari13Mojave: {
        userAgent:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Safari/605.1.15',
        vendor: ''
    },

    safari11iOS11: {
        userAgent:
            'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.25 (KHTML, like Gecko) Version/11.0 Mobile/15A5304j Safari/604.1',
        vendor: ''
    },

    safari66iOS13: {
        userAgent:
            'Mozilla/5.0 (iPhone; CPU iPhone OS 13_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/66.6 Mobile/14A5297c Safari/602.1',
        vendor: ''
    }
};

describe('browser', () => {
    describe('browser detection', () => {
        describe('ie11 detection', () => {
            it('should return true for IE11 user agents', () => {
                [userAgents.ie11Win7, userAgents.ie11Win8].forEach(
                    (navigator) => {
                        expect(isIE11Test(navigator)).toBe(true);
                    }
                );
            });
            it('should return false for non IE11 user agents', () => {
                [
                    userAgents.ie10WinNT,
                    userAgents.chrome60Win10,
                    userAgents.firefox41Android
                ].forEach((navigator) => {
                    expect(isIE11Test(navigator)).toBe(false);
                });
            });
        });

        describe('chrome detection', () => {
            it('should return true for chrome user agents', () => {
                expect(isChromeTest(userAgents.chrome67HighSierra)).toBe(true);
            });
            it('should return false for non chrome user agents', () => {
                [userAgents.edge42Win10, userAgents.chromeIOSEmulator].forEach(
                    (navigator) => {
                        expect(isChromeTest(navigator)).toBe(false);
                    }
                );
            });
        });

        describe('safari detection', () => {
            it('should return true for safari user agents', () => {
                [
                    userAgents.safari11iOS11,
                    userAgents.safari13Mojave,
                    userAgents.chromeIOSEmulator,
                    userAgents.safari66iOS13
                ].forEach((navigator) => {
                    expect(isSafariTest(navigator)).toBe(true);
                });
            });
            it('should return false for non safari user agents', () => {
                [
                    userAgents.edge42Win10,
                    userAgents.firefox41Android,
                    userAgents.chrome67HighSierra
                ].forEach((navigator) => {
                    expect(isSafariTest(navigator)).toBe(false);
                });
            });
        });
    });
});
