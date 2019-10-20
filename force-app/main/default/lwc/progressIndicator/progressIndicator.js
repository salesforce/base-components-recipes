import { LightningElement, api, track } from 'lwc';
import { classSet } from 'c/utils';
import {
    getStepIndex,
    getCurrentStepIndex,
    computeProgressValue
} from './utils';
import base from './base.html';
import path from './path.html';

const STATE_COMPLETED = 'completed';
const STATE_CURRENT = 'current';
const STATE_INCOMPLETE = 'incomplete';
const STATE_ERROR = 'error';

const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;

export default class cProgressIndicator extends LightningElement {
    @api type = 'base';

    @api variant = 'base';

    @api currentStep;

    @api hasError = false;

    privateStepHandlers = {};

    @track privateProgressValue = 0;
    @track privateTooltipHidden = true;
    @track privateTooltipLabel;

    privateActiveStepIndex;
    privateTooltipElement;

    renderedCallback() {
        this.updateSteps();
    }

    updateSteps(activeStep) {
        const steps = this.getSteps();
        const { privateStepHandlers, type, hasError, currentStep } = this;
        const currentStepIndex = getCurrentStepIndex(steps, currentStep);
        let activeStepIndex = -1;

        if (activeStep) {
            activeStepIndex = getStepIndex(steps, activeStep);
            this.privateActiveStepIndex = activeStepIndex;
        }

        const stepsArray = Array.prototype.slice.call(steps);

        stepsArray.forEach((step, index) => {
            const stepName = step.value;
            const isActive = index === activeStepIndex;

            if (index < currentStepIndex) {
                privateStepHandlers[stepName](
                    STATE_COMPLETED,
                    type,
                    index,
                    isActive
                );
            } else if (index === currentStepIndex) {
                const state = hasError ? STATE_ERROR : STATE_CURRENT;
                privateStepHandlers[stepName](state, type, index, isActive);
            } else {
                privateStepHandlers[stepName](
                    STATE_INCOMPLETE,
                    type,
                    index,
                    isActive
                );
            }
        });

        if (this.isBase) {
            this.privateProgressValue = computeProgressValue(
                steps,
                currentStepIndex
            );
        }
    }

    isActive(stepName) {
        return this.currentStep === stepName;
    }

    getSteps() {
        return Array.from(this.querySelectorAll('lightning-progress-step'));
    }

    handleStepRegister(event) {
        const { stepName, callback } = event.detail;
        this.privateStepHandlers[stepName] = callback;
    }

    handleStepFocus(event) {
        if (!this.isBase) {
            this.updateActiveStepStatus(event.target);
        }
    }

    handleStepKeyDown(event) {
        if (this.privateActiveStepIndex >= 0) {
            const steps = this.getSteps();

            switch (event.keyCode) {
                case UP:
                case LEFT:
                    if (this.privateActiveStepIndex - 1 >= 0) {
                        this.updateSteps(
                            steps[this.privateActiveStepIndex - 1].value
                        );
                    }
                    break;
                case DOWN:
                case RIGHT:
                    if (this.privateActiveStepIndex + 1 <= steps.length) {
                        this.updateSteps(
                            steps[this.privateActiveStepIndex + 1].value
                        );
                    }
                    break;
                default:
                    break;
            }
        }
    }

    get computedWrapperClass() {
        return classSet('slds-progress').add({
            'slds-progress_shade': this.variant === 'shade'
        });
    }

    get computedTooltipClass() {
        return classSet(
            'slds-popover slds-popover_tooltip slds-nubbin_bottom slds-is-absolute'
        ).add({
            'slds-hidden': this.privateTooltipHidden
        });
    }

    updateActiveStepStatus(activeStep) {
        if (this.currentStep !== activeStep) {
            this.updateSteps(activeStep.value);
        }
    }

    get isBase() {
        return this.type === 'base';
    }

    render() {
        if (this.isBase) {
            return base;
        }
        return path;
    }
}
