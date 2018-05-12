$(document).ready(function() {
  $("#question1").change(function() {
    var keyword = $(this).val();
    console.log(keyword);

    $.get("/api/faqs/" + keyword, function(data) {
      console.log(data.answer);
      $("#faqbody").children().remove();
      var answer = $("<p>");
      answer.append(data.answer);
      answer.appendTo("#faqbody");
    });
  });
});