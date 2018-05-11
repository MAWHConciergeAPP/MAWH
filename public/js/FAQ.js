$(document).ready(function() {
  $("#question1").change(function() {
    var id = $(this).val();
    console.log(id);

    $.get("/api/faqs/" + id, function(data) {
      console.log(data);
      $("#faqbody").children().remove();
      var answer = $("<p>");
      answer.append(data.answer);
      answer.appendTo("#faqbody");
    });
  });
});