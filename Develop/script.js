// Get a reference to the "Generate" button element
var generateBtn = document.querySelector("#generate");

// Define character sets
const specialCharacters = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";

// Function to generate a random password
function generatePassword() {
  // Get user input for password length
  var length = prompt("Choose a password length (between 8 and 44 characters):");

  // Check if the user canceled the prompt or entered an invalid length
  if (length === null) {
    return; // User canceled
  }

  length = parseInt(length); // Convert to a number

  if (isNaN(length) || length < 8 || length > 44) {
    alert("Invalid password length. Please enter a number between 8 and 44.");
    return;
  }

  // Get user preferences for including character types
  var includeNumbers = confirm("Include numbers?");
  var includeLowerCase = confirm("Include lowercase letters?");
  var includeUpperCase = confirm("Include uppercase letters?");
  var includeSpecialCharacters = confirm("Include special characters?");

  if (!includeNumbers && !includeLowerCase && !includeUpperCase && !includeSpecialCharacters) {
    alert("You must include at least one character type.");
    return;
  }

  // Build the character set based on user preferences
  var charSet = "";

  if (includeNumbers) {
    charSet += numbers;
  }
  if (includeLowerCase) {
    charSet += lowerCase;
  }
  if (includeUpperCase) {
    charSet += upperCase;
  }
  if (includeSpecialCharacters) {
    charSet += specialCharacters;
  }

  // Generate the password
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet.charAt(randomIndex);
  }

  return password;
}

// Add an event listener to the "Generate" button
generateBtn.addEventListener("click", function() {
  var password = generatePassword();
  if (password) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
});
