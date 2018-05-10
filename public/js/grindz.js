$(document).ready(function(){

    $("#local-food").change(function() {
        var keyword = $(this).val();
        console.log(keyword);
        
    });
    // grindz container will place the pictures of the restaraunt once a "food category" is chosen
    // DOESN"T EXIST YET
    var grindzContainer = $(".image-container");
       // grindz table
       $("#local-food").change(function(){
        var keyword = $(this).val();
        console.log(keyword);
        $.get("/api/activities/" + keyword, function(dataResult){
            console.log("HEY");
        });
    });
});

function loadImages(){

}