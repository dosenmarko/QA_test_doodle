// create/settings page
const Page = require('./page').default;

class CreateSettings extends Page {
    constructor() {
        super('./create/settings');
    }
    get ifneedbe() { return $('#d-ifneedbeCheckboxContainer ') }

    continue() {
        this.continueButton.click()
    }

}

exports.default = CreateSettings
