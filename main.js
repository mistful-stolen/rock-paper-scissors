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

playRound("rock", computerSelection);

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
    console.log("A tie");
    console.log(playerSelection, computerSelection);
  }
}
