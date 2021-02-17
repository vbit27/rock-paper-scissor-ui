  

let choice = document.querySelector('.button-container');
choice.addEventListener('click', makeChoice, false) 


function makeChoice(e) {
    if (e.target !== e.currentTarget) {
        playerChoice = e.target.id;
        playRound(playerChoice, random())
        addImage();
}   e.stopPropagation();
}


const imageChoice = document.querySelector('#img');

function addImage() {    
    imageChoice.src = `/images/${playerChoice}.png`;
}


let playerChoice;

//let computerSelection;
//let playerSelection;
let playerScore = 0;
let computerScore = 0;

    


// Make a random choice for the computer

    function random() {
    let computerSelection = Math.floor(Math.random() * 3) + 1;
    switch (computerSelection) {
        case 1: 
            computerSelection = "rock";
        break;
        case 2: 
            computerSelection = "paper";
        break;
            case 3: 
            computerSelection = "scissor";
        break;
    }
    return computerSelection;
    }
  

     
    // Decide who wins the single round

    function playRound(playerSelection, computerSelection) {
        if ((playerSelection.toLowerCase() == "rock" && computerSelection == "scissor") ||
            (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") ||
            (playerSelection.toLowerCase() == "scissor" && computerSelection == "paper")) 
        {
            console.log("You Won");
            //playerScore++;
        } else if (
            (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") ||
            (playerSelection.toLowerCase() == "paper" && computerSelection == "scissor") ||
            (playerSelection.toLowerCase() == "scissor" && computerSelection == "rock")) 
        {
            console.log("You Lost");
            //computerScore++;
        } else if (
            (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") ||
            (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") ||
            (playerSelection.toLowerCase() == "scissor" && computerSelection == "scissor")) 
        {
            console.log("Draw");
        }
    }





    /*function playRound(playerSelection, computerSelection) {
        if ((playerSelection.toLowerCase() == "rock" && computerSelection == "scissor") ||
            (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") ||
            (playerSelection.toLowerCase() == "scissor" && computerSelection == "paper")) 
        {
            console.log("You Won");
            playerScore++;
        } else if (
            (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") ||
            (playerSelection.toLowerCase() == "paper" && computerSelection == "scissor") ||
            (playerSelection.toLowerCase() == "scissor" && computerSelection == "rock")) 
        {
            console.log("You Lost");
            computerScore++;
        } else if (
            (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") ||
            (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") ||
            (playerSelection.toLowerCase() == "scissor" && computerSelection == "scissor")) 
        {
            console.log("Draw");
        }
    }*/
