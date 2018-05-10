// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    console.log("got a / request");
    console.log(req.user);
    if (req.user) {
      console.log("user exists, going to index");
      res.redirect("/welcome.html");
    }
    console.log("go sign up");
    res.sendFile(path.join(__dirname, "../views/signup.html"));
  });


  // GBK Note: need to figure out landing page for logged in users and path to emergency contact page.
  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    console.log("got a login request");
    console.log(req.user);
    if (req.user) {
      console.log("has user");
      res.redirect("./welcome.html");
      res.end();
    }
    console.log("no user");
    res.redirect("./medical.html");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

};
