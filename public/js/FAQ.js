
  $(document).ready(function() {
    $("#question1").change(function() {
      var keyword = $(this).val();
      console.log(keyword);
  
      $.get("/api/faqs/:id" + keyword, function(data) {
        console.log(data);
        $("faqbody").children().remove();
        data.forEach(function(result) {
          var answer = $("<p>");
          answer.append("<p>" + result.answer + "</p>");   
          answer.appendTo("#faqbody");
        });
      });
    });
  });