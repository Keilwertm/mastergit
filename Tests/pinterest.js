module.exports = {
    beforeEach: browser=> {
        browser
            .url("https://www.pinterest.com/")
            .waitForElementVisible("body")

    },

    after: browser=> {
        browser 
            .end()
    },

    'Pinterest Practice': browser=>{
        browser 
            .pause(1000)
            .url("https://google.com/")


    },

    'Another One': browser=> {
        browser
            .pause(3000)

    },
}