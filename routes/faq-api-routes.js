var db = require("../models");

module.exports = function(app) {
    app.get("/api/faqs", function(req, res) {
        db.FAQ.findAll({}).then(function(dbFAQ) {
            res.json(dbFAQ);
        });
    });
}