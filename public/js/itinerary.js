$(document).ready(function() {
	$.get("/api/schedules/", function(data) {
		console.log(data);
		// child name
		$("#child-name").append(data[0].User.user_name);

		// airline table
		$("#flight-info").children().remove();
		var row = $("<tr>");
		row.append("<td>" + data[0].User.airline + "</td>");
		row.append("<td>" + data[0].User.arrivalDateTime + "</td>");
		row.append("<td>" + data[0].User.departureDateTime + "</td>");
		row.appendTo("#flight-info");

		// itinerary table
		$("#itinerary-display").children().remove();
		data.forEach(function(result) {
			var tr = $("<tr>");
			tr.append("<td>" + result.Activity.activity_name + "</td>");
			tr.append("<td>" + result.Activity.streetAddress + ", " + result.Activity.city + "</td>");
			tr.append("<td>" + result.activityDate + "</td>");
			tr.append("<td>" + result.startTime + "</td>");
			tr.append("<td>" + result.Activity.notes + "</td>");
			tr.appendTo("#itinerary-display");
		});
	});
});