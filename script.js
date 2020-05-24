// Assignment Code
var generateBtn = document.querySelector("#generate");

var password = generatePassword();
var passwordCharLowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var passwordCharUpperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var specialCharacters = ["!@#$%&*+?^"];
var numbers = ["1234567890"];
//Reminder - please make sure to use parse int on the numbers above because they are in a string
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function(event) {
  event.preventDefault();
  if user selects lowercase 

  if user selects UPPER

  if user selects number

  if user selects special specialCharacters

  else "Error: No Password Generated.  Please select at least one (1) character option!"
}
