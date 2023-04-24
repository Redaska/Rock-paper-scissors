//use something that will generate a random int between 1-3 each number represents a word .

//now since it works we make a function with an if else if statements
//ps i made the computerSelection in the global scope so i can call it for the other function
let computerScore = 0;
let playerScore = 0;
let computerSelection;
let playerSelection = "";

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3 + 1);
  if (num === 1) {
    return (computerSelection = "rock");
  } else if (num === 2) {
    return (computerSelection = "paper");
  } else {
    return (computerSelection = "scissor");
  }
}

//lets ask the person to enter his choice
getComputerChoice();

function playerChoice() {
  const rock = document.getElementById("rock");
  const paper = document.getElementById("paper");
  const scissors = document.getElementById("scissors");

  rock.addEventListener("click", () => {
    playerSelection = "rock"; // set playerSelection to "rock"
    console.log(playerSelection); // log playerSelection to the console
    round(playerSelection, computerSelection);
  });

  paper.addEventListener("click", () => {
    playerSelection = "paper"; // set playerSelection to "paper"
    console.log(playerSelection); // log playerSelection to the console
    round(playerSelection, computerSelection);
  });

  scissors.addEventListener("click", () => {
    playerSelection = "scissor"; // set playerSelection to "scissors"
    console.log(playerSelection); // log playerSelection to the console
    round(playerSelection, computerSelection);
  });
}

//lets make a function that tells us who won

function round(x, y) {
  getComputerChoice();
  let result = document.querySelector("#result");
  let computerScoreDis = document.querySelector(".computer-scr");
  let playerScoreDis = document.querySelector(".player-scr");
  if (
    (x == "rock" && y == "scissor") ||
    (x == "paper" && y == "rock") ||
    (x == "scissor" && y == "paper")
  ) {
    result.textContent = "Agh you won this round";
    playerScore++;
    playerScoreDis.textContent = playerScore;
  } else if (x === y) {
    result.textContent = "A draw ? How boring!";
  } else if (
    (y == "rock" && x == "scissor") ||
    (y == "paper" && x == "rock") ||
    (y == "scissor" && x == "paper")
  ) {
    result.textContent = "HAHAHAHAH! Obviously i win!";
    computerScore++;
    computerScoreDis.textContent = computerScore;
  }
  if (computerScore == 5 || playerScore == 5) {
    endGame();
  }
}
function endGame() {
  if (playerScore === 5) {
    result.textContent = "HOW? ME ? LOSE ? NOOOOOOOOOOO!";
    disableButtons();
  } else if (computerScore === 5) {
    result.textContent = "U NEVER HAD A CHANCE TO BEGINE WITH HAHAHAHAH";
    disableButtons();
  }
}

function disableButtons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

//the round function is just for one round we need a game function it should be a loop of 5 rounds
// i still haven't learnt how to make a loop bur Mr.google can help
//well now i did  but i ll make a condition for this one

playerChoice();
