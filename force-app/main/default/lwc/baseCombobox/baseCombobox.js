/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import labelAriaSelectedOptions from '@salesforce/label/c.lightning_LightningCombobox_ariaSelectedOptions';
import labelDeselectOptionKeyboard from '@salesforce/label/c.lightning_LightningCombobox_deselectOptionKeyboard';
import labelLoadingText from '@salesforce/label/c.lightning_LightningCombobox_loadingText';
import labelPillCloseButtonAlternativeText from '@salesforce/label/c.lightning_LightningCombobox_pillCloseButtonAlternativeText';
import { api, LightningElement, track } from 'lwc';
import { handleKeyDownOnInput } from './keyboard';
import { BaseComboboxEvents } from './baseComboboxEvents';
import { classSet } from 'c/utils';
import {
    assert,
    getRealDOMId,
    normalizeAriaAttribute,
    normalizeBoolean,
    normalizeString,
    synchronizeAttrs
} from 'c/utilsPrivate';

import { VARIANT } from 'c/inputUtils';

const i18n = {
    ariaSelectedOptions: labelAriaSelectedOptions,
    deselectOptionKeyboard: labelDeselectOptionKeyboard,
    pillCloseButtonAlternativeText: labelPillCloseButtonAlternativeText,
    loadingText: labelLoadingText
};

const SMALL_MIN_HEIGHT = '2.25rem';
const MEDIUM_MIN_HEIGHT = '6.75rem';

const VIEWPORT_HEIGHT_SMALL = 834;

const ARIA_CONTROLS = 'aria-controls';
const ARIA_LABELLEDBY = 'aria-labelledby';
const ARIA_DESCRIBEDBY = 'aria-describedby';
const ARIA_LABEL = 'aria-label';
const ARIA_ACTIVEDESCENDANT = 'aria-activedescendant';

export default class cBaseCombobox extends LightningElement {
    static delegatesFocus = true;

    @api autocomplete = 'off';

    @api inputText = '';
    @api inputIconName = 'utility:down';
    @api inputIconSize = 'x-small';
    @api inputIconAlternativeText;
    @api inputMaxlength;
    @api showInputActivityIndicator = false;
    @api required = false;
    @api dropdownAlignment = 'left';
    @api placeholder = 'Select an Item';
    @api inputLabel;

    @api name;
    @api inputPill;
    @api attributionLogoUrl;
    @api attributionLogoAssistiveText;

    @track _showDropdownActivityIndicator = false;
    @track _items = [];
    @track _disabled = false;
    @track _dropdownVisible = false;
    @track _hasDropdownOpened = false;
    @track _highlightedOptionElementId = null;
    @track _variant;
    @track _dropdownHeight = 'standard';
    @track _readonly = false;
    @track _logoLoaded = false;

    _inputDescribedBy = [];
    _inputAriaControls;
    _activeElementDomId;

    constructor() {
        super();
        this._events = new BaseComboboxEvents(this);
    }

    renderedCallback() {
        this.dispatchEvent(
            new CustomEvent('ready', {
                detail: {
                    id: this.inputId,
                    name: this.name
                }
            })
        );

        this.synchronizeA11y();
    }

    connectedCallback() {
        this.classList.add('slds-combobox_container');
        this._connected = true;
        this._keyboardInterface = this.dropdownKeyboardInterface();
    }

    disconnectedCallback() {
        this._connected = false;
        this._listBoxElementCache = undefined;
    }

    @api get inputControlsElement() {
        return this._inputAriaControls;
    }

    set inputControlsElement(el) {
        this._inputAriaControls = el;
        this.synchronizeA11y();
    }

    @api get inputDescribedByElements() {
        return this._inputDescribedBy;
    }

    set inputDescribedByElements(elements) {
        if (Array.isArray(elements)) {
            this._inputDescribedBy = elements;
        } else {
            this._inputDescribedBy = [elements];
        }

        this.synchronizeA11y();
    }

    @api get inputLabelledByElement() {
        return this._inputLabelledBy;
    }

    set inputLabelledByElement(el) {
        this._inputLabelledBy = el;
        this.synchronizeA11y();
    }

    get inputLabelledById() {
        return getRealDOMId(this._inputLabelledBy);
    }

    get inputAriaControlsId() {
        return getRealDOMId(this._inputAriaControls);
    }

    get inputId() {
        return getRealDOMId(this.template.querySelector('input'));
    }

    get computedAriaDescribedBy() {
        const ariaValues = [];
        this._inputDescribedBy.forEach((el) => {
            ariaValues.push(getRealDOMId(el));
        });
        return normalizeAriaAttribute(ariaValues);
    }

    @api get dropdownHeight() {
        return this._dropdownHeight;
    }

    set dropdownHeight(height) {
        this._dropdownHeight = normalizeString(height, {
            fallbackValue: 'standard',
            validValues: ['standard', 'small']
        });
    }

    @api get showDropdownActivityIndicator() {
        return this._showDropdownActivityIndicator;
    }

    set showDropdownActivityIndicator(value) {
        this._showDropdownActivityIndicator = normalizeBoolean(value);

        if (this._connected) {
            if (this._showDropdownActivityIndicator) {
                if (this._shouldOpenDropDown) {
                    this.openDropdownIfNotEmpty();
                }
            } else if (this._dropdownVisible && this.isDropdownEmpty) {
                this.closeDropdown();
            }
        }
    }

    @api get disabled() {
        return this._disabled;
    }

    set disabled(value) {
        this._disabled = normalizeBoolean(value);

        if (this._disabled && this._dropdownVisible) {
            this.closeDropdown();
        }
    }

    @api get readOnly() {
        return this._readonly;
    }

    set readOnly(value) {
        this._readonly = normalizeBoolean(value);
        if (this._readonly && this._dropdownVisible) {
            this.closeDropdown();
        }
    }

    @api get variant() {
        return this._variant || VARIANT.STANDARD;
    }

    set variant(value) {
        this._variant = normalizeString(value, {
            fallbackValue: VARIANT.STANDARD,
            validValues: [VARIANT.STANDARD, 'lookup']
        });
    }

    @api get items() {
        return this._unprocessedItems;
    }

    set items(items = []) {
        this._unprocessedItems = items;

        if (this._connected) {
            if (this._hasDropdownOpened) {
                this.updateItems(items);

                if (this._dropdownVisible) {
                    if (this.isDropdownEmpty) {
                        this.closeDropdown();
                    } else {
                        this.highlightDefaultItem();
                    }
                }
            }

            if (this._shouldOpenDropDown) {
                this.openDropdownIfNotEmpty();
            }
        }
    }

    @api
    highlightInputText() {
        if (this._connected) {
            // eslint-disable-next-line @lwc/lwc/no-async-operation
            requestAnimationFrame(() => {
                const { inputElement } = this;
                inputElement.setSelectionRange(0, inputElement.value.length);
            });
        }
    }

    get showAttribution() {
        return this.attributionLogoUrl;
    }

    @api
    focus() {
        if (this._connected) {
            this.inputElement.focus();
        }
    }

    @api
    focusAndOpenDropdownIfNotEmpty() {
        if (this._connected) {
            if (!this._inputHasFocus) {
                this.focus();
            }
            this.openDropdownIfNotEmpty();
        }
    }

    @api
    blur() {
        if (this._connected) {
            this.inputElement.blur();
        }
    }

    synchronizeA11y() {
        const input = this.template.querySelector('input');
        if (!input) {
            return;
        }
        synchronizeAttrs(input, {
            [ARIA_LABELLEDBY]: this.inputLabelledById,
            [ARIA_DESCRIBEDBY]: this.computedAriaDescribedBy,
            [ARIA_ACTIVEDESCENDANT]: this._activeElementDomId,
            [ARIA_CONTROLS]: this.computedInputControls,
            [ARIA_LABEL]: this.inputLabel
        });
    }

    itemId(index) {
        return this.inputId + '-' + index;
    }

    itemIndexFromId(id) {
        return parseInt(id.substring(id.lastIndexOf('-') + 1), 10);
    }

    processItem(item) {
        const itemCopy = {};

        itemCopy.type = item.type;
        itemCopy.iconName = item.iconName;
        itemCopy.iconSize = item.iconSize;
        itemCopy.iconAlternativeText = item.iconAlternativeText;
        itemCopy.rightIconName = item.rightIconName;
        itemCopy.rightIconSize = item.rightIconSize;
        itemCopy.rightIconAlternativeText = item.rightIconAlternativeText;
        itemCopy.text = item.text;
        itemCopy.subText = item.subText;
        itemCopy.value = item.value;

        itemCopy.checked = item.checked || false;

        itemCopy.selectable =
            ['option-card', 'option-inline'].indexOf(item.type) >= 0;

        if (itemCopy.selectable) {
            itemCopy.index = this._selectableItems;
            itemCopy.id = this.itemId(itemCopy.index);

            this._selectableItems += 1;

            if (item.highlight) {
                this._highlightedItemIndex = itemCopy.index;
            }
        }
        return itemCopy;
    }

    get _inputReadOnly() {
        return (
            this._readonly ||
            this.variant === VARIANT.STANDARD ||
            this.hasInputPill
        );
    }

    get computedAriaAutocomplete() {
        if (this.hasInputPill) {
            return null;
        }

        return this._inputReadOnly ? 'none' : 'list';
    }

    get computedPlaceholder() {
        return this.hasInputPill ? this.inputPill.label : this.placeholder;
    }

    get computedInputValue() {
        return this.hasInputPill ? this.inputPill.label : this.inputText;
    }

    handleListboxScroll(event) {
        event.stopPropagation();

        const listbox = event.target;
        const height = listbox.getBoundingClientRect().height;
        const maxScroll = listbox.scrollHeight - height;

        const buffer = 20;
        const bottomReached = listbox.scrollTop + buffer >= maxScroll;
        if (bottomReached) {
            this._events.dispatchEndReached();
        }
    }

    get listboxElement() {
        if (!this._listBoxElementCache) {
            this._listBoxElementCache = this.template.querySelector(
                '[role="listbox"]'
            );
        }
        return this._listBoxElementCache;
    }

    get computedUniqueElementId() {
        return this.inputId;
    }

    get computedUniqueDropdownElementId() {
        return getRealDOMId(
            this.template.querySelector('[data-dropdown-element]')
        );
    }

    get computedInputControls() {
        const ariaValues = [this.computedUniqueDropdownElementId];

        if (this.inputControlsElement) {
            ariaValues.push(this.inputAriaControlsId);
        }

        return normalizeAriaAttribute(ariaValues);
    }

    get i18n() {
        return i18n;
    }

    get computedDropdownTriggerClass() {
        return classSet(
            'slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click'
        )
            .add({ 'slds-is-open': this._dropdownVisible })
            .toString();
    }

    get computedDropdownClass() {
        const alignment = this.dropdownAlignment;

        let dropdownLengthClass = '';

        if (this._dropdownVisible) {
            if (this.dropdownHeight === 'standard') {
                if (window.innerHeight <= VIEWPORT_HEIGHT_SMALL) {
                    dropdownLengthClass = 'slds-dropdown_length-with-icon-7';
                } else {
                    dropdownLengthClass = 'slds-dropdown_length-with-icon-10';
                }
            } else if (this.dropdownHeight === 'small') {
                dropdownLengthClass = 'slds-dropdown_length-with-icon-5';
            }
        }

        return classSet(
            `slds-listbox slds-listbox_vertical slds-dropdown slds-dropdown_fluid ${dropdownLengthClass}`
        )
            .add({
                'slds-dropdown_left':
                    alignment === 'left' || alignment === 'auto',
                'slds-dropdown_center': alignment === 'center',
                'slds-dropdown_right': alignment === 'right',
                'slds-dropdown_bottom': alignment === 'bottom-center',
                'slds-dropdown_bottom slds-dropdown_right slds-dropdown_bottom-right':
                    alignment === 'bottom-right',
                'slds-dropdown_bottom slds-dropdown_left slds-dropdown_bottom-left':
                    alignment === 'bottom-left'
            })
            .toString();
    }

    get computedInputClass() {
        const classes = classSet('slds-input slds-combobox__input');
        if (this.hasInputPill) {
            classes.add('slds-combobox__input-value');
        } else {
            classes.add({
                'slds-input-has-icon_group-right': this
                    .showInputActivityIndicator
            });
        }
        return classes.toString();
    }

    get _shouldOpenDropDown() {
        return (
            !this.dropdownDisabled &&
            this._inputHasFocus &&
            this._requestedDropdownOpen
        );
    }

    get dropdownDisabled() {
        return this.readOnly || this.disabled;
    }

    handleOptionClick(event) {
        if (event.target.hasAttribute('aria-selected')) {
            event.stopPropagation();
            event.preventDefault();

            this.selectOptionAndCloseDropdown(event.target);
        }
    }

    handleOptionMouseEnter(event) {
        if (event.target.hasAttribute('aria-selected')) {
            this.highlightOption(event.target);
        }
    }

    handleDropdownMouseLeave() {
        this.removeHighlight();

        if (!this._inputHasFocus) {
            this.closeDropdown();
        }
    }

    handleTriggerClick(event) {
        event.stopPropagation();

        this.allowBlur();

        if (this.dropdownDisabled) {
            return;
        }

        if (!this.hasInputPill) {
            if (this._inputReadOnly) {
                if (this._dropdownVisible) {
                    this.closeDropdown();
                } else {
                    this.openDropdownIfNotEmpty();
                }
            } else {
                this.openDropdownIfNotEmpty();
            }
            this.inputElement.focus();
        }
    }

    handlePillKeyDown(event) {
        if (this.dropdownDisabled) {
            return;
        }

        if (event.key === 'Delete' || event.key === 'Del') {
            this.handlePillRemove();
        }
    }

    handleInputKeyDown(event) {
        if (this.dropdownDisabled) {
            return;
        }
        if (this.hasInputPill) {
            this.handlePillKeyDown(event);
        } else {
            handleKeyDownOnInput({
                event,
                currentIndex: this.getCurrentHighlightedOptionIndex(),
                dropdownInterface: this._keyboardInterface
            });
        }
    }

    handleTextChange() {
        this._events.dispatchTextChange(this.inputElement.value);
    }

    handleFocus() {
        this._inputHasFocus = true;
        this._events.dispatchFocus();
    }

    handleInput() {
        if (!this.hasInputPill) {
            this._events.dispatchTextInput(this.inputElement.value);
        }
    }

    handleBlur() {
        this._inputHasFocus = false;

        if (this._cancelBlur) {
            return;
        }
        this.closeDropdown();

        this._events.dispatchBlur();
    }

    handleDropdownMouseDown(event) {
        const mainButton = 0;
        if (event.button === mainButton) {
            this.cancelBlur();
        }
    }

    handleDropdownMouseUp() {
        this.allowBlur();
    }

    highlightOption(option) {
        this.removeHighlight();
        if (option) {
            option.highlight();
            this._highlightedOptionElement = option;
            this._highlightedOptionElementId = option.getAttribute(
                'data-item-id'
            );

            this._activeElementDomId = option.id;
        }
        this.synchronizeA11y();
    }

    highlightOptionAndScrollIntoView(optionElement) {
        if (this._selectableItems.length === 0 || !optionElement) {
            return;
        }
        this.highlightOption(optionElement);
        scrollIntoViewIfNeeded(optionElement, this.listboxElement);
    }

    removeHighlight() {
        const option = this._highlightedOptionElement;
        if (option) {
            option.removeHighlight();
            this._highlightedOptionElement = null;
            this._highlightedOptionElementId = null;
            this._activeElementDomId = null;
        }
    }

    selectOptionAndCloseDropdown(optionElement) {
        this.closeDropdown();

        this.inputElement.focus();

        const selectedValue = optionElement.getAttribute('data-value');
        this._events.dispatchSelect(selectedValue);
    }

    handleInputSelect(event) {
        event.stopPropagation();
    }

    openDropdownIfNotEmpty() {
        if (this._dropdownVisible) {
            return;
        }

        const noOptions = !Array.isArray(this.items) || this.items.length === 0;

        if (noOptions && !this._requestedDropdownOpen) {
            this._events.dispatchDropdownOpenRequest();
        }

        if (this.isDropdownEmpty) {
            this._requestedDropdownOpen = true;
            return;
        }

        if (!this._hasDropdownOpened) {
            if (this._unprocessedItems) {
                this.updateItems(this._unprocessedItems);
            }
            this._hasDropdownOpened = true;
        }

        this._requestedDropdownOpen = false;

        this._dropdownVisible = true;

        this.highlightDefaultItem();

        this._events.dispatchDropdownOpen();
    }

    closeDropdown() {
        if (!this._dropdownVisible) {
            return;
        }

        this.removeHighlight();
        this._dropdownVisible = false;
    }

    findOptionElementByIndex(index) {
        return this.template.querySelector(
            `[data-item-id="${this.itemId(index)}"]`
        );
    }

    allowBlur() {
        this._cancelBlur = false;
    }

    cancelBlur() {
        this._cancelBlur = true;
    }

    getCurrentHighlightedOptionIndex() {
        if (
            this._highlightedOptionElementId &&
            this._highlightedOptionElementId.length > 0
        ) {
            return this.itemIndexFromId(this._highlightedOptionElementId);
        }
        return -1;
    }

    get inputElement() {
        return this.template.querySelector('input');
    }

    get hasInputPill() {
        return this.inputPill && Object.keys(this.inputPill).length > 0;
    }

    handlePillRemove() {
        this.inputElement.focus();
        this._events.dispatchPillRemove(this.inputPill);
    }

    get computedFormElementClass() {
        const hasIcon = this.hasInputPill && this.inputPill.iconName;
        return classSet('slds-combobox__form-element slds-input-has-icon')
            .add({
                'slds-input-has-icon_right': !hasIcon,
                'slds-input-has-icon_left-right': hasIcon
            })
            .toString();
    }

    get computedAriaExpanded() {
        return this._dropdownVisible ? 'true' : 'false';
    }

    updateItems(items) {
        if (!items) {
            return;
        }

        assert(Array.isArray(items), '"items" must be an array');

        this._selectableItems = 0;
        this._highlightedItemIndex = 0;

        this._items = items.map((item) => {
            if (item.items) {
                const groupCopy = { label: item.label };
                groupCopy.items = item.items.map((groupItem) => {
                    return this.processItem(groupItem);
                });
                return groupCopy;
            }
            return this.processItem(item);
        });
    }

    highlightDefaultItem() {
        this.removeHighlight();
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        requestAnimationFrame(() => {
            this.highlightOptionAndScrollIntoView(
                this.findOptionElementByIndex(this._highlightedItemIndex)
            );
        });
    }

    get isDropdownEmpty() {
        return (
            !this.showDropdownActivityIndicator &&
            (!Array.isArray(this.items) || this.items.length === 0)
        );
    }

    dropdownKeyboardInterface() {
        const that = this;
        return {
            getTotalOptions() {
                return that._selectableItems;
            },
            selectByIndex(index) {
                that.selectOptionAndCloseDropdown(
                    that.findOptionElementByIndex(index)
                );
            },
            highlightOptionWithIndex(index) {
                that.highlightOptionAndScrollIntoView(
                    that.findOptionElementByIndex(index)
                );
            },
            isInputReadOnly() {
                return that._inputReadOnly;
            },
            highlightOptionWithText(currentIndex, text) {
                for (
                    let index = currentIndex + 1;
                    index < that._items.length;
                    index++
                ) {
                    const option = that._items[index];
                    if (
                        option.selectable &&
                        option.text &&
                        option.text
                            .toLowerCase()
                            .indexOf(text.toLowerCase()) === 0
                    ) {
                        that.highlightOptionAndScrollIntoView(
                            that.findOptionElementByIndex(index)
                        );

                        return;
                    }
                }
                for (let index = 0; index < currentIndex; index++) {
                    const option = that._items[index];
                    if (
                        option.selectable &&
                        option.text &&
                        option.text
                            .toLowerCase()
                            .indexOf(text.toLowerCase()) === 0
                    ) {
                        that.highlightOptionAndScrollIntoView(
                            that.findOptionElementByIndex(index)
                        );

                        return;
                    }
                }
            },
            isDropdownVisible() {
                return that._dropdownVisible;
            },
            openDropdownIfNotEmpty() {
                that.openDropdownIfNotEmpty();
            },
            closeDropdown() {
                that.closeDropdown();
            }
        };
    }
}

function scrollIntoViewIfNeeded(element, scrollingParent) {
    const parentRect = scrollingParent.getBoundingClientRect();
    const findMeRect = element.getBoundingClientRect();
    if (findMeRect.top < parentRect.top) {
        if (element.offsetTop + findMeRect.height < parentRect.height) {
            scrollingParent.scrollTop = 0;
        } else {
            scrollingParent.scrollTop = element.offsetTop;
        }
    } else if (findMeRect.bottom > parentRect.bottom) {
        scrollingParent.scrollTop += findMeRect.bottom - parentRect.bottom;
    }
}
