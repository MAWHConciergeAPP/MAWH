$(document).ready(function(){
     // itinerary container will hold the data to be appended once itinerary info is entered 
     var intineraryContainer = $(".itinerary-table");
    // itinarary table
    $("specific-form").onload(function(){
        console.log($(this).val());
        $.get("/api/itinerary", function(dataResult){
            console.log(dataResult);
        });
    });
})