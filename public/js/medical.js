/*----------------------medical facilities table------------------------------------*/

axios.get('/api/activities', {
    params: {
    id: 2
    }
})
    .then(function (response) {
      console.log(response);
      $('#medicalTable tr:last').after(`<tr>${response.facilityName}</tr><tr>${response.address}</tr><tr>${response.phoneNumber}</tr><tr>${response.notes}</tr>`);
    })
    .catch(function (error) {
    
    });   

/*----------------------chapter contact table------------------------------------*/

axios.get("/api/users/:id")
    .then(function (response) {
      console.log(response);
      $('#chapter-table tr:last').after(`<tr>${response.chapter}</tr><tr>${response.phone}</tr>`);
    })
    .catch(function (error) {
    
    });   