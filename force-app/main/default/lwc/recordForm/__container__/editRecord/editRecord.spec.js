const RECORD_FORM_SELECTOR = 'lightning-record-form,lightning-recordform';

describe('edit a record', () => {
  beforeEach(() => {
    const URL = browser.getStaticUrl(__filename);
    browser.setWindowSize(1280, 1024);
    browser.url(URL);
  });

  it('starts in view mode', () => {
    const form = $(RECORD_FORM_SELECTOR);
    form.waitForExist();
    const outputField = form.shadow$('lightning-output-field');
    outputField.waitForExist();
    const formattedText = outputField.shadow$('lightning-formatted-text');
    expect(formattedText.getText()).to.equal('Super Great Account');
  });

  it('supports reactive changes to record id', () => {
    const form = $(RECORD_FORM_SELECTOR);
    form.waitForExist();
    const outputField = form.shadow$('lightning-output-field');
    outputField.waitForExist();
    const formattedText = outputField.shadow$('lightning-formatted-text');
    const button = $('.my-button');
    button.scrollIntoView();
    button.click();
    browser.waitUntil(
      () => {
        return formattedText.getText() === 'A different account';
      },
      5000,
      'expected text to be different after 5s'
    );
  });

  it('saves edits', () => {
    const form = $(RECORD_FORM_SELECTOR);
    form.waitForExist();
    const outputField = form.shadow$('lightning-output-field');
    outputField.waitForExist();
    const buttonIcon = form.shadow$('lightning-button-icon');
    buttonIcon.waitForDisplayed();
    buttonIcon.scrollIntoView();
    buttonIcon.click();
    let inputField = form.shadow$('lightning-input-field');
    inputField.waitForDisplayed();
    inputField = form.shadow$$('lightning-input-field')[1];
    inputField.waitForDisplayed();
    inputField.scrollIntoView();
    try {
      inputField.click();
    } catch (e) {
      throw new Error('everything is bad on line 53');
    }

    const option = inputField
      .shadow$('lightning-picklist')
      .shadow$('lightning-combobox')
      .shadow$('lightning-base-combobox')
      .shadow$('lightning-base-combobox-item[data-value="Partner Referral"]');

    option.scrollIntoView();

    try {
      option.click();
    } catch (e) {
      throw new Error('option click failed');
      console.error(e);
    }

    const submitButton = form.shadow$$('lightning-button')[1].shadow$('button');
    submitButton.waitForDisplayed();
    submitButton.scrollIntoView();
    submitButton.click();
    const outputfield = form.shadow$('lightning-output-field');
    outputfield.waitForExist();
    outputField.waitForDisplayed(30000);

    browser.waitUntil(
      () => {
        const myFields = form.shadow$$('lightning-output-field');
        if (myFields.length < 3) {
          return false;
        }
        const thisField = myFields[1];
        if (!thisField.isExisting()) {
          return false;
        }
        const formattedText = thisField.shadow$('lightning-formatted-text');

        formattedText.waitForExist();
        const str = formattedText.getAttribute('innerText');
        return str === 'Partner Referral';
      },
      5000,
      'expected text to be different after 5s'
    );
  });
});
