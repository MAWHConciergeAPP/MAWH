var db = require("../models");

module.exports = function(app) {

	// all foods if logged in
	app.get("/api/grindzs", function(req, res) {
		if (req.user) {
			db.Grindz.findAll({}).then(function(dbGrindz) {
				res.json(dbGrindz);
			});
		} else {
			console.log("Valid user not logged in.");
		}
	});

	app.get("/api/grindzs/:keyword", function(req, res) {
		if (req.user) {
			db.Grindz.findAll({
				where: {keyword: req.params.keyword},
			}).then(function(dbGrindz) {
				res.json(dbGrindz);
			});
		} else {
			console.log("Valid user not logged in.");
		};
	});
};