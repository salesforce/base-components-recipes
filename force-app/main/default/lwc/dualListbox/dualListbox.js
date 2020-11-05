/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import labelComponentAssistiveText from '@salesforce/label/c.lightning_LightningDualListbox_componentAssistiveText';
import labelDownButtonAssistiveText from '@salesforce/label/c.lightning_LightningDualListbox_downButtonAssistiveText';
import labelMaxError from '@salesforce/label/c.lightning_LightningDualListbox_maxError';
import labelMaxHelp from '@salesforce/label/c.lightning_LightningDualListbox_maxHelp';
import labelMinErrorPlural from '@salesforce/label/c.lightning_LightningDualListbox_minErrorPlural';
import labelMinErrorSingular from '@salesforce/label/c.lightning_LightningDualListbox_minErrorSingular';
import labelMinHelp from '@salesforce/label/c.lightning_LightningDualListbox_minHelp';
import labelMinRequiredErrorPlural from '@salesforce/label/c.lightning_LightningDualListbox_minRequiredErrorPlural';
import labelMinRequiredErrorSingular from '@salesforce/label/c.lightning_LightningDualListbox_minRequiredErrorSingular';
import labelOptionLockAssistiveText from '@salesforce/label/c.lightning_LightningDualListbox_optionLockAssistiveText';
import labelRequired from '@salesforce/label/c.lightning_LightningControl_required';
import labelRequiredError from '@salesforce/label/c.lightning_LightningDualListbox_requiredError';
import labelRequiredOptionError from '@salesforce/label/c.lightning_LightningDualListbox_requiredOptionError';
import labelUpButtonAssistiveText from '@salesforce/label/c.lightning_LightningDualListbox_upButtonAssistiveText';
import labelMoveSelectionToAssistiveText from '@salesforce/label/c.lightning_LightningDualListbox_moveSelectionToAssistiveText';
import labelLoadingText from '@salesforce/label/c.lightning_LightningCombobox_loadingText';
import { LightningElement, api, track } from 'lwc';
import { handleKeyDownOnOption } from './keyboard';
import { classSet, formatLabel } from 'c/utils';
import {
    assert,
    normalizeBoolean,
    getRealDOMId,
    classListMutation
} from 'c/utilsPrivate';
import {
    InteractingState,
    FieldConstraintApi,
    normalizeVariant,
    VARIANT
} from 'c/inputUtils';

const i18n = {
    componentAssistiveText: labelComponentAssistiveText,
    downButtonAssistiveText: labelDownButtonAssistiveText,
    maxError: labelMaxError,
    maxHelp: labelMaxHelp,
    minErrorPlural: labelMinErrorPlural,
    minErrorSingular: labelMinErrorSingular,
    minHelp: labelMinHelp,
    minRequiredErrorPlural: labelMinRequiredErrorPlural,
    minRequiredErrorSingular: labelMinRequiredErrorSingular,
    optionLockAssistiveText: labelOptionLockAssistiveText,
    required: labelRequired,
    requiredError: labelRequiredError,
    requiredOptionError: labelRequiredOptionError,
    upButtonAssistiveText: labelUpButtonAssistiveText,
    moveSelectionToAssistiveText: labelMoveSelectionToAssistiveText,
    loadingText: labelLoadingText
};

export default class cDualListbox extends LightningElement {
    @api sourceLabel;

    @api selectedLabel;

    @api label;

    @api options;

    @api min = 0;

    @api max;

    @api name;

    @track _showActivityIndicator = false;
    @track _requiredOptions = [];
    @track _selectedValues = [];
    @track _variant;
    @track _disabled;
    @track _disableReordering = false;
    @track _required = false;
    @track _addButtonLabel;
    @track _removeButtonLabel;
    @track _upButtonLabel;
    @track _downButtonLabel;
    @track _size;
    @track errorMessage = '';
    @track highlightedOptions = [];
    @track focusableInSource;
    @track focusableInSelected;

    isFocusOnList = false;

    @api messageWhenValueMissing = i18n.requiredError;

    @api get messageWhenRangeOverflow() {
        return this._messageWhenRangeOverflow || this._overflowMessage;
    }

    set messageWhenRangeOverflow(message) {
        this._messageWhenRangeOverflow = message;
    }

    @api get messageWhenRangeUnderflow() {
        return this._messageWhenRangeUnderflow || this._underflowMessage;
    }

    set messageWhenRangeUnderflow(message) {
        this._messageWhenRangeUnderflow = message;
    }

    @api get disabled() {
        return this._disabled || false;
    }

    set disabled(value) {
        this._disabled = normalizeBoolean(value);
    }

    @api get required() {
        return this._required;
    }

    set required(value) {
        this._required = normalizeBoolean(value);
    }

    @api get value() {
        return this._selectedValues;
    }

    set value(newValue) {
        this._selectedValues = newValue || [];
        if (this._connected) {
            this.addRequiredOptionsToValue();
        }
    }

    @api get requiredOptions() {
        return this._requiredOptions;
    }

    set requiredOptions(newValue) {
        this._requiredOptions = newValue || [];
        if (this._connected) {
            this.addRequiredOptionsToValue();
        }
    }

    @api get variant() {
        return this._variant || VARIANT.STANDARD;
    }

    set variant(value) {
        this._variant = normalizeVariant(value);
        this.updateClassList();
    }

    set size(value) {
        this._size = value;
    }

    @api get size() {
        return this._size;
    }

    @api fieldLevelHelp;

    set disableReordering(value) {
        this._disableReordering = normalizeBoolean(value);
    }

    @api get disableReordering() {
        return this._disableReordering;
    }

    @api get showActivityIndicator() {
        return this._showActivityIndicator;
    }

    set showActivityIndicator(value) {
        this._showActivityIndicator = normalizeBoolean(value);
    }

    @api
    focus() {
        const firstOption = this.template.querySelector(`div[data-index='0']`);
        if (firstOption) {
            firstOption.focus();
            this.updateSelectedOptions(firstOption, true, false);
        }
    }

    @api get validity() {
        return this._constraint.validity;
    }

    @api
    checkValidity() {
        return this._constraint.checkValidity();
    }

    @api
    reportValidity() {
        return this._constraint.reportValidity((message) => {
            this.errorMessage = message;
        });
    }

    @api
    setCustomValidity(message) {
        this._constraint.setCustomValidity(message);
    }

    @api
    showHelpMessageIfInvalid() {
        this.reportValidity();
    }

    connectedCallback() {
        this.classList.add('slds-form-element');
        this.updateClassList();
        this.keyboardInterface = this.selectKeyboardInterface();

        this._connected = true;
        this.addRequiredOptionsToValue();

        this.interactingState = new InteractingState({
            debounceInteraction: true
        });

        this.interactingState.onenter(() => {
            this.dispatchEvent(new CustomEvent('focus'));
        });
        this.interactingState.onleave(() => {
            this.showHelpMessageIfInvalid();
            this.dispatchEvent(new CustomEvent('blur'));

            this.optionToFocus = null;
        });
    }

    updateClassList() {
        classListMutation(this.classList, {
            'slds-form-element_stacked': this.variant === VARIANT.LABEL_STACKED,
            'slds-form-element_horizontal':
                this.variant === VARIANT.LABEL_INLINE
        });
    }

    renderedCallback() {
        this.assertRequiredAttributes();
        if (this.disabled) {
            return;
        }

        if (this.optionToFocus) {
            const option = this.template.querySelector(
                `div[data-value='${this.optionToFocus.replace(/'/g, "\\'")}']`
            );

            if (option) {
                this.isFocusOnList = true;
                option.focus();
            }
        }
    }

    get computedUniqueId() {
        return this.uniqueId;
    }

    get computedSourceListId() {
        return getRealDOMId(this.template.querySelector('[data-source-list]'));
    }

    get computedSelectedListId() {
        return getRealDOMId(
            this.template.querySelector('[data-selected-list]')
        );
    }

    get ariaDisabled() {
        return String(this.disabled);
    }

    get computedSourceList() {
        let sourceListOptions = [];
        if (this.options) {
            const required = this.requiredOptions;
            const values = this.value;
            sourceListOptions = this.options.filter(
                (option) =>
                    values.indexOf(option.value) === -1 &&
                    required.indexOf(option.value) === -1
            );
        }

        return this.computeListOptions(
            sourceListOptions,
            this.focusableInSource
        );
    }

    get computedSelectedList() {
        const selectedListOptions = [];
        if (this.options) {
            const optionsMap = {};
            this.options.forEach((option) => {
                optionsMap[option.value] = { ...option };
            });
            this.value.forEach((optionValue) => {
                const option = optionsMap[optionValue];
                if (option) {
                    option.isSelected = true;
                }
            });
            this.requiredOptions.forEach((optionValue) => {
                const option = optionsMap[optionValue];
                if (option) {
                    option.isLocked = true;
                }
            });

            this.value.forEach((optionValue) => {
                const option = optionsMap[optionValue];
                if (option) {
                    selectedListOptions.push(option);
                }
            });
        }

        return this.computeListOptions(
            selectedListOptions,
            this.focusableInSelected
        );
    }

    computeListOptions(options, focusableOptionValue) {
        if (options.length > 0) {
            const focusableOption = options.find((option) => {
                return option.value === focusableOptionValue;
            });

            const focusableValue = focusableOption
                ? focusableOption.value
                : options[0].value;
            return options.map((option) => {
                return this.computeOptionProperties(option, focusableValue);
            });
        }

        return [];
    }

    computeOptionProperties(option, focusableValue) {
        const isSelected = this.highlightedOptions.indexOf(option.value) > -1;
        const classList = classSet(
            'slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline'
        )
            .add({ 'slds-is-selected': isSelected })
            .toString();

        return {
            ...option,
            tabIndex: option.value === focusableValue ? '0' : '-1',
            selected: isSelected ? 'true' : 'false',
            classList
        };
    }

    get computedLeftColumnClass() {
        return classSet(
            'slds-dueling-list__column slds-dueling-list__column_responsive'
        )
            .add({ 'slds-is-relative': this.showActivityIndicator })
            .toString();
    }

    get computedColumnStyle() {
        if (this.isNumber(this.size)) {
            const newHeight = parseInt(this.size, 10) * 2.25 + 1;
            return `height:${newHeight}rem`;
        }
        return '';
    }

    get isLabelHidden() {
        return this.variant === VARIANT.LABEL_HIDDEN;
    }

    get computedGroupLabelClass() {
        return classSet('slds-form-element__label slds-form-element__legend')
            .add({ 'slds-assistive-text': this.isLabelHidden })
            .toString();
    }

    get computedListboxContainerClass() {
        return classSet('slds-dueling-list__options')
            .add({ 'slds-is-disabled': this.disabled })
            .toString();
    }

    get computedLockAssistiveText() {
        return formatLabel(
            this.i18n.optionLockAssistiveText,
            this.selectedLabel
        );
    }

    get i18n() {
        return i18n;
    }

    getRightButtonAssistiveText() {
        return formatLabel(
            i18n.moveSelectionToAssistiveText,
            this.selectedLabel
        );
    }

    @api get addButtonLabel() {
        if (this._addButtonLabel) {
            return this._addButtonLabel;
        }
        return this.getRightButtonAssistiveText();
    }

    set addButtonLabel(value) {
        this._addButtonLabel = value;
    }

    getLeftButtonAssistiveText() {
        return formatLabel(i18n.moveSelectionToAssistiveText, this.sourceLabel);
    }

    @api get removeButtonLabel() {
        if (this._removeButtonLabel) {
            return this._removeButtonLabel;
        }
        return this.getLeftButtonAssistiveText();
    }

    set removeButtonLabel(value) {
        this._removeButtonLabel = value;
    }

    @api get upButtonLabel() {
        return this._upButtonLabel || this.i18n.upButtonAssistiveText;
    }

    set upButtonLabel(value) {
        this._upButtonLabel = value;
    }

    @api get downButtonLabel() {
        return this._downButtonLabel || this.i18n.downButtonAssistiveText;
    }

    set downButtonLabel(value) {
        this._downButtonLabel = value;
    }

    get moveButtonsDisabled() {
        return this.disabled || this.showActivityIndicator;
    }

    handleOptionClick(event) {
        this.interactingState.interacting();
        if (this.disabled) {
            return;
        }
        const selectMultiple = event.metaKey || event.ctrlKey || event.shiftKey;
        const option = event.currentTarget;
        if (event.shiftKey) {
            this.selectAllFromLastSelectedToOption(option, false);
            return;
        }
        const selected =
            selectMultiple && option.getAttribute('aria-selected') === 'true';
        this.updateSelectedOptions(option, !selected, selectMultiple);
        this.shiftIndex = -1;
    }

    handleFocus(event) {
        this.interactingState.enter();

        const element = event.target;
        if (element.role === 'option') {
            if (!this.isFocusOnList) {
                this.isFocusOnList = true;
                this.updateSelectedOptions(element, true, false);
            }
        }
    }

    handleBlur(event) {
        this.interactingState.leave();

        const element = event.target;
        if (element.role !== 'option') {
            this.isFocusOnList = false;
        }
    }

    handleRightButtonClick() {
        this.interactingState.interacting();
        this.moveOptionsBetweenLists(true);
    }

    handleLeftButtonClick() {
        this.interactingState.interacting();
        this.moveOptionsBetweenLists(false);
    }

    handleUpButtonClick() {
        this.interactingState.interacting();
        this.changeOrderOfOptionsInList(true);
    }

    handleDownButtonClick() {
        this.interactingState.interacting();
        this.changeOrderOfOptionsInList(false);
    }

    handleOptionKeyDown(event) {
        this.interactingState.interacting();
        if (this.disabled) {
            return;
        }
        handleKeyDownOnOption(event, this.keyboardInterface);
    }

    moveOptionsBetweenLists(addToSelect, retainFocus) {
        const isValidList = addToSelect
            ? this.selectedList === this.computedSourceListId
            : this.selectedList === this.computedSelectedListId;
        if (!isValidList) {
            return;
        }
        const toMove = this.highlightedOptions;
        const values = this.computedSelectedList.map((option) => option.value);
        const required = this.requiredOptions;
        let newValues = [];
        if (addToSelect) {
            newValues = values.concat(toMove);
        } else {
            newValues = values.filter(
                (value) =>
                    toMove.indexOf(value) === -1 || required.indexOf(value) > -1
            );
        }

        const oldSelectedValues = this._selectedValues;
        this._selectedValues = newValues;
        const invalidMove =
            this.validity.valueMissing ||
            (this.validity.rangeOverflow &&
                this.selectedList === this.computedSourceListId) ||
            (this.validity.rangeUnderflow &&
                this.selectedList === this.computedSelectedListId);

        if (invalidMove || toMove.length === 0) {
            this.showHelpMessageIfInvalid();
            this._selectedValues = oldSelectedValues;
            return;
        }

        if (retainFocus) {
            const listId = addToSelect
                ? this.computedSelectedListId
                : this.computedSourceListId;
            this.selectedList = listId;
            this.updateFocusableOption(listId, toMove[0]);
        } else {
            this.interactingState.leave();
            this.isFocusOnList = false;
            this.highlightedOptions = [];
            this.optionToFocus = null;
        }

        this.dispatchChangeEvent(newValues);
    }

    changeOrderOfOptionsInList(moveUp) {
        const elementList = this.getElementsOfList(this.selectedList);
        const values = this.computedSelectedList.map((option) => option.value);
        const toMove = values.filter(
            (option) => this.highlightedOptions.indexOf(option) > -1
        );

        const validSelection =
            toMove.length === 0 ||
            this.selectedList !== this.computedSelectedListId;
        if (validSelection) {
            return;
        }
        let start = moveUp ? 0 : toMove.length - 1;
        let index = values.indexOf(toMove[start]);
        const validMove =
            (moveUp && index === 0) || (!moveUp && index === values.length - 1);
        if (validMove) {
            return;
        }

        if (moveUp) {
            while (start < toMove.length) {
                index = values.indexOf(toMove[start]);
                this.swapOptions(index, index - 1, values, elementList);
                start++;
            }
        } else {
            while (start > -1) {
                index = values.indexOf(toMove[start]);
                this.swapOptions(index, index + 1, values, elementList);
                start--;
            }
        }

        this._selectedValues = values;
        this.updateFocusableOption(this.selectedList, toMove[0]);
        this.optionToFocus = null;
        this.dispatchChangeEvent(values);
    }

    selectAllFromLastSelectedToOption(option, all) {
        const listId = option.getAttribute('data-type');
        this.updateCurrentSelectedList(listId, true);
        const options = this.getElementsOfList(listId);
        const end = all ? 0 : this.getOptionIndex(option);
        this.lastSelected = this.lastSelected < 0 ? end : this.lastSelected;
        const start = all ? options.length : this.lastSelected;
        let val, select;
        this.highlightedOptions = [];
        for (let i = 0; i < options.length; i++) {
            select = (i - start) * (i - end) <= 0;
            if (select) {
                val = options[i].getAttribute('data-value');
                this.highlightedOptions.push(val);
            }
        }
    }

    updateSelectedOptions(option, select, isMultiple) {
        const value = option.getAttribute('data-value');
        const listId = this.getListId(option);
        const optionIndex = this.getOptionIndex(option);
        this.updateCurrentSelectedList(listId, isMultiple);
        if (select) {
            if (this.highlightedOptions.indexOf(value) === -1) {
                this.highlightedOptions.push(value);
            }
        } else {
            this.highlightedOptions.splice(
                this.highlightedOptions.indexOf(value),
                1
            );
        }

        this.updateFocusableOption(listId, value);

        this.lastSelected = optionIndex;
    }

    addRequiredOptionsToValue() {
        if (
            !this.options ||
            !this.options.length ||
            !this._requiredOptions ||
            !this._requiredOptions.length
        ) {
            return;
        }

        const numOfSelectedValues = this._selectedValues.length;
        const allValues = this.options.map((option) => option.value);

        const requiredValues = this._requiredOptions.filter((option) =>
            allValues.includes(option)
        );

        this._selectedValues = [
            ...new Set([...requiredValues, ...this._selectedValues])
        ];

        if (numOfSelectedValues !== this._selectedValues.length) {
            this.dispatchChangeEvent(this._selectedValues);
        }
    }

    get _constraint() {
        if (!this._constraintApi) {
            this._constraintApi = new FieldConstraintApi(() => this, {
                valueMissing: () =>
                    !this.disabled &&
                    this.required &&
                    this.computedSelectedList.length < 1,
                rangeUnderflow: () =>
                    this.computedSelectedList.length < this.min,
                rangeOverflow: () => this.computedSelectedList.length > this.max
            });
        }
        return this._constraintApi;
    }

    get _overflowMessage() {
        const minHelpMsg =
            this.min > 0 ? formatLabel(this.i18n.minHelp, this.min) : '';

        return formatLabel(this.i18n.maxError, this.max) + minHelpMsg;
    }

    get _underflowMessage() {
        const maxHelpMsg = this.max
            ? formatLabel(this.i18n.maxHelp, this.max)
            : '';
        const minRequiredError =
            this.min > 1
                ? formatLabel(this.i18n.minRequiredErrorPlural, this.min)
                : this.i18n.minRequiredErrorSingular;
        const minError =
            this.min > 1
                ? formatLabel(this.i18n.minErrorPlural, this.min)
                : this.i18n.minErrorSingular;

        return this.required
            ? minRequiredError + maxHelpMsg
            : minError + maxHelpMsg;
    }

    updateCurrentSelectedList(currentList, isMultiple) {
        if (this.selectedList !== currentList || !isMultiple) {
            if (this.selectedList) {
                this.highlightedOptions = [];
                this.lastSelected = -1;
            }
            this.selectedList = currentList;
        }
    }

    dispatchChangeEvent(values) {
        this.dispatchEvent(
            new CustomEvent('change', {
                composed: true,
                bubbles: true,
                detail: { value: values }
            })
        );
    }

    assertRequiredAttributes() {
        assert(
            !!this.label,
            `<c-dual-listbox> Missing required "label" attribute.`
        );

        assert(
            !!this.sourceLabel,
            `<c-dual-listbox> Missing required "sourceLabel" attribute.`
        );

        assert(
            !!this.selectedLabel,
            `<c-dual-listbox> Missing required "selectedLabel" attribute.`
        );

        assert(
            !!this.options,
            `<c-dual-listbox> Missing required "options" attribute.`
        );
    }

    swapOptions(i, j, array) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    getElementsOfList(listId) {
        const elements = this.template.querySelectorAll(
            `div[data-type='${listId}']`
        );

        return elements ? elements : [];
    }

    selectKeyboardInterface() {
        const that = this;
        that.shiftIndex = -1;
        that.lastShift = null;
        return {
            getShiftIndex() {
                return that.shiftIndex;
            },
            setShiftIndex(value) {
                that.shiftIndex = value;
            },
            getLastShift() {
                return that.lastShift;
            },
            setLastShift(value) {
                that.lastShift = value;
            },
            getElementsOfList(listId) {
                return that.getElementsOfList(listId);
            },
            selectAllOptions(option) {
                that.selectAllFromLastSelectedToOption(option, true);
            },
            updateSelectedOptions(option, select, isMultiple) {
                that.updateSelectedOptions(option, select, isMultiple);
            },
            moveOptionsBetweenLists(addToSelect) {
                that.moveOptionsBetweenLists(addToSelect, true);
            }
        };
    }

    getOptionIndex(optionElement) {
        return parseInt(optionElement.getAttribute('data-index'), 10);
    }

    getListId(optionElement) {
        return getRealDOMId(optionElement.parentElement.parentElement);
    }

    updateFocusableOption(listId, value) {
        if (listId === this.computedSourceListId) {
            this.focusableInSource = value;
        } else if (listId === this.computedSelectedListId) {
            this.focusableInSelected = value;
        }
        this.optionToFocus = value;
    }

    isNumber(value) {
        return value !== '' && value !== null && isFinite(value);
    }
}
