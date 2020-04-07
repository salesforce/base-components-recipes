/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

export const store = {
    eTag: '6293748a217f1938e353cd01125e9e6e',
    layoutUserStates: {
        '00hR0000000PPI9IAO': {
            id: '00hR0000000PPI9IAO',
            sectionUserStates: {
                '01BR0000000ixA4MAI': {
                    collapsed: false,
                    id: '01BR0000000ixA4MAI'
                },

                '01BR0000000ixA5MAI': {
                    collapsed: false,
                    id: '01BR0000000ixA5MAI'
                }
            }
        }
    },

    layouts: {
        Lead: {
            '012000000000000AAA': {
                Full: {
                    View: {
                        id: '00hR0000000H6fRIAS',
                        layoutType: 'Full',
                        mode: 'View',
                        sections: [
                            {
                                collapsible: false,
                                columns: 2,
                                heading: 'Lead Information',
                                id: '01BR0000000ffbjMAA',
                                layoutRows: [
                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: 'Lead Owner',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'OwnerId',
                                                        componentType: 'Field',
                                                        label: 'Owner ID'
                                                    }
                                                ],

                                                lookupIdApiName: 'OwnerId',
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Lead Status',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'Status',
                                                        componentType: 'Field',
                                                        label: 'Status'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: true,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Name',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'Salutation',
                                                        componentType: 'Field',
                                                        label: 'Salutation'
                                                    },

                                                    {
                                                        apiName: 'FirstName',
                                                        componentType: 'Field',
                                                        label: 'First Name'
                                                    },

                                                    {
                                                        apiName: 'LastName',
                                                        componentType: 'Field',
                                                        label: 'Last Name'
                                                    }
                                                ],

                                                lookupIdApiName: 'Id',
                                                required: true,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Phone',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'Phone',
                                                        componentType: 'Field',
                                                        label: 'Phone'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Company',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'Company',
                                                        componentType: 'Field',
                                                        label: 'Company'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: true,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Email',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'Email',
                                                        componentType: 'Field',
                                                        label: 'Email'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Title',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'Title',
                                                        componentType: 'Field',
                                                        label: 'Title'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Rating',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'Rating',
                                                        componentType: 'Field',
                                                        label: 'Rating'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    }
                                ],

                                rows: 4,
                                useHeading: false
                            },

                            {
                                collapsible: true,
                                columns: 2,
                                heading: 'Address Information',
                                id: '01BR0000000ffbkMAA',
                                layoutRows: [
                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Address',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'Street',
                                                        componentType: 'Field',
                                                        label: 'Street'
                                                    },

                                                    {
                                                        apiName: 'City',
                                                        componentType: 'Field',
                                                        label: 'City'
                                                    },

                                                    {
                                                        apiName: 'StateCode',
                                                        componentType: 'Field',
                                                        label:
                                                            'State/Province Code'
                                                    },

                                                    {
                                                        apiName: 'PostalCode',
                                                        componentType: 'Field',
                                                        label: 'Zip/Postal Code'
                                                    },

                                                    {
                                                        apiName: 'CountryCode',
                                                        componentType: 'Field',
                                                        label: 'Country Code'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Website',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'Website',
                                                        componentType: 'Field',
                                                        label: 'Website'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    }
                                ],

                                rows: 1,
                                useHeading: true
                            },

                            {
                                collapsible: true,
                                columns: 2,
                                heading: 'Additional Information',
                                id: '01BR0000000ffblMAA',
                                layoutRows: [
                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'No. of Employees',
                                                layoutComponents: [
                                                    {
                                                        apiName:
                                                            'NumberOfEmployees',
                                                        componentType: 'Field',
                                                        label: 'Employees'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Lead Source',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'LeadSource',
                                                        componentType: 'Field',
                                                        label: 'Lead Source'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Annual Revenue',
                                                layoutComponents: [
                                                    {
                                                        apiName:
                                                            'AnnualRevenue',
                                                        componentType: 'Field',
                                                        label: 'Annual Revenue'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Industry',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'Industry',
                                                        componentType: 'Field',
                                                        label: 'Industry'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    }
                                ],

                                rows: 2,
                                useHeading: true
                            },

                            {
                                collapsible: false,
                                columns: 1,
                                heading: 'Description Information',
                                id: '01BR0000000ffbmMAA',
                                layoutRows: [
                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Description',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'Description',
                                                        componentType: 'Field',
                                                        label: 'Description'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    }
                                ],

                                rows: 1,
                                useHeading: false
                            },

                            {
                                collapsible: false,
                                columns: 2,
                                heading: 'System Information',
                                id: '01BR0000000ffbnMAA',
                                layoutRows: [
                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: 'Created By',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'CreatedById',
                                                        componentType: 'Field',
                                                        label: 'Created By ID'
                                                    },

                                                    {
                                                        apiName: 'CreatedDate',
                                                        componentType: 'Field',
                                                        label: 'Created Date'
                                                    }
                                                ],

                                                lookupIdApiName: 'CreatedById',
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: 'Last Modified By',
                                                layoutComponents: [
                                                    {
                                                        apiName:
                                                            'LastModifiedById',
                                                        componentType: 'Field',
                                                        label:
                                                            'Last Modified By ID'
                                                    },

                                                    {
                                                        apiName:
                                                            'LastModifiedDate',
                                                        componentType: 'Field',
                                                        label:
                                                            'Last Modified Date'
                                                    }
                                                ],

                                                lookupIdApiName:
                                                    'LastModifiedById',
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    }
                                ],

                                rows: 1,
                                useHeading: false
                            },

                            {
                                collapsible: true,
                                columns: 3,
                                heading: 'Custom Links',
                                id: '01BR0000000ffboMAA',
                                layoutRows: [
                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: '',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'GoogleSearch',
                                                        behavior: 'NewWindow',
                                                        componentType:
                                                            'CustomLink',
                                                        customLinkUrl:
                                                            '/servlet/servlet.Integration?lid=00bR0000000R8V2&eid=ENTITY_ID&ic=1',
                                                        label: 'Google Search'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: '',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'GoogleMaps',
                                                        behavior: 'NewWindow',
                                                        componentType:
                                                            'CustomLink',
                                                        customLinkUrl:
                                                            '/servlet/servlet.Integration?lid=00bR0000000R8V0&eid=ENTITY_ID&ic=1',
                                                        label: 'Google Maps'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: '',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'SendGmail',
                                                        behavior: 'NewWindow',
                                                        componentType:
                                                            'CustomLink',
                                                        customLinkUrl:
                                                            '/servlet/servlet.Integration?lid=00bR0000000R8V4&eid=ENTITY_ID&ic=1',
                                                        label: 'Send Gmail'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: '',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'GoogleNews',
                                                        behavior: 'NewWindow',
                                                        componentType:
                                                            'CustomLink',
                                                        customLinkUrl:
                                                            '/servlet/servlet.Integration?lid=00bR0000000R8V1&eid=ENTITY_ID&ic=1',
                                                        label: 'Google News'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: '',
                                                layoutComponents: [
                                                    {
                                                        apiName:
                                                            'HooversProfile',
                                                        behavior: 'NewWindow',
                                                        componentType:
                                                            'CustomLink',
                                                        customLinkUrl:
                                                            '/servlet/servlet.Integration?lid=00bR0000000R8V3&eid=ENTITY_ID&ic=1',
                                                        label: 'Hoovers Profile'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: '',
                                                layoutComponents: [
                                                    {
                                                        apiName: null,
                                                        componentType:
                                                            'EmptySpace'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    }
                                ],

                                rows: 2,
                                useHeading: true
                            }
                        ]
                    }
                }
            }
        },

        Bad_Guy__c: {
            '012000000000000AAA': {
                Full: {
                    View: {
                        eTag: '367927234e83040e6cc21397723be50b',
                        id: '00hR0000000PPI9IAO',
                        layoutType: 'Full',
                        mode: 'View',
                        sections: [
                            {
                                collapsible: false,
                                columns: 2,
                                heading: 'Information',
                                id: '01BR0000000ixA4MAI',
                                layoutRows: [
                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Bad Guy Name',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'Name',
                                                        componentType: 'Field',
                                                        label: 'Bad Guy Name'
                                                    }
                                                ],

                                                lookupIdApiName: 'Id',
                                                required: true,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Nickname',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'Nickname__c',
                                                        componentType: 'Field',
                                                        label: 'Nickname'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Description',
                                                layoutComponents: [
                                                    {
                                                        apiName:
                                                            'Description__c',
                                                        componentType: 'Field',
                                                        label: 'Description'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: 'Owner',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'OwnerId',
                                                        componentType: 'Field',
                                                        label: 'Owner ID'
                                                    }
                                                ],

                                                lookupIdApiName: 'OwnerId',
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Birthday',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'Birthday__c',
                                                        componentType: 'Field',
                                                        label: 'Birthday'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Weapon',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'Weapon__c',
                                                        componentType: 'Field',
                                                        label: 'Weapon'
                                                    }
                                                ],

                                                lookupIdApiName: 'Id',
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Email Address',
                                                layoutComponents: [
                                                    {
                                                        apiName:
                                                            'Email_Address__c',
                                                        componentType: 'Field',
                                                        label: 'Email Address'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Power level',
                                                layoutComponents: [
                                                    {
                                                        apiName:
                                                            'Power_level__c',
                                                        componentType: 'Field',
                                                        label: 'Power level'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Weakness',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'Weakness__c',
                                                        componentType: 'Field',
                                                        label: 'Weakness'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Salary Per Year',
                                                layoutComponents: [
                                                    {
                                                        apiName:
                                                            'Salary_Per_Year__c',
                                                        componentType: 'Field',
                                                        label: 'Salary Per Year'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: true,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Has Weakness',
                                                layoutComponents: [
                                                    {
                                                        apiName:
                                                            'Has_Weakness__c',
                                                        componentType: 'Field',
                                                        label: 'Has Weakness'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: '',
                                                layoutComponents: [
                                                    {
                                                        apiName: null,
                                                        componentType:
                                                            'EmptySpace'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Rich Text Field',
                                                layoutComponents: [
                                                    {
                                                        apiName:
                                                            'Rich_Text_Field__c',
                                                        componentType: 'Field',
                                                        label: 'Rich Text Field'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: '',
                                                layoutComponents: [
                                                    {
                                                        apiName: null,
                                                        componentType:
                                                            'EmptySpace'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: 'age',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'age__c',
                                                        componentType: 'Field',
                                                        label: 'age'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: '',
                                                layoutComponents: [
                                                    {
                                                        apiName: null,
                                                        componentType:
                                                            'EmptySpace'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Country',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'Country__c',
                                                        componentType: 'Field',
                                                        label: 'Country'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: '',
                                                layoutComponents: [
                                                    {
                                                        apiName: null,
                                                        componentType:
                                                            'EmptySpace'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'States/Provinces',
                                                layoutComponents: [
                                                    {
                                                        apiName:
                                                            'States_Provinces__c',
                                                        componentType: 'Field',
                                                        label:
                                                            'States/Provinces'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: '',
                                                layoutComponents: [
                                                    {
                                                        apiName: null,
                                                        componentType:
                                                            'EmptySpace'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'City',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'City__c',
                                                        componentType: 'Field',
                                                        label: 'City'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: '',
                                                layoutComponents: [
                                                    {
                                                        apiName: null,
                                                        componentType:
                                                            'EmptySpace'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'MultiCity',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'MultiCity__c',
                                                        componentType: 'Field',
                                                        label: 'MultiCity'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: '',
                                                layoutComponents: [
                                                    {
                                                        apiName: null,
                                                        componentType:
                                                            'EmptySpace'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Territories Covered',
                                                layoutComponents: [
                                                    {
                                                        apiName:
                                                            'Territories_Covered__c',
                                                        componentType: 'Field',
                                                        label:
                                                            'Territories Covered'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: '',
                                                layoutComponents: [
                                                    {
                                                        apiName: null,
                                                        componentType:
                                                            'EmptySpace'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Next Attack',
                                                layoutComponents: [
                                                    {
                                                        apiName:
                                                            'Next_Attack__c',
                                                        componentType: 'Field',
                                                        label: 'Next Attack'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: '',
                                                layoutComponents: [
                                                    {
                                                        apiName: null,
                                                        componentType:
                                                            'EmptySpace'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Wakeup time',
                                                layoutComponents: [
                                                    {
                                                        apiName:
                                                            'Wakeup_time__c',
                                                        componentType: 'Field',
                                                        label: 'Wakeup time'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: '',
                                                layoutComponents: [
                                                    {
                                                        apiName: null,
                                                        componentType:
                                                            'EmptySpace'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: 'Auto Number',
                                                layoutComponents: [
                                                    {
                                                        apiName:
                                                            'Auto_Number__c',
                                                        componentType: 'Field',
                                                        label: 'Auto Number'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: '',
                                                layoutComponents: [
                                                    {
                                                        apiName: null,
                                                        componentType:
                                                            'EmptySpace'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Hideout Location',
                                                layoutComponents: [
                                                    {
                                                        apiName:
                                                            'Hideout_Location__Latitude__s',
                                                        componentType: 'Field',
                                                        label:
                                                            'Hideout Location (Latitude)'
                                                    },

                                                    {
                                                        apiName:
                                                            'Hideout_Location__Longitude__s',
                                                        componentType: 'Field',
                                                        label:
                                                            'Hideout Location (Longitude)'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: '',
                                                layoutComponents: [
                                                    {
                                                        apiName: null,
                                                        componentType:
                                                            'EmptySpace'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Minions',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'Minions__c',
                                                        componentType: 'Field',
                                                        label: 'Minions'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: '',
                                                layoutComponents: [
                                                    {
                                                        apiName: null,
                                                        componentType:
                                                            'EmptySpace'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Cell Number',
                                                layoutComponents: [
                                                    {
                                                        apiName:
                                                            'Cell_Number__c',
                                                        componentType: 'Field',
                                                        label: 'Cell Number'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: '',
                                                layoutComponents: [
                                                    {
                                                        apiName: null,
                                                        componentType:
                                                            'EmptySpace'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Secret Code',
                                                layoutComponents: [
                                                    {
                                                        apiName:
                                                            'Secret_Code__c',
                                                        componentType: 'Field',
                                                        label: 'Secret Code'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: '',
                                                layoutComponents: [
                                                    {
                                                        apiName: null,
                                                        componentType:
                                                            'EmptySpace'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: true,
                                                editableForUpdate: true,
                                                label: 'Website',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'Website__c',
                                                        componentType: 'Field',
                                                        label: 'Website'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: '',
                                                layoutComponents: [
                                                    {
                                                        apiName: null,
                                                        componentType:
                                                            'EmptySpace'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: 'Has Website',
                                                layoutComponents: [
                                                    {
                                                        apiName:
                                                            'Has_Website__c',
                                                        componentType: 'Field',
                                                        label: 'Has Website'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: '',
                                                layoutComponents: [
                                                    {
                                                        apiName: null,
                                                        componentType:
                                                            'EmptySpace'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: 'Net Worth',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'Net_Worth__c',
                                                        componentType: 'Field',
                                                        label: 'Net Worth'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: '',
                                                layoutComponents: [
                                                    {
                                                        apiName: null,
                                                        componentType:
                                                            'EmptySpace'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: 'Attack Prep',
                                                layoutComponents: [
                                                    {
                                                        apiName:
                                                            'Attack_Prep__c',
                                                        componentType: 'Field',
                                                        label: 'Attack Prep'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: '',
                                                layoutComponents: [
                                                    {
                                                        apiName: null,
                                                        componentType:
                                                            'EmptySpace'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: 'Power Level Remaining',
                                                layoutComponents: [
                                                    {
                                                        apiName:
                                                            'Power_Level_Remaining__c',
                                                        componentType: 'Field',
                                                        label:
                                                            'Power Level Remaining'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: '',
                                                layoutComponents: [
                                                    {
                                                        apiName: null,
                                                        componentType:
                                                            'EmptySpace'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    },

                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: 'Converted Website',
                                                layoutComponents: [
                                                    {
                                                        apiName:
                                                            'Converted_Website__c',
                                                        componentType: 'Field',
                                                        label:
                                                            'Converted Website'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: '',
                                                layoutComponents: [
                                                    {
                                                        apiName: null,
                                                        componentType:
                                                            'EmptySpace'
                                                    }
                                                ],

                                                lookupIdApiName: null,
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    }
                                ],

                                rows: 26,
                                useHeading: false
                            },

                            {
                                collapsible: false,
                                columns: 2,
                                heading: 'System Information',
                                id: '01BR0000000ixA5MAI',
                                layoutRows: [
                                    {
                                        layoutItems: [
                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: 'Created By',
                                                layoutComponents: [
                                                    {
                                                        apiName: 'CreatedById',
                                                        componentType: 'Field',
                                                        label: 'Created By ID'
                                                    },

                                                    {
                                                        apiName: 'CreatedDate',
                                                        componentType: 'Field',
                                                        label: 'Created Date'
                                                    }
                                                ],

                                                lookupIdApiName: 'CreatedById',
                                                required: false,
                                                sortable: false
                                            },

                                            {
                                                editableForNew: false,
                                                editableForUpdate: false,
                                                label: 'Last Modified By',
                                                layoutComponents: [
                                                    {
                                                        apiName:
                                                            'LastModifiedById',
                                                        componentType: 'Field',
                                                        label:
                                                            'Last Modified By ID'
                                                    },

                                                    {
                                                        apiName:
                                                            'LastModifiedDate',
                                                        componentType: 'Field',
                                                        label:
                                                            'Last Modified Date'
                                                    }
                                                ],

                                                lookupIdApiName:
                                                    'LastModifiedById',
                                                required: false,
                                                sortable: false
                                            }
                                        ]
                                    }
                                ],

                                rows: 1,
                                useHeading: false
                            }
                        ]
                    }
                }
            }
        }
    },

    objectInfos: {
        Lead: {
            apiName: 'Lead',
            childRelationships: [
                {
                    childObjectApiName: 'AcceptedEventRelation',
                    fieldName: 'RelationId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'AcceptedEventRelations'
                },

                {
                    childObjectApiName: 'ActivityHistory',
                    fieldName: 'WhoId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'ActivityHistories'
                },

                {
                    childObjectApiName: 'AttachedContentDocument',
                    fieldName: 'LinkedEntityId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'AttachedContentDocuments'
                },

                {
                    childObjectApiName: 'Attachment',
                    fieldName: 'ParentId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'Attachments'
                },

                {
                    childObjectApiName: 'CampaignMember',
                    fieldName: 'LeadId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'CampaignMembers'
                },

                {
                    childObjectApiName: 'CleanInfo',
                    fieldName: 'TargetEntityId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'CleanInfos'
                },

                {
                    childObjectApiName: 'CollaborationGroupRecord',
                    fieldName: 'RecordId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'RecordAssociatedGroups'
                },

                {
                    childObjectApiName: 'CombinedAttachment',
                    fieldName: 'ParentId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'CombinedAttachments'
                },

                {
                    childObjectApiName: 'ContentDocumentLink',
                    fieldName: 'LinkedEntityId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'ContentDocumentLinks'
                },

                {
                    childObjectApiName: 'DeclinedEventRelation',
                    fieldName: 'RelationId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'DeclinedEventRelations'
                },

                {
                    childObjectApiName: 'DuplicateRecordItem',
                    fieldName: 'RecordId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'DuplicateRecordItems'
                },

                {
                    childObjectApiName: 'EmailMessageRelation',
                    fieldName: 'RelationId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'EmailMessageRelations'
                },

                {
                    childObjectApiName: 'EmailStatus',
                    fieldName: 'WhoId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'EmailStatuses'
                },

                {
                    childObjectApiName: 'EntitySubscription',
                    fieldName: 'ParentId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'FeedSubscriptionsForEntity'
                },

                {
                    childObjectApiName: 'Event',
                    fieldName: 'WhoId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'Events'
                },

                {
                    childObjectApiName: 'EventRelation',
                    fieldName: 'RelationId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'EventRelations'
                },

                {
                    childObjectApiName: 'LeadFeed',
                    fieldName: 'ParentId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'Feeds'
                },

                {
                    childObjectApiName: 'LeadHistory',
                    fieldName: 'LeadId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'Histories'
                },

                {
                    childObjectApiName: 'LeadShare',
                    fieldName: 'LeadId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'Shares'
                },

                {
                    childObjectApiName: 'ListEmailSentResult',
                    fieldName: 'RecipientId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'ListEmailRecipients'
                },

                {
                    childObjectApiName: 'Note',
                    fieldName: 'ParentId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'Notes'
                },

                {
                    childObjectApiName: 'NoteAndAttachment',
                    fieldName: 'ParentId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'NotesAndAttachments'
                },

                {
                    childObjectApiName: 'OpenActivity',
                    fieldName: 'WhoId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'OpenActivities'
                },

                {
                    childObjectApiName: 'OutgoingEmailRelation',
                    fieldName: 'RelationId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'OutgoingEmailRelations'
                },

                {
                    childObjectApiName: 'ProcessInstance',
                    fieldName: 'TargetObjectId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'ProcessInstances'
                },

                {
                    childObjectApiName: 'ProcessInstanceHistory',
                    fieldName: 'TargetObjectId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'ProcessSteps'
                },

                {
                    childObjectApiName: 'SocialPersona',
                    fieldName: 'ParentId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'Personas'
                },

                {
                    childObjectApiName: 'SocialPost',
                    fieldName: 'WhoId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'Posts'
                },

                {
                    childObjectApiName: 'Task',
                    fieldName: 'WhoId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'Tasks'
                },

                {
                    childObjectApiName: 'TopicAssignment',
                    fieldName: 'EntityId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'TopicAssignments'
                },

                {
                    childObjectApiName: 'UndecidedEventRelation',
                    fieldName: 'RelationId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'UndecidedEventRelations'
                }
            ],

            createable: true,
            custom: false,
            defaultRecordTypeId: null,
            deleteable: true,
            dependentFields: {
                CountryCode: {
                    StateCode: {}
                }
            },

            feedEnabled: true,
            fields: {
                Address: {
                    apiName: 'Address',
                    calculated: false,
                    compound: true,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Address',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Address',
                    length: 0,
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
                    sortable: false,
                    unique: false,
                    updateable: false
                },

                AnnualRevenue: {
                    apiName: 'AnnualRevenue',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Currency',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Annual Revenue',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 18,
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
                },

                City: {
                    apiName: 'City',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'City',
                    compoundFieldName: 'Address',
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'City',
                    length: 40,
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
                },

                Company: {
                    apiName: 'Company',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Company',
                    length: 255,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                ConvertedAccountId: {
                    apiName: 'ConvertedAccountId',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Converted Account ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'Account',
                            nameFields: ['FirstName', 'LastName', 'Name']
                        }
                    ],

                    relationshipName: 'ConvertedAccount',
                    required: false,
                    scale: 0,
                    searchPrefilterable: true,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                ConvertedContactId: {
                    apiName: 'ConvertedContactId',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Converted Contact ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'Contact',
                            nameFields: ['FirstName', 'LastName', 'Name']
                        }
                    ],

                    relationshipName: 'ConvertedContact',
                    required: false,
                    scale: 0,
                    searchPrefilterable: true,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                ConvertedDate: {
                    apiName: 'ConvertedDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Date',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Converted Date',
                    length: 0,
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
                    updateable: false
                },

                ConvertedOpportunityId: {
                    apiName: 'ConvertedOpportunityId',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Converted Opportunity ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'Opportunity',
                            nameFields: ['FirstName', 'LastName', 'Name']
                        }
                    ],

                    relationshipName: 'ConvertedOpportunity',
                    required: false,
                    scale: 0,
                    searchPrefilterable: true,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                Country: {
                    apiName: 'Country',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'Country',
                    compoundFieldName: 'Address',
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Country',
                    length: 80,
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
                },

                CountryCode: {
                    apiName: 'CountryCode',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'Country',
                    compoundFieldName: 'Address',
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Picklist',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Country Code',
                    length: 10,
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
                },

                CreatedById: {
                    apiName: 'CreatedById',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Created By ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'User',
                            nameFields: ['FirstName', 'LastName', 'Name']
                        }
                    ],

                    relationshipName: 'CreatedBy',
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                CreatedDate: {
                    apiName: 'CreatedDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Created Date',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                Description: {
                    apiName: 'Description',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'TextArea',
                    extraTypeInfo: 'PlainTextArea',
                    filterable: false,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Description',
                    length: 32000,
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
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                Email: {
                    apiName: 'Email',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Email',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Email',
                    length: 80,
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
                },

                EmailBouncedDate: {
                    apiName: 'EmailBouncedDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Email Bounced Date',
                    length: 0,
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
                },

                EmailBouncedReason: {
                    apiName: 'EmailBouncedReason',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Email Bounced Reason',
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
                },

                FirstName: {
                    apiName: 'FirstName',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'FirstName',
                    compoundFieldName: 'Name',
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: 'PersonName',
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'First Name',
                    length: 40,
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
                },

                GeocodeAccuracy: {
                    apiName: 'GeocodeAccuracy',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'GeocodeAccuracy',
                    compoundFieldName: 'Address',
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Picklist',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Geocode Accuracy',
                    length: 40,
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
                },

                Id: {
                    apiName: 'Id',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Lead ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                Industry: {
                    apiName: 'Industry',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Picklist',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Industry',
                    length: 40,
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
                },

                IsConverted: {
                    apiName: 'IsConverted',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Converted',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                IsDeleted: {
                    apiName: 'IsDeleted',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Deleted',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                IsUnreadByOwner: {
                    apiName: 'IsUnreadByOwner',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Unread By Owner',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                Jigsaw: {
                    apiName: 'Jigsaw',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Data.com Key',
                    length: 20,
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
                },

                JigsawContactId: {
                    apiName: 'JigsawContactId',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Jigsaw Contact ID',
                    length: 20,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: 'JigsawContact',
                    required: false,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                LastActivityDate: {
                    apiName: 'LastActivityDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Date',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Activity',
                    length: 0,
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
                    updateable: false
                },

                LastModifiedById: {
                    apiName: 'LastModifiedById',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Modified By ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'User',
                            nameFields: ['FirstName', 'LastName', 'Name']
                        }
                    ],

                    relationshipName: 'LastModifiedBy',
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                LastModifiedDate: {
                    apiName: 'LastModifiedDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Modified Date',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                LastName: {
                    apiName: 'LastName',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'LastName',
                    compoundFieldName: 'Name',
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: 'PersonName',
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Name',
                    length: 80,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                LastReferencedDate: {
                    apiName: 'LastReferencedDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Referenced Date',
                    length: 0,
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
                    updateable: false
                },

                LastViewedDate: {
                    apiName: 'LastViewedDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Viewed Date',
                    length: 0,
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
                    updateable: false
                },

                Latitude: {
                    apiName: 'Latitude',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'Latitude',
                    compoundFieldName: 'Address',
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Double',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Latitude',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 18,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: false,
                    scale: 15,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                LeadSource: {
                    apiName: 'LeadSource',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Picklist',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Lead Source',
                    length: 40,
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
                },

                Longitude: {
                    apiName: 'Longitude',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'Longitude',
                    compoundFieldName: 'Address',
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Double',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Longitude',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 18,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: false,
                    scale: 15,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                MasterRecordId: {
                    apiName: 'MasterRecordId',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Master Record ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'Lead',
                            nameFields: ['FirstName', 'LastName', 'Name']
                        }
                    ],

                    relationshipName: 'MasterRecord',
                    required: false,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                Name: {
                    apiName: 'Name',
                    calculated: false,
                    compound: true,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: 'PersonName',
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Full Name',
                    length: 121,
                    nameField: true,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                NumberOfEmployees: {
                    apiName: 'NumberOfEmployees',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Int',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Employees',
                    length: 0,
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
                },

                OwnerId: {
                    apiName: 'OwnerId',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Owner ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: true,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'Group',
                            nameFields: ['FirstName', 'LastName', 'Name']
                        },

                        {
                            apiName: 'User',
                            nameFields: ['FirstName', 'LastName', 'Name']
                        }
                    ],

                    relationshipName: 'Owner',
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                Phone: {
                    apiName: 'Phone',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Phone',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Phone',
                    length: 40,
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
                },

                PhotoUrl: {
                    apiName: 'PhotoUrl',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Url',
                    extraTypeInfo: 'ImageUrl',
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Photo URL',
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
                    updateable: false
                },

                PostalCode: {
                    apiName: 'PostalCode',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'PostalCode',
                    compoundFieldName: 'Address',
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Zip/Postal Code',
                    length: 20,
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
                },

                Rating: {
                    apiName: 'Rating',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Picklist',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Rating',
                    length: 40,
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
                },

                Salutation: {
                    apiName: 'Salutation',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'Salutation',
                    compoundFieldName: 'Name',
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Picklist',
                    extraTypeInfo: 'PersonName',
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Salutation',
                    length: 40,
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
                },

                State: {
                    apiName: 'State',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'State',
                    compoundFieldName: 'Address',
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'State/Province',
                    length: 80,
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
                },

                StateCode: {
                    apiName: 'StateCode',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'State',
                    compoundFieldName: 'Address',
                    controllerName: 'CountryCode',
                    createable: true,
                    custom: false,
                    dataType: 'Picklist',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'State/Province Code',
                    length: 10,
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
                },

                Status: {
                    apiName: 'Status',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Picklist',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Status',
                    length: 40,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                Street: {
                    apiName: 'Street',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'Street',
                    compoundFieldName: 'Address',
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'TextArea',
                    extraTypeInfo: 'PlainTextArea',
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Street',
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
                },

                SystemModstamp: {
                    apiName: 'SystemModstamp',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'System Modstamp',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                Title: {
                    apiName: 'Title',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Title',
                    length: 128,
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
                },

                Website: {
                    apiName: 'Website',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Url',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Website',
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
                }
            },

            keyPrefix: '00Q',
            label: 'Lead',
            labelPlural: 'Leads',
            layoutable: true,
            mruEnabled: true,
            nameFields: ['FirstName', 'LastName', 'Name'],
            queryable: true,
            recordTypeInfos: {
                '012000000000000AAA': {
                    available: true,
                    defaultRecordTypeMapping: true,
                    master: true,
                    name: 'Master',
                    recordTypeId: '012000000000000AAA'
                }
            },

            searchable: true,
            themeInfo: {
                color: 'F88962',
                iconUrl:
                    'https://saw28.mobile01.blitz.salesforce.com/img/icon/t4v35/standard/lead_120.png'
            },

            updateable: true
        },

        Everything__c: {
            apiName: 'Everything__c',
            fields: {
                Auto_Number__c: {
                    apiName: 'Auto_Number__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: true,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Auto Number',
                    length: 30,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                Checkbox__c: {
                    apiName: 'Checkbox__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: 'Help Text for Checkbox',
                    label: 'Checkbox',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                Contact_Phone__c: {
                    apiName: 'Contact_Phone__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'Phone',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Contact Phone',
                    length: 40,
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
                },

                CreatedById: {
                    apiName: 'CreatedById',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Created By ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'User',
                            nameFields: ['Name']
                        }
                    ],

                    relationshipName: 'CreatedBy',
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                CreatedDate: {
                    apiName: 'CreatedDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Created Date',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                DateTime__c: {
                    apiName: 'DateTime__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'DateTime',
                    length: 0,
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
                },

                Date__c: {
                    apiName: 'Date__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'Date',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Date',
                    length: 0,
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
                },

                Double__c: {
                    apiName: 'Double__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'Double',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Double',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 18,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: false,
                    scale: 4,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                Email__c: {
                    apiName: 'Email__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'Email',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Email',
                    length: 80,
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
                },

                Formula_Checkbox__c: {
                    apiName: 'Formula_Checkbox__c',
                    calculated: true,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: true,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Formula Checkbox',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                Formula_Currency__c: {
                    apiName: 'Formula_Currency__c',
                    calculated: true,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: true,
                    dataType: 'Currency',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Formula Currency',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 18,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: false,
                    scale: 2,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                Formula_DateTime__c: {
                    apiName: 'Formula_DateTime__c',
                    calculated: true,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: true,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Formula DateTime',
                    length: 0,
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
                    updateable: false
                },

                Formula_Date__c: {
                    apiName: 'Formula_Date__c',
                    calculated: true,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: true,
                    dataType: 'Date',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Formula Date',
                    length: 0,
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
                    updateable: false
                },

                Formula_HTML__c: {
                    apiName: 'Formula_HTML__c',
                    calculated: true,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: true,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: true,
                    inlineHelpText: null,
                    label: 'Formula HTML',
                    length: 1300,
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
                    updateable: false
                },

                Formula_Number__c: {
                    apiName: 'Formula_Number__c',
                    calculated: true,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: true,
                    dataType: 'Double',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Formula Number',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 18,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: false,
                    scale: 2,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                Formula_Percent__c: {
                    apiName: 'Formula_Percent__c',
                    calculated: true,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: true,
                    dataType: 'Percent',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Formula Percent',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 18,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: false,
                    scale: 2,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                Formula_Text__c: {
                    apiName: 'Formula_Text__c',
                    calculated: true,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: true,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Formula Text',
                    length: 1300,
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
                    updateable: false
                },

                GeoLoc__Latitude__s: {
                    apiName: 'GeoLoc__Latitude__s',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'Latitude',
                    compoundFieldName: 'GeoLoc__c',
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'Double',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'GeoLoc (Latitude)',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 5,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: false,
                    scale: 2,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                GeoLoc__Longitude__s: {
                    apiName: 'GeoLoc__Longitude__s',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'Longitude',
                    compoundFieldName: 'GeoLoc__c',
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'Double',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'GeoLoc (Longitude)',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 5,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: false,
                    scale: 2,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                GeoLoc__c: {
                    apiName: 'GeoLoc__c',
                    calculated: false,
                    compound: true,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: true,
                    dataType: 'Location',
                    extraTypeInfo: null,
                    filterable: false,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: 'Location of some random place.',
                    label: 'GeoLoc',
                    length: 0,
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
                    sortable: false,
                    unique: false,
                    updateable: false
                },

                Id: {
                    apiName: 'Id',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Record ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                IsDeleted: {
                    apiName: 'IsDeleted',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Deleted',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                Javascript__c: {
                    apiName: 'Javascript__c',
                    calculated: true,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: true,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: true,
                    inlineHelpText: null,
                    label: 'Javascript',
                    length: 1300,
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
                    updateable: false
                },

                LastModifiedById: {
                    apiName: 'LastModifiedById',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Modified By ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'User',
                            nameFields: ['Name']
                        }
                    ],

                    relationshipName: 'LastModifiedBy',
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                LastModifiedDate: {
                    apiName: 'LastModifiedDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Modified Date',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                LastReferencedDate: {
                    apiName: 'LastReferencedDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Referenced Date',
                    length: 0,
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
                    updateable: false
                },

                LastViewedDate: {
                    apiName: 'LastViewedDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Viewed Date',
                    length: 0,
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
                    updateable: false
                },

                Moneys__c: {
                    apiName: 'Moneys__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'Currency',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Moneys',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 18,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: false,
                    scale: 2,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                MultiPicklist__c: {
                    apiName: 'MultiPicklist__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'MultiPicklist',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'MultiPicklist',
                    length: 4099,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 4,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: false,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                Name: {
                    apiName: 'Name',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Everything Name',
                    length: 80,
                    nameField: true,
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
                },

                OwnerId: {
                    apiName: 'OwnerId',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Owner ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: true,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'Group',
                            nameFields: ['Name']
                        },

                        {
                            apiName: 'User',
                            nameFields: ['Name']
                        }
                    ],

                    relationshipName: 'Owner',
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                Percentage__c: {
                    apiName: 'Percentage__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'Percent',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Percentage',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 18,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: false,
                    scale: 2,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                Picklist__c: {
                    apiName: 'Picklist__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'Picklist',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Picklist',
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
                },

                Quantity__c: {
                    apiName: 'Quantity__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'Double',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Quantity',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 18,
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
                },

                Rich_Description__c: {
                    apiName: 'Rich_Description__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'TextArea',
                    extraTypeInfo: 'RichTextArea',
                    filterable: false,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: true,
                    inlineHelpText: null,
                    label: 'Rich Description',
                    length: 32768,
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
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                Secret__c: {
                    apiName: 'Secret__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'EncryptedString',
                    extraTypeInfo: null,
                    filterable: false,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Secret',
                    length: 25,
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
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                SystemModstamp: {
                    apiName: 'SystemModstamp',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'System Modstamp',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                Text_Area_Long__c: {
                    apiName: 'Text_Area_Long__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'TextArea',
                    extraTypeInfo: 'PlainTextArea',
                    filterable: false,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Text Area Long',
                    length: 32768,
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
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                Text_Area__c: {
                    apiName: 'Text_Area__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'TextArea',
                    extraTypeInfo: 'PlainTextArea',
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: 'This is a text area',
                    label: 'Text Area',
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
                },

                Text_Content__c: {
                    apiName: 'Text_Content__c',
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
                    label: 'Text Content',
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
                },

                Time__c: {
                    apiName: 'Time__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Time',
                    length: 0,
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
                },

                Website__c: {
                    apiName: 'Website__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'Url',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Website',
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
                }
            }
        },

        Bad_Guy__c: {
            apiName: 'Bad_Guy__c',
            childRelationships: [
                {
                    childObjectApiName: 'AttachedContentDocument',
                    fieldName: 'LinkedEntityId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'AttachedContentDocuments'
                },

                {
                    childObjectApiName: 'Attachment',
                    fieldName: 'ParentId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'Attachments'
                },

                {
                    childObjectApiName: 'CollaborationGroupRecord',
                    fieldName: 'RecordId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'RecordAssociatedGroups'
                },

                {
                    childObjectApiName: 'CombinedAttachment',
                    fieldName: 'ParentId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'CombinedAttachments'
                },

                {
                    childObjectApiName: 'ContentDocumentLink',
                    fieldName: 'LinkedEntityId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'ContentDocumentLinks'
                },

                {
                    childObjectApiName: 'DuplicateRecordItem',
                    fieldName: 'RecordId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'DuplicateRecordItems'
                },

                {
                    childObjectApiName: 'EmailMessage',
                    fieldName: 'RelatedToId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'Emails'
                },

                {
                    childObjectApiName: 'EntitySubscription',
                    fieldName: 'ParentId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'FeedSubscriptionsForEntity'
                },

                {
                    childObjectApiName: 'Note',
                    fieldName: 'ParentId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'Notes'
                },

                {
                    childObjectApiName: 'NoteAndAttachment',
                    fieldName: 'ParentId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'NotesAndAttachments'
                },

                {
                    childObjectApiName: 'Opportunity',
                    fieldName: 'Bad_guy__c',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'Opportunities__r'
                },

                {
                    childObjectApiName: 'ProcessInstance',
                    fieldName: 'TargetObjectId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'ProcessInstances'
                },

                {
                    childObjectApiName: 'ProcessInstanceHistory',
                    fieldName: 'TargetObjectId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'ProcessSteps'
                },

                {
                    childObjectApiName: 'TopicAssignment',
                    fieldName: 'EntityId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'TopicAssignments'
                }
            ],

            createable: true,
            custom: true,
            defaultRecordTypeId: null,
            deleteable: true,
            dependentFields: {
                Country__c: {
                    MultiCity__c: {},
                    States_Provinces__c: {
                        City__c: {}
                    }
                },

                Has_Weakness__c: {
                    Weakness__c: {}
                }
            },

            eTag: 'b3618660775deda03c4751b166dde673',
            feedEnabled: false,
            fields: {
                Attack_Prep__c: {
                    apiName: 'Attack_Prep__c',
                    calculated: true,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: true,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Attack Prep',
                    length: 0,
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
                    updateable: false
                },

                Auto_Number__c: {
                    apiName: 'Auto_Number__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: true,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: 'Auto Number Help Text',
                    label: 'Auto Number',
                    length: 30,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                Birthday__c: {
                    apiName: 'Birthday__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'Date',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: '??',
                    label: 'Birthday',
                    length: 0,
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
                },

                Cell_Number__c: {
                    apiName: 'Cell_Number__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'Phone',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Cell Number',
                    length: 40,
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
                },

                City__c: {
                    apiName: 'City__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: 'States_Provinces__c',
                    createable: true,
                    custom: true,
                    dataType: 'Picklist',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'City',
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
                },

                Converted_Website__c: {
                    apiName: 'Converted_Website__c',
                    calculated: true,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: true,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: true,
                    inlineHelpText: null,
                    label: 'Converted Website',
                    length: 1300,
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
                    updateable: false
                },

                Country__c: {
                    apiName: 'Country__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'Picklist',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Country',
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
                },

                CreatedById: {
                    apiName: 'CreatedById',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Created By ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'User',
                            nameFields: ['Name']
                        }
                    ],

                    relationshipName: 'CreatedBy',
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                CreatedDate: {
                    apiName: 'CreatedDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Created Date',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                Description__c: {
                    apiName: 'Description__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'TextArea',
                    extraTypeInfo: 'PlainTextArea',
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: 'Describe the bad guy',
                    label: 'Description',
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
                },

                Email_Address__c: {
                    apiName: 'Email_Address__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'Email',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: 'How can we reach him via email?',
                    label: 'Email Address',
                    length: 80,
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
                },

                Has_Weakness__c: {
                    apiName: 'Has_Weakness__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Has Weakness',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                Has_Website__c: {
                    apiName: 'Has_Website__c',
                    calculated: true,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: true,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Has Website',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                Hideout_Location__Latitude__s: {
                    apiName: 'Hideout_Location__Latitude__s',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'Latitude',
                    compoundFieldName: 'Hideout_Location__c',
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'Double',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Hideout Location (Latitude)',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 5,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: false,
                    scale: 2,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                Hideout_Location__Longitude__s: {
                    apiName: 'Hideout_Location__Longitude__s',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'Longitude',
                    compoundFieldName: 'Hideout_Location__c',
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'Double',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Hideout Location (Longitude)',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 5,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: false,
                    scale: 2,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                Hideout_Location__c: {
                    apiName: 'Hideout_Location__c',
                    calculated: false,
                    compound: true,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: true,
                    dataType: 'Location',
                    extraTypeInfo: null,
                    filterable: false,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Hideout Location',
                    length: 0,
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
                    sortable: false,
                    unique: false,
                    updateable: false
                },

                Id: {
                    apiName: 'Id',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Record ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                IsDeleted: {
                    apiName: 'IsDeleted',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Deleted',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                LastModifiedById: {
                    apiName: 'LastModifiedById',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Modified By ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'User',
                            nameFields: ['Name']
                        }
                    ],

                    relationshipName: 'LastModifiedBy',
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                LastModifiedDate: {
                    apiName: 'LastModifiedDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Modified Date',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                LastReferencedDate: {
                    apiName: 'LastReferencedDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Referenced Date',
                    length: 0,
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
                    updateable: false
                },

                LastViewedDate: {
                    apiName: 'LastViewedDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Viewed Date',
                    length: 0,
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
                    updateable: false
                },

                Minions__c: {
                    apiName: 'Minions__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'Double',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Minions',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 18,
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
                },

                MultiCity__c: {
                    apiName: 'MultiCity__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: 'Country__c',
                    createable: true,
                    custom: true,
                    dataType: 'MultiPicklist',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'MultiCity',
                    length: 4099,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 4,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: false,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                Name: {
                    apiName: 'Name',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Bad Guy Name',
                    length: 80,
                    nameField: true,
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
                },

                Net_Worth__c: {
                    apiName: 'Net_Worth__c',
                    calculated: true,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: true,
                    dataType: 'Currency',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Net Worth',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 18,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: false,
                    scale: 2,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                Next_Attack__c: {
                    apiName: 'Next_Attack__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Next Attack',
                    length: 0,
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
                },

                Nickname__c: {
                    apiName: 'Nickname__c',
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
                    inlineHelpText: 'How should we address this bad guy?',
                    label: 'Nickname',
                    length: 64,
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
                },

                OwnerId: {
                    apiName: 'OwnerId',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Owner ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: true,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'Group',
                            nameFields: ['Name']
                        },

                        {
                            apiName: 'User',
                            nameFields: ['Name']
                        }
                    ],

                    relationshipName: 'Owner',
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                Power_Level_Remaining__c: {
                    apiName: 'Power_Level_Remaining__c',
                    calculated: true,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: true,
                    dataType: 'Percent',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Power Level Remaining',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 18,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: false,
                    scale: 2,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                Power_level__c: {
                    apiName: 'Power_level__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'Percent',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Power level',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 18,
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
                },

                Rich_Text_Field__c: {
                    apiName: 'Rich_Text_Field__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'TextArea',
                    extraTypeInfo: 'RichTextArea',
                    filterable: false,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: true,
                    inlineHelpText:
                        'I couldn&#39;t think of a creative name for this',
                    label: 'Rich Text Field',
                    length: 32768,
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
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                Salary_Per_Year__c: {
                    apiName: 'Salary_Per_Year__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'Currency',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: 'How much does this guy get paid?',
                    label: 'Salary Per Year',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 18,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                Secret_Code__c: {
                    apiName: 'Secret_Code__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'EncryptedString',
                    extraTypeInfo: null,
                    filterable: false,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Secret Code',
                    length: 16,
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
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                States_Provinces__c: {
                    apiName: 'States_Provinces__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: 'Country__c',
                    createable: true,
                    custom: true,
                    dataType: 'Picklist',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'States/Provinces',
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
                },

                SystemModstamp: {
                    apiName: 'SystemModstamp',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'System Modstamp',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                Territories_Covered__c: {
                    apiName: 'Territories_Covered__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'MultiPicklist',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Territories Covered',
                    length: 4099,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 3,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: false,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                Wakeup_time__c: {
                    apiName: 'Wakeup_time__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'Time',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Wakeup time',
                    length: 0,
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
                },

                Weakness__c: {
                    apiName: 'Weakness__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: 'Has_Weakness__c',
                    createable: true,
                    custom: true,
                    dataType: 'Picklist',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Weakness',
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
                },

                Weapon__c: {
                    apiName: 'Weapon__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Weapon',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'Weapon__c',
                            nameFields: ['Name']
                        }
                    ],

                    relationshipName: 'Weapon__r',
                    required: false,
                    scale: 0,
                    searchPrefilterable: true,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                Website__c: {
                    apiName: 'Website__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'Url',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: 'A bad guy&#39;s gotta have a homepage too',
                    label: 'Website',
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
                },

                age__c: {
                    apiName: 'age__c',
                    calculated: true,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: true,
                    dataType: 'Double',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'age',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 18,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: false,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                }
            },

            keyPrefix: 'a00',
            label: 'Bad Guy',
            labelPlural: 'Bad Guys',
            layoutable: true,
            mruEnabled: true,
            nameFields: ['Name'],
            queryable: true,
            recordTypeInfos: {
                '012000000000000AAA': {
                    available: true,
                    defaultRecordTypeMapping: true,
                    master: true,
                    name: 'Master',
                    recordTypeId: '012000000000000AAA'
                }
            },

            searchable: true,
            themeInfo: {
                color: 'e1d951',
                iconUrl:
                    'https://mobile1.t.salesforce.com/img/icon/t4v35/custom/custom4_120.png'
            },

            updateable: true
        },

        Group: {
            apiName: 'Group',
            childRelationships: [
                {
                    childObjectApiName: 'GroupMember',
                    fieldName: 'GroupId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'GroupMembers'
                },

                {
                    childObjectApiName: 'QueueSobject',
                    fieldName: 'QueueId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'QueueSobjects'
                },

                {
                    childObjectApiName: 'User',
                    fieldName: 'DelegatedApproverId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'DelegatedUsers'
                }
            ],

            createable: true,
            custom: false,
            defaultRecordTypeId: null,
            deleteable: true,
            eTag: 'f7c32b4a89a061c1295d94345fe728ca',
            feedEnabled: false,
            fields: {
                CreatedById: {
                    apiName: 'CreatedById',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Created By ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'User',
                            nameFields: ['Name']
                        }
                    ],

                    relationshipName: 'CreatedBy',
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                CreatedDate: {
                    apiName: 'CreatedDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Created Date',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                DeveloperName: {
                    apiName: 'DeveloperName',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Developer Name',
                    length: 80,
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
                },

                DoesIncludeBosses: {
                    apiName: 'DoesIncludeBosses',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Include Bosses',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                DoesSendEmailToMembers: {
                    apiName: 'DoesSendEmailToMembers',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Send Email to Members',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                Email: {
                    apiName: 'Email',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Email',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Email',
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
                },

                Id: {
                    apiName: 'Id',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Group ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                LastModifiedById: {
                    apiName: 'LastModifiedById',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Modified By ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'User',
                            nameFields: ['Name']
                        }
                    ],

                    relationshipName: 'LastModifiedBy',
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                LastModifiedDate: {
                    apiName: 'LastModifiedDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Modified Date',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                Name: {
                    apiName: 'Name',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Name',
                    length: 40,
                    nameField: true,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                OwnerId: {
                    apiName: 'OwnerId',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Owner ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: true,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'Organization',
                            nameFields: ['Name']
                        },

                        {
                            apiName: 'User',
                            nameFields: ['Name']
                        }
                    ],

                    relationshipName: 'Owner',
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                RelatedId: {
                    apiName: 'RelatedId',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Related ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: true,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'Portal',
                            nameFields: ['Name']
                        },

                        {
                            apiName: 'User',
                            nameFields: ['Name']
                        },

                        {
                            apiName: 'UserRole',
                            nameFields: ['Name']
                        }
                    ],

                    relationshipName: 'Related',
                    required: false,
                    scale: 0,
                    searchPrefilterable: true,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                SystemModstamp: {
                    apiName: 'SystemModstamp',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'System Modstamp',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                Type: {
                    apiName: 'Type',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Picklist',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Type',
                    length: 40,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                }
            },

            keyPrefix: '00G',
            label: 'Group',
            labelPlural: 'Group',
            layoutable: false,
            mruEnabled: false,
            nameFields: ['Name'],
            queryable: true,
            recordTypeInfos: {},
            searchable: true,
            themeInfo: {
                color: '769ED9',
                iconUrl:
                    'https://mobile1.t.salesforce.com/img/icon/t4v35/standard/orders_120.png'
            },

            updateable: true
        },

        Name: {
            apiName: 'Name',
            childRelationships: [],
            createable: false,
            custom: false,
            defaultRecordTypeId: null,
            deleteable: false,
            eTag: '29b41f95a5db5e36a564502a1b970ba6',
            feedEnabled: false,
            fields: {
                Alias: {
                    apiName: 'Alias',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Alias',
                    length: 8,
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
                    updateable: false
                },

                CommunityNickname: {
                    apiName: 'CommunityNickname',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Nickname',
                    length: 40,
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
                    updateable: false
                },

                Email: {
                    apiName: 'Email',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Email',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Email',
                    length: 80,
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
                    updateable: false
                },

                FirstName: {
                    apiName: 'FirstName',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'FirstName',
                    compoundFieldName: 'Name',
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: 'SwitchablePersonName',
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'First Name',
                    length: 40,
                    nameField: true,
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
                    updateable: false
                },

                Id: {
                    apiName: 'Id',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                IsActive: {
                    apiName: 'IsActive',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Active',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                LastName: {
                    apiName: 'LastName',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'LastName',
                    compoundFieldName: 'Name',
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: 'SwitchablePersonName',
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Name',
                    length: 80,
                    nameField: true,
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
                    updateable: false
                },

                LastReferencedDate: {
                    apiName: 'LastReferencedDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Referenced Date',
                    length: 0,
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
                    updateable: false
                },

                LastViewedDate: {
                    apiName: 'LastViewedDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Viewed Date',
                    length: 0,
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
                    updateable: false
                },

                Name: {
                    apiName: 'Name',
                    calculated: false,
                    compound: true,
                    compoundComponentName: null,
                    compoundFieldName: 'Name',
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: 'SwitchablePersonName',
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Name',
                    length: 255,
                    nameField: true,
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
                    updateable: false
                },

                NameOrAlias: {
                    apiName: 'NameOrAlias',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Name or Alias',
                    length: 80,
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
                    updateable: false
                },

                Phone: {
                    apiName: 'Phone',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Phone',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Phone',
                    length: 40,
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
                    updateable: false
                },

                ProfileId: {
                    apiName: 'ProfileId',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Profile ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'Profile',
                            nameFields: ['FirstName', 'LastName', 'Name']
                        }
                    ],

                    relationshipName: 'Profile',
                    required: false,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                RecordTypeId: {
                    apiName: 'RecordTypeId',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Record Type ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'RecordType',
                            nameFields: ['FirstName', 'LastName', 'Name']
                        }
                    ],

                    relationshipName: 'RecordType',
                    required: false,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                Title: {
                    apiName: 'Title',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Title',
                    length: 80,
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
                    updateable: false
                },

                Type: {
                    apiName: 'Type',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Picklist',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Type',
                    length: 40,
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
                    updateable: false
                },

                UserRoleId: {
                    apiName: 'UserRoleId',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Role ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'UserRole',
                            nameFields: ['FirstName', 'LastName', 'Name']
                        }
                    ],

                    relationshipName: 'UserRole',
                    required: false,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                Username: {
                    apiName: 'Username',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Username',
                    length: 80,
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
                    updateable: false
                }
            },

            keyPrefix: null,
            label: 'Name',
            labelPlural: 'Names',
            layoutable: false,
            mruEnabled: false,
            nameFields: ['FirstName', 'LastName', 'Name'],
            queryable: false,
            recordTypeInfos: {},
            searchable: false,
            themeInfo: null,
            updateable: false
        },

        User: {
            apiName: 'User',
            childRelationships: [
                {
                    childObjectApiName: 'AcceptedEventRelation',
                    fieldName: 'RelationId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'AcceptedEventRelations'
                },

                {
                    childObjectApiName: 'AnalyticNotification',
                    fieldName: 'RunAsId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'AnalyticNotificationRunAsUsers'
                },

                {
                    childObjectApiName: 'AttachedContentDocument',
                    fieldName: 'LinkedEntityId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'AttachedContentDocuments'
                },

                {
                    childObjectApiName: 'CollaborationGroupMember',
                    fieldName: 'MemberId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'GroupMemberships'
                },

                {
                    childObjectApiName: 'CollaborationGroupMemberRequest',
                    fieldName: 'RequesterId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'GroupMembershipRequests'
                },

                {
                    childObjectApiName: 'CombinedAttachment',
                    fieldName: 'ParentId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'CombinedAttachments'
                },

                {
                    childObjectApiName: 'ContentDocumentLink',
                    fieldName: 'LinkedEntityId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'ContentDocumentLinks'
                },

                {
                    childObjectApiName: 'Contract',
                    fieldName: 'CompanySignedId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'ContractsSigned'
                },

                {
                    childObjectApiName: 'DeclinedEventRelation',
                    fieldName: 'RelationId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'DeclinedEventRelations'
                },

                {
                    childObjectApiName: 'EmailMessageRelation',
                    fieldName: 'RelationId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'EmailMessageRelations'
                },

                {
                    childObjectApiName: 'EntitySubscription',
                    fieldName: 'ParentId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'FeedSubscriptionsForEntity'
                },

                {
                    childObjectApiName: 'EntitySubscription',
                    fieldName: 'SubscriberId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'FeedSubscriptions'
                },

                {
                    childObjectApiName: 'EventRelation',
                    fieldName: 'RelationId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'EventRelations'
                },

                {
                    childObjectApiName: 'ExternalDataUserAuth',
                    fieldName: 'UserId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'ExternalDataUserAuths'
                },

                {
                    childObjectApiName: 'InstalledMobileApp',
                    fieldName: 'UserId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'InstalledMobileApps'
                },

                {
                    childObjectApiName: 'OutgoingEmailRelation',
                    fieldName: 'RelationId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'OutgoingEmailRelations'
                },

                {
                    childObjectApiName: 'OwnedContentDocument',
                    fieldName: 'OwnerId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'OwnedContentDocuments'
                },

                {
                    childObjectApiName: 'PermissionSetAssignment',
                    fieldName: 'AssigneeId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'PermissionSetAssignments'
                },

                {
                    childObjectApiName: 'PermissionSetLicenseAssign',
                    fieldName: 'AssigneeId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'PermissionSetLicenseAssignments'
                },

                {
                    childObjectApiName: 'Photo',
                    fieldName: 'ParentId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'Photos'
                },

                {
                    childObjectApiName: 'ProfileSkillEndorsement',
                    fieldName: 'UserId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'UserProfileSkillUserEndorsements'
                },

                {
                    childObjectApiName: 'ProfileSkillUser',
                    fieldName: 'UserId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'UserProfileSkillChildren'
                },

                {
                    childObjectApiName: 'SessionPermSetActivation',
                    fieldName: 'UserId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'SessionPermSetActivations'
                },

                {
                    childObjectApiName: 'Site',
                    fieldName: 'AdminId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'UserSites'
                },

                {
                    childObjectApiName: 'UndecidedEventRelation',
                    fieldName: 'RelationId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'UndecidedEventRelations'
                },

                {
                    childObjectApiName: 'User',
                    fieldName: 'DelegatedApproverId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'DelegatedUsers'
                },

                {
                    childObjectApiName: 'User',
                    fieldName: 'ManagerId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'ManagedUsers'
                },

                {
                    childObjectApiName: 'UserEntityAccess',
                    fieldName: 'UserId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'UserEntityAccessRights'
                },

                {
                    childObjectApiName: 'UserFeed',
                    fieldName: 'ParentId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'Feeds'
                },

                {
                    childObjectApiName: 'UserFieldAccess',
                    fieldName: 'UserId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'UserFieldAccessRights'
                },

                {
                    childObjectApiName: 'UserPreference',
                    fieldName: 'UserId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'UserPreferences'
                },

                {
                    childObjectApiName: 'UserShare',
                    fieldName: 'UserId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'Shares'
                },

                {
                    childObjectApiName: 'WorkBadge',
                    fieldName: 'RecipientId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'Badges'
                },

                {
                    childObjectApiName: 'WorkThanks',
                    fieldName: 'GiverId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'GivenThanks'
                }
            ],

            createable: true,
            custom: false,
            defaultRecordTypeId: null,
            deleteable: false,
            eTag: 'b081c54f1e78f9a1cdfc40e1933a153f',
            feedEnabled: true,
            fields: {
                AboutMe: {
                    apiName: 'AboutMe',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'TextArea',
                    extraTypeInfo: 'PlainTextArea',
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'About Me',
                    length: 1000,
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
                },

                AccountId: {
                    apiName: 'AccountId',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Account ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'Account',
                            nameFields: ['FirstName', 'LastName', 'Name']
                        }
                    ],

                    relationshipName: 'Account',
                    required: false,
                    scale: 0,
                    searchPrefilterable: true,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                Address: {
                    apiName: 'Address',
                    calculated: false,
                    compound: true,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Address',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Address',
                    length: 0,
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
                    sortable: false,
                    unique: false,
                    updateable: false
                },

                Alias: {
                    apiName: 'Alias',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Alias',
                    length: 8,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                BadgeText: {
                    apiName: 'BadgeText',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'User Photo badge text overlay',
                    length: 80,
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
                    updateable: false
                },

                BannerPhotoId: {
                    apiName: 'BannerPhotoId',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Photo ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'Photo',
                            nameFields: ['FirstName', 'LastName', 'Name']
                        }
                    ],

                    relationshipName: null,
                    required: false,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                BannerPhotoUrl: {
                    apiName: 'BannerPhotoUrl',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Url',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Url for banner photo',
                    length: 1024,
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
                    updateable: false
                },

                CallCenterId: {
                    apiName: 'CallCenterId',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Call Center ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'CallCenter',
                            nameFields: ['FirstName', 'LastName', 'Name']
                        }
                    ],

                    relationshipName: null,
                    required: false,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                City: {
                    apiName: 'City',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'City',
                    compoundFieldName: 'Address',
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'City',
                    length: 40,
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
                },

                CommunityNickname: {
                    apiName: 'CommunityNickname',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Nickname',
                    length: 40,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                CompanyName: {
                    apiName: 'CompanyName',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Company Name',
                    length: 80,
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
                },

                ContactId: {
                    apiName: 'ContactId',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Contact ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'Contact',
                            nameFields: ['FirstName', 'LastName', 'Name']
                        }
                    ],

                    relationshipName: 'Contact',
                    required: false,
                    scale: 0,
                    searchPrefilterable: true,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                Country: {
                    apiName: 'Country',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'Country',
                    compoundFieldName: 'Address',
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Country',
                    length: 80,
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
                },

                CreatedById: {
                    apiName: 'CreatedById',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Created By ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'User',
                            nameFields: ['FirstName', 'LastName', 'Name']
                        }
                    ],

                    relationshipName: 'CreatedBy',
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                CreatedDate: {
                    apiName: 'CreatedDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Created Date',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                DefaultGroupNotificationFrequency: {
                    apiName: 'DefaultGroupNotificationFrequency',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Picklist',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Default Notification Frequency when Joining Groups',
                    length: 40,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                DelegatedApproverId: {
                    apiName: 'DelegatedApproverId',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Delegated Approver ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: true,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'Group',
                            nameFields: ['FirstName', 'LastName', 'Name']
                        },

                        {
                            apiName: 'User',
                            nameFields: ['FirstName', 'LastName', 'Name']
                        }
                    ],

                    relationshipName: null,
                    required: false,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                Department: {
                    apiName: 'Department',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Department',
                    length: 80,
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
                },

                DigestFrequency: {
                    apiName: 'DigestFrequency',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Picklist',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Chatter Email Highlights Frequency',
                    length: 40,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                Division: {
                    apiName: 'Division',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Division',
                    length: 80,
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
                },

                Email: {
                    apiName: 'Email',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Email',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Email',
                    length: 128,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                EmailEncodingKey: {
                    apiName: 'EmailEncodingKey',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Picklist',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Email Encoding',
                    length: 40,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                EmailPreferencesAutoBcc: {
                    apiName: 'EmailPreferencesAutoBcc',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'AutoBcc',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                EmailPreferencesAutoBccStayInTouch: {
                    apiName: 'EmailPreferencesAutoBccStayInTouch',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'AutoBccStayInTouch',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                EmailPreferencesStayInTouchReminder: {
                    apiName: 'EmailPreferencesStayInTouchReminder',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'StayInTouchReminder',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                EmployeeNumber: {
                    apiName: 'EmployeeNumber',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Employee Number',
                    length: 20,
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
                },

                Extension: {
                    apiName: 'Extension',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Phone',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Extension',
                    length: 40,
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
                },

                Fax: {
                    apiName: 'Fax',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Phone',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Fax',
                    length: 40,
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
                },

                FederationIdentifier: {
                    apiName: 'FederationIdentifier',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'SAML Federation ID',
                    length: 512,
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
                },

                FirstName: {
                    apiName: 'FirstName',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'FirstName',
                    compoundFieldName: 'Name',
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: 'PersonName',
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'First Name',
                    length: 40,
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
                },

                ForecastEnabled: {
                    apiName: 'ForecastEnabled',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Allow Forecasting',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                FullPhotoUrl: {
                    apiName: 'FullPhotoUrl',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Url',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Url for full-sized Photo',
                    length: 1024,
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
                    updateable: false
                },

                GeocodeAccuracy: {
                    apiName: 'GeocodeAccuracy',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'GeocodeAccuracy',
                    compoundFieldName: 'Address',
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Picklist',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Geocode Accuracy',
                    length: 40,
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
                },

                Id: {
                    apiName: 'Id',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'User ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                IsActive: {
                    apiName: 'IsActive',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Active',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                IsExtIndicatorVisible: {
                    apiName: 'IsExtIndicatorVisible',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Show external indicator',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                IsProfilePhotoActive: {
                    apiName: 'IsProfilePhotoActive',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Has Profile Photo',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                LanguageLocaleKey: {
                    apiName: 'LanguageLocaleKey',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Picklist',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Language',
                    length: 40,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                LastLoginDate: {
                    apiName: 'LastLoginDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Login',
                    length: 0,
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
                    updateable: false
                },

                LastModifiedById: {
                    apiName: 'LastModifiedById',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Modified By ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'User',
                            nameFields: ['FirstName', 'LastName', 'Name']
                        }
                    ],

                    relationshipName: 'LastModifiedBy',
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                LastModifiedDate: {
                    apiName: 'LastModifiedDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Modified Date',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                LastName: {
                    apiName: 'LastName',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'LastName',
                    compoundFieldName: 'Name',
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: 'PersonName',
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Name',
                    length: 80,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                LastPasswordChangeDate: {
                    apiName: 'LastPasswordChangeDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Password Change or Reset',
                    length: 0,
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
                    updateable: false
                },

                LastReferencedDate: {
                    apiName: 'LastReferencedDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Referenced Date',
                    length: 0,
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
                    updateable: false
                },

                LastViewedDate: {
                    apiName: 'LastViewedDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Viewed Date',
                    length: 0,
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
                    updateable: false
                },

                Latitude: {
                    apiName: 'Latitude',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'Latitude',
                    compoundFieldName: 'Address',
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Double',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Latitude',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 18,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: false,
                    scale: 15,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                LocaleSidKey: {
                    apiName: 'LocaleSidKey',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Picklist',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Locale',
                    length: 40,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                Longitude: {
                    apiName: 'Longitude',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'Longitude',
                    compoundFieldName: 'Address',
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Double',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Longitude',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 18,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: false,
                    scale: 15,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                ManagerId: {
                    apiName: 'ManagerId',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Manager ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'User',
                            nameFields: ['FirstName', 'LastName', 'Name']
                        }
                    ],

                    relationshipName: 'Manager',
                    required: false,
                    scale: 0,
                    searchPrefilterable: true,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                MediumBannerPhotoUrl: {
                    apiName: 'MediumBannerPhotoUrl',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Url',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Url for Android banner photo',
                    length: 1024,
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
                    updateable: false
                },

                MediumPhotoUrl: {
                    apiName: 'MediumPhotoUrl',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Url',
                    extraTypeInfo: 'ImageUrl',
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Url for medium profile photo',
                    length: 1024,
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
                    updateable: false
                },

                MobilePhone: {
                    apiName: 'MobilePhone',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Phone',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Cell',
                    length: 40,
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
                },

                Name: {
                    apiName: 'Name',
                    calculated: false,
                    compound: true,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: 'PersonName',
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Full Name',
                    length: 121,
                    nameField: true,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                OfflinePdaTrialExpirationDate: {
                    apiName: 'OfflinePdaTrialExpirationDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Sales Anywhere Trial Expiration Date',
                    length: 0,
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
                    updateable: false
                },

                OfflineTrialExpirationDate: {
                    apiName: 'OfflineTrialExpirationDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Offline Edition Trial Expiration Date',
                    length: 0,
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
                    updateable: false
                },

                OutOfOfficeMessage: {
                    apiName: 'OutOfOfficeMessage',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Out of office message',
                    length: 40,
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
                    updateable: false
                },

                Phone: {
                    apiName: 'Phone',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Phone',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Phone',
                    length: 40,
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
                },

                PostalCode: {
                    apiName: 'PostalCode',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'PostalCode',
                    compoundFieldName: 'Address',
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Zip/Postal Code',
                    length: 20,
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
                },

                ProfileId: {
                    apiName: 'ProfileId',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Profile ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'Profile',
                            nameFields: ['FirstName', 'LastName', 'Name']
                        }
                    ],

                    relationshipName: 'Profile',
                    required: true,
                    scale: 0,
                    searchPrefilterable: true,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                ProfilePhotoId: {
                    apiName: 'ProfilePhotoId',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Photo ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'Photo',
                            nameFields: ['FirstName', 'LastName', 'Name']
                        }
                    ],

                    relationshipName: null,
                    required: false,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                ReceivesAdminInfoEmails: {
                    apiName: 'ReceivesAdminInfoEmails',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Admin Info Emails',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                ReceivesInfoEmails: {
                    apiName: 'ReceivesInfoEmails',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Info Emails',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                SenderEmail: {
                    apiName: 'SenderEmail',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Email',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Email Sender Address',
                    length: 80,
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
                },

                SenderName: {
                    apiName: 'SenderName',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Email Sender Name',
                    length: 80,
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
                },

                Signature: {
                    apiName: 'Signature',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'TextArea',
                    extraTypeInfo: 'PlainTextArea',
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Email Signature',
                    length: 1333,
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
                },

                SmallBannerPhotoUrl: {
                    apiName: 'SmallBannerPhotoUrl',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Url',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Url for IOS banner photo',
                    length: 1024,
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
                    updateable: false
                },

                SmallPhotoUrl: {
                    apiName: 'SmallPhotoUrl',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Url',
                    extraTypeInfo: 'ImageUrl',
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Photo',
                    length: 1024,
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
                    updateable: false
                },

                State: {
                    apiName: 'State',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'State',
                    compoundFieldName: 'Address',
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'State/Province',
                    length: 80,
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
                },

                StayInTouchNote: {
                    apiName: 'StayInTouchNote',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Stay-in-Touch Email Note',
                    length: 512,
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
                },

                StayInTouchSignature: {
                    apiName: 'StayInTouchSignature',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'TextArea',
                    extraTypeInfo: 'PlainTextArea',
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Stay-in-Touch Email Signature',
                    length: 512,
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
                },

                StayInTouchSubject: {
                    apiName: 'StayInTouchSubject',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Stay-in-Touch Email Subject',
                    length: 80,
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
                },

                Street: {
                    apiName: 'Street',
                    calculated: false,
                    compound: false,
                    compoundComponentName: 'Street',
                    compoundFieldName: 'Address',
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'TextArea',
                    extraTypeInfo: 'PlainTextArea',
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Street',
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
                },

                SystemModstamp: {
                    apiName: 'SystemModstamp',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'System Modstamp',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                TimeZoneSidKey: {
                    apiName: 'TimeZoneSidKey',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Picklist',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Time Zone',
                    length: 40,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                Title: {
                    apiName: 'Title',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Title',
                    length: 80,
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
                },

                UserPermissionsAvantgoUser: {
                    apiName: 'UserPermissionsAvantgoUser',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'AvantGo User',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPermissionsCallCenterAutoLogin: {
                    apiName: 'UserPermissionsCallCenterAutoLogin',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Auto-login To Call Center',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPermissionsInteractionUser: {
                    apiName: 'UserPermissionsInteractionUser',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Force.com Flow User',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPermissionsMarketingUser: {
                    apiName: 'UserPermissionsMarketingUser',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Marketing User',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPermissionsMobileUser: {
                    apiName: 'UserPermissionsMobileUser',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Apex Mobile User',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPermissionsOfflineUser: {
                    apiName: 'UserPermissionsOfflineUser',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Offline User',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPermissionsSFContentUser: {
                    apiName: 'UserPermissionsSFContentUser',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Salesforce CRM Content User',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesActivityRemindersPopup: {
                    apiName: 'UserPreferencesActivityRemindersPopup',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ActivityRemindersPopup',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesApexPagesDeveloperMode: {
                    apiName: 'UserPreferencesApexPagesDeveloperMode',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ApexPagesDeveloperMode',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesCacheDiagnostics: {
                    apiName: 'UserPreferencesCacheDiagnostics',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'CacheDiagnostics',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesContentEmailAsAndWhen: {
                    apiName: 'UserPreferencesContentEmailAsAndWhen',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ContentEmailAsAndWhen',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesContentNoEmail: {
                    apiName: 'UserPreferencesContentNoEmail',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ContentNoEmail',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesCreateLEXAppsWTShown: {
                    apiName: 'UserPreferencesCreateLEXAppsWTShown',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'CreateLEXAppsWTShown',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesDisCommentAfterLikeEmail: {
                    apiName: 'UserPreferencesDisCommentAfterLikeEmail',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'DisCommentAfterLikeEmail',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesDisMentionsCommentEmail: {
                    apiName: 'UserPreferencesDisMentionsCommentEmail',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'DisMentionsCommentEmail',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesDisProfPostCommentEmail: {
                    apiName: 'UserPreferencesDisProfPostCommentEmail',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'DisProfPostCommentEmail',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesDisableAllFeedsEmail: {
                    apiName: 'UserPreferencesDisableAllFeedsEmail',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'DisableAllFeedsEmail',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesDisableBookmarkEmail: {
                    apiName: 'UserPreferencesDisableBookmarkEmail',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'DisableBookmarkEmail',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesDisableChangeCommentEmail: {
                    apiName: 'UserPreferencesDisableChangeCommentEmail',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'DisableChangeCommentEmail',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesDisableEndorsementEmail: {
                    apiName: 'UserPreferencesDisableEndorsementEmail',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'DisableEndorsementEmail',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesDisableFileShareNotificationsForApi: {
                    apiName:
                        'UserPreferencesDisableFileShareNotificationsForApi',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'DisableFileShareNotificationsForApi',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesDisableFollowersEmail: {
                    apiName: 'UserPreferencesDisableFollowersEmail',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'DisableFollowersEmail',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesDisableLaterCommentEmail: {
                    apiName: 'UserPreferencesDisableLaterCommentEmail',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'DisableLaterCommentEmail',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesDisableLikeEmail: {
                    apiName: 'UserPreferencesDisableLikeEmail',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'DisableLikeEmail',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesDisableMentionsPostEmail: {
                    apiName: 'UserPreferencesDisableMentionsPostEmail',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'DisableMentionsPostEmail',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesDisableMessageEmail: {
                    apiName: 'UserPreferencesDisableMessageEmail',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'DisableMessageEmail',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesDisableProfilePostEmail: {
                    apiName: 'UserPreferencesDisableProfilePostEmail',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'DisableProfilePostEmail',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesDisableSharePostEmail: {
                    apiName: 'UserPreferencesDisableSharePostEmail',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'DisableSharePostEmail',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesEnableAutoSubForFeeds: {
                    apiName: 'UserPreferencesEnableAutoSubForFeeds',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'EnableAutoSubForFeeds',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesEventRemindersCheckboxDefault: {
                    apiName: 'UserPreferencesEventRemindersCheckboxDefault',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'EventRemindersCheckboxDefault',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesExcludeMailAppAttachments: {
                    apiName: 'UserPreferencesExcludeMailAppAttachments',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ExcludeMailAppAttachments',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesFavoritesShowTopFavorites: {
                    apiName: 'UserPreferencesFavoritesShowTopFavorites',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'FavoritesShowTopFavorites',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesFavoritesWTShown: {
                    apiName: 'UserPreferencesFavoritesWTShown',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'FavoritesWTShown',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesGlobalNavBarWTShown: {
                    apiName: 'UserPreferencesGlobalNavBarWTShown',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'GlobalNavBarWTShown',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesGlobalNavGridMenuWTShown: {
                    apiName: 'UserPreferencesGlobalNavGridMenuWTShown',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'GlobalNavGridMenuWTShown',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesHideBiggerPhotoCallout: {
                    apiName: 'UserPreferencesHideBiggerPhotoCallout',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'HideBiggerPhotoCallout',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesHideCSNDesktopTask: {
                    apiName: 'UserPreferencesHideCSNDesktopTask',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'HideCSNDesktopTask',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesHideCSNGetChatterMobileTask: {
                    apiName: 'UserPreferencesHideCSNGetChatterMobileTask',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'HideCSNGetChatterMobileTask',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesHideChatterOnboardingSplash: {
                    apiName: 'UserPreferencesHideChatterOnboardingSplash',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'HideChatterOnboardingSplash',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesHideEndUserOnboardingAssistantModal: {
                    apiName:
                        'UserPreferencesHideEndUserOnboardingAssistantModal',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'HideEndUserOnboardingAssistantModal',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesHideEventCalendar: {
                    apiName: 'UserPreferencesHideEventCalendar',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'HideEventCalendar',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesHideLearningPathModal: {
                    apiName: 'UserPreferencesHideLearningPathModal',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'HideLearningPathModal',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesHideLightningMigrationModal: {
                    apiName: 'UserPreferencesHideLightningMigrationModal',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'HideLightningMigrationModal',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesHideS1BrowserUI: {
                    apiName: 'UserPreferencesHideS1BrowserUI',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'HideS1BrowserUI',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesHideSecondChatterOnboardingSplash: {
                    apiName: 'UserPreferencesHideSecondChatterOnboardingSplash',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'HideSecondChatterOnboardingSplash',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesHideSfxWelcomeMat: {
                    apiName: 'UserPreferencesHideSfxWelcomeMat',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'HideSfxWelcomeMat',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesHideTrialsSplash: {
                    apiName: 'UserPreferencesHideTrialsSplash',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'HideTrialsSplash',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesHideTrialsWelcomeMat: {
                    apiName: 'UserPreferencesHideTrialsWelcomeMat',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'HideTrialsWelcomeMat',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesLightningExperiencePreferred: {
                    apiName: 'UserPreferencesLightningExperiencePreferred',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'LightningExperiencePreferred',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesPathAssistantCollapsed: {
                    apiName: 'UserPreferencesPathAssistantCollapsed',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'PathAssistantCollapsed',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesPreviewLightning: {
                    apiName: 'UserPreferencesPreviewLightning',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'PreviewLightning',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesRecordHomeReservedWTShown: {
                    apiName: 'UserPreferencesRecordHomeReservedWTShown',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'RecordHomeReservedWTShown',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesRecordHomeSectionCollapseWTShown: {
                    apiName: 'UserPreferencesRecordHomeSectionCollapseWTShown',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'RecordHomeSectionCollapseWTShown',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesReminderSoundOff: {
                    apiName: 'UserPreferencesReminderSoundOff',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ReminderSoundOff',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesSetupAssistantUserPref1: {
                    apiName: 'UserPreferencesSetupAssistantUserPref1',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'SetupAssistantUserPref1',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesShowCityToExternalUsers: {
                    apiName: 'UserPreferencesShowCityToExternalUsers',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ShowCityToExternalUsers',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesShowCityToGuestUsers: {
                    apiName: 'UserPreferencesShowCityToGuestUsers',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ShowCityToGuestUsers',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesShowCountryToExternalUsers: {
                    apiName: 'UserPreferencesShowCountryToExternalUsers',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ShowCountryToExternalUsers',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesShowCountryToGuestUsers: {
                    apiName: 'UserPreferencesShowCountryToGuestUsers',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ShowCountryToGuestUsers',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesShowEmailToExternalUsers: {
                    apiName: 'UserPreferencesShowEmailToExternalUsers',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ShowEmailToExternalUsers',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesShowEmailToGuestUsers: {
                    apiName: 'UserPreferencesShowEmailToGuestUsers',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ShowEmailToGuestUsers',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesShowFaxToExternalUsers: {
                    apiName: 'UserPreferencesShowFaxToExternalUsers',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ShowFaxToExternalUsers',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesShowFaxToGuestUsers: {
                    apiName: 'UserPreferencesShowFaxToGuestUsers',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ShowFaxToGuestUsers',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesShowManagerToExternalUsers: {
                    apiName: 'UserPreferencesShowManagerToExternalUsers',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ShowManagerToExternalUsers',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesShowManagerToGuestUsers: {
                    apiName: 'UserPreferencesShowManagerToGuestUsers',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ShowManagerToGuestUsers',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesShowMobilePhoneToExternalUsers: {
                    apiName: 'UserPreferencesShowMobilePhoneToExternalUsers',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ShowMobilePhoneToExternalUsers',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesShowMobilePhoneToGuestUsers: {
                    apiName: 'UserPreferencesShowMobilePhoneToGuestUsers',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ShowMobilePhoneToGuestUsers',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesShowPostalCodeToExternalUsers: {
                    apiName: 'UserPreferencesShowPostalCodeToExternalUsers',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ShowPostalCodeToExternalUsers',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesShowPostalCodeToGuestUsers: {
                    apiName: 'UserPreferencesShowPostalCodeToGuestUsers',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ShowPostalCodeToGuestUsers',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesShowProfilePicToGuestUsers: {
                    apiName: 'UserPreferencesShowProfilePicToGuestUsers',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ShowProfilePicToGuestUsers',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesShowStateToExternalUsers: {
                    apiName: 'UserPreferencesShowStateToExternalUsers',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ShowStateToExternalUsers',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesShowStateToGuestUsers: {
                    apiName: 'UserPreferencesShowStateToGuestUsers',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ShowStateToGuestUsers',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesShowStreetAddressToExternalUsers: {
                    apiName: 'UserPreferencesShowStreetAddressToExternalUsers',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ShowStreetAddressToExternalUsers',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesShowStreetAddressToGuestUsers: {
                    apiName: 'UserPreferencesShowStreetAddressToGuestUsers',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ShowStreetAddressToGuestUsers',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesShowTitleToExternalUsers: {
                    apiName: 'UserPreferencesShowTitleToExternalUsers',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ShowTitleToExternalUsers',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesShowTitleToGuestUsers: {
                    apiName: 'UserPreferencesShowTitleToGuestUsers',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ShowTitleToGuestUsers',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesShowWorkPhoneToExternalUsers: {
                    apiName: 'UserPreferencesShowWorkPhoneToExternalUsers',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ShowWorkPhoneToExternalUsers',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesShowWorkPhoneToGuestUsers: {
                    apiName: 'UserPreferencesShowWorkPhoneToGuestUsers',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'ShowWorkPhoneToGuestUsers',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesSortFeedByComment: {
                    apiName: 'UserPreferencesSortFeedByComment',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'SortFeedByComment',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesTaskRemindersCheckboxDefault: {
                    apiName: 'UserPreferencesTaskRemindersCheckboxDefault',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'TaskRemindersCheckboxDefault',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserPreferencesTodayGettingStarted: {
                    apiName: 'UserPreferencesTodayGettingStarted',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'TodayGettingStarted',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: false,
                    unique: false,
                    updateable: true
                },

                UserRoleId: {
                    apiName: 'UserRoleId',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Role ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'UserRole',
                            nameFields: ['FirstName', 'LastName', 'Name']
                        }
                    ],

                    relationshipName: 'UserRole',
                    required: false,
                    scale: 0,
                    searchPrefilterable: true,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                UserType: {
                    apiName: 'UserType',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Picklist',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'User Type',
                    length: 40,
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
                    updateable: false
                },

                Username: {
                    apiName: 'Username',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Username',
                    length: 80,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                }
            },

            keyPrefix: '005',
            label: 'User',
            labelPlural: 'People',
            layoutable: true,
            mruEnabled: true,
            nameFields: ['FirstName', 'LastName', 'Name'],
            queryable: true,
            recordTypeInfos: {},
            searchable: true,
            themeInfo: {
                color: '65CAE4',
                iconUrl:
                    'https://mobile1.t.salesforce.com/img/icon/t4v35/standard/user_120.png'
            },

            updateable: true
        },

        Weapon__c: {
            apiName: 'Weapon__c',
            childRelationships: [
                {
                    childObjectApiName: 'AttachedContentDocument',
                    fieldName: 'LinkedEntityId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'AttachedContentDocuments'
                },

                {
                    childObjectApiName: 'Attachment',
                    fieldName: 'ParentId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'Attachments'
                },

                {
                    childObjectApiName: 'Bad_Guy__c',
                    fieldName: 'Weapon__c',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'Bad_Guys__r'
                },

                {
                    childObjectApiName: 'CollaborationGroupRecord',
                    fieldName: 'RecordId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'RecordAssociatedGroups'
                },

                {
                    childObjectApiName: 'CombinedAttachment',
                    fieldName: 'ParentId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'CombinedAttachments'
                },

                {
                    childObjectApiName: 'ContentDocumentLink',
                    fieldName: 'LinkedEntityId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'ContentDocumentLinks'
                },

                {
                    childObjectApiName: 'DuplicateRecordItem',
                    fieldName: 'RecordId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'DuplicateRecordItems'
                },

                {
                    childObjectApiName: 'EmailMessage',
                    fieldName: 'RelatedToId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'Emails'
                },

                {
                    childObjectApiName: 'EntitySubscription',
                    fieldName: 'ParentId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'FeedSubscriptionsForEntity'
                },

                {
                    childObjectApiName: 'Note',
                    fieldName: 'ParentId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'Notes'
                },

                {
                    childObjectApiName: 'NoteAndAttachment',
                    fieldName: 'ParentId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'NotesAndAttachments'
                },

                {
                    childObjectApiName: 'ProcessInstance',
                    fieldName: 'TargetObjectId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'ProcessInstances'
                },

                {
                    childObjectApiName: 'ProcessInstanceHistory',
                    fieldName: 'TargetObjectId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'ProcessSteps'
                },

                {
                    childObjectApiName: 'TopicAssignment',
                    fieldName: 'EntityId',
                    junctionIdListNames: [],
                    junctionReferenceTo: [],
                    relationshipName: 'TopicAssignments'
                }
            ],

            createable: true,
            custom: true,
            defaultRecordTypeId: null,
            deleteable: true,
            eTag: 'b5aac0ea1081751457f5c240a38815eb',
            feedEnabled: false,
            fields: {
                CreatedById: {
                    apiName: 'CreatedById',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Created By ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'User',
                            nameFields: ['Name']
                        }
                    ],

                    relationshipName: 'CreatedBy',
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                CreatedDate: {
                    apiName: 'CreatedDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Created Date',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                Id: {
                    apiName: 'Id',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Record ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                IsDeleted: {
                    apiName: 'IsDeleted',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Deleted',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                LastModifiedById: {
                    apiName: 'LastModifiedById',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Modified By ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'User',
                            nameFields: ['Name']
                        }
                    ],

                    relationshipName: 'LastModifiedBy',
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                LastModifiedDate: {
                    apiName: 'LastModifiedDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Modified Date',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                },

                LastReferencedDate: {
                    apiName: 'LastReferencedDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Referenced Date',
                    length: 0,
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
                    updateable: false
                },

                LastViewedDate: {
                    apiName: 'LastViewedDate',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Last Viewed Date',
                    length: 0,
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
                    updateable: false
                },

                Lethal__c: {
                    apiName: 'Lethal__c',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: true,
                    dataType: 'Boolean',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Lethal',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                Name: {
                    apiName: 'Name',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'String',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Weapon Name',
                    length: 80,
                    nameField: true,
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
                },

                OwnerId: {
                    apiName: 'OwnerId',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: true,
                    custom: false,
                    dataType: 'Reference',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'Owner ID',
                    length: 18,
                    nameField: false,
                    polymorphicForeignKey: true,
                    precision: 0,
                    reference: true,
                    referenceTargetField: null,
                    referenceToInfos: [
                        {
                            apiName: 'Group',
                            nameFields: ['Name']
                        },

                        {
                            apiName: 'User',
                            nameFields: ['Name']
                        }
                    ],

                    relationshipName: 'Owner',
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: true
                },

                SystemModstamp: {
                    apiName: 'SystemModstamp',
                    calculated: false,
                    compound: false,
                    compoundComponentName: null,
                    compoundFieldName: null,
                    controllerName: null,
                    createable: false,
                    custom: false,
                    dataType: 'DateTime',
                    extraTypeInfo: null,
                    filterable: true,
                    filteredLookupInfo: null,
                    highScaleNumber: false,
                    htmlFormatted: false,
                    inlineHelpText: null,
                    label: 'System Modstamp',
                    length: 0,
                    nameField: false,
                    polymorphicForeignKey: false,
                    precision: 0,
                    reference: false,
                    referenceTargetField: null,
                    referenceToInfos: [],
                    relationshipName: null,
                    required: true,
                    scale: 0,
                    searchPrefilterable: false,
                    sortable: true,
                    unique: false,
                    updateable: false
                }
            },

            keyPrefix: 'a01',
            label: 'Weapon',
            labelPlural: 'Weapons',
            layoutable: true,
            mruEnabled: true,
            nameFields: ['Name'],
            queryable: true,
            recordTypeInfos: {
                '012000000000000AAA': {
                    available: true,
                    defaultRecordTypeMapping: true,
                    master: true,
                    name: 'Master',
                    recordTypeId: '012000000000000AAA'
                }
            },

            searchable: true,
            themeInfo: {
                color: 'bf7b66',
                iconUrl:
                    'https://mobile1.t.salesforce.com/img/icon/t4v35/custom/custom91_120.png'
            },

            updateable: true
        }
    },

    records: {
        '00QR00000018lbCMAR': {
            apiName: 'Lead',
            childRelationships: {},
            fields: {
                State: {
                    displayValue: 'Texas',
                    value: 'Texas'
                },

                Street: {
                    displayValue: null,
                    value: '11 Farm Avenue'
                },

                Country: {
                    displayValue: null,
                    value: 'United States'
                },

                PostalCode: {
                    displayValue: null,
                    value: '6156'
                },

                City: {
                    displayValue: null,
                    value: 'Hartford'
                }
            },

            id: '00QR00000018lbCMAR',
            recordTypeInfo: null
        },

        bdummyrecordid20AA: {
            apiName: 'Everything__c',
            fields: {
                Auto_Number__c: {
                    displayValue: null,
                    value: 'A-17/05-0200'
                },

                CreatedBy: {
                    displayValue: 'Admin User',
                    value: {
                        apiName: 'User',
                        childRelationships: {},
                        fields: {
                            Id: {
                                displayValue: null,
                                value: '005R0000000J2lMIAS'
                            },

                            Name: {
                                displayValue: null,
                                value: 'Admin User'
                            }
                        },

                        id: '005R0000000J2lMIAS',
                        recordTypeInfo: null
                    }
                },

                CreatedById: {
                    displayValue: null,
                    value: '005R0000000J2lMIAS'
                },

                DateTime__c: {
                    displayValue: '8/12/2017 1:00 PM',
                    value: '2017-08-12T20:00:00.000Z'
                },

                Formula_HTML__c: {
                    displayValue: null,
                    value: '<b>Bold Text<b/>'
                },

                Moneys__c: {
                    displayValue: '$4.00',
                    value: 4
                },

                Name: {
                    displayValue: null,
                    value: 'Dummy Record'
                },

                Picklist__c: {
                    displayValue: 'Nord',
                    value: 'North'
                },

                Quantity__c: {
                    displayValue: null,
                    value: 24
                }
            }
        },

        '00QR00000018lbCMAQ': {
            apiName: 'Lead',
            childRelationships: {},
            fields: {
                AnnualRevenue: {
                    displayValue: '$19,879',
                    value: 19879
                },

                City: {
                    displayValue: null,
                    value: 'Hartford'
                },

                Company: {
                    displayValue: null,
                    value: 'BigLife Inc.'
                },

                CountryCode: {
                    displayValue: null,
                    value: null
                },

                CreatedBy: {
                    displayValue: 'Test User',
                    value: {
                        apiName: 'User',
                        childRelationships: {},
                        fields: {
                            Id: {
                                displayValue: null,
                                value: '005R0000000F9tkIAC'
                            },

                            Name: {
                                displayValue: null,
                                value: 'Test User'
                            }
                        },

                        id: '005R0000000F9tkIAC',
                        recordTypeInfo: null
                    }
                },

                CreatedById: {
                    displayValue: null,
                    value: '005R0000000F9tkIAC'
                },

                CreatedDate: {
                    displayValue: '8/24/2017 1:19 PM',
                    value: '2017-08-24T20:19:25.000Z'
                },

                Description: {
                    displayValue: null,
                    value: null
                },

                Email: {
                    displayValue: null,
                    value: 'info@salesforce.com'
                },

                FirstName: {
                    displayValue: null,
                    value: 'Jim'
                },

                Industry: {
                    displayValue: 'Insurance',
                    value: 'Insurance'
                },

                LastModifiedBy: {
                    displayValue: 'Test User',
                    value: {
                        apiName: 'User',
                        childRelationships: {},
                        fields: {
                            Id: {
                                displayValue: null,
                                value: '005R0000000F9tkIAC'
                            },

                            Name: {
                                displayValue: null,
                                value: 'Test User'
                            }
                        },

                        id: '005R0000000F9tkIAC',
                        recordTypeInfo: null
                    }
                },

                LastModifiedById: {
                    displayValue: null,
                    value: '005R0000000F9tkIAC'
                },

                LastModifiedDate: {
                    displayValue: '9/11/2017 9:42 PM',
                    value: '2017-09-12T04:42:44.000Z'
                },

                LastName: {
                    displayValue: null,
                    value: 'Steele'
                },

                LeadSource: {
                    displayValue: 'Employee Referral',
                    value: 'Employee Referral'
                },

                NumberOfEmployees: {
                    displayValue: null,
                    value: 28000
                },

                Owner: {
                    displayValue: 'Test User',
                    value: {
                        apiName: 'Name',
                        childRelationships: {},
                        fields: {
                            Id: {
                                displayValue: null,
                                value: '005R0000000F9tkIAC'
                            },

                            Name: {
                                displayValue: null,
                                value: 'Test User'
                            }
                        },

                        id: '005R0000000F9tkIAC',
                        recordTypeInfo: null
                    }
                },

                OwnerId: {
                    displayValue: null,
                    value: '005R0000000F9tkIAC'
                },

                Phone: {
                    displayValue: null,
                    value: '(555) 555-1212'
                },

                PostalCode: {
                    displayValue: null,
                    value: '6156'
                },

                Rating: {
                    displayValue: null,
                    value: null
                },

                Salutation: {
                    displayValue: null,
                    value: null
                },

                StateCode: {
                    displayValue: 'Alaska',
                    value: 'AK'
                },

                Status: {
                    displayValue: 'New',
                    value: 'New'
                },

                Street: {
                    displayValue: null,
                    value: '11 Farm Avenue'
                },

                Title: {
                    displayValue: null,
                    value: 'Senior VP'
                },

                Website: {
                    displayValue: null,
                    value: null
                }
            },

            id: '00QR00000018lbCMAQ',
            recordTypeInfo: null
        },

        a00R0000000x5hnIAA: {
            apiName: 'Everything__c',
            childRelationships: {},
            fields: {
                Auto_Number__c: {
                    displayValue: null,
                    value: 'A-17/05-0100'
                },

                Checkbox__c: {
                    displayValue: null,
                    value: false
                },

                Contact_Phone__c: {
                    displayValue: null,
                    value: '403-203-1048'
                },

                CreatedBy: {
                    displayValue: 'Admin User',
                    value: {
                        apiName: 'User',
                        childRelationships: {},
                        fields: {
                            Id: {
                                displayValue: null,
                                value: '005R0000000J2lMIAS'
                            },

                            Name: {
                                displayValue: null,
                                value: 'Admin User'
                            }
                        },

                        id: '005R0000000J2lMIAS',
                        recordTypeInfo: null
                    }
                },

                CreatedById: {
                    displayValue: null,
                    value: '005R0000000J2lMIAS'
                },

                CreatedDate: {
                    displayValue: '7/5/2017 2:54 PM',
                    value: '2017-07-05T21:54:32.000Z'
                },

                DateTime__c: {
                    displayValue: '7/11/2017 1:00 PM',
                    value: '2017-07-11T20:00:00.000Z'
                },

                Date__c: {
                    displayValue: '7/13/2017',
                    value: '2017-07-13'
                },

                Double__c: {
                    displayValue: null,
                    value: 24.3542
                },

                Email__c: {
                    displayValue: null,
                    value: 'the@email.something'
                },

                Formula_Checkbox__c: {
                    displayValue: null,
                    value: true
                },

                Formula_Currency__c: {
                    displayValue: '$48.00',
                    value: 48
                },

                Formula_DateTime__c: {
                    displayValue: '9/9/2017 11:34 AM',
                    value: '2017-09-09T18:34:18.000Z'
                },

                Formula_Date__c: {
                    displayValue: '7/6/2017',
                    value: '2017-07-06'
                },

                Formula_HTML__c: {
                    displayValue: null,
                    value:
                        '<img src="/servlet/servlet.FileDownload?file=01570000000Q6Ep" alt="Red" border="0"/>'
                },

                Formula_Number__c: {
                    displayValue: null,
                    value: 33.6
                },

                Formula_Percent__c: {
                    displayValue: null,
                    value: 1272
                },

                Formula_Text__c: {
                    displayValue: null,
                    value: 'the@email.something - Everything Object 1'
                },

                GeoLoc__Latitude__s: {
                    displayValue: null,
                    value: 40.7128
                },

                GeoLoc__Longitude__s: {
                    displayValue: null,
                    value: -74.0059
                },

                Javascript__c: {
                    displayValue: null,
                    value:
                        '<a href="javascript:alert(\'Hello%20BOOM!\')" target="_blank">Click Me</a>'
                },

                LastModifiedBy: {
                    displayValue: 'Admin User',
                    value: {
                        apiName: 'User',
                        childRelationships: {},
                        fields: {
                            Id: {
                                displayValue: null,
                                value: '005R0000000J2lMIAS'
                            },

                            Name: {
                                displayValue: null,
                                value: 'Admin User'
                            }
                        },

                        id: '005R0000000J2lMIAS',
                        recordTypeInfo: null
                    }
                },

                LastModifiedById: {
                    displayValue: null,
                    value: '005R0000000J2lMIAS'
                },

                LastModifiedDate: {
                    displayValue: '8/22/2017 4:44 PM',
                    value: '2017-08-22T23:44:27.000Z'
                },

                Moneys__c: {
                    displayValue: '$2.00',
                    value: 2
                },

                MultiPicklist__c: {
                    displayValue: 'Alpha;Gamma',
                    value: 'Alpha;Gamma'
                },

                Name: {
                    displayValue: null,
                    value: 'Everything Object 1'
                },

                Optional_Field__c: {
                    displayValue: null,
                    value: 'Optional Field'
                },

                Owner: {
                    displayValue: 'Admin User',
                    value: {
                        apiName: 'Name',
                        childRelationships: {},
                        fields: {
                            Id: {
                                displayValue: null,
                                value: '005R0000000J2lMIAS'
                            },

                            Name: {
                                displayValue: null,
                                value: 'Admin User'
                            }
                        },

                        id: '005R0000000J2lMIAS',
                        recordTypeInfo: null
                    }
                },

                OwnerId: {
                    displayValue: null,
                    value: '005R0000000J2lMIAS'
                },

                Percentage__c: {
                    displayValue: null,
                    value: 53.125
                },

                Picklist__c: {
                    displayValue: 'Nord',
                    value: 'North'
                },

                Quantity__c: {
                    displayValue: null,
                    value: 24
                },

                Rich_Description__c: {
                    displayValue: null,
                    value:
                        '<p><b>Hello</b> <i>there</i>! I <u>would</u> like to paste a table here.</p><p class="ql-indent-1">something</p><p class="ql-indent-1">something else</p><p class="ql-indent-1">something else something</p><p class="ql-indent-1">something else something else</p><p>https://prefix.section.domain.suffix.net/x/abcde/file.jpg?ab=firstAttr&amp;bc=secondAttr</p><p>prefix.section.domain.suffix.net/x/abcde/file.jpg?ab=firstAttr&amp;bc=secondAttr</p>'
                },

                Secret__c: {
                    displayValue: null,
                    value: 'XXXX-XXXX-XXXX-3029'
                },

                Text_Area_Long__c: {
                    displayValue: null,
                    value:
                        "This is some text in a text area\r\nLine 2\r\nLine 3 starts scrolling\r\nLine 4 is cut off in edit panel\r\nLet's make this one a bit longer since it's supposed to be a long text area"
                },

                Text_Area__c: {
                    displayValue: null,
                    value:
                        'This is some text in a text area\r\nLine 2\r\nLine 3 starts scrolling\r\nLine 4 is cut off normally in edit panel\r\nwww.salesforce.com'
                },

                Text_Content__c: {
                    displayValue: null,
                    value: 'This is some text'
                },

                Time__c: {
                    displayValue: null,
                    value: null
                },

                Website__c: {
                    displayValue: null,
                    value: 'www.google.com'
                }
            },

            id: 'a00R0000000x5hnIAA',
            recordTypeInfo: null
        },

        a00R0000000jq5eIAA: {
            apiName: 'Bad_Guy__c',
            childRelationships: {},
            eTag: '0e5119a8fc96a4a3827b00ea102c7e7b',
            fields: {
                Attack_Prep__c: {
                    displayValue: '8/29/2017 2:11 PM',
                    value: '2017-08-29T21:11:00.000Z'
                },

                Auto_Number__c: {
                    displayValue: null,
                    value: 'A-17/31-0002'
                },

                Birthday__c: {
                    displayValue: '2/2/1902',
                    value: '1902-02-02'
                },

                Cell_Number__c: {
                    displayValue: null,
                    value: '(222) 222-2222'
                },

                City__c: {
                    displayValue: null,
                    value: null
                },

                Converted_Website__c: {
                    displayValue: null,
                    value:
                        '&lt;a href=&quot;www.google.com&quot; target=&quot;_blank&quot;&gt;Tips &amp; Tricks&lt;/a&gt;'
                },

                Country__c: {
                    displayValue: null,
                    value: null
                },

                CreatedBy: {
                    displayValue: 'Test User',
                    value: {
                        apiName: 'User',
                        childRelationships: {},
                        eTag: 'bf306bc78b47c4cd9afd4b7bf36df6e4',
                        fields: {
                            Id: {
                                displayValue: null,
                                value: '005R0000000F9tkIAC'
                            },

                            Name: {
                                displayValue: null,
                                value: 'Test User'
                            }
                        },

                        id: '005R0000000F9tkIAC',
                        recordTypeInfo: null
                    }
                },

                CreatedById: {
                    displayValue: null,
                    value: '005R0000000F9tkIAC'
                },

                CreatedDate: {
                    displayValue: '8/31/2017 2:13 PM',
                    value: '2017-08-31T21:13:07.000Z'
                },

                Description__c: {
                    displayValue: null,
                    value: 'Green and evil'
                },

                Email_Address__c: {
                    displayValue: null,
                    value: 'witch@oz.org'
                },

                Has_Weakness__c: {
                    displayValue: null,
                    value: true
                },

                Has_Website__c: {
                    displayValue: null,
                    value: true
                },

                Hideout_Location__Latitude__s: {
                    displayValue: null,
                    value: 51
                },

                Hideout_Location__Longitude__s: {
                    displayValue: null,
                    value: 0
                },

                LastModifiedBy: {
                    displayValue: 'Test User',
                    value: {
                        apiName: 'User',
                        childRelationships: {},
                        eTag: 'bf306bc78b47c4cd9afd4b7bf36df6e4',
                        fields: {
                            Id: {
                                displayValue: null,
                                value: '005R0000000F9tkIAC'
                            },

                            Name: {
                                displayValue: null,
                                value: 'Test User'
                            }
                        },

                        id: '005R0000000F9tkIAC',
                        recordTypeInfo: null
                    }
                },

                LastModifiedById: {
                    displayValue: null,
                    value: '005R0000000F9tkIAC'
                },

                LastModifiedDate: {
                    displayValue: '8/31/2017 2:13 PM',
                    value: '2017-08-31T21:13:07.000Z'
                },

                Minions__c: {
                    displayValue: null,
                    value: 22
                },

                MultiCity__c: {
                    displayValue: null,
                    value: null
                },

                Name: {
                    displayValue: null,
                    value: 'Wicked Witch of the West'
                },

                Net_Worth__c: {
                    displayValue: '$2,645,000.00',
                    value: 2645000
                },

                Next_Attack__c: {
                    displayValue: '8/31/2017 2:11 PM',
                    value: '2017-08-31T21:11:00.000Z'
                },

                Nickname__c: {
                    displayValue: null,
                    value: 'The Witch'
                },

                Owner: {
                    displayValue: 'Test User',
                    value: {
                        apiName: 'Name',
                        childRelationships: {},
                        eTag: '4e94a722d0417299ad3296504d6fcc21',
                        fields: {
                            Id: {
                                displayValue: null,
                                value: '005R0000000F9tkIAC'
                            },

                            Name: {
                                displayValue: null,
                                value: 'Test User'
                            }
                        },

                        id: '005R0000000F9tkIAC',
                        recordTypeInfo: null
                    }
                },

                OwnerId: {
                    displayValue: null,
                    value: '005R0000000F9tkIAC'
                },

                Power_Level_Remaining__c: {
                    displayValue: null,
                    value: 9900
                },

                Power_level__c: {
                    displayValue: null,
                    value: 100
                },

                Rich_Text_Field__c: {
                    displayValue: null,
                    value: null
                },

                Salary_Per_Year__c: {
                    displayValue: '$23,000',
                    value: 23000
                },

                Secret_Code__c: {
                    displayValue: null,
                    value: 'X2334'
                },

                States_Provinces__c: {
                    displayValue: null,
                    value: null
                },

                Territories_Covered__c: {
                    displayValue: 'West',
                    value: 'West'
                },

                Wakeup_time__c: {
                    displayValue: '8:30 AM',
                    value: '08:30:00.000Z'
                },

                Weakness__c: {
                    displayValue: 'Water',
                    value: 'Water'
                },

                Weapon__c: {
                    displayValue: null,
                    value: 'a01R0000000C9hAIAS'
                },

                Weapon__r: {
                    displayValue: 'Magic Spell',
                    value: {
                        apiName: 'Weapon__c',
                        childRelationships: {},
                        eTag: '8dec7a32628be5513f1097d0a1f8b374',
                        fields: {
                            Id: {
                                displayValue: null,
                                value: 'a01R0000000C9hAIAS'
                            },

                            Name: {
                                displayValue: null,
                                value: 'Magic Spell'
                            }
                        },

                        id: 'a01R0000000C9hAIAS',
                        recordTypeInfo: null
                    }
                },

                Website__c: {
                    displayValue: null,
                    value: 'http://oz.org'
                },

                age__c: {
                    displayValue: null,
                    value: 115
                }
            },

            id: 'a00R0000000jq5eIAA',
            recordTypeInfo: null
        },

        a00R0000000xAHtIAM: {
            apiName: 'Bad_Guy__c',
            childRelationships: {},
            eTag: '03f13b9fc818a0717e3583ef593b72fe',
            fields: {
                Attack_Prep__c: {
                    displayValue: '7/29/2019 2:09 PM',
                    value: '2019-07-29T21:09:00.000Z'
                },

                Auto_Number__c: {
                    displayValue: null,
                    value: 'A-17/31-0001'
                },

                Birthday__c: {
                    displayValue: '5/17/1977',
                    value: '1977-05-17'
                },

                Cell_Number__c: {
                    displayValue: null,
                    value: '(415) 122-1212'
                },

                City__c: {
                    displayValue: 'Vancouver',
                    value: 'Vancouver'
                },

                Converted_Website__c: {
                    displayValue: null,
                    value:
                        '&lt;a href=&quot;www.google.com&quot; target=&quot;_blank&quot;&gt;Tips &amp; Tricks&lt;/a&gt;'
                },

                Country__c: {
                    displayValue: 'Canada',
                    value: 'Canada'
                },

                CreatedBy: {
                    displayValue: 'Test User',
                    value: {
                        apiName: 'User',
                        childRelationships: {},
                        eTag: 'bf306bc78b47c4cd9afd4b7bf36df6e4',
                        fields: {
                            Id: {
                                displayValue: null,
                                value: '005R0000000F9tkIAC'
                            },

                            Name: {
                                displayValue: null,
                                value: 'Test User'
                            }
                        },

                        id: '005R0000000F9tkIAC',
                        recordTypeInfo: null
                    }
                },

                CreatedById: {
                    displayValue: null,
                    value: '005R0000000F9tkIAC'
                },

                CreatedDate: {
                    displayValue: '8/31/2017 2:11 PM',
                    value: '2017-08-31T21:11:18.000Z'
                },

                Description__c: {
                    displayValue: null,
                    value: 'Dark Lord of the Sith'
                },

                Email_Address__c: {
                    displayValue: null,
                    value: 'darth@empire.gov'
                },

                Has_Weakness__c: {
                    displayValue: null,
                    value: true
                },

                Has_Website__c: {
                    displayValue: null,
                    value: true
                },

                Hideout_Location__Latitude__s: {
                    displayValue: null,
                    value: 0
                },

                Hideout_Location__Longitude__s: {
                    displayValue: null,
                    value: 0
                },

                LastModifiedBy: {
                    displayValue: 'Test User',
                    value: {
                        apiName: 'User',
                        childRelationships: {},
                        eTag: 'bf306bc78b47c4cd9afd4b7bf36df6e4',
                        fields: {
                            Id: {
                                displayValue: null,
                                value: '005R0000000F9tkIAC'
                            },

                            Name: {
                                displayValue: null,
                                value: 'Test User'
                            }
                        },

                        id: '005R0000000F9tkIAC',
                        recordTypeInfo: null
                    }
                },

                LastModifiedById: {
                    displayValue: null,
                    value: '005R0000000F9tkIAC'
                },

                LastModifiedDate: {
                    displayValue: '9/11/2017 9:40 PM',
                    value: '2017-09-12T04:40:39.000Z'
                },

                Minions__c: {
                    displayValue: null,
                    value: 12
                },

                MultiCity__c: {
                    displayValue: 'Montreal;Vancouver',
                    value: 'Montreal;Vancouver'
                },

                Name: {
                    displayValue: null,
                    value: 'Darth Vader'
                },

                Net_Worth__c: {
                    displayValue: '$92,880.00',
                    value: 92880
                },

                Next_Attack__c: {
                    displayValue: '7/31/2019 2:09 PM',
                    value: '2019-07-31T21:09:00.000Z'
                },

                Nickname__c: {
                    displayValue: null,
                    value: 'Vader'
                },

                Owner: {
                    displayValue: 'Test User',
                    value: {
                        apiName: 'Name',
                        childRelationships: {},
                        eTag: '4e94a722d0417299ad3296504d6fcc21',
                        fields: {
                            Id: {
                                displayValue: null,
                                value: '005R0000000F9tkIAC'
                            },

                            Name: {
                                displayValue: null,
                                value: 'Test User'
                            }
                        },

                        id: '005R0000000F9tkIAC',
                        recordTypeInfo: null
                    }
                },

                OwnerId: {
                    displayValue: null,
                    value: '005R0000000F9tkIAC'
                },

                Power_Level_Remaining__c: {
                    displayValue: null,
                    value: 5000
                },

                Power_level__c: {
                    displayValue: null,
                    value: 5000
                },

                Rich_Text_Field__c: {
                    displayValue: null,
                    value: '&lt;i&gt;&lt;b&gt;Rich text&lt;/b&gt;&lt;/i&gt;'
                },

                Salary_Per_Year__c: {
                    displayValue: '$2,322',
                    value: 2322
                },

                Secret_Code__c: {
                    displayValue: null,
                    value: '1234'
                },

                States_Provinces__c: {
                    displayValue: 'British Columbia',
                    value: 'British Columbia'
                },

                Territories_Covered__c: {
                    displayValue: 'East;West;South',
                    value: 'East;West;South'
                },

                Wakeup_time__c: {
                    displayValue: '6:23 AM',
                    value: '06:23:00.000Z'
                },

                Weakness__c: {
                    displayValue: 'Emotional Blackmail',
                    value: 'Emotional Blackmail'
                },

                Weapon__c: {
                    displayValue: null,
                    value: 'a01R0000000M7taIAC'
                },

                Weapon__r: {
                    displayValue: 'Lightsaber',
                    value: {
                        apiName: 'Weapon__c',
                        childRelationships: {},
                        eTag: '87c4734056509ba7e47200004cedb4d1',
                        fields: {
                            Id: {
                                displayValue: null,
                                value: 'a01R0000000M7taIAC'
                            },

                            Name: {
                                displayValue: null,
                                value: 'Lightsaber'
                            }
                        },

                        id: 'a01R0000000M7taIAC',
                        recordTypeInfo: null
                    }
                },

                Website__c: {
                    displayValue: null,
                    value: 'www.google.com'
                },

                age__c: {
                    displayValue: null,
                    value: 40
                }
            },

            id: 'a00R0000000xAHtIAM',
            recordTypeInfo: null
        },

        a00R0000000xAHtIBC: {
            apiName: 'Bad_Guy__c',
            childRelationships: {},
            eTag: '03f13b9fc818a0717e3583ef593b72fe',
            fields: {
                Attack_Prep__c: {
                    displayValue: '7/29/2019 2:09 PM',
                    value: '2019-07-29T21:09:00.000Z'
                },

                Auto_Number__c: {
                    displayValue: null,
                    value: 'A-17/31-0001'
                },

                Birthday__c: {
                    displayValue: '5/17/1977',
                    value: '1977-05-17'
                },

                Cell_Number__c: {
                    displayValue: null,
                    value: '(415) 122-1212'
                },

                City__c: {
                    displayValue: 'Neverhood',
                    value: 'Neverhood'
                },

                Converted_Website__c: {
                    displayValue: null,
                    value:
                        '&lt;a href=&quot;www.google.com&quot; target=&quot;_blank&quot;&gt;Tips &amp; Tricks&lt;/a&gt;'
                },

                Country__c: {
                    displayValue: 'Canada',
                    value: 'Canada'
                },

                CreatedBy: {
                    displayValue: 'Test User',
                    value: {
                        apiName: 'User',
                        childRelationships: {},
                        eTag: 'bf306bc78b47c4cd9afd4b7bf36df6e4',
                        fields: {
                            Id: {
                                displayValue: null,
                                value: '005R0000000F9tkIAC'
                            },

                            Name: {
                                displayValue: null,
                                value: 'Test User'
                            }
                        },

                        id: '005R0000000F9tkIAC',
                        recordTypeInfo: null
                    }
                },

                CreatedById: {
                    displayValue: null,
                    value: '005R0000000F9tkIAC'
                },

                CreatedDate: {
                    displayValue: '8/31/2017 2:11 PM',
                    value: '2017-08-31T21:11:18.000Z'
                },

                Description__c: {
                    displayValue: null,
                    value: 'Dark Lord of the Sith'
                },

                Email_Address__c: {
                    displayValue: null,
                    value: 'darth@empire.gov'
                },

                Has_Weakness__c: {
                    displayValue: null,
                    value: true
                },

                Has_Website__c: {
                    displayValue: null,
                    value: true
                },

                Hideout_Location__Latitude__s: {
                    displayValue: null,
                    value: 0
                },

                Hideout_Location__Longitude__s: {
                    displayValue: null,
                    value: 0
                },

                LastModifiedBy: {
                    displayValue: 'Test User',
                    value: {
                        apiName: 'User',
                        childRelationships: {},
                        eTag: 'bf306bc78b47c4cd9afd4b7bf36df6e4',
                        fields: {
                            Id: {
                                displayValue: null,
                                value: '005R0000000F9tkIAC'
                            },

                            Name: {
                                displayValue: null,
                                value: 'Test User'
                            }
                        },

                        id: '005R0000000F9tkIAC',
                        recordTypeInfo: null
                    }
                },

                LastModifiedById: {
                    displayValue: null,
                    value: '005R0000000F9tkIAC'
                },

                LastModifiedDate: {
                    displayValue: '9/11/2017 9:40 PM',
                    value: '2017-09-12T04:40:39.000Z'
                },

                Minions__c: {
                    displayValue: null,
                    value: 12
                },

                MultiCity__c: {
                    displayValue: 'Montreal;Neverhood;Vancouver',
                    value: 'Montreal;Neverhood;Vancouver'
                },

                Name: {
                    displayValue: null,
                    value: 'Darth Vader'
                },

                Net_Worth__c: {
                    displayValue: '$92,880.00',
                    value: 92880
                },

                Next_Attack__c: {
                    displayValue: '7/31/2019 2:09 PM',
                    value: '2019-07-31T21:09:00.000Z'
                },

                Nickname__c: {
                    displayValue: null,
                    value: 'Vader'
                },

                Owner: {
                    displayValue: 'Test User',
                    value: {
                        apiName: 'Name',
                        childRelationships: {},
                        eTag: '4e94a722d0417299ad3296504d6fcc21',
                        fields: {
                            Id: {
                                displayValue: null,
                                value: '005R0000000F9tkIAC'
                            },

                            Name: {
                                displayValue: null,
                                value: 'Test User'
                            }
                        },

                        id: '005R0000000F9tkIAC',
                        recordTypeInfo: null
                    }
                },

                OwnerId: {
                    displayValue: null,
                    value: '005R0000000F9tkIAC'
                },

                Power_Level_Remaining__c: {
                    displayValue: null,
                    value: 5000
                },

                Power_level__c: {
                    displayValue: null,
                    value: 5000
                },

                Rich_Text_Field__c: {
                    displayValue: null,
                    value: '&lt;i&gt;&lt;b&gt;Rich text&lt;/b&gt;&lt;/i&gt;'
                },

                Salary_Per_Year__c: {
                    displayValue: '$2,322',
                    value: 2322
                },

                Secret_Code__c: {
                    displayValue: null,
                    value: '1234'
                },

                States_Provinces__c: {
                    displayValue: 'British Columbia',
                    value: 'British Columbia'
                },

                Territories_Covered__c: {
                    displayValue: 'East;West;South',
                    value: 'East;West;South'
                },

                Wakeup_time__c: {
                    displayValue: '6:23 AM',
                    value: '06:23:00.000Z'
                },

                Weakness__c: {
                    displayValue: 'Emotional Blackmail',
                    value: 'Emotional Blackmail'
                },

                Weapon__c: {
                    displayValue: null,
                    value: 'a01R0000000M7taIAC'
                },

                Weapon__r: {
                    displayValue: 'Lightsaber',
                    value: {
                        apiName: 'Weapon__c',
                        childRelationships: {},
                        eTag: '87c4734056509ba7e47200004cedb4d1',
                        fields: {
                            Id: {
                                displayValue: null,
                                value: 'a01R0000000M7taIAC'
                            },

                            Name: {
                                displayValue: null,
                                value: 'Lightsaber'
                            }
                        },

                        id: 'a01R0000000M7taIAC',
                        recordTypeInfo: null
                    }
                },

                Website__c: {
                    displayValue: null,
                    value: 'www.google.com'
                },

                age__c: {
                    displayValue: null,
                    value: 40
                }
            },

            id: 'a00R0000000xAHtIBC',
            recordTypeInfo: null
        }
    }
};
