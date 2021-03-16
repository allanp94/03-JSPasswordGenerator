// Assignment code here

var generatePassword = function () {
  var passwordCriteria = {
    length: 0,
    lowercase: false,
    uppercase: false,
    numeric: false,
    specialCharacters: false,
  };

  passwordCriteria.length = prompt(
    "Min Lenght: 8 characters\nMax Length: 128 characters\nEnter the length for you new password: "
  );

  passwordCriteria.lowercase = confirm(
    "Would you like lowercase letters in your new password?"
  );

  passwordCriteria.uppercase = confirm(
    "Would you like uppercase letters in your new password?"
  );

  passwordCriteria.numeric = confirm(
    "Would you like numbers in your new password?"
  );

  passwordCriteria.specialCharacters = confirm(
    "Would you like special characters in your new password?"
  );
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
