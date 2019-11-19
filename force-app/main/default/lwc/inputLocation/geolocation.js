/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

const VALID_RANGES = {
    LATITUDE: [-90, 90],
    LONGITUDE: [-180, 180]
};

function isNumber(value) {
    return value !== '' && value !== null && isFinite(value);
}

function isValidRange(start, end, dec) {
    const val = parseFloat(dec);
    return !isNaN(val) && val <= end && val >= start ? true : false;
}

function validateFormatAndRange(coordinate, range) {
    const truncatedCoordinate = coordinate.trim();
    return (
        isNumber(truncatedCoordinate) &&
        isValidRange(range[0], range[1], truncatedCoordinate)
    );
}

export function validateCoordinate(name, value) {
    return validateFormatAndRange(value, VALID_RANGES[name.toUpperCase()]);
}