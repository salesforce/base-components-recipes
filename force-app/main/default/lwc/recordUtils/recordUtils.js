/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

export function normalizeRecordId(recordId) {
    if (!recordId) {
        return null;
    }

    if (recordId.length === 15) {
        let suffix = '';
        const CASE_DECODE_STRING = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456';

        for (let set = 0; set < 3; ++set) {
            let decodeValue = 0;
            for (let bit = 0; bit < 5; bit++) {
                const c = recordId.charAt(set * 5 + bit);
                if (c >= 'A' && c <= 'Z') {
                    decodeValue += 1 << bit;
                }
            }

            suffix += CASE_DECODE_STRING.charAt(decodeValue);
        }

        return recordId + suffix;
    } else if (recordId.length === 18) {
        return recordId;
    }
    return null;
}