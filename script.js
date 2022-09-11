const playerChoice = 'rock';

const choices = ['rock', 'paper', 'scissor'];
const computerChoice = choices[Math.floor(Math.random() * 3)];

console.log(computerChoice);

const game = (player, computer) => {
    if (player === computer) {
        console.log('draw');
    } else {
        if (player === 'rock' && computer === 'scissor') {
            console.log('player win');
        } else if (player === 'paper' && computer === 'rock') {
            console.log('player win');
        } else if (player === 'scissor' && computer === 'paper') {
            console.log('player win');
        } else if (player === 'rock' && computer === 'paper') {
            console.log('computer win');
        } else if (player === 'paper' && computer === 'scissor') {
            console.log('computer win');
        } else if (player === 'scissor' && computer === 'rock') {
            console.log('computer win');
        }
    }
}

game(playerChoice, computerChoice);