module.exports = {
    beforeEach: browser => browser.url('https://devmountain-qa.github.io/employee-manager/1.0_Version/index.html'),
    after: browser => browser.end(),
                    // issue in the software, saving name without hitting the save button 
    'Problem 1': browser => {
        browser
            .click('[name="employee7"]')
            .clearValue('[name="nameEntry"]')
            .setValue('[name="nameEntry"]', 'Billy Bob')
            .click('[name="employee9"]')
            .verify.value('[name="nameEntry"]', 'Eve Sparks')
            .click('[name="employee7"]')
            .verify.value('[name="nameEntry"]', 'Billy Bob')
    },
                // missing brackets, had test instead of value
    'Problem 2': browser => {
        browser.click('[name="employee5"]')
            .clearValue('[name="titleEntry"]')
            .setValue('[name="titleEntry"]', 'Best Manager Ever')
            .clearValue('[name="phoneEntry"]')
            .setValue('[name="phoneEntry"]', '1234567890')
            .click('#saveBtn')
            .click('[name="employee8"]')
            .expect.element('[name="titleEntry"]').value.not.to.equal('Best Manager Ever')
            browser
            .click('[name="employee5"]')
            .expect.element('[name="phoneEntry"]').value.to.equal('1234567890')
            browser
            .expect.element('[name="titleEntry"]').value.to.equal('Best Manager Ever')
    },
                                    //error in the code, forgot to clear value before hand 
    'Problem 3': browser => {
        browser 
            .click('[name="employee1"]')
            .waitForElementPresent('[name="nameEntry"]')
            .clearValue('[name="nameEntry"]')
            .setValue('[name="nameEntry"]', 'New Person')
            .click('#saveBtn')
            .click('[name="employee2"]')
            .expect.element('[name="nameEntry"]').value.not.to.equal('New Person').before(2000)
        browser
            .click('[name="employee1"]')
            .expect.element('[name="nameEntry"]').value.to.equal('New Person').before(2000)
    },
                                    // software is not saving 
    'Problem 4': browser => {
        browser
            .click('[name="employee5"]')
            .clearValue('[name="nameEntry"]')
            .click('#saveBtn')
            .assert.containsText('.errorCard', 'The name field must be between 1 and 30 characters long.')
            .assert.value('[name="nameEntry"]', 'Dollie Berry')
    },

                                        // missing a bracket and the wrong selector for employee number 4. 
    'Problem 5': browser => {
        browser
            .click('[name="employee-4"]')
            .clearValue('[name="phoneEntry"]')
            .setValue('[name="phoneEntry"]', ['8015551234'])
            .click('[name="cancel"]')
            .click('[name="employee5"]')
            .click('[name="employee-4"]')
            .expect.element('[name="phoneEntry"]').value.not.to.equal('8015551234')
    }
}