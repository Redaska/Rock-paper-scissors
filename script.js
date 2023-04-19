//use something that will generate a random int between 1-3 each number represents a word .
let num = Math.floor(Math.random() * 3 + 1);
console.log(num);
//now since it works we make a function with an if else if statements
//ps i made the computerChoice in the global scope so i can call it for the other function
let computerChoice;
function getComputerChoice() {
  if (num === 1) {
    return (computerChoice = "Rock");
  } else if (num === 2) {
    return (computerChoice = "Paper");
  } else {
    return (computerChoice = "Scissor");
  }
}
getComputerChoice();
console.log(computerChoice);
