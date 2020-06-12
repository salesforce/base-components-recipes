/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

export const LOOKUPS = {
    SUPPORTED_OBJECTS: ['Bad_Guy__c'],
    SUPPORTED_FIELDS: ['OwnerId'],
    SUPPORTED_TARGETS: ['Group'],
    SUPPORTED_TYPES: ['Recent', 'TypeAhead', 'Search'],
    SUPPORTED_PAGES: [1],
    SUPPORTED_PAGESIZES: [5],
    RESULTS: {
        'Bad_Guy__c:OwnerId:Group::Recent:1:5': {
            count: 5,
            currentPageUrl:
                '/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?searchType=Recent&page=1&pageSize=5',
            nextPageUrl:
                '/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?searchType=Recent&page=2&pageSize=5',
            previousPageUrl: null,
            records: [
                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '6e1d9fcd27a127f43fe4e32a80b6f6cb',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001xx000003DGZnAAO'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Acme'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001xx000003DGZnAAO',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'b310ed42bf4b0fe2dc144408a4adb5c5',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b65xIAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Media'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b65xIAA',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '3a0823c484b6413289f532a7f8778a2c',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b65zIAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'salesforce.com'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b65zIAA',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '8a2a01b7af8abea4528ba1444ddb5822',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002eb1HIAQ'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 2'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002eb1HIAQ',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '38a18064865740d2929384b75534ddae',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b662IAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 1'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b662IAA',
                    recordTypeInfo: null
                }
            ]
        },

        'Bad_Guy__c:OwnerId:Group:g:Recent:1:5': {
            count: 5,
            currentPageUrl:
                '/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=g&searchType=Recent&page=1&pageSize=5',
            nextPageUrl:
                '/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=g&searchType=Recent&page=2&pageSize=5',
            previousPageUrl: null,
            records: [
                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '19809acdcf2beeb2fada4a3819b16a82',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001xx000003DGZnAAO'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Acme'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001xx000003DGZnAAO',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'c6aceea935f25f943b97be81cf6bdeb9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b65xIAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Media'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b65xIAA',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'd80775b81e3a35e1aff0e520033f7978',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b65zIAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'salesforce.com'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b65zIAA',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'e29bfc9293f4e5b5e0b13593751c26b9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002eb1HIAQ'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 2'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002eb1HIAQ',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '9d3bfe4777d2541dabd973ef6bd67d56',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b662IAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 1'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b662IAA',
                    recordTypeInfo: null
                }
            ]
        },

        'Bad_Guy__c:OwnerId:Group:gl:Recent:1:5': {
            count: 5,
            currentPageUrl:
                '/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=gl&searchType=Recent&page=1&pageSize=5',
            nextPageUrl:
                '/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=gl&searchType=Recent&page=2&pageSize=5',
            previousPageUrl: null,
            records: [
                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '19809acdcf2beeb2fada4a3819b16a82',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001xx000003DGZnAAO'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Acme'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001xx000003DGZnAAO',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'c6aceea935f25f943b97be81cf6bdeb9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b65xIAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Media'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b65xIAA',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'd80775b81e3a35e1aff0e520033f7978',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b65zIAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'salesforce.com'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b65zIAA',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'e29bfc9293f4e5b5e0b13593751c26b9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002eb1HIAQ'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 2'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002eb1HIAQ',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '9d3bfe4777d2541dabd973ef6bd67d56',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b662IAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 1'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b662IAA',
                    recordTypeInfo: null
                }
            ]
        },

        'Bad_Guy__c:OwnerId:Group:glo:Recent:1:5': {
            count: 5,
            currentPageUrl:
                '/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=glo&searchType=Recent&page=1&pageSize=5',
            nextPageUrl:
                '/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=glo&searchType=Recent&page=2&pageSize=5',
            previousPageUrl: null,
            records: [
                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '19809acdcf2beeb2fada4a3819b16a82',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001xx000003DGZnAAO'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Acme'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001xx000003DGZnAAO',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'c6aceea935f25f943b97be81cf6bdeb9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b65xIAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Media'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b65xIAA',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'd80775b81e3a35e1aff0e520033f7978',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b65zIAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'salesforce.com'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b65zIAA',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'e29bfc9293f4e5b5e0b13593751c26b9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002eb1HIAQ'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 2'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002eb1HIAQ',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '9d3bfe4777d2541dabd973ef6bd67d56',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b662IAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 1'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b662IAA',
                    recordTypeInfo: null
                }
            ]
        },

        'Bad_Guy__c:OwnerId:Group:glob:Recent:1:5': {
            count: 5,
            currentPageUrl:
                '/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=glob&searchType=Recent&page=1&pageSize=5',
            nextPageUrl:
                '/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=glob&searchType=Recent&page=2&pageSize=5',
            previousPageUrl: null,
            records: [
                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '19809acdcf2beeb2fada4a3819b16a82',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001xx000003DGZnAAO'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Acme'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001xx000003DGZnAAO',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'c6aceea935f25f943b97be81cf6bdeb9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b65xIAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Media'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b65xIAA',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'd80775b81e3a35e1aff0e520033f7978',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b65zIAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'salesforce.com'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b65zIAA',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'e29bfc9293f4e5b5e0b13593751c26b9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002eb1HIAQ'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 2'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002eb1HIAQ',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '9d3bfe4777d2541dabd973ef6bd67d56',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b662IAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 1'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b662IAA',
                    recordTypeInfo: null
                }
            ]
        },

        'Bad_Guy__c:OwnerId:Group:globa:Recent:1:5': {
            count: 5,
            currentPageUrl:
                '/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=globa&searchType=Recent&page=1&pageSize=5',
            nextPageUrl:
                '/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=globa&searchType=Recent&page=2&pageSize=5',
            previousPageUrl: null,
            records: [
                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '19809acdcf2beeb2fada4a3819b16a82',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001xx000003DGZnAAO'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Acme'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001xx000003DGZnAAO',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'c6aceea935f25f943b97be81cf6bdeb9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b65xIAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Media'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b65xIAA',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'd80775b81e3a35e1aff0e520033f7978',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b65zIAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'salesforce.com'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b65zIAA',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'e29bfc9293f4e5b5e0b13593751c26b9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002eb1HIAQ'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 2'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002eb1HIAQ',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '9d3bfe4777d2541dabd973ef6bd67d56',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b662IAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 1'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b662IAA',
                    recordTypeInfo: null
                }
            ]
        },

        'Bad_Guy__c:OwnerId:Group:global:Recent:1:5': {
            count: 5,
            currentPageUrl:
                '/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=global&searchType=Recent&page=1&pageSize=5',
            nextPageUrl:
                '/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=global&searchType=Recent&page=2&pageSize=5',
            previousPageUrl: null,
            records: [
                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '19809acdcf2beeb2fada4a3819b16a82',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001xx000003DGZnAAO'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Acme'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001xx000003DGZnAAO',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'c6aceea935f25f943b97be81cf6bdeb9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b65xIAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Media'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b65xIAA',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'd80775b81e3a35e1aff0e520033f7978',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b65zIAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'salesforce.com'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b65zIAA',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'e29bfc9293f4e5b5e0b13593751c26b9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002eb1HIAQ'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 2'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002eb1HIAQ',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '9d3bfe4777d2541dabd973ef6bd67d56',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b662IAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 1'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b662IAA',
                    recordTypeInfo: null
                }
            ]
        },

        'Bad_Guy__c:OwnerId:Group::TypeAhead:1:5': {
            count: 0,
            currentPageUrl:
                '/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?searchType=TypeAhead&page=1&pageSize=5',
            nextPageUrl: null,
            previousPageUrl: null,
            records: []
        },

        'Bad_Guy__c:OwnerId:Group:g:TypeAhead:1:5': {
            count: 0,
            currentPageUrl:
                '/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=g&searchType=TypeAhead&page=1&pageSize=5',
            nextPageUrl: null,
            previousPageUrl: null,
            records: []
        },

        'Bad_Guy__c:OwnerId:Group:gl:TypeAhead:1:5': {
            count: 0,
            currentPageUrl:
                '/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=gl&searchType=TypeAhead&page=1&pageSize=5',
            nextPageUrl: null,
            previousPageUrl: null,
            records: []
        },

        'Bad_Guy__c:OwnerId:Group:glo:TypeAhead:1:5': {
            count: 4,
            currentPageUrl:
                '/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=glo&searchType=TypeAhead&page=1&pageSize=5',
            nextPageUrl: null,
            previousPageUrl: null,
            records: [
                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'e29bfc9293f4e5b5e0b13593751c26b9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002eb1HIAQ'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 2'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002eb1HIAQ',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '1e10da5eda9609b85b4554e0945f499a',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002eb1CIAQ'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 0'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002eb1CIAQ',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '9d3bfe4777d2541dabd973ef6bd67d56',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b662IAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 1'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b662IAA',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'c6aceea935f25f943b97be81cf6bdeb9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b65xIAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Media'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b65xIAA',
                    recordTypeInfo: null
                }
            ]
        },

        'Bad_Guy__c:OwnerId:Group:glob:TypeAhead:1:5': {
            count: 4,
            currentPageUrl:
                '/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=glob&searchType=TypeAhead&page=1&pageSize=5',
            nextPageUrl: null,
            previousPageUrl: null,
            records: [
                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'e29bfc9293f4e5b5e0b13593751c26b9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002eb1HIAQ'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 2'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002eb1HIAQ',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '1e10da5eda9609b85b4554e0945f499a',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002eb1CIAQ'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 0'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002eb1CIAQ',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '9d3bfe4777d2541dabd973ef6bd67d56',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b662IAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 1'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b662IAA',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'c6aceea935f25f943b97be81cf6bdeb9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b65xIAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Media'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b65xIAA',
                    recordTypeInfo: null
                }
            ]
        },

        'Bad_Guy__c:OwnerId:Group:globa:TypeAhead:1:5': {
            count: 4,
            currentPageUrl:
                '/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=globa&searchType=TypeAhead&page=1&pageSize=5',
            nextPageUrl: null,
            previousPageUrl: null,
            records: [
                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'e29bfc9293f4e5b5e0b13593751c26b9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002eb1HIAQ'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 2'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002eb1HIAQ',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '1e10da5eda9609b85b4554e0945f499a',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002eb1CIAQ'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 0'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002eb1CIAQ',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '9d3bfe4777d2541dabd973ef6bd67d56',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b662IAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 1'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b662IAA',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'c6aceea935f25f943b97be81cf6bdeb9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b65xIAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Media'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b65xIAA',
                    recordTypeInfo: null
                }
            ]
        },

        'Bad_Guy__c:OwnerId:Group:global:TypeAhead:1:5': {
            count: 4,
            currentPageUrl:
                '/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=global&searchType=TypeAhead&page=1&pageSize=5',
            nextPageUrl: null,
            previousPageUrl: null,
            records: [
                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'e29bfc9293f4e5b5e0b13593751c26b9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002eb1HIAQ'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 2'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002eb1HIAQ',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '1e10da5eda9609b85b4554e0945f499a',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002eb1CIAQ'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 0'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002eb1CIAQ',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '9d3bfe4777d2541dabd973ef6bd67d56',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b662IAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 1'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b662IAA',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'c6aceea935f25f943b97be81cf6bdeb9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b65xIAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Media'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b65xIAA',
                    recordTypeInfo: null
                }
            ]
        },

        'Bad_Guy__c:OwnerId:Group::Search:1:5': [
            {
                errorCode: 'INVALID_SEARCH',
                message:
                    'INVALID_SEARCH: search term must be longer than one character: '
            }
        ],

        'Bad_Guy__c:OwnerId:Group:g:Search:1:5': [
            {
                errorCode: 'INVALID_SEARCH',
                message:
                    'INVALID_SEARCH: search term must be longer than one character: g'
            }
        ],

        'Bad_Guy__c:OwnerId:Group:gl:Search:1:5': {
            count: 4,
            currentPageUrl:
                '/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=gl&searchType=Search&page=1&pageSize=5',
            nextPageUrl: null,
            previousPageUrl: null,
            records: [
                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'e29bfc9293f4e5b5e0b13593751c26b9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002eb1HIAQ'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 2'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002eb1HIAQ',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '9d3bfe4777d2541dabd973ef6bd67d56',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b662IAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 1'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b662IAA',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '1e10da5eda9609b85b4554e0945f499a',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002eb1CIAQ'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 0'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002eb1CIAQ',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'c6aceea935f25f943b97be81cf6bdeb9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b65xIAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Media'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b65xIAA',
                    recordTypeInfo: null
                }
            ]
        },

        'Bad_Guy__c:OwnerId:Group:glo:Search:1:5': {
            count: 4,
            currentPageUrl:
                '/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=glo&searchType=Search&page=1&pageSize=5',
            nextPageUrl: null,
            previousPageUrl: null,
            records: [
                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'e29bfc9293f4e5b5e0b13593751c26b9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002eb1HIAQ'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 2'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002eb1HIAQ',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '9d3bfe4777d2541dabd973ef6bd67d56',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b662IAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 1'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b662IAA',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '1e10da5eda9609b85b4554e0945f499a',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002eb1CIAQ'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 0'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002eb1CIAQ',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'c6aceea935f25f943b97be81cf6bdeb9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b65xIAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Media'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b65xIAA',
                    recordTypeInfo: null
                }
            ]
        },

        'Bad_Guy__c:OwnerId:Group:glob:Search:1:5': {
            count: 4,
            currentPageUrl:
                '/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=glob&searchType=Search&page=1&pageSize=5',
            nextPageUrl: null,
            previousPageUrl: null,
            records: [
                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'e29bfc9293f4e5b5e0b13593751c26b9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002eb1HIAQ'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 2'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002eb1HIAQ',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '9d3bfe4777d2541dabd973ef6bd67d56',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b662IAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 1'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b662IAA',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '1e10da5eda9609b85b4554e0945f499a',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002eb1CIAQ'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 0'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002eb1CIAQ',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'c6aceea935f25f943b97be81cf6bdeb9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b65xIAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Media'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b65xIAA',
                    recordTypeInfo: null
                }
            ]
        },

        'Bad_Guy__c:OwnerId:Group:globa:Search:1:5': {
            count: 4,
            currentPageUrl:
                '/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=globa&searchType=Search&page=1&pageSize=5',
            nextPageUrl: null,
            previousPageUrl: null,
            records: [
                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'e29bfc9293f4e5b5e0b13593751c26b9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002eb1HIAQ'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 2'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002eb1HIAQ',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '9d3bfe4777d2541dabd973ef6bd67d56',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b662IAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 1'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b662IAA',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '1e10da5eda9609b85b4554e0945f499a',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002eb1CIAQ'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 0'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002eb1CIAQ',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'c6aceea935f25f943b97be81cf6bdeb9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b65xIAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Media'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b65xIAA',
                    recordTypeInfo: null
                }
            ]
        },

        'Bad_Guy__c:OwnerId:Group:global:Search:1:5': {
            count: 4,
            currentPageUrl:
                '/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=global&searchType=Search&page=1&pageSize=5',
            nextPageUrl: null,
            previousPageUrl: null,
            records: [
                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'e29bfc9293f4e5b5e0b13593751c26b9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002eb1HIAQ'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 2'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002eb1HIAQ',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '9d3bfe4777d2541dabd973ef6bd67d56',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b662IAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 1'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b662IAA',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: '1e10da5eda9609b85b4554e0945f499a',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002eb1CIAQ'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Acme 0'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002eb1CIAQ',
                    recordTypeInfo: null
                },

                {
                    apiName: 'Group',
                    childRelationships: {},
                    eTag: 'c6aceea935f25f943b97be81cf6bdeb9',
                    fields: {
                        DisambiguationField: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        },

                        Id: {
                            displayValue: null,
                            value: '001R0000002b65xIAA'
                        },

                        Name: {
                            displayValue: null,
                            value: 'Global Media'
                        },

                        Phone: {
                            displayValue: null,
                            value: '(212) 555-5558'
                        }
                    },

                    id: '001R0000002b65xIAA',
                    recordTypeInfo: null
                }
            ]
        }
    },

    getNoResults(
        objectApiName,
        fieldApiName,
        targetApiName,
        q,
        searchType,
        page,
        pageSize
    ) {
        const pageUrl = `/services/data/v42.0/ui-api/lookup/${objectApiName}/${fieldApiName}/${targetApiName}?searchType=${searchType}&page=${page}&pageSize=${pageSize}&q=${q}`;
        return {
            count: 0,
            currentPageUrl: pageUrl,
            nextPageUrl: null,
            previousPageUrl: null,
            records: []
        };
    }
};
