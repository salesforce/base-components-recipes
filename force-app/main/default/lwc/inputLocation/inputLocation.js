/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import labelCoordinateIsRequired from '@salesforce/label/c.lightning_LightningInputLocation_coordinateIsRequired';
import labelInvalidLatitude from '@salesforce/label/c.lightning_LightningInputLocation_invalidLatitude';
import labelInvalidLongitude from '@salesforce/label/c.lightning_LightningInputLocation_invalidLongitude';
import labelLatitude from '@salesforce/label/c.lightning_LightningInputLocation_latitude';
import labelLongitude from '@salesforce/label/c.lightning_LightningInputLocation_longitude';
import { LightningElement, api, track } from 'lwc';
import { classSet } from 'c/utils';
import {
    assert,
    normalizeBoolean,
    normalizeString,
    classListMutation
} from 'c/utilsPrivate';
import { validateCoordinate } from './geolocation';
import {
    isEmptyString,
    InteractingState,
    normalizeVariant,
    FieldConstraintApi,
    VARIANT
} from 'c/inputUtils';

const i18n = {
    coordinateIsRequired: labelCoordinateIsRequired,
    invalidLatitude: labelInvalidLatitude,
    invalidLongitude: labelInvalidLongitude,
    latitude: labelLatitude,
    longitude: labelLongitude
};

export default class cInputLocation extends LightningElement {
    static delegatesFocus = true;

    @api label;

    @api fieldLevelHelp;

    @track _latitude = '';
    @track _longitude = '';
    @track _disabled = false;
    @track _readonly = false;
    @track _required = false;
    @track _variant;

    connectedCallback() {
        this._connected = true;

        this.interactingState = new InteractingState({
            debounceInteraction: true
        });

        this.interactingState.onenter(() => {
            this.dispatchEvent(new CustomEvent('focus'));
        });

        this.interactingState.onleave(() => {
            this.reportValidity();
            this.dispatchEvent(new CustomEvent('blur'));
        });

        this.classList.add('slds-form-element', 'slds-form-compound');
        this.updateClassList();
    }

    updateClassList() {
        classListMutation(this.classList, {
            'slds-form-element_stacked': this.variant === VARIANT.LABEL_STACKED,
            'slds-form-element_horizontal':
                this.variant === VARIANT.LABEL_INLINE
        });
    }

    disconnectedCallback() {
        this._connected = false;
    }

    @api get latitude() {
        return this._latitude;
    }

    set latitude(value) {
        if (value != null) {
            value = value.toString();
        }
        this._latitude = normalizeString(value);
    }

    @api get longitude() {
        return this._longitude;
    }

    set longitude(value) {
        if (value != null) {
            value = value.toString();
        }
        this._longitude = normalizeString(value);
    }

    @api get disabled() {
        return this._disabled;
    }

    set disabled(value) {
        this._disabled = normalizeBoolean(value);
    }

    @api get readOnly() {
        return this._readonly;
    }

    set readOnly(value) {
        this._readonly = normalizeBoolean(value);
    }

    @api get required() {
        return this._required;
    }

    set required(value) {
        this._required = normalizeBoolean(value);
    }

    @api get variant() {
        return this._variant || VARIANT.STANDARD;
    }

    set variant(value) {
        this._variant = normalizeVariant(value);
        this.updateClassList();
    }

    @api
    focus() {
        if (this._connected) {
            this.getCoordinateElement('latitude').focus();
        }
    }

    @api
    blur() {
        if (this._connected) {
            this.getCoordinateElement('latitude').blur();
            this.getCoordinateElement('longitude').blur();
        }
    }

    @api get validity() {
        return this._combinedConstraint.validity;
    }

    @api
    checkValidity() {
        return this._combinedConstraint.checkValidity();
    }

    @api
    showHelpMessageIfInvalid() {
        this.reportValidity();
    }

    @api
    setCustomValidityForField(message, fieldName) {
        assert(
            ['latitude', 'longitude'].indexOf(fieldName) >= 0,
            '"fieldName" must be "latitude" or "longitude"'
        );

        this._coordinateConstraints[fieldName].setCustomValidity(message);
    }

    @api
    reportValidity() {
        const valid = this.checkValidity();

        if (!this._connected) {
            return valid;
        }

        Object.keys(this._coordinateConstraints).forEach((coordinate) => {
            this._reportValidityForCoordinate(coordinate);
        });

        return valid;
    }

    get i18n() {
        return i18n;
    }

    get isLabelHidden() {
        return this.variant === VARIANT.LABEL_HIDDEN;
    }

    get computedLegendClass() {
        return classSet('slds-form-element__label slds-form-element__legend')
            .add({ 'slds-assistive-text': this.isLabelHidden })
            .toString();
    }

    handleLatitudeBlur() {
        this.interactingState.leave();
        this._reportValidityForCoordinate('latitude');
    }

    handleLongitudeBlur() {
        this.interactingState.leave();
        this._reportValidityForCoordinate('longitude');
    }

    handleFocus() {
        this.interactingState.enter();
    }

    handleLatitudeChange(event) {
        this.handleChange('latitude', event);
    }

    handleLongitudeChange(event) {
        this.handleChange('longitude', event);
    }

    handleChange(coordinate, event) {
        event.stopPropagation();
        const value = event.detail.value;
        if (this[coordinate] === value) {
            return;
        }

        if (coordinate === 'longitude') {
            this._longitude = value;
        } else if (coordinate === 'latitude') {
            this._latitude = value;
        }

        this.dispatchEvent(
            new CustomEvent('change', {
                composed: true,
                bubbles: true,
                detail: {
                    latitude: this.latitude,
                    longitude: this.longitude
                }
            })
        );
    }

    get _coordinateConstraints() {
        if (!this._coordinateConstraintApis) {
            this._coordinateConstraintApis = ['latitude', 'longitude'].reduce(
                (constraints, coordinate) => {
                    const constraintProviders = {
                        badInput: () =>
                            !this.disabled &&
                            !isEmptyString(this[coordinate]) &&
                            !validateCoordinate(coordinate, this[coordinate]),
                        valueMissing: () =>
                            !this.disabled &&
                            this.required &&
                            isEmptyString(this[coordinate])
                    };

                    constraints[coordinate] = new FieldConstraintApi(
                        this.getCoordinateElement.bind(this, coordinate),
                        constraintProviders
                    );

                    return constraints;
                },
                {}
            );
        }
        return this._coordinateConstraintApis;
    }

    get _combinedConstraint() {
        if (!this._combinedConstraintApi) {
            const { _coordinateConstraints } = this;
            const checkCoordinates = (property) =>
                Object.values(_coordinateConstraints).some(
                    (coordinateConstraint) =>
                        coordinateConstraint.validity[property]
                );

            this._combinedConstraintApi = new FieldConstraintApi(() => this, {
                customError: () => checkCoordinates('customError'),
                badInput: () => checkCoordinates('badInput'),
                valueMissing: () => checkCoordinates('valueMissing')
            });
        }
        return this._combinedConstraintApi;
    }

    getCoordinateElement(fieldName) {
        const propertyName = `_${fieldName}Element`;
        if (!this[propertyName]) {
            this[propertyName] = this.template.querySelector(
                `lightning-input[data-${fieldName}]`
            );
        }
        return this[propertyName];
    }

    _reportValidityForCoordinate(coordinate) {
        this._coordinateConstraints[coordinate].reportValidity(
            (helpMessage) => {
                const coordinateElement = this.getCoordinateElement(coordinate);
                coordinateElement.setCustomValidity(helpMessage);
                coordinateElement.reportValidity();
            }
        );
    }
}
