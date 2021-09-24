//TODO: write the generatePassword Function
//TODO: ask the user how many characters they want in the password
//TODO:

//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password--use a prompt
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

//write a series of confirms to check if the user wants:
//will return a boolean
//TODO: write 4 arrays that each contain each set of requirements


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for all possible characters
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//variables along with functions to create proper parameters and correct user if improper selection is made.
function questions() {
  var isValid = false;
  do {
    var length = prompt("Choose password length between 8 and 128 characters");
    var numbersPrompt = confirm("Do you want your password to include numbers?");
    var lowerPrompt = confirm("Do you want your password to include lower case letters?");
    var upperPrompt = confirm("Do you want your password to include upper case letters?");
    var specialPrompt = confirm("Do you want your password to include special characters?");
    var responses = {
      length: length,
      numbersPrompt: numbersPrompt,
      lowerPrompt: lowerPrompt,
      upperPrompt: upperPrompt,
      specialPrompt: specialPrompt
    } 
    if((length < 8)||(length > 128))
    alert("Choose number between 8 and 128");
    else if((!numbersPrompt)&&(!lowerPrompt)&&(!upperPrompt)&&(!specialPrompt))
    alert("Must choose at least one type.");
    else
    isValid = true;

  } while(!isValid);
  return responses;
}
//function to combine selected responses and generate the password based on the parameters selected.
function generatePassword() {
  var pwordQs = questions();
  var combosPossible = [];
  var passwordGenerated = "";
//if functions for different possible selections.
  if (pwordQs.numbersPrompt) {
    for (var i of numbers)
      combosPossible.push(i);
  }
  if (pwordQs.lowerPrompt) {
    for (var i of lowerCase)
      combosPossible.push(i);
  }
  if (pwordQs.upperPrompt) {
    for (var i of upperCase)
      combosPossible.push(i);
  }
  if (pwordQs.specialPrompt) {
    for (var i of special)
      combosPossible.push(i);
  }

  console.log(combosPossible);
//function that combines all selections and generates password for the user
  for (var i = 0; i < pwordQs.length; i++) {
    passwordGenerated += combosPossible[Math.floor(Math.random() * combosPossible.length)];
    
  }
  console.log(passwordGenerated);

  return passwordGenerated;
}

//displays the generated password to the user on the page.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


