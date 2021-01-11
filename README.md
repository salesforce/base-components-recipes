# Base Components Recipes

View examples for base components in small bites. Each recipe demonstrates a working example of the base components to build pages and apps quickly. Use and customize the base components and the recipes in your apps.

Base component recipes open up the source code for the base components shown in the [Component Library](https://developer.salesforce.com/docs/component-library). We transpiled the base components into the `c` namespace so that you can use the components in your projects. Explore the inner workings of the components and use the source code to build new components with your own requirements. The possibilities are endless with the source in your hands!

Only a subset of the components in the Component Library are available. For more information, see the [Documentation](#documentation) section.

Base components implement Salesforce Lightning Design System (SLDS) and are developed using Lightning Web Components. A `c` namespace component can contain components in the `lightning` namespace.

## Before You Start

Consider using base component recipes only if the base components in the `lightning` namespace don't work for your requirements. For example, use base component recipes if you need to customize the styles of the base components beyond supported styling mechanisms. For a list of available base components in the `lightning` namespace, see the [Component Library](https://developer.salesforce.com/docs/component-library).

 To customize the styles on `lightning` namespace components, we recommend using [SLDS styling hooks](https://lightningdesignsystem.com/platforms/lightning/styling-hooks/#site-main-content). For more information, see [Style Components with SLDS](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_components_css_slds).

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
git clone git@github.com:salesforce/base-components-recipes.git
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

1. In Visual Studio Code, open your `base-components-recipes` directory.
2. Open the Command Palette by pressing **Ctrl+Shift+P** on Windows or **Cmd+Shift+P** on macOS.
3. Type __SFDX__.
4. Select SFDX: Create Lightning Web Component.
5. Type __helloWorld__ for the name of the new component and press Enter.
6. Press Enter to accept the default `force-app/main/default/lwc` directory.
7. A `helloWorld` bundle is created in `force-app/main/default/lwc` and the `helloWorld.js` JavaScript file opens in the editor.
8. In `helloWorld.js`, replace the content with the following code. Save the file.

```javascript
//helloWorld.js

import { LightningElement, api } from 'lwc';
export default class HelloWorld extends LightningElement {
    @api greeting = 'Hello World';
}
```

9. Open the HTML file, `helloWorld.html`, and replace its content with the following code. Save the file.

```html
<!--helloWorld.html-->

<template>
    <c-button label={greeting} title="greeting"> </c-button>
</template>
```

10. In the XML file, `helloWorld.js-meta.xml`, replace the content with the following code. Save the file.

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

11. Push your changes.

```bash
sfdx force:source:push
```

Your helloWorld component is now ready for action. You can add this component to your apps and pages via the Lightning App Builder.
For more information, see the [Quick Start: Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/create-a-hello-world-lightning-web-component) Trailhead project.

## [Experimental] Use Base Components Outside of Salesforce Platform

 Base Components in the `c` namespace are intended for use on the Salesforce platform. However, we realize the desire to use them in non-Salesforce scenarios. Currently, many components will work, but others will not, due to dependencies on the Salesforce platform. Our goal is to provide Base Components for non-Salesforce use cases, and we’ve created the [LWC Storybook PoC](https://github.com/reiniergs/lwc-storybooks-poc) to show what this might look like in the future. Please click the Watch button on the repo for updates as we move forward.

## Documentation

Base components in the `c` namespace map to components in the `lightning` namespace. We transpiled the base components into the `c` namespace so that you can use the components in your projects. Find the base components in the `c` namespace in [base-components-recipes/force-app/main/default/lwc/](https://github.com/salesforce/base-components-recipes/tree/master/force-app/main/default/lwc).

The components below link to documentation for components in the `lightning` namespace, but the usage is similar unless otherwise noted.

| **Component**                                                                                                                               | **Description**                                                                                                                                                | **Comment**                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| [c-accordion](https://developer.salesforce.com/docs/component-library/bundle/lightning-accordion)                                           | A collection of vertically stacked sections with multiple content areas.                                                                                       | This component contains slots and isn't supported as an Aura component.
| [c-accordion-section](https://developer.salesforce.com/docs/component-library/bundle/lightning-accordion-section)                           | A single section of content. Use this component within `c-accordion`.                                                                                          | This component contains slots and isn't supported as an Aura component.
| [c-avatar](https://developer.salesforce.com/docs/component-library/bundle/lightning-avatar)                                                 | A visual representation of an object, such as an account or user                                                                                               |
| [c-badge](https://developer.salesforce.com/docs/component-library/bundle/lightning-badge)                                                   | A label which holds a small amount of information, such as the number of unread notifications                                                                  |
| [c-button](https://developer.salesforce.com/docs/component-library/bundle/lightning-button)                                                 | A button element that invokes an action                                                                                                                        |
| [c-button-group](https://developer.salesforce.com/docs/component-library/bundle/lightning-button-group)                                     | A group of buttons that invokes similar actions                                                                                                                |
| [c-button-icon](https://developer.salesforce.com/docs/component-library/bundle/lightning-button-icon)                                       | An icon-only button element that invokes an action                                                                                                             | The `tooltip` attribute isn't supported.
| [c-button-icon-stateful](https://developer.salesforce.com/docs/component-library/bundle/lightning-button-icon-stateful)                     | An icon-only button that retains state                                                                                                                         |
| [c-button-menu](https://developer.salesforce.com/docs/component-library/bundle/lightning-button-menu)                                       | A dropdown menu with a list of actions or functions. Use this component with `c-menu-divider` and `c-menu-subheader` to create menu dividers and sub-headings. | The `tooltip` attribute isn't supported. For the `menu-alignment` attribute, the `auto` alignment isn't supported. This component references labels on Salesforce platform.
| [c-button-stateful](https://developer.salesforce.com/docs/component-library/bundle/lightning-button-stateful)                               | A button that toggles between states                                                                                                                           |
| [c-card](https://developer.salesforce.com/docs/component-library/bundle/lightning-card)                                                     | A stylized container around a group of information                                                                                                             | This component contains slots and isn't supported as an Aura component.
| [c-carousel](https://developer.salesforce.com/docs/component-library/bundle/lightning-carousel)                                             | A collection of images and captions that are displayed one at a time. Use this component with c-carousel-image                                                 | This component contains slots and isn't supported as an Aura component. This component references labels on Salesforce platform.
| [c-checkbox-group](https://developer.salesforce.com/docs/component-library/bundle/lightning-checkbox-group)                                 | A group of checkboxes that enables selection of single or multiple options                                                                                     |
| [c-combobox](https://developer.salesforce.com/docs/component-library/bundle/lightning-combobox)                                             | A read-only input field with a dropdown list for single selection                                                                                              | This component references labels on Salesforce platform.
| [c-dual-listbox](https://developer.salesforce.com/docs/component-library/bundle/lightning-dual-listbox)                                     | A pair of lists that enables multiple options to be selected and reordered                                                                                     | This component references labels on Salesforce platform.
| [c-dynamic-icon](https://developer.salesforce.com/docs/component-library/bundle/lightning-dynamic-icon)                                     | A set of animated icons                                                                                                                                        |
| [c-formatted-date-time](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-date-time)                       | A pair of date and time that's displayed based on the user locale                                                                                              |
| [c-formatted-location](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-location)                         | A pair of latitude and longitude for a location                                                                                                                |
| [c-formatted-name](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-name)                                 | A name that's displayed based on the user locale, which determines the format and order of the constituents (suffix, salutation, etc.)                         |
| [c-formatted-number](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-number)                             | A decimal, currency, or percentage that's displayed base on the user locale                                                                                    |
| [c-formatted-phone](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-phone)                               | A phone number that opens the default VOIP call app when clicked                                                                                               |
| [c-formatted-text](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-text)                                 | A group of text with an option to display URLs and email addresses as links                                                                                    |
| [c-formatted-time](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-time)                                 | A time value that's displayed based on the user locale                                                                                                         |
| [c-formatted-url](https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-url)                                   | A URL that's displayed as a link                                                                                                                               |
| [c-icon](https://developer.salesforce.com/docs/component-library/bundle/lightning-icon)                                                     | A visual element that provides context and enhances usability                                                                                                  | For use on Salesforce platform only.
| [c-input-location](https://developer.salesforce.com/docs/component-library/bundle/lightning-input-location)                                 | A pair of latitude and longitude fields                                                                                                                        | This component references labels on Salesforce platform.
| [c-layout](https://developer.salesforce.com/docs/component-library/bundle/lightning-layout)                                                 | A responsive grid system                                                                                                                                       | This component contains slots and isn't supported as an Aura component.
| [c-layout-item](https://developer.salesforce.com/docs/component-library/bundle/lightning-layout-item)                                       | A container in a grid system                                                                                                                                   | This component contains slots and isn't supported as an Aura component.
| [c-menu-item](https://developer.salesforce.com/docs/component-library/bundle/lightning-menu-item/documentation)                             | A list item in a menu. Use this component within `c-button-menu`                                                                                               |
| [c-output-field](https://developer.salesforce.com/docs/component-library/bundle/lightning-output-field)                                     | A read-only display of a label, help text, and value for a field on a Salesforce object. Use this component within `c-record-view-form`.                       | For use on Salesforce platform only.
| [c-pill](https://developer.salesforce.com/docs/component-library/bundle/lightning-pill)                                                     | A label that can contain a link and can be removed from view                                                                                                   | This component contains slots and isn't supported as an Aura component. This component references labels on Salesforce platform.
| [c-pill-container](https://developer.salesforce.com/docs/component-library/bundle/lightning-pill-container)                                 | A list of pills grouped in a container                                                                                                                         | This component references labels on Salesforce platform.
| [c-radio-group](https://developer.salesforce.com/docs/component-library/bundle/lightning-radio-group)                                       | A group of radio buttons that can have a single option selected                                                                                                 | This component references labels on Salesforce platform.
| [c-record-edit-form](https://developer.salesforce.com/docs/component-library/bundle/lightning-record-edit-form)                             | A form for creating or editing a record with one or more fields                                                                                                | For use on Salesforce platform only. Use `c-record-edit-form` with `lightning-input-field`. Use `c-messages` in the form to display server-side error messages. This component references labels on Salesforce platform.
| [c-record-form](https://developer.salesforce.com/docs/component-library/bundle/lightning-record-form)                                       | A form for creating, displaying, or editing a record with automatic switching between edit and view modes                                                      | For use on Salesforce platform only. This component references labels on Salesforce platform.
| [c-record-view-form](https://developer.salesforce.com/docs/component-library/bundle/lightning-record-view-form)                             | A form for displaying record data. Use `c-output-field` within `c-record-view-form`.                                                                           | For use on Salesforce platform only. This component contains slots and isn't supported as an Aura component. This component references labels on Salesforce platform.
| [c-relative-date-time](https://developer.salesforce.com/docs/component-library/bundle/lightning-relative-date-time)                         | A group of text depicting how a specified time relates to the current time, such as "a few seconds ago" or "in 5 years"                                        |
| [c-slider](https://developer.salesforce.com/docs/component-library/bundle/lightning-slider)                                                 | An input range slider that enables selection of a value between two specified numbers                                                                          |
| [c-spinner](https://developer.salesforce.com/docs/component-library/bundle/lightning-spinner)                                               | An animated spinner                                                                                                                                            |
| [c-tab](https://developer.salesforce.com/docs/component-library/bundle/lightning-tab)                                                       | A single tab within a `c-tabset` component.                                                                                                                    |
| [c-tabset](https://developer.salesforce.com/docs/component-library/bundle/lightning-tabset)                                                 | A list of tabs. Use this component with `c-tab`.                                                                                                               | This component references labels on Salesforce platform.
| [c-textarea](https://developer.salesforce.com/docs/component-library/bundle/lightning-textarea)                                             | A textarea field for multi-line text input                                                                                                                     | This component references labels on Salesforce platform.
| [c-tile](https://developer.salesforce.com/docs/component-library/bundle/lightning-tile)                                                     | A group of related information associated with a record                                                                                                        | This component contains slots and isn't supported as an Aura component. This component references labels on Salesforce platform.
| [c-tree](https://developer.salesforce.com/docs/component-library/bundle/lightning-tree)                                                     | A visualization of a structural hierarchy with nested items that can be collapsed or expanded. Use this component with `c-tree-item`.                          | This component references labels on Salesforce platform.
| [c-vertical-navigation](https://developer.salesforce.com/docs/component-library/bundle/lightning-vertical-navigation)                       | A vertical list of links that can be grouped into sections using `c-vertical-navigation-section`                                                               | This component contains slots and isn't supported as an Aura component. This component references labels on Salesforce platform.
| [c-vertical-navigation-item](https://developer.salesforce.com/docs/component-library/bundle/lightning-vertical-navigation-item)             | A text-only link within `c-vertical-navigation-section` or `c-vertical-navigation-overflow`                                                                    |
| [c-vertical-navigation-item-badge](https://developer.salesforce.com/docs/component-library/bundle/lightning-vertical-navigation-item-badge) | A link and badge within `c-vertical-navigation-section` or `c-vertical-navigation-overflow`                                                                    |
| [c-vertical-navigation-item-icon](https://developer.salesforce.com/docs/component-library/bundle/lightning-vertical-navigation-item-icon)   | A link and icon within `c-vertical-navigation-section` or `c-vertical-navigation-overflow`                                                                     |

### Localization

You can create up to 5,000 custom labels for your organization, and they can be up to 1,000 characters in length. Create custom labels that you can use in your Lightning web components.

#### Update Labels

To update the Custom Labels metadata, go to the `force-app/main/default/labels` directory. The labels are available in the `lightning.labels-meta.xml` file. For syntax and an example of a CustomLabels definition, see the [Metadata API Dev Guide](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_customlabels.htm).

Add labels for your custom components in the `lightning.labels-meta.xml` file.

```xml
<labels>
    <categories>lightning</categories>
    <fullName>MyCard_cardTitle</fullName>
    <language>en_US</language>
    <protected>false</protected>
    <shortDescription>cardTitleLabel</shortDescription>
    <value>This is my card</value>
  </labels>
  ```

#### Customize Labels

To customize your labels, from Setup, type Custom Labels in the Quick Find box, then select **Custom Labels**. Our labels are shipped in English and can be translated to other languages. For more information, see the [Translate Labels](#translate-labels) section below and [Custom Labels](https://help.salesforce.com/articleView?id=cl_about.htm&type=5) in Salesforce Help.

#### Use Labels

Import the labels from the `@salesforce/label` scoped module. Reference your label name using the `c` namespace.

```javascript
// myComponent.js

import cardTitleLabel from '@salesforce/label/c.MyCard_cardTitle';
import loadingLabel from '@salesforce/label/c.lightning_LightningControl_loading';
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
    <c-card title={label.cardTitleLabel}>
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

### Testing

We use the [Jest JavaScript Testing Framework](https://jestjs.io/docs/en/getting-started) to author and run component tests.
If you modify any base component recipes or add your own components, run tests to verify your changes.

For your own components, add tests to a `__tests__` sub-folder of your `componentName` folder and name the test `componentName.spec.js`.

To illustrate how to test components we'll add a test to the helloWorld component created earlier.

1. Create a `__tests__` subfolder in the `helloWorld` folder.

2. Create a file named `helloWorld.spec.js` in `__tests__`.

3. Insert this code and save the file.

```javascript
//__tests__/helloWorld.spec.js

import { createElement } from 'lwc';
import Element from 'c/helloWorld';

const createComponent = (params = {}) => {
    const element = createElement('c-hello-world', { is: Element });
    Object.assign(element, params);
    document.body.appendChild(element);
    return element;
};

describe('c-hello-world', () => {
    it('button has the expected message', () => {
        const element = createComponent();
        const button = element.shadowRoot.querySelector('c-button');
        return Promise.resolve().then(() => {
            expect(button.label).toEqual('Hello World');
        });
    });
});
```

4. Run the helloWorld test suite from the `base-components-recipe` folder.

```bash
npm run test helloWorld
```

5. Run all base components recipes test suites.
```bash
npm run test
```

This runs lint and unit tests. See the `package.json` file for all the available tests.

## Contributing

We are not accepting contributions at this time. If you have any questions about base components recipes, please use the following channels.

-   [Trailblazer Community - Lightning Components Development](https://trailblazers.salesforce.com/_ui/core/chatter/groups/GroupProfilePage?g=0F930000000PbJa)
-   [Salesforce Developer Forums](https://developer.salesforce.com/forums)
-   [Salesforce Stackexchange](https://salesforce.stackexchange.com/)

## FAQ

-   **Where can I see more examples on how to use Lightning Web Components?**

    -   For examples on running Lightning Web Components on Salesforce platform, visit [lwc-recipes](https://github.com/trailheadapps/lwc-recipes/).
    -   For more sample apps using Lightning Web Components, visit https://trailhead.salesforce.com/sample-gallery.
    -   To experience Lightning Web Components on any platform, visit https://lwc.dev.

-   **How do I create a Lightning Web Component?**

    See the [Quick Start: Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/create-a-hello-world-lightning-web-component) Trailhead project. The [Lightning Web Components Developer Guide](https://developer.salesforce.com/docs/component-library/documentation/lwc) is also a great resource.
