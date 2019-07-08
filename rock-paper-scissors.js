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


function decideWinner(computerSelection, playerSelection) {
    // Decides on the winner item according to their priority.
    let computerWinMsg = `Computer wins! ${computerSelection} beats ${playerSelection}.`;
    let playerWinMsg = `You win! ${playerSelection} beats ${computerSelection}.`; 
    let drawMsg = "It's a draw.";

    if (computerSelection === playerSelection) {
        return drawMsg;
    }

    else if (computerSelection === "Rock") {
        if (playerSelection === "Scissors") {
            return computerWinMsg;
        }
        else {
            return playerWinMsg;
        } 
    }

    else if (computerSelection === "Paper") {
        if (playerSelection === "Rock") {
            return computerWinMsg;
        } 
        else {
            return playerWinMsg;
        } 
    }

    else if (computerSelection === "Scissors") {
        if (playerSelection === "Paper") {
            return computerWinMsg;
        } 
        else {
            return playerWinMsg;
        } 
    }

    else console.error(`Function 'decideWinningItem' got computerSelection=${computerSelection}`)
}


function whoWon(result, scoreTable) {
    if (result.includes("You win!")) scoreTable[1]++;
    else if (result.includes("Computer wins!")) scoreTable[0]++;
    else console.error("String inclusion error");

    return scoreTable;
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
    let scoreTable = [];
    let result;

    // Selection for round 1
    console.info("Round 1!");
    console.info(`Scores: You->${scoreTable[1]}, Computer->${scoreTable[0]}`);
    
    playerSelection = prompt("Choose one: Rock, Paper or Scissors", "");
    computerSelection = computerPlay();

    // Begin round 1
    result = playRound(computerSelection, playerSelection);
    
    // Update the scores
    scoreTable = whoWon(result, scoreTable);

    console.log(result);
    
    // Selection for round 2
    console.info("Round 2!");
    console.info(`Scores: You->${scoreTable[1]}, Computer->${scoreTable[0]}`);

    playerSelection = prompt("Choose one: Rock, Paper or Scissors", "");
    computerSelection = computerPlay();

    // Begin round 2
    result = playRound(computerSelection, playerSelection);

    // Update the scores
    scoreTable = whoWon(result, scoreTable);

    // Selection for round 3
    console.info("Round 3!");
    console.info(`Scores: You->${scoreTable[1]}, Computer->${scoreTable[0]}`);

    playerSelection = prompt("Choose one: Rock, Paper or Scissors", "");
    computerSelection = computerPlay();

    // Begin round 3
    result = playRound(computerSelection, playerSelection);

    // Update the scores
    scoreTable = whoWon(result, scoreTable);

    // Selection for round 4
    console.info("Round 4!");
    console.info(`Scores: You->${scoreTable[1]}, Computer->${scoreTable[0]}`);

    playerSelection = prompt("Choose one: Rock, Paper or Scissors", "");
    computerSelection = computerPlay();

    // Begin round 4
    result = playRound(computerSelection, playerSelection);

    // Update the scores
    scoreTable = whoWon(result, scoreTable);

    // Selection for round 5
    console.info("Last Round!");
    console.info(`Scores: You->${scoreTable[1]}, Computer->${scoreTable[0]}`);

    playerSelection = prompt("Choose one: Rock, Paper or Scissors", "");
    computerSelection = computerPlay();

    // Begin the last round
    result = playRound(computerSelection, playerSelection);

    // Update the scores
    scoreTable = whoWon(result, scoreTable);

    console.log("Game ended.");
    if (scoreTable[0] > scoreTable[1]) console.log("You lost the game.");
    else if (scoreTable[1] > scoreTable[0]) console.log("You won the game!");
    else console.log("Game is a draw!");
}