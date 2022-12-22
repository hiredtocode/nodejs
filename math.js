const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

module.exports = { add, subtract, multiply, divide }

exports.add = (a, b) => a + b
exports.subtract = (a, b) => a - b
exports.multiply = (a, b) => a * b
exports.divide = (a, b) => a / b

// and then we can import it on another file and use it by:

const add = require('./math.js') > add(2, 3)
