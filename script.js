  

const choice = document.querySelector('.button-container');
const playerChoiceImage = document.querySelector('#img-human');
const catChoiceImage = document.querySelector('#img-cat');
const humanWins = document.getElementById('human-wins');
const catWins = document.getElementById('cat-wins');

let playerChoice;
let catChoice;
let playerScore = 0;
let computerScore = 0;


//starts the game

function startGame(e) {
    if (e.target !== e.currentTarget) {
        playerChoice = e.target.id;
        playRound(playerChoice, random())
        addChoiceImages();
    }   e.stopPropagation();
}

//ads image choices for both computer and player

function addChoiceImages() {    
    playerChoiceImage.src = `../images/${playerChoice}.png`;
    catChoiceImage.src = `../images/computer-${catChoice}.png`;

}

// Make a random choice for the computer

function random() {
catChoice = Math.floor(Math.random() * 3) + 1;
switch (catChoice) {
    case 1: 
        catChoice = "rock";
    break;
    case 2: 
        catChoice = "paper";
    break;
        case 3: 
        catChoice = "scissor";
    break;
}
return catChoice;
}
  

     
// Rules of the game and decide who wins

function playRound(playerSelection, catChoice) {
    if (playerScore < 5 && computerScore < 5) {
        if ((playerSelection.toLowerCase() == "rock" && catChoice == "scissor") ||
            (playerSelection.toLowerCase() == "paper" && catChoice == "rock") ||
            (playerSelection.toLowerCase() == "scissor" && catChoice == "paper")) 
        {
            console.log("You Won");
            playerScore++;
            humanWins.textContent = `${playerScore}`;
        } else if (
            (playerSelection.toLowerCase() == "rock" && catChoice == "paper") ||
            (playerSelection.toLowerCase() == "paper" && catChoice == "scissor") ||
            (playerSelection.toLowerCase() == "scissor" && catChoice == "rock")) 
        {
            console.log("You Lost");
            computerScore++;
            catWins.textContent = `${computerScore}`;
        } else if (
            (playerSelection.toLowerCase() == "rock" && catChoice == "rock") ||
            (playerSelection.toLowerCase() == "paper" && catChoice == "paper") ||
            (playerSelection.toLowerCase() == "scissor" && catChoice == "scissor")) 
        {
            console.log("Draw");
        }
    } else if (playerScore > computerScore) {

        alert('You Won!')
        humanWins.textContent = 0;
        catWins.textContent = 0;
        

    } else if (playerScore < computerScore) {
    
        alert('You Lost!');
        humanWins.textContent = 0;
        catWins.textContent = 0;
        
    }      
}


choice.addEventListener('click', startGame, false) 

