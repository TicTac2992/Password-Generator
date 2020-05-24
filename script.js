// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generateBtn = document.querySelector("#generate");
var generatedPassword = document.querySelector("#password");

//Password type variables
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "!@#$%&*+?^()_";
var numbers = "1234567890";
var length = "";
var chosenCharacterTypes = [];


function generatePassword() {
  event.preventDefault();
  let passwordLength = parseInt(
    prompt(
      "How many characters would you like your password to be? Choose between 8 and 128."
    )
  );

  console.log("Password length: " + passwordLength); //console.log desired password length

  //If entered input is not valid, display prompt again
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(
      prompt("Please choose a number between 8 and 128.")
    );
    console.log("Password length " + passwordLength);
  }
  //Prompt options for password character types
  let confirmUpperCaseLetters = confirm("Do you want uppercase letters in your password?");
  let confirmLowerCaseLetters = confirm("Do you want lowercase letters in your password?");
  let confirmNumbers = confirm("Do you want numbers in your password?")
  let confirmSpecialCharacters = confirm("Do you want to include any special characters?");

  //Store chosen password types
  if (confirmUpperCaseLetters) {
    chosenCharacterTypes.push(uppercase);
    console.log("Uppercase: Yes");
  } else {
    console.log("Uppercase: No");
  }

  if (confirmLowerCaseLetters) {
    chosenCharacterTypes.push(lowercase);
    console.log("Lowercase: Yes");
  } else {
    console.log("Lowercase: No");
  }

  if (confirmNumbers) {
    chosenCharacterTypes.push(numbers);
    console.log("Numbers: Yes");
  } else {
    console.log("Numbers: No");
  }

  if (confirmSpecialCharacters) {
    chosenCharacterTypes.push(specialCharacters);
    console.log("Special characters: Yes");
  } else {
    console.log("Special characters: No");
  }

  //this will allow whatever indexes are selected to populate into the "new password" field
  let newPassword = "";

  //Compose password by randomly assigning values from combination of selected character types
  for (let i = 0; i < passwordLength; i++) {
    var selectedCharacterIndex = Math.floor(
      Math.random() * chosenCharacterTypes.length
    );

    var characterString = chosenCharacterTypes[selectedCharacterIndex];

    if (typeof characterString === "undefined") {
      console.log("No character type selected.");
      wrongCriteriaEntered();

    } else {
      newPassword +=
        characterString[Math.floor(Math.random() * characterString.length)];

      console.log(newPassword);
    }

    function wrongCriteriaEntered() {
      document.getElementById("password").innerHTML =
        "Error: Please select at least one (1) character type for your password to randomly generate!";
        return wrongCriteriaEntered();
    }
  }
  return newPassword;
}