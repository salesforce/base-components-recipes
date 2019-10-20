let idCounter = 0;

export function generateUniqueId(prefix = 'input') {
    idCounter++;
    return `${prefix}-${idCounter}`;
}
