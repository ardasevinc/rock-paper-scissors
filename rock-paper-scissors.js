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
        console.warn("Houston, we have a problem with randomNum");
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

    else console.error("Function 'decideWinningItem' got an illegal 'firstItem'")
}


function playRockPaperScissors(computerSelection, playerSelection) {
    // Plays one round of the game

    // Case insensitivity
    playerSelection = capitalize(playerSelection.toLowerCase()); 
    computerSelection = capitalize(computerSelection.toLowerCase()); 

    let roundWinner = decideWinningItem(computerSelection, playerSelection);

    // Determines the winner
    if (playerSelection === computerSelection) return "It's a draw";
    else if (roundWinner === computerSelection) return "You lose";
    else if (roundWinner === playerSelection) return "Computer wins";
    else console.error("'RoundWinner' is problematic"); // If the winner can't be determined.
}