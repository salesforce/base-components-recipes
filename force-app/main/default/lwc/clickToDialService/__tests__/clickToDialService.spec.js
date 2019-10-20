import {
    isEnabled,
    enable,
    disable,
    addStateChangeListener,
    addDialListener,
    removeStateChangeListener,
    dial
} from 'c/clickToDialService';

describe('click-to-dial-service', () => {
    it('isEnabled should be false first', () => {
        expect(isEnabled()).toBe(false);
    });

    it('isEnabled should be true when calling enableClickToDial();', () => {
        enable();
        expect(isEnabled()).toBe(true);
    });

    it('isEnabled should be false when calling disableClickToDial();', () => {
        disable();
        expect(isEnabled()).toBe(false);
    });

    it('addDialListener should register a listener that is called on dial()', () => {
        let callCount = 0;
        addDialListener(() => {
            callCount += 1;
        });
        enable();
        dial();
        dial();
        expect(callCount).toBe(2);
    });

    it('addStateChangeListener should register a listener that is called on state change', () => {
        let callCount = 0;
        addStateChangeListener(() => {
            callCount += 1;
        });
        enable();
        disable();
        enable();
        expect(callCount).toBe(3);
    });

    it('removeStateChangeListener should remove a state change listener', () => {
        let callCount = 0;
        const handleStateChange = () => {
            callCount += 1;
        };
        addStateChangeListener(handleStateChange);
        enable();
        disable();
        removeStateChangeListener(handleStateChange);
        enable();
        expect(callCount).toBe(2);
    });
});
