var db = require("../models");

module.exports = function(app) {
    app.get("/api/contacts", function(req, res) {
        if (req.user){
            db.Contact.findAll({
                include: [db.User]
            }).then(function(dbContact) {
                res.json(dbContact);
            });
        } else {
            console.log("not logged in user requested contacts");
        };
    });

    app.get("/api/contacts/:id", function(req, res) {
        if (req.user){
            db.Contact.findOne({
                where: {id: req.params.id},
                include: [db.User]
            }).then(function(dbContact) {
                res.json(dbContact);
            });
        } else {
            console.log("not logged in user requested contacts with ID: " + req.params.id);
        };
    });
}