// Exercise 7
function validate() {
  var error = 0;
  // Get the input fields
  var fName = document.getElementById("fName");
  var fEmail = document.getElementById("fEmail");
  var fAddress = document.getElementById("fAddress");
  var fLastN = document.getElementById("fLastN");
  var fPassword = document.getElementById("fPassword");
  var fPhone = document.getElementById("fPhone");

  // Get the error elements
  var errorName = document.getElementById("errorName");
  var errorEmail = document.getElementById("errorEmail");
  var errorAddress = document.getElementById("errorAddress");
  var errorLastN = document.getElementById("errorLastN");
  var errorPassword = document.getElementById("errorPassword");
  var errorPhone = document.getElementById("errorPhone");

  // Validate fields entered by the user: name, phone, password, and email
  let lettersRx = new RegExp("/^[a-zA-Z]*$/");
  let emailRx = new RegExp(
    "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/"
  );
  let passwordRx = new RegExp("/^[a-zA-Z0-9]*$/");
  let numbersRx = new RegExp("/^[0-9]*$/");

  if (fName.value.length <= 3 || lettersRx.test(fName.value)) {
    error++;
    document.getElementById("fName").classList.add("is-invalid");
  }

  if (fEmail.value.length <= 3 || emailRx.test(fEmail.value)) {
    error++;
    document.getElementById("fEmail").classList.add("is-invalid");
  }

  if (fAddress.value.length <= 3) {
    error++;
    document.getElementById("fAddress").classList.add("is-invalid");
  }

  if (fLastN.value.length <= 3 || lettersRx.test(fLastN.value)) {
    error++;
    document.getElementById("fLastN").classList.add("is-invalid");
  }

  if (fPassword.value.length <= 3 || passwordRx.test(fPassword.value)) {
    error++;
    document.getElementById("fPassword").classList.add("is-invalid");
  }

  if (fPhone.value.length != 9 || numbersRx.test(fPhone.value)) {
    error++;
    document.getElementById("fPhone").classList.add("is-invalid");
  }

  if (error > 0) {
    alert("Error");
    event.preventDefault();
  } else {
    alert("OK");
  }
}
