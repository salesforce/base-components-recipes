export class BaseComboboxEvents {
    constructor(baseCombobox) {
        this.dispatchEvent = baseCombobox.dispatchEvent.bind(baseCombobox);
    }

    dispatchPillRemove(pill) {
        this.dispatchEvent(
            new CustomEvent('pillremove', {
                detail: { item: pill }
            })
        );
    }

    dispatchEndReached() {
        this.dispatchEvent(new CustomEvent('endreached'));
    }

    dispatchFocus() {
        this.dispatchEvent(new CustomEvent('focus'));
    }

    dispatchBlur() {
        this.dispatchEvent(new CustomEvent('blur'));
    }

    dispatchTextInput(text) {
        this.dispatchEvent(new CustomEvent('textinput', { detail: { text } }));
    }

    dispatchTextChange(text) {
        this.dispatchEvent(
            new CustomEvent('textchange', {
                detail: { text }
            })
        );
    }

    dispatchSelect(value) {
        this.dispatchEvent(
            new CustomEvent('select', {
                detail: { value }
            })
        );
    }

    dispatchDropdownOpen() {
        this.dispatchEvent(new CustomEvent('dropdownopen'));
    }

    dispatchDropdownOpenRequest() {
        this.dispatchEvent(new CustomEvent('dropdownopenrequest'));
    }
}
