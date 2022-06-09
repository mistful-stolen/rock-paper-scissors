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

  return winOrLose(playerSelection, computerSelection);

  // Win/Lose
  function winOrLose(playerSelection, computerSelection) {
    // Determines whether it is a win or not

    if (playerSelection === "rock") {
      if (computerSelection !== "paper") {
        console.log(`${playerSelection} vs. ${computerSelection}`);
        return "Player";
      } else {
        console.log(`${playerSelection} vs. ${computerSelection}`);
        return "Computer";
      }
    }
    if (playerSelection === "scissors") {
      if (computerSelection !== "rock") {
        console.log(`${playerSelection} vs. ${computerSelection}`);
        return "Player";
      } else {
        console.log(`${playerSelection} vs. ${computerSelection}`);
        return "Computer";
      }
    }
    if (playerSelection === "paper") {
      if (computerSelection !== "scissors") {
        console.log(`${playerSelection} vs. ${computerSelection}`);
        return "Player";
      } else {
        console.log(`${playerSelection} vs. ${computerSelection}`);
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
  let computerWins = 0;
  let playerWins = 0;

  for (let i = 1; i >= 0; i++) {
    if (playerWins === 5) {
      console.log("Player Win!");
      break;
    } else if (computerWins === 5) {
      console.log("Computer Win!");
      break;
    }

    const computerSelection = computerPlay();
    const playerSelection = window.prompt("Element: ").toLowerCase();
    const resultOfPlayRound = playRound(playerSelection, computerSelection);
    if (resultOfPlayRound === "Player") {
      playerWins++;

      console.log(`One point to the player: ${playerWins}`);
    } else if (resultOfPlayRound === "Computer") {
      computerWins++;

      console.log(`One point to the computer: ${computerWins}`);
    } else {
      console.log(resultOfPlayRound);
    }
  }
}

// selections

game();
