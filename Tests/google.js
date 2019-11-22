module.exports = {
    beforeEach: browser => {
        browser.url('https://www.google.com/')
    },
    after: browser => {
        browser.end()
    },
    'Search For Cards': browser => {

        browser.setValue('input[name="q"]', ['MTG', browser.Keys.ENTER])
        .pause(1000)

         

  browser.back()
     browser.setValue('input[name="q"]', ['The Black Pearl', browser.Keys.ENTER])

   
  browser.url('https://www.google.com/')

            browser.clearValue('input[name="q')
            browser.setValue('input[name="q"]', ['Radical Penguinsl', browser.Keys.ENTER])
            broswer.waitforElementVisible('#res')
            broswer.assert.containsText('#res', 'Radical Penguins')
            broswer.verify.valueContains('input[name="q]', 'Radical Penguins')
            .pause(10000)
    
        

    }
}