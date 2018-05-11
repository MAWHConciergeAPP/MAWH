$(document).ready(function() {

    $.get("/api/medicals", function(data) {
        console.log(data);
        $("#medical-tbody").children().remove();
        data.forEach(function(result) {
            var tr = $("<tr>");
            tr.append("<td>" + result.facility + "</td>");
            tr.append("<td>" + result.streetAddress + ", " + result.city + "</td>");
            tr.append("<td>" + result.phone + "</td>");
            tr.append("<td><a href = '" + result.url + "' target='_blank'></a></td>");
            tr.appendTo("#medical-tbody");
        });
    });
});




/*----------------------chapter contact table------------------------------------*/
$(document).ready(function() {

    $.get("/api/users/:id", function(data) {
        console.log(data);
        $("#chapter-table tr:last").children().remove();
        data.forEach(function(result) {
            var tr = $("<tr>");
            tr.append("<td>" + result.chapter + "</td>");         
            tr.append("<td>" + result.phone + "</td>");        
            tr.appendTo("#chapter-table");
        });
    });
});





