import { numberFormat } from './../number/NumberFormat';

describe('When formatting currency', () => {
  it("should use the user's default currency when currency not provided", () => {
    const options = { style: 'currency' };
    const formattedValue = numberFormat(options).format(5345643);

    expect(formattedValue).toBe('$5,345,643.00');
  });
  it('should use the Euro(€) symbol when currency is set to "EUR"', () => {
    const options = { style: 'currency', currency: 'EUR' };
    const formattedValue = numberFormat(options).format(5345643);

    expect(formattedValue).toBe('€5,345,643.00');
  });
  it('should use the Chinese Yuan (CN¥) symbol when currency is set to "CNY"', () => {
    const options = { style: 'currency', currency: 'CNY' };
    const formattedValue = numberFormat(options).format(5345643);

    expect(formattedValue).toBe('CN¥5,345,643.00');
  });
  it('should use the currency symbol when "currencyDisplay" is set to "symbol"', () => {
    const options = {
      style: 'currency',
      currency: 'USD',
      currencyDisplay: 'symbol'
    };

    const formattedValue = numberFormat(options).format(5345643);

    expect(formattedValue).toBe('$5,345,643.00');
  });
  it('should use the currency code when "currencyDisplay" is set to "code"', () => {
    const options = {
      style: 'currency',
      currency: 'USD',
      currencyDisplay: 'code'
    };

    const formattedValue = numberFormat(options)
      .format(5345643)
      .replace(/\s?/g, '');

    expect(formattedValue).toBe('USD5,345,643.00');
  });
  it('should use the currency name when "currencyDisplay" is set to "name"', () => {
    const options = {
      style: 'currency',
      currency: 'USD',
      currencyDisplay: 'name'
    };

    const formattedValue = numberFormat(options).format(5345643);

    expect(formattedValue).toBe('5,345,643.00 US dollars');
  });
  it('should not group when "useGrouping" is set to "false"', () => {
    const options = {
      style: 'currency',
      currency: 'USD',
      useGrouping: false
    };

    const formattedValue = numberFormat(options).format(5345643);

    expect(formattedValue).toBe('$5345643.00');
  });
});

describe('When formatting plain numbers (decimal style)', () => {
  it('should format when no additional options are provided', () => {
    const options = { style: 'decimal' };
    const formatter = numberFormat(options);

    expect(formatter.format(123456)).toBe('123,456');

    expect(formatter.format(12.34567)).toBe('12.346');
  });
  it('should format with minimum integer digits provided', () => {
    const options = { style: 'decimal', minimumIntegerDigits: 5 };
    const formattedValue = numberFormat(options).format(5);

    expect(formattedValue).toBe('00,005');
  });
  it('should format numbers with minimum fraction digits provided', () => {
    const options = { style: 'decimal', minimumFractionDigits: 4 };
    const formatter = numberFormat(options);

    expect(formatter.format(123456)).toBe('123,456.0000');
    expect(formatter.format(12.34567)).toBe('12.3457');
  });
  it('should format numbers with maximum fraction digits provided', () => {
    const options = { style: 'decimal', maximumFractionDigits: 4 };
    const formatter = numberFormat(options);

    expect(formatter.format(12.34567)).toBe('12.3457');
  });
  it('should format numbers with minimum significant digits provided', () => {
    const options = { style: 'decimal', minimumSignificantDigits: 15 };
    const formattedValue = numberFormat(options).format(12.34567);

    expect(formattedValue).toBe('12.3456700000000');
  });
  it('should format numbers with maximum significant digits provided', () => {
    const options = { style: 'decimal', maximumSignificantDigits: 2 };
    const formatter = numberFormat(options);

    expect(formatter.format(12.34567)).toBe('12');
    expect(formatter.format(12.9)).toBe('13');
  });
});

describe('When formatting percent', () => {
  it('should format when no additional options are provided', () => {
    const options = { style: 'percent' };
    const formatter = numberFormat(options);

    expect(formatter.format(0.45)).toBe('45%');
  });
  it('should format when options are provided', () => {
    const options = {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    };

    const formatter = numberFormat(options);

    expect(formatter.format(0.12341)).toBe('12.34%');
  });
});
