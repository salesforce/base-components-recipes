export function formatLabel(str, ...args) {
    let replacements = args;
    if (Array.isArray(args[0])) {
        [replacements] = args;
    }

    return str.replace(/{(\d+)}/g, (match, i) => {
        return replacements[i];
    });
}
