var db = require("../models");

module.exports = function(app) {
    app.get("/api/users", function(req, res) {
        if (req.User){
            db.User.findAll({
                include: [db.Schedule]
            }).then(function(dbUser) {
                res.json(dbUser);
            });
        } else {
            console.log("not logged in user requested users");
        };
    });

    app.get("/api/users/:id", function(req, res) {
        if (req.User){
            db.User.findOne({
                where: {id: req.params.id},
                include: [db.Schedule, db.Contact]
            }).then(function(dbUser) {
                res.json(dbUser);
            });
        } else {
            console.log("not logged in user requested user with ID: " req.params.id);
        };
    });
}