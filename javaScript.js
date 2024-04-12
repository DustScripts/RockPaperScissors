// randomize the computer pick
// maybe look at setting the ramdomizer to be a lot higher? i know it's 3 but maybe mix it more times
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// get input and lowercase it
function getPlayerChoice() {
  var playerChoice = prompt(
    "Enter your choice (Rock, Paper, or Scissors)"
  ).toLowerCase();

  // check what user input if it's either Rock, Paper, or Scissors
  while (
    playerChoice !== "rock" &&
    playerChoice !== "paper" &&
    playerChoice !== "scissors"
  ) {
    playerChoice = prompt(
      "Invalid input! Please enter Rock, Paper, or Scissors"
    ).toLowerCase();
  }
  return playerChoice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  const winningCombos = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  if (winningCombos[playerSelection] === computerSelection) {
    return "You Win! " + playerSelection + " beats " + computerSelection;
  } else {
    return "You Lose! " + computerSelection + " beats " + playerSelection;
  }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log("Player's choice: " + playerSelection);
console.log("Computer's choice: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
