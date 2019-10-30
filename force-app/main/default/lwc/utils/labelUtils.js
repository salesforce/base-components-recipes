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
