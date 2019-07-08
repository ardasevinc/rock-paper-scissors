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


function decideWinningItem(firstItem, secondItem) {
    // Decides on the winner item according to their priority.

    if (firstItem === "Rock") {
        if (secondItem === "Scissors") return firstItem;
        else return secondItem;
    }

    else if (firstItem === "Paper") {
        if (secondItem === "Rock") return firstItem;
        else return secondItem;
    }

    else if (firstItem === "Scissors") {
        if (secondItem === "Paper") return firstItem;
        else return secondItem;
    }

    else console.error(`Function 'decideWinningItem' got firstItem=${firstItem}`)
}

function decideWinner(returnVal) {
    if (returnVal === -1) return "draw";
    else if (returnVal === 0) return "computer";
    else if (returnVal === 1) return "you";
    else console.error(`Function 'decideWinner' got returnVal=${returnVal}`);
}


function playRound(computerSelection, playerSelection) {
    // Plays one round of the game

    // Case insensitivity
    playerSelection = capitalize(playerSelection.toLowerCase()); 
    computerSelection = capitalize(computerSelection.toLowerCase()); 

    console.info(`You chose ${playerSelection}`);
    console.info(`Computer chose ${computerSelection}`);

    let roundWinner = decideWinningItem(computerSelection, playerSelection);

    // Determines the winner
    if (playerSelection === computerSelection) return -1;
    else if (roundWinner === computerSelection) return 0;
    else if (roundWinner === playerSelection) return 1;
    else console.error("'RoundWinner' is problematic"); // If the winner can't be determined.
}

function game() {
    // Plays 5 rounds of the game

    // Declaring variables
    let playerSelection;
    let computerSelection;
    let playerScore;
    let ComputerScore;

    // Player-computer decides on their weapons for round 1
    playerSelection = prompt("Choose one: Rock, Paper or Scissors", "");
    computerSelection = computerPlay();

    // Round 1
    result = playRound(computerSelection, playerSelection);
    

}