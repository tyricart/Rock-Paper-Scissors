const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error! Please choose: rock, paper, or scissors.");
  }
}; // console.log(getUserChoice('paper'));// console.log(getUserChoice('fork'));
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3); // console.log(getComputerChoice());
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      return "Good draw!";
  }
}; // console.log(getComputerChoice());// console.log(getComputerChoice());// console.log(getComputerChoice());
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game is a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Paper beats Rock, computer wins!";
    } else {
      return "Rock beats Scissors, you win!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Scissors beats Paper, computer wins!";
    } else {
      return "Paper beats Rock, you win!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Rock beats Scissors, computer wins!";
    } else {
      return "Scissors beats Paper, you win!";
    }
  }
  if (userChoice === "bomb") {
    return "You win!";
  }
};
// console.log(determineWinner('rock', 'scissors'));// console.log(determineWinner('paper', 'scissors'));// console.log(determineWinner('rock', 'rock'));
const playGame = () => {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();
  console.log(`You picked ${userChoice}`);
  console.log(`The computer picked ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
