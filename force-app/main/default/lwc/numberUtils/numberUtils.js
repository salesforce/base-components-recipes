function decimalPlaces(num) {
    const match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    if (!match) {
        return 0;
    }
    return Math.max(
        0,

        (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0)
    );
}

export default {
    decimalPlaces
};
