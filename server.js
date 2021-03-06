require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var passport = require("./config/passport");
var session = require("express-session");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");
console.log("got here");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static("public"));
app.use(session( {secret:"keyboard cat", resave:true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

require("./routes/activity-api-routes.js")(app);
require("./routes/category-api-routes.js")(app);
require("./routes/contact-api-routes.js")(app);
require("./routes/faq-api-routes.js")(app);
require("./routes/food-api-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./routes/login-api-routes.js")(app);
require("./routes/medical-api-routes.js")(app);
require("./routes/schedule-api-routes.js")(app);
require("./routes/user-api-routes.js")(app);




db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});