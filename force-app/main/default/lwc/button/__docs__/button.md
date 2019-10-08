---
examples:
 - name: basic
   label: Basic Buttons
   description: Button variants display the buttons with different colors to convey different meanings. The default variant is neutral.
 - name: disabled
   label: Disabled Buttons
   description: Disabled buttons are grayed out and can't be clicked.
 - name: withIcon
   label: Buttons with Icons
   description: Buttons can include a utility icon next to the label for decorative purposes. The default icon position is left.
 - name: inverse
   label: Inverse Buttons
   description: Buttons with the inverse variant are transparent and have light-colored labels, which works well with a dark background.
 - name: onclick
   label: Buttons with Custom onclick Actions
   description: Buttons can use custom onclick handlers to perform actions.
 - name: accesskey
   label: Buttons with Accesskey and Tabindex Attributes
   description: Buttons define access key shortcuts with the accesskey attribute, and use the tabindex attribute to determine the order in which those buttons are visited when using the tab key.
---
A `lightning-button` component represents a button element that executes an
action. Use `lightning-button` where users need to:

* submit or reset a form
* begin a new task
* trigger a new UI element to appear on the page
* specify a new or next step in a process

Use the `type` attribute to specify `button`, `submit`, or `reset`. The default type is `button`
and doesn't need to be specified.

The `submit` and `reset` types create buttons for submitting and resetting form data.
Use these button types in `lightning-record-edit-form` and the HTML `form` element. The `reset` type
button only deletes the values in the form fields without interacting with the database. For information about
resetting the form fields to their initial values, see
[`lightning-record-edit-form`](bundle/lightning-record-edit-form/documentation) .

For the default button, clicking the button triggers the `click` event. Use an `onclick` handler to perform
the button's action.

Use the `variant` attribute with one of these values to apply styling.

* `base` is a button without a border, which gives it the look of a plain text link.
* `neutral` is the default variant, a plain uncolored button.
* `brand` is a blue button, used to draw attention to the primary action on a page.
* `brand-outline` is similar to `brand` but the color is used for the label and border only, not the button color.
* `destructive` is a red button used to warn users that its action has a negative effect.
* `destructive-text` is similar to `destructive` but only the label and border are red.
* `inverse` uses the background color and light text, useful for dark backgrounds.
* `success` is a green button used to indicate a successful action.

You can also apply [utility classes](https://www.lightningdesignsystem.com/utilities/alignment/) with the `class` attribute.

You can create a button with a label only, or add the `icon-name` attribute
for a button with a label and icon. For an icon-only
button, use `lightning-button-icon` instead.

The Lightning Design System utility icon category provides nearly 200 utility
icons that can be used in `lightning-button` along with label text. Although
Lightning Design System provides several categories of icons, only the utility category can be
used in this component.

Visit [https://lightningdesignsystem.com/icons/#utility](https://lightningdesignsystem.com/icons/#utility)
to view the utility icons.

This component inherits styling from
[buttons](https://www.lightningdesignsystem.com/components/buttons/) in the
Lightning Design System.

Here's an example that creates a button with the `brand` variant, and displays
`label` text on the button. The `title` attribute provides tooltip text for the button.

```html
<template>
    <lightning-button
        variant="brand"
        label="Start"
        title="Begins the task"
        onclick={handleClick}>
    </lightning-button>
</template>
```

Here's another example that creates a button with the `brand` variant, with a label
and icon. The icon is positioned to the left
of the label by default, so the example uses `icon-position` to display it on the right.

```html
<template>
    <lightning-button
        variant="brand"
        label="Download"
        icon-name="utility:download"
        icon-position="right"
        onclick={handleClick}>
    </lightning-button>
</template>
```

You can retrieve the button that's clicked by using `event.target`. For
example, to retrieve the label on the button, use
`event.target.label`.

#### Usage Considerations

Icons are not available in Lightning Out, but they are available in Lightning Components for Visualforce and other experiences.

If you're creating forms to interact with Salesforce records, consider using `lightning-record-form` or `lightning-record-edit-form`.

#### Accessibility

To inform screen readers that a button is disabled, include the `disabled`
attribute.
