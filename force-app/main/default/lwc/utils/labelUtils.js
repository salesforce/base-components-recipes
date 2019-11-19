/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

export function formatLabel(str) {
    const args = Array.prototype.slice.call(arguments, 1);
    let replacements = args;
    if (Array.isArray(args[0])) {
        [replacements] = args;
    }

    return str.replace(/{(\d+)}/g, (match, i) => {
        return replacements[i];
    });
}