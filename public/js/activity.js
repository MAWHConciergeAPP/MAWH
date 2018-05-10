$(document).ready(function() {
	$("#question1").change(function() {
		var keyword = $(this).val();
		console.log(keyword);

		$.get("/api/activities/" + keyword, function(data) {
			console.log(data);
			$("#tbody").children().remove();
			for (var i = 0; i < data.length; i++) {
				$("#tBody").append("<td>" + data[i].activity_name + "</td>");
				$("#tBody").append("<td>" + data[i].streetAddress + ", " + data[i].city + "</td>");
				$("#tBody").append("<td>" + data[i].phone + "</td>");
				$("#tBody").append("<td>" + data[i].durationInMinutes + "</td>");
			}

		});
	});
});