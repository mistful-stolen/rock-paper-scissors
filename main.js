// Choices of 'rock', 'paper', 'scissors'
let choicesOfElements = ["rock", "paper", "scissors"];

function computerPlay() {
  /*    
        Randomly generate number
        We use the number for the array
        it returns that choice
    */
  // The computer chooses his element in short
  let computerRandomChoice = Math.floor(Math.random() * 3);
  let computerChoiceOfElement = choicesOfElements[computerRandomChoice];
  return computerChoiceOfElement;
}

/* 
Rock beats scissors
Rock tie rock
Rock lose paper

We take the two selections,
Compare them:
    If player == pc => tie
    If player != pc => lose but the item could be different
    Else player => win

*/

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    // Determines it's tie

    return "Tie";
  }

  return checkWinnerAndLoser(playerSelection, computerSelection);

  // Win/Lose
  function checkWinnerAndLoser(playerSelection, computerSelection) {
    // Determines whether it is a win or not

    if (playerSelection === "rock") {
      if (computerSelection !== "paper") {
        return "Player";
      } else {
        return "Computer";
      }
    }
    if (playerSelection === "scissors") {
      if (computerSelection !== "rock") {
        return "Player";
      } else {
        return "Computer";
      }
    }
    if (playerSelection === "paper") {
      if (computerSelection !== "scissors") {
        return "Player";
      } else {
        return "Computer";
      }
    }
    // Checks typo
    return "Typo properly, baka!";
  }
}

// Call playRound()
// For 5 times, we play
// At the end, it reports the loser
// Prints winner and loser at the end

function game() {
  let playerCounter = 0;
  let computerCounter = 0;

  const rock = document.getElementById("rock");
  const paper = document.getElementById("paper");
  const scissors = document.getElementById("scissors");

  rock.addEventListener("click", () => {
    const computerSelection = computerPlay();
    const playerSelection = rock.innerHTML;
    checkResult(
      playRound(playerSelection, computerSelection),
      playerSelection,
      computerSelection
    );
  });

  paper.addEventListener("click", () => {
    const computerSelection = computerPlay();
    const playerSelection = paper.innerHTML;
    checkResult(
      playRound(playerSelection, computerSelection),
      playerSelection,
      computerSelection
    );
  });

  scissors.addEventListener("click", () => {
    const computerSelection = computerPlay();
    const playerSelection = scissors.innerHTML;

    checkResult(
      playRound(playerSelection, computerSelection),
      playerSelection,
      computerSelection
    );
  });

  function checkResult(result, playerSelection, computerSelection) {
    if (result === "Player") {
      document.getElementById(
        "board"
      ).textContent = `p:${playerSelection} vs. c:${computerSelection}`;
      ++playerCounter;
      document.getElementById("player").textContent = `P: ${playerCounter}`;
      if (playerCounter === 5) {
        document.getElementById("board").textContent = `Player Won!`;

        playerCounter = 0;
        computerCounter = 0;
        document.getElementById("player").textContent = `P: ${playerCounter}`;
        document.getElementById(
          "computer"
        ).textContent = `C: ${computerCounter}`;
      }
    } else if (result === "Computer") {
      document.getElementById(
        "board"
      ).textContent = `p:${playerSelection} vs. c:${computerSelection}`;
      ++computerCounter;
      document.getElementById("computer").textContent = `C: ${computerCounter}`;

      if (computerCounter === 5) {
        document.getElementById("board").textContent = `Computer Won! `;

        playerCounter = 0;
        computerCounter = 0;
        document.getElementById("player").textContent = `P: ${playerCounter}`;
        document.getElementById(
          "computer"
        ).textContent = `C: ${computerCounter}`;
      }
    } else if (result === "Tie") {
      document.getElementById("board").textContent = "Tie!";
    }
  }
}

// selections

function getAddEventListenerResults() {
  const rock = document.getElementById("rock");
  const paper = document.getElementById("paper");
  const scissors = document.getElementById("scissors");

  rock.addEventListener("click", () => {
    const computerSelection = computerPlay();
    return playRound(rock.innerHTML, computerSelection);
  });

  paper.addEventListener("click", () => {
    const computerSelection = computerPlay();
    return playRound(paper.innerHTML, computerSelection);
  });

  scissors.addEventListener("click", () => {
    const computerSelection = computerPlay();
    console.log(scissors.textContent, computerSelection);
    return playRound(scissors.innerHTML, computerSelection);
  });
}

game();
