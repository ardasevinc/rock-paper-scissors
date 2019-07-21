function computerPlay() {
    randomNum = generateRandomNum(2);

    if (randomNum === 0) {
        return "rock";
    }
    else if (randomNum === 1) {
        return "paper";
    }
    else if (randomNum === 2) {
        return "scissors";
    }
    else {
        console.warn(`Function computerPlay() got randomNum=${randomNum}`);
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


function decideWinner(playerSelection, computerSelection) {
    // Decides on the winner item according to their priority.
    
    let computerWinMsg = `Computer wins! ${computerSelection} beats ${playerSelection}.`;
    let playerWinMsg = `You win! ${playerSelection} beats ${computerSelection}.`; 
    let drawMsg = "It's a draw.";

    if (computerSelection === playerSelection) {
        return drawMsg;
    }

    else if (computerSelection === "rock") {
        if (playerSelection === "scissors") {
            return computerWinMsg;
        }
        else {
            return playerWinMsg;
        } 
    }

    else if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            return computerWinMsg;
        } 
        else {
            return playerWinMsg;
        } 
    }

    else if (computerSelection === "scissors") {
        if (playerSelection === "paper") {
            return computerWinMsg;
        } 
        else {
            return playerWinMsg;
        } 
    }

    else console.error(`Function decideWinningItem() got computerSelection=${computerSelection}`)
}


function whoWon(result, scoreTable) {

    if (result.includes("You win")) scoreTable[0] += 1;
    else if (result.includes("Computer wins")) scoreTable[1] += 1;

    return scoreTable;
}


function playRound(playerSelection, computerSelection) {
    // Plays one round of the game

    // Case insensitivity
    playerSelection = playerSelection.toLowerCase(); 
    computerSelection = computerSelection.toLowerCase(); 

    console.info(`You chose ${playerSelection}`);
    console.info(`Computer chose ${computerSelection}`);

    // Round begins
    let roundWinner = decideWinner(playerSelection, computerSelection);
    
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


function initBeginPanel() {
    let gameStartClear = 0; 
    
    let beginPanel = document.querySelector('.begin');
    let endPanel = document.querySelector('.end');
    let gamePanel = document.querySelector('.game-panel');

    // Change panel visibility to begin the game

    beginPanel.classList.remove('not-visible');
    endPanel.classList.add('not-visible');
    gamePanel.classList.add('not-visible');
    
    gameStartClear = 1;
    
    return gameStartClear;
}


function initGamePanel(gameStartClearFlag) {

    if (gameStartClearFlag === 1) {
        let beginPanel = document.querySelector('.begin');
        let gamePanel = document.querySelector('.game-panel');

        let scoreTable = document.querySelector('.score-table');
        let playerSelection = document.querySelector('#player-selection');
        let computerSelection = document.querySelector('#computer-selection');
        let results = document.querySelector('.results');

        // Reset score related elements

        scoreTable.textContent = '0:0';
        playerSelection.className = null;
        computerSelection.className = null;

        // Change game panel class to make it visible

        beginPanel.classList.add('not-visible');
        gamePanel.classList.remove('not-visible');

        return 1;
    }
    
    else console.error('ERROR gameStartClearFlag not 1');
}


function getUserSelection() {
    let buttons = document.querySelectorAll('#user-controls button');

    for (let i=0; i<buttons.length; i++) {
        buttons[i].addEventListener('click', (e) => {
            console.info(`Player selected ${e.srcElement.className}`);
            return e.srcElement.className;
        });
    }
}


function displayUserSelection(selectedItem) {
    let userSelectionDisplay = document.querySelector('#user-selection');
    
    userSelectionDisplay.className = selectedItem + "-img";
}


function displayComputerSelection(selectedItem) {
    let computerSelectionDisplay = document.querySelector('#computer-selection');

    let computerSelectedButton = document.querySelector(`#computer-controls ${selectedItem}`);

    startTransition(computerSelectedButton);
    endTransition(computerSelectedButton);

    computerSelectionDisplay.className = selectedItem + '-img';
}

