const postResults = document.getElementById("results-container");
const buttonId = ["rock", "paper", "scissors"];
const btns = document.querySelectorAll(".btn");
const resultComputer = document.createElement("p");
const resultPlayer = document.createElement("p");
const gameResult = document.createElement("p");
const gameResults = document.createElement("p");
gameResults.classList.add("gameResult");
let playerWin = 0;
let computerWin = 0;

// build a better function for the button choices
btns.forEach((button) => {
  // console.log(button);
  button.addEventListener("click", (choice) => {
    gameResults.textContent = "";
    const playerSelection = choice.target.innerText.toLowerCase();
    const computerSelection = getComputerChoice();

    // set the text for the result player and computer
    resultPlayer.textContent = `Player picked ${playerSelection}`;
    resultComputer.textContent = `Computer picked ${computerSelection}`;

    // append and add the results to show on the divs
    postResults.appendChild(resultPlayer);
    postResults.appendChild(resultComputer);

    const result = playRound(playerSelection, computerSelection);

    if (result.includes("tie!")) {
      gameResults.textContent = `${result}`;
      postResults.appendChild(gameResults);
    } else if (result.includes("Win")) {
      gameResults.textContent = `${result}`;
      postResults.appendChild(gameResults);
      playerWin++;
    } else if (result.includes("Lose")) {
      gameResults.textContent = `${result}`;
      postResults.appendChild(gameResults);
      computerWin++;
    }

    // console.log(`Player total wins ${playerWin}`);
    // console.log(`Computer total wins ${computerWin}`);

    gameResult.textContent = `Player total wins ${playerWin} \r\n`;
    gameResult.textContent += `Computer total wins ${computerWin}`;
    postResults.appendChild(gameResult);

    if (playerWin === 5) {
      alert(`Player Wins.... Continue for Next Game`);
      gameReset();
    } else if (computerWin === 5) {
      alert(`Computer Wins.... Continue for Next Game`);
      gameReset();
    }
  });
});

function gameReset() {
  playerWin = 0;
  computerWin = 0;
  postResults.textContent = "";
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
    return "It's a tie! - No points awarded";
  }

  // Determine the winner
  if (winningMove[playerSelection] === computerSelection) {
    return "You Win! " + playerSelection + " beats " + computerSelection;
  } else {
    return "You Lose! " + computerSelection + " beats " + playerSelection;
  }
}
