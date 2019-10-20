export function getStepIndex(steps, stepValue) {
    if (steps.length === 0) {
        return -1;
    }
    let ret = -1;
    if (stepValue) {
        const stepsLength = steps.length;
        for (let i = 0; i < stepsLength; i += 1) {
            if (steps[i].value === stepValue) {
                ret = i;
                break;
            }
        }
    }
    return ret;
}

export function getCurrentStepIndex(steps, currentStepValue) {
    const index = getStepIndex(steps, currentStepValue);
    if (index >= 0) {
        return index;
    }
    return 0;
}

export function computeProgressValue(steps, activeStepIndex) {
    const stepLength = steps.length;
    if (stepLength === 1) {
        return 0;
    }
    return Math.floor((100 / (stepLength - 1)) * activeStepIndex);
}
