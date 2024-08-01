/*---first step---*/

function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
  
  }
 /* console.log(getRandomComputerResult());*/

/*---second step---*/

let playerScore = 0;
let computerScore = 0;

function hasPlayerWonTheRound(player, computer) {
    if (player == "Rock" && computer == "Scissors") {
      return true;
    }else if (player == "Scissors" && computer == "Paper") {
      return true;
    }else if (player == "Paper" && computer == "Rock") {
      return true;
    }else {
      return false;
    }
    
  }
  
/*  console.log(hasPlayerWonTheRound("Rock", "Scissors")); 
  console.log(hasPlayerWonTheRound("Scissors", "Rock")); */

/*---third step---*/

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
    if (hasPlayerWonTheRound()) {
        playerScore++;
        return `"Player wins! ${userOption} beats ${computerResult}"`; 
    }else if (!hasPlayerWonTheRound()) {
        computerScore++;
        return `"Computer wins! ${computerResult} beats ${userOption}"`;  
    }else (computerResult === userOption); {
        return `"It's a tie! Both chose ${userOption}"`;
    }
   
  }
console.log(getRoundResults("Rock"));
console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);

/*---fourth step---*/

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  /*---fifth step---*/

  if (playerScore === 3) {
    winnerMsgElement.innerText = "Player has won the game!";
    document.getElementById("reset-game-btn").style.display = "block";
    document.querySelector(".options-container").style.display = "none";
  }else {
    winnerMsgElement.innerText = "Computer has won the game!";
    document.getElementById("reset-game-btn").style.display = "block";
    document.querySelector(".options-container").style.display = "none";
  }
}

/*---sixth step---*/

function resetGame() {
  playerScore = `${'0'}`;
  computerScore = `${'0'}`;
  document.getElementById("player-score").innerText = '0';
  document.getElementById("computer-score").innerText = '0';
  document.getElementById("reset-game-btn").style.display = "none";
  document.querySelector(".options-container").style.display = "block";
  document.getElementById("winner-msg").innerText = '';
  document.getElementById("results-msg").innerText = '';
};

/*---alternative better code---*/

function resetGame() {
  playerScore = `${'0'}`;
  computerScore = `${'0'}`;
  playerScoreSpanElement.innerText = '0';
  computerScoreSpanElement.innerText = '0';
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  winnerMsgElement.innerText = '';
  roundResultsMsg.innerText = '';
};

/*---additional for reference---*/

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});