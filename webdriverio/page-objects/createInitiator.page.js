// create/initiator page
const Page = require('./page').default;

class CreateInitiator extends Page {
    constructor() {
        super('./create/initiator');
    }
    get name() { return $('#d-initiatorName') }
    get email() { return $('#d-initiatorEmail') }
    get finishButton() { return $('d-persistPollButton') }

    finnish() {
        this.finishButton.click()
    }

}

exports.default = CreateInitiator
