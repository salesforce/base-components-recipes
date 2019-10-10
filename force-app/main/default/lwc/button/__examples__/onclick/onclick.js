import { LightningElement, track } from 'lwc';

export default class ButtonOnclick extends LightningElement {
  @track toggleIconName = 'utility:preview';
  @track toggleButtonLabel = 'Hide content';
  @track greekLetter;

  connectedCallback() {
    this.greekLetter = this.getRandomGreekLetter();
  }

  handleToggleClick() {
    const contentBlockClasslist = this.template.querySelector(
      '.lgc-id_content-toggle'
    ).classList;

    contentBlockClasslist.toggle('slds-hidden');

    if (this.toggleIconName === 'utility:preview') {
      this.toggleIconName = 'utility:hide';
      this.toggleButtonLabel = 'Reveal content';
    } else {
      this.toggleIconName = 'utility:preview';
      this.toggleButtonLabel = 'Hide content';
    }
  }

  handleRandomClick() {
    this.greekLetter = this.getRandomGreekLetter();
  }

  getRandomGreekLetter() {
    const letter = this.greek[Math.floor(Math.random() * this.greek.length)];

    const textarea = new DOMParser().parseFromString(
      `<textarea>${letter} [ &${letter}; ]</textarea>`,
      'text/html'
    ).body.firstChild;

    return textarea.value;
  }

  greek = [
    'alpha',
    'theta',
    'tau',
    'beta',
    'vartheta',
    'pi',
    'upsilon',
    'gamma',
    'iota',
    'varpi',
    'phi',
    'delta',
    'kappa',
    'rho',
    'varphi',
    'epsilon',
    'lambda',
    'varrho',
    'chi',
    'varepsilon',
    'mu',
    'sigma',
    'psi',
    'zeta',
    'nu',
    'varsigma',
    'omega',
    'eta',
    'xi',
    'Gamma',
    'Lambda',
    'Sigma',
    'Psi',
    'Delta',
    'Xi',
    'Upsilon',
    'Omega',
    'Theta',
    'Pi',
    'Phi'
  ];
}
