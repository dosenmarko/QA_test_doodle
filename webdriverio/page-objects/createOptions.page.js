// create/options page
const Page = require('./page').default;

class CreateOptions extends Page {
    constructor() {
        super('./create/options');
    }
    get month() { return $('#month') }
    get week() { return $('#week') }
    get text() { return $('.d-tabs li:nth-child(3)') }
    get option1() { return $('#d-wizardChoicesView0') }
    get option2() { return $('#d-wizardChoicesView1') }
    get option3() { return $('#d-wizardChoicesView2') }
    get subtitle() { return $('#d-wizardOptionsPage .d-wizardStepSubtitle') }
    get continueButton() { return $('.d-actionButtons').$('button=Continue') }
    get laterButton() { return $('//*[.="Later"]')}

    continue() {
        this.continueButton.click()
    }

}

exports.default = CreateOptions
