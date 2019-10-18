import { LightningElement, api, track } from 'lwc';

const DEFAULT_HREF = 'javascript:void(0);';

export default class cVerticalNavigationItem extends LightningElement {
  @api label;

  @api name;

  @api href = DEFAULT_HREF;

  @track _selected = false;

  connectedCallback() {
    this.setAttribute('role', 'listitem');
    this.classList.add('slds-nav-vertical__item');
    this.dispatchEvent(
      new CustomEvent('privateitemregister', {
        bubbles: true,
        cancelable: true,
        detail: {
          callbacks: {
            select: this.select.bind(this),
            deselect: this.deselect.bind(this)
          },

          name: this.name
        }
      })
    );
  }

  select() {
    this._selected = true;
    this.classList.add('slds-is-active');
  }

  deselect() {
    this._selected = false;
    this.classList.remove('slds-is-active');
  }

  get ariaCurrent() {
    return this._selected ? 'page' : null;
  }

  handleClick(event) {
    this.dispatchEvent(
      new CustomEvent('privateitemselect', {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: {
          name: this.name
        }
      })
    );

    if (this.href === DEFAULT_HREF) {
      event.preventDefault();
    }
  }
}