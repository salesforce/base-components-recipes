/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

const exampleData = {};

exampleData.exampleInlineOption = {
    type: 'option-inline',
    iconName: 'utility:search',
    text: 'Advanced Search...',
    value: 'actionSearchAdvanced'
};

exampleData.exampleCardOption = {
    type: 'option-card',
    text: 'Global Media',
    iconName: 'standard:account',
    subText: '(905) 555-1212',
    value: 'accountGlobalMedia'
};

exampleData.exampleCardOptionAllAttributes = {
    type: 'option-card',
    iconName: 'standard:account',
    iconSize: 'large',
    iconAlternativeText: 'Account icon',
    rightIconName: 'utility:chevronright',
    rightIconSize: 'large',
    rightIconAlternativeText: 'Chevron icon',
    text: 'Global Media',
    subText: '(905) 555-1212',
    value: 'accountGlobalMediaCard'
};

exampleData.exampleCardOptionHighlighted = {
    type: 'option-card',
    text: 'Global Media',
    highlight: true,
    iconName: 'standard:account',
    subText: '(905) 555-1212',
    value: 'accountGlobalMediaCardHighlighted'
};

exampleData.exampleDataWithHighlightedCard = [
    exampleData.exampleInlineOption,
    exampleData.exampleCardOptionHighlighted,
    exampleData.exampleCardOption
];

exampleData.exampleGroups = [
    exampleData.exampleInlineOption,
    {
        label: 'Group 1',
        items: [Object.assign({}, exampleData.exampleInlineOption)]
    },

    {
        label: 'Group 2',
        items: [
            exampleData.exampleCardOptionHighlighted,
            exampleData.exampleCardOption,
            exampleData.exampleCardOptionAllAttributes
        ]
    },

    {
        label: 'Group 3',
        items: [
            exampleData.exampleCardOptionHighlighted,
            exampleData.exampleInlineOption,
            exampleData.exampleCardOption,
            exampleData.exampleCardOptionAllAttributes
        ]
    }
];

exampleData.exampleItems = [
    exampleData.exampleInlineOption,
    exampleData.exampleCardOption
];

exampleData.exampleItemsManyRecords = [...new Array(50)].map(
    () => exampleData.exampleCardOption
);

export default exampleData;
