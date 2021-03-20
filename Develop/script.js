// Assignment code here
var passwordCriteria = {
  length: 0,
  lowercase: false,
  uppercase: false,
  numeric: false,
  specialCharacters: false,
};

var newPassword = [];

var characters = {
  uppercase: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  lowercase: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  specialCharacters: [
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ],
};

//function that iterates the minimun requirements
var minRequirements = function (reqObj) {
  var char;
  if (reqObj.lowercase === true) {
    //get a random number based on the length of the array
    char = randListNum(characters.lowercase);
    //add the char that was randomly selected to the newPassword array
    newPassword.push(char);
    console.log(newPassword);
  }
  if (reqObj.uppercase === true) {
    //get a random number based on the length of the  array
    char = randListNum(characters.uppercase);
    newPassword.push(char);
    console.log(newPassword);
  }
  if (reqObj.numeric === true) {
    //get a random number based on the length of the  array
    char = randListNum(characters.numbers);
    newPassword.push(char);
    console.log(newPassword);
  }
  if (reqObj.specialCharacters === true) {
    //get a random number based on the length of the  array
    char = randListNum(characters.specialCharacters);
    newPassword.push(char);
    console.log(newPassword);
  }
};

// returns a random number based on the list it receives as a parameter
var randListNum = function (objList) {
  return objList[Math.floor(Math.random() * objList.length)];
};

//function that fills the remaining length after the minimun requirements have been met
var completePasswordLength = function () {
  //if the requested pass length and the current length of the new password are not the same run the while loop
  while (passwordCriteria.length !== newPassword.length) {
    //get a random number based on the length of the characters object array
    var randObjNum = Math.floor(Math.random() * Object.keys(characters).length);
    // value returned is the name of the object
    var list = Object.keys(characters)[randObjNum];
    var char;
    switch (list) {
      case "lowercase":
        if (passwordCriteria.lowercase) {
          char = randListNum(characters.lowercase);
        }
        break;
      case "uppercase":
        if (passwordCriteria.uppercase) {
          char = randListNum(characters.uppercase);
        }
        break;
      case "numbers":
        if (passwordCriteria.numeric) {
          char = randListNum(characters.numbers);
        }
        break;
      case "specialCharacters":
        if (passwordCriteria.specialCharacters) {
          char = randListNum(characters.specialCharacters);
        }
        break;
      default:
        console.log(" default switch statement");
    }
    newPassword.push(char);
  }
  console.log(newPassword);
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
    //recursive call to the function so the user can enter a valid input
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
    window.alert("Your password will include lowercase characters");
  } else {
    window.alert("No lowercase characters, got it!");
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
  console.log(Math.floor(Math.random() * Object.keys(characters).length));
  // passwordLength();
  // charTypes();
  // minRequirements(passwordCriteria);
  // completePasswordLength();
  // //resetting the array to empty
  // newPassword = [];
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
