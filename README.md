# Base Components Recipes

View examples for base components in small bites. Each recipe demonstrates a working example of the base components to build pages and apps quickly. Use and customize the base components and the recipes in your apps.

Base component recipes open up the source code for the base components shown in https://developer.salesforce.com/docs/component-library. We transpiled the base components into the `c` namespace so that you can use the components in your projects. Explore the inner workings of the components and use the source code to build new components with your own requirements. The possibilities are endless with the source in your hands!

Base components implement Lightning Design System and are developed using Lightning Web Components. A `c` namespace component can contain components in the `lightning` namespace.

## Getting Started

We recommend using a scratch org to work with base component recipes on the Salesforce platform.

1. Set up your environment by following the steps in the [Lightning Web Components Dev Guide](https://developer.salesforce.com/docs/component-library/documentation/lwc/lwc.install_setup_develop), which includes:

    - Install the Salesforce CLI.
    - Install Visual Studio Code and the Salesforce Extension Pack, or your own favorite code editor.
    - Set up a Dev Hub org so you can work with Lightning web components in scratch orgs.

2. Authenticate with your Dev Hub org and provide it with an alias, as shown by `mybaseorg` in the following command.

```bash
sfdx force:auth:web:login -d -a mybaseorg
```

3. Clone the base-component-recipes repository.

```bash
git clone https://github.com/forcedotcom/base-components-recipes
cd base-components-recipes
```

4. Create a scratch org and provide it with an alias, as shown by `base-recipes` in the following command.

```bash
sfdx force:org:create -s -f config/project-scratch-def.json -a base-recipes
```

If you get an error "You do not have access to the [ScratchOrgInfo] object", make sure you have enabled your org as a Dev Hub org. See [Enable Dev Hub in Your Org](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_enable_devhub.htm). Alternatively, sign up for a Dev Hub org at https://developer.salesforce.com/promotions/orgs/dx-signup.

5. Push the base-components-recipes code to your scratch org.

```bash
sfdx force:source:push
```

6. Open the scratch org.

```bash
sfdx force:org:open
```

7. In App Launcher, select the **Base Components** app. This app shows the base component recipes at [base-components-recipes/example/lwc](https://github.com/salesforce/base-components-recipes/tree/master/examples/lwc).

## Use Base Components on Salesforce Platform

Create a helloWorld Lightning web component that uses a base component, `c-button`. We'll use Visual Studio Code in this example.

1. In Visual Studio code, open the Command Palette by pressing **Ctrl+Shift+P** on Windows or **Cmd+Shift+P** on macOS.
2. Type SFDX.
3. Select SFDX: Create Lightning Web Component.
4. Press Enter to accept the default `force-app/main/default/lwc` directory.
5. Enter helloWorld for the name of the new component.
6. Press Enter. A `helloWorld` bundle is created in `force-app/main/default/lwc`.
7. In the HTML file, `helloWorld.html`, copy and paste the following code. Save the file.

```html
<!--helloWorld.html-->

<template>
    <c-button label="{greeting}" title="greeting"> </c-button>
</template>
```

8.  In the JavaScript file, `helloWorld.js`, copy and paste the following code. Save the file.

```javascript
//helloWorld.js

import { LightningElement, api } from 'lwc';
export default class HelloWorld extends LightningElement {
    @api greeting = 'Hello World';
}
```

9. In the XML file, `helloWorld.js-meta.xml`, copy and paste the following code. Save the file.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>47.0</apiVersion>
    <isExposed>true</isExposed>
    <targets>
        <target>lightning__AppPage</target>
        <target>lightning__RecordPage</target>
        <target>lightning__HomePage</target>
  </targets>
</LightningComponentBundle>
```

10. Push your changes.

```bash
sfdx force:source:push
```

Your helloWorld component is now ready for action. You can add this component to your apps and pages via the Lightning App Builder.
For more information, see the [Quick Start: Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/create-a-hello-world-lightning-web-component) Trailhead project.

## Documentation

Base components in the `c` namespace map to components in the `lightning` namespace. We transpiled the base components into the `c` namespace so that you can use the components in your projects. Find the base components in the `c` namespace in [base-components-recipes/force-app/main/default/lwc/](https://github.com/salesforce/base-components-recipes/tree/master/force-app/main/default/lwc).

The components below link to documentation for components in the `lightning` namespace, but the usage is similar unless otherwise noted.

| **Component**                                                                                                                               | **Description**                                                                                                                                                | **Comment**                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| [c-accordion](https://developer.salesforce.com/docs/component-library/bundle/lightning-accordion)                                           | A collection of vertically stacked sections with multiple content areas.                                                                                       | This component contains slots and isn't supported as an Aura component.                                            |
| [c-accordion-section](https://developer.salesforce.com/docs/component-library/bundle/lightning-accordion-section)                           | A single section of content. Use this component within `c-accordion`.                                                                                          | This component contains slots and isn't supported as an Aura component.                                            |
| [c-avatar](https://developer.salesforce.com/docs/component-library/bundle/lightning-avatar)                                                 | A visual representation of an object, such as an account or user                                                                                               |                                                                                                                    |
| [c-badge](https://developer.salesforce.com/docs/component-library/bundle/lightning-badge)                                                   | A label which holds a small amount of information, such as the number of unread notifications                                                                  |                                                                                                                    |
| [c-button](https://developer.salesforce.com/docs/component-library/bundle/lightning-button)                                                 | A button element that invokes an action                                                                                                                        |                                                                                                                    |
| [c-button-group](https://developer.salesforce.com/docs/component-library/bundle/lightning-button-group)                                     | A group of buttons that invokes similar actions                                                                                                                |                                                                                                                    |
| [c-button-icon](https://developer.salesforce.com/docs/component-library/bundle/lightning-button-icon)                                       | An icon-only button element that invokes an action                                                                                                             | The `tooltip` attribute isn't supported.                                                                           |
| [c-button-icon-stateful](https://developer.salesforce.com/docs/component-library/bundle/lightning-button-icon-stateful)                     | An icon-only button that retains state                                                                                                                         |                                                                                                                    |
| [c-button-menu](https://developer.salesforce.com/docs/component-library/bundle/lightning-button-menu)                                       | A dropdown menu with a list of actions or functions. Use this component with `c-menu-divider` and `c-menu-subheader` to create menu dividers and sub-headings. | The `tooltip` attribute isn't supported. For the `menu-alignment` attribute, the `auto` alignment isn't supported. |
| [c-button-stateful](https://developer.salesforce.com/docs/component-library/bundle/lightning-button-stateful)                               | A button that toggles between states                                                                                                                           |                                                                                                                    |
| [c-card](https://developer.salesforce.com/docs/component-library/bundle/lightning-card)                                                     | A stylized container around a group of information                                                                                                             | This component contains slots and isn't supported as an Aura component.                                            |
| [c-carousel](https://developer.salesforce.com/docs/component-library/bundle/lightning-carousel)                                             | A collection of images and captions that are displayed one at a time. Use this component with c-carousel-image                                                 | This component contains slots and isn't supported as an Aura component.                                            |
| [c-checkbox-group](https://developer.salesforce.com/docs/component-library/bundle/lightning-checkbox-group)                                 | A group of checkboxes that enables selection of single or multiple options                                                                                     |                                                                                                                    |
| [c-combobox](https://developer.salesforce.com/docs/component-library/bundle/lightning-combobox)                                             | A read-only input field with a dropdown list for single selection                                                                                              |                                                                                                                    |
| [c-dual-listbox](https://developer.salesforce.com/docs/component-library/bundle/lightning-dual-listbox)                                     | A pair of lists that enables multiple options to be selected and reordered                                                                                     |                                                                                                                    |
| [c-dynamic-icon](https://developer.salesforce.com/docs/component-library/bundle/lightning-dynamic-icon)                                     | A set of animated icons                                                                                                                                        |                                                                                                                    |
| [c-formatted-date-time](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-date-time)                       | A pair of date and time that's displayed based on the user locale                                                                                              |                                                                                                                    |
| [c-formatted-location](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-location)                         | A pair of latitude and longitude for a location                                                                                                                |                                                                                                                    |
| [c-formatted-name](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-name)                                 | A name that's displayed based on the user locale, which determines the format and order of the constituents (suffix, salutation, etc.)                         |                                                                                                                    |
| [c-formatted-number](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-number)                             | A decimal, currency, or percentage that's displayed base on the user locale                                                                                    |                                                                                                                    |
| [c-formatted-phone](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-phone)                               | A phone number that opens the default VOIP call app when clicked                                                                                               |
| [c-formatted-text](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-text)                                 | A group of text with an option to display URLs and email addresses as links                                                                                    |                                                                                                                    |
| [c-formatted-time](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-time)                                 | A time value that's displayed based on the user locale                                                                                                         |                                                                                                                    |
| [c-formatted-url](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-url)                                   | A URL that's displayed as a link                                                                                                                               |                                                                                                                    |
| [c-icon](https://developer.salesforce.com/docs/component-library/bundle/lightning-icon)                                                     | A visual element that provides context and enhances usability                                                                                                  |                                                                                                                    |
| [c-input-location](https://developer.salesforce.com/docs/component-library/bundle/lightning-input-location)                                 | A pair of latitude and longitude fields                                                                                                                        |                                                                                                                    |
| [c-layout](https://developer.salesforce.com/docs/component-library/bundle/lightning-layout)                                                 | A responsive grid system                                                                                                                                       | This component contains slots and isn't supported as an Aura component.                                            |
| [c-layout-item](https://developer.salesforce.com/docs/component-library/bundle/lightning-layout-item)                                       | A container in a grid system                                                                                                                                   | This component contains slots and isn't supported as an Aura component.                                            |
| [c-menu-item](https://developer.salesforce.com/docs/component-library/bundle/lightning-menu-item/documentation)                             | A list item in a menu. Use this component within `c-button-menu`                                                                                               |                                                                                                                    |
| [c-output-field](https://developer.salesforce.com/docs/component-library/bundle/lightning-output-field)                                     | A read-only display of a label, help text, and value for a field on a Salesforce object. Use this component within `c-record-view-form`.                       | For Salesforce platform only.                                                                                      |
| [c-pill](https://developer.salesforce.com/docs/component-library/bundle/lightning-pill)                                                     | A label that can contain a link and can be removed from view                                                                                                   | This component contains slots and isn't supported as an Aura component.                                            |
| [c-pill-container](https://developer.salesforce.com/docs/component-library/bundle/lightning-pill-container)                                 | A list of pills grouped in a container                                                                                                                         |                                                                                                                    |
| [c-radio-group](https://developer.salesforce.com/docs/component-library/bundle/lightning-radio-group)                                       | A group of radio butons that can have a single option selected                                                                                                 |                                                                                                                    |
| [c-record-edit-form](https://developer.salesforce.com/docs/component-library/bundle/lightning-record-edit-form)                             | A form for creating or editing a record with one or more fields                                                                                                | For Salesforce platform only. Use `c-record-edit-form` with `lightning-input-field`.                               |
| [c-record-form](https://developer.salesforce.com/docs/component-library/bundle/lightning-record-form)                                       | A form for creating, displaying, or editing a record with automatic switching between edit and view modes                                                      | For Salesforce platform only.                                                                                      |
| [c-record-view-form](https://developer.salesforce.com/docs/component-library/bundle/lightning-record-view-form)                             | A form for displaying record data. Use `c-output-field` within `c-record-view-form`.                                                                           | For Salesforce platform only. This component contains slots and isn't supported as an Aura component.              |
| [c-relative-date-time](https://developer.salesforce.com/docs/component-library/bundle/lightning-relative-date-time)                         | A group of text depicting how a specified time relates to the current time, such as "a few seconds ago" or "in 5 years"                                        |                                                                                                                    |
| [c-slider](https://developer.salesforce.com/docs/component-library/bundle/lightning-slider)                                                 | An input range slider that enables selection of a value between two specified numbers                                                                          |                                                                                                                    |
| [c-spinner](https://developer.salesforce.com/docs/component-library/bundle/lightning-spinner)                                               | An animated spinner                                                                                                                                            |
| [c-tab](https://developer.salesforce.com/docs/component-library/bundle/lightning-tab)                                                       | A single tab within a `c-tabset` component.                                                                                                                    |
| [c-tabset](https://developer.salesforce.com/docs/component-library/bundle/lightning-tabset)                                                 | A list of tabs. Use this component with `c-tab`.                                                                                                               |
| [c-textarea](https://developer.salesforce.com/docs/component-library/bundle/lightning-textarea)                                             | A textarea field for multi-line text input                                                                                                                     |                                                                                                                    |
| [c-tile](https://developer.salesforce.com/docs/component-library/bundle/lightning-tile)                                                     | A group of related information associated with a record                                                                                                        | This component contains slots and isn't supported as an Aura component.                                            |
| [c-tree](https://developer.salesforce.com/docs/component-library/bundle/lightning-tree)                                                     | A visualization of a structural hierarchy with nested items that can be collapsed or expanded. Use this component with `c-tree-item`.                          |                                                                                                                    |
| [c-vertical-navigation](https://developer.salesforce.com/docs/component-library/bundle/lightning-vertical-navigation)                       | A vertical list of links that can be grouped into sections using `c-vertical-navigation-section`                                                               | This component contains slots and isn't supported as an Aura component.                                            |
| [c-vertical-navigation-item](https://developer.salesforce.com/docs/component-library/bundle/lightning-vertical-navigation-item)             | A text-only link within `c-vertical-navigation-section` or `c-vertical-navigation-overflow`                                                                    |                                                                                                                    |
| [c-vertical-navigation-item-badge](https://developer.salesforce.com/docs/component-library/bundle/lightning-vertical-navigation-item-badge) | A link and badge within `c-vertical-navigation-section` or `c-vertical-navigation-overflow`                                                                    |                                                                                                                    |
| [c-vertical-navigation-item-icon](https://developer.salesforce.com/docs/component-library/bundle/lightning-vertical-navigation-item-icon)   | A link and icon within `c-vertical-navigation-section` or `c-vertical-navigation-overflow`                                                                     |                                                                                                                    |

### Localization

You can create up to 5,000 custom labels for your organization, and they can be up to 1,000 characters in length. Create custom labels that you can use in your Lightning web components.

#### Update Labels

To update the Custom Labels metadata, go to the `force-app/main/default/labels directory`. The labels are available in the `CustomLabels.labels-meta.xml` file. For an example of a CustomLabels definition, see the [Metadata API Dev Guide](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_customlabels.htm).

#### Customize Labels

To customize your labels, from Setup, enter Custom Labels in the Quick Find box, then select **Custom Labels**. Our labels are shipped in English and can be translated to other languages. For more information, see the [Translate Labels](#translate-labels) section below and [Custom Labels](https://help.salesforce.com/articleView?id=cl_about.htm&type=5) in Salesforce Help.

#### Use Labels

Import the labels from the `@salesforce/label` scoped module. Reference your label name using the `c` namespace.

```javascript
// myComponent.js

import cardTitleLabel from '@salesforce/label/c.LightningCard_cardTitle';
import loadingLabel from '@salesforce/label/c.LightningControl_loading';
import { LightningElement } from 'lwc';

export default class MyComponent extends LightningElement {
    label = {
        cardTitleLabel,
        loadingLabel
    };
}
```

Use your labels in a Lightning web component.

```html
<!-- myComponent.html -->

<template>
    <c-card title="{label.cardTitleLabel}">
        {label.loadingLabel}
    </c-card>
</template>
```

#### Translate Labels

Enable the Translation Workbench to support translations in your org. See [Enable and Disable the Translation Workbench](https://help.salesforce.com/articleView?id=customize_wbench.htm) in Salesforce Help. Next, modify `sfdx-project.json` to include the path for the translation files, which are available in the `optional` folder.

```json
{
    "packageDirectories": [
        {
            "path": "force-app",
            "default": true
        },
        {
            "path": "examples",
            "default": false
        },
        {
            "path": "optional"
        }
    ],
    "namespace": "",
    "sfdcLoginUrl": "https://login.salesforce.com",
    "sourceApiVersion": "46.0"
}
```

After updating `sfdx-project.json`, push the files to your scratch org.

```bash
sfdx force:source:push
```

## Contributing

We are not accepting contributions at this time. If you have any questions about base components recipes, please use the following channels.

-   [Trailblazer Community - Lightning Web Components](https://success.salesforce.com/ui/core/chatter/groups/GroupProfilePage?g=0F93A000000LlT2SAK)
-   [Salesforce Developer Forums](https://developer.salesforce.com/forums)
-   [Salesforce Stackexchange](https://salesforce.stackexchange.com/)

## FAQ

-   **Where can I see more examples on how to use Lightning Web Components?**

    -   For examples on running Lightning Web Components on Salesforce platform, visit [lwc-recipes](https://github.com/trailheadapps/lwc-recipes/).
    -   For more sample apps using Lightning Web Components, visit https://trailhead.salesforce.com/sample-gallery.
    -   To experience Lightning Web Components on any platform, visit https://lwc.dev.

-   **How do I create a Lightning Web Component?**

    See the [Quick Start: Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/create-a-hello-world-lightning-web-component) Trailhead project. The [Lightning Web Components Developer Guide](https://developer.salesforce.com/docs/component-library/documentation/lwc) is also a great resource.
