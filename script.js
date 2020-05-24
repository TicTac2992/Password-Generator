// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordCharLowerCase = ["abcdefghijklmnopqrstuvwxyz"];
  var passwordCharUpperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var specialCharacters = ["!@#$%&*+?^"];
  var numbers = ["1234567890"];

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
