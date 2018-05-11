var db = require("../models");

module.exports = function(app) {
	app.get("/api/schedules", function(req, res) {
		// console.log(req.User);
		if (req.user) {
			db.Schedule.findAll({
				where: {userLogin: req.user.userID},
				include: [db.Activity, db.User]
			}).then(function(dbSchedule) {
				res.json(dbSchedule);
			});
		} else {
			console.log("Valid user not logged in.");
		};
	});
};