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


function playRockPaperScissors(computerSelection, playerSelection) {
    // Plays one round of the game

    // Case insensitivity
    playerSelection = capitalize(playerSelection.toLowerCase()); 
    computerSelection = capitalize(computerSelection.toLowerCase()); 

    
}