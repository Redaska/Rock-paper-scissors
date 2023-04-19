//use something that will generate a random int between 1-3 each number represents a word .
let num = Math.floor(Math.random() * 3 + 1);
console.log(num);
//now since it works we make a function with an if else if statements
//ps i made the computerSelection in the global scope so i can call it for the other function
let computerSelection;
function getComputerChoice() {
  if (num === 1) {
    return (computerSelection = "rock");
  } else if (num === 2) {
    return (computerSelection = "paper");
  } else {
    return (computerSelection = "scissor");
  }
}
getComputerChoice();

//lets ask the person to enter his choice
let choice = prompt("I wonder what you will choose", "Rock-Paper-Scissor");
let playerSelection = choice.toLowerCase();
