// Assignment code here
var passwordCriteria = {
  length: 0,
  lowercase: false,
  uppercase: false,
  numeric: false,
  specialCharacters: false,
};

var passwordLength = function () {
  //prompting the user to enter a length for the new password
  passwordCriteria.length = prompt(
    "Min Lenght: 8 characters\nMax Length: 128 characters\nEnter the length for you new password: "
  );

  //converting the entered value from the user, which is a string, to a numeric value
  var passLen = parseInt(passwordCriteria.length);

  //password length validation
  if (
    passLen < 8 ||
    passLen >= 128 ||
    passwordCriteria.length === "" ||
    passwordCriteria.length === null ||
    isNaN(passwordCriteria.length)
  ) {
    window.alert(
      "Input cannot be: \nNULL -- empty\nNaN -- not-a-number!\nMin Length -- 8 characters\nMax Length -- 128 characters"
    );
    //recursive call to the function
    passwordLength();
  } else {
    passwordCriteria.length = passLen;
    window.alert(
      "Password length of " + passLen + " is well within the accepted criteria!"
    );
  }
};

var charTypes = function () {
  passwordCriteria.lowercase = confirm(
    "Would you like lowercase letters in your new password?\nYes -- 'OK'\nNo -- 'CANCEL'"
  );

  if (passwordCriteria.lowercase === true) {
    window.alert(
      "Your password will include lowercase characters" +
        passwordCriteria.lowercase
    );
  } else {
    window.alert(
      "No lowercase characters, got it!" + passwordCriteria.lowercase
    );
  }

  passwordCriteria.uppercase = confirm(
    "Would you like uppercase letters in your new password?\nYes -- 'OK'\nNo -- 'CANCEL'"
  );

  if (passwordCriteria.uppercase === true) {
    window.alert("Your password will include uppercase characters");
  } else {
    window.alert("No uppercase characters, got it!");
  }

  passwordCriteria.numeric = confirm(
    "Would you like numbers in your new password?\nYes -- 'OK'\nNo -- 'CANCEL'"
  );

  if (passwordCriteria.numeric === true) {
    window.alert("Your password will include numeric characters");
  } else {
    window.alert("No numeric characters, got it!");
  }

  passwordCriteria.specialCharacters = confirm(
    "Would you like special characters in your new password?\nYes -- 'OK'\nNo -- 'CANCEL'"
  );

  if (passwordCriteria.specialCharacters === true) {
    window.alert("Your password will include special characters");
  } else {
    window.alert("No special characters, got it!");
  }
};

var generatePassword = function () {
  // call length function
  passwordLength();
  charTypes();
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  if (passwordText.value === "undefined") {
    passwordText.value =
      "Please repeat the process of generating your password.";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
