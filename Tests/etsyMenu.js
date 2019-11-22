var etsyMenuPicker = function(browser, mainCat, subCat){
    browser
            .useXpath()
            .moveToElement('(//span[@class="text-gray-darker"])[contains(text(), "'+mainCat+'")]', 5, 5)
            .waitForElementVisible(`(//a[contains(text(), '${subCat}')])[1]`)
            .click(`(//a[contains(text(), '${subCat}')])[1]`)
            .waitForElementVisible(`//h1[contains(text(), "${subCat}")]`)
            .useCss()
            //what is sub and maincat
}
​

var logStuff = function(stuffToLog){
    console.log("I'm logging this as part of logStuff", stuffToLog)
}
​
module.exports = {
    beforeEach: browser => {
        browser.url("http://etsy.com")
            .waitForElementVisible("[name='search_query']")
    },
    after: browser => {
        browser.end()
    },
    "Navigate to the musical instrument category by popout menu": browser => {
        etsyMenuPicker(browser, "Toys & Entertainment", "Musical Instruments")
        browser.assert.title("Musical Instruments | Etsy")
    },
    "Navigate to the decorative pillows category by popout menu": browser => {
        etsyMenuPicker(browser, "Home & Living", "Decorative Pillows")
        browser.assert.title("Decorative Pillows | Etsy")
    },
    "Navigate to the Beanies & Winter Hats category by popout menu": browser => {
        etsyMenuPicker(browser, "Jewelry & Accessories", "Winter Hats")
        browser.assert.title("Winter Hats | Etsy")
    },
 
}