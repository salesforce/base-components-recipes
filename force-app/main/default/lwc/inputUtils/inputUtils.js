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
