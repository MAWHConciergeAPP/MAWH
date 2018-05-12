var Nightmare = require("nightmare");
var nightmare = Nightmare({show: true});

nightmare
.goto("https://warm-everglades-40708.herokuapp.com/")
.type("#userID-input", "sford")
.click("#password-input")
.type("#password-input", "password")
.click(".btn-default")
.wait(5000)
.evaluate(function() {
	return document.title
}).end()
.then(function(result) {
	console.log(result);
}).catch(function(error) {
	console.error("Search failed: ", error);
});