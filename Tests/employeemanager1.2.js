module.exports = {
    beforeeach: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
     },

     after:browser=> {
         browser.pause(500)


     },

     'Adding A New Employee': browser =>  {

         var info = {first: 'Stacy Fluke', phone: '1234567896', title: 'Janitor'}

         browser 
         .click('[name="addEmployee"]')
         .click('[name="employee11"]')
         .click('[name="nameEntry"]')
         .clearValue('[name="nameEntry"]')
         .setValue('[name="nameEntry"]', ['Rookie Greencard', browser.Keys.ENTER])
         .click('[name="phoneEntry"')
         .clearValue('[name="phoneEntry"')
         .setValue('[name="phoneEntry"', ['8569854785', browser.Keys.ENTER])
         .click ('[name="titleEntry"')
         .clearValue('[name="titleEntry"')
         .setValue('[name="titleEntry"', ['Officer Of Marketing Intel Within Divions', browser.Keys.ENTER])
         .verify.valueContains('[name="titleEntry"', ['Officer Of Marketing Intel Within Divions'])
         .click('[name="save"]')
         .pause(500)
         .click('[name="employee1"]')
         .click('[name="employee11"]')
         .verify.valueContains('[name="phoneEntry"', ['8569854785'])
         .verify.valueContains('[name="nameEntry"', ['Rookie Greencard'])
         browser.expect.element('[class=titleText]').text.to.equal('Employee Manager')

        browser

         .click('[name="addEmployee"]')
         .click('[name="employee12"]')
         .clearValue('[name="nameEntry"]')
         .setValue('[name="nameEntry"', ['Why Is this My Name Help', browser.Keys.ENTER])
         .verify.valueContains('[name="nameEntry"]', ['Why Is this My Name Help'])
         .pause(4000)
         .click('[name="cancel"')
         .clearValue('[name="nameEntry"]')
         .setValue('[name="nameEntry"', ['o', browser.Keys.ENTER])
         .click('[name="phoneEntry"]')
         .setValue('[name="phoneEntry"]', info.phone)
         .click('[name="save"')
         .pause(2000)

         .click('[name="employee1"')
         .click('[name="nameEntry"')
         .clearValue('[name="nameEntry"]')
         .setValue('input[name="nameEntry"', info.first)
         .click('[name="save"')
          .verify.valueContains('[name="nameEntry"', ['Stacy Fluke'])
          .pause(500)

          .click('[name="employee2"')
         .click('[name="nameEntry"')
         .clearValue('[name="nameEntry"]')
         .setValue('input[name="nameEntry"', info.first)
         .click('[name="save"')
          .verify.valueContains('[name="nameEntry"', ['Stacy Fluke'])
                    .pause(500)


          .click('[name="employee3"')
         .click('[name="nameEntry"')
         .clearValue('[name="nameEntry"]')
         .setValue('input[name="nameEntry"', info.first)
         .click('[name="save"')
          .verify.valueContains('[name="nameEntry"', ['Stacy Fluke'])
                    .pause(500)


          .click('[name="employee4"')
         .click('[name="nameEntry"')
         .clearValue('[name="nameEntry"]')
         .setValue('input[name="nameEntry"', info.first)
         .click('[name="save"')
          .verify.valueContains('[name="nameEntry"', ['Stacy Fluke'])
                    .pause(500)


          .click('[name="employee5"')
         .click('[name="nameEntry"')
         .clearValue('[name="nameEntry"]')
         .setValue('[name="nameEntry"]', ['I', browser.Keys.ENTER])
         .click('[name="save"')
          .verify.valueContains('[name="nameEntry"', ['I'])
                    .pause(500)


          .click('[name="employee6"')
         .click('[name="nameEntry"')
         .clearValue('[name="nameEntry"]')
         .setValue('[name="nameEntry"]', ['N', browser.Keys.ENTER])
         .click('[name="save"')
          .verify.valueContains('[name="nameEntry"', ['N'])
                    .pause(500)


          .click('[name="employee7"')
         .click('[name="nameEntry"')
         .clearValue('[name="nameEntry"]')
         .setValue('[name="nameEntry"]', ['S', browser.Keys.ENTER])
         .click('[name="save"')
          .verify.valueContains('[name="nameEntry"', ['S'])
                    .pause(500)


        .click('[name="employee8"')
        .click('[name="nameEntry"')
        .clearValue('[name="nameEntry"]')
        .setValue('[name="nameEntry"]', ['C', browser.Keys.ENTER])
        .click('[name="save"')
        .verify.valueContains('[name="nameEntry"', ['C'])
                  .pause(500)


        .click('[name="employee9"')
        .click('[name="nameEntry"')
        .clearValue('[name="nameEntry"]')
        .setValue('[name="nameEntry"]', ['H', browser.Keys.ENTER])
        .click('[name="save"')
        .verify.valueContains('[name="nameEntry"', ['H'])
                  .pause(500)


        .click('[name="employee10"')
        .click('[name="nameEntry"')
        .clearValue('[name="nameEntry"]')
        .setValue('[name="nameEntry"]', ['O', browser.Keys.ENTER])
        .click('[name="save"')
        .verify.valueContains('[name="nameEntry"', ['O'])
                  .pause(500)


        .click('[name="employee11"')
        .click('[name="nameEntry"')
        .clearValue('[name="nameEntry"]')
        .setValue('[name="nameEntry"]', ['O', browser.Keys.ENTER])
        .click('[name="save"')
        .verify.valueContains('[name="nameEntry"', ['O'])
                  .pause(500)


        .click('[name="employee12"')
        .click('[name="nameEntry"')
        .clearValue('[name="nameEntry"]')
        .setValue('[name="nameEntry"]', ['L', browser.Keys.ENTER])
        .click('[name="save"')
        .verify.valueContains('[name="nameEntry"', ['L'])
        

         .pause(4000)









   

     }

}