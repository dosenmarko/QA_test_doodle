// create page
const Page = require('./page').default;

class Create extends Page {
    constructor() {
        super('./create');
    }
    get pollTitle() { return $('#d-pollTitle') }
    get pollLocation() { return $('#d-pollLocation') }
    get pollNote() { return $('#d-pollDescription') }
    get continueButton() { return $('.d-actionButtons').$('button=Continue') }
    get subtitle() { return $('.d-wizardStepSubtitle') }

    continue() {
        this.continueButton.click()
    }

}

exports.default = Create