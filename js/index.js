// Iteration 1: Names and Input

//1.1 Create a variable `hacker1` with the driver's name.

const hacker1 = 'hiler';

//1.2 Print `"The driver's name is XXXX"`.

console.log(`The driver's name is ${hacker1}`)

//1.3 Create a variable `hacker2` with the navigator's name.

const hacker2='Eli';

//1.4 Print `"The navigator's name is YYYY"`.

console.log(`The driver's name is ${hacker2}`)

// Iteration 2: Conditionals

2.1
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}

else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}

else{
console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
}

// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let newDriver1 = "";
for(let i =0; i<hacker1.length; i++){
  newDriver1 += hacker1[i].toUpperCase() + " ";
}
console.log(newDriver1);

//That is another way to print all the characters of a string
const driverN = 'john';
let output = '';
for(let i = 0; i < driverN.length; i++){
  output += driverN[i].toUpperCase() + " ";
}
output = output.slice(0, output.length - 1)
console.log(output)
//for print it without space we could also implement output.trim

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let newNavigator1 ="";
for (var i = hacker2.length - 1; i >= 0; i--){
  newNavigator1 += hacker2[i];
}
console.log(newNavigator1);

//3.3 Depending on the lexicographic order of the strings, print:
if (hacker1 > hacker2) {
  console.log(`Hiler goes first.`);
}
else if (hacker1 < hacker2) {
  console.log(`Yo, Eli goes first definitely.`);
}
else{
  console.log(`What?! You both have the same name?`);
}

//Bonus Time!
//Generate 3 paragraphs. Store the text in a variable type of string.
let lorem = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'

//Make your program count the number of words in the string.
let wordCount = 1;
for(let i = 0; i < lorem.length - 1; i++){
  if(lorem[i] === ' '){
    wordCount++;
  }
}
console.log(wordCount);

//Make your program count the number of times the Latin word et appears.
let foundEt = 0;

for(let i = 0; i < lorem.length; i++) {
  if (lorem[i] === 'e' && lorem [i + 1] === 't' && lorem[i + 2] === ' ' && lorem[i - 1] === ' '){
    foundEt += 1;
  }
}

console.log(foundEt)

//Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome.

function isPalindrome(str)