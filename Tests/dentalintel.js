module.exports = {
    beforeEach: browser=> {
        browser.url('https://portal.dentalintel.com/login')

    },
    after: browser=> {
        browser.pause(1000)

    },

    'logging into Dental Intel': browser => {

        browser

        // Entering in Email and Password
        .click('//div[class="mat-form-field-infix"]')
        .setValue('//div[@class="mat-form-field-infix"]', ['mkeilwert@dentalintel.com', browser.Keys.ENTER])
        
        
        



        // hitting the login button 
        .useXpath()
        .click('(//button)[2]')
        .pause(3000)

        


    }

}
