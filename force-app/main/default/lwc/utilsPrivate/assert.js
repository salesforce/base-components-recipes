export function assert(condition, message) {
    if (process.env.NODE_ENV !== 'production') {
        if (!condition) {
            throw new Error(message);
        }
    }
}
