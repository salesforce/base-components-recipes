# Lightning Data Service and UI API Mocks for Wire Service

This is a mock implementation of Lightning Data Service wire adapters. By providing mock adapters, metadata and data, "off core" development becomes possible. You can develop Lightning web components that use `@wire` for any LDS data source without access to a Salesforce server or core code.

Refer to the [LWC developer guide](http://internal.lwcjs.org/guide/data.html) for documentation on the wire service.

## Supported data types

1. @wire(getRecord, { ... })
1. @wire(getObjectInfo, { ... })
1. @wire(getPicklistValues, { ... })
1. @wire(getPicklistValuesByRecordType, { ... })
1. @wire(getRecordUi, { ... })
1. @wire(getRecordCreateDefaults, { ... })

See the [Salesforce Data and Metadata](https://internal.lwcjs.org/guide/data_salesforce.html) for documentation on these data types.

The following types are supported but their adapter id and meta/data shape is not finalized.

1. @wire(getGlobalActions, { ... })
1. @wire(getRecordActions, { ... })
1. @wire(getRecordEditActions, { ... })
1. @wire(getRelatedListActions, { ... })
1. @wire(getRelatedListRecordActions, { ... })
1. @wire(getListViewHeaderActions, { ... })
1. @wire(getListViewRecordActions, { ... })
1. @wire(getListViewChartActions, { ... })
1. @wire(getLightningPageActions, { ... })
1. @wire(getLookupActions, { ... })
1. @wire(getMruListActions, { ... })
1. @wire(getPhotoActions, { ... })
1. @wire(getLookupRecords, { ... })


## Installation

### 1) Add dependency on this module

```bash
yarn add -D lwc-wire-service-sfdc-mocks
```

### 2) Register the mocks

Register the mocks before creating the root LWC component. For example:

```Javascript
import * as lwc from 'lwc';
import App from 'x-my-app';

// ADD THIS
import { registerMockedWireService } from 'lwc-wire-service-sfdc-mocks';
registerMockedWireService(lwc);

const container = document.getElementById('main');
const element = lwc.createElement('x-my-app', { is: App });

container.appendChild(element);
```
