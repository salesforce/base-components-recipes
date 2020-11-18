/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { NumberOptions } from './numberOptions';
import { getNumberFormat } from '../localizationService';

export function numberFormatFallback(options) {
    const skeleton = new NumberOptions(options).getSkeleton();
    return {
        format: (value) => {
            return getNumberFormat(skeleton).format(value);
        }
    };
}
