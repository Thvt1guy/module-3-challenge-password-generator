// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  //this is the function outside of writePassword
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


//password generation function
function generatePassword() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var numericChar = "0123456789";
  var emptyString = "";




  var userAnswer = prompt("How many characters do you want?" + " 8-128 only.");

  if (userAnswer >= 8 && userAnswer < 129) {

    var specialCharRes = confirm("include special characters?");

    if (specialCharRes) {

      emptyString += specialChar;

    }

    var upperCaseRes = confirm("Include uppercase characters?");

    if (upperCaseRes) {

      emptyString += upperCase;
      console.log(emptyString);

    }

    var lowerCaseRes = confirm("Include lowercase characters?");

    if (lowerCaseRes) {

      emptyString += lowerCase;
      console.log(emptyString);

    }

    var numericCharRes = confirm("Include numeric characters?");

    if (numericCharRes) {

      emptyString += numericChar;
      console.log(emptyString);

    }

    var passwordMade = "";


    for (var i = 1; i <= userAnswer; i++) {
      passwordMade += emptyString.charAt(Math.floor(Math.random() * emptyString.length));
    }


    return passwordMade;

  } else {

    alert("INVALID RESPONSE input must be between 8-128 characters!");

    return "TRY AGAIN";
  }

}
// Add event listener to generate button
//When you click writePassword function will happen
generateBtn.addEventListener("click", writePassword);