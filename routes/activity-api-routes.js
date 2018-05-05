var db = require("../models");

module.exports = function(app) {

    // all activities
    app.get("/api/activities", function(req, res) {
        db.Activity.findAll({}).then(function(dbActivity) {
            res.json(dbActivity);
        });
    });

}