/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

const wireSfdcMocks = require('lwc-wire-service-sfdc-mocks');
const lightningUiRecordApi = {
    getRecordCreateDefaults: wireSfdcMocks.getRecordCreateDefaults,
    getRecordUi: wireSfdcMocks.getRecordUi
};

module.exports = lightningUiRecordApi;
