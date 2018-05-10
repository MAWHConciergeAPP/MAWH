$(document).ready(function() {

	$("#question1").change(function() {
		var activity = $(this).val();
		console.log(activity);

		$.get("/api/activities/" + activity, function(data) {
			console.log(data);
			// $("#activity").append(result.activity_name);
			// $("#location").append(result.)
			// $("#hours").append()
			// $("#phone-number").append();
		});
	});
});