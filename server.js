require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");
console.log("got here");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


require("./routes/activity-api-routes.js")(app);
require("./routes/category-api-routes.js")(app);
require("./routes/contact-api-routes.js")(app);
require("./routes/faq-api-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./routes/login-api-routes.js")(app);
require("./routes/user-api-routes.js")(app);

app.use(express.static("public"));

db.sequelize.sync({force: true}).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});