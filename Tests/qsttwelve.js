var weatherCommands = {
    search: function (searchObject) {
        this
            .waitForElementVisible('@searchBar')
            .setValue('@searchBar', searchObject.search)
            .click('@searchButton')
            .waitForElementPresent('@searchResult')
            .verify.containsText('@searchResult', searchObject.result)
        return this
        //what does return this do
        
    },
    searchAgain: function () {
        this
            .click('@searchAgain')
        return this
    }
}
module.exports = {
    url: 'https://devmountain-qa.github.io/weatherman/build/index.html',
    commands: [weatherCommands],
    elements: {
        searchBar: '.enter-location__input',
        searchButton: 'button',
        searchResult: '.current-weather__location',
        searchAgain: 'button'
    }
}