const CreateOptions = require('../page-objects/createOptions.page').default;

before(() => {
  createOptions = new CreateOptions({});
});

describe('Create/Options Doodle page', () => {
  it('Subtitle present', () => {
    //createOptions.open();
    createOptions.subtitle.waitForDisplayed();
    expect(create.subtitle.getText()).to.equal("What's the occasion?");
  });
  it('Continue button disabled by default', () => {
    expect(createOptions.continueButton.isEnabled()).to.equal(false);
  });
  it('Clicking Text opens text page', () => {
    createOptions.laterButton.click();
    createOptions.text.click();
    expect(browser.getUrl()).to.contain('text');
  });
  it('Type values for option 1 and 2', () => {
    createOption.option1.setValue('TestOption1');
    createOption.option2.setValue('TestOption2');
    expect(browser.getUrl()).to.contain('text');
  });
  it('Click Continue button, verify options page opens', () => {
    create.continue();
    expect(browser.getUrl()).to.contain('options');
  });

  // it('Continue button disabled by default', () => {
  //   expect(create.continueButton.isEnabled()).to.equal(false);
  // });
  
  // it('Filling required fields enables Continue button', () => {
  //   create.pollTitle.setValue('TestTitle');
  //   expect(create.continueButton.isEnabled()).to.equal(true);
  // });
  
  // it('Click Continue button, verify options page opens', () => {
  //   create.continue();
  //   expect(browser.getUrl()).to.contain('options');
  // });


  
});
