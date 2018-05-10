$(document).ready(function(){

    // activityContainer holds the data to be appended once an activity is chosen
    var activityContainer = $(".activity-table");
   
    

    // click events for the table submit buttons// dropdown choices. 
    // activity table select query
    $("#question-1").change(function(){
        var activity = $(this).val();
        console.log($(activity); 
        
        $.get("/api/activities" + keyword, function(result){
            // var activityArr = []
            console.log(result); 
        });
        
    });
    
});