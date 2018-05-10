var db = require("../models");

module.exports = function(app) {

    // all activities
    app.get("/api/activities", function(req, res) {
        db.Activity.findAll({}).then(function(dbActivity) {
            res.json(dbActivity);
        });
    });
    app.get("/api/activities/:keyword", function(req, res) {
        db.Activity.findAll({
            where: {id: req.params.keyword},
        }).then(function(dbActivity) {
            res.json(dbActivity);
        });
    });
}