const wireSfdcMocks = require('lwc-wire-service-sfdc-mocks');
const lightningUiObjectInfoApi = {};

lightningUiObjectInfoApi.getPicklistValuesByRecordType =
    wireSfdcMocks.getPicklistValuesByRecordType;

module.exports = lightningUiObjectInfoApi;
