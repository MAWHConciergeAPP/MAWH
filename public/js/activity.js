$(document).ready(function() {
	$("#question1").change(function() {
		var keyword = $(this).val();
		console.log(keyword);

		$.get("/api/activities/" + keyword, function(data) {
			console.log(data);
			$("<tbody>").children().remove();
			var tr = $("<tr>");
			for (var i = 0; i < data.length; i++) {
				tr.append("<td>" + data[i].activity_name + "</td>");
				tr.append("<td>" + data[i].streetAddress + ", " + data[i].city + "</td>");
				tr.append("<td>" + data[i].phone + "</td>");
				tr.append("<td>" + data[i].durationInMinutes + " minutes</td>");
				tr.append("<td><a href ='" + data[i].url + "'>Website</a></td>");
				$("#tbody").append(tr);
			}
		});
	});
});