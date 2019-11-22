//this does not work send help. Fix and work on at a later date when I know more. 


module.exports = {
    beforeEach: browser=> {
        browser
            .url("https://alpha.yoodlize.com/")
            .waitForElementVisible("body")
  //$x('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]')

       //$x('//div[@class="sc-jKVCRD jSqgxr"]')

    },

    after: browser=> {
        browser 
            .end()
    },

    'Yoodalize Catergories': browser=>{
        browser.useXpath()
       
     
        .waitForElementVisible('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]')
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]')
        .useCss()
        //.expect.element('[//div[@class="sc-jKVCRD jSqgxr"]').text.to.contain('Vehicles')
     

 browser
        .pause(6000)
        .back()

          browser.useXpath()
       
     
        .waitForElementVisible('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[2]')
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[2]')
        .useCss()
        //.expect.element('[//div[@class="sc-jKVCRD jSqgxr"]').text.to.contain('Gear')
     

 browser
        .pause(6000)
        .back()
      
             browser.useXpath()
       
     
        .waitForElementVisible('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[3]')
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[3]')
        .useCss()
        //.expect.element('[//div[@class="sc-jKVCRD jSqgxr"]').text.to.contain('Electronics')
     

 browser
        .pause(6000)
        .back()
        
        .pause(6000)
        .waitForElementVisible('body')
        .waitForElementVisible('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[4]')
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[4]')
        .useCss()
        //.expect.element('[//div[@class="sc-jKVCRD jSqgxr"]').text.to.contain('Party')
     

 browser
        .pause(6000)
        .back()
      
        .waitForElementVisible('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[5]')
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[5]')
        .useCss()
        //.expect.element('[//div[@class="sc-jKVCRD jSqgxr"]').text.to.contain('Tools')
     

 browser
        .pause(6000)
        .back()

          .waitForElementVisible('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[6]')
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[6]')
        .useCss()
        //.expect.element('[//div[@class="sc-jKVCRD jSqgxr"]').text.to.contain('Clothing')
     

 browser
        .pause(6000)
        .back()

  .waitForElementVisible('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[7]')
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[7]')
        .useCss()
        //.expect.element('[//div[@class="sc-jKVCRD jSqgxr"]').text.to.contain('Kitchen')
     

 browser
        .pause(6000)
        .back()
    
    }
}