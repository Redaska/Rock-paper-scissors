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
console.log(computerSelection);

//lets ask the person to enter his choice
let choice = prompt("I wonder what you will choose", "Rock-Paper-Scissor");
let playerSelection = choice.toLowerCase();
console.log(playerSelection);

//lets make a function that tells us who won

function round(x, y) {
  let result;
  if (
    (x == "rock" && y == "scissor") ||
    (x == "paper" && y == "rock") ||
    (x == "scissor" && y == "paper")
  ) {
    return console.log((result = "Agh you won this round"));
  } else if (x === y) {
    return console.log((result = "A draw ? How boring!"));
  } else if (
    (y == "rock" && x == "scissor") ||
    (y == "paper" && x == "rock") ||
    (y == "scissor" && x == "paper")
  ) {
    return console.log((result = "Obviously i win!"));
  } else {
    return console.log((result = "HAHAHAHAHA you cant even enter an option"));
  }
}
round(playerSelection, computerSelection);
