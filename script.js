// Assignment code here
var passLength = 8;
var allArray = [];
var numb = "0123456789";
var stringyLow = "abcdefghijklmnopqrstuvwxyz";
var stringUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var spclCharacters= "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var numbArray = numb.split("");
var stringUpArray = stringUp.split("");
var stringyLowArray = stringyLow.split("");
var spclCharactersArray = spclCharacters.split("");



var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
  var userPromptsOk = userPrompts();
  var passwordText = document.querySelector("#password");
  
  if (userPromptsOk){
    var randomPassword = generatePassword();
    passwordText.value = randomPassword;
    return randomPassword;
  } 
  else{
    passwordText.value = "";
  }
}



function generatePassword() {
  
  var password = "";
  for(var i = 0; i < passLength; i++){
    var crazyRandomCharacters = Math.floor(Math.random() * allArray.length );
    password = password + allArray[crazyRandomCharacters];
  }
  return password;
}




function userPrompts() {
  allArray = [];
  
  var passLength = parseInt(prompt ("How many characters would you like your password to contain? Must be between 8 and 128 digits."));
  
  if (isNaN(passLength) || passLength < 8 || passLength > 128){
    alert ("Password length must be an integer, between 8 and 128 digits. Please try again.");
    return false;
  }


  if (confirm('Would you like to use uppercase letters?')){
    allArray = allArray.concat(stringUpArray);
  }
  if (confirm('Would you like to use lowercase letters?')) {
    allArray = allArray.concat(stringyLowArray);
  }
  if (confirm('Would you like to use numbers?')) {
    allArray = allArray.concat(numbArray);
  }
  if (confirm('Would you like to use any special characters?')) {
    allArray = allArray.concat(spclCharactersArray);
  }
  return true;
}







