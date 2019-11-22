var data = require('../pageArrays/projectArray');
var objects = {}
module.exports = {
    before: browser => {
        objects = browser.page.projectObjects();
        objects
            .navigate();
    },
    after: browser => {
        browser
            .end();
    },
    'Testing Danny': browser => {
        data.forEach(itemgh => {
            objects
                
                .clickEmployee(itemgh)
                .editEmployee(itemgh)


        })
    }
}