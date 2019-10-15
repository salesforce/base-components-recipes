# Base Components Recipes

View examples for base components in small bites. Each recipe demonstrates a building block to build pages and apps quickly. Use and customize the recipes in your apps.

> Base components recipes are designed to run on the Salesforce platform. To experience Lightning Web Components on any platform, visit https://lwc.dev.

Base components implement Lightning Design System and are developed using Lightning Web Components. They use the `c` namespace and are a snapshot of the `lightning` namespaced components.
A `c` namespaced component can contain components in the `lightning` namespace.


## Usage

Create a Lightning web component with a base component recipe, `c-button`.

```html
<!--helloWorld.html-->

<template>
    <c-button label={greeting} title="greeting">
    </c-button>
</template>
```

 The `greeting` property in the template is bound to the `greeting` property in the JavaScript class.

```javascript
//helloWorld.js

import { LightningElement, api } from 'lwc';
export default class HelloWorld extends LightningElement {
    @api greeting = 'Hello World';
}
```


## Documentation

Base component recipes in the c namespace map to components in the lightning namespace. The components below link to documentation for components in the lightning namespace, but the usage is similar.
 
The following components can be customized.

**Component** | **Description** | **Comment** |
-----|-----|-----|
[c-avatar](https://developer.salesforce.com/docs/component-library/bundle/lightning-avatar) | A visual representation of an object, such as an account or user  |  |
[c-badge](https://developer.salesforce.com/docs/component-library/bundle/lightning-badge) | A label which holds a small amount of information, such as the number of unread notifications  |  |
[c-button](https://developer.salesforce.com/docs/component-library/bundle/lightning-button) | A button element that invokes an action | |
[c-button-group](https://developer.salesforce.com/docs/component-library/bundle/lightning-button-group) | A group of buttons that invokes similar actions | |
[c-button-icon](https://developer.salesforce.com/docs/component-library/bundle/lightning-button-icon) | An icon-only button that invokes an action | |
[c-button-icon-stateful](https://developer.salesforce.com/docs/component-library/bundle/lightning-button-icon-stateful) | An icon-only button that retains state | |
[c-card](https://developer.salesforce.com/docs/component-library/bundle/lightning-card) | A stylized container around a group of information | |
[c-carousel](https://developer.salesforce.com/docs/component-library/bundle/lightning-carousel) | A collection of images and captions that are displayed one at a time | |
[c-checkbox-group](https://developer.salesforce.com/docs/component-library/bundle/lightning-checkbox-group) | A group of checkboxes that enables selection of single or multiple options | |
[c-click-to-dial](https://developer.salesforce.com/docs/component-library/bundle/lightning-click-to-dial) | A formatted phone number for computer-telephony integrations | |
[c-combobox](https://developer.salesforce.com/docs/component-library/bundle/lightning-combobox) | A dropdown menu for single selection that uses a read-only input field | |
[c-dual-listbox](https://developer.salesforce.com/docs/component-library/bundle/lightning-dual-listbox) | A pair of lists that enables multiple options to be selected and reordered | |
[c-dynamic-icon](https://developer.salesforce.com/docs/component-library/bundle/lightning-dynamic-icon) | A set of animated icons | |
[c-formatted-date-time](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-date-time) | A pair of date and time that's displayed based on the user locale | |
[c-formatted-email](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-email) | An email address that opens the default mail app when clicked | |
[c-formatted-location](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-location) | A pair of latitude and longitude for a location | |
[c-formatted-name](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-name) | A name that's displayed based on the user locale, which determines the format and order of the constituents (suffix, salutation, etc.) | |
[c-formatted-number](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-number) | A decimal, currency, or percantage that's displayed base on the user locale | |
[c-formatted-phone](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-phone) | A phone number that opens the default VOIP call app when clicked
[c-formatted-rich-text](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-rich-text) | A group of rich text that's formatted with whitelisted tags and attributes | |
[c-formatted-text](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-text) | A group of text with an option  to display URLs and email addresses as links | |
[c-formatted-time](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-time) | A time value that's displayed based on the user locale | | 
[c-formatted-url](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-url) | A URL that's displayed as a link | |
[c-icon](https://developer.salesforce.com/docs/component-library/bundle/lightning-icon) | A visual element that provides context and enhances usability | |
[c-input-location](https://developer.salesforce.com/docs/component-library/bundle/lightning-input-location) | A pair of latitude and longitude fields | |
[c-layout](https://developer.salesforce.com/docs/component-library/bundle/lightning-layout) | A responsive grid system | |
[c-layout-item](https://developer.salesforce.com/docs/component-library/bundle/lightning-layout-item) | A container in a grid system | |
[c-output-field](https://developer.salesforce.com/docs/component-library/bundle/lightning-output-field) | A read-only display of a label, help text, and value for a field on a Salesforce object | |
[c-pill](https://developer.salesforce.com/docs/component-library/bundle/lightning-pill) | A label that can contain a link and can be removed from view | |
[c-pill-container](https://developer.salesforce.com/docs/component-library/bundle/lightning-pill-container) | A list of pills grouped in a container | |
[c-progress-bar](https://developer.salesforce.com/docs/component-library/bundle/lightning-progress-bar) | A horizontal progress bar that indicates the progress of an operation | |
[c-progress-indicator](https://developer.salesforce.com/docs/component-library/bundle/lightning-progress-indicator) | A visual indication on the current, previous, and later steps in a particular process | |
[c-radio-group](https://developer.salesforce.com/docs/component-library/bundle/lightning-radio-group) | A group of radio butons that can have a single option selected | |
[c-record-edit-form](https://developer.salesforce.com/docs/component-library/bundle/lightning-record-edit-form) | A form for creating or editing a record with one or more fields | Use `c-record-edit-form` with `lightning-input-field` |
[c-record-form](https://developer.salesforce.com/docs/component-library/bundle/lightning-record-form) | A form for creating, displaying, or editing a record with automatic switching between edit and view modes | | 
[c-record-view-form](https://developer.salesforce.com/docs/component-library/bundle/lightning-record-view-form) | A form for displaying record data | |
[c-relative-date-time](https://developer.salesforce.com/docs/component-library/bundle/lightning-relative-date-time) | A group of text depicting how a specified time relates to the current time, such as "a few seconds ago" or "in 5 years" | |
[c-slider](https://developer.salesforce.com/docs/component-library/bundle/lightning-slider) | An input range slider that enables selection of a value between two specified numbers | |
[c-textarea](https://developer.salesforce.com/docs/component-library/bundle/lightning-textarea) | A textarea field for multi-line text input | |
[c-tile](https://developer.salesforce.com/docs/component-library/bundle/lightning-tile) | A group of related information associated with a record | |
[c-tree](https://developer.salesforce.com/docs/component-library/bundle/lightning-tree) | A visualization of a structural hierarchy with nested items that can be collapsed or expanded | |
[c-vertical-navigation](https://developer.salesforce.com/docs/component-library/bundle/lightning-vertical-navigation) | A vertical list of links that can be grouped into sections | |
[c-vertical-navigation-item](https://developer.salesforce.com/docs/component-library/bundle/lightning-vertical-navigation-item) | A text-only link within `c-vertical-navigation-section` or `c-vertical-navigation-overflow` | |
[c-vertical-navigation-item-badge](https://developer.salesforce.com/docs/component-library/bundle/lightning-vertical-navigation-item-badge) | A link and badge within `c-vertical-navigation-section` or `c-vertical-navigation-overflow` | |
[c-vertical-navigation-item-icon](https://developer.salesforce.com/docs/component-library/bundle/lightning-vertical-navigation-item-icon) | A link and icon within `c-vertical-navigation-section` or `c-vertical-navigation-overflow` | |
[c-vertical-navigation-section](https://developer.salesforce.com/docs/component-library/bundle/lightning-vertical-navigation) | A group of navigation items within `c-vertical-navigation` with a header | |
[c-vertical-navigation-overflow](https://developer.salesforce.com/docs/component-library/bundle/lightning-vertical-navigation) | A group of navigation items that can be expanded and collapsed | |


## FAQ

- **Where can I see more examples on how to use Lightning Web Components?**
    - Check out [lwc-recipes](https://github.com/trailheadapps/lwc-recipes/). For sample apps using Lightning Web Components, visit https://trailhead.salesforce.com/sample-gallery.