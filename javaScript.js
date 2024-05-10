// work on seeting up a results div that way the entire div can be removed
// after results are done under the results-container section.

const postResults = document.getElementById("results-container");
const buttonId = ["rock", "paper", "scissors"];

document.getElementById(buttonId[0]).addEventListener("click", function () {
  btn(buttonId[0]);
});

document.getElementById(buttonId[1]).addEventListener("click", function () {
  btn(buttonId[1]);
});

document.getElementById(buttonId[2]).addEventListener("click", function () {
  btn(buttonId[2]);
});

function btn(idButton) {
  const playerSelection = idButton;
  const computerSelection = getComputerChoice();

  const resultComputer = document.createElement("div");
  resultComputer.classList.add("resultComputer");
  resultComputer.textContent = `Computer selected ${computerSelection}`;
  postResults.appendChild(resultComputer);

  const resultPlayer = document.createElement("div");
  resultPlayer.classList.add("resultPlayer");
  resultPlayer.textContent = `Player selected ${playerSelection}`;
  postResults.appendChild(resultPlayer);

  const result = playRound(playerSelection, computerSelection);
  console.log(result[0]);
}

function getComputerChoice() {
  // Randomize the computer pick
  // Can possibly make it more random maybe?
  const choices = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  // Play a single round of the game
  playerSelection = playerSelection.toLowerCase();

  // Setup winning move
  const winningMove = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  // Check if it's a tie
  if (playerSelection === computerSelection) {
    // return "It's a tie! - No points awarded";
    return ["It's a tie! - No points awarded", "tie"];
  }

  // Determine the winner
  if (winningMove[playerSelection] === computerSelection) {
    // return "You Win! " + playerSelection + " beats " + computerSelection;
    return [
      "You Win! " + playerSelection + " beats " + computerSelection,
      "win",
    ];
  } else {
    // return "You Lose! " + computerSelection + " beats " + playerSelection;
    return [
      "You Lose! " + computerSelection + " beats " + playerSelection,
      "lose",
    ];
  }
}

function playGame() {
  // Game play - set the rounds you want to play
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
// playGame();
