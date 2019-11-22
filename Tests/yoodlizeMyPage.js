var yoodlize = {}
module.exports = {
    beforeEach:browser => {
        yoodlize = browser.page.yoodlizePage()
        yoodlize
        .navigate()
    },
    after: browser => {
        yoodlize.end()
    },
    'See All Yall': browser => {
        yoodlize
            .waitForElementPresent('@recSeeAll')
            .click('@recSeeAll')
            .waitForElementVisible('@result')
            .verify.containsText('@result', "Recreational Vehicles")
            .api.back()
            yoodlize

            .waitForElementPresent('@outSellAll')
            .click('@outSellAll')
            .waitForElementPresent('@result')
            .verify.containsText('@result', "Outdoor Gear")
            .api.back()
            yoodlize           

            .waitForElementPresent('@eleSeeAll')
            .click('@eleSeeAll')
            .waitForElementPresent('@result')
            .verify.containsText('@result', "Electronics")
            .api.back()
            yoodlize

            .waitForElementPresent('body')
            .click('@partySeeAll')
            .waitForElementPresent('@result')
            .verify.containsText('@result', "Party")
            .api.back()
            yoodlize

            .waitForElementPresent('@toolsSeeAll')
            .click('@toolsSeeAll')
            .waitForElementPresent('@result')
            .verify.containsText('@result', "Tools")
            .api.back()
            yoodlize

            .pause(2000)
            
            
    },
}