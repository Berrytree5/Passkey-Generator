// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
const specialCharacters = [" !#$%&'()*+,-./:;<=>?@[^_`{|}~"];
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const numbers = ["0123456789"];
  
//Var inputs
  var input = prompt("Choose a length of at least 8 characters and no more than 44 characters:")
  var inputnumbers = prompt("Does your code contain Numbers? (ok or cancel):");
  var inputlowerCase = prompt("Does you code use lowercase letters? (ok or cancel):");
  var inputupperCase = prompt("Does your code use uppercase letters? (ok or cancel):");
  var inputspecialCharacters = prompt("Does you code contain special characters? (ok or cancel):");

  var characters = [];
//if else statements
  if (input >= 8 && input <= 44) {
    if (inputnumbers === "ok") {
    characters.push(...numbers);
    }
    if (inputlowerCase === "ok") {
    characters.push(...lowerCase);
    }
    if (inputupperCase === "ok") {
    characters.push(...upperCase);
    }
    if (inputspecialCharacters === "ok") {
    characters.push(...specialCharacters);
    }
  } else {
  alert("The length of the password must be between 8 and 44 characters.");
  return;
  }
  var password = "";
  for (var i = 0; i < input; i++) {
      password += characters[Math.floor(Math.random() * characters.length)];
  }
    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function(){
var password = generatePassword();

var passwordText = document.querySelector("#password");
passwordText.value = password;
});