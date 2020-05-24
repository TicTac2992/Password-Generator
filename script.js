// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

var passwordCharLowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var passwordCharUpperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var specialCharacters = ["!@#$%&*+?^()_"];
var numbers = ["1234567890"];
var passwordLength = "";
var chosenCharacterTypes = [];
//Reminder - please make sure to use parse int on the numbers above because they are in a string

function generatePassword() {
  event.preventDefault();
  let passwordLength = parseInt(
    prompt("How many characters will your password have? Choose between 8 and 128."));

  console.log("Password length: " + passwordLength);

let confirmUpperCaseLetters = confirm("Do you want to include Upper Case letters in your password?");
let confirmLowerCaseLetters = confirm("Do you want to include lower case letters in your password?");
let confirmNumbers = confirm("Do you want to include numbers in your password?");
let confirmSpecialCharacters = confirm("Last question...I promise. Do you want to include special characters in your password?");

// Add event listener to generate button
if (confirmUpperCaseLetters) {
  chosenCharacterTypes.push(passwordCharUpperCase);
  console.log("Uppercase: Yes");
} else {
  console.log("Uppercase: No");
}

if (confirmLowerCaseLetters) {
  chosenCharacterTypes.push(passwordCharLowerCase);
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
}

let newPassword = "";

//Compose password by randomly assigning values from combination of selected character types
for (let i = 0; i < passwordLength; i++) {
  var selectedCharacterIndex = Math.floor(Math.random() * chosenCharacterTypes.length
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
      "Oops...looks like you did not select any character type. Please try again and choose at least one.";
      return wrongCriteriaEntered();
  }
}