$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $("form.signup");
    var userID = $("input#userID-input");
    var passwordInput = $("input#password-input");
  
    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        userID: userID.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.userID || !userData.password) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.userID, userData.password);
      userID.val("");
      passwordInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(userID, password) {
      $.post("/api/signup", {
        userID: userID,
        password: password
      }).then(function(data) {
        window.location.replace(data);
        // If there's an error, handle it by throwing up a bootstrap alert
      }).catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });
  