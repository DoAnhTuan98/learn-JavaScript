var passwordGenerator = require('password-generator');

var password = passwordGenerator(30);
console.log(password);