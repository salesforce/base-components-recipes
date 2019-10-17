import { LightningElement, api, track } from 'lwc';
import { normalizeBoolean } from 'c/utilsPrivate';
import {
  parseToFormattedLinkifiedParts,
  parseToFormattedParts
} from './linkify';

export default class FormattedText extends LightningElement {
  @api value = '';

  @track _linkify = false;

  @api get linkify() {
    return this._linkify;
  }
  set linkify(value) {
    this._linkify = normalizeBoolean(value);
  }

  get formattedParts() {
    if (!this.value || typeof this.value !== 'string') {
      return [];
    }
    return this.linkify
      ? parseToFormattedLinkifiedParts(this.value)
      : parseToFormattedParts(this.value);
  }
}
