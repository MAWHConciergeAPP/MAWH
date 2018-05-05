var db = require("../models");

module.exports = function(app) {
    app.get("/api/users", function(req, res) {
        db.User.findAll({
            include: [db.Schedule]
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    app.get("/api/users/:id", function(req, res) {
        db.User.findOne({
            where: {id: req.params.id},
            include: [db.Schedule, db.Contact]
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });
}