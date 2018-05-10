var db = require("../models");

module.exports = function(app) {

	// all medical facilities
	app.get("/api/clinics", function(req, res) {
		db.Medical.findAll({}).then(function(dbMedical) {
			res.json(dbMedical);
		});
	});
};