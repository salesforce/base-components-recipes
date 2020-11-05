/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { numberFormat } from './../number/NumberFormat';
import { exceedsSafeLength, updateFractionPart } from './../number/utils';
import { getNumberFormat } from '../localizationService';

jest.mock('../localizationService', () => {
    return {
        getNumberFormat: jest.fn(() => {
            return {
                format: jest.fn()
            };
        })
    };
});

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
            .replace(/\s/g, ' ');

        expect(formattedValue).toBe('USD 5,345,643.00');
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
    it('should match the provided digits when minimumFractionDigits is higher than js number precision', () => {
        const options = { style: 'decimal', minimumSignificantDigits: 18 };
        const formatter = numberFormat(options);

        expect(formatter.format(3.1)).toBe('3.10000000000000000');
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

describe('When options has minimum/maximumFractionDigits', () => {
    it('should update the fraction digits of the pattern based on options when the pattern has a fraction part', () => {
        const options = {
            minimumFractionDigits: 8,
            maximumFractionDigits: 10
        };

        const updatedPattern = updateFractionPart('#,##0.###', options);

        expect(updatedPattern).toEqual('#,##0.00000000##');
    });

    it('should add fraction digits based on options to the pattern when the pattern does not have a fraction part', () => {
        const options = {
            minimumFractionDigits: 2,
            maximumFractionDigits: 5
        };

        const updatedPattern = updateFractionPart('#,##0%', options);

        expect(updatedPattern).toEqual('#,##0.00###%');
    });

    it('should add fraction digits based on options to the pattern when the pattern has two formats (positive and negative)', () => {
        const options = {
            minimumFractionDigits: 5,
            maximumFractionDigits: 5
        };

        const updatedPattern = updateFractionPart(
            '¤#,##0.00;(¤#,##0.00)',
            options
        );

        expect(updatedPattern).toEqual('¤#,##0.00000;(¤#,##0.00000)');
    });
});

describe('When formatting large numbers', () => {
    it('should call the fallback formatter with the correct pattern', () => {
        const LARGE_NUMBER = 123456789.123456789;

        const options = {
            style: 'percent',
            maximumFractionDigits: 5
        };

        const formatter = numberFormat(options);
        formatter.format(LARGE_NUMBER);

        expect(getNumberFormat).toHaveBeenCalledWith('#,##0.#####%');
    });
    it('should call the primary currency formatter when the number length after trimming trailing zeroes is in the safe length range', () => {
        const LONG_NUMBER = '12.34567890000000000000';

        const options = {
            style: 'currency',
            currency: 'EUR',
            currencyDisplay: 'code',
            maximumFractionDigits: 6
        };

        const formatter = numberFormat(options);

        expect(formatter.format(LONG_NUMBER)).toBe('EUR 12.345679');
    });
    it('should call the fallback formatter when the number length is outside the safe length range', () => {
        const LONG_NUMBER = '12.34567890000000000012';

        const options = {
            style: 'currency',
            currency: 'EUR',
            currencyDisplay: 'code',
            maximumFractionDigits: 13
        };

        const formatter = numberFormat(options);
        formatter.format(LONG_NUMBER);

        expect(getNumberFormat).toHaveBeenCalledWith(
            'EUR#,##0.00###########;(¤#,##0.00###########)'
        );
    });

    describe('When determining if a number exceeds a safe length', () => {
        it('should return false for integers shorter than 15 in length', () => {
            expect(exceedsSafeLength('12345678901234')).toBe(false);
        });
        it('should return false for decimals shorter than 15 in length', () => {
            expect(exceedsSafeLength('1.2345678901234')).toBe(false);
        });
        it('should return false for long decimals with a long trailing run of zeroes', () => {
            expect(exceedsSafeLength('1.23450000000000')).toBe(false);
        });
        it('should return false for long decimals that only have zeroes in the fractional part', () => {
            expect(exceedsSafeLength('1234567890000.00')).toBe(false);
        });
        it('should return false for 15-digit decimals that have a trailing zero', () => {
            expect(exceedsSafeLength('1.23456789012340')).toBe(false);
        });
        it('should return true for integers longer than 14 in length', () => {
            expect(exceedsSafeLength('123456789012345')).toBe(true);
        });
        it('should return true for decimals longer than 14 in length', () => {
            expect(exceedsSafeLength('1.23456789012345')).toBe(true);
        });
        it('should return true for long integers with a trailing run zeroes', () => {
            expect(exceedsSafeLength('100000000000000')).toBe(true);
        });
        it('should return true for long decimals with non-trailing runs of zeroes', () => {
            expect(exceedsSafeLength('100.000000000001')).toBe(true);
        });
    });
});
