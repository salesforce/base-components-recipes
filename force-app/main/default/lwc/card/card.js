import { LightningElement, api, track } from 'lwc';
import { classSet } from 'c/utils';
import { isNarrow, isBase } from './utils';

export default class cCard extends LightningElement {
  @api title;

  @api iconName;

  @track privateVariant = 'base';

  set variant(value) {
    if (isNarrow(value) || isBase(value)) {
      this.privateVariant = value;
    } else {
      this.privateVariant = 'base';
    }
  }

  @api get variant() {
    return this.privateVariant;
  }

  renderedCallback() {
    const footerWrapper = this.template.querySelector('.slds-card__footer');
    const noFooterContent = this.template.querySelector(
      'slot[name="footer"] [data-id="default-content"]'
    );

    if (noFooterContent) {
      if (footerWrapper.remove) {
        footerWrapper.remove();
      } else if (footerWrapper.parentNode) {
        footerWrapper.parentNode.removeChild(footerWrapper);
      }
    }
  }

  get computedWrapperClassNames() {
    return classSet('slds-card').add({
      'slds-card_narrow': isNarrow(this.privateVariant)
    });
  }

  get hasIcon() {
    return !!this.iconName;
  }

  get hasStringTitle() {
    return !!this.title;
  }
}
