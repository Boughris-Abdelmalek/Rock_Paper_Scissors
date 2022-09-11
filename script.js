const displayPlayer = document.getElementById("displayPlayer");
const displayComputer = document.getElementById("displayComputer");

const choice = document.querySelectorAll(".choice");

const playerScore = document.getElementById("playerCount");
const computerScore = document.getElementById("computerCount");

const replay = document.getElementById('replay');

const board = document.querySelector('.container');
const finalScore = document.querySelector('.finalScore-container');
const winner = document.getElementById('winner');

replay.addEventListener('click', () => {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    board.style.display = 'flex';
    finalScore.style.display = 'none';
})

let userChoice;

choice.forEach((e) => {
  e.addEventListener("click", (event) => {
    const choices = {
      rock: "✊",
      paper: "✋",
      scissor: "✌️",
    };
    const keys = Object.keys(choices);
    const computerChoice = keys[Math.floor(Math.random() * 3)];
    userChoice = event.target.value;

    displayPlayer.textContent = e.textContent;
    displayComputer.textContent = choices[computerChoice];

    if (computerChoice !== userChoice) {
      if (userChoice === "rock" && computerChoice === "scissor") {
        playerScore.textContent++;
      } else if (userChoice === "paper" && computerChoice === "rock") {
        playerScore.textContent++;
      } else if (userChoice === "scissor" && computerChoice === "paper") {
        playerScore.textContent++;
      } else if (userChoice === "rock" && computerChoice === "paper") {
        computerScore.textContent++;
      } else if (userChoice === "paper" && computerChoice === "scissor") {
        computerScore.textContent++;
      } else if (userChoice === "scissor" && computerChoice === "rock") {
        computerScore.textContent++;
      }
    }

    if (computerScore.textContent === '5') {
        board.style.display = 'none';
        finalScore.style.display = 'flex';
        winner.textContent = 'Computer won !';
    }
    
    if (playerScore.textContent === '5') {
        board.style.display = 'none';
        finalScore.style.display = 'flex';
        winner.textContent = 'Player won !';
    }
  });
});