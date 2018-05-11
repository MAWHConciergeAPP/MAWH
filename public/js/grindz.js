
$(document).ready(function(){
     
       // grindz form
 
        $(".desc").val("");
        $("#local-food").change(function() {
            var keyword = $(this).val();
            console.log(keyword);

            $.get("/api/grindzs/" + keyword, function(data) {
                console.log(data);
                // $(".gallery-left").prepend("<img>" + data.img_url + "</img>");
                // $(".gallery-right").append(data.img_url);
            
                data.forEach(function(result) {
                    var desc = $(".desc");
                    // desc.append("<img>" +  + "<br>" + "<img>");
                    desc.append("<p>" + result.name + "<br>" + "</p>");
                    desc.append("<p>" + result.streetAddress + "<br>" + "</p>");
                    desc.append("<p>" + result.city + " , " + result.island + "<br>" + "</p>");
                    desc.append("<p>" + result.phone + "<br>" + "</p>"); 
                    desc.append("<p>" + result.hours + "<br>" + "</p>");
                    desc.append("<p>" + result.website_url + "<br>" + "</p>");
                    desc.append("<p>" + result.price + "<br>" + "</p>");
                    desc.append("<p>" + "Notes: " + result.notes + "</p>");
                    
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