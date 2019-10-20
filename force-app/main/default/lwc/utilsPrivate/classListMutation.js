export function classListMutation(classList, config) {
    Object.keys(config).forEach(key => {
        if (typeof key === 'string' && key.length) {
            if (config[key]) {
                classList.add(key);
            } else {
                classList.remove(key);
            }
        }
    });
}
