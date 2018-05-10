function selectedFAQ() {
    var resultElement = document.getElementById('value');
    var question = document.getElementById('value').value;
    resultElement.innerHTML = '';
    
    axios.get('/api/faqs/:id', {
      params: {
        id: question
      }
    })
    .then(function (response) {
      console.log(response);
      $("#faqbody").html(response);
    })
    .catch(function (error) {
        resultElement.innerHTML = generateErrorHTMLOutput(error);
    });
  }