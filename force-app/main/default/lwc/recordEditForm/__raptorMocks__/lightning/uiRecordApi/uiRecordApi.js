const wireSfdcMocks = require('lwc-wire-service-sfdc-mocks');
const lightningUiRecordApi = {
    getRecordCreateDefaults: wireSfdcMocks.getRecordCreateDefaults,
    getRecordUi: wireSfdcMocks.getRecordUi,
};

module.exports = lightningUiRecordApi;
