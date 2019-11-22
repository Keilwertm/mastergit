module.exports = {
    beforeeach: browser => {
            browser.url('http://localhost:3000/')

    },

    after: browser => {
        browser.end()


    
    },

    'Changing An Employees Information': browser => {
        browser
        .click('[name="employee1"]') 
        .clearValue('[name="nameEntry"]')
        .pause(2000)
        .click('[name="phoneEntry"]')
        .clearValue('[name="phoneEntry"]')
        .pause(2000)
        .click('[name="nameEntry"]') 
        .setValue('input[name="nameEntry"]', ['Courage The Cowardly Dog', browser.Keys.ENTER])
        .verify.valueContains('input[name="nameEntry"]', ['Courage The Cowardly Dog'])
        .pause(2000)
        .click('[name="save')
        .click('[name="employee2"]')
        .click('[name="employee1"]') 
        .pause(2000)

        .click('[name="employee4"]') 
        .clearValue('[name="nameEntry"]')
        .clearValue('[name="phoneEntry"]')
        .click('[name="save')
        .pause(2000)
        .setValue('input[name="phoneEntry"]', ['5875214546', browser.Keys.ENTER])
        .verify.valueContains('input[name="phoneEntry"]', ['5875214546'])
        .pause(2000)
        .click('[name="save')
        .click('[name="employee2"]')
        .click('[name="employee4"]') 
        .pause(2000)


        .click('[name="employee5"]')
        .clearValue('[name="nameEntry"]')
        .setValue('input[name="nameEntry"]', ['The End Is Near', browser.Keys.ENTER])
        .verify.valueContains('input[name="nameEntry"]', ['The End Is Near'])
        .click('[name="cancel"]')

        
        .pause(1000)

        },

        'Clicking Save': browser => {

            

         
},

        
    }