const { jestConfig } = require('@salesforce/sfdx-lwc-jest/config');
const jestPreset = require('@lwc/jest-preset');
const setupFilesAfterEnv = jestPreset.setupFilesAfterEnv || [];
setupFilesAfterEnv.push('<rootDir>/jest-sa11y-setup.js');
module.exports = {
    ...jestConfig,
    resolver: '<rootDir>/bin/bcr-resolver.js',
    moduleNameMapper: {
        '^@salesforce/label/(.+)$':
            '<rootDir>/force-app/test/@salesforce/label/$1.js',
        '^force/(.+)$': '<rootDir>/force-app/test/force/$1/$1',
        '^force:mockDataLibrary$':
            '<rootDir>/force-app/test/force/mockDataLibrary/mockDataLibrary',
        '^lightning/configProvider$':
            '<rootDir>/force-app/test/lightning/configProvider/configProvider',
        '^lightning/iconSvgTemplates$':
            '<rootDir>/force-app/test/lightning/iconSvgTemplates/iconSvgTemplates',
        '^lightning/testUtils$':
            '<rootDir>/force-app/test/lightning/testUtils/testUtils',
        '^lightning/testUtilsButtonGroup$':
            '<rootDir>/force-app/test/lightning/testUtilsButtonGroup/testUtilsButtonGroup',
        '^lightningtest/(.+)$': '<rootDir>/force-app/test/lightningtest/$1/$1'
    },
    testPathIgnorePatterns: ['/node_modules/'],
    setupFiles: ['<rootDir>/bin/jest-setup'],
    setupFilesAfterEnv
};
