
$(document).ready(function(){
     
       // grindz form
 

        $("#local-food").change(function() {
            var keyword = $(this).val();
            console.log(keyword);

            $.get("/api/grindz/" + keyword, function(data) {
                console.log(data);
                $(".gallery").append(data.img_url);
                // $(".gallery-right").append(data.img_url);
            
                for (var i = 0; i < data.length; i++) {
                    $(".desc").append("<p>" + data.name + "<br>" 
                    + data.streetAddress + "<br>" 
                    + data.city + "<br>" 
                    + data.island + "<br>" 
                    + data.phone + "<br>" 
                    + data.hours + "<br>"
                    + data.website_url + "<br>"
                    + data.keyword + "<br>"
                    + data.price + "<br>"
                    + data.notes + "</p>");
                    
                }
    
            });
        });
    });









        // $("#local-food").change(function(){
        //     var keyword = $(this).val();
        //     console.log(keyword);
        //     $.get("/api/activities/" + keyword, function(dataResult){
        //         console.log("dataResult");