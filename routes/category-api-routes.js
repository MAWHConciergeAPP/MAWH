var db = require("../models");

module.exports = function(app) {
    app.get("/api/categories", function(req, res) {
        db.Category.findAll({
            include: [db.Activity]
        }).then(function(dbCategory) {
            res.json(dbCategory);
        });
    });

    app.get("/api/categories/:id", function(req, res) {
        db.Category.findOne({
            where: {id: req.params.id},
            include: [db.Actvity]
        }).then(function(dbCategory) {
            res.json(dbCategory);
        });
    });
    app.get("/api/categories/:keyword", function(req, res) {
        db.Category.findAll({
            where: {id: req.params.keyword},
        }).then(function(dbCategory) {
            res.json(dbCategory);
        });
    });
}