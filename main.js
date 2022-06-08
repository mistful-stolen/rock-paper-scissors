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
const playerSelection = "rock";

playRound("paper", computerSelection);

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
    console.log("A tie");
    console.log(playerSelection, computerSelection);
    return "Tie";
  }
  // Rock Win/Lose
  winnerOrLoser(playerSelection, computerSelection, "rock", "paper");
  // Paper Win/Lose
  winnerOrLoser(playerSelection, computerSelection, "paper", "scissors");
  // Scissors Win/Lose
  winnerOrLoser(playerSelection, computerSelection, "scissors", "rock");
  function winnerOrLoser(
    playerSelection,
    computerSelection,
    playerArg,
    computerArg
  ) {
    // Determines whether it is a win or not
    if (playerSelection === playerArg && computerSelection !== computerArg) {
      console.log("Player Win");
      console.log(playerSelection, computerSelection);
      return "Player Win";
    } else if (
      playerSelection === playerArg &&
      computerSelection === computerArg
    ) {
      console.log("Player Lose");
      console.log(playerSelection, computerSelection);
      return "Player Lose";
    }
  }
}
