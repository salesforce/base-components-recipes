const fs = require('fs');
const path = require('path');
const { getInfoFromId } = require('@salesforce/sfdx-lwc-jest/src/utils/module');
const defaultResolver = require('@salesforce/sfdx-lwc-jest/src/resolver');

function getLightningMock(modulePath, options) {
    const { ns, name } = getInfoFromId(modulePath);
    if (ns === 'lightning') {
        const p = path.join(options.rootDir, 'force-app/stubs', modulePath);
        if (fs.existsSync(p)) {
            return path.join(p, `${name}.js`);
        }
    }
}

function getRaptorMock(modulePath, options) {
    const { name } = getInfoFromId(modulePath);
    const p = path.join(options.basedir, '__raptorMocks__', modulePath);
    // Use the mock in the sibling __raptorMocks__ directory if it exists.
    if (fs.existsSync(p)) {
        return path.join(p, `${name}.js`);
    }
}

module.exports = function (modulePath, options) {
    const raptorMock = getRaptorMock(modulePath, options);
    if (raptorMock) {
        return raptorMock;
    }

    const lightningMock = getLightningMock(modulePath, options);
    if (lightningMock) {
        return lightningMock;
    }

    return defaultResolver(modulePath, options);
};
