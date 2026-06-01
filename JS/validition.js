document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  //Get input value
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var subject = document.getElementById("subject").value.trim();
  var message = document.getElementById("message").value.trim();
  //Get errors
  var nameError = document.getElementById("name-error");
  var emailError = document.getElementById("email-error");
  var subjectError = document.getElementById("subject-error");
  var messageError = document.getElementById("message-error");
  //clear form
  nameError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";
  let valid = true;
  //Form validition
  //Name validition
  if (name === "") {
    nameError.textContent = "Please enter your name.";
    valid = false;
  } else if (name.length < 3 || name.length > 15) {
    nameError.textContent = "The name must be between 3-15 characters.";
    valid = false;
  }
  //Email validition
  if (email === "") {
    emailError.textContent = "Please enter your email.";
    valid = false;
  }
  //Subject validition
  if (subject !== "" && subject.length < 3) {
    subjectError.textContent = "The subject must be at least 3 characters.";
    valid = false;
  }
  //Message validition
  if (message !== "" && message.length < 5) {
    messageError.textContent = "The message must be at least 5 characters.";
    valid = false;
  }
  if (valid) {
    alert("Form submitted successfully.");
  }
});
