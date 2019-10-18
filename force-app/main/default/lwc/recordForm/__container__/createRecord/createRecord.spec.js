describe('create a record', () => {
  beforeEach(() => {
    const URL = browser.getStaticUrl(__filename);
    browser.setWindowSize(1280, 1024);
    browser.url(URL);
  });

  it('creates a new record', () => {
    const NAME = 'A great object';
    const form = $('lightning-record-form');
    form.waitForExist();
    const inputField = form.shadow$('lightning-input-field');
    inputField.waitForExist();
    inputField.scrollIntoView();
    inputField
      .shadow$('lightning-input')
      .shadow$('input')
      .click();
    browser.keys(NAME);
    form
      .shadow$$('lightning-button')[1]
      .shadow$('button')
      .click();
    const outputfield = form.shadow$('lightning-output-field');
    outputfield.waitForExist();
    const str = outputfield
      .shadow$('lightning-formatted-text')
      .getAttribute('innerText');
    expect(str).to.equal(NAME);
  });
});
