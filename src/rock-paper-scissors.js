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
    if (result.includes("You win!")) scoreTable[1] += 1;
    else if (result.includes("Computer wins!")) scoreTable[0] += 1;

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


function whichTransitionEvent() {
    let t;
    el = document.querySelector('.computer-selected');
    
    let transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    }

    for (t in transitions) {
        if (el.style[t] !== undefined) {
            return transitions[t];
        }
    }

    console.warn('ERROR in whichTransitionEvent');
}


function startTransition(el) {
    el.classList.add('computer-selected');
}


function endTransition(el) {
    let transitionEnd = whichTransitionEvent();
    
    el.addEventListener(transitionEnd, removeSelection);
    
    function removeSelection() {
        el.classList.add('computer-selected-remove');
        
        el.addEventListener(transitionEnd, () => {
            el.classList.remove('computer-selected-remove');
            el.classList.remove('computer-selected');
        });
    }
}


function computerSelect(selection) {
    if (typeof(selection) !== 'string') console.warn(`ERROR computerSelect() got a nonstring: ${selection}`);
    else {
        let el = document.querySelector('.' + selection)
        startTransition(el);
        endTransition(el);
    }
}


function initGame() {
    
}