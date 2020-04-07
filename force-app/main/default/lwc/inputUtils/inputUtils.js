/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

export { generateUniqueId } from './idGenerator';
export { InteractingState, debounce } from './interacting';
export {
    buildSyntheticValidity,
    getErrorMessage,
    FieldConstraintApiWithProxyInput,
    FieldConstraintApi
} from './validity';
export { normalizeVariant, VARIANT } from './normalize';

export function isEmptyString(s) {
    return (
        s === undefined ||
        s === null ||
        (typeof s === 'string' && s.trim() === '')
    );
}
