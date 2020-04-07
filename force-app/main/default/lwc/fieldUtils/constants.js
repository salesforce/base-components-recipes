/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

export const Layout = {
    FULL: 'Full',
    COMPACT: 'Compact'
};

export const Mode = {
    VIEW: 'View',
    EDIT: 'Edit'
};

export const DensityValues = {
    COMFY: 'comfy',
    COMPACT: 'compact',
    AUTO: 'auto'
};

export const LabelAlignValues = {
    STACKED: 'stacked',
    HORIZONTAL: 'horizontal'
};

export const DensityLabelAlignMapping = {
    compact: 'horizontal',
    comfy: 'stacked'
};

export const FieldTypes = {
    ADDRESS: 'Address',
    BASE64: 'Base64',
    BOOLEAN: 'Boolean',
    COMPLEX_VALUE: 'ComplexValue',
    CURRENCY: 'Currency',
    DATE: 'Date',
    DATETIME: 'DateTime',
    DOUBLE: 'Double',
    RICH_TEXTAREA: 'RichTextArea',
    DECIMAL: 'Decimal',
    EMAIL: 'Email',
    ENCRYPTED_STRING: 'EncryptedString',
    INT: 'Int',
    LOCATION: 'Location',
    MULTI_PICKLIST: 'MultiPicklist',
    PLAIN_TEXTAREA: 'PlainTextArea',
    PERCENT: 'Percent',
    PHONE: 'Phone',
    PICKLIST: 'Picklist',
    REFERENCE: 'Reference',
    STRING: 'String',
    TEXT: 'Text',
    TEXTAREA: 'TextArea',
    TIME: 'Time',
    URL: 'Url',
    PERSON_NAME: 'PersonName',
    SWITCHABLE_PERSON_NAME: 'SwitchablePersonName'
};

export const LocalizedFieldTypes = [
    FieldTypes.MULTI_PICKLIST,
    FieldTypes.PICKLIST,
    FieldTypes.CURRENCY,
    FieldTypes.DATE,
    FieldTypes.DATETIME
];

export const FormattedFieldTypes = [];