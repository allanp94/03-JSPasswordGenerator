// Assignment code here
var passwordCriteria = {
  length: 0,
  lowercase: false,
  uppercase: false,
  numeric: false,
  specialCharacters: false,
};

var newPassword = [];

//empty object array in order to copy the valid lists from the users input
var validCharLists = {
  uppercase: "",
  lowercase: "",
  numbers: "",
  specialCharacters: "",
};

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

//function that iterates the minimun requirements and adds at least one character
var minRequirements = function (reqObj) {
  var char;

  if (reqObj.lowercase === true) {
    //get a random number based on the length of the array
    char = randListNum(characters.lowercase);
    //add the char that was randomly selected to the newPassword array
    newPassword.push(char);
    //assigning the minRequirement lists in a new list to iterate over later
    validCharLists.lowercase = characters.lowercase;
  } else {
    //remove the object if not required in the char type for the password
    delete validCharLists.lowercase;
  }

  if (reqObj.uppercase === true) {
    //get a random number based on the length of the  array
    char = randListNum(characters.uppercase);
    newPassword.push(char);
    validCharLists.uppercase = characters.uppercase;
  } else {
    delete validCharLists.uppercase;
  }

  if (reqObj.numeric === true) {
    //get a random number based on the length of the  array
    char = randListNum(characters.numbers);
    console.log(characters.numbers);
    newPassword.push(char);
    validCharLists.numbers = characters.numbers;
    console.log(validCharLists.numbers);
  } else {
    delete validCharLists.numbers;
  }

  if (reqObj.specialCharacters === true) {
    //get a random number based on the length of the  array
    char = randListNum(characters.specialCharacters);
    newPassword.push(char);
    validCharLists.specialCharacters = characters.specialCharacters;
    console.log(newPassword);
  } else {
    delete validCharLists.specialCharacters;
  }
};

// returns a random number based on the list it receives as a parameter
var randListNum = function (objList) {
  return objList[Math.floor(Math.random() * objList.length)];
};

//function that fills the remaining length after the minimun requirements have been met
var completePasswordLength = function (objList) {
  //if the requested pass length and the current length of the new password are not the same run the while loop
  while (passwordCriteria.length !== newPassword.length) {
    //get a random number based on the length of the characters object
    var randObjNum = Math.floor(Math.random() * Object.keys(objList).length);

    // value returned is the name of the array in object
    var list = Object.keys(objList)[randObjNum];
    var char;

    //finds the array selected and randomly extracts a char from it
    switch (list) {
      case "lowercase":
        if (passwordCriteria.lowercase) {
          char = randListNum(objList.lowercase);
        }
        break;
      case "uppercase":
        if (passwordCriteria.uppercase) {
          char = randListNum(objList.uppercase);
        }
        break;
      case "numbers":
        if (passwordCriteria.numeric) {
          char = randListNum(objList.numbers);
        }
        break;
      case "specialCharacters":
        if (passwordCriteria.specialCharacters) {
          char = randListNum(objList.specialCharacters);
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

  if (
    !passwordCriteria.specialCharacters &&
    !passwordCriteria.lowercase &&
    !passwordCriteria.uppercase &&
    !passwordCriteria.numeric
  ) {
    window.alert("  At least ONE character type has to be selected");
    charTypes();
  }
};

//resets the values if the users refreshes the page
var reset = function () {
  newPassword = [];
  validCharLists = {
    uppercase: [],
    lowercase: [],
    numbers: [],
    specialCharacters: [],
  };
  passwordCriteria = {
    length: 0,
    lowercase: false,
    uppercase: false,
    numeric: false,
    specialCharacters: false,
  };
};

var generatePassword = function () {
  // call length function
  passwordLength();
  charTypes();
  minRequirements(passwordCriteria);
  completePasswordLength(validCharLists);
  var generatedPass = newPassword.join("");
  reset();
  return generatedPass;
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
