var data = [
    {[0]:'Brooklyn'},
    {[1]:'400000'},
    {[2]:'64567'}

]
var homeloan = {}
module.exports = {
    beforeEach: browser => {
        homeloan= browser.page.homeloanpage()
        homeloan
        .navigate()
    },
    after: browser => {
        homeloan
            .end()
    },
    'Home loan test'  : browser => {
        data.forEach(test=>{
            homeloan
            .wizard(test)
        })
   }
}