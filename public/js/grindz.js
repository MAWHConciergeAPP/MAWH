
$(document).ready(function(){
     
       // grindz form
 
        $("#local-food").change(function() {
            var keyword = $(this).val();
            console.log(keyword);

            $.get("/api/grindzs/" + keyword, function(data) {
                console.log(data);
            
                data.forEach(function(result) {
                    var desc = $(".gallery-left");
                    // desc.append("<img>" +  + "<br>" + "<img>");
                    desc.append("<p>" + result.name + "<br>" + "</p>");
                    desc.append("<p>" + result.streetAddress + "<br>" + "</p>");
                    desc.append("<p>" + result.city + " , " + result.island + "<br>" + "</p>");
                    desc.append("<p>" + result.phone + "<br>" + "</p>"); 
                    desc.append("<p>" + result.hours + "<br>" + "</p>");
                    desc.append("<p>" + result.website_url + "<br>" + "</p>");
                    desc.append("<p>" + result.price + "<br>" + "</p>");
                    desc.append("<p>" + "Notes: " + result.notes + "</p>");

                    if (keyword === [1]) {
                        var desc = $(".gallery-left");

                    }
                    
                });
                
                $("select").change(function()  {
                    $(".desc").empty();
                });
            });
        });
    });









        // $("#local-food").change(function(){
        //     var keyword = $(this).val();
        //     console.log(keyword);
        //     $.get("/api/activities/" + keyword, function(dataResult){
        //         console.log("dataResult");