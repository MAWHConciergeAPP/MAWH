var bcrypt = require("bcrypt-nodejs");

var userInput = process.argv[2];
var hashedPassword = bcrypt.hashSync(userInput, bcrypt.genSaltSync(10), null);
console.log(hashedPassword);