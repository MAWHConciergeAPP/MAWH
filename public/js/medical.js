/*----------------------medical facilities table------------------------------------*/

/*axios.get('/api/clinics', {
    params: {
    id: 2
    }
})
    .then(function (response) {
      console.log(response);
      $('#medicalTable tr:last').after(`<tr>${response.facilityName}</tr><tr>${response.address}</tr><tr>${response.phoneNumber}</tr><tr>${response.notes}</tr>`);
    })
    .catch(function (error) {
    
    });   */

    $(document).ready(function() {
        $("#medical-table").change(function() {
            var keyword = $(this).val();
            console.log(keyword);
    
            $.get("/api/clinics" + keyword, function(data) {
                console.log(data);
                $("#medical-tbody").children().remove();
                data.forEach(function(result) {
                    var tr = $("<tr>");
                    tr.append("<td>" + result.facilityName + "</td>");
                    tr.append("<td>" + result.address + ", " + result.city + "</td>");
                    tr.append("<td>" + result.phoneNumber + "</td>");
                    tr.append("<td>" + result.notes + " hours</td>");
                    tr.appendTo("#tbody");
                });
            });
        });
    });



/*----------------------chapter contact table------------------------------------*/

axios.get("/api/users/:id")
    .then(function (response) {
      console.log(response);
      $('#chapter-table tr:last').after(`<tr>${response.chapter}</tr><tr>${response.phone}</tr>`);
    })
    .catch(function (error) {
    
    });   