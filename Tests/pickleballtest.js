var pickle = {}
module.exports = {
    beforeEach:browser => {
        pickle = browser.page.pickleball()
        pickle
        .navigate()

    },
    after: browser => {
        pickle.end()
    },
    'Pickle Log In': browser => {
        pickle


            //verify text
            .waitForElementPresent('body')
            .verify.containsText('@greenBanner', "Be a part of the action")




            //Logging in 
            .click('@profileBtn')
            .click('@emailLog')
            .setValue('@emailLog', 'qatest')
            .click('@emailLog')
            .setValue('@emailPass', 'testpass')
            .click('@logBtn')
       

            
          
    }
}