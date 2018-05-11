$(document).ready(function(){
     
       // grindz form
 
        $("#local-food").change(function() {
            var keyword = $(this).val();
            console.log(keyword);

            $("#gallery-left").preappend("<img id='onos' src='../public/img/onos.jpg'>");
            $("#gallery-right").preappend("<img id='onos' src='../public/img/onos.jpg'>");
    
            $.get("/api/grindz/" + keyword, function(data) {
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    $("#desc").append("<p>" +  + "</p>");
                    $("#desc").append("<p>" +  + "</p>");
                    $("#desc").append("<p>" +  + "</p>");
                }
    
            });
        });
    });









        // $("#local-food").change(function(){
        //     var keyword = $(this).val();
        //     console.log(keyword);
        //     $.get("/api/activities/" + keyword, function(dataResult){
        //         console.log("dataResult");