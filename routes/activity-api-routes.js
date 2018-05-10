var db = require("../models");

module.exports = function(app) {

    // all activities
    app.get("/api/activities", function(req, res) {
        if (req.user) {
            db.Activity.findAll({}).then(function(dbActivity) {
                res.json(dbActivity);
            });
        } else {
            console.log("not logged in user requesting activities");
        }
    });
    app.get("/api/activities/:keyword", function(req, res) {
        if (req.user) {
            db.Category.findAll({
                where: {id: req.params.keyword},
            }).then(function(dbCategory) {
                res.json(dbCategory);
            });
        } else {
            console.log("not logged in user requesting activities with keyword: " + req.params.keyword);
        }
    });
}