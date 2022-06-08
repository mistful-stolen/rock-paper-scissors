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

// selections
const computerSelection = computerPlay();
const playerSelection = "scissors".toLowerCase();

console.log(playRound(playerSelection, computerSelection));

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

  let result;
  // Rock Win/Lose
  switch (true) {
    case playerSelection === "rock":
      result = winnerOrLoser(computerSelection, "paper");
      return result;
      break;
    // Determines whether
    case playerSelection === "paper":
      result = winnerOrLoser(computerSelection, "scissors");
      return result;
      break;
    case playerSelection === "scissors":
      result = winnerOrLoser(computerSelection, "rock");
      return result;
      break;
    default:
      return "Typo";
      break;
  }
  function winnerOrLoser(computerSelection, computerArg) {
    // Determines whether it is a win or not
    if (computerSelection !== computerArg) {
      return "Player Win";
    } else {
      return "Player Lose";
    }
  }
}
