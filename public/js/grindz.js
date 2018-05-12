$(document).ready(function() {
    $("#local-food").change(function() {
        var keyword = $(this).val();
        console.log(keyword);

        $.get("api/grindzs/" + keyword, function(data) {
            console.log(data);

            $("#grindz-gallery").children().remove();
            data.forEach(function(result) {
                var gallery = $("<div>");
                gallery.addClass("gallery");
                var desc = $("<div>");
                desc.addClass("desc");
                gallery.append("<img src='" + result.img_url + "'><br>");
                desc.append(result.name + "<br>");
                desc.append(result.streetAddress + "<br>");
                desc.append(result.phone + "<br>");
                desc.append(result.price + "<br>");
                desc.append("<a href = '" + result.website_url + "' target = '_blank'>View Website</a>");
                desc.appendTo(gallery);
                gallery.appendTo("#grindz-gallery");
            });
        });
    });
});