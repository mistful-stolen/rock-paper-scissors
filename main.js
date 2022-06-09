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

  let result = winOrLose(playerSelection, computerSelection);
  return result;

  // Win/Lose
  function winOrLose(playerSelection, computerSelection) {
    // Determines whether it is a win or not

    if (playerSelection === "rock") {
      if (computerSelection !== "paper") {
        console.log(playerSelection, computerSelection);
        return "Win";
      } else {
        console.log(playerSelection, computerSelection);
        return "Lose";
      }
    }
    if (playerSelection === "scissors") {
      if (computerSelection !== "rock") {
        console.log(playerSelection, computerSelection);
        return "Win";
      } else {
        console.log(playerSelection, computerSelection);
        return "Lose";
      }
    }
    if (playerSelection === "paper") {
      if (computerSelection !== "scissors") {
        console.log(playerSelection, computerSelection);
        return "Win";
      } else {
        console.log(playerSelection, computerSelection);
        return "Lose";
      }
    }
  }
}

// Call playRound()
// For 5 times, we play
// If computer >= 5
// If player >= 5
// At the end, it reports the loser
// Prints winner and loser at the end

// selections
const computerSelection = computerPlay();
const playerSelection = "scissors".toLowerCase();

console.log(playRound(playerSelection, computerSelection));
