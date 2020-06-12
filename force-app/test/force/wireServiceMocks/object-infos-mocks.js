/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

const mockFieldInfo = {
    calculated: false,
    compound: false,
    compoundComponentName: null,
    compoundFieldName: null,
    controllerName: null,
    createable: true,
    custom: true,
    dataType: 'String',
    extraTypeInfo: null,
    filterable: true,
    filteredLookupInfo: null,
    highScaleNumber: false,
    htmlFormatted: false,
    inlineHelpText: null,
    label: 'Optional Field Label',
    length: 255,
    nameField: false,
    polymorphicForeignKey: false,
    precision: 0,
    reference: false,
    referenceTargetField: null,
    referenceToInfos: [],
    relationshipName: null,
    required: false,
    scale: 0,
    searchPrefilterable: false,
    sortable: true,
    unique: false,
    updateable: true
};

export function getMockFieldInfo(apiName) {
    const result = mockFieldInfo;
    result.apiName = apiName;

    return result;
}
