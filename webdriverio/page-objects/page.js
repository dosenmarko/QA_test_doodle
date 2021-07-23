class Page {
  constructor(path) {
    this.path = path;
  }

  get acceptButton() { return $('#onetrust-accept-btn-handler')};

  acceptCookies() {
    if (this.acceptButton.isDisplayed()) {
      this.acceptButton.click();
      browser.waitUntil(() => {
        return this.acceptButton.isDisplayed() === false;
      });
    }
  }

  open() {
      browser.url(this.path)
  }
}
exports.default = Page;
