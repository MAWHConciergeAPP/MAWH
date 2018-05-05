var db = require("../models");

module.exports = function(app) {
    app.get("/api/contacts", function(req, res) {
        db.Contact.findAll({
            include: [db.User]
        }).then(function(dbContact) {
            res.json(dbContact);
        });
    });

    app.get("/api/contacts/:id", function(req, res) {
        db.Contact.findOne({
            where: {id: req.params.id},
            include: [db.User]
        }).then(function(dbContact) {
            res.json(dbContact);
        });
    });
}