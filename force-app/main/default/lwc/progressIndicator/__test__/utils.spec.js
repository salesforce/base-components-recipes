import {
    getStepIndex,
    getCurrentStepIndex,
    computeProgressValue
} from './../utils';

describe('progress-indicator utils', () => {
    describe('getStepIndex', () => {
        it('should return -1 when there are not steps', () => {
            expect(getStepIndex([])).toBe(-1);
        });
        it('should return the index of the currentStep', () => {
            const steps = [{ value: 'step1' }, { value: 'step2' }];
            const currentStep = 'step2';
            expect(getStepIndex(steps, currentStep)).toBe(1);
        });
    });
    describe('getCurrentStepIndex', () => {
        it('should fallback to 0 when there are steps and there are not currentStep', () => {
            const steps = [{ value: 'step1' }, { value: 'step2' }];
            expect(getCurrentStepIndex(steps)).toBe(0);
        });
    });
    describe('computeProgressValue', () => {
        [
            { steps: [{}, {}, {}], activeIndex: 1, result: 50 },
            { steps: [{}, {}, {}], activeIndex: 2, result: 100 },
            { steps: [{}, {}, {}, {}, {}], activeIndex: 3, result: 75 },
            { steps: [{}], activeIndex: 0, result: 0 }
        ].forEach(testCase => {
            const { result, activeIndex, steps } = testCase;
            it(`should return ${result} when ${steps.length} steps & step active is ${activeIndex}`, () => {
                expect(computeProgressValue(steps, activeIndex)).toBe(result);
            });
        });
    });
});
