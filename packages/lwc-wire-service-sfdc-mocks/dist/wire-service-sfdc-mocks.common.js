'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Copyright (C) 2018 salesforce.com, inc.
 */
/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const ValueChangedEventType = 'ValueChangedEvent';
/**
 * Event fired by wire adapters to emit a new value.
 */
class ValueChangedEvent {
    constructor(value) {
        this.type = ValueChangedEventType;
        this.value = value;
    }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const { freeze, defineProperty, isExtensible } = Object;
// This value needs to be in sync with wiring.ts from @lwc/engine
const DeprecatedWiredElementHost = '$$DeprecatedWiredElementHostKey$$';
/**
 * Registers a wire adapter factory for Lightning Platform.
 * @deprecated
 */
function register(adapterId, adapterEventTargetCallback) {
    if (adapterId == null || !isExtensible(adapterId)) {
        throw new TypeError('adapter id must be extensible');
    }
    if (typeof adapterEventTargetCallback !== 'function') {
        throw new TypeError('adapter factory must be a callable');
    }
    if ('adapter' in adapterId) {
        throw new TypeError('adapter id is already associated to an adapter factory');
    }
    const AdapterClass = class extends WireAdapter {
        constructor(dataCallback) {
            super(dataCallback);
            adapterEventTargetCallback(this.eventTarget);
        }
    };
    freeze(AdapterClass);
    freeze(AdapterClass.prototype);
    defineProperty(adapterId, 'adapter', {
        writable: false,
        configurable: false,
        value: AdapterClass,
    });
}
const { forEach, splice: ArraySplice, indexOf: ArrayIndexOf } = Array.prototype;
// wire event target life cycle connectedCallback hook event type
const CONNECT = 'connect';
// wire event target life cycle disconnectedCallback hook event type
const DISCONNECT = 'disconnect';
// wire event target life cycle config changed hook event type
const CONFIG = 'config';
function removeListener(listeners, toRemove) {
    const idx = ArrayIndexOf.call(listeners, toRemove);
    if (idx > -1) {
        ArraySplice.call(listeners, idx, 1);
    }
}
class WireAdapter {
    constructor(callback) {
        this.connecting = [];
        this.disconnecting = [];
        this.configuring = [];
        this.callback = callback;
        this.wiredElementHost = callback[DeprecatedWiredElementHost];
        this.eventTarget = {
            addEventListener: (type, listener) => {
                switch (type) {
                    case CONNECT: {
                        this.connecting.push(listener);
                        break;
                    }
                    case DISCONNECT: {
                        this.disconnecting.push(listener);
                        break;
                    }
                    case CONFIG: {
                        this.configuring.push(listener);
                        if (this.currentConfig !== undefined) {
                            listener.call(undefined, this.currentConfig);
                        }
                        break;
                    }
                    default:
                        throw new Error(`Invalid event type ${type}.`);
                }
            },
            removeEventListener: (type, listener) => {
                switch (type) {
                    case CONNECT: {
                        removeListener(this.connecting, listener);
                        break;
                    }
                    case DISCONNECT: {
                        removeListener(this.disconnecting, listener);
                        break;
                    }
                    case CONFIG: {
                        removeListener(this.configuring, listener);
                        break;
                    }
                    default:
                        throw new Error(`Invalid event type ${type}.`);
                }
            },
            dispatchEvent: (evt) => {
                if (evt instanceof ValueChangedEvent) {
                    const value = evt.value;
                    this.callback(value);
                }
                else if (evt.type === 'WireContextEvent' || evt.type === 'wirecontextevent') {
                    // TODO [#1357]: remove this branch
                    return this.wiredElementHost.dispatchEvent(evt);
                }
                else {
                    throw new Error(`Invalid event type ${evt.type}.`);
                }
                return false; // canceling signal since we don't want this to propagate
            },
        };
    }
    update(config) {
        this.currentConfig = config;
        forEach.call(this.configuring, listener => {
            listener.call(undefined, config);
        });
    }
    connect() {
        forEach.call(this.connecting, listener => listener.call(undefined));
    }
    disconnect() {
        forEach.call(this.disconnecting, listener => listener.call(undefined));
    }
}


/** version: 1.1.13-224.5 */

const eTag = "6293748a217f1938e353cd01125e9e6e";
const layoutUserStates = {"00hR0000000PPI9IAO":{"id":"00hR0000000PPI9IAO","sectionUserStates":{"01BR0000000ixA4MAI":{"collapsed":false,"id":"01BR0000000ixA4MAI"},"01BR0000000ixA5MAI":{"collapsed":false,"id":"01BR0000000ixA5MAI"}}}};
const layouts = {"Bad_Guy__c":{"012000000000000AAA":{"Full":{"View":{"eTag":"367927234e83040e6cc21397723be50b","id":"00hR0000000PPI9IAO","layoutType":"Full","mode":"View","sections":[{"collapsible":false,"columns":2,"heading":"Information","id":"01BR0000000ixA4MAI","layoutRows":[{"layoutItems":[{"editableForNew":true,"editableForUpdate":true,"label":"Bad Guy Name","layoutComponents":[{"apiName":"Name","componentType":"Field","label":"Bad Guy Name"}],"lookupIdApiName":"Id","required":true,"sortable":false},{"editableForNew":true,"editableForUpdate":true,"label":"Nickname","layoutComponents":[{"apiName":"Nickname__c","componentType":"Field","label":"Nickname"}],"lookupIdApiName":null,"required":false,"sortable":false}]},{"layoutItems":[{"editableForNew":true,"editableForUpdate":true,"label":"Description","layoutComponents":[{"apiName":"Description__c","componentType":"Field","label":"Description"}],"lookupIdApiName":null,"required":false,"sortable":false},{"editableForNew":false,"editableForUpdate":false,"label":"Owner","layoutComponents":[{"apiName":"OwnerId","componentType":"Field","label":"Owner ID"}],"lookupIdApiName":"OwnerId","required":false,"sortable":false}]},{"layoutItems":[{"editableForNew":true,"editableForUpdate":true,"label":"Birthday","layoutComponents":[{"apiName":"Birthday__c","componentType":"Field","label":"Birthday"}],"lookupIdApiName":null,"required":false,"sortable":false},{"editableForNew":true,"editableForUpdate":true,"label":"Weapon","layoutComponents":[{"apiName":"Weapon__c","componentType":"Field","label":"Weapon"}],"lookupIdApiName":"Id","required":false,"sortable":false}]},{"layoutItems":[{"editableForNew":true,"editableForUpdate":true,"label":"Email Address","layoutComponents":[{"apiName":"Email_Address__c","componentType":"Field","label":"Email Address"}],"lookupIdApiName":null,"required":false,"sortable":false},{"editableForNew":true,"editableForUpdate":true,"label":"Power level","layoutComponents":[{"apiName":"Power_level__c","componentType":"Field","label":"Power level"}],"lookupIdApiName":null,"required":false,"sortable":false}]},{"layoutItems":[{"editableForNew":true,"editableForUpdate":true,"label":"Weakness","layoutComponents":[{"apiName":"Weakness__c","componentType":"Field","label":"Weakness"}],"lookupIdApiName":null,"required":false,"sortable":false},{"editableForNew":true,"editableForUpdate":true,"label":"Salary Per Year","layoutComponents":[{"apiName":"Salary_Per_Year__c","componentType":"Field","label":"Salary Per Year"}],"lookupIdApiName":null,"required":true,"sortable":false}]},{"layoutItems":[{"editableForNew":true,"editableForUpdate":true,"label":"Has Weakness","layoutComponents":[{"apiName":"Has_Weakness__c","componentType":"Field","label":"Has Weakness"}],"lookupIdApiName":null,"required":false,"sortable":false},{"editableForNew":false,"editableForUpdate":false,"label":"","layoutComponents":[{"apiName":null,"componentType":"EmptySpace"}],"lookupIdApiName":null,"required":false,"sortable":false}]},{"layoutItems":[{"editableForNew":true,"editableForUpdate":true,"label":"Rich Text Field","layoutComponents":[{"apiName":"Rich_Text_Field__c","componentType":"Field","label":"Rich Text Field"}],"lookupIdApiName":null,"required":false,"sortable":false},{"editableForNew":false,"editableForUpdate":false,"label":"","layoutComponents":[{"apiName":null,"componentType":"EmptySpace"}],"lookupIdApiName":null,"required":false,"sortable":false}]},{"layoutItems":[{"editableForNew":false,"editableForUpdate":false,"label":"age","layoutComponents":[{"apiName":"age__c","componentType":"Field","label":"age"}],"lookupIdApiName":null,"required":false,"sortable":false},{"editableForNew":false,"editableForUpdate":false,"label":"","layoutComponents":[{"apiName":null,"componentType":"EmptySpace"}],"lookupIdApiName":null,"required":false,"sortable":false}]},{"layoutItems":[{"editableForNew":true,"editableForUpdate":true,"label":"Country","layoutComponents":[{"apiName":"Country__c","componentType":"Field","label":"Country"}],"lookupIdApiName":null,"required":false,"sortable":false},{"editableForNew":false,"editableForUpdate":false,"label":"","layoutComponents":[{"apiName":null,"componentType":"EmptySpace"}],"lookupIdApiName":null,"required":false,"sortable":false}]},{"layoutItems":[{"editableForNew":true,"editableForUpdate":true,"label":"States/Provinces","layoutComponents":[{"apiName":"States_Provinces__c","componentType":"Field","label":"States/Provinces"}],"lookupIdApiName":null,"required":false,"sortable":false},{"editableForNew":false,"editableForUpdate":false,"label":"","layoutComponents":[{"apiName":null,"componentType":"EmptySpace"}],"lookupIdApiName":null,"required":false,"sortable":false}]},{"layoutItems":[{"editableForNew":true,"editableForUpdate":true,"label":"City","layoutComponents":[{"apiName":"City__c","componentType":"Field","label":"City"}],"lookupIdApiName":null,"required":false,"sortable":false},{"editableForNew":false,"editableForUpdate":false,"label":"","layoutComponents":[{"apiName":null,"componentType":"EmptySpace"}],"lookupIdApiName":null,"required":false,"sortable":false}]},{"layoutItems":[{"editableForNew":true,"editableForUpdate":true,"label":"MultiCity","layoutComponents":[{"apiName":"MultiCity__c","componentType":"Field","label":"MultiCity"}],"lookupIdApiName":null,"required":false,"sortable":false},{"editableForNew":false,"editableForUpdate":false,"label":"","layoutComponents":[{"apiName":null,"componentType":"EmptySpace"}],"lookupIdApiName":null,"required":false,"sortable":false}]},{"layoutItems":[{"editableForNew":true,"editableForUpdate":true,"label":"Territories Covered","layoutComponents":[{"apiName":"Territories_Covered__c","componentType":"Field","label":"Territories Covered"}],"lookupIdApiName":null,"required":false,"sortable":false},{"editableForNew":false,"editableForUpdate":false,"label":"","layoutComponents":[{"apiName":null,"componentType":"EmptySpace"}],"lookupIdApiName":null,"required":false,"sortable":false}]},{"layoutItems":[{"editableForNew":true,"editableForUpdate":true,"label":"Next Attack","layoutComponents":[{"apiName":"Next_Attack__c","componentType":"Field","label":"Next Attack"}],"lookupIdApiName":null,"required":false,"sortable":false},{"editableForNew":false,"editableForUpdate":false,"label":"","layoutComponents":[{"apiName":null,"componentType":"EmptySpace"}],"lookupIdApiName":null,"required":false,"sortable":false}]},{"layoutItems":[{"editableForNew":true,"editableForUpdate":true,"label":"Wakeup time","layoutComponents":[{"apiName":"Wakeup_time__c","componentType":"Field","label":"Wakeup time"}],"lookupIdApiName":null,"required":false,"sortable":false},{"editableForNew":false,"editableForUpdate":false,"label":"","layoutComponents":[{"apiName":null,"componentType":"EmptySpace"}],"lookupIdApiName":null,"required":false,"sortable":false}]},{"layoutItems":[{"editableForNew":false,"editableForUpdate":false,"label":"Auto Number","layoutComponents":[{"apiName":"Auto_Number__c","componentType":"Field","label":"Auto Number"}],"lookupIdApiName":null,"required":false,"sortable":false},{"editableForNew":false,"editableForUpdate":false,"label":"","layoutComponents":[{"apiName":null,"componentType":"EmptySpace"}],"lookupIdApiName":null,"required":false,"sortable":false}]},{"layoutItems":[{"editableForNew":true,"editableForUpdate":true,"label":"Hideout Location","layoutComponents":[{"apiName":"Hideout_Location__Latitude__s","componentType":"Field","label":"Hideout Location (Latitude)"},{"apiName":"Hideout_Location__Longitude__s","componentType":"Field","label":"Hideout Location (Longitude)"}],"lookupIdApiName":null,"required":false,"sortable":false},{"editableForNew":false,"editableForUpdate":false,"label":"","layoutComponents":[{"apiName":null,"componentType":"EmptySpace"}],"lookupIdApiName":null,"required":false,"sortable":false}]},{"layoutItems":[{"editableForNew":true,"editableForUpdate":true,"label":"Minions","layoutComponents":[{"apiName":"Minions__c","componentType":"Field","label":"Minions"}],"lookupIdApiName":null,"required":false,"sortable":false},{"editableForNew":false,"editableForUpdate":false,"label":"","layoutComponents":[{"apiName":null,"componentType":"EmptySpace"}],"lookupIdApiName":null,"required":false,"sortable":false}]},{"layoutItems":[{"editableForNew":true,"editableForUpdate":true,"label":"Cell Number","layoutComponents":[{"apiName":"Cell_Number__c","componentType":"Field","label":"Cell Number"}],"lookupIdApiName":null,"required":false,"sortable":false},{"editableForNew":false,"editableForUpdate":false,"label":"","layoutComponents":[{"apiName":null,"componentType":"EmptySpace"}],"lookupIdApiName":null,"required":false,"sortable":false}]},{"layoutItems":[{"editableForNew":true,"editableForUpdate":true,"label":"Secret Code","layoutComponents":[{"apiName":"Secret_Code__c","componentType":"Field","label":"Secret Code"}],"lookupIdApiName":null,"required":false,"sortable":false},{"editableForNew":false,"editableForUpdate":false,"label":"","layoutComponents":[{"apiName":null,"componentType":"EmptySpace"}],"lookupIdApiName":null,"required":false,"sortable":false}]},{"layoutItems":[{"editableForNew":true,"editableForUpdate":true,"label":"Website","layoutComponents":[{"apiName":"Website__c","componentType":"Field","label":"Website"}],"lookupIdApiName":null,"required":false,"sortable":false},{"editableForNew":false,"editableForUpdate":false,"label":"","layoutComponents":[{"apiName":null,"componentType":"EmptySpace"}],"lookupIdApiName":null,"required":false,"sortable":false}]},{"layoutItems":[{"editableForNew":false,"editableForUpdate":false,"label":"Has Website","layoutComponents":[{"apiName":"Has_Website__c","componentType":"Field","label":"Has Website"}],"lookupIdApiName":null,"required":false,"sortable":false},{"editableForNew":false,"editableForUpdate":false,"label":"","layoutComponents":[{"apiName":null,"componentType":"EmptySpace"}],"lookupIdApiName":null,"required":false,"sortable":false}]},{"layoutItems":[{"editableForNew":false,"editableForUpdate":false,"label":"Net Worth","layoutComponents":[{"apiName":"Net_Worth__c","componentType":"Field","label":"Net Worth"}],"lookupIdApiName":null,"required":false,"sortable":false},{"editableForNew":false,"editableForUpdate":false,"label":"","layoutComponents":[{"apiName":null,"componentType":"EmptySpace"}],"lookupIdApiName":null,"required":false,"sortable":false}]},{"layoutItems":[{"editableForNew":false,"editableForUpdate":false,"label":"Attack Prep","layoutComponents":[{"apiName":"Attack_Prep__c","componentType":"Field","label":"Attack Prep"}],"lookupIdApiName":null,"required":false,"sortable":false},{"editableForNew":false,"editableForUpdate":false,"label":"","layoutComponents":[{"apiName":null,"componentType":"EmptySpace"}],"lookupIdApiName":null,"required":false,"sortable":false}]},{"layoutItems":[{"editableForNew":false,"editableForUpdate":false,"label":"Power Level Remaining","layoutComponents":[{"apiName":"Power_Level_Remaining__c","componentType":"Field","label":"Power Level Remaining"}],"lookupIdApiName":null,"required":false,"sortable":false},{"editableForNew":false,"editableForUpdate":false,"label":"","layoutComponents":[{"apiName":null,"componentType":"EmptySpace"}],"lookupIdApiName":null,"required":false,"sortable":false}]},{"layoutItems":[{"editableForNew":false,"editableForUpdate":false,"label":"Converted Website","layoutComponents":[{"apiName":"Converted_Website__c","componentType":"Field","label":"Converted Website"}],"lookupIdApiName":null,"required":false,"sortable":false},{"editableForNew":false,"editableForUpdate":false,"label":"","layoutComponents":[{"apiName":null,"componentType":"EmptySpace"}],"lookupIdApiName":null,"required":false,"sortable":false}]}],"rows":26,"useHeading":false},{"collapsible":false,"columns":2,"heading":"System Information","id":"01BR0000000ixA5MAI","layoutRows":[{"layoutItems":[{"editableForNew":false,"editableForUpdate":false,"label":"Created By","layoutComponents":[{"apiName":"CreatedById","componentType":"Field","label":"Created By ID"},{"apiName":"CreatedDate","componentType":"Field","label":"Created Date"}],"lookupIdApiName":"CreatedById","required":false,"sortable":false},{"editableForNew":false,"editableForUpdate":false,"label":"Last Modified By","layoutComponents":[{"apiName":"LastModifiedById","componentType":"Field","label":"Last Modified By ID"},{"apiName":"LastModifiedDate","componentType":"Field","label":"Last Modified Date"}],"lookupIdApiName":"LastModifiedById","required":false,"sortable":false}]}],"rows":1,"useHeading":false}]}}}}};
const objectInfos = {"Bad_Guy__c":{"apiName":"Bad_Guy__c","childRelationships":[{"childObjectApiName":"AttachedContentDocument","fieldName":"LinkedEntityId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"AttachedContentDocuments"},{"childObjectApiName":"Attachment","fieldName":"ParentId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Attachments"},{"childObjectApiName":"CollaborationGroupRecord","fieldName":"RecordId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"RecordAssociatedGroups"},{"childObjectApiName":"CombinedAttachment","fieldName":"ParentId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"CombinedAttachments"},{"childObjectApiName":"ContentDocumentLink","fieldName":"LinkedEntityId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"ContentDocumentLinks"},{"childObjectApiName":"DuplicateRecordItem","fieldName":"RecordId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"DuplicateRecordItems"},{"childObjectApiName":"EmailMessage","fieldName":"RelatedToId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Emails"},{"childObjectApiName":"EntitySubscription","fieldName":"ParentId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"FeedSubscriptionsForEntity"},{"childObjectApiName":"Note","fieldName":"ParentId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Notes"},{"childObjectApiName":"NoteAndAttachment","fieldName":"ParentId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"NotesAndAttachments"},{"childObjectApiName":"Opportunity","fieldName":"Bad_guy__c","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Opportunities__r"},{"childObjectApiName":"ProcessInstance","fieldName":"TargetObjectId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"ProcessInstances"},{"childObjectApiName":"ProcessInstanceHistory","fieldName":"TargetObjectId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"ProcessSteps"},{"childObjectApiName":"TopicAssignment","fieldName":"EntityId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"TopicAssignments"}],"createable":true,"custom":true,"defaultRecordTypeId":null,"deleteable":true,"eTag":"b3618660775deda03c4751b166dde673","feedEnabled":false,"fields":{"Attack_Prep__c":{"apiName":"Attack_Prep__c","calculated":true,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":true,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Attack Prep","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"Auto_Number__c":{"apiName":"Auto_Number__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":true,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":"Auto Number Help Text","label":"Auto Number","length":30,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"Birthday__c":{"apiName":"Birthday__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":true,"dataType":"Date","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":"??","label":"Birthday","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Cell_Number__c":{"apiName":"Cell_Number__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":true,"dataType":"Phone","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Cell Number","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"City__c":{"apiName":"City__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":"States_Provinces__c","createable":true,"custom":true,"dataType":"Picklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"City","length":255,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Converted_Website__c":{"apiName":"Converted_Website__c","calculated":true,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":true,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":true,"inlineHelpText":null,"label":"Converted Website","length":1300,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"Country__c":{"apiName":"Country__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":true,"dataType":"Picklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Country","length":255,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"CreatedById":{"apiName":"CreatedById","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Created By ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,"referenceToInfos":[{"apiName":"User","nameFields":["Name"]}],"relationshipName":"CreatedBy","required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"CreatedDate":{"apiName":"CreatedDate","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Created Date","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"Description__c":{"apiName":"Description__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":true,"dataType":"TextArea","extraTypeInfo":"PlainTextArea","filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":"Describe the bad guy","label":"Description","length":255,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Email_Address__c":{"apiName":"Email_Address__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":true,"dataType":"Email","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":"How can we reach him via email?","label":"Email Address","length":80,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Has_Weakness__c":{"apiName":"Has_Weakness__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":true,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Has Weakness","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Has_Website__c":{"apiName":"Has_Website__c","calculated":true,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":true,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Has Website","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"Hideout_Location__Latitude__s":{"apiName":"Hideout_Location__Latitude__s","calculated":false,"compound":false,"compoundComponentName":"Latitude","compoundFieldName":"Hideout_Location__c","controllerName":null,"createable":true,"custom":true,"dataType":"Double","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Hideout Location (Latitude)","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":5,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":2,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Hideout_Location__Longitude__s":{"apiName":"Hideout_Location__Longitude__s","calculated":false,"compound":false,"compoundComponentName":"Longitude","compoundFieldName":"Hideout_Location__c","controllerName":null,"createable":true,"custom":true,"dataType":"Double","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Hideout Location (Longitude)","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":5,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":2,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Hideout_Location__c":{"apiName":"Hideout_Location__c","calculated":false,"compound":true,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":true,"dataType":"Location","extraTypeInfo":null,"filterable":false,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Hideout Location","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":false},"Id":{"apiName":"Id","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Record ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"IsDeleted":{"apiName":"IsDeleted","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Deleted","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"LastModifiedById":{"apiName":"LastModifiedById","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Last Modified By ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,"referenceToInfos":[{"apiName":"User","nameFields":["Name"]}],"relationshipName":"LastModifiedBy","required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"LastModifiedDate":{"apiName":"LastModifiedDate","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Last Modified Date","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"LastReferencedDate":{"apiName":"LastReferencedDate","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Last Referenced Date","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"LastViewedDate":{"apiName":"LastViewedDate","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Last Viewed Date","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"Minions__c":{"apiName":"Minions__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":true,"dataType":"Double","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Minions","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":18,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"MultiCity__c":{"apiName":"MultiCity__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":"Country__c","createable":true,"custom":true,"dataType":"MultiPicklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"MultiCity","length":4099,"nameField":false,"polymorphicForeignKey":false,"precision":4,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"Name":{"apiName":"Name","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Bad Guy Name","length":80,"nameField":true,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Net_Worth__c":{"apiName":"Net_Worth__c","calculated":true,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":true,"dataType":"Currency","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Net Worth","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":18,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":2,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"Next_Attack__c":{"apiName":"Next_Attack__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":true,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Next Attack","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Nickname__c":{"apiName":"Nickname__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":true,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":"How should we address this bad guy?","label":"Nickname","length":64,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"OwnerId":{"apiName":"OwnerId","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Owner ID","length":18,"nameField":false,"polymorphicForeignKey":true,"precision":0,"reference":true,"referenceTargetField":null,"referenceToInfos":[{"apiName":"Group","nameFields":["Name"]},{"apiName":"User","nameFields":["Name"]}],"relationshipName":"Owner","required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Power_Level_Remaining__c":{"apiName":"Power_Level_Remaining__c","calculated":true,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":true,"dataType":"Percent","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Power Level Remaining","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":18,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":2,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"Power_level__c":{"apiName":"Power_level__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":true,"dataType":"Percent","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Power level","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":18,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Rich_Text_Field__c":{"apiName":"Rich_Text_Field__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":true,"dataType":"TextArea","extraTypeInfo":"RichTextArea","filterable":false,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":true,"inlineHelpText":"I couldn&#39;t think of a creative name for this","label":"Rich Text Field","length":32768,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"Salary_Per_Year__c":{"apiName":"Salary_Per_Year__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":true,"dataType":"Currency","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":"How much does this guy get paid?","label":"Salary Per Year","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":18,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Secret_Code__c":{"apiName":"Secret_Code__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":true,"dataType":"EncryptedString","extraTypeInfo":null,"filterable":false,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Secret Code","length":16,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"States_Provinces__c":{"apiName":"States_Provinces__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":"Country__c","createable":true,"custom":true,"dataType":"Picklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"States/Provinces","length":255,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"SystemModstamp":{"apiName":"SystemModstamp","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"System Modstamp","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"Territories_Covered__c":{"apiName":"Territories_Covered__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":true,"dataType":"MultiPicklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Territories Covered","length":4099,"nameField":false,"polymorphicForeignKey":false,"precision":3,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"Wakeup_time__c":{"apiName":"Wakeup_time__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":true,"dataType":"Time","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Wakeup time","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Weakness__c":{"apiName":"Weakness__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":"Has_Weakness__c","createable":true,"custom":true,"dataType":"Picklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Weakness","length":255,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Weapon__c":{"apiName":"Weapon__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":true,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Weapon","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,"referenceToInfos":[{"apiName":"Weapon__c","nameFields":["Name"]}],"relationshipName":"Weapon__r","required":false,"scale":0,"searchPrefilterable":true,"sortable":true,"unique":false,"updateable":true},"Website__c":{"apiName":"Website__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":true,"dataType":"Url","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":"A bad guy&#39;s gotta have a homepage too","label":"Website","length":255,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"age__c":{"apiName":"age__c","calculated":true,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":true,"dataType":"Double","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"age","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":18,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false}},"keyPrefix":"a00","label":"Bad Guy","labelPlural":"Bad Guys","layoutable":true,"mruEnabled":true,"nameFields":["Name"],"queryable":true,"recordTypeInfos":{"012000000000000AAA":{"available":true,"defaultRecordTypeMapping":true,"master":true,"name":"Master","recordTypeId":"012000000000000AAA"}},"searchable":true,"themeInfo":{"color":"e1d951","iconUrl":"https://mobile1.t.salesforce.com/img/icon/t4v35/custom/custom4_120.png"},"updateable":true},"Group":{"apiName":"Group","childRelationships":[{"childObjectApiName":"GroupMember","fieldName":"GroupId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"GroupMembers"},{"childObjectApiName":"QueueSobject","fieldName":"QueueId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"QueueSobjects"},{"childObjectApiName":"User","fieldName":"DelegatedApproverId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"DelegatedUsers"}],"createable":true,"custom":false,"defaultRecordTypeId":null,"deleteable":true,"eTag":"f7c32b4a89a061c1295d94345fe728ca","feedEnabled":false,"fields":{"CreatedById":{"apiName":"CreatedById","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Created By ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,"referenceToInfos":[{"apiName":"User","nameFields":["Name"]}],"relationshipName":"CreatedBy","required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"CreatedDate":{"apiName":"CreatedDate","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Created Date","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"DeveloperName":{"apiName":"DeveloperName","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Developer Name","length":80,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"DoesIncludeBosses":{"apiName":"DoesIncludeBosses","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Include Bosses","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"DoesSendEmailToMembers":{"apiName":"DoesSendEmailToMembers","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Send Email to Members","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Email":{"apiName":"Email","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Email","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Email","length":255,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Id":{"apiName":"Id","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Group ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"LastModifiedById":{"apiName":"LastModifiedById","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Last Modified By ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,"referenceToInfos":[{"apiName":"User","nameFields":["Name"]}],"relationshipName":"LastModifiedBy","required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"LastModifiedDate":{"apiName":"LastModifiedDate","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Last Modified Date","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"Name":{"apiName":"Name","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Name","length":40,"nameField":true,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"OwnerId":{"apiName":"OwnerId","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Owner ID","length":18,"nameField":false,"polymorphicForeignKey":true,"precision":0,"reference":true,"referenceTargetField":null,"referenceToInfos":[{"apiName":"Organization","nameFields":["Name"]},{"apiName":"User","nameFields":["Name"]}],"relationshipName":"Owner","required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"RelatedId":{"apiName":"RelatedId","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Related ID","length":18,"nameField":false,"polymorphicForeignKey":true,"precision":0,"reference":true,"referenceTargetField":null,"referenceToInfos":[{"apiName":"Portal","nameFields":["Name"]},{"apiName":"User","nameFields":["Name"]},{"apiName":"UserRole","nameFields":["Name"]}],"relationshipName":"Related","required":false,"scale":0,"searchPrefilterable":true,"sortable":true,"unique":false,"updateable":false},"SystemModstamp":{"apiName":"SystemModstamp","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"System Modstamp","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"Type":{"apiName":"Type","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Picklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Type","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false}},"keyPrefix":"00G","label":"Group","labelPlural":"Group","layoutable":false,"mruEnabled":false,"nameFields":["Name"],"queryable":true,"recordTypeInfos":{},"searchable":true,"themeInfo":{"color":"769ED9","iconUrl":"https://mobile1.t.salesforce.com/img/icon/t4v35/standard/orders_120.png"},"updateable":true},"Name":{"apiName":"Name","childRelationships":[],"createable":false,"custom":false,"defaultRecordTypeId":null,"deleteable":false,"eTag":"29b41f95a5db5e36a564502a1b970ba6","feedEnabled":false,"fields":{"Alias":{"apiName":"Alias","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Alias","length":8,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"CommunityNickname":{"apiName":"CommunityNickname","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Nickname","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"Email":{"apiName":"Email","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Email","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Email","length":80,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"FirstName":{"apiName":"FirstName","calculated":false,"compound":false,"compoundComponentName":"FirstName","compoundFieldName":"Name","controllerName":null,"createable":false,"custom":false,"dataType":"String","extraTypeInfo":"SwitchablePersonName","filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"First Name","length":40,"nameField":true,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"Id":{"apiName":"Id","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"IsActive":{"apiName":"IsActive","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Active","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"LastName":{"apiName":"LastName","calculated":false,"compound":false,"compoundComponentName":"LastName","compoundFieldName":"Name","controllerName":null,"createable":false,"custom":false,"dataType":"String","extraTypeInfo":"SwitchablePersonName","filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Last Name","length":80,"nameField":true,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"LastReferencedDate":{"apiName":"LastReferencedDate","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Last Referenced Date","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"LastViewedDate":{"apiName":"LastViewedDate","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Last Viewed Date","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"Name":{"apiName":"Name","calculated":false,"compound":true,"compoundComponentName":null,"compoundFieldName":"Name","controllerName":null,"createable":false,"custom":false,"dataType":"String","extraTypeInfo":"SwitchablePersonName","filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Name","length":255,"nameField":true,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"NameOrAlias":{"apiName":"NameOrAlias","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Name or Alias","length":80,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"Phone":{"apiName":"Phone","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Phone","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Phone","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"ProfileId":{"apiName":"ProfileId","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Profile ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,"referenceToInfos":[{"apiName":"Profile","nameFields":["FirstName","LastName","Name"]}],"relationshipName":"Profile","required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"RecordTypeId":{"apiName":"RecordTypeId","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Record Type ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,"referenceToInfos":[{"apiName":"RecordType","nameFields":["FirstName","LastName","Name"]}],"relationshipName":"RecordType","required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"Title":{"apiName":"Title","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Title","length":80,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"Type":{"apiName":"Type","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Picklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Type","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"UserRoleId":{"apiName":"UserRoleId","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Role ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,"referenceToInfos":[{"apiName":"UserRole","nameFields":["FirstName","LastName","Name"]}],"relationshipName":"UserRole","required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"Username":{"apiName":"Username","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Username","length":80,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false}},"keyPrefix":null,"label":"Name","labelPlural":"Names","layoutable":false,"mruEnabled":false,"nameFields":["FirstName","LastName","Name"],"queryable":false,"recordTypeInfos":{},"searchable":false,"themeInfo":null,"updateable":false},"User":{"apiName":"User","childRelationships":[{"childObjectApiName":"AcceptedEventRelation","fieldName":"RelationId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"AcceptedEventRelations"},{"childObjectApiName":"AnalyticNotification","fieldName":"RunAsId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"AnalyticNotificationRunAsUsers"},{"childObjectApiName":"AttachedContentDocument","fieldName":"LinkedEntityId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"AttachedContentDocuments"},{"childObjectApiName":"CollaborationGroupMember","fieldName":"MemberId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"GroupMemberships"},{"childObjectApiName":"CollaborationGroupMemberRequest","fieldName":"RequesterId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"GroupMembershipRequests"},{"childObjectApiName":"CombinedAttachment","fieldName":"ParentId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"CombinedAttachments"},{"childObjectApiName":"ContentDocumentLink","fieldName":"LinkedEntityId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"ContentDocumentLinks"},{"childObjectApiName":"Contract","fieldName":"CompanySignedId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"ContractsSigned"},{"childObjectApiName":"DeclinedEventRelation","fieldName":"RelationId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"DeclinedEventRelations"},{"childObjectApiName":"EmailMessageRelation","fieldName":"RelationId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"EmailMessageRelations"},{"childObjectApiName":"EntitySubscription","fieldName":"ParentId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"FeedSubscriptionsForEntity"},{"childObjectApiName":"EntitySubscription","fieldName":"SubscriberId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"FeedSubscriptions"},{"childObjectApiName":"EventRelation","fieldName":"RelationId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"EventRelations"},{"childObjectApiName":"ExternalDataUserAuth","fieldName":"UserId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"ExternalDataUserAuths"},{"childObjectApiName":"InstalledMobileApp","fieldName":"UserId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"InstalledMobileApps"},{"childObjectApiName":"OutgoingEmailRelation","fieldName":"RelationId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"OutgoingEmailRelations"},{"childObjectApiName":"OwnedContentDocument","fieldName":"OwnerId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"OwnedContentDocuments"},{"childObjectApiName":"PermissionSetAssignment","fieldName":"AssigneeId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"PermissionSetAssignments"},{"childObjectApiName":"PermissionSetLicenseAssign","fieldName":"AssigneeId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"PermissionSetLicenseAssignments"},{"childObjectApiName":"Photo","fieldName":"ParentId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Photos"},{"childObjectApiName":"ProfileSkillEndorsement","fieldName":"UserId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"UserProfileSkillUserEndorsements"},{"childObjectApiName":"ProfileSkillUser","fieldName":"UserId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"UserProfileSkillChildren"},{"childObjectApiName":"SessionPermSetActivation","fieldName":"UserId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"SessionPermSetActivations"},{"childObjectApiName":"Site","fieldName":"AdminId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"UserSites"},{"childObjectApiName":"UndecidedEventRelation","fieldName":"RelationId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"UndecidedEventRelations"},{"childObjectApiName":"User","fieldName":"DelegatedApproverId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"DelegatedUsers"},{"childObjectApiName":"User","fieldName":"ManagerId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"ManagedUsers"},{"childObjectApiName":"UserEntityAccess","fieldName":"UserId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"UserEntityAccessRights"},{"childObjectApiName":"UserFeed","fieldName":"ParentId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Feeds"},{"childObjectApiName":"UserFieldAccess","fieldName":"UserId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"UserFieldAccessRights"},{"childObjectApiName":"UserPreference","fieldName":"UserId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"UserPreferences"},{"childObjectApiName":"UserShare","fieldName":"UserId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Shares"},{"childObjectApiName":"WorkBadge","fieldName":"RecipientId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Badges"},{"childObjectApiName":"WorkThanks","fieldName":"GiverId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"GivenThanks"}],"createable":true,"custom":false,"defaultRecordTypeId":null,"deleteable":false,"eTag":"b081c54f1e78f9a1cdfc40e1933a153f","feedEnabled":true,"fields":{"AboutMe":{"apiName":"AboutMe","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"TextArea","extraTypeInfo":"PlainTextArea","filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"About Me","length":1000,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"AccountId":{"apiName":"AccountId","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Account ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,"referenceToInfos":[{"apiName":"Account","nameFields":["FirstName","LastName","Name"]}],"relationshipName":"Account","required":false,"scale":0,"searchPrefilterable":true,"sortable":true,"unique":false,"updateable":false},"Address":{"apiName":"Address","calculated":false,"compound":true,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Address","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Address","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":false},"Alias":{"apiName":"Alias","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Alias","length":8,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"BadgeText":{"apiName":"BadgeText","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"User Photo badge text overlay","length":80,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"BannerPhotoId":{"apiName":"BannerPhotoId","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Photo ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,"referenceToInfos":[{"apiName":"Photo","nameFields":["FirstName","LastName","Name"]}],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"BannerPhotoUrl":{"apiName":"BannerPhotoUrl","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Url","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Url for banner photo","length":1024,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"CallCenterId":{"apiName":"CallCenterId","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Call Center ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,"referenceToInfos":[{"apiName":"CallCenter","nameFields":["FirstName","LastName","Name"]}],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"City":{"apiName":"City","calculated":false,"compound":false,"compoundComponentName":"City","compoundFieldName":"Address","controllerName":null,"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"City","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"CommunityNickname":{"apiName":"CommunityNickname","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Nickname","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"CompanyName":{"apiName":"CompanyName","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Company Name","length":80,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"ContactId":{"apiName":"ContactId","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Contact ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,"referenceToInfos":[{"apiName":"Contact","nameFields":["FirstName","LastName","Name"]}],"relationshipName":"Contact","required":false,"scale":0,"searchPrefilterable":true,"sortable":true,"unique":false,"updateable":false},"Country":{"apiName":"Country","calculated":false,"compound":false,"compoundComponentName":"Country","compoundFieldName":"Address","controllerName":null,"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Country","length":80,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"CreatedById":{"apiName":"CreatedById","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Created By ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,"referenceToInfos":[{"apiName":"User","nameFields":["FirstName","LastName","Name"]}],"relationshipName":"CreatedBy","required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"CreatedDate":{"apiName":"CreatedDate","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Created Date","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"DefaultGroupNotificationFrequency":{"apiName":"DefaultGroupNotificationFrequency","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Picklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Default Notification Frequency when Joining Groups","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"DelegatedApproverId":{"apiName":"DelegatedApproverId","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Delegated Approver ID","length":18,"nameField":false,"polymorphicForeignKey":true,"precision":0,"reference":true,"referenceTargetField":null,"referenceToInfos":[{"apiName":"Group","nameFields":["FirstName","LastName","Name"]},{"apiName":"User","nameFields":["FirstName","LastName","Name"]}],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Department":{"apiName":"Department","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Department","length":80,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"DigestFrequency":{"apiName":"DigestFrequency","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Picklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Chatter Email Highlights Frequency","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Division":{"apiName":"Division","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Division","length":80,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Email":{"apiName":"Email","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Email","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Email","length":128,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"EmailEncodingKey":{"apiName":"EmailEncodingKey","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Picklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Email Encoding","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"EmailPreferencesAutoBcc":{"apiName":"EmailPreferencesAutoBcc","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"AutoBcc","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"EmailPreferencesAutoBccStayInTouch":{"apiName":"EmailPreferencesAutoBccStayInTouch","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"AutoBccStayInTouch","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"EmailPreferencesStayInTouchReminder":{"apiName":"EmailPreferencesStayInTouchReminder","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"StayInTouchReminder","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"EmployeeNumber":{"apiName":"EmployeeNumber","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Employee Number","length":20,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Extension":{"apiName":"Extension","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Phone","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Extension","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Fax":{"apiName":"Fax","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Phone","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Fax","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"FederationIdentifier":{"apiName":"FederationIdentifier","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"SAML Federation ID","length":512,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"FirstName":{"apiName":"FirstName","calculated":false,"compound":false,"compoundComponentName":"FirstName","compoundFieldName":"Name","controllerName":null,"createable":true,"custom":false,"dataType":"String","extraTypeInfo":"PersonName","filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"First Name","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"ForecastEnabled":{"apiName":"ForecastEnabled","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Allow Forecasting","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"FullPhotoUrl":{"apiName":"FullPhotoUrl","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Url","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Url for full-sized Photo","length":1024,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"GeocodeAccuracy":{"apiName":"GeocodeAccuracy","calculated":false,"compound":false,"compoundComponentName":"GeocodeAccuracy","compoundFieldName":"Address","controllerName":null,"createable":true,"custom":false,"dataType":"Picklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Geocode Accuracy","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Id":{"apiName":"Id","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"User ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"IsActive":{"apiName":"IsActive","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Active","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"IsExtIndicatorVisible":{"apiName":"IsExtIndicatorVisible","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Show external indicator","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"IsProfilePhotoActive":{"apiName":"IsProfilePhotoActive","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Has Profile Photo","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"LanguageLocaleKey":{"apiName":"LanguageLocaleKey","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Picklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Language","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"LastLoginDate":{"apiName":"LastLoginDate","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Last Login","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"LastModifiedById":{"apiName":"LastModifiedById","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Last Modified By ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,"referenceToInfos":[{"apiName":"User","nameFields":["FirstName","LastName","Name"]}],"relationshipName":"LastModifiedBy","required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"LastModifiedDate":{"apiName":"LastModifiedDate","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Last Modified Date","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"LastName":{"apiName":"LastName","calculated":false,"compound":false,"compoundComponentName":"LastName","compoundFieldName":"Name","controllerName":null,"createable":true,"custom":false,"dataType":"String","extraTypeInfo":"PersonName","filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Last Name","length":80,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"LastPasswordChangeDate":{"apiName":"LastPasswordChangeDate","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Last Password Change or Reset","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"LastReferencedDate":{"apiName":"LastReferencedDate","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Last Referenced Date","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"LastViewedDate":{"apiName":"LastViewedDate","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Last Viewed Date","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"Latitude":{"apiName":"Latitude","calculated":false,"compound":false,"compoundComponentName":"Latitude","compoundFieldName":"Address","controllerName":null,"createable":true,"custom":false,"dataType":"Double","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Latitude","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":18,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":15,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"LocaleSidKey":{"apiName":"LocaleSidKey","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Picklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Locale","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Longitude":{"apiName":"Longitude","calculated":false,"compound":false,"compoundComponentName":"Longitude","compoundFieldName":"Address","controllerName":null,"createable":true,"custom":false,"dataType":"Double","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Longitude","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":18,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":15,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"ManagerId":{"apiName":"ManagerId","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Manager ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,"referenceToInfos":[{"apiName":"User","nameFields":["FirstName","LastName","Name"]}],"relationshipName":"Manager","required":false,"scale":0,"searchPrefilterable":true,"sortable":true,"unique":false,"updateable":true},"MediumBannerPhotoUrl":{"apiName":"MediumBannerPhotoUrl","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Url","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Url for Android banner photo","length":1024,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"MediumPhotoUrl":{"apiName":"MediumPhotoUrl","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Url","extraTypeInfo":"ImageUrl","filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Url for medium profile photo","length":1024,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"MobilePhone":{"apiName":"MobilePhone","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Phone","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Cell","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Name":{"apiName":"Name","calculated":false,"compound":true,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"String","extraTypeInfo":"PersonName","filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Full Name","length":121,"nameField":true,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"OfflinePdaTrialExpirationDate":{"apiName":"OfflinePdaTrialExpirationDate","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Sales Anywhere Trial Expiration Date","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"OfflineTrialExpirationDate":{"apiName":"OfflineTrialExpirationDate","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Offline Edition Trial Expiration Date","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"OutOfOfficeMessage":{"apiName":"OutOfOfficeMessage","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Out of office message","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"Phone":{"apiName":"Phone","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Phone","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Phone","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"PostalCode":{"apiName":"PostalCode","calculated":false,"compound":false,"compoundComponentName":"PostalCode","compoundFieldName":"Address","controllerName":null,"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Zip/Postal Code","length":20,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"ProfileId":{"apiName":"ProfileId","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Profile ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,"referenceToInfos":[{"apiName":"Profile","nameFields":["FirstName","LastName","Name"]}],"relationshipName":"Profile","required":true,"scale":0,"searchPrefilterable":true,"sortable":true,"unique":false,"updateable":true},"ProfilePhotoId":{"apiName":"ProfilePhotoId","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Photo ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,"referenceToInfos":[{"apiName":"Photo","nameFields":["FirstName","LastName","Name"]}],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"ReceivesAdminInfoEmails":{"apiName":"ReceivesAdminInfoEmails","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Admin Info Emails","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"ReceivesInfoEmails":{"apiName":"ReceivesInfoEmails","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Info Emails","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"SenderEmail":{"apiName":"SenderEmail","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Email","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Email Sender Address","length":80,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"SenderName":{"apiName":"SenderName","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Email Sender Name","length":80,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Signature":{"apiName":"Signature","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"TextArea","extraTypeInfo":"PlainTextArea","filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Email Signature","length":1333,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"SmallBannerPhotoUrl":{"apiName":"SmallBannerPhotoUrl","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Url","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Url for IOS banner photo","length":1024,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"SmallPhotoUrl":{"apiName":"SmallPhotoUrl","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Url","extraTypeInfo":"ImageUrl","filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Photo","length":1024,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"State":{"apiName":"State","calculated":false,"compound":false,"compoundComponentName":"State","compoundFieldName":"Address","controllerName":null,"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"State/Province","length":80,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"StayInTouchNote":{"apiName":"StayInTouchNote","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Stay-in-Touch Email Note","length":512,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"StayInTouchSignature":{"apiName":"StayInTouchSignature","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"TextArea","extraTypeInfo":"PlainTextArea","filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Stay-in-Touch Email Signature","length":512,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"StayInTouchSubject":{"apiName":"StayInTouchSubject","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Stay-in-Touch Email Subject","length":80,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Street":{"apiName":"Street","calculated":false,"compound":false,"compoundComponentName":"Street","compoundFieldName":"Address","controllerName":null,"createable":true,"custom":false,"dataType":"TextArea","extraTypeInfo":"PlainTextArea","filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Street","length":255,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"SystemModstamp":{"apiName":"SystemModstamp","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"System Modstamp","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"TimeZoneSidKey":{"apiName":"TimeZoneSidKey","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Picklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Time Zone","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Title":{"apiName":"Title","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Title","length":80,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"UserPermissionsAvantgoUser":{"apiName":"UserPermissionsAvantgoUser","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"AvantGo User","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPermissionsCallCenterAutoLogin":{"apiName":"UserPermissionsCallCenterAutoLogin","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Auto-login To Call Center","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPermissionsInteractionUser":{"apiName":"UserPermissionsInteractionUser","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Force.com Flow User","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPermissionsMarketingUser":{"apiName":"UserPermissionsMarketingUser","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Marketing User","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPermissionsMobileUser":{"apiName":"UserPermissionsMobileUser","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Apex Mobile User","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPermissionsOfflineUser":{"apiName":"UserPermissionsOfflineUser","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Offline User","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPermissionsSFContentUser":{"apiName":"UserPermissionsSFContentUser","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Salesforce CRM Content User","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesActivityRemindersPopup":{"apiName":"UserPreferencesActivityRemindersPopup","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ActivityRemindersPopup","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesApexPagesDeveloperMode":{"apiName":"UserPreferencesApexPagesDeveloperMode","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ApexPagesDeveloperMode","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesCacheDiagnostics":{"apiName":"UserPreferencesCacheDiagnostics","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"CacheDiagnostics","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesContentEmailAsAndWhen":{"apiName":"UserPreferencesContentEmailAsAndWhen","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ContentEmailAsAndWhen","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesContentNoEmail":{"apiName":"UserPreferencesContentNoEmail","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ContentNoEmail","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesCreateLEXAppsWTShown":{"apiName":"UserPreferencesCreateLEXAppsWTShown","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"CreateLEXAppsWTShown","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesDisCommentAfterLikeEmail":{"apiName":"UserPreferencesDisCommentAfterLikeEmail","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"DisCommentAfterLikeEmail","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesDisMentionsCommentEmail":{"apiName":"UserPreferencesDisMentionsCommentEmail","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"DisMentionsCommentEmail","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesDisProfPostCommentEmail":{"apiName":"UserPreferencesDisProfPostCommentEmail","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"DisProfPostCommentEmail","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesDisableAllFeedsEmail":{"apiName":"UserPreferencesDisableAllFeedsEmail","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"DisableAllFeedsEmail","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesDisableBookmarkEmail":{"apiName":"UserPreferencesDisableBookmarkEmail","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"DisableBookmarkEmail","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesDisableChangeCommentEmail":{"apiName":"UserPreferencesDisableChangeCommentEmail","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"DisableChangeCommentEmail","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesDisableEndorsementEmail":{"apiName":"UserPreferencesDisableEndorsementEmail","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"DisableEndorsementEmail","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesDisableFileShareNotificationsForApi":{"apiName":"UserPreferencesDisableFileShareNotificationsForApi","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"DisableFileShareNotificationsForApi","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesDisableFollowersEmail":{"apiName":"UserPreferencesDisableFollowersEmail","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"DisableFollowersEmail","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesDisableLaterCommentEmail":{"apiName":"UserPreferencesDisableLaterCommentEmail","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"DisableLaterCommentEmail","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesDisableLikeEmail":{"apiName":"UserPreferencesDisableLikeEmail","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"DisableLikeEmail","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesDisableMentionsPostEmail":{"apiName":"UserPreferencesDisableMentionsPostEmail","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"DisableMentionsPostEmail","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesDisableMessageEmail":{"apiName":"UserPreferencesDisableMessageEmail","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"DisableMessageEmail","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesDisableProfilePostEmail":{"apiName":"UserPreferencesDisableProfilePostEmail","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"DisableProfilePostEmail","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesDisableSharePostEmail":{"apiName":"UserPreferencesDisableSharePostEmail","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"DisableSharePostEmail","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesEnableAutoSubForFeeds":{"apiName":"UserPreferencesEnableAutoSubForFeeds","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"EnableAutoSubForFeeds","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesEventRemindersCheckboxDefault":{"apiName":"UserPreferencesEventRemindersCheckboxDefault","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"EventRemindersCheckboxDefault","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesExcludeMailAppAttachments":{"apiName":"UserPreferencesExcludeMailAppAttachments","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ExcludeMailAppAttachments","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesFavoritesShowTopFavorites":{"apiName":"UserPreferencesFavoritesShowTopFavorites","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"FavoritesShowTopFavorites","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesFavoritesWTShown":{"apiName":"UserPreferencesFavoritesWTShown","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"FavoritesWTShown","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesGlobalNavBarWTShown":{"apiName":"UserPreferencesGlobalNavBarWTShown","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"GlobalNavBarWTShown","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesGlobalNavGridMenuWTShown":{"apiName":"UserPreferencesGlobalNavGridMenuWTShown","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"GlobalNavGridMenuWTShown","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesHideBiggerPhotoCallout":{"apiName":"UserPreferencesHideBiggerPhotoCallout","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"HideBiggerPhotoCallout","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesHideCSNDesktopTask":{"apiName":"UserPreferencesHideCSNDesktopTask","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"HideCSNDesktopTask","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesHideCSNGetChatterMobileTask":{"apiName":"UserPreferencesHideCSNGetChatterMobileTask","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"HideCSNGetChatterMobileTask","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesHideChatterOnboardingSplash":{"apiName":"UserPreferencesHideChatterOnboardingSplash","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"HideChatterOnboardingSplash","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesHideEndUserOnboardingAssistantModal":{"apiName":"UserPreferencesHideEndUserOnboardingAssistantModal","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"HideEndUserOnboardingAssistantModal","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesHideEventCalendar":{"apiName":"UserPreferencesHideEventCalendar","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"HideEventCalendar","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesHideLearningPathModal":{"apiName":"UserPreferencesHideLearningPathModal","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"HideLearningPathModal","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesHideLightningMigrationModal":{"apiName":"UserPreferencesHideLightningMigrationModal","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"HideLightningMigrationModal","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesHideS1BrowserUI":{"apiName":"UserPreferencesHideS1BrowserUI","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"HideS1BrowserUI","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesHideSecondChatterOnboardingSplash":{"apiName":"UserPreferencesHideSecondChatterOnboardingSplash","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"HideSecondChatterOnboardingSplash","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesHideSfxWelcomeMat":{"apiName":"UserPreferencesHideSfxWelcomeMat","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"HideSfxWelcomeMat","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesHideTrialsSplash":{"apiName":"UserPreferencesHideTrialsSplash","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"HideTrialsSplash","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesHideTrialsWelcomeMat":{"apiName":"UserPreferencesHideTrialsWelcomeMat","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"HideTrialsWelcomeMat","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesLightningExperiencePreferred":{"apiName":"UserPreferencesLightningExperiencePreferred","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"LightningExperiencePreferred","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesPathAssistantCollapsed":{"apiName":"UserPreferencesPathAssistantCollapsed","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"PathAssistantCollapsed","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesPreviewLightning":{"apiName":"UserPreferencesPreviewLightning","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"PreviewLightning","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesRecordHomeReservedWTShown":{"apiName":"UserPreferencesRecordHomeReservedWTShown","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"RecordHomeReservedWTShown","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesRecordHomeSectionCollapseWTShown":{"apiName":"UserPreferencesRecordHomeSectionCollapseWTShown","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"RecordHomeSectionCollapseWTShown","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesReminderSoundOff":{"apiName":"UserPreferencesReminderSoundOff","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ReminderSoundOff","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesSetupAssistantUserPref1":{"apiName":"UserPreferencesSetupAssistantUserPref1","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"SetupAssistantUserPref1","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesShowCityToExternalUsers":{"apiName":"UserPreferencesShowCityToExternalUsers","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ShowCityToExternalUsers","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesShowCityToGuestUsers":{"apiName":"UserPreferencesShowCityToGuestUsers","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ShowCityToGuestUsers","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesShowCountryToExternalUsers":{"apiName":"UserPreferencesShowCountryToExternalUsers","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ShowCountryToExternalUsers","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesShowCountryToGuestUsers":{"apiName":"UserPreferencesShowCountryToGuestUsers","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ShowCountryToGuestUsers","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesShowEmailToExternalUsers":{"apiName":"UserPreferencesShowEmailToExternalUsers","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ShowEmailToExternalUsers","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesShowEmailToGuestUsers":{"apiName":"UserPreferencesShowEmailToGuestUsers","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ShowEmailToGuestUsers","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesShowFaxToExternalUsers":{"apiName":"UserPreferencesShowFaxToExternalUsers","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ShowFaxToExternalUsers","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesShowFaxToGuestUsers":{"apiName":"UserPreferencesShowFaxToGuestUsers","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ShowFaxToGuestUsers","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesShowManagerToExternalUsers":{"apiName":"UserPreferencesShowManagerToExternalUsers","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ShowManagerToExternalUsers","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesShowManagerToGuestUsers":{"apiName":"UserPreferencesShowManagerToGuestUsers","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ShowManagerToGuestUsers","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesShowMobilePhoneToExternalUsers":{"apiName":"UserPreferencesShowMobilePhoneToExternalUsers","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ShowMobilePhoneToExternalUsers","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesShowMobilePhoneToGuestUsers":{"apiName":"UserPreferencesShowMobilePhoneToGuestUsers","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ShowMobilePhoneToGuestUsers","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesShowPostalCodeToExternalUsers":{"apiName":"UserPreferencesShowPostalCodeToExternalUsers","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ShowPostalCodeToExternalUsers","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesShowPostalCodeToGuestUsers":{"apiName":"UserPreferencesShowPostalCodeToGuestUsers","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ShowPostalCodeToGuestUsers","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesShowProfilePicToGuestUsers":{"apiName":"UserPreferencesShowProfilePicToGuestUsers","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ShowProfilePicToGuestUsers","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesShowStateToExternalUsers":{"apiName":"UserPreferencesShowStateToExternalUsers","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ShowStateToExternalUsers","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesShowStateToGuestUsers":{"apiName":"UserPreferencesShowStateToGuestUsers","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ShowStateToGuestUsers","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesShowStreetAddressToExternalUsers":{"apiName":"UserPreferencesShowStreetAddressToExternalUsers","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ShowStreetAddressToExternalUsers","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesShowStreetAddressToGuestUsers":{"apiName":"UserPreferencesShowStreetAddressToGuestUsers","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ShowStreetAddressToGuestUsers","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesShowTitleToExternalUsers":{"apiName":"UserPreferencesShowTitleToExternalUsers","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ShowTitleToExternalUsers","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesShowTitleToGuestUsers":{"apiName":"UserPreferencesShowTitleToGuestUsers","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ShowTitleToGuestUsers","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesShowWorkPhoneToExternalUsers":{"apiName":"UserPreferencesShowWorkPhoneToExternalUsers","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ShowWorkPhoneToExternalUsers","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesShowWorkPhoneToGuestUsers":{"apiName":"UserPreferencesShowWorkPhoneToGuestUsers","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"ShowWorkPhoneToGuestUsers","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesSortFeedByComment":{"apiName":"UserPreferencesSortFeedByComment","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"SortFeedByComment","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesTaskRemindersCheckboxDefault":{"apiName":"UserPreferencesTaskRemindersCheckboxDefault","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"TaskRemindersCheckboxDefault","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserPreferencesTodayGettingStarted":{"apiName":"UserPreferencesTodayGettingStarted","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"TodayGettingStarted","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":false,"unique":false,"updateable":true},"UserRoleId":{"apiName":"UserRoleId","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Role ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,"referenceToInfos":[{"apiName":"UserRole","nameFields":["FirstName","LastName","Name"]}],"relationshipName":"UserRole","required":false,"scale":0,"searchPrefilterable":true,"sortable":true,"unique":false,"updateable":true},"UserType":{"apiName":"UserType","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Picklist","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"User Type","length":40,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"Username":{"apiName":"Username","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Username","length":80,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true}},"keyPrefix":"005","label":"User","labelPlural":"People","layoutable":true,"mruEnabled":true,"nameFields":["FirstName","LastName","Name"],"queryable":true,"recordTypeInfos":{},"searchable":true,"themeInfo":{"color":"65CAE4","iconUrl":"https://mobile1.t.salesforce.com/img/icon/t4v35/standard/user_120.png"},"updateable":true},"Weapon__c":{"apiName":"Weapon__c","childRelationships":[{"childObjectApiName":"AttachedContentDocument","fieldName":"LinkedEntityId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"AttachedContentDocuments"},{"childObjectApiName":"Attachment","fieldName":"ParentId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Attachments"},{"childObjectApiName":"Bad_Guy__c","fieldName":"Weapon__c","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Bad_Guys__r"},{"childObjectApiName":"CollaborationGroupRecord","fieldName":"RecordId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"RecordAssociatedGroups"},{"childObjectApiName":"CombinedAttachment","fieldName":"ParentId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"CombinedAttachments"},{"childObjectApiName":"ContentDocumentLink","fieldName":"LinkedEntityId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"ContentDocumentLinks"},{"childObjectApiName":"DuplicateRecordItem","fieldName":"RecordId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"DuplicateRecordItems"},{"childObjectApiName":"EmailMessage","fieldName":"RelatedToId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Emails"},{"childObjectApiName":"EntitySubscription","fieldName":"ParentId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"FeedSubscriptionsForEntity"},{"childObjectApiName":"Note","fieldName":"ParentId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"Notes"},{"childObjectApiName":"NoteAndAttachment","fieldName":"ParentId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"NotesAndAttachments"},{"childObjectApiName":"ProcessInstance","fieldName":"TargetObjectId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"ProcessInstances"},{"childObjectApiName":"ProcessInstanceHistory","fieldName":"TargetObjectId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"ProcessSteps"},{"childObjectApiName":"TopicAssignment","fieldName":"EntityId","junctionIdListNames":[],"junctionReferenceTo":[],"relationshipName":"TopicAssignments"}],"createable":true,"custom":true,"defaultRecordTypeId":null,"deleteable":true,"eTag":"b5aac0ea1081751457f5c240a38815eb","feedEnabled":false,"fields":{"CreatedById":{"apiName":"CreatedById","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Created By ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,"referenceToInfos":[{"apiName":"User","nameFields":["Name"]}],"relationshipName":"CreatedBy","required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"CreatedDate":{"apiName":"CreatedDate","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Created Date","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"Id":{"apiName":"Id","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Record ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"IsDeleted":{"apiName":"IsDeleted","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Deleted","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"LastModifiedById":{"apiName":"LastModifiedById","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Last Modified By ID","length":18,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":true,"referenceTargetField":null,"referenceToInfos":[{"apiName":"User","nameFields":["Name"]}],"relationshipName":"LastModifiedBy","required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"LastModifiedDate":{"apiName":"LastModifiedDate","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Last Modified Date","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"LastReferencedDate":{"apiName":"LastReferencedDate","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Last Referenced Date","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"LastViewedDate":{"apiName":"LastViewedDate","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Last Viewed Date","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false},"Lethal__c":{"apiName":"Lethal__c","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":true,"dataType":"Boolean","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Lethal","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"Name":{"apiName":"Name","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"String","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Weapon Name","length":80,"nameField":true,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":false,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"OwnerId":{"apiName":"OwnerId","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":true,"custom":false,"dataType":"Reference","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"Owner ID","length":18,"nameField":false,"polymorphicForeignKey":true,"precision":0,"reference":true,"referenceTargetField":null,"referenceToInfos":[{"apiName":"Group","nameFields":["Name"]},{"apiName":"User","nameFields":["Name"]}],"relationshipName":"Owner","required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":true},"SystemModstamp":{"apiName":"SystemModstamp","calculated":false,"compound":false,"compoundComponentName":null,"compoundFieldName":null,"controllerName":null,"createable":false,"custom":false,"dataType":"DateTime","extraTypeInfo":null,"filterable":true,"filteredLookupInfo":null,"highScaleNumber":false,"htmlFormatted":false,"inlineHelpText":null,"label":"System Modstamp","length":0,"nameField":false,"polymorphicForeignKey":false,"precision":0,"reference":false,"referenceTargetField":null,"referenceToInfos":[],"relationshipName":null,"required":true,"scale":0,"searchPrefilterable":false,"sortable":true,"unique":false,"updateable":false}},"keyPrefix":"a01","label":"Weapon","labelPlural":"Weapons","layoutable":true,"mruEnabled":true,"nameFields":["Name"],"queryable":true,"recordTypeInfos":{"012000000000000AAA":{"available":true,"defaultRecordTypeMapping":true,"master":true,"name":"Master","recordTypeId":"012000000000000AAA"}},"searchable":true,"themeInfo":{"color":"bf7b66","iconUrl":"https://mobile1.t.salesforce.com/img/icon/t4v35/custom/custom91_120.png"},"updateable":true}};
const records = {"a00R0000000jq5eIAA":{"apiName":"Bad_Guy__c","childRelationships":{},"eTag":"0e5119a8fc96a4a3827b00ea102c7e7b","fields":{"Attack_Prep__c":{"displayValue":"8/29/2017 2:11 PM","value":"2017-08-29T21:11:00.000Z"},"Auto_Number__c":{"displayValue":null,"value":"A-17/31-0002"},"Birthday__c":{"displayValue":"2/2/1902","value":"1902-02-02"},"Cell_Number__c":{"displayValue":null,"value":"(222) 222-2222"},"City__c":{"displayValue":null,"value":null},"Converted_Website__c":{"displayValue":null,"value":"&lt;a href=&quot;www.google.com&quot; target=&quot;_blank&quot;&gt;Tips &amp; Tricks&lt;/a&gt;"},"Country__c":{"displayValue":null,"value":null},"CreatedBy":{"displayValue":"Test User","value":{"apiName":"User","childRelationships":{},"eTag":"bf306bc78b47c4cd9afd4b7bf36df6e4","fields":{"Id":{"displayValue":null,"value":"005R0000000F9tkIAC"},"Name":{"displayValue":null,"value":"Test User"}},"id":"005R0000000F9tkIAC","recordTypeInfo":null}},"CreatedById":{"displayValue":null,"value":"005R0000000F9tkIAC"},"CreatedDate":{"displayValue":"8/31/2017 2:13 PM","value":"2017-08-31T21:13:07.000Z"},"Description__c":{"displayValue":null,"value":"Green and evil"},"Email_Address__c":{"displayValue":null,"value":"witch@oz.org"},"Has_Weakness__c":{"displayValue":null,"value":true},"Has_Website__c":{"displayValue":null,"value":true},"Hideout_Location__Latitude__s":{"displayValue":null,"value":51},"Hideout_Location__Longitude__s":{"displayValue":null,"value":0},"LastModifiedBy":{"displayValue":"Test User","value":{"apiName":"User","childRelationships":{},"eTag":"bf306bc78b47c4cd9afd4b7bf36df6e4","fields":{"Id":{"displayValue":null,"value":"005R0000000F9tkIAC"},"Name":{"displayValue":null,"value":"Test User"}},"id":"005R0000000F9tkIAC","recordTypeInfo":null}},"LastModifiedById":{"displayValue":null,"value":"005R0000000F9tkIAC"},"LastModifiedDate":{"displayValue":"8/31/2017 2:13 PM","value":"2017-08-31T21:13:07.000Z"},"Minions__c":{"displayValue":null,"value":22},"MultiCity__c":{"displayValue":null,"value":null},"Name":{"displayValue":null,"value":"Wicked Witch of the West"},"Net_Worth__c":{"displayValue":"$2,645,000.00","value":2645000},"Next_Attack__c":{"displayValue":"8/31/2017 2:11 PM","value":"2017-08-31T21:11:00.000Z"},"Nickname__c":{"displayValue":null,"value":"The Witch"},"Owner":{"displayValue":"Test User","value":{"apiName":"Name","childRelationships":{},"eTag":"4e94a722d0417299ad3296504d6fcc21","fields":{"Id":{"displayValue":null,"value":"005R0000000F9tkIAC"},"Name":{"displayValue":null,"value":"Test User"}},"id":"005R0000000F9tkIAC","recordTypeInfo":null}},"OwnerId":{"displayValue":null,"value":"005R0000000F9tkIAC"},"Power_Level_Remaining__c":{"displayValue":null,"value":9900},"Power_level__c":{"displayValue":null,"value":100},"Rich_Text_Field__c":{"displayValue":null,"value":null},"Salary_Per_Year__c":{"displayValue":"$23,000","value":23000},"Secret_Code__c":{"displayValue":null,"value":"X2334"},"States_Provinces__c":{"displayValue":null,"value":null},"Territories_Covered__c":{"displayValue":"West","value":"West"},"Wakeup_time__c":{"displayValue":"8:30 AM","value":"08:30:00.000Z"},"Weakness__c":{"displayValue":"Water","value":"Water"},"Weapon__c":{"displayValue":null,"value":"a01R0000000C9hAIAS"},"Weapon__r":{"displayValue":"Magic Spell","value":{"apiName":"Weapon__c","childRelationships":{},"eTag":"8dec7a32628be5513f1097d0a1f8b374","fields":{"Id":{"displayValue":null,"value":"a01R0000000C9hAIAS"},"Name":{"displayValue":null,"value":"Magic Spell"}},"id":"a01R0000000C9hAIAS","recordTypeInfo":null}},"Website__c":{"displayValue":null,"value":"http://oz.org"},"age__c":{"displayValue":null,"value":115}},"id":"a00R0000000jq5eIAA","recordTypeInfo":null},"a00R0000000xAHtIAM":{"apiName":"Bad_Guy__c","childRelationships":{},"eTag":"03f13b9fc818a0717e3583ef593b72fe","fields":{"Attack_Prep__c":{"displayValue":"7/29/2019 2:09 PM","value":"2019-07-29T21:09:00.000Z"},"Auto_Number__c":{"displayValue":null,"value":"A-17/31-0001"},"Birthday__c":{"displayValue":"5/17/1977","value":"1977-05-17"},"Cell_Number__c":{"displayValue":null,"value":"(415) 122-1212"},"City__c":{"displayValue":"Vancouver","value":"Vancouver"},"Converted_Website__c":{"displayValue":null,"value":"&lt;a href=&quot;www.google.com&quot; target=&quot;_blank&quot;&gt;Tips &amp; Tricks&lt;/a&gt;"},"Country__c":{"displayValue":"Canada","value":"Canada"},"CreatedBy":{"displayValue":"Test User","value":{"apiName":"User","childRelationships":{},"eTag":"bf306bc78b47c4cd9afd4b7bf36df6e4","fields":{"Id":{"displayValue":null,"value":"005R0000000F9tkIAC"},"Name":{"displayValue":null,"value":"Test User"}},"id":"005R0000000F9tkIAC","recordTypeInfo":null}},"CreatedById":{"displayValue":null,"value":"005R0000000F9tkIAC"},"CreatedDate":{"displayValue":"8/31/2017 2:11 PM","value":"2017-08-31T21:11:18.000Z"},"Description__c":{"displayValue":null,"value":"Dark Lord of the Sith"},"Email_Address__c":{"displayValue":null,"value":"darth@empire.gov"},"Has_Weakness__c":{"displayValue":null,"value":true},"Has_Website__c":{"displayValue":null,"value":true},"Hideout_Location__Latitude__s":{"displayValue":null,"value":0},"Hideout_Location__Longitude__s":{"displayValue":null,"value":0},"LastModifiedBy":{"displayValue":"Test User","value":{"apiName":"User","childRelationships":{},"eTag":"bf306bc78b47c4cd9afd4b7bf36df6e4","fields":{"Id":{"displayValue":null,"value":"005R0000000F9tkIAC"},"Name":{"displayValue":null,"value":"Test User"}},"id":"005R0000000F9tkIAC","recordTypeInfo":null}},"LastModifiedById":{"displayValue":null,"value":"005R0000000F9tkIAC"},"LastModifiedDate":{"displayValue":"9/11/2017 9:40 PM","value":"2017-09-12T04:40:39.000Z"},"Minions__c":{"displayValue":null,"value":12},"MultiCity__c":{"displayValue":"Montreal;Vancouver","value":"Montreal;Vancouver"},"Name":{"displayValue":null,"value":"Darth Vader"},"Net_Worth__c":{"displayValue":"$92,880.00","value":92880},"Next_Attack__c":{"displayValue":"7/31/2019 2:09 PM","value":"2019-07-31T21:09:00.000Z"},"Nickname__c":{"displayValue":null,"value":"Vader"},"Owner":{"displayValue":"Test User","value":{"apiName":"Name","childRelationships":{},"eTag":"4e94a722d0417299ad3296504d6fcc21","fields":{"Id":{"displayValue":null,"value":"005R0000000F9tkIAC"},"Name":{"displayValue":null,"value":"Test User"}},"id":"005R0000000F9tkIAC","recordTypeInfo":null}},"OwnerId":{"displayValue":null,"value":"005R0000000F9tkIAC"},"Power_Level_Remaining__c":{"displayValue":null,"value":5000},"Power_level__c":{"displayValue":null,"value":5000},"Rich_Text_Field__c":{"displayValue":null,"value":"&lt;i&gt;&lt;b&gt;Rich text&lt;/b&gt;&lt;/i&gt;"},"Salary_Per_Year__c":{"displayValue":"$2,322","value":2322},"Secret_Code__c":{"displayValue":null,"value":"1234"},"States_Provinces__c":{"displayValue":"British Columbia","value":"British Columbia"},"Territories_Covered__c":{"displayValue":"East;West;South","value":"East;West;South"},"Wakeup_time__c":{"displayValue":"6:23 AM","value":"06:23:00.000Z"},"Weakness__c":{"displayValue":"Emotional Blackmail","value":"Emotional Blackmail"},"Weapon__c":{"displayValue":null,"value":"a01R0000000M7taIAC"},"Weapon__r":{"displayValue":"Lightsaber","value":{"apiName":"Weapon__c","childRelationships":{},"eTag":"87c4734056509ba7e47200004cedb4d1","fields":{"Id":{"displayValue":null,"value":"a01R0000000M7taIAC"},"Name":{"displayValue":null,"value":"Lightsaber"}},"id":"a01R0000000M7taIAC","recordTypeInfo":null}},"Website__c":{"displayValue":null,"value":"www.google.com"},"age__c":{"displayValue":null,"value":40}},"id":"a00R0000000xAHtIAM","recordTypeInfo":null}};
var store = {
  eTag: eTag,
  layoutUserStates: layoutUserStates,
  layouts: layouts,
  objectInfos: objectInfos,
  records: records
};

const record = {"apiName":"Bad_Guy__c","childRelationships":{},"eTag":"1690cb52f12e65e5f855615e4f43c5dc","fields":{"Auto_Number__c":{"displayValue":null,"value":null},"Birthday__c":{"displayValue":null,"value":null},"Cell_Number__c":{"displayValue":null,"value":null},"City__c":{"displayValue":null,"value":null},"Cool_words__c":{"displayValue":null,"value":null},"Country__c":{"displayValue":null,"value":null},"CreatedBy":{"displayValue":null,"value":null},"Description__c":{"displayValue":null,"value":"A bad guy"},"Email_Address__c":{"displayValue":null,"value":null},"Has_Weakness__c":{"displayValue":null,"value":false},"Hideout_Location__Latitude__s":{"displayValue":null,"value":null},"Hideout_Location__Longitude__s":{"displayValue":null,"value":null},"LastModifiedBy":{"displayValue":null,"value":null},"Minions__c":{"displayValue":null,"value":null},"MultiCity__c":{"displayValue":null,"value":null},"Name":{"displayValue":null,"value":null},"Next_Attack__c":{"displayValue":null,"value":null},"Nickname__c":{"displayValue":null,"value":null},"Owner":{"displayValue":"Test User","value":{"apiName":"Name","childRelationships":{},"eTag":"fe50f3a709b0944cd3e27311743066ce","fields":{"Id":{"displayValue":null,"value":"005R0000000F9tkIAC"},"Name":{"displayValue":null,"value":"Test User"}},"id":"005R0000000F9tkIAC","recordTypeInfo":null}},"OwnerId":{"displayValue":null,"value":"005R0000000F9tkIAC"},"P1__c":{"displayValue":null,"value":null},"P2__c":{"displayValue":null,"value":null},"P3__c":{"displayValue":null,"value":null},"P4__c":{"displayValue":null,"value":null},"Power_level__c":{"displayValue":null,"value":5000},"Rich_Text_Field__c":{"displayValue":null,"value":null},"Salary_Per_Year__c":{"displayValue":null,"value":null},"Secret_Code__c":{"displayValue":null,"value":null},"States_Provinces__c":{"displayValue":null,"value":null},"Territories_Covered__c":{"displayValue":null,"value":null},"Wakeup_time__c":{"displayValue":null,"value":null},"Weakness__c":{"displayValue":null,"value":null},"Weapon__c":{"displayValue":null,"value":null},"Weapon__r":{"displayValue":null,"value":null},"Website__c":{"displayValue":null,"value":null}},"id":null,"recordTypeInfo":null};
var defaults = {
  record: record
};

const Bad_Guy__c = {"012000000000000AAA":{"MultiCity__c":{"controllerValues":{"United States":0,"Canada":1,"United Kingdom":2},"defaultValue":null,"url":"/services/data/v41.0/ui-api/object-info/Bad_Guy__c/picklist-values/012000000000000AAA/MultiCity__c","values":[{"attributes":null,"label":"Montreal","validFor":[1],"value":"Montreal"},{"attributes":null,"label":"Vancouver","validFor":[1],"value":"Vancouver"},{"attributes":null,"label":"Toronto","validFor":[1],"value":"Toronto"},{"attributes":null,"label":"Manchester","validFor":[2],"value":"Manchester"},{"attributes":null,"label":"Birmingham","validFor":[2],"value":"Birmingham"},{"attributes":null,"label":"London","validFor":[2],"value":"London"}]},"Weakness__c":{"controllerValues":{"false":0,"true":1},"defaultValue":null,"url":"/services/data/v41.0/ui-api/object-info/Bad_Guy__c/picklist-values/012000000000000AAA/Weakness__c","values":[{"attributes":null,"label":"Silver Bullet","validFor":[1],"value":"Silver Bullet"},{"attributes":null,"label":"Water","validFor":[1],"value":"Water"},{"attributes":null,"label":"Poison","validFor":[1],"value":"Poison"},{"attributes":null,"label":"Emotional Blackmail","validFor":[1],"value":"Emotional Blackmail"}]},"Territories_Covered__c":{"controllerValues":{},"defaultValue":null,"url":"/services/data/v41.0/ui-api/object-info/Bad_Guy__c/picklist-values/012000000000000AAA/Territories_Covered__c","values":[{"attributes":null,"label":"East","validFor":[],"value":"East"},{"attributes":null,"label":"North","validFor":[],"value":"North"},{"attributes":null,"label":"West","validFor":[],"value":"West"},{"attributes":null,"label":"South","validFor":[],"value":"South"}]},"City__c":{"controllerValues":{"New York":0,"California":1,"Ontario":2,"British Columbia":3},"defaultValue":null,"url":"/services/data/v41.0/ui-api/object-info/Bad_Guy__c/picklist-values/012000000000000AAA/City__c","values":[{"attributes":null,"label":"New York City","validFor":[0],"value":"New York City"},{"attributes":null,"label":"Buffalo","validFor":[0],"value":"Buffalo"},{"attributes":null,"label":"San Francisco","validFor":[1],"value":"San Francisco"},{"attributes":null,"label":"Los Angeles","validFor":[1],"value":"Los Angeles"},{"attributes":null,"label":"Toronto","validFor":[2],"value":"Toronto"},{"attributes":null,"label":"Ottawa","validFor":[2],"value":"Ottawa"},{"attributes":null,"label":"Vancouver","validFor":[3],"value":"Vancouver"}]},"Country__c":{"controllerValues":{},"defaultValue":null,"url":"/services/data/v41.0/ui-api/object-info/Bad_Guy__c/picklist-values/012000000000000AAA/Country__c","values":[{"attributes":null,"label":"United States","validFor":[],"value":"United States"},{"attributes":null,"label":"Canada","validFor":[],"value":"Canada"},{"attributes":null,"label":"United Kingdom","validFor":[],"value":"United Kingdom"}]},"States_Provinces__c":{"controllerValues":{"United States":0,"Canada":1,"United Kingdom":2},"defaultValue":null,"url":"/services/data/v41.0/ui-api/object-info/Bad_Guy__c/picklist-values/012000000000000AAA/States_Provinces__c","values":[{"attributes":null,"label":"New York","validFor":[0],"value":"New York"},{"attributes":null,"label":"California","validFor":[0],"value":"California"},{"attributes":null,"label":"Ontario","validFor":[1],"value":"Ontario"},{"attributes":null,"label":"British Columbia","validFor":[1],"value":"British Columbia"}]}},"012xx0000000011":{"MultiCity__c":{"controllerValues":{"United States":0,"Canada":1,"United Kingdom":2},"defaultValue":null,"url":"/services/data/v41.0/ui-api/object-info/Bad_Guy__c/picklist-values/012000000000000AAA/MultiCity__c","values":[{"attributes":null,"label":"Montreal","validFor":[1],"value":"Montreal"},{"attributes":null,"label":"Vancouver","validFor":[1],"value":"Vancouver"},{"attributes":null,"label":"Toronto","validFor":[1],"value":"Toronto"}]},"Weakness__c":{"controllerValues":{"false":0,"true":1},"defaultValue":null,"url":"/services/data/v41.0/ui-api/object-info/Bad_Guy__c/picklist-values/012000000000000AAA/Weakness__c","values":[{"attributes":null,"label":"Silver Bullet","validFor":[1],"value":"Silver Bullet"},{"attributes":null,"label":"Water","validFor":[1],"value":"Water"}]},"Territories_Covered__c":{"controllerValues":{},"defaultValue":null,"url":"/services/data/v41.0/ui-api/object-info/Bad_Guy__c/picklist-values/012000000000000AAA/Territories_Covered__c","values":[{"attributes":null,"label":"East","validFor":[],"value":"East"},{"attributes":null,"label":"North","validFor":[],"value":"North"},{"attributes":null,"label":"West","validFor":[],"value":"West"},{"attributes":null,"label":"South","validFor":[],"value":"South"}]},"City__c":{"controllerValues":{"New York":0,"California":1,"Ontario":2,"British Columbia":3},"defaultValue":null,"url":"/services/data/v41.0/ui-api/object-info/Bad_Guy__c/picklist-values/012000000000000AAA/City__c","values":[{"attributes":null,"label":"New York City","validFor":[0],"value":"New York City"},{"attributes":null,"label":"Buffalo","validFor":[0],"value":"Buffalo"},{"attributes":null,"label":"San Francisco","validFor":[1],"value":"San Francisco"},{"attributes":null,"label":"Los Angeles","validFor":[1],"value":"Los Angeles"},{"attributes":null,"label":"Toronto","validFor":[2],"value":"Toronto"},{"attributes":null,"label":"Ottawa","validFor":[2],"value":"Ottawa"},{"attributes":null,"label":"Vancouver","validFor":[3],"value":"Vancouver"}]},"Country__c":{"controllerValues":{},"defaultValue":null,"url":"/services/data/v41.0/ui-api/object-info/Bad_Guy__c/picklist-values/012000000000000AAA/Country__c","values":[{"attributes":null,"label":"United States","validFor":[],"value":"United States"},{"attributes":null,"label":"Canada","validFor":[],"value":"Canada"}]},"States_Provinces__c":{"controllerValues":{"United States":0,"Canada":1,"United Kingdom":2},"defaultValue":null,"url":"/services/data/v41.0/ui-api/object-info/Bad_Guy__c/picklist-values/012000000000000AAA/States_Provinces__c","values":[{"attributes":null,"label":"New York","validFor":[0],"value":"New York"},{"attributes":null,"label":"California","validFor":[0],"value":"California"},{"attributes":null,"label":"Ontario","validFor":[1],"value":"Ontario"},{"attributes":null,"label":"British Columbia","validFor":[1],"value":"British Columbia"}]}}};
const Everything__c = {"012000000000000AAA":{"Picklist__c":{"controllerValues":{},"defaultValue":null,"values":[{"attributes":null,"label":"Est","validFor":[],"value":"East"},{"attributes":null,"label":"Nord","validFor":[],"value":"North"},{"attributes":null,"label":"Ouest","validFor":[],"value":"West"},{"attributes":null,"label":"Sud","validFor":[],"value":"South"}]}}};
const Lead = {"012000000000000AAA":{"Salutation":{"controllerValues":{},"defaultValue":"Dr.","url":"/services/data/v42.0/ui-api/object-info/Lead/picklist-values/012000000000000AAA/Salutation","values":[{"attributes":null,"label":"Mr.","validFor":[],"value":"Mr."},{"attributes":null,"label":"Ms.","validFor":[],"value":"Ms."},{"attributes":null,"label":"Mrs.","validFor":[],"value":"Mrs."},{"attributes":null,"label":"Dr.","validFor":[],"value":"Dr."},{"attributes":null,"label":"Prof.","validFor":[],"value":"Prof."}]},"CountryCode":{"controllerValues":{},"defaultValue":"CA","url":"/services/data/v42.0/ui-api/object-info/Account/picklist-values/012000000000000AAA/BillingCountryCode","values":[{"attributes":null,"label":"Afghanistan","validFor":[],"value":"AF"},{"attributes":null,"label":"Aland Islands","validFor":[],"value":"AX"},{"attributes":null,"label":"Albania","validFor":[],"value":"AL"},{"attributes":null,"label":"Algeria","validFor":[],"value":"DZ"},{"attributes":null,"label":"Andorra","validFor":[],"value":"AD"},{"attributes":null,"label":"Angola","validFor":[],"value":"AO"},{"attributes":null,"label":"Anguilla","validFor":[],"value":"AI"},{"attributes":null,"label":"Antarctica","validFor":[],"value":"AQ"},{"attributes":null,"label":"Antigua and Barbuda","validFor":[],"value":"AG"},{"attributes":null,"label":"Argentina","validFor":[],"value":"AR"},{"attributes":null,"label":"Armenia","validFor":[],"value":"AM"},{"attributes":null,"label":"Aruba","validFor":[],"value":"AW"},{"attributes":null,"label":"Australia","validFor":[],"value":"AU"},{"attributes":null,"label":"Austria","validFor":[],"value":"AT"},{"attributes":null,"label":"Azerbaijan","validFor":[],"value":"AZ"},{"attributes":null,"label":"Bahamas","validFor":[],"value":"BS"},{"attributes":null,"label":"Bahrain","validFor":[],"value":"BH"},{"attributes":null,"label":"Bangladesh","validFor":[],"value":"BD"},{"attributes":null,"label":"Barbados","validFor":[],"value":"BB"},{"attributes":null,"label":"Belarus","validFor":[],"value":"BY"},{"attributes":null,"label":"Belgium","validFor":[],"value":"BE"},{"attributes":null,"label":"Belize","validFor":[],"value":"BZ"},{"attributes":null,"label":"Benin","validFor":[],"value":"BJ"},{"attributes":null,"label":"Bermuda","validFor":[],"value":"BM"},{"attributes":null,"label":"Bhutan","validFor":[],"value":"BT"},{"attributes":null,"label":"Bolivia, Plurinational State of","validFor":[],"value":"BO"},{"attributes":null,"label":"Bonaire, Sint Eustatius and Saba","validFor":[],"value":"BQ"},{"attributes":null,"label":"Bosnia and Herzegovina","validFor":[],"value":"BA"},{"attributes":null,"label":"Botswana","validFor":[],"value":"BW"},{"attributes":null,"label":"Bouvet Island","validFor":[],"value":"BV"},{"attributes":null,"label":"Brazil","validFor":[],"value":"BR"},{"attributes":null,"label":"British Indian Ocean Territory","validFor":[],"value":"IO"},{"attributes":null,"label":"Brunei Darussalam","validFor":[],"value":"BN"},{"attributes":null,"label":"Bulgaria","validFor":[],"value":"BG"},{"attributes":null,"label":"Burkina Faso","validFor":[],"value":"BF"},{"attributes":null,"label":"Burundi","validFor":[],"value":"BI"},{"attributes":null,"label":"Cambodia","validFor":[],"value":"KH"},{"attributes":null,"label":"Cameroon","validFor":[],"value":"CM"},{"attributes":null,"label":"Canada","validFor":[],"value":"CA"},{"attributes":null,"label":"Cape Verde","validFor":[],"value":"CV"},{"attributes":null,"label":"Cayman Islands","validFor":[],"value":"KY"},{"attributes":null,"label":"Central African Republic","validFor":[],"value":"CF"},{"attributes":null,"label":"Chad","validFor":[],"value":"TD"},{"attributes":null,"label":"Chile","validFor":[],"value":"CL"},{"attributes":null,"label":"China","validFor":[],"value":"CN"},{"attributes":null,"label":"Christmas Island","validFor":[],"value":"CX"},{"attributes":null,"label":"Cocos (Keeling) Islands","validFor":[],"value":"CC"},{"attributes":null,"label":"Colombia","validFor":[],"value":"CO"},{"attributes":null,"label":"Comoros","validFor":[],"value":"KM"},{"attributes":null,"label":"Congo","validFor":[],"value":"CG"},{"attributes":null,"label":"Congo, the Democratic Republic of the","validFor":[],"value":"CD"},{"attributes":null,"label":"Cook Islands","validFor":[],"value":"CK"},{"attributes":null,"label":"Costa Rica","validFor":[],"value":"CR"},{"attributes":null,"label":"Cote d&#39;Ivoire","validFor":[],"value":"CI"},{"attributes":null,"label":"Croatia","validFor":[],"value":"HR"},{"attributes":null,"label":"Cuba","validFor":[],"value":"CU"},{"attributes":null,"label":"Curaçao","validFor":[],"value":"CW"},{"attributes":null,"label":"Cyprus","validFor":[],"value":"CY"},{"attributes":null,"label":"Czech Republic","validFor":[],"value":"CZ"},{"attributes":null,"label":"Denmark","validFor":[],"value":"DK"},{"attributes":null,"label":"Djibouti","validFor":[],"value":"DJ"},{"attributes":null,"label":"Dominica","validFor":[],"value":"DM"},{"attributes":null,"label":"Dominican Republic","validFor":[],"value":"DO"},{"attributes":null,"label":"Ecuador","validFor":[],"value":"EC"},{"attributes":null,"label":"Egypt","validFor":[],"value":"EG"},{"attributes":null,"label":"El Salvador","validFor":[],"value":"SV"},{"attributes":null,"label":"Equatorial Guinea","validFor":[],"value":"GQ"},{"attributes":null,"label":"Eritrea","validFor":[],"value":"ER"},{"attributes":null,"label":"Estonia","validFor":[],"value":"EE"},{"attributes":null,"label":"Ethiopia","validFor":[],"value":"ET"},{"attributes":null,"label":"Falkland Islands (Malvinas)","validFor":[],"value":"FK"},{"attributes":null,"label":"Faroe Islands","validFor":[],"value":"FO"},{"attributes":null,"label":"Fiji","validFor":[],"value":"FJ"},{"attributes":null,"label":"Finland","validFor":[],"value":"FI"},{"attributes":null,"label":"France","validFor":[],"value":"FR"},{"attributes":null,"label":"French Guiana","validFor":[],"value":"GF"},{"attributes":null,"label":"French Polynesia","validFor":[],"value":"PF"},{"attributes":null,"label":"French Southern Territories","validFor":[],"value":"TF"},{"attributes":null,"label":"Gabon","validFor":[],"value":"GA"},{"attributes":null,"label":"Gambia","validFor":[],"value":"GM"},{"attributes":null,"label":"Georgia","validFor":[],"value":"GE"},{"attributes":null,"label":"Germany","validFor":[],"value":"DE"},{"attributes":null,"label":"Ghana","validFor":[],"value":"GH"},{"attributes":null,"label":"Gibraltar","validFor":[],"value":"GI"},{"attributes":null,"label":"Greece","validFor":[],"value":"GR"},{"attributes":null,"label":"Greenland","validFor":[],"value":"GL"},{"attributes":null,"label":"Grenada","validFor":[],"value":"GD"},{"attributes":null,"label":"Guadeloupe","validFor":[],"value":"GP"},{"attributes":null,"label":"Guatemala","validFor":[],"value":"GT"},{"attributes":null,"label":"Guernsey","validFor":[],"value":"GG"},{"attributes":null,"label":"Guinea","validFor":[],"value":"GN"},{"attributes":null,"label":"Guinea-Bissau","validFor":[],"value":"GW"},{"attributes":null,"label":"Guyana","validFor":[],"value":"GY"},{"attributes":null,"label":"Haiti","validFor":[],"value":"HT"},{"attributes":null,"label":"Heard Island and McDonald Islands","validFor":[],"value":"HM"},{"attributes":null,"label":"Holy See (Vatican City State)","validFor":[],"value":"VA"},{"attributes":null,"label":"Honduras","validFor":[],"value":"HN"},{"attributes":null,"label":"Hungary","validFor":[],"value":"HU"},{"attributes":null,"label":"Iceland","validFor":[],"value":"IS"},{"attributes":null,"label":"India","validFor":[],"value":"IN"},{"attributes":null,"label":"Indonesia","validFor":[],"value":"ID"},{"attributes":null,"label":"Iran, Islamic Republic of","validFor":[],"value":"IR"},{"attributes":null,"label":"Iraq","validFor":[],"value":"IQ"},{"attributes":null,"label":"Ireland","validFor":[],"value":"IE"},{"attributes":null,"label":"Isle of Man","validFor":[],"value":"IM"},{"attributes":null,"label":"Israel","validFor":[],"value":"IL"},{"attributes":null,"label":"Italy","validFor":[],"value":"IT"},{"attributes":null,"label":"Jamaica","validFor":[],"value":"JM"},{"attributes":null,"label":"Japan","validFor":[],"value":"JP"},{"attributes":null,"label":"Jersey","validFor":[],"value":"JE"},{"attributes":null,"label":"Jordan","validFor":[],"value":"JO"},{"attributes":null,"label":"Kazakhstan","validFor":[],"value":"KZ"},{"attributes":null,"label":"Kenya","validFor":[],"value":"KE"},{"attributes":null,"label":"Kiribati","validFor":[],"value":"KI"},{"attributes":null,"label":"Korea, Democratic People&#39;s Republic of","validFor":[],"value":"KP"},{"attributes":null,"label":"Korea, Republic of","validFor":[],"value":"KR"},{"attributes":null,"label":"Kuwait","validFor":[],"value":"KW"},{"attributes":null,"label":"Kyrgyzstan","validFor":[],"value":"KG"},{"attributes":null,"label":"Lao People&#39;s Democratic Republic","validFor":[],"value":"LA"},{"attributes":null,"label":"Latvia","validFor":[],"value":"LV"},{"attributes":null,"label":"Lebanon","validFor":[],"value":"LB"},{"attributes":null,"label":"Lesotho","validFor":[],"value":"LS"},{"attributes":null,"label":"Liberia","validFor":[],"value":"LR"},{"attributes":null,"label":"Libya","validFor":[],"value":"LY"},{"attributes":null,"label":"Liechtenstein","validFor":[],"value":"LI"},{"attributes":null,"label":"Lithuania","validFor":[],"value":"LT"},{"attributes":null,"label":"Luxembourg","validFor":[],"value":"LU"},{"attributes":null,"label":"Macao","validFor":[],"value":"MO"},{"attributes":null,"label":"Macedonia, the former Yugoslav Republic of","validFor":[],"value":"MK"},{"attributes":null,"label":"Madagascar","validFor":[],"value":"MG"},{"attributes":null,"label":"Malawi","validFor":[],"value":"MW"},{"attributes":null,"label":"Malaysia","validFor":[],"value":"MY"},{"attributes":null,"label":"Maldives","validFor":[],"value":"MV"},{"attributes":null,"label":"Mali","validFor":[],"value":"ML"},{"attributes":null,"label":"Malta","validFor":[],"value":"MT"},{"attributes":null,"label":"Martinique","validFor":[],"value":"MQ"},{"attributes":null,"label":"Mauritania","validFor":[],"value":"MR"},{"attributes":null,"label":"Mauritius","validFor":[],"value":"MU"},{"attributes":null,"label":"Mayotte","validFor":[],"value":"YT"},{"attributes":null,"label":"Mexico","validFor":[],"value":"MX"},{"attributes":null,"label":"Moldova, Republic of","validFor":[],"value":"MD"},{"attributes":null,"label":"Monaco","validFor":[],"value":"MC"},{"attributes":null,"label":"Mongolia","validFor":[],"value":"MN"},{"attributes":null,"label":"Montenegro","validFor":[],"value":"ME"},{"attributes":null,"label":"Montserrat","validFor":[],"value":"MS"},{"attributes":null,"label":"Morocco","validFor":[],"value":"MA"},{"attributes":null,"label":"Mozambique","validFor":[],"value":"MZ"},{"attributes":null,"label":"Myanmar","validFor":[],"value":"MM"},{"attributes":null,"label":"Namibia","validFor":[],"value":"NA"},{"attributes":null,"label":"Nauru","validFor":[],"value":"NR"},{"attributes":null,"label":"Nepal","validFor":[],"value":"NP"},{"attributes":null,"label":"Netherlands","validFor":[],"value":"NL"},{"attributes":null,"label":"New Caledonia","validFor":[],"value":"NC"},{"attributes":null,"label":"New Zealand","validFor":[],"value":"NZ"},{"attributes":null,"label":"Nicaragua","validFor":[],"value":"NI"},{"attributes":null,"label":"Niger","validFor":[],"value":"NE"},{"attributes":null,"label":"Nigeria","validFor":[],"value":"NG"},{"attributes":null,"label":"Niue","validFor":[],"value":"NU"},{"attributes":null,"label":"Norfolk Island","validFor":[],"value":"NF"},{"attributes":null,"label":"Norway","validFor":[],"value":"NO"},{"attributes":null,"label":"Oman","validFor":[],"value":"OM"},{"attributes":null,"label":"Pakistan","validFor":[],"value":"PK"},{"attributes":null,"label":"Palestine","validFor":[],"value":"PS"},{"attributes":null,"label":"Panama","validFor":[],"value":"PA"},{"attributes":null,"label":"Papua New Guinea","validFor":[],"value":"PG"},{"attributes":null,"label":"Paraguay","validFor":[],"value":"PY"},{"attributes":null,"label":"Peru","validFor":[],"value":"PE"},{"attributes":null,"label":"Philippines","validFor":[],"value":"PH"},{"attributes":null,"label":"Pitcairn","validFor":[],"value":"PN"},{"attributes":null,"label":"Poland","validFor":[],"value":"PL"},{"attributes":null,"label":"Portugal","validFor":[],"value":"PT"},{"attributes":null,"label":"Qatar","validFor":[],"value":"QA"},{"attributes":null,"label":"Reunion","validFor":[],"value":"RE"},{"attributes":null,"label":"Romania","validFor":[],"value":"RO"},{"attributes":null,"label":"Russian Federation","validFor":[],"value":"RU"},{"attributes":null,"label":"Rwanda","validFor":[],"value":"RW"},{"attributes":null,"label":"Saint Barthélemy","validFor":[],"value":"BL"},{"attributes":null,"label":"Saint Helena, Ascension and Tristan da Cunha","validFor":[],"value":"SH"},{"attributes":null,"label":"Saint Kitts and Nevis","validFor":[],"value":"KN"},{"attributes":null,"label":"Saint Lucia","validFor":[],"value":"LC"},{"attributes":null,"label":"Saint Martin (French part)","validFor":[],"value":"MF"},{"attributes":null,"label":"Saint Pierre and Miquelon","validFor":[],"value":"PM"},{"attributes":null,"label":"Saint Vincent and the Grenadines","validFor":[],"value":"VC"},{"attributes":null,"label":"Samoa","validFor":[],"value":"WS"},{"attributes":null,"label":"San Marino","validFor":[],"value":"SM"},{"attributes":null,"label":"Sao Tome and Principe","validFor":[],"value":"ST"},{"attributes":null,"label":"Saudi Arabia","validFor":[],"value":"SA"},{"attributes":null,"label":"Senegal","validFor":[],"value":"SN"},{"attributes":null,"label":"Serbia","validFor":[],"value":"RS"},{"attributes":null,"label":"Seychelles","validFor":[],"value":"SC"},{"attributes":null,"label":"Sierra Leone","validFor":[],"value":"SL"},{"attributes":null,"label":"Singapore","validFor":[],"value":"SG"},{"attributes":null,"label":"Sint Maarten (Dutch part)","validFor":[],"value":"SX"},{"attributes":null,"label":"Slovakia","validFor":[],"value":"SK"},{"attributes":null,"label":"Slovenia","validFor":[],"value":"SI"},{"attributes":null,"label":"Solomon Islands","validFor":[],"value":"SB"},{"attributes":null,"label":"Somalia","validFor":[],"value":"SO"},{"attributes":null,"label":"South Africa","validFor":[],"value":"ZA"},{"attributes":null,"label":"South Georgia and the South Sandwich Islands","validFor":[],"value":"GS"},{"attributes":null,"label":"South Sudan","validFor":[],"value":"SS"},{"attributes":null,"label":"Spain","validFor":[],"value":"ES"},{"attributes":null,"label":"Sri Lanka","validFor":[],"value":"LK"},{"attributes":null,"label":"Sudan","validFor":[],"value":"SD"},{"attributes":null,"label":"Suriname","validFor":[],"value":"SR"},{"attributes":null,"label":"Svalbard and Jan Mayen","validFor":[],"value":"SJ"},{"attributes":null,"label":"Swaziland","validFor":[],"value":"SZ"},{"attributes":null,"label":"Sweden","validFor":[],"value":"SE"},{"attributes":null,"label":"Switzerland","validFor":[],"value":"CH"},{"attributes":null,"label":"Syrian Arab Republic","validFor":[],"value":"SY"},{"attributes":null,"label":"Taiwan","validFor":[],"value":"TW"},{"attributes":null,"label":"Tajikistan","validFor":[],"value":"TJ"},{"attributes":null,"label":"Tanzania, United Republic of","validFor":[],"value":"TZ"},{"attributes":null,"label":"Thailand","validFor":[],"value":"TH"},{"attributes":null,"label":"Timor-Leste","validFor":[],"value":"TL"},{"attributes":null,"label":"Togo","validFor":[],"value":"TG"},{"attributes":null,"label":"Tokelau","validFor":[],"value":"TK"},{"attributes":null,"label":"Tonga","validFor":[],"value":"TO"},{"attributes":null,"label":"Trinidad and Tobago","validFor":[],"value":"TT"},{"attributes":null,"label":"Tunisia","validFor":[],"value":"TN"},{"attributes":null,"label":"Turkey","validFor":[],"value":"TR"},{"attributes":null,"label":"Turkmenistan","validFor":[],"value":"TM"},{"attributes":null,"label":"Turks and Caicos Islands","validFor":[],"value":"TC"},{"attributes":null,"label":"Tuvalu","validFor":[],"value":"TV"},{"attributes":null,"label":"Uganda","validFor":[],"value":"UG"},{"attributes":null,"label":"Ukraine","validFor":[],"value":"UA"},{"attributes":null,"label":"United Arab Emirates","validFor":[],"value":"AE"},{"attributes":null,"label":"United Kingdom","validFor":[],"value":"GB"},{"attributes":null,"label":"United States","validFor":[],"value":"US"},{"attributes":null,"label":"Uruguay","validFor":[],"value":"UY"},{"attributes":null,"label":"Uzbekistan","validFor":[],"value":"UZ"},{"attributes":null,"label":"Vanuatu","validFor":[],"value":"VU"},{"attributes":null,"label":"Venezuela, Bolivarian Republic of","validFor":[],"value":"VE"},{"attributes":null,"label":"Vietnam","validFor":[],"value":"VN"},{"attributes":null,"label":"Virgin Islands, British","validFor":[],"value":"VG"},{"attributes":null,"label":"Wallis and Futuna","validFor":[],"value":"WF"},{"attributes":null,"label":"Western Sahara","validFor":[],"value":"EH"},{"attributes":null,"label":"Yemen","validFor":[],"value":"YE"},{"attributes":null,"label":"Zambia","validFor":[],"value":"ZM"},{"attributes":null,"label":"Zimbabwe","validFor":[],"value":"ZW"}]},"StateCode":{"controllerValues":{"AF":0,"AX":1,"AL":2,"DZ":3,"AD":4,"AO":5,"AI":6,"AQ":7,"AG":8,"AR":9,"AM":10,"AW":11,"AU":12,"AT":13,"AZ":14,"BS":15,"BH":16,"BD":17,"BB":18,"BY":19,"BE":20,"BZ":21,"BJ":22,"BM":23,"BT":24,"BO":25,"BQ":26,"BA":27,"BW":28,"BV":29,"BR":30,"IO":31,"BN":32,"BG":33,"BF":34,"BI":35,"KH":36,"CM":37,"CA":38,"CV":39,"KY":40,"CF":41,"TD":42,"CL":43,"CN":44,"CX":45,"CC":46,"CO":47,"KM":48,"CG":49,"CD":50,"CK":51,"CR":52,"CI":53,"HR":54,"CU":55,"CW":56,"CY":57,"CZ":58,"DK":59,"DJ":60,"DM":61,"DO":62,"EC":63,"EG":64,"SV":65,"GQ":66,"ER":67,"EE":68,"ET":69,"FK":70,"FO":71,"FJ":72,"FI":73,"FR":74,"GF":75,"PF":76,"TF":77,"GA":78,"GM":79,"GE":80,"DE":81,"GH":82,"GI":83,"GR":84,"GL":85,"GD":86,"GP":87,"GT":88,"GG":89,"GN":90,"GW":91,"GY":92,"HT":93,"HM":94,"VA":95,"HN":96,"HU":97,"IS":98,"IN":99,"ID":100,"IR":101,"IQ":102,"IE":103,"IM":104,"IL":105,"IT":106,"JM":107,"JP":108,"JE":109,"JO":110,"KZ":111,"KE":112,"KI":113,"KP":114,"KR":115,"KW":116,"KG":117,"LA":118,"LV":119,"LB":120,"LS":121,"LR":122,"LY":123,"LI":124,"LT":125,"LU":126,"MO":127,"MK":128,"MG":129,"MW":130,"MY":131,"MV":132,"ML":133,"MT":134,"MQ":135,"MR":136,"MU":137,"YT":138,"MX":139,"MD":140,"MC":141,"MN":142,"ME":143,"MS":144,"MA":145,"MZ":146,"MM":147,"NA":148,"NR":149,"NP":150,"NL":151,"NC":152,"NZ":153,"NI":154,"NE":155,"NG":156,"NU":157,"NF":158,"NO":159,"OM":160,"PK":161,"PS":162,"PA":163,"PG":164,"PY":165,"PE":166,"PH":167,"PN":168,"PL":169,"PT":170,"QA":171,"RE":172,"RO":173,"RU":174,"RW":175,"BL":176,"SH":177,"KN":178,"LC":179,"MF":180,"PM":181,"VC":182,"WS":183,"SM":184,"ST":185,"SA":186,"SN":187,"RS":188,"SC":189,"SL":190,"SG":191,"SX":192,"SK":193,"SI":194,"SB":195,"SO":196,"ZA":197,"GS":198,"SS":199,"ES":200,"LK":201,"SD":202,"SR":203,"SJ":204,"SZ":205,"SE":206,"CH":207,"SY":208,"TW":209,"TJ":210,"TZ":211,"TH":212,"TL":213,"TG":214,"TK":215,"TO":216,"TT":217,"TN":218,"TR":219,"TM":220,"TC":221,"TV":222,"UG":223,"UA":224,"AE":225,"GB":226,"US":227,"UY":228,"UZ":229,"VU":230,"VE":231,"VN":232,"VG":233,"WF":234,"EH":235,"YE":236,"ZM":237,"ZW":238},"defaultValue":null,"url":"/services/data/v42.0/ui-api/object-info/Account/picklist-values/012000000000000AAA/BillingStateCode","values":[{"attributes":null,"label":"Acre","validFor":[30],"value":"AC"},{"attributes":null,"label":"Agrigento","validFor":[106],"value":"AG"},{"attributes":null,"label":"Aguascalientes","validFor":[139],"value":"AG"},{"attributes":null,"label":"Alabama","validFor":[227],"value":"AL"},{"attributes":null,"label":"Alagoas","validFor":[30],"value":"AL"},{"attributes":null,"label":"Alaska","validFor":[227],"value":"AK"},{"attributes":null,"label":"Alberta","validFor":[38],"value":"AB"},{"attributes":null,"label":"Alessandria","validFor":[106],"value":"AL"},{"attributes":null,"label":"Amapá","validFor":[30],"value":"AP"},{"attributes":null,"label":"Amazonas","validFor":[30],"value":"AM"},{"attributes":null,"label":"Ancona","validFor":[106],"value":"AN"},{"attributes":null,"label":"Andaman and Nicobar Islands","validFor":[99],"value":"AN"},{"attributes":null,"label":"Andhra Pradesh","validFor":[99],"value":"AP"},{"attributes":null,"label":"Anhui","validFor":[44],"value":"34"},{"attributes":null,"label":"Aosta","validFor":[106],"value":"AO"},{"attributes":null,"label":"Arezzo","validFor":[106],"value":"AR"},{"attributes":null,"label":"Arizona","validFor":[227],"value":"AZ"},{"attributes":null,"label":"Arkansas","validFor":[227],"value":"AR"},{"attributes":null,"label":"Arunachal Pradesh","validFor":[99],"value":"AR"},{"attributes":null,"label":"Ascoli Piceno","validFor":[106],"value":"AP"},{"attributes":null,"label":"Assam","validFor":[99],"value":"AS"},{"attributes":null,"label":"Asti","validFor":[106],"value":"AT"},{"attributes":null,"label":"Australian Capital Territory","validFor":[12],"value":"ACT"},{"attributes":null,"label":"Avellino","validFor":[106],"value":"AV"},{"attributes":null,"label":"Bahia","validFor":[30],"value":"BA"},{"attributes":null,"label":"Baja California","validFor":[139],"value":"BC"},{"attributes":null,"label":"Baja California Sur","validFor":[139],"value":"BS"},{"attributes":null,"label":"Bari","validFor":[106],"value":"BA"},{"attributes":null,"label":"Barletta-Andria-Trani","validFor":[106],"value":"BT"},{"attributes":null,"label":"Beijing","validFor":[44],"value":"11"},{"attributes":null,"label":"Belluno","validFor":[106],"value":"BL"},{"attributes":null,"label":"Benevento","validFor":[106],"value":"BN"},{"attributes":null,"label":"Bergamo","validFor":[106],"value":"BG"},{"attributes":null,"label":"Biella","validFor":[106],"value":"BI"},{"attributes":null,"label":"Bihar","validFor":[99],"value":"BR"},{"attributes":null,"label":"Bologna","validFor":[106],"value":"BO"},{"attributes":null,"label":"Bolzano","validFor":[106],"value":"BZ"},{"attributes":null,"label":"Brescia","validFor":[106],"value":"BS"},{"attributes":null,"label":"Brindisi","validFor":[106],"value":"BR"},{"attributes":null,"label":"British Columbia","validFor":[38],"value":"BC"},{"attributes":null,"label":"Cagliari","validFor":[106],"value":"CA"},{"attributes":null,"label":"California","validFor":[227],"value":"CA"},{"attributes":null,"label":"Caltanissetta","validFor":[106],"value":"CL"},{"attributes":null,"label":"Campeche","validFor":[139],"value":"CM"},{"attributes":null,"label":"Campobasso","validFor":[106],"value":"CB"},{"attributes":null,"label":"Carbonia-Iglesias","validFor":[106],"value":"CI"},{"attributes":null,"label":"Carlow","validFor":[103],"value":"CW"},{"attributes":null,"label":"Caserta","validFor":[106],"value":"CE"},{"attributes":null,"label":"Catania","validFor":[106],"value":"CT"},{"attributes":null,"label":"Catanzaro","validFor":[106],"value":"CZ"},{"attributes":null,"label":"Cavan","validFor":[103],"value":"CN"},{"attributes":null,"label":"Ceará","validFor":[30],"value":"CE"},{"attributes":null,"label":"Chandigarh","validFor":[99],"value":"CH"},{"attributes":null,"label":"Chhattisgarh","validFor":[99],"value":"CT"},{"attributes":null,"label":"Chiapas","validFor":[139],"value":"CS"},{"attributes":null,"label":"Chieti","validFor":[106],"value":"CH"},{"attributes":null,"label":"Chihuahua","validFor":[139],"value":"CH"},{"attributes":null,"label":"Chongqing","validFor":[44],"value":"50"},{"attributes":null,"label":"Clare","validFor":[103],"value":"CE"},{"attributes":null,"label":"Coahuila","validFor":[139],"value":"CO"},{"attributes":null,"label":"Colima","validFor":[139],"value":"CL"},{"attributes":null,"label":"Colorado","validFor":[227],"value":"CO"},{"attributes":null,"label":"Como","validFor":[106],"value":"CO"},{"attributes":null,"label":"Connecticut","validFor":[227],"value":"CT"},{"attributes":null,"label":"Cork","validFor":[103],"value":"CO"},{"attributes":null,"label":"Cosenza","validFor":[106],"value":"CS"},{"attributes":null,"label":"Cremona","validFor":[106],"value":"CR"},{"attributes":null,"label":"Crotone","validFor":[106],"value":"KR"},{"attributes":null,"label":"Cuneo","validFor":[106],"value":"CN"},{"attributes":null,"label":"Dadra and Nagar Haveli","validFor":[99],"value":"DN"},{"attributes":null,"label":"Daman and Diu","validFor":[99],"value":"DD"},{"attributes":null,"label":"Delaware","validFor":[227],"value":"DE"},{"attributes":null,"label":"Delhi","validFor":[99],"value":"DL"},{"attributes":null,"label":"District of Columbia","validFor":[227],"value":"DC"},{"attributes":null,"label":"Distrito Federal","validFor":[30],"value":"DF"},{"attributes":null,"label":"Donegal","validFor":[103],"value":"DL"},{"attributes":null,"label":"Dublin","validFor":[103],"value":"D"},{"attributes":null,"label":"Durango","validFor":[139],"value":"DG"},{"attributes":null,"label":"Enna","validFor":[106],"value":"EN"},{"attributes":null,"label":"Espírito Santo","validFor":[30],"value":"ES"},{"attributes":null,"label":"Federal District","validFor":[139],"value":"DF"},{"attributes":null,"label":"Fermo","validFor":[106],"value":"FM"},{"attributes":null,"label":"Ferrara","validFor":[106],"value":"FE"},{"attributes":null,"label":"Florence","validFor":[106],"value":"FI"},{"attributes":null,"label":"Florida","validFor":[227],"value":"FL"},{"attributes":null,"label":"Foggia","validFor":[106],"value":"FG"},{"attributes":null,"label":"Forlì-Cesena","validFor":[106],"value":"FC"},{"attributes":null,"label":"Frosinone","validFor":[106],"value":"FR"},{"attributes":null,"label":"Fujian","validFor":[44],"value":"35"},{"attributes":null,"label":"Galway","validFor":[103],"value":"G"},{"attributes":null,"label":"Gansu","validFor":[44],"value":"62"},{"attributes":null,"label":"Genoa","validFor":[106],"value":"GE"},{"attributes":null,"label":"Georgia","validFor":[227],"value":"GA"},{"attributes":null,"label":"Goa","validFor":[99],"value":"GA"},{"attributes":null,"label":"Goiás","validFor":[30],"value":"GO"},{"attributes":null,"label":"Gorizia","validFor":[106],"value":"GO"},{"attributes":null,"label":"Grosseto","validFor":[106],"value":"GR"},{"attributes":null,"label":"Guanajuato","validFor":[139],"value":"GT"},{"attributes":null,"label":"Guangdong","validFor":[44],"value":"44"},{"attributes":null,"label":"Guangxi","validFor":[44],"value":"45"},{"attributes":null,"label":"Guerrero","validFor":[139],"value":"GR"},{"attributes":null,"label":"Guizhou","validFor":[44],"value":"52"},{"attributes":null,"label":"Gujarat","validFor":[99],"value":"GJ"},{"attributes":null,"label":"Hainan","validFor":[44],"value":"46"},{"attributes":null,"label":"Haryana","validFor":[99],"value":"HR"},{"attributes":null,"label":"Hawaii","validFor":[227],"value":"HI"},{"attributes":null,"label":"Hebei","validFor":[44],"value":"13"},{"attributes":null,"label":"Heilongjiang","validFor":[44],"value":"23"},{"attributes":null,"label":"Henan","validFor":[44],"value":"41"},{"attributes":null,"label":"Hidalgo","validFor":[139],"value":"HG"},{"attributes":null,"label":"Himachal Pradesh","validFor":[99],"value":"HP"},{"attributes":null,"label":"Hong Kong","validFor":[44],"value":"91"},{"attributes":null,"label":"Hubei","validFor":[44],"value":"42"},{"attributes":null,"label":"Hunan","validFor":[44],"value":"43"},{"attributes":null,"label":"Idaho","validFor":[227],"value":"ID"},{"attributes":null,"label":"Illinois","validFor":[227],"value":"IL"},{"attributes":null,"label":"Imperia","validFor":[106],"value":"IM"},{"attributes":null,"label":"Indiana","validFor":[227],"value":"IN"},{"attributes":null,"label":"Iowa","validFor":[227],"value":"IA"},{"attributes":null,"label":"Isernia","validFor":[106],"value":"IS"},{"attributes":null,"label":"Jalisco","validFor":[139],"value":"JA"},{"attributes":null,"label":"Jammu and Kashmir","validFor":[99],"value":"JK"},{"attributes":null,"label":"Jharkhand","validFor":[99],"value":"JH"},{"attributes":null,"label":"Jiangsu","validFor":[44],"value":"32"},{"attributes":null,"label":"Jiangxi","validFor":[44],"value":"36"},{"attributes":null,"label":"Jilin","validFor":[44],"value":"22"},{"attributes":null,"label":"Kansas","validFor":[227],"value":"KS"},{"attributes":null,"label":"Karnataka","validFor":[99],"value":"KA"},{"attributes":null,"label":"Kentucky","validFor":[227],"value":"KY"},{"attributes":null,"label":"Kerala","validFor":[99],"value":"KL"},{"attributes":null,"label":"Kerry","validFor":[103],"value":"KY"},{"attributes":null,"label":"Kildare","validFor":[103],"value":"KE"},{"attributes":null,"label":"Kilkenny","validFor":[103],"value":"KK"},{"attributes":null,"label":"L&#39;Aquila","validFor":[106],"value":"AQ"},{"attributes":null,"label":"Lakshadweep","validFor":[99],"value":"LD"},{"attributes":null,"label":"Laois","validFor":[103],"value":"LS"},{"attributes":null,"label":"La Spezia","validFor":[106],"value":"SP"},{"attributes":null,"label":"Latina","validFor":[106],"value":"LT"},{"attributes":null,"label":"Lecce","validFor":[106],"value":"LE"},{"attributes":null,"label":"Lecco","validFor":[106],"value":"LC"},{"attributes":null,"label":"Leitrim","validFor":[103],"value":"LM"},{"attributes":null,"label":"Liaoning","validFor":[44],"value":"21"},{"attributes":null,"label":"Limerick","validFor":[103],"value":"LK"},{"attributes":null,"label":"Livorno","validFor":[106],"value":"LI"},{"attributes":null,"label":"Lodi","validFor":[106],"value":"LO"},{"attributes":null,"label":"Longford","validFor":[103],"value":"LD"},{"attributes":null,"label":"Louisiana","validFor":[227],"value":"LA"},{"attributes":null,"label":"Louth","validFor":[103],"value":"LH"},{"attributes":null,"label":"Lucca","validFor":[106],"value":"LU"},{"attributes":null,"label":"Macao","validFor":[44],"value":"92"},{"attributes":null,"label":"Macerata","validFor":[106],"value":"MC"},{"attributes":null,"label":"Madhya Pradesh","validFor":[99],"value":"MP"},{"attributes":null,"label":"Maharashtra","validFor":[99],"value":"MH"},{"attributes":null,"label":"Maine","validFor":[227],"value":"ME"},{"attributes":null,"label":"Manipur","validFor":[99],"value":"MN"},{"attributes":null,"label":"Manitoba","validFor":[38],"value":"MB"},{"attributes":null,"label":"Mantua","validFor":[106],"value":"MN"},{"attributes":null,"label":"Maranhão","validFor":[30],"value":"MA"},{"attributes":null,"label":"Maryland","validFor":[227],"value":"MD"},{"attributes":null,"label":"Massa and Carrara","validFor":[106],"value":"MS"},{"attributes":null,"label":"Massachusetts","validFor":[227],"value":"MA"},{"attributes":null,"label":"Matera","validFor":[106],"value":"MT"},{"attributes":null,"label":"Mato Grosso","validFor":[30],"value":"MT"},{"attributes":null,"label":"Mato Grosso do Sul","validFor":[30],"value":"MS"},{"attributes":null,"label":"Mayo","validFor":[103],"value":"MO"},{"attributes":null,"label":"Meath","validFor":[103],"value":"MH"},{"attributes":null,"label":"Medio Campidano","validFor":[106],"value":"VS"},{"attributes":null,"label":"Meghalaya","validFor":[99],"value":"ML"},{"attributes":null,"label":"Messina","validFor":[106],"value":"ME"},{"attributes":null,"label":"Mexico State","validFor":[139],"value":"ME"},{"attributes":null,"label":"Michigan","validFor":[227],"value":"MI"},{"attributes":null,"label":"Michoacán","validFor":[139],"value":"MI"},{"attributes":null,"label":"Milan","validFor":[106],"value":"MI"},{"attributes":null,"label":"Minas Gerais","validFor":[30],"value":"MG"},{"attributes":null,"label":"Minnesota","validFor":[227],"value":"MN"},{"attributes":null,"label":"Mississippi","validFor":[227],"value":"MS"},{"attributes":null,"label":"Missouri","validFor":[227],"value":"MO"},{"attributes":null,"label":"Mizoram","validFor":[99],"value":"MZ"},{"attributes":null,"label":"Modena","validFor":[106],"value":"MO"},{"attributes":null,"label":"Monaghan","validFor":[103],"value":"MN"},{"attributes":null,"label":"Montana","validFor":[227],"value":"MT"},{"attributes":null,"label":"Monza and Brianza","validFor":[106],"value":"MB"},{"attributes":null,"label":"Morelos","validFor":[139],"value":"MO"},{"attributes":null,"label":"Nagaland","validFor":[99],"value":"NL"},{"attributes":null,"label":"Naples","validFor":[106],"value":"NA"},{"attributes":null,"label":"Nayarit","validFor":[139],"value":"NA"},{"attributes":null,"label":"Nebraska","validFor":[227],"value":"NE"},{"attributes":null,"label":"Nei Mongol","validFor":[44],"value":"15"},{"attributes":null,"label":"Nevada","validFor":[227],"value":"NV"},{"attributes":null,"label":"New Brunswick","validFor":[38],"value":"NB"},{"attributes":null,"label":"Newfoundland and Labrador","validFor":[38],"value":"NL"},{"attributes":null,"label":"New Hampshire","validFor":[227],"value":"NH"},{"attributes":null,"label":"New Jersey","validFor":[227],"value":"NJ"},{"attributes":null,"label":"New Mexico","validFor":[227],"value":"NM"},{"attributes":null,"label":"New South Wales","validFor":[12],"value":"NSW"},{"attributes":null,"label":"New York","validFor":[227],"value":"NY"},{"attributes":null,"label":"Ningxia","validFor":[44],"value":"64"},{"attributes":null,"label":"North Carolina","validFor":[227],"value":"NC"},{"attributes":null,"label":"North Dakota","validFor":[227],"value":"ND"},{"attributes":null,"label":"Northern Territory","validFor":[12],"value":"NT"},{"attributes":null,"label":"Northwest Territories","validFor":[38],"value":"NT"},{"attributes":null,"label":"Novara","validFor":[106],"value":"NO"},{"attributes":null,"label":"Nova Scotia","validFor":[38],"value":"NS"},{"attributes":null,"label":"Nuevo León","validFor":[139],"value":"NL"},{"attributes":null,"label":"Nunavut","validFor":[38],"value":"NU"},{"attributes":null,"label":"Nuoro","validFor":[106],"value":"NU"},{"attributes":null,"label":"Oaxaca","validFor":[139],"value":"OA"},{"attributes":null,"label":"Odisha","validFor":[99],"value":"OR"},{"attributes":null,"label":"Offaly","validFor":[103],"value":"OY"},{"attributes":null,"label":"Ogliastra","validFor":[106],"value":"OG"},{"attributes":null,"label":"Ohio","validFor":[227],"value":"OH"},{"attributes":null,"label":"Oklahoma","validFor":[227],"value":"OK"},{"attributes":null,"label":"Olbia-Tempio","validFor":[106],"value":"OT"},{"attributes":null,"label":"Ontario","validFor":[38],"value":"ON"},{"attributes":null,"label":"Oregon","validFor":[227],"value":"OR"},{"attributes":null,"label":"Oristano","validFor":[106],"value":"OR"},{"attributes":null,"label":"Padua","validFor":[106],"value":"PD"},{"attributes":null,"label":"Palermo","validFor":[106],"value":"PA"},{"attributes":null,"label":"Pará","validFor":[30],"value":"PA"},{"attributes":null,"label":"Paraíba","validFor":[30],"value":"PB"},{"attributes":null,"label":"Paraná","validFor":[30],"value":"PR"},{"attributes":null,"label":"Parma","validFor":[106],"value":"PR"},{"attributes":null,"label":"Pavia","validFor":[106],"value":"PV"},{"attributes":null,"label":"Pennsylvania","validFor":[227],"value":"PA"},{"attributes":null,"label":"Pernambuco","validFor":[30],"value":"PE"},{"attributes":null,"label":"Perugia","validFor":[106],"value":"PG"},{"attributes":null,"label":"Pesaro and Urbino","validFor":[106],"value":"PU"},{"attributes":null,"label":"Pescara","validFor":[106],"value":"PE"},{"attributes":null,"label":"Piacenza","validFor":[106],"value":"PC"},{"attributes":null,"label":"Piauí","validFor":[30],"value":"PI"},{"attributes":null,"label":"Pisa","validFor":[106],"value":"PI"},{"attributes":null,"label":"Pistoia","validFor":[106],"value":"PT"},{"attributes":null,"label":"Pordenone","validFor":[106],"value":"PN"},{"attributes":null,"label":"Potenza","validFor":[106],"value":"PZ"},{"attributes":null,"label":"Prato","validFor":[106],"value":"PO"},{"attributes":null,"label":"Prince Edward Island","validFor":[38],"value":"PE"},{"attributes":null,"label":"Puducherry","validFor":[99],"value":"PY"},{"attributes":null,"label":"Puebla","validFor":[139],"value":"PB"},{"attributes":null,"label":"Punjab","validFor":[99],"value":"PB"},{"attributes":null,"label":"Qinghai","validFor":[44],"value":"63"},{"attributes":null,"label":"Quebec","validFor":[38],"value":"QC"},{"attributes":null,"label":"Queensland","validFor":[12],"value":"QLD"},{"attributes":null,"label":"Querétaro","validFor":[139],"value":"QE"},{"attributes":null,"label":"Quintana Roo","validFor":[139],"value":"QR"},{"attributes":null,"label":"Ragusa","validFor":[106],"value":"RG"},{"attributes":null,"label":"Rajasthan","validFor":[99],"value":"RJ"},{"attributes":null,"label":"Ravenna","validFor":[106],"value":"RA"},{"attributes":null,"label":"Reggio Calabria","validFor":[106],"value":"RC"},{"attributes":null,"label":"Reggio Emilia","validFor":[106],"value":"RE"},{"attributes":null,"label":"Rhode Island","validFor":[227],"value":"RI"},{"attributes":null,"label":"Rieti","validFor":[106],"value":"RI"},{"attributes":null,"label":"Rimini","validFor":[106],"value":"RN"},{"attributes":null,"label":"Rio de Janeiro","validFor":[30],"value":"RJ"},{"attributes":null,"label":"Rio Grande do Norte","validFor":[30],"value":"RN"},{"attributes":null,"label":"Rio Grande do Sul","validFor":[30],"value":"RS"},{"attributes":null,"label":"Rome","validFor":[106],"value":"RM"},{"attributes":null,"label":"Rondônia","validFor":[30],"value":"RO"},{"attributes":null,"label":"Roraima","validFor":[30],"value":"RR"},{"attributes":null,"label":"Roscommon","validFor":[103],"value":"RN"},{"attributes":null,"label":"Rovigo","validFor":[106],"value":"RO"},{"attributes":null,"label":"Salerno","validFor":[106],"value":"SA"},{"attributes":null,"label":"San Luis Potosí","validFor":[139],"value":"SL"},{"attributes":null,"label":"Santa Catarina","validFor":[30],"value":"SC"},{"attributes":null,"label":"São Paulo","validFor":[30],"value":"SP"},{"attributes":null,"label":"Saskatchewan","validFor":[38],"value":"SK"},{"attributes":null,"label":"Sassari","validFor":[106],"value":"SS"},{"attributes":null,"label":"Savona","validFor":[106],"value":"SV"},{"attributes":null,"label":"Sergipe","validFor":[30],"value":"SE"},{"attributes":null,"label":"Shaanxi","validFor":[44],"value":"61"},{"attributes":null,"label":"Shandong","validFor":[44],"value":"37"},{"attributes":null,"label":"Shanghai","validFor":[44],"value":"31"},{"attributes":null,"label":"Shanxi","validFor":[44],"value":"14"},{"attributes":null,"label":"Sichuan","validFor":[44],"value":"51"},{"attributes":null,"label":"Siena","validFor":[106],"value":"SI"},{"attributes":null,"label":"Sikkim","validFor":[99],"value":"SK"},{"attributes":null,"label":"Sinaloa","validFor":[139],"value":"SI"},{"attributes":null,"label":"Sligo","validFor":[103],"value":"SO"},{"attributes":null,"label":"Sondrio","validFor":[106],"value":"SO"},{"attributes":null,"label":"Sonora","validFor":[139],"value":"SO"},{"attributes":null,"label":"South Australia","validFor":[12],"value":"SA"},{"attributes":null,"label":"South Carolina","validFor":[227],"value":"SC"},{"attributes":null,"label":"South Dakota","validFor":[227],"value":"SD"},{"attributes":null,"label":"Syracuse","validFor":[106],"value":"SR"},{"attributes":null,"label":"Tabasco","validFor":[139],"value":"TB"},{"attributes":null,"label":"Taiwan","validFor":[44],"value":"71"},{"attributes":null,"label":"Tamaulipas","validFor":[139],"value":"TM"},{"attributes":null,"label":"Tamil Nadu","validFor":[99],"value":"TN"},{"attributes":null,"label":"Taranto","validFor":[106],"value":"TA"},{"attributes":null,"label":"Tasmania","validFor":[12],"value":"TAS"},{"attributes":null,"label":"Tennessee","validFor":[227],"value":"TN"},{"attributes":null,"label":"Teramo","validFor":[106],"value":"TE"},{"attributes":null,"label":"Terni","validFor":[106],"value":"TR"},{"attributes":null,"label":"Texas","validFor":[227],"value":"TX"},{"attributes":null,"label":"Tianjin","validFor":[44],"value":"12"},{"attributes":null,"label":"Tipperary","validFor":[103],"value":"TA"},{"attributes":null,"label":"Tlaxcala","validFor":[139],"value":"TL"},{"attributes":null,"label":"Tocantins","validFor":[30],"value":"TO"},{"attributes":null,"label":"Trapani","validFor":[106],"value":"TP"},{"attributes":null,"label":"Trento","validFor":[106],"value":"TN"},{"attributes":null,"label":"Treviso","validFor":[106],"value":"TV"},{"attributes":null,"label":"Trieste","validFor":[106],"value":"TS"},{"attributes":null,"label":"Tripura","validFor":[99],"value":"TR"},{"attributes":null,"label":"Turin","validFor":[106],"value":"TO"},{"attributes":null,"label":"Udine","validFor":[106],"value":"UD"},{"attributes":null,"label":"Utah","validFor":[227],"value":"UT"},{"attributes":null,"label":"Uttarakhand","validFor":[99],"value":"UT"},{"attributes":null,"label":"Uttar Pradesh","validFor":[99],"value":"UP"},{"attributes":null,"label":"Varese","validFor":[106],"value":"VA"},{"attributes":null,"label":"Venice","validFor":[106],"value":"VE"},{"attributes":null,"label":"Veracruz","validFor":[139],"value":"VE"},{"attributes":null,"label":"Verbano-Cusio-Ossola","validFor":[106],"value":"VB"},{"attributes":null,"label":"Vercelli","validFor":[106],"value":"VC"},{"attributes":null,"label":"Vermont","validFor":[227],"value":"VT"},{"attributes":null,"label":"Verona","validFor":[106],"value":"VR"},{"attributes":null,"label":"Vibo Valentia","validFor":[106],"value":"VV"},{"attributes":null,"label":"Vicenza","validFor":[106],"value":"VI"},{"attributes":null,"label":"Victoria","validFor":[12],"value":"VIC"},{"attributes":null,"label":"Virginia","validFor":[227],"value":"VA"},{"attributes":null,"label":"Viterbo","validFor":[106],"value":"VT"},{"attributes":null,"label":"Washington","validFor":[227],"value":"WA"},{"attributes":null,"label":"Waterford","validFor":[103],"value":"WD"},{"attributes":null,"label":"West Bengal","validFor":[99],"value":"WB"},{"attributes":null,"label":"Western Australia","validFor":[12],"value":"WA"},{"attributes":null,"label":"Westmeath","validFor":[103],"value":"WH"},{"attributes":null,"label":"West Virginia","validFor":[227],"value":"WV"},{"attributes":null,"label":"Wexford","validFor":[103],"value":"WX"},{"attributes":null,"label":"Wicklow","validFor":[103],"value":"WW"},{"attributes":null,"label":"Wisconsin","validFor":[227],"value":"WI"},{"attributes":null,"label":"Wyoming","validFor":[227],"value":"WY"},{"attributes":null,"label":"Xinjiang","validFor":[44],"value":"65"},{"attributes":null,"label":"Xizang","validFor":[44],"value":"54"},{"attributes":null,"label":"Yucatán","validFor":[139],"value":"YU"},{"attributes":null,"label":"Yukon Territories","validFor":[38],"value":"YT"},{"attributes":null,"label":"Yunnan","validFor":[44],"value":"53"},{"attributes":null,"label":"Zacatecas","validFor":[139],"value":"ZA"},{"attributes":null,"label":"Zhejiang","validFor":[44],"value":"33"}]},"GeocodeAccuracy":{"controllerValues":{},"defaultValue":null,"url":"/services/data/v42.0/ui-api/object-info/Account/picklist-values/012000000000000AAA/BillingGeocodeAccuracy","values":[{"attributes":null,"label":"Address","validFor":[],"value":"Address"},{"attributes":null,"label":"NearAddress","validFor":[],"value":"NearAddress"},{"attributes":null,"label":"Block","validFor":[],"value":"Block"},{"attributes":null,"label":"Street","validFor":[],"value":"Street"},{"attributes":null,"label":"ExtendedZip","validFor":[],"value":"ExtendedZip"},{"attributes":null,"label":"Zip","validFor":[],"value":"Zip"},{"attributes":null,"label":"Neighborhood","validFor":[],"value":"Neighborhood"},{"attributes":null,"label":"City","validFor":[],"value":"City"},{"attributes":null,"label":"County","validFor":[],"value":"County"},{"attributes":null,"label":"State","validFor":[],"value":"State"},{"attributes":null,"label":"Unknown","validFor":[],"value":"Unknown"}]}}};
var picklistRepresentation = {
  Bad_Guy__c: Bad_Guy__c,
  Everything__c: Everything__c,
  Lead: Lead
};

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
    updateable: true,
};

function getMockFieldInfo(apiName) {
    const result = mockFieldInfo;
    result.apiName = apiName;

    return result;
}

// returns a read-only version via a proxy
function getImmutable(obj) {
    const handler = {
        get: (target, key) => {
            const value = target[key];
            if (value && typeof value === 'object') {
                return getImmutable(value);
            }
            return value;
        },
        set: () => {
            return false;
        },
        deleteProperty: () => {
            return false;
        }
    };
    return new Proxy(obj, handler);
}

// makes a promise into an Observable, and copies + freezes the resolved value
function getImmutableObservable(promise) {
    return {
        subscribe: (config) => {
            promise.then(
                value => {
                    config.next(getImmutable(value));
                },
                config.error
            );
            return {
                unsubscribe: () => {}
            };
        }
    };
}

function generateWireAdapterMock(mockFn) {
    return (config) => {
        if (this && this.constructor.adapter) {
            return new this.constructor.adapter(config);
        }

        return mockFn(config);
    }
}

/**
 * @wire service exposure for ADS / UI API.
 * This is a simplified mock of the code in core.
 */
// gets a mock RecordUiRepresentation
function getMockRecordUi(recordId, optionalFields) {
    const record$$1 = store.records[recordId];
    if (!record$$1) {
        return Promise.reject(new Error(`record ${recordId} not found`));
    }
    return Promise.resolve(optionalFields ? mockWithOptionalFields(recordId, optionalFields) : store);
}

/**
 * Optional fields are fields that are only included if they're specified in the config.
 * They are not included in the standard record-ui payload.
 *
 * @param {*} recordId Record Id of the record we are mocking
 * @param {*} optionalFields Fully qualified (Entity.field) field names we want to include in the mock
 * @returns {*} a mock RecordUiRepresentation with optional fields
 */
function mockWithOptionalFields(recordId, optionalFields) {
    const ret = JSON.parse(JSON.stringify(store));

    if (optionalFields) {
        optionalFields.forEach(qualifiedField => {
            // IE11 doesn't support destructuring
            const tokenizedField = qualifiedField.split('.');
            const entity = tokenizedField[0];
            const field = tokenizedField[1]; // Mocking simple fields only

            // Mock the fieldInfo for the field if it doesn't exist
            const objectInfo = ret.objectInfos[entity];
            if (objectInfo && !objectInfo.fields[field]) {
                ret.objectInfos[entity].fields[field] = getMockFieldInfo(field);

                // Mock a value for the field if it doesn't exist on the specified record
                const record$$1 = ret.records[recordId];
                if (record$$1 && !record$$1.fields[field]) {
                    ret.records[recordId].fields[field] = {
                        displayValue: "mockOptionalDisplayValue",
                        value: "mockOptionalValue"
                    };
                }
            }
        });
    }

    return ret;
}

// gets a mock ObjectInfoRepresentation
function getMockObjectInfo(objectApiName) {
    const objectInfo = store.objectInfos[objectApiName];
    if (!objectInfo) {
        return Promise.reject(new Error(`objectInfo ${objectApiName} not found`));
    }
    return objectInfo;
}

// record defaults have the same layout and object info as
// a record ui, but with a single record that has no id, just values
function getMockRecordCreateDefaults() {
    const resp = JSON.parse(JSON.stringify(store));
    delete resp.records;
    resp.record = defaults.record;
    return Promise.resolve(resp);
}

// returns a RecordRepresentation
function getRecordWithFields(recordId /* , fields */) {
    return getMockRecordUi(recordId)
        .then(recordUi => recordUi.records[recordId]);
}

function packageMockPicklistData(objectApiName, recordTypeId, fieldApiName) {
    const object = picklistRepresentation[objectApiName];

    if (!object) {
        return Promise.reject(
            new Error(`no picklist values found for object ${objectApiName}`)
        );
    } else if (!object[recordTypeId]) {
        return Promise.reject(
            new Error(
                `no picklist values found for record type ${recordTypeId} of object ${objectApiName}`
            )
        );
    } else if (!object[recordTypeId][fieldApiName]) {
        return Promise.reject(
            new Error(
                `picklist values for ${fieldApiName} not found on object ${objectApiName}`
            )
        );
    }

    return Promise.resolve(object[recordTypeId][fieldApiName]);
}

function packageMockPicklistDataByRecordType(objectApiName, recordTypeId) {
    const object = picklistRepresentation[objectApiName];

    if (!object) {
        return Promise.reject(
            new Error(`no picklist values found for object ${objectApiName}`)
        );
    } else if (!object[recordTypeId]) {
        return Promise.reject(
            new Error(
                `no picklist values found for record type ${recordTypeId} of object ${objectApiName}`
            )
        );
    }

    return Promise.resolve(object[recordTypeId]);
}

function getMockPicklistValues(objectApiName, recordTypeId, fieldApiName) {
    let ret;
    if (picklistRepresentation) {
        ret = packageMockPicklistData(
            objectApiName,
            recordTypeId,
            fieldApiName
        );
    }

    return ret;
}

function getMockPicklistValuesByRecordType(objectApiName, recordTypeId) {
    let ret;
    if (picklistRepresentation) {
        ret = packageMockPicklistDataByRecordType(
            objectApiName,
            recordTypeId
        );
    }

    return ret;
}

/**
 * Services @wire(getRecord) requests.
 * @param {Object} config service config bag.
 * @returns {Observable} an observable for the record.
 */
const getRecord = generateWireAdapterMock(function(config) {
    if (!config || !config.recordId || !config.fields) {
        return undefined;
    }
    if (config.layoutTypes || config.modes) {
        throw new Error("@wire(getRecord) with layout or mode is not implemented yet. Follow W-4045854.");
    }
    return getImmutableObservable(getRecordWithFields(config.recordId, config.fields));
});

/**
 * Services @wire(getObjectInfo) requests.
 * @param {Object} config service config bag.
 * @returns {Observable} an observable for the object info.
 */
const getObjectInfo = generateWireAdapterMock(function(config) {
    if (!config || !config.objectApiName) {
        return undefined;
    }
    return getImmutableObservable(getMockObjectInfo(config.objectApiName));
});

/**
 * Services @wire(getPicklistValues) requests.
 * @param {Object} config service config bag.
 * @returns {Observable} an observable for the object info.
 */
const getPicklistValues = generateWireAdapterMock(function(config) {
    if (!config || !config.objectApiName || !config.recordTypeId || !config.fieldApiName) {
        return undefined;
    }
    return getImmutableObservable(
        getMockPicklistValues(
            config.objectApiName,
            config.recordTypeId,
            config.fieldApiName
        )
    );
});

/**
 * Services @wire(getPicklistValues) requests.
 * @param {Object} config service config bag.
 * @returns {Observable} an observable for the object info.
 */
const getPicklistValuesByRecordType = generateWireAdapterMock(function(config) {
    if (!config || !config.objectApiName || !config.recordTypeId) {
        return undefined;
    }
    return getImmutableObservable(
        getMockPicklistValuesByRecordType(
            config.objectApiName,
            config.recordTypeId
        )
    );
});

/**
 * Services @wire(getRecordUi) requests
 * @param {Object} config service config bag.
 * @return {Observable} an observable for the recordUis.
 */
const getRecordUi = generateWireAdapterMock(function(config) {
    if (!config || !config.recordIds || !config.layoutTypes || !config.modes) {
        return undefined;
    }
    return getImmutableObservable(getMockRecordUi(config.recordIds[0], config.optionalFields));
});

/**
 * Services @wire(getRecordCreateDefaults) requests.
 * @param {Object} config service config bag.
 * @returns {Observable} an observable for the recordDefaults.
 */
const getRecordCreateDefaults = generateWireAdapterMock(function(config) {
    if (!config || !config.objectApiName) {
        return undefined;
    }
    return getImmutableObservable(getMockRecordCreateDefaults(config.objectApiName));
});

/**
 * Sample Global Actions
 * - the actions in the Global Actions menu
 * http://yungcheng-ltm2.internal.salesforce.com:6109/services/data/v41.0/ui-api/actions/global
 */
const ACTIONS_GLOBAL = {
    "actions" : {
        "Global" : {
            "actions" : [{
                "actionListContext" : "Dockable",
                "actionTarget" : "/services/data/v41.0/quickActions/NewEvent/describe",
                "actionTargetType" : "Describe",
                "apiName" : "NewEvent",
                "externalId" : "00Dxx0000001gGI:Global::Dockable:Desktop:09Dxx0000000070",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_event_120.png",
                "id" : "0JVxx0000000241GAA",
                "isMassAction" : "false",
                "label" : "New Event",
                "primaryColor" : "EB7092",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : null,
                "sourceObject" : "Global",
                "subtype" : "Create",
                "targetObject" : "Event",
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Dockable",
                "actionTarget" : "/services/data/v41.0/quickActions/NewTask/describe",
                "actionTargetType" : "Describe",
                "apiName" : "NewTask",
                "externalId" : "00Dxx0000001gGI:Global::Dockable:Desktop:09Dxx000000006y",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_task_120.png",
                "id" : "0JVxx0000000242GAA",
                "isMassAction" : "false",
                "label" : "New Task",
                "primaryColor" : "4BC076",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : null,
                "sourceObject" : "Global",
                "subtype" : "Create",
                "targetObject" : "Task",
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Dockable",
                "actionTarget" : "/services/data/v41.0/quickActions/NewContact/describe",
                "actionTargetType" : "Describe",
                "apiName" : "NewContact",
                "externalId" : "00Dxx0000001gGI:Global::Dockable:Desktop:09Dxx000000006b",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_contact_120.png",
                "id" : "0JVxx0000000243GAA",
                "isMassAction" : "false",
                "label" : "New Contact",
                "primaryColor" : "A094ED",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : null,
                "sourceObject" : "Global",
                "subtype" : "Create",
                "targetObject" : "Contact",
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Dockable",
                "actionTarget" : "/services/data/v41.0/quickActions/LogACall/describe",
                "actionTargetType" : "Describe",
                "apiName" : "LogACall",
                "externalId" : "00Dxx0000001gGI:Global::Dockable:Desktop:09Dxx000000006z",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/log_a_call_120.png",
                "id" : "0JVxx0000000244GAA",
                "isMassAction" : "false",
                "label" : "Log a Call",
                "primaryColor" : "48C3CC",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : null,
                "sourceObject" : "Global",
                "subtype" : "LogACall",
                "targetObject" : "Task",
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Dockable",
                "actionTarget" : "/services/data/v41.0/quickActions/NewOpportunity/describe",
                "actionTargetType" : "Describe",
                "apiName" : "NewOpportunity",
                "externalId" : "00Dxx0000001gGI:Global::Dockable:Desktop:09Dxx000000006d",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_opportunity_120.png",
                "id" : "0JVxx0000000245GAA",
                "isMassAction" : "false",
                "label" : "New Opportunity",
                "primaryColor" : "FCB95B",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : null,
                "sourceObject" : "Global",
                "subtype" : "Create",
                "targetObject" : "Opportunity",
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Dockable",
                "actionTarget" : "/services/data/v41.0/quickActions/NewCase/describe",
                "actionTargetType" : "Describe",
                "apiName" : "NewCase",
                "externalId" : "00Dxx0000001gGI:Global::Dockable:Desktop:09Dxx000000006s",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_case_120.png",
                "id" : "0JVxx0000000246GAA",
                "isMassAction" : "false",
                "label" : "New Case",
                "primaryColor" : "F2CF5B",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : null,
                "sourceObject" : "Global",
                "subtype" : "Create",
                "targetObject" : "Case",
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Dockable",
                "actionTarget" : "/services/data/v41.0/quickActions/NewLead/describe",
                "actionTargetType" : "Describe",
                "apiName" : "NewLead",
                "externalId" : "00Dxx0000001gGI:Global::Dockable:Desktop:09Dxx000000006c",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_lead_120.png",
                "id" : "0JVxx0000000247GAA",
                "isMassAction" : "false",
                "label" : "New Lead",
                "primaryColor" : "F88962",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : null,
                "sourceObject" : "Global",
                "subtype" : "Create",
                "targetObject" : "Lead",
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Dockable",
                "actionTarget" : null,
                "actionTargetType" : null,
                "apiName" : "FeedItem.ContentNote",
                "externalId" : "00Dxx0000001gGI:Global::Dockable:Desktop:FeedItem.ContentNote",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_note_120.png",
                "id" : "0JVxx0000000248GAA",
                "isMassAction" : "false",
                "label" : "New Note",
                "primaryColor" : "E6D478",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : null,
                "sourceObject" : "Global",
                "subtype" : "Post",
                "targetObject" : null,
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Dockable",
                "actionTarget" : "/services/data/v41.0/quickActions/SendEmail/describe",
                "actionTargetType" : "Describe",
                "apiName" : "SendEmail",
                "externalId" : "00Dxx0000001gGI:Global::Dockable:Desktop:09Dxx0000000071",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/email_120.png",
                "id" : "0JVxx0000000249GAA",
                "isMassAction" : "false",
                "label" : "Email",
                "primaryColor" : "95AEC5",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : null,
                "sourceObject" : "Global",
                "subtype" : "SendEmail",
                "targetObject" : "OutgoingEmail",
                "targetUrl" : null,
                "type" : "QuickAction"
            }],
            "links" : [],
            "url" : "/services/data/v41.0/ui-api/actions/global"
        }
    },
    "url" : "/services/data/v41.0/ui-api/actions/global"
};

/**
 * Sample List View Chart Actions
 * - the chart actions on list views
 * http://yungcheng-ltm2.internal.salesforce.com:6109/services/data/v41.0/ui-api/actions/list-view-chart/ListViewChartInstance
 */
const ACTIONS_LISTVIEWCHARTINSTANCE = {
    "actions" : {
        "ListViewChartInstance" : {
            "actions" : [{
                "actionListContext" : "ObjectHomeChart",
                "actionTarget" : null,
                "actionTargetType" : null,
                "apiName" : "NewObjectHomeChartAction",
                "externalId" : "00Dxx0000001gGI:ListViewChartInstance::ObjectHomeChart:Desktop:StandardButton:NewObjectHomeChartAction",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_custom19_120.png",
                "id" : "0JVxx0000000308GAA",
                "isMassAction" : "false",
                "label" : "New Chart",
                "primaryColor" : null,
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "ListViewChartInstance",
                "subtype" : null,
                "targetObject" : "ListViewChart",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "ObjectHomeChart",
                "actionTarget" : null,
                "actionTargetType" : null,
                "apiName" : "EditObjectHomeChartAction",
                "externalId" : "00Dxx0000001gGI:ListViewChartInstance::ObjectHomeChart:Desktop:StandardButton:EditObjectHomeChartAction",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_custom19_120.png",
                "id" : "0JVxx0000000309GAA",
                "isMassAction" : "false",
                "label" : "Edit Chart",
                "primaryColor" : null,
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "ListViewChartInstance",
                "subtype" : null,
                "targetObject" : "ListViewChart",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "ObjectHomeChart",
                "actionTarget" : null,
                "actionTargetType" : null,
                "apiName" : "DeleteObjectHomeChartAction",
                "externalId" : "00Dxx0000001gGI:ListViewChartInstance::ObjectHomeChart:Desktop:StandardButton:DeleteObjectHomeChartAction",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_custom19_120.png",
                "id" : "0JVxx0000000310GAA",
                "isMassAction" : "false",
                "label" : "Delete Chart",
                "primaryColor" : null,
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "ListViewChartInstance",
                "subtype" : null,
                "targetObject" : "ListViewChart",
                "targetUrl" : null,
                "type" : "StandardButton"
            }],
            "links" : [],
            "url" : "/services/data/v41.0/ui-api/actions/list-view-chart/ListViewChartInstance"
        }
    },
    "url" : "/services/data/v41.0/ui-api/actions/list-view-chart/ListViewChartInstance"
};

/**
 * Sample List View Header Actions
 * - the header actions on list views
 * - listViewId (00Bxx0000024qHzEAI)
 * http://yungcheng-ltm2.internal.salesforce.com:6109/services/data/v41.0/ui-api/actions/list-view/00Bxx0000024qHzEAI
 */
const ACTIONS_LISTVIEW = {
    "actions" : {
        "00Bxx0000024qHzEAI" : {
            "actions" : [{
                "actionListContext" : "ListView",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "EditFilter",
                "externalId" : "00Dxx0000001gGI:00Bxx0000024qHzEAI::ListView:Desktop:StandardButton:EditFilter",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/filter_120.png",
                "id" : "0JVxx0000000286GAA",
                "isMassAction" : "false",
                "label" : "Filter",
                "primaryColor" : "54698d",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "00Bxx0000024qHzEAI",
                "subtype" : null,
                "targetObject" : "Campaign",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "ListView",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "ListSort",
                "externalId" : "00Dxx0000001gGI:00Bxx0000024qHzEAI::ListView:Desktop:StandardButton:ListSort",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/sort_120.png",
                "id" : "0JVxx0000000287GAA",
                "isMassAction" : "false",
                "label" : "Sort",
                "primaryColor" : "FAB9A5",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "00Bxx0000024qHzEAI",
                "subtype" : null,
                "targetObject" : "Campaign",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "ListView",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "New",
                "externalId" : "00Dxx0000001gGI:00Bxx0000024qHzEAI::ListView:Desktop:StandardButton:New",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_120.png",
                "id" : "0JVxx0000000288GAA",
                "isMassAction" : "false",
                "label" : "New",
                "primaryColor" : "33BCE7",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "00Bxx0000024qHzEAI",
                "subtype" : null,
                "targetObject" : "Campaign",
                "targetUrl" : null,
                "type" : "StandardButton"
            }],
            "links" : [],
            "url" : "/services/data/v41.0/ui-api/actions/list-view/00Bxx0000024qHzEAI"
        }
    },
    "url" : "/services/data/v41.0/ui-api/actions/list-view/00Bxx0000024qHzEAI"
};

/**
 * Sample List View Record Actions
 * - the record actions on list views
 * - recordId (001xx000003DGZnAAO)
 * http://yungcheng-ltm2.internal.salesforce.com:6109/services/data/v41.0/ui-api/actions/list-view-record/001xx000003DGZnAAO
 */
const ACTIONS_LISTVIEWRECORD = {
    "actions" : {
        "001xx000003DGZnAAO" : {
            "actions" : [{
                "actionListContext" : "ListViewRecord",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "Edit",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::ListViewRecord:Desktop:StandardButton:Edit",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/edit_120.png",
                "id" : "0JVxx0000000306GAA",
                "isMassAction" : "false",
                "label" : "Edit",
                "primaryColor" : "1DCCBF",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : null,
                "targetObject" : "Account",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "ListViewRecord",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "Delete",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::ListViewRecord:Desktop:StandardButton:Delete",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/delete_120.png",
                "id" : "0JVxx0000000307GAA",
                "isMassAction" : "false",
                "label" : "Delete",
                "primaryColor" : "E6717C",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : null,
                "targetObject" : "Account",
                "targetUrl" : null,
                "type" : "StandardButton"
            }],
            "links" : [],
            "url" : "/services/data/v41.0/ui-api/actions/list-view-record/001xx000003DGZnAAO"
        }
    },
    "url" : "/services/data/v41.0/ui-api/actions/list-view-record/001xx000003DGZnAAO"
};

/**
 * Sample Lookup Field Actions
 * - the actions on lookup fields
 * - objectApiNames (Account)
 *
 * Use the url below if you have Bad_Guy__c and Weapon__c set up in your org
 * /services/data/v41.0/ui-api/actions/lookup/Bad_Guy__c,Weapon__c
 */
const ACTIONS_LOOKUP = {
    "actions" : {
        "Weapon__c" : {
            "actions" : [ {
                "actionListContext" : "Lookup",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "CreateFromLookup",
                "externalId" : "00DR00000009G5b:Weapon__c::Lookup:Desktop:StandardButton:CreateFromLookup",
                "iconUrl" : "https://mobile1.t.salesforce.com/img/icon/t4v35/action/new_120.png",
                "id" : "0JVR00000010272OAA",
                "isMassAction" : "false",
                "label" : "New",
                "primaryColor" : "33BCE7",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "Weapon__c",
                "subtype" : null,
                "targetObject" : "Weapon__c",
                "targetUrl" : null,
                "type" : "StandardButton"
            } ],
            "links" : [ ],
            "url" : "/services/data/v41.0/ui-api/actions/lookup/Weapon__c"
        },
        "Bad_Guy__c" : {
            "actions" : [ {
                "actionListContext" : "Lookup",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "CreateFromLookup",
                "externalId" : "00DR00000009G5b:Bad_Guy__c::Lookup:Desktop:StandardButton:CreateFromLookup",
                "iconUrl" : "https://mobile1.t.salesforce.com/img/icon/t4v35/action/new_120.png",
                "id" : "0JVR00000010273OAA",
                "isMassAction" : "false",
                "label" : "New",
                "primaryColor" : "33BCE7",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "Bad_Guy__c",
                "subtype" : null,
                "targetObject" : "Bad_Guy__c",
                "targetUrl" : null,
                "type" : "StandardButton"
            } ],
            "links" : [ ],
            "url" : "/services/data/v41.0/ui-api/actions/lookup/Bad_Guy__c"
        }
    },
    "url" : "/services/data/v41.0/ui-api/actions/lookup/Bad_Guy__c,Weapon__c,Group"
};

/**
 * Sample MRU List View Actions
 * - the header actions on the most recently used (MRU) list view for objects
 * - objectApiNames (Account)
 * http://yungcheng-ltm2.internal.salesforce.com:6109/services/data/v41.0/ui-api/actions/mru-list/Account
 */
const ACTIONS_MRULIST = {
    "actions" : {
        "Account" : {
            "actions" : [{
                "actionListContext" : "MruList",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "New",
                "externalId" : "00Dxx0000001gGI:Account::MruList:Desktop:StandardButton:New",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_120.png",
                "id" : "0JVxx0000000312GAA",
                "isMassAction" : "false",
                "label" : "New",
                "primaryColor" : "33BCE7",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "Account",
                "subtype" : null,
                "targetObject" : "Account",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "MruList",
                "actionTarget" : null,
                "actionTargetType" : null,
                "apiName" : "MruListSort",
                "externalId" : "00Dxx0000001gGI:Account::MruList:Desktop:StandardButton:MruListSort",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/sort_120.png",
                "id" : "0JVxx0000000313GAA",
                "isMassAction" : "false",
                "label" : "Sort",
                "primaryColor" : "FAB9A5",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "Account",
                "subtype" : null,
                "targetObject" : "Account",
                "targetUrl" : null,
                "type" : "StandardButton"
            }],
            "links" : [],
            "url" : "/services/data/v41.0/ui-api/actions/mru-list/Account"
        }
    },
    "url" : "/services/data/v41.0/ui-api/actions/mru-list/Account"
};

/**
 * Sample Record Detail Page Actions
 * - the actions on record detail pages
 * - recordId (001xx000003DGZnAAO)
 * http://yungcheng-ltm2.internal.salesforce.com:6109/services/data/v41.0/ui-api/actions/record/001xx000003DGZnAAO
 */
const ACTIONS_RECORDDETAIL = {
    "actions" : {
        "001xx000003DGZnAAO" : {
            "actions" : [{
                "actionListContext" : "Chatter",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "Follow",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::Chatter:Desktop:StandardButton:Follow",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/follow_120.png",
                "id" : "0JVxx0000000250GAA",
                "isMassAction" : "false",
                "label" : "Follow",
                "primaryColor" : "31B9F8",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "SingleActionLinks",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : null,
                "targetObject" : "Account",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "Chatter",
                "actionTarget" : null,
                "actionTargetType" : null,
                "apiName" : "FollowInStream",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::Chatter:Desktop:StandardButton:FollowInStream",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/follow_120.png",
                "id" : "0JVxx0000000251GAA",
                "isMassAction" : "false",
                "label" : "Follow in Stream",
                "primaryColor" : "31B9F8",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "SingleActionLinks",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : null,
                "targetObject" : "Account",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "Record",
                "actionTarget" : "/services/data/v41.0/quickActions/NewTask/describe",
                "actionTargetType" : "Describe",
                "apiName" : "NewTask",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::Record:Desktop:09Dxx000000006y",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_task_120.png",
                "id" : "0JVxx0000000252GAA",
                "isMassAction" : "false",
                "label" : "New Task",
                "primaryColor" : "4BC076",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "ActivityComposer",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : "Create",
                "targetObject" : "Task",
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Record",
                "actionTarget" : "/services/data/v41.0/quickActions/NewEvent/describe",
                "actionTargetType" : "Describe",
                "apiName" : "NewEvent",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::Record:Desktop:09Dxx0000000070",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_event_120.png",
                "id" : "0JVxx0000000253GAA",
                "isMassAction" : "false",
                "label" : "New Event",
                "primaryColor" : "EB7092",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "ActivityComposer",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : "Create",
                "targetObject" : "Event",
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Record",
                "actionTarget" : null,
                "actionTargetType" : null,
                "apiName" : "FeedItem.TextPost",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::Record:Desktop:FeedItem.TextPost",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/share_post_120.png",
                "id" : "0JVxx0000000254GAA",
                "isMassAction" : "false",
                "label" : "Post",
                "primaryColor" : "65CAE4",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "CollaborateComposer",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : "Post",
                "targetObject" : null,
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Record",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "Edit",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::Record:Desktop:StandardButton:Edit",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/edit_120.png",
                "id" : "0JVxx0000000255GAA",
                "isMassAction" : "false",
                "label" : "Edit",
                "primaryColor" : "1DCCBF",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : null,
                "targetObject" : "Account",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "Record",
                "actionTarget" : null,
                "actionTargetType" : null,
                "apiName" : "FeedItem.ContentPost",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::Record:Desktop:FeedItem.ContentPost",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/share_file_120.png",
                "id" : "0JVxx0000000256GAA",
                "isMassAction" : "false",
                "label" : "File",
                "primaryColor" : "BAAC93",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : null,
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : "Post",
                "targetObject" : null,
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Record",
                "actionTarget" : "/services/data/v41.0/quickActions/SendEmail/describe",
                "actionTargetType" : "Describe",
                "apiName" : "SendEmail",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::Record:Desktop:09Dxx0000000071",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/email_120.png",
                "id" : "0JVxx0000000257GAA",
                "isMassAction" : "false",
                "label" : "Email",
                "primaryColor" : "95AEC5",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "ActivityComposer",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : "SendEmail",
                "targetObject" : "OutgoingEmail",
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Record",
                "actionTarget" : "/services/data/v41.0/quickActions/NewContact/describe",
                "actionTargetType" : "Describe",
                "apiName" : "NewContact",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::Record:Desktop:09Dxx000000006b",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_contact_120.png",
                "id" : "0JVxx0000000258GAA",
                "isMassAction" : "false",
                "label" : "New Contact",
                "primaryColor" : "A094ED",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : "Create",
                "targetObject" : "Contact",
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Record",
                "actionTarget" : "/services/data/v41.0/quickActions/NewCase/describe",
                "actionTargetType" : "Describe",
                "apiName" : "NewCase",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::Record:Desktop:09Dxx000000006s",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_case_120.png",
                "id" : "0JVxx0000000259GAA",
                "isMassAction" : "false",
                "label" : "New Case",
                "primaryColor" : "F2CF5B",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : "Create",
                "targetObject" : "Case",
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Record",
                "actionTarget" : "/services/data/v41.0/quickActions/LogACall/describe",
                "actionTargetType" : "Describe",
                "apiName" : "LogACall",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::Record:Desktop:09Dxx000000006z",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/log_a_call_120.png",
                "id" : "0JVxx0000000260GAA",
                "isMassAction" : "false",
                "label" : "Log a Call",
                "primaryColor" : "48C3CC",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "ActivityComposer",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : "LogACall",
                "targetObject" : "Task",
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Record",
                "actionTarget" : "/services/data/v41.0/quickActions/NewOpportunity/describe",
                "actionTargetType" : "Describe",
                "apiName" : "NewOpportunity",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::Record:Desktop:09Dxx000000006d",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_opportunity_120.png",
                "id" : "0JVxx0000000261GAA",
                "isMassAction" : "false",
                "label" : "New Opportunity",
                "primaryColor" : "FCB95B",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : "Create",
                "targetObject" : "Opportunity",
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Record",
                "actionTarget" : null,
                "actionTargetType" : null,
                "apiName" : "FeedItem.ContentNote",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::Record:Desktop:FeedItem.ContentNote",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_note_120.png",
                "id" : "0JVxx0000000262GAA",
                "isMassAction" : "false",
                "label" : "New Note",
                "primaryColor" : "E6D478",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : "Post",
                "targetObject" : null,
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Record",
                "actionTarget" : null,
                "actionTargetType" : null,
                "apiName" : "FeedItem.RypplePost",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::Record:Desktop:FeedItem.RypplePost",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/share_thanks_120.png",
                "id" : "0JVxx0000000263GAA",
                "isMassAction" : "false",
                "label" : "Thanks",
                "primaryColor" : "E9696E",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : null,
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : "Post",
                "targetObject" : null,
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Record",
                "actionTarget" : null,
                "actionTargetType" : null,
                "apiName" : "FeedItem.LinkPost",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::Record:Desktop:FeedItem.LinkPost",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/share_link_120.png",
                "id" : "0JVxx0000000264GAA",
                "isMassAction" : "false",
                "label" : "Link",
                "primaryColor" : "7A9AE6",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : null,
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : "Post",
                "targetObject" : null,
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Record",
                "actionTarget" : null,
                "actionTargetType" : null,
                "apiName" : "FeedItem.PollPost",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::Record:Desktop:FeedItem.PollPost",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/share_poll_120.png",
                "id" : "0JVxx0000000265GAA",
                "isMassAction" : "false",
                "label" : "Poll",
                "primaryColor" : "699BE1",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "CollaborateComposer",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : "Post",
                "targetObject" : null,
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Record",
                "actionTarget" : null,
                "actionTargetType" : null,
                "apiName" : "FeedItem.QuestionPost",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::Record:Desktop:FeedItem.QuestionPost",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/question_post_action_120.png",
                "id" : "0JVxx0000000266GAA",
                "isMassAction" : "false",
                "label" : "Question",
                "primaryColor" : "32AF5C",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "CollaborateComposer",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : "Post",
                "targetObject" : null,
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Record",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "ChangeOwnerOne",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::Record:Desktop:StandardButton:ChangeOwnerOne",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/change_owner_120.png",
                "id" : "0JVxx0000000267GAA",
                "isMassAction" : "false",
                "label" : "Change Owner",
                "primaryColor" : "0070d2",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : null,
                "targetObject" : "Account",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "Record",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "Delete",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::Record:Desktop:StandardButton:Delete",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/delete_120.png",
                "id" : "0JVxx0000000268GAA",
                "isMassAction" : "false",
                "label" : "Delete",
                "primaryColor" : "E6717C",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : null,
                "targetObject" : "Account",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "Record",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "AccountHierarchy",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::Record:Desktop:StandardButton:AccountHierarchy",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_custom19_120.png",
                "id" : "0JVxx0000000269GAA",
                "isMassAction" : "false",
                "label" : "View Account Hierarchy",
                "primaryColor" : null,
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : null,
                "targetObject" : "Account",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "Record",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "Share",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::Record:Desktop:StandardButton:Share",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_custom19_120.png",
                "id" : "0JVxx0000000270GAA",
                "isMassAction" : "false",
                "label" : "Sharing",
                "primaryColor" : null,
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : null,
                "targetObject" : "Account",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "Record",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "SendEmail",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::Record:Desktop:StandardButton:SendEmail",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/email_120.png",
                "id" : "0JVxx0000000271GAA",
                "isMassAction" : "false",
                "label" : "Send an Email",
                "primaryColor" : "95AEC5",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "ActivityComposer",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : null,
                "targetObject" : "EmailMessage",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "Record",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "XClean",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::Record:Desktop:StandardButton:XClean",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_custom19_120.png",
                "id" : "0JVxx0000000272GAA",
                "isMassAction" : "false",
                "label" : "Check Integration Status",
                "primaryColor" : null,
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : null,
                "targetObject" : "Account",
                "targetUrl" : null,
                "type" : "StandardButton"
            }],
            "links" : ["/services/data/v41.0/ui-api/actions/record/001xx000003DGZnAAO/record-edit", "/services/data/v41.0/ui-api/actions/record/001xx000003DGZnAAO/related-list", "/services/data/v41.0/ui-api/actions/record/001xx000003DGZnAAO/related-list-record/${relatedRecordId}"],
            "url" : "/services/data/v41.0/ui-api/actions/record/001xx000003DGZnAAO"
        }
    },
    "url" : "/services/data/v41.0/ui-api/actions/record/001xx000003DGZnAAO"
};

/**
 * Sample Record Edit Page Actions
 * - the actions on a record edit page
 * - recordId (001xx000003DGZnAAO)
 * http://yungcheng-ltm2.internal.salesforce.com:6109/services/data/v41.0/ui-api/actions/record/001xx000003DGZnAAO/record-edit
 */
const ACTIONS_RECORDEDIT = {
    "actions" : {
        "001xx000003DGZnAAO" : {
            "actions" : [{
                "actionListContext" : "RecordEdit",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "SaveEdit",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::RecordEdit:Desktop:StandardButton:SaveEdit",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_custom19_120.png",
                "id" : "0JVxx0000000273GAA",
                "isMassAction" : "false",
                "label" : "Save",
                "primaryColor" : null,
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : null,
                "targetObject" : "Account",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "RecordEdit",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "SaveAndNew",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::RecordEdit:Desktop:StandardButton:SaveAndNew",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_custom19_120.png",
                "id" : "0JVxx0000000274GAA",
                "isMassAction" : "false",
                "label" : "Save &amp; New",
                "primaryColor" : null,
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : null,
                "targetObject" : "Account",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "RecordEdit",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "CancelEdit",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::RecordEdit:Desktop:StandardButton:CancelEdit",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_custom19_120.png",
                "id" : "0JVxx0000000275GAA",
                "isMassAction" : "false",
                "label" : "Cancel",
                "primaryColor" : null,
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : null,
                "targetObject" : "Account",
                "targetUrl" : null,
                "type" : "StandardButton"
            }],
            "links" : [],
            "url" : "/services/data/v41.0/ui-api/actions/record/001xx000003DGZnAAO/record-edit"
        }
    },
    "url" : "/services/data/v41.0/ui-api/actions/record/001xx000003DGZnAAO/record-edit"
};

/**
 * Sample Related List Actions
 * - the actions on related lists on a record detail page
 * - recordId (001xx000003DGZnAAO)
 * http://yungcheng-ltm2.internal.salesforce.com:6109/services/data/v41.0/ui-api/actions/record/001xx000003DGZnAAO/related-list
 */
const ACTIONS_RELATEDLIST = {
    "actions" : {
        "001xx000003DGZnAAO" : {
            "actions" : [{
                "actionListContext" : "RelatedList",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "NewTask",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::RelatedList:Desktop:StandardButton:NewTask",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_task_120.png",
                "id" : "0JVxx0000000276GAA",
                "isMassAction" : "false",
                "label" : "New Task",
                "primaryColor" : "4BC076",
                "relatedListRecordId" : null,
                "relatedSourceObject" : "OpenActivities",
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : null,
                "targetObject" : "Task",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "RelatedList",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "NewEvent",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::RelatedList:Desktop:StandardButton:NewEvent",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_event_120.png",
                "id" : "0JVxx0000000277GAA",
                "isMassAction" : "false",
                "label" : "New Event",
                "primaryColor" : "EB7092",
                "relatedListRecordId" : null,
                "relatedSourceObject" : "OpenActivities",
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : null,
                "targetObject" : "Event",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "RelatedList",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "NewContact",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::RelatedList:Desktop:StandardButton:NewContact",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_contact_120.png",
                "id" : "0JVxx0000000278GAA",
                "isMassAction" : "false",
                "label" : "New",
                "primaryColor" : "A094ED",
                "relatedListRecordId" : null,
                "relatedSourceObject" : "Contacts",
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : null,
                "targetObject" : "Contact",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "RelatedList",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "Merge",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::RelatedList:Desktop:StandardButton:Merge",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_custom19_120.png",
                "id" : "0JVxx0000000279GAA",
                "isMassAction" : "false",
                "label" : "Merge Contacts",
                "primaryColor" : null,
                "relatedListRecordId" : null,
                "relatedSourceObject" : "Contacts",
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : null,
                "targetObject" : "Contact",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "RelatedList",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "MassAddToCampaign",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::RelatedList:Desktop:StandardButton:MassAddToCampaign",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_custom19_120.png",
                "id" : "0JVxx0000000280GAA",
                "isMassAction" : "true",
                "label" : "Add to Campaign",
                "primaryColor" : null,
                "relatedListRecordId" : null,
                "relatedSourceObject" : "Contacts",
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : null,
                "targetObject" : "CampaignMember",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "RelatedList",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "LogCall",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::RelatedList:Desktop:StandardButton:LogCall",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/standard/log_a_call_120.png",
                "id" : "0JVxx0000000281GAA",
                "isMassAction" : "false",
                "label" : "Log a Call",
                "primaryColor" : "48C3CC",
                "relatedListRecordId" : null,
                "relatedSourceObject" : "ActivityHistories",
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : null,
                "targetObject" : "Task",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "RelatedList",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "SendEmail",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::RelatedList:Desktop:StandardButton:SendEmail",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/email_120.png",
                "id" : "0JVxx0000000282GAA",
                "isMassAction" : "false",
                "label" : "Send an Email",
                "primaryColor" : "95AEC5",
                "relatedListRecordId" : null,
                "relatedSourceObject" : "ActivityHistories",
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : null,
                "targetObject" : "EmailMessage",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "RelatedList",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "New",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::RelatedList:Desktop:StandardButton:New",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_opportunity_120.png",
                "id" : "0JVxx0000000283GAA",
                "isMassAction" : "false",
                "label" : "New",
                "primaryColor" : "FCB95B",
                "relatedListRecordId" : null,
                "relatedSourceObject" : "Opportunities",
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : null,
                "targetObject" : "Opportunity",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "RelatedList",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "NewCase",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::RelatedList:Desktop:StandardButton:NewCase",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_case_120.png",
                "id" : "0JVxx0000000284GAA",
                "isMassAction" : "false",
                "label" : "New",
                "primaryColor" : "F2CF5B",
                "relatedListRecordId" : null,
                "relatedSourceObject" : "Cases",
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : null,
                "targetObject" : "Case",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "RelatedList",
                "actionTarget" : null,
                "actionTargetType" : null,
                "apiName" : "AttachFileFromDevice",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::RelatedList:Desktop:StandardButton:AttachFileFromDevice",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_120.png",
                "id" : "0JVxx0000000285GAA",
                "isMassAction" : "false",
                "label" : "Upload Files",
                "primaryColor" : "33BCE7",
                "relatedListRecordId" : null,
                "relatedSourceObject" : "CombinedAttachments",
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : null,
                "targetObject" : "CombinedAttachment",
                "targetUrl" : null,
                "type" : "StandardButton"
            }],
            "links" : [],
            "url" : "/services/data/v41.0/ui-api/actions/record/001xx000003DGZnAAO/related-list"
        }
    },
    "url" : "/services/data/v41.0/ui-api/actions/record/001xx000003DGZnAAO/related-list"
};

/**
 * Sample Related List Record Actions
 * - the actions on related list record
 * - recordId (001xx000003DGZnAAO)
 * - relatedRecordId (003xx000004TmERAA0)
 * http://yungcheng-ltm2.internal.salesforce.com:6109/services/data/v41.0/ui-api/actions/record/001xx000003DGZnAAO/related-list-record/003xx000004TmERAA0
 */
const ACTIONS_RELATEDLISTRECORD = {
    "actions" : {
        "001xx000003DGZnAAO" : {
            "actions" : [{
                "actionListContext" : "RelatedListRecord",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "Edit",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::RelatedListRecord:Desktop:StandardButton:Edit",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/edit_120.png",
                "id" : "0JVxx0000000380GAA",
                "isMassAction" : "false",
                "label" : "Edit",
                "primaryColor" : "1DCCBF",
                "relatedListRecordId" : "003xx000004TmERAA0",
                "relatedSourceObject" : "Contacts",
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : null,
                "targetObject" : "Contact",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "RelatedListRecord",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "Delete",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::RelatedListRecord:Desktop:StandardButton:Delete",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/delete_120.png",
                "id" : "0JVxx0000000381GAA",
                "isMassAction" : "false",
                "label" : "Delete",
                "primaryColor" : "E6717C",
                "relatedListRecordId" : "003xx000004TmERAA0",
                "relatedSourceObject" : "Contacts",
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : null,
                "targetObject" : "Contact",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "RelatedListRecord",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "AddCampaign",
                "externalId" : "00Dxx0000001gGI:001xx000003DGZnAAO::RelatedListRecord:Desktop:StandardButton:AddCampaign",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_campaign_120.png",
                "id" : "0JVxx0000000382GAA",
                "isMassAction" : "false",
                "label" : "Add to Campaign",
                "primaryColor" : "f49756",
                "relatedListRecordId" : "003xx000004TmERAA0",
                "relatedSourceObject" : "Contacts",
                "section" : "Page",
                "sourceObject" : "001xx000003DGZnAAO",
                "subtype" : null,
                "targetObject" : "CampaignMember",
                "targetUrl" : null,
                "type" : "StandardButton"
            }],
            "links" : [],
            "url" : "/services/data/v41.0/ui-api/actions/record/001xx000003DGZnAAO/related-list-record/003xx000004TmERAA0"
        }
    },
    "url" : "/services/data/v41.0/ui-api/actions/record/001xx000003DGZnAAO/related-list-record/003xx000004TmERAA0"
};

/**
 * Sample Flexipage Actions
 * - the actions on a flexipage
 * - flexipageName (Opportunity)
 * http://yungcheng-ltm2.internal.salesforce.com:6109/services/data/v41.0/ui-api/actions/flexipage/Opportunity
 */
const ACTIONS_FLEXIPAGE = {
    "actions" : {
        "Opportunity" : {
            "actions" : [{
                "actionListContext" : "Flexipage",
                "actionTarget" : "/services/data/v41.0/quickActions/LogACall/describe",
                "actionTargetType" : "Describe",
                "apiName" : "LogACall",
                "externalId" : "00Dxx0000001gGI:Opportunity::Flexipage:Desktop:09Dxx000000006z",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/log_a_call_120.png",
                "id" : "0JVxx0000000174GAA",
                "isMassAction" : "false",
                "label" : "Log a Call",
                "primaryColor" : "48C3CC",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : null,
                "sourceObject" : "Opportunity",
                "subtype" : "LogACall",
                "targetObject" : "Task",
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Flexipage",
                "actionTarget" : "/services/data/v41.0/quickActions/NewTask/describe",
                "actionTargetType" : "Describe",
                "apiName" : "NewTask",
                "externalId" : "00Dxx0000001gGI:Opportunity::Flexipage:Desktop:09Dxx000000006y",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_task_120.png",
                "id" : "0JVxx0000000175GAA",
                "isMassAction" : "false",
                "label" : "New Task",
                "primaryColor" : "4BC076",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : null,
                "sourceObject" : "Opportunity",
                "subtype" : "Create",
                "targetObject" : "Task",
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Flexipage",
                "actionTarget" : "/services/data/v41.0/quickActions/NewEvent/describe",
                "actionTargetType" : "Describe",
                "apiName" : "NewEvent",
                "externalId" : "00Dxx0000001gGI:Opportunity::Flexipage:Desktop:09Dxx0000000070",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_event_120.png",
                "id" : "0JVxx0000000176GAA",
                "isMassAction" : "false",
                "label" : "New Event",
                "primaryColor" : "EB7092",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : null,
                "sourceObject" : "Opportunity",
                "subtype" : "Create",
                "targetObject" : "Event",
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Flexipage",
                "actionTarget" : null,
                "actionTargetType" : null,
                "apiName" : "FeedItem.TextPost",
                "externalId" : "00Dxx0000001gGI:Opportunity::Flexipage:Desktop:FeedItem.TextPost",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/share_post_120.png",
                "id" : "0JVxx0000000177GAA",
                "isMassAction" : "false",
                "label" : "Post",
                "primaryColor" : "65CAE4",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : null,
                "sourceObject" : "Opportunity",
                "subtype" : "Post",
                "targetObject" : null,
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Flexipage",
                "actionTarget" : null,
                "actionTargetType" : null,
                "apiName" : "FeedItem.ContentPost",
                "externalId" : "00Dxx0000001gGI:Opportunity::Flexipage:Desktop:FeedItem.ContentPost",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/share_file_120.png",
                "id" : "0JVxx0000000178GAA",
                "isMassAction" : "false",
                "label" : "File",
                "primaryColor" : "BAAC93",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : null,
                "sourceObject" : "Opportunity",
                "subtype" : "Post",
                "targetObject" : null,
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Flexipage",
                "actionTarget" : "/services/data/v41.0/quickActions/SendEmail/describe",
                "actionTargetType" : "Describe",
                "apiName" : "SendEmail",
                "externalId" : "00Dxx0000001gGI:Opportunity::Flexipage:Desktop:09Dxx0000000071",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/email_120.png",
                "id" : "0JVxx0000000179GAA",
                "isMassAction" : "false",
                "label" : "Email",
                "primaryColor" : "95AEC5",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : null,
                "sourceObject" : "Opportunity",
                "subtype" : "SendEmail",
                "targetObject" : "OutgoingEmail",
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Flexipage",
                "actionTarget" : "/services/data/v41.0/quickActions/NewCase/describe",
                "actionTargetType" : "Describe",
                "apiName" : "NewCase",
                "externalId" : "00Dxx0000001gGI:Opportunity::Flexipage:Desktop:09Dxx000000006s",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_case_120.png",
                "id" : "0JVxx0000000180GAA",
                "isMassAction" : "false",
                "label" : "New Case",
                "primaryColor" : "F2CF5B",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : null,
                "sourceObject" : "Opportunity",
                "subtype" : "Create",
                "targetObject" : "Case",
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Flexipage",
                "actionTarget" : null,
                "actionTargetType" : null,
                "apiName" : "FeedItem.ContentNote",
                "externalId" : "00Dxx0000001gGI:Opportunity::Flexipage:Desktop:FeedItem.ContentNote",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/new_note_120.png",
                "id" : "0JVxx0000000181GAA",
                "isMassAction" : "false",
                "label" : "New Note",
                "primaryColor" : "E6D478",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : null,
                "sourceObject" : "Opportunity",
                "subtype" : "Post",
                "targetObject" : null,
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Flexipage",
                "actionTarget" : null,
                "actionTargetType" : null,
                "apiName" : "FeedItem.RypplePost",
                "externalId" : "00Dxx0000001gGI:Opportunity::Flexipage:Desktop:FeedItem.RypplePost",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/share_thanks_120.png",
                "id" : "0JVxx0000000182GAA",
                "isMassAction" : "false",
                "label" : "Thanks",
                "primaryColor" : "E9696E",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : null,
                "sourceObject" : "Opportunity",
                "subtype" : "Post",
                "targetObject" : null,
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Flexipage",
                "actionTarget" : null,
                "actionTargetType" : null,
                "apiName" : "FeedItem.LinkPost",
                "externalId" : "00Dxx0000001gGI:Opportunity::Flexipage:Desktop:FeedItem.LinkPost",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/share_link_120.png",
                "id" : "0JVxx0000000183GAA",
                "isMassAction" : "false",
                "label" : "Link",
                "primaryColor" : "7A9AE6",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : null,
                "sourceObject" : "Opportunity",
                "subtype" : "Post",
                "targetObject" : null,
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Flexipage",
                "actionTarget" : null,
                "actionTargetType" : null,
                "apiName" : "FeedItem.PollPost",
                "externalId" : "00Dxx0000001gGI:Opportunity::Flexipage:Desktop:FeedItem.PollPost",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/share_poll_120.png",
                "id" : "0JVxx0000000184GAA",
                "isMassAction" : "false",
                "label" : "Poll",
                "primaryColor" : "699BE1",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : null,
                "sourceObject" : "Opportunity",
                "subtype" : "Post",
                "targetObject" : null,
                "targetUrl" : null,
                "type" : "QuickAction"
            }, {
                "actionListContext" : "Flexipage",
                "actionTarget" : null,
                "actionTargetType" : null,
                "apiName" : "FeedItem.QuestionPost",
                "externalId" : "00Dxx0000001gGI:Opportunity::Flexipage:Desktop:FeedItem.QuestionPost",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/question_post_action_120.png",
                "id" : "0JVxx0000000185GAA",
                "isMassAction" : "false",
                "label" : "Question",
                "primaryColor" : "32AF5C",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : null,
                "sourceObject" : "Opportunity",
                "subtype" : "Post",
                "targetObject" : null,
                "targetUrl" : null,
                "type" : "QuickAction"
            }],
            "links" : [],
            "url" : "/services/data/v41.0/ui-api/actions/flexipage/Opportunity"
        }
    },
    "url" : "/services/data/v41.0/ui-api/actions/flexipage/Opportunity"
};

/**
 * Sample Photo Actions
 * - the actions on a photo
 * - recordId (005xx000001SvmHAAS)
 * http://yungcheng-ltm2.internal.salesforce.com:6109/services/data/v41.0/ui-api/actions/photo/005xx000001SvmHAAS
 */
const ACTIONS_PHOTO = {
    "actions" : {
        "005xx000001SvmHAAS" : {
            "actions" : [{
                "actionListContext" : "Photo",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "ViewPhotoAction",
                "externalId" : "00Dxx0000001gGI:005xx000001SvmHAAS::Photo:Desktop:StandardButton:ViewPhotoAction",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/email_120.png",
                "id" : "0JVxx0000000069GAA",
                "isMassAction" : "false",
                "label" : "View Photo",
                "primaryColor" : "95AEC5",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "005xx000001SvmHAAS",
                "subtype" : null,
                "targetObject" : "User",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "Photo",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "UpdatePhotoAction",
                "externalId" : "00Dxx0000001gGI:005xx000001SvmHAAS::Photo:Desktop:StandardButton:UpdatePhotoAction",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/email_120.png",
                "id" : "0JVxx0000000070GAA",
                "isMassAction" : "false",
                "label" : "Update Photo",
                "primaryColor" : "95AEC5",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "005xx000001SvmHAAS",
                "subtype" : null,
                "targetObject" : "User",
                "targetUrl" : null,
                "type" : "StandardButton"
            }, {
                "actionListContext" : "Photo",
                "actionTarget" : null,
                "actionTargetType" : "Invoke",
                "apiName" : "DeletePhotoAction",
                "externalId" : "00Dxx0000001gGI:005xx000001SvmHAAS::Photo:Desktop:StandardButton:DeletePhotoAction",
                "iconUrl" : "http://yungcheng-ltm2:6109/img/icon/t4v35/action/email_120.png",
                "id" : "0JVxx0000000071GAA",
                "isMassAction" : "false",
                "label" : "Delete Photo",
                "primaryColor" : "95AEC5",
                "relatedListRecordId" : null,
                "relatedSourceObject" : null,
                "section" : "Page",
                "sourceObject" : "005xx000001SvmHAAS",
                "subtype" : null,
                "targetObject" : "User",
                "targetUrl" : null,
                "type" : "StandardButton"
            }],
            "links" : [],
            "url" : "/services/data/v41.0/ui-api/actions/photo/005xx000001SvmHAAS"
        }
    },
    "url" : "/services/data/v41.0/ui-api/actions/photo/005xx000001SvmHAAS"
};

/**
 * Sample Lookup Field Suggestions
 * - when a user edits a lookup field, use this resource to search for and display suggestions.
 * - objectApiName (Bad_Guy__c)
 * - fieldApiName (OwnerId)
 * - targetApiName (Group)
 * - request parameters (searchType=Recent&page=1&pageSize=25)
 * /services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?searchType=Recent&page=1&pageSize=5
 *
 * Supported query terms: q={'', 'g', 'gl', 'glo', 'glob', 'globa', 'global'}
 */
const LOOKUPS = {
    SUPPORTED_OBJECTS: ['Bad_Guy__c'],
    SUPPORTED_FIELDS: ['OwnerId'],
    SUPPORTED_TARGETS: ['Group'],
    SUPPORTED_TYPES: ['Recent', 'TypeAhead', 'Search'],
    SUPPORTED_PAGES: [1],
    SUPPORTED_PAGESIZES: [5],
    RESULTS: {
        "Bad_Guy__c:OwnerId:Group::Recent:1:5": {
            "count": 5,
            "currentPageUrl": "/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?searchType=Recent&page=1&pageSize=5",
            "nextPageUrl": "/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?searchType=Recent&page=2&pageSize=5",
            "previousPageUrl": null,
            "records": [
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "6e1d9fcd27a127f43fe4e32a80b6f6cb",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001xx000003DGZnAAO"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Acme"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001xx000003DGZnAAO",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "b310ed42bf4b0fe2dc144408a4adb5c5",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b65xIAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Media"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b65xIAA",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "3a0823c484b6413289f532a7f8778a2c",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b65zIAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "salesforce.com"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b65zIAA",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "8a2a01b7af8abea4528ba1444ddb5822",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002eb1HIAQ"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 2"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002eb1HIAQ",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "38a18064865740d2929384b75534ddae",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b662IAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 1"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b662IAA",
                    "recordTypeInfo": null
                }
            ]
        },
        "Bad_Guy__c:OwnerId:Group:g:Recent:1:5": {
            "count": 5,
            "currentPageUrl": "/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=g&searchType=Recent&page=1&pageSize=5",
            "nextPageUrl": "/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=g&searchType=Recent&page=2&pageSize=5",
            "previousPageUrl": null,
            "records": [
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "19809acdcf2beeb2fada4a3819b16a82",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001xx000003DGZnAAO"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Acme"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001xx000003DGZnAAO",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "c6aceea935f25f943b97be81cf6bdeb9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b65xIAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Media"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b65xIAA",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "d80775b81e3a35e1aff0e520033f7978",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b65zIAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "salesforce.com"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b65zIAA",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "e29bfc9293f4e5b5e0b13593751c26b9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002eb1HIAQ"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 2"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002eb1HIAQ",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "9d3bfe4777d2541dabd973ef6bd67d56",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b662IAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 1"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b662IAA",
                    "recordTypeInfo": null
                }
            ]
        },
        "Bad_Guy__c:OwnerId:Group:gl:Recent:1:5": {
            "count": 5,
            "currentPageUrl": "/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=gl&searchType=Recent&page=1&pageSize=5",
            "nextPageUrl": "/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=gl&searchType=Recent&page=2&pageSize=5",
            "previousPageUrl": null,
            "records": [
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "19809acdcf2beeb2fada4a3819b16a82",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001xx000003DGZnAAO"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Acme"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001xx000003DGZnAAO",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "c6aceea935f25f943b97be81cf6bdeb9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b65xIAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Media"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b65xIAA",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "d80775b81e3a35e1aff0e520033f7978",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b65zIAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "salesforce.com"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b65zIAA",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "e29bfc9293f4e5b5e0b13593751c26b9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002eb1HIAQ"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 2"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002eb1HIAQ",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "9d3bfe4777d2541dabd973ef6bd67d56",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b662IAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 1"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b662IAA",
                    "recordTypeInfo": null
                }
            ]
        },
        "Bad_Guy__c:OwnerId:Group:glo:Recent:1:5": {
            "count": 5,
            "currentPageUrl": "/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=glo&searchType=Recent&page=1&pageSize=5",
            "nextPageUrl": "/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=glo&searchType=Recent&page=2&pageSize=5",
            "previousPageUrl": null,
            "records": [
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "19809acdcf2beeb2fada4a3819b16a82",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001xx000003DGZnAAO"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Acme"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001xx000003DGZnAAO",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "c6aceea935f25f943b97be81cf6bdeb9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b65xIAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Media"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b65xIAA",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "d80775b81e3a35e1aff0e520033f7978",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b65zIAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "salesforce.com"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b65zIAA",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "e29bfc9293f4e5b5e0b13593751c26b9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002eb1HIAQ"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 2"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002eb1HIAQ",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "9d3bfe4777d2541dabd973ef6bd67d56",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b662IAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 1"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b662IAA",
                    "recordTypeInfo": null
                }
            ]
        },
        "Bad_Guy__c:OwnerId:Group:glob:Recent:1:5": {
            "count": 5,
            "currentPageUrl": "/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=glob&searchType=Recent&page=1&pageSize=5",
            "nextPageUrl": "/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=glob&searchType=Recent&page=2&pageSize=5",
            "previousPageUrl": null,
            "records": [
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "19809acdcf2beeb2fada4a3819b16a82",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001xx000003DGZnAAO"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Acme"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001xx000003DGZnAAO",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "c6aceea935f25f943b97be81cf6bdeb9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b65xIAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Media"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b65xIAA",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "d80775b81e3a35e1aff0e520033f7978",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b65zIAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "salesforce.com"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b65zIAA",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "e29bfc9293f4e5b5e0b13593751c26b9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002eb1HIAQ"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 2"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002eb1HIAQ",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "9d3bfe4777d2541dabd973ef6bd67d56",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b662IAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 1"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b662IAA",
                    "recordTypeInfo": null
                }
            ]
        },
        "Bad_Guy__c:OwnerId:Group:globa:Recent:1:5": {
            "count": 5,
            "currentPageUrl": "/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=globa&searchType=Recent&page=1&pageSize=5",
            "nextPageUrl": "/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=globa&searchType=Recent&page=2&pageSize=5",
            "previousPageUrl": null,
            "records": [
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "19809acdcf2beeb2fada4a3819b16a82",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001xx000003DGZnAAO"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Acme"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001xx000003DGZnAAO",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "c6aceea935f25f943b97be81cf6bdeb9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b65xIAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Media"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b65xIAA",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "d80775b81e3a35e1aff0e520033f7978",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b65zIAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "salesforce.com"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b65zIAA",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "e29bfc9293f4e5b5e0b13593751c26b9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002eb1HIAQ"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 2"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002eb1HIAQ",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "9d3bfe4777d2541dabd973ef6bd67d56",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b662IAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 1"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b662IAA",
                    "recordTypeInfo": null
                }
            ]
        },
        "Bad_Guy__c:OwnerId:Group:global:Recent:1:5": {
            "count": 5,
            "currentPageUrl": "/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=global&searchType=Recent&page=1&pageSize=5",
            "nextPageUrl": "/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=global&searchType=Recent&page=2&pageSize=5",
            "previousPageUrl": null,
            "records": [
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "19809acdcf2beeb2fada4a3819b16a82",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001xx000003DGZnAAO"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Acme"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001xx000003DGZnAAO",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "c6aceea935f25f943b97be81cf6bdeb9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b65xIAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Media"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b65xIAA",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "d80775b81e3a35e1aff0e520033f7978",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b65zIAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "salesforce.com"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b65zIAA",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "e29bfc9293f4e5b5e0b13593751c26b9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002eb1HIAQ"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 2"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002eb1HIAQ",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "9d3bfe4777d2541dabd973ef6bd67d56",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b662IAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 1"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b662IAA",
                    "recordTypeInfo": null
                }
            ]
        },
        "Bad_Guy__c:OwnerId:Group::TypeAhead:1:5": {
            "count": 0,
            "currentPageUrl": "/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?searchType=TypeAhead&page=1&pageSize=5",
            "nextPageUrl": null,
            "previousPageUrl": null,
            "records": []
        },
        "Bad_Guy__c:OwnerId:Group:g:TypeAhead:1:5": {
            "count": 0,
            "currentPageUrl": "/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=g&searchType=TypeAhead&page=1&pageSize=5",
            "nextPageUrl": null,
            "previousPageUrl": null,
            "records": []
        },
        "Bad_Guy__c:OwnerId:Group:gl:TypeAhead:1:5": {
            "count": 0,
            "currentPageUrl": "/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=gl&searchType=TypeAhead&page=1&pageSize=5",
            "nextPageUrl": null,
            "previousPageUrl": null,
            "records": []
        },
        "Bad_Guy__c:OwnerId:Group:glo:TypeAhead:1:5": {
            "count": 4,
            "currentPageUrl": "/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=glo&searchType=TypeAhead&page=1&pageSize=5",
            "nextPageUrl": null,
            "previousPageUrl": null,
            "records": [
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "e29bfc9293f4e5b5e0b13593751c26b9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002eb1HIAQ"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 2"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002eb1HIAQ",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "1e10da5eda9609b85b4554e0945f499a",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002eb1CIAQ"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 0"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002eb1CIAQ",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "9d3bfe4777d2541dabd973ef6bd67d56",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b662IAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 1"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b662IAA",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "c6aceea935f25f943b97be81cf6bdeb9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b65xIAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Media"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b65xIAA",
                    "recordTypeInfo": null
                }
            ]
        },
        "Bad_Guy__c:OwnerId:Group:glob:TypeAhead:1:5": {
            "count": 4,
            "currentPageUrl": "/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=glob&searchType=TypeAhead&page=1&pageSize=5",
            "nextPageUrl": null,
            "previousPageUrl": null,
            "records": [
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "e29bfc9293f4e5b5e0b13593751c26b9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002eb1HIAQ"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 2"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002eb1HIAQ",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "1e10da5eda9609b85b4554e0945f499a",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002eb1CIAQ"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 0"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002eb1CIAQ",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "9d3bfe4777d2541dabd973ef6bd67d56",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b662IAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 1"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b662IAA",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "c6aceea935f25f943b97be81cf6bdeb9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b65xIAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Media"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b65xIAA",
                    "recordTypeInfo": null
                }
            ]
        },
        "Bad_Guy__c:OwnerId:Group:globa:TypeAhead:1:5": {
            "count": 4,
            "currentPageUrl": "/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=globa&searchType=TypeAhead&page=1&pageSize=5",
            "nextPageUrl": null,
            "previousPageUrl": null,
            "records": [
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "e29bfc9293f4e5b5e0b13593751c26b9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002eb1HIAQ"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 2"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002eb1HIAQ",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "1e10da5eda9609b85b4554e0945f499a",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002eb1CIAQ"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 0"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002eb1CIAQ",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "9d3bfe4777d2541dabd973ef6bd67d56",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b662IAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 1"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b662IAA",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "c6aceea935f25f943b97be81cf6bdeb9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b65xIAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Media"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b65xIAA",
                    "recordTypeInfo": null
                }
            ]
        },
        "Bad_Guy__c:OwnerId:Group:global:TypeAhead:1:5": {
            "count": 4,
            "currentPageUrl": "/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=global&searchType=TypeAhead&page=1&pageSize=5",
            "nextPageUrl": null,
            "previousPageUrl": null,
            "records": [
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "e29bfc9293f4e5b5e0b13593751c26b9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002eb1HIAQ"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 2"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002eb1HIAQ",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "1e10da5eda9609b85b4554e0945f499a",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002eb1CIAQ"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 0"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002eb1CIAQ",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "9d3bfe4777d2541dabd973ef6bd67d56",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b662IAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 1"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b662IAA",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "c6aceea935f25f943b97be81cf6bdeb9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b65xIAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Media"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b65xIAA",
                    "recordTypeInfo": null
                }
            ]
        },
        "Bad_Guy__c:OwnerId:Group::Search:1:5": [
            {
                "errorCode": "INVALID_SEARCH",
                "message": "INVALID_SEARCH: search term must be longer than one character: "
            }
        ],
        "Bad_Guy__c:OwnerId:Group:g:Search:1:5": [
            {
                "errorCode": "INVALID_SEARCH",
                "message": "INVALID_SEARCH: search term must be longer than one character: g"
            }
        ],
        "Bad_Guy__c:OwnerId:Group:gl:Search:1:5": {
            "count": 4,
            "currentPageUrl": "/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=gl&searchType=Search&page=1&pageSize=5",
            "nextPageUrl": null,
            "previousPageUrl": null,
            "records": [
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "e29bfc9293f4e5b5e0b13593751c26b9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002eb1HIAQ"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 2"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002eb1HIAQ",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "9d3bfe4777d2541dabd973ef6bd67d56",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b662IAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 1"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b662IAA",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "1e10da5eda9609b85b4554e0945f499a",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002eb1CIAQ"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 0"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002eb1CIAQ",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "c6aceea935f25f943b97be81cf6bdeb9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b65xIAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Media"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b65xIAA",
                    "recordTypeInfo": null
                }
            ]
        },
        "Bad_Guy__c:OwnerId:Group:glo:Search:1:5": {
            "count": 4,
            "currentPageUrl": "/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=glo&searchType=Search&page=1&pageSize=5",
            "nextPageUrl": null,
            "previousPageUrl": null,
            "records": [
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "e29bfc9293f4e5b5e0b13593751c26b9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002eb1HIAQ"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 2"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002eb1HIAQ",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "9d3bfe4777d2541dabd973ef6bd67d56",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b662IAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 1"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b662IAA",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "1e10da5eda9609b85b4554e0945f499a",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002eb1CIAQ"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 0"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002eb1CIAQ",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "c6aceea935f25f943b97be81cf6bdeb9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b65xIAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Media"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b65xIAA",
                    "recordTypeInfo": null
                }
            ]
        },
        "Bad_Guy__c:OwnerId:Group:glob:Search:1:5": {
            "count": 4,
            "currentPageUrl": "/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=glob&searchType=Search&page=1&pageSize=5",
            "nextPageUrl": null,
            "previousPageUrl": null,
            "records": [
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "e29bfc9293f4e5b5e0b13593751c26b9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002eb1HIAQ"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 2"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002eb1HIAQ",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "9d3bfe4777d2541dabd973ef6bd67d56",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b662IAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 1"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b662IAA",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "1e10da5eda9609b85b4554e0945f499a",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002eb1CIAQ"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 0"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002eb1CIAQ",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "c6aceea935f25f943b97be81cf6bdeb9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b65xIAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Media"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b65xIAA",
                    "recordTypeInfo": null
                }
            ]
        },
        "Bad_Guy__c:OwnerId:Group:globa:Search:1:5": {
            "count": 4,
            "currentPageUrl": "/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=globa&searchType=Search&page=1&pageSize=5",
            "nextPageUrl": null,
            "previousPageUrl": null,
            "records": [
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "e29bfc9293f4e5b5e0b13593751c26b9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002eb1HIAQ"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 2"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002eb1HIAQ",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "9d3bfe4777d2541dabd973ef6bd67d56",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b662IAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 1"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b662IAA",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "1e10da5eda9609b85b4554e0945f499a",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002eb1CIAQ"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 0"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002eb1CIAQ",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "c6aceea935f25f943b97be81cf6bdeb9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b65xIAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Media"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b65xIAA",
                    "recordTypeInfo": null
                }
            ]
        },
        "Bad_Guy__c:OwnerId:Group:global:Search:1:5": {
            "count": 4,
            "currentPageUrl": "/services/data/v42.0/ui-api/lookup/Bad_Guy__c/OwnerId/Group?q=global&searchType=Search&page=1&pageSize=5",
            "nextPageUrl": null,
            "previousPageUrl": null,
            "records": [
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "e29bfc9293f4e5b5e0b13593751c26b9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002eb1HIAQ"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 2"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002eb1HIAQ",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "9d3bfe4777d2541dabd973ef6bd67d56",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b662IAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 1"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b662IAA",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "1e10da5eda9609b85b4554e0945f499a",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002eb1CIAQ"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Acme 0"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002eb1CIAQ",
                    "recordTypeInfo": null
                },
                {
                    "apiName": "Group",
                    "childRelationships": {},
                    "eTag": "c6aceea935f25f943b97be81cf6bdeb9",
                    "fields": {
                        "DisambiguationField": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                        "Id": {
                            "displayValue": null,
                            "value": "001R0000002b65xIAA"
                        },
                        "Name": {
                            "displayValue": null,
                            "value": "Global Media"
                        },
                        "Phone": {
                            "displayValue": null,
                            "value": "(212) 555-5558"
                        },
                    },
                    "id": "001R0000002b65xIAA",
                    "recordTypeInfo": null
                }
            ]
        },
    },

    getNoResults(objectApiName, fieldApiName, targetApiName, q, searchType, page, pageSize) {
        const pageUrl = `/services/data/v42.0/ui-api/lookup/${objectApiName}/${fieldApiName}/${targetApiName}?searchType=${searchType}&page=${page}&pageSize=${pageSize}&q=${q}`;
        return {
            "count": 0,
            "currentPageUrl": pageUrl,
            "nextPageUrl": null,
            "previousPageUrl": null,
            "records": []
        };
    },
};

/**
 * @wire service exposure for UI API.
 * This is a simplified mock of the code in core.
 */
function getMockError(errorMessage) {
    return {
        "errorCode": "MOCK_UI_API_ERROR_CODE",
        "message": errorMessage
    };
}

// returns global actions
function getMockGlobalActions() {
    return Promise.resolve(ACTIONS_GLOBAL.actions.Global.actions);
}

// returns list view chart actions
function getMockListViewChartActions(objectApiName) {
    if (objectApiName !== 'ListViewChartInstance') {
        return Promise.reject(getMockError('Only ListViewChartInstance is valid for objectApiName'));
    }
    return Promise.resolve(ACTIONS_LISTVIEWCHARTINSTANCE.actions.ListViewChartInstance.actions);
}

// returns list view actions
function getMockListViewActions(listViewId) {
    const ret = ACTIONS_LISTVIEW.actions[listViewId];
    if (!ret) {
        return Promise.reject(getMockError(`listViewId ${listViewId} not found`));
    }

    return Promise.resolve(ret.actions);
}

// return record actions on list views
function getMockListViewRecordActions(recordId) {
    const ret = ACTIONS_LISTVIEWRECORD.actions[recordId];
    if (!ret) {
        return Promise.reject(getMockError(`recordId ${recordId} not found`));
    }

    return Promise.resolve(ret.actions);
}

// return actions on lookup fields
function getMockLookupActions(objectApiName) {
    const ret = ACTIONS_LOOKUP.actions[objectApiName];
    if (!ret) {
        return Promise.reject(getMockError(`objectApiName ${objectApiName} not found`));
    }

    return Promise.resolve(ret.actions);
}

// return most recently used list view actions
function getMockMruListActions(objectApiName) {
    const ret = ACTIONS_MRULIST.actions[objectApiName];
    if (!ret) {
        return Promise.reject(getMockError(`objectApiName ${objectApiName} not found`));
    }

    return Promise.resolve(ret.actions);
}

// return actions on record details
function getMockRecordActions(recordId) {
    const ret = ACTIONS_RECORDDETAIL.actions[recordId];
    if (!ret) {
        return Promise.reject(getMockError(`recordId ${recordId} not found`));
    }

    return Promise.resolve(ret.actions);
}

// return actions on a record edit page
function getMockRecordEditActions(recordId) {
    const ret = ACTIONS_RECORDEDIT.actions[recordId];
    if (!ret) {
        return Promise.reject(getMockError(`recordId ${recordId} not found`));
    }

    return Promise.resolve(ret.actions);
}

// return actions on related lists on a record detail page
function getMockRecordRelatedListActions(recordId) {
    const ret = ACTIONS_RELATEDLIST.actions[recordId];
    if (!ret) {
        return Promise.reject(getMockError(`recordId ${recordId} not found`));
    }

    return Promise.resolve(ret.actions);
}

// return actions on related list record
function getMockRecordRelatedListRecordActions(recordId /* , relatedRecordId*/) {
    const ret = ACTIONS_RELATEDLISTRECORD.actions[recordId];
    if (!ret) {
        return Promise.reject(getMockError(`recordId ${recordId} not found`));
    }

    return Promise.resolve(ret.actions);
}

// return actions on a flexipage
function getMockFlexipageActions(flexipageName) {
    const ret = ACTIONS_FLEXIPAGE.actions[flexipageName];
    if (!ret) {
        return Promise.reject(getMockError(`flexipageName ${flexipageName} not found`));
    }

    return Promise.resolve(ret.actions);
}

// return actions on a photo
function getMockPhotoActions(recordId) {
    const ret = ACTIONS_PHOTO.actions[recordId];
    if (!ret) {
        return Promise.reject(getMockError(`recordId ${recordId} not found`));
    }

    return Promise.resolve(ret.actions);
}

// return search suggestions when a user edits a lookup field
// the mock currently supports parameter values described in lookups-data.js
function getMockLookups(objectApiName, fieldApiName, targetApiName, ...requestParams) {
    const hasTarget = (targetApiName !== undefined);
    const q = (requestParams[0] && 'q' in requestParams[0]) ? requestParams[0].q : '';
    const searchType = (requestParams[0] && 'searchType' in requestParams[0]) ? requestParams[0].searchType : undefined;
    const page = (requestParams[0] && 'page' in requestParams[0]) ? requestParams[0].page : undefined;
    const pageSize = (requestParams[0] && 'pageSize' in requestParams[0]) ? requestParams[0].pageSize : undefined;

    // Initial param validation
    if ((LOOKUPS.SUPPORTED_OBJECTS.indexOf(objectApiName) === -1)
        || (LOOKUPS.SUPPORTED_FIELDS.indexOf(fieldApiName) === -1)
        || (hasTarget && (LOOKUPS.SUPPORTED_TARGETS.indexOf(targetApiName)) === -1)
        || (LOOKUPS.SUPPORTED_TYPES.indexOf(searchType) === -1)
        || (LOOKUPS.SUPPORTED_PAGES.indexOf(page) === -1)
        || (LOOKUPS.SUPPORTED_PAGESIZES.indexOf(pageSize) === -1)) {
        return Promise.reject(getMockError(`unsupported lookup`));
    }

    // Build key corresponding to results
    const key = `${objectApiName}:${fieldApiName}:${targetApiName}:${q}:${searchType}:${page}:${pageSize}`;

    // Return corresponding value or no results for unsupported query terms
    const val =  LOOKUPS.RESULTS[key];
    if (val !== undefined) {
        return Promise.resolve(val);
    }
    return Promise.resolve(LOOKUPS.getNoResults(objectApiName, fieldApiName, targetApiName, q, searchType, page, pageSize));
}

const getGlobalActions = generateWireAdapterMock(function(config) {
    if (!config) {
        return undefined;
    }

    return getImmutableObservable(getMockGlobalActions());
});

const getRecordActions = generateWireAdapterMock(function(config) {
    if (!config) {
        return undefined;
    }

    return getImmutableObservable(getMockRecordActions(config.recordId));
});

const getRecordEditActions = generateWireAdapterMock(function(config) {
    if (!config) {
        return undefined;
    }

    return getImmutableObservable(getMockRecordEditActions(config.recordId));
});

const getRelatedListActions = generateWireAdapterMock(function(config) {
    if (!config) {
        return undefined;
    }

    return getImmutableObservable(getMockRecordRelatedListActions(config.recordId));
});

const getRelatedListRecordActions = generateWireAdapterMock(function(config) {
    if (!config) {
        return undefined;
    }

    return getImmutableObservable(getMockRecordRelatedListRecordActions(config.recordId, config.relatedRecordId));
});

const getListViewHeaderActions = generateWireAdapterMock(function(config) {
    if (!config) {
        return undefined;
    }

    return getImmutableObservable(getMockListViewActions(config.listViewId));
});

const getListViewRecordActions = generateWireAdapterMock(function(config) {
    if (!config) {
        return undefined;
    }

    return getImmutableObservable(getMockListViewRecordActions(config.recordId));
});

const getListViewChartActions = generateWireAdapterMock(function(config) {
    if (!config) {
        return undefined;
    }

    return getImmutableObservable(getMockListViewChartActions(config.objectApiName));
});

const getLightningPageActions = generateWireAdapterMock(function(config) {
    if (!config) {
        return undefined;
    }

    return getImmutableObservable(getMockFlexipageActions(config.flexipageName));
});

const getLookupActions = generateWireAdapterMock(function(config) {
    if (!config) {
        return undefined;
    }

    return getImmutableObservable(getMockLookupActions(config.objectApiName));
});

const getMruListActions = generateWireAdapterMock(function(config) {
    if (!config) {
        return undefined;
    }

    return getImmutableObservable(getMockMruListActions(config.objectApiName));
});

const getPhotoActions = generateWireAdapterMock(function(config) {
    if (!config) {
        return undefined;
    }

    return getImmutableObservable(getMockPhotoActions(config.recordId));
});

/**
 * Services @wire(getLookupRecords) requests.
 * @param {Object} config service config bag.
 * @returns {Observable} an observable for the lookups.
 */
const getLookupRecords = generateWireAdapterMock(function(config) {
    if (!config || !config.objectApiName || !config.fieldApiName) {
        return undefined;
    }

    return getImmutableObservable(getMockLookups(config.objectApiName, config.fieldApiName, config.targetApiName, config.requestParams));
});

/**
 * Mocks of Salesforce's UI API.
 */

/**
 * Registers the wire service with mocked Salesforce UI API data types.
 */
function _registerMockedWireAdapters() {
    const mocks = [
        getRecord,
        getObjectInfo,
        getPicklistValues,
        getPicklistValuesByRecordType,
        getRecordUi,
        getRecordCreateDefaults,
        getGlobalActions,
        getRecordActions,
        getRecordEditActions,
        getRelatedListActions,
        getRelatedListRecordActions,
        getListViewHeaderActions,
        getListViewRecordActions,
        getListViewChartActions,
        getLightningPageActions,
        getLookupActions,
        getMruListActions,
        getPhotoActions,
        getLookupRecords
    ];

    mocks.forEach(mock => {
        register(mock, (wiredEventTarget) => {
            let subscription;
            let config;

            wiredEventTarget.dispatchEvent(new ValueChangedEvent({ data: undefined, error: undefined }));

            const observer = {
                next: data => wiredEventTarget.dispatchEvent(new ValueChangedEvent({ data, error: undefined })),
                error: error => wiredEventTarget.dispatchEvent(new ValueChangedEvent({ data: undefined, error }))
            };

            wiredEventTarget.addEventListener('connect', () => {
                const observable = mock(config);
                if (observable) {
                    subscription = observable.subscribe(observer);
                }
            });

            wiredEventTarget.addEventListener('disconnect', () => {
                subscription.unsubscribe();
            });

            wiredEventTarget.addEventListener('config', (newConfig) => {
                config = newConfig;
                if (subscription) {
                    subscription.unsubscribe();
                    subscription = undefined;
                }
                const observable = mock(config);
                if (observable) {
                    subscription = observable.subscribe(observer);
                }
            });
        });
    });
}

function registerMockedWireService() {
    // noop since the adapters will be already registered
}

_registerMockedWireAdapters();

exports.getRecord = getRecord;
exports.getObjectInfo = getObjectInfo;
exports.getPicklistValues = getPicklistValues;
exports.getPicklistValuesByRecordType = getPicklistValuesByRecordType;
exports.getRecordUi = getRecordUi;
exports.getRecordCreateDefaults = getRecordCreateDefaults;
exports.getGlobalActions = getGlobalActions;
exports.getRecordActions = getRecordActions;
exports.getRecordEditActions = getRecordEditActions;
exports.getRelatedListActions = getRelatedListActions;
exports.getRelatedListRecordActions = getRelatedListRecordActions;
exports.getListViewHeaderActions = getListViewHeaderActions;
exports.getListViewRecordActions = getListViewRecordActions;
exports.getListViewChartActions = getListViewChartActions;
exports.getLightningPageActions = getLightningPageActions;
exports.getLookupActions = getLookupActions;
exports.getMruListActions = getMruListActions;
exports.getPhotoActions = getPhotoActions;
exports.getLookupRecords = getLookupRecords;
exports.store = store;
exports.registerMockedWireService = registerMockedWireService;
