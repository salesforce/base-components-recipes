import { isIE11Test, isChromeTest } from '../browser';

describe('browser', () => {
  describe('browser detection', () => {
    describe('ie11 detection', () => {
      it('should return true for IE11 user agents', () => {
        [
          'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko',
          'Mozilla/5.0 (compatible, MSIE 11, Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko'
        ].forEach(userAgent => {
          const navigator = { userAgent };
          expect(isIE11Test(navigator)).toBe(true);
        });
      });
      it('should return false for non IE11 user agents', () => {
        [
          'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 7.0; InfoPath.3; .NET CLR 3.1.40767; Trident/6.0; en-IN)',
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
          'Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0'
        ].forEach(userAgent => {
          const navigator = { userAgent };
          expect(isIE11Test(navigator)).toBe(false);
        });
      });
    });

    describe('chrome detection', () => {
      const userAgents = {
        edge: {
          userAgent:
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134',
          vendor: ''
        },

        chrome: {
          userAgent:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
          vendor: 'Google Inc.'
        },

        chromeIOSEmulator: {
          userAgent:
            'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
          vendor: 'Google Inc.'
        }
      };

      it('should return true for chrome user agents', () => {
        expect(isChromeTest(userAgents.chrome)).toBe(true);
      });
      it('should return false for non chrome user agents', () => {
        [userAgents.edge, userAgents.chromeIOSEmulator].forEach(navigator => {
          expect(isChromeTest(navigator)).toBe(false);
        });
      });
    });
  });
});
