var edit = (testingNews, data) => {
       testingNews
        .api.useXpath()
    testingNews
        .click(`//li[text()="${data.oldName}"]`)
        .api.useCss()
    testingNews
        .clearValue('@nameField')
        .setValue('@nameField', data.name)
        .clearValue('@phoneNumber')
        .setValue('@phoneNumber', data.phone)
        .clearValue('@titleHere')
        .setValue('@titleHere', data.title)
        .click('@saveButton')
}
 
var myArray = [
    {
        oldName: 'Bernice Ortiz',
        name: 'My Boi Mel',
        phone: '8875412596',
        title: 'Janitor'
    },
    {
        oldName: 'Marnie Barnett',
        name: 'Andrew Smith',
        phone: '5478523458',
        title: 'new guy'    
    },
     {
        oldName: 'Phillip Weaver',
        name: 'new name here',
        phone: '5478523458',
        title: 'new guy'
    },
     {
        oldName: 'Teresa Osborne',
        name: 'new phone',
        phone: '5478523458',
        title: 'new guy'
    },
     {
        oldName: 'Dollie Berry',
        name: 'who dis',
        phone: '5478523458',
        title: 'new guy'
    },
     {
        oldName: 'Harriett Williamson',
        name: 'halfway there',
        phone: '5478523458',
        title: 'new guy'
    },
     {
        oldName: 'Ruby Estrada',
        name: 'take my hand',
        phone: '5478523458',
        title: 'new guy'
    },
    {
        oldName: 'Lou White',
        name: 'make it I swear',
        phone: '5478523458',
        title: 'new guy'
    },
    {
        oldName: 'Eve Sparks',
        name: 'sometimes time',
        phone: '5478523458',
        title: 'new guy'
    },
    {
        oldName: 'Lois Brewer',
        name: 'New Captain',
        phone: '5478523458',
        title: 'new guy'
    },
]
var page = {}
module.exports = {
    beforeEach: browser => {
        page = browser.page.testingNews()
        page
            .navigate()
    },
    after: brwoser => {
        page
            .end()
    },
    'Looping Through Employees': browser => {
        myArray.forEach(test => {
            edit(page, test)
        })
        page
            .api.pause(5000)
    }
}