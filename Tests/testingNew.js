var employeeSelect = (browser, data) => {
browser
.url("https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html")


.waitForElementVisible('body')



// .click('[name="employee1"]')
// .clearValue('[name="nameEntry"]')
// .setValue('[name="nameEntry"]',data [0])
// .click('[name="save"]')

// .click('[name="employee2"]')
// .clearValue('[name="nameEntry"]')
// .setValue('[name="nameEntry"]',data [1])
// .click('[name="save"]')

// .click('[name="employee3"]')
// .clearValue('[name="nameEntry"]')
// .setValue('[name="nameEntry"]',data)
// .click('[name="save"]')

// .click('[name="employee4"]')
// .clearValue('[name="nameEntry"]')
// .setValue('[name="nameEntry"]',data)
// .click('[name="save"]')

// .click('[name="employee5"]')
// .clearValue('[name="nameEntry"]')
// .setValue('[name="nameEntry"]',data)
// .click('[name="save"]')

// .click('[name="employee6"]')
// .clearValue('[name="nameEntry"]')
// .setValue('[name="nameEntry"]',data)
// .click('[name="save"]')

// .click('[name="employee7"]')
// .clearValue('[name="nameEntry"]')
// .setValue('[name="nameEntry"]',data)
// .click('[name="save"]')

// .click('[name="employee8"]')
// .clearValue('[name="nameEntry"]')
// .setValue('[name="nameEntry"]',data)
// .click('[name="save"]')

// .click('[name="employee9"]')
// .clearValue('[name="nameEntry"]')
// .setValue('[name="nameEntry"]',data)
// .click('[name="save"]')

// .click('[name="employee10"]')
// .clearValue('[name="nameEntry"]')
// .setValue('[name="nameEntry"]',data)
// .click('[name="save"]')

// .pause(5000)


}

var employeeStuff = [

    "smithbob", "ricky rick", "real name", "void walker", "The End", "Eating Pizza", "Let's Think", "Mouse Boy", "End The", "Why Not "
            // {name: 'smith bob'},    
            // {name: 'shark attack'},
            // {name: 'smith smithy'},
            // {name: 'ui cool'},
            // {name: 'lizzy tenth'},
            // {name: 'regular joe'},
            // {name: 'eating burger'},
            // {name: 'something new'},
            // {name: 'thinking hard'},
            // {name: 'hard thinking'},
]

module.exports = {

    'clicking through employees': browser => {

        employeeStuff.forEach(test => {

            employeeSelect(browser, test)

            
        })
    }
}
    





