$(document).ready(function() {
	$("#question1").change(function() {
		var keyword = $(this).val();
		console.log(keyword);

		$.get("/api/activities/" + keyword, function(data) {
			console.log(data);
			$("#tbody").children().remove();
			data.forEach(function(result) {
				var tr = $("<tr>");
				tr.append("<td>" + result.activity_name + "</td>");
				tr.append("<td>" + result.streetAddress + ", " + result.city + "</td>");
				tr.append("<td>" + result.phone + "</td>");
				tr.append("<td>" + result.durationInMinutes/60 + " hours</td>");
				tr.append("<td><a href ='" + result.url + "' target='_blank'>Website</a></td>");
				tr.appendTo("#tbody");
			});
		});
	});
});