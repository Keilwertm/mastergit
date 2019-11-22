var react = {}
module.exports = {
    beforeEach:browser => {
        react = browser.page.reactApp()
        react
        .navigate()
    },
    after: browser => {
        react.end()
    },
    'React Inputs': browser => {
        react
            .waitForElementPresent('body')
            .click('@evenAndOdds')
            .setValue('@evenAndOdds', '22')
            .click('evenAndOddsBtn')

            .click('@filterObject')
            .setValue('@filterObject', 'james')
            .click('filterObjectBtn')

            .click('@filterString')
            .setValue('@filterString', '22')
            .click('filterStringBtn')

            .click('@palindromeInput')
            .setValue('@palindromeInput', '16')
            .click('@palindromeBtn')

            .click('@sumInput')
            .setValue('@sumInput', '5')
            .click('sumInput2')
            .setValue('sumInput2', '5')
            .click('sumInputBtn')

            
    }
}