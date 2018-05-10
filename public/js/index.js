$(document).ready(function(){

    // activityContainer holds the data to be appended once an activity is chosen
    var activityContainer = $(".activity-table");
   
    

    // click events for the table submit buttons// dropdown choices. 
    // activity table select query
    $("#specific-form").change(function(){
        console.log($(this).val()); 
        $.get("/api/activities", function(dataResult){
            console.log(dataResult); 
        });
        
    });
    
});

// Actions needed to be exectued
// populates Itinerary table 
// populates activity table
// loads grindz images

// ajax call to the route

// append all that data with jquery 

