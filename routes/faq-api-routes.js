var db = require("../models");

module.exports = function(app) {
    app.get("/api/faqs", function(req, res) {
        if (req.user) {
            db.FAQ.findAll({}).then(function(dbFAQ) {
                res.json(dbFAQ);
            });
        } else {
            console.log("not logged in user requested FAQ");
        };
    });
    
    app.get("/api/faqs/:keyword", function(req,res) {
        if (req.user) {
            db.FAQ.findOne({
                where: {keyword: req.params.keyword}
            }).then(function(dbFAQ) {
                res.json(dbFAQ);
            });
        } else {
            console.log("Valid user not logged in.");
        };
    });
};