// Copy paste with slight modification from Sequelize Passport Example

$(document).ready(function() {
    // Getting references to our form and inputs
    var loginForm = $("form.login");
    var userIDInput = $("input#userID-input");
    var passwordInput = $("input#password-input");
  
    // When the form is submitted, we validate there's a userID and password entered
    loginForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        userID: userIDInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.userID || !userData.password) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData.userID, userData.password);
      userIDInput.val("");
      passwordInput.val("");
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(userID, password) {
      $.post("/api/login", {
        userID: userID,
        password: password
      }).then(function(data) {
        window.location.replace(data);
        // If there's an error, log the error
      }).catch(function(err) {
        console.log(err);
      });
    }
  
});