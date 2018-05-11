
// $(document).ready(function(){

//        // grindz form

//        $("#local-food").change(function() {
//         var keyword = $(this).val();
//         console.log(keyword);

//         $.get("/api/grindzs/" + keyword, function(data) {
//             console.log(data);
            
//             data.forEach(function(result) {
//                 var desc = $(".gallery-1");
//                     // desc.append("<img>" +  + "<br>" + "<img>");
//                     desc.append("<p>" + result.name + "<br>" + "</p>");
//                     desc.append("<p>" + result.streetAddress + "<br>" + "</p>");
//                     desc.append("<p>" + result.city + " , " + result.island + "<br>" + "</p>");
//                     desc.append("<p>" + result.phone + "<br>" + "</p>"); 
//                     desc.append("<p>" + result.hours + "<br>" + "</p>");
//                     desc.append("<p>" + result.website_url + "<br>" + "</p>");
//                     desc.append("<p>" + result.price + "<br>" + "</p>");
//                     desc.append("<p>" + "Notes: " + result.notes + "</p>");

//                     if (keyword === [2]) {
//                         var 

//                     }
                    
//                 });

//             $("select").change(function()  {
//                 $(".desc").empty();
//             });
//         });
//     });
//    });

$(document).ready(function() {
    $("#local-food").change(function() {
        var keyword = $(this).val();
        console.log(keyword);

        $.get("api/grindzs/" + keyword, function(data) {
            console.log(data);

            $("#grindz-gallery").children().remove();
            data.forEach(function(result) {
                var gallery = $("<div>");
                gallery.addClass("col-sm-3");
                gallery.addClass("gallery");
                var desc = $("<div>");
                desc.addClass("desc");
                gallery.append("<img src='" + result.img_url + "'><br>");
                desc.append(result.name + "<br>");
                desc.append(result.streetAddress + "<br>");
                desc.append(result.phone + "<br>");
                desc.append(result.price + "<br>");
                desc.append("<a href = '" + result.website_url + "' target = '_blank'>Website</a>");
                desc.appendTo(gallery);
                gallery.appendTo("#grindz-gallery");
            });
        });
    });
});
