const assert = require('../force-app/main/default/lwc/utilsPrivate/assert');
jest.spyOn(assert, 'assert').mockImplementation((condition, message) => {
    if (!condition) {
        throw new Error(message);
    }
});

global.requestAnimationFrame = function (callback) {
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    return setTimeout(callback, 0);
};

process.on('unhandledRejection', (error) => {
    // eslint-disable-next-line no-console
    console.error('unhandledRejection error: ' + error);
});
