var math = {
    add: function (num1, num2) {
        return num1 + num2
    },
    subtract: function (num1, num2) {
        return num1 - num2
    },
    divide: function (num1, num2) {
        return num1 / num2
    },
    multiply: function (num1, num2) {
        return num1 * num2
    },
    mathTest: function (statement, search, result) {
        statement
            .setValue('input[type="text"]', [search, statement.Keys.ENTER])
            .waitForElementPresent('#cwos', 2000)
            .expect.element('#cwos').text.to.contain(result)
        statement
            .getText('#cwos', function(result) {
                statement
                .setValue('input Selector', result.value)
            })
    }
}