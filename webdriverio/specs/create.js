const Create = require('../page-objects/create.page').default;
const CreateOptions = require('../page-objects/createOptions.page').default;

before(() => {
  create = new Create({});
  createOptions = new CreateOptions({});
});

describe('Create Doodle page', () => {
  it('01_Subtitle present on create page', () => {
    create.open();
    create.subtitle.waitForDisplayed();
    create.acceptCookies();
    expect(create.subtitle.getText()).to.equal("What's the occasion?");
  });

  it('02_Continue button disabled by default on create page', () => {
    expect(create.continueButton.isEnabled()).to.equal(false);
  });
  
  it('03_Filling required fields enables Continue button', () => {
    create.pollTitle.setValue('TestTitle'+ Date.now());
    expect(create.continueButton.isEnabled()).to.equal(true);
  });
  
  it('04_Click Continue button, verify options page opens', () => {
    create.continue();
    expect(browser.getUrl()).to.contain('options');
  });

  it('05_Subtitle present on create/options page', () => {
    createOptions.subtitle.waitForDisplayed();
    createOptions.subtitle.click();
    expect(createOptions.subtitle.getText()).to.equal("What are the options?");
  });

  it('06_Clicking Text opens text page', () => {
    createOptions.text.click();
    expect(browser.getUrl()).to.contain('text');
  });

  it('07_Type values for option 1 and 2', () => {
    createOptions.option1.setValue('TestOption1');
    createOptions.option2.setValue('TestOption2');
    expect(createOptions.continueButton.isEnabled()).to.equal(true);
  });

  it('08_Click Continue button, verify options page opens', () => {
    createOptions.continue();
    expect(browser.getUrl()).to.contain('options');
  });


});




