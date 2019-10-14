import { getZIndexBaseline } from '../utilsPrivate';

describe('getZIndexBaseline', () => {
  it("should return default value if variable isn't defined", () => {
    const value = getZIndexBaseline();
    expect(value).toBe(9000);
  });
});
