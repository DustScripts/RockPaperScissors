// Randomize the computer pick
// Can possibly make it more random maybe?
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

// Get input and lowercase it
function getPlayerChoice() {
  let playerChoice = prompt(
    "Enter your choice (Rock, Paper, or Scissors)"
  ).toLowerCase();

  // Check if the user input is either Rock, Paper, or Scissors
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

// Play a single round of the game
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  // Setup winning move
  const winningMove = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  // Check if it's a tie
  if (playerSelection === computerSelection) {
    return "It's a tie! - No points awarded";
  }

  // Determine the winner
  if (winningMove[playerSelection] === computerSelection) {
    return "You Win! " + playerSelection + " beats " + computerSelection;
  } else {
    return "You Lose! " + computerSelection + " beats " + playerSelection;
  }
}

// Game play - set the rounds you want to play
function playGame() {
  let playerWin = 0;
  let computerWin = 0;
  // const rounds = 5; // Number of rounds to play

  // Play multiple rounds
  // for (let round = 0; round < rounds; round++) {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  console.log("Player's choice: " + playerSelection);
  console.log("Computer's choice: " + computerSelection);

  // Play the round and update win counts
  const result = playRound(playerSelection, computerSelection);
  console.log(result);
  if (result.includes("Win")) {
    playerWin++;
  } else if (result.includes("Lose")) {
    computerWin++;
  }
  // }

  // Display the final score
  // Later maybe setup some kind of on-going scoreboard
  console.log("Player wins: " + playerWin);
  console.log("Computer wins: " + computerWin);
  if (playerWin == computerWin) {
    console.log('IT"S A TIE - NOBODY WINS!');
  } else if (playerWin > computerWin) {
    console.log("The Player wins the GAME! with " + playerWin);
  } else {
    console.log("The Computer wins the GAME! with " + computerWin);
  }
}

// Play the GAME!
playGame();
