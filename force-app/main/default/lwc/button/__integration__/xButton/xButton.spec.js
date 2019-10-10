const LIGHTNING_BUTTON = 'lightning-button';

describe('c-button integration', () => {
  beforeEach(() => {
    const URL = browser.getStaticUrl(__filename);
    browser.url(URL);
    $(LIGHTNING_BUTTON).waitForExist();
  });

  it('should change the label when the button is clicked!', () => {
    const button = $(LIGHTNING_BUTTON);
    button.click();
    expect(button.getAttribute('label')).to.equal('I was clicked!!');
  });

  it('should delegate focus', () => {
    var button = $(LIGHTNING_BUTTON);
    button.click();
    const result = browser.shadowElementHasFocus(button.shadow$('button'));
    expect(result).to.equal(true);
  });
});
