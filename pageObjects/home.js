var command ={
    wizard: function (data) {
        this
        .api.useXpath()
        this
    .waitForElementVisible('@home')
    .pause(7000)
    .click('@homebutton')
    .waitForElementVisible('@nextbutton')
    .click('@nextbutton')
    .waitForElementVisible('@city')
    .setValue('@city', data[0])
    .click('@citybutton')
    .waitForElementVisible('@primaryhome')
    .click('@primaryhome')
    .waitForElementVisible('@yes')
    .click('@yes')
    .waitForElementVisible('@no')
    .click('@no')
    .waitForElementVisible('@price')
    .setValue('@price', data[1])
    .waitForElementVisible('@down')
    .setValue('@down', data[2])
    .click('@next')
    }
}
module.exports = {
    url: 'http://localhost:3000/#/',
    commands: [command],
    elements: {
        home: '[class="home-text"]',
        homebutton: '[class="home-btn"]',
        nextbutton: 'button.margin-btn',
        city: 'input',
        citybutton: 'button.wTwo-btn',
        primaryhome: '[value="Primary Home"]',
        yes: '[name="yesButton"]',
        no: '[name="noButton"]',
        price: '[name="price"]',
        down: '[name="down"]',
        next: '[class="wSix-btn"]'
    }
}