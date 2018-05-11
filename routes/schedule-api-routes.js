var db = require("../models");

module.exports = function(app) {
	app.get("/api/schedules", function(req, res) {
		// console.log(req.User);
		if (req.user) {
			db.Schedule.findAll({
				where: {userID: req.user.userID},
				include: [db.Activity]
			}).then(function(dbSchedule) {
				res.json(dbSchedule);
			});
		} else {
			console.log("Valid user not logged in.");
		};
	});
};