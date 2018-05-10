var db = require("../models");

module.exports = function(app) {
    app.get("/api/categories", function(req, res) {
        if (req.user){
            db.Category.findAll({
                include: [db.Activity]
            }).then(function(dbCategory) {
                res.json(dbCategory);
            });
        } else {
            console.log("not logged in user requested categories");
        }
    });

    app.get("/api/categories/:id", function(req, res) {
        if (req.user){
            db.Category.findOne({
                where: {id: req.params.id},
                include: [db.Actvity]
            }).then(function(dbCategory) {
                res.json(dbCategory);
            });
        } else {
            console.log("not logged in user requested categories with id: " + req.params.id);
        };
    });
    app.get("/api/categories/:keyword", function(req, res) {
        if (req.user){
            db.Category.findAll({
                where: {id: req.params.keyword},
            }).then(function(dbCategory) {
                res.json(dbCategory);
            });
        } else {
            console.log("not logged in user requested categories with keyword: " + req.params.keyword);
        };
    });
}