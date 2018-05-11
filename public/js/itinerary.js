$(document).ready(function() {
	$.get("/api/schedules/", function(data) {
		console.log(data);
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