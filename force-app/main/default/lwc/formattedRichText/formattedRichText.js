import { LightningElement, api } from 'lwc';
import sanitizeHTML from 'c/purifyLib';
import { linkify } from './linkify';
import { richTextConfig } from './richTextConfig';
import { updateRawLinkInfo } from 'c/routingService';
import { normalizeBoolean, hasOnlyAllowedVideoIframes } from 'c/utilsPrivate';

export default class cFormattedRichText extends LightningElement {
  @api get disableLinkify() {
    return this._disableLinkify;
  }

  set disableLinkify(val) {
    this._disableLinkify = normalizeBoolean(val);
    this.renderRichText();
  }

  @api get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.renderRichText();
  }

  initialRender = true;
  _value = '';
  _disableLinkify = false;
  connected = false;
  clean = false;

  renderedCallback() {
    if (this.initialRender) {
      this.renderRichText();
      this.initialRender = false;
    }
  }

  connectedCallback() {
    this.classList.add('slds-rich-text-editor__output');
    this.connected = true;
  }

  disconnectedCallback() {
    this.connected = false;
  }

  handleClick(event) {
    const anchor = this.findNearestAnchor(event.target);
    if (anchor == null) {
      return;
    }
    const target = anchor.target;
    const url = anchor.href;

    updateRawLinkInfo(this, { url, target }).then(linkInfo => {
      anchor.href = linkInfo.url;
      linkInfo.dispatcher(event);
    });
  }

  sanitize(value) {
    this.clean = false;
    let displayValue;
    let computedRichTextConfig = richTextConfig;

    if (hasOnlyAllowedVideoIframes(value)) {
      computedRichTextConfig = {
        ...richTextConfig,
        ALLOWED_TAGS: richTextConfig.ALLOWED_TAGS.concat(['iframe'])
      };
    }

    try {
      displayValue = sanitizeHTML(value, computedRichTextConfig);
      this.clean = true;
    } catch (e) {
      console.warn(
        `<lightning-formatted-rich-text> Exception caught when attempting to sanitize: `,
        e
      );

      displayValue = value;
      this.clean = false;
    }

    return displayValue;
  }

  renderRichText() {
    if (this.connected) {
      const richText = this.sanitize(
        this.disableLinkify ? this.value : linkify(this.value)
      );

      const container = this.getContainer();

      if (this.clean) {
        container.innerHTML = richText;
      } else {
        const textNode = document.createTextNode(richText);
        while (container.hasChildNodes()) {
          container.removeChild(container.lastChild);
        }
        container.appendChild(textNode);
      }
    }
  }

  getContainer() {
    return this.template.querySelector('span');
  }

  findNearestAnchor(startingElement) {
    const container = this.getContainer();
    let element = startingElement;
    while (element !== null && element !== container) {
      if (element.tagName === 'A') {
        return element;
      }
      element = element.parentNode;
    }
    return null;
  }
}
