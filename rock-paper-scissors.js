function computerPlay() {
    randomNum = generateRandomNum(2);

    if (randomNum === 0) {
        return "Rock";
    }
    else if (randomNum === 1) {
        return "Paper";
    }
    else if (randomNum === 2) {
        return "Scissors";
    }
    else {
        console.warn(`Function 'computerPlay' got randomNum=${randomNum}`);
    }
}


function generateRandomNum(end) {
    // Generates a random whole number from 0 to end

    return Math.floor(Math.random() * Math.floor(end));
}


function capitalize(string) {
    if (typeof(string) !== "string") {
        console.error("Datatype not string in capitalize()");
    }
    else {
    return string.charAt(0).toUpperCase() + string.substring(1); 
    }
}

let winner = "";

function decideWinner(computerSelection, playerSelection) {
    // Decides on the winner item according to their priority.
    let computerWinMsg = `Computer wins! ${computerSelection} beats ${playerSelection}.`;
    let playerWinMsg = `You win! ${playerSelection} beats ${computerSelection}.`; 
    let drawMsg = "It's a draw.";

    if (computerSelection === playerSelection) {
        winner = "draw";
        return drawMsg;
    }

    else if (computerSelection === "Rock") {
        if (playerSelection === "Scissors") {
            winner = "computer";
            return computerWinMsg;
        }
        else {
            winner = "player";
            return playerWinMsg;
        } 
    }

    else if (computerSelection === "Paper") {
        if (playerSelection === "Rock") {
            winner = "computer";
            return computerWinMsg;
        } 
        else {
            winner = "player";
            return playerWinMsg;
        } 
    }

    else if (computerSelection === "Scissors") {
        if (playerSelection === "Paper") {
            winner = "computer";
            return computerWinMsg;
        } 
        else {
            winner = "player";
            return playerWinMsg;
        } 
    }

    else console.error(`Function 'decideWinningItem' got computerSelection=${computerSelection}`)
}


function playRound(computerSelection, playerSelection) {
    // Plays one round of the game

    // Case insensitivity
    playerSelection = capitalize(playerSelection.toLowerCase()); 
    computerSelection = capitalize(computerSelection.toLowerCase()); 

    console.info(`You chose ${playerSelection}`);
    console.info(`Computer chose ${computerSelection}`);

    // Round begins
    let roundWinner = decideWinner(computerSelection, playerSelection);
    
    // Return the result
    return roundWinner;
}

function game() {
    // Plays 5 rounds of the game

    // Declaring variables
    let playerSelection;
    let computerSelection;
    let playerScore = 0;
    let ComputerScore = 0;
    let result;

    // Selection for round 1
    playerSelection = prompt("Choose one: Rock, Paper or Scissors", "");
    computerSelection = computerPlay();

    // Begin round 1
    result = playRound(computerSelection, playerSelection);
    console.log(result);
    
    // Selection for round 2
    playerSelection = prompt("Choose one: Rock, Paper or Scissors", "");
    computerSelection = computerPlay();

    // Begin round 2
}