// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//DOM Interactivity
var generateBtn = document.querySelector("#generate");
var generatedPassword = document.querySelector("#password");

//Password type variables
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // could also use .toUpperCase() Method on lowercase
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "!@#$%&*+?^()_";
var numbers = "1234567890";
var length = "";
var chosenCharacterTypes = [];

function generatePassword() {
  event.preventDefault();
  let passwordLength = parseInt(prompt("How many characters would you like your password to be? Choose between 8 and 128."));

  //If entered input is not valid, display prompt again
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Please choose a number between 8 and 128."));
  }
  //Prompt options for password character types
  let confirmUpperCaseLetters = confirm("Do you want uppercase letters in your password?");
  let confirmLowerCaseLetters = confirm("Do you want lowercase letters in your password?");
  let confirmNumbers = confirm("Do you want numbers in your password?")
  let confirmSpecialCharacters = confirm("Do you want to include any special characters?");

  //Store chosen password types
  if (confirmUpperCaseLetters) {
    chosenCharacterTypes.push(uppercase);
  } else {
  }

  if (confirmLowerCaseLetters) {
    chosenCharacterTypes.push(lowercase);
  } else {
  }

  if (confirmNumbers) {
    chosenCharacterTypes.push(numbers);
  } else {
  }

  if (confirmSpecialCharacters) {
    chosenCharacterTypes.push(specialCharacters);
  } else {
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
      wrongCriteriaEntered();

    } else {
      newPassword +=
        characterString[Math.floor(Math.random() * characterString.length)];
    }

    function wrongCriteriaEntered() {
      document.getElementById("password").innerHTML =
        "Error: Please select at least one (1) character type for your password to randomly generate!";
        return wrongCriteriaEntered();
    }
  }
  return newPassword;
}