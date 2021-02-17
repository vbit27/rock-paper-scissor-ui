  

let choice = document.querySelector('.button-container');
choice.addEventListener('click', makeChoice, false) 


function makeChoice(e) {
    if (e.target !== e.currentTarget) {
        playerChoice = e.target.id;
        playRound(playerChoice, random())
        addImageHuman();
        addImageCat();
}   e.stopPropagation();
}


const playerChoiceImage = document.querySelector('#img-human');

function addImageHuman() {    
    playerChoiceImage.src = `/images/${playerChoice}.png`;
}

const catChoiceImage = document.querySelector('#img-cat');

function addImageCat(){
    catChoiceImage.src = `/images/${catChoice}.png`;
}

const humanWins = document.getElementById('human-wins');
const catWins = document.getElementById('cat-wins');


let playerChoice;
let catChoice;


let playerScore = 0;
let computerScore = 0;

    


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
  

     
    // Decide who wins the single round

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
        } else (playerScore > computerScore) ? alert('You Won') : alert('You Lost')
    }





    /*function playRound(playerSelection, catChoice) {
        if ((playerSelection.toLowerCase() == "rock" && catChoice == "scissor") ||
            (playerSelection.toLowerCase() == "paper" && catChoice == "rock") ||
            (playerSelection.toLowerCase() == "scissor" && catChoice == "paper")) 
        {
            console.log("You Won");
            playerScore++;
        } else if (
            (playerSelection.toLowerCase() == "rock" && catChoice == "paper") ||
            (playerSelection.toLowerCase() == "paper" && catChoice == "scissor") ||
            (playerSelection.toLowerCase() == "scissor" && catChoice == "rock")) 
        {
            console.log("You Lost");
            computerScore++;
        } else if (
            (playerSelection.toLowerCase() == "rock" && catChoice == "rock") ||
            (playerSelection.toLowerCase() == "paper" && catChoice == "paper") ||
            (playerSelection.toLowerCase() == "scissor" && catChoice == "scissor")) 
        {
            console.log("Draw");
        }
    }*/
