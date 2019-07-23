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

    return Math.floor(Math.random() * Math.floor(end + 1));
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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

/*
function computerSelect(selection) {

    if (typeof(selection) !== 'string') console.warn(`ERROR computerSelect() got a nonstring: ${selection}`);
    else {
        let el = document.querySelector('.' + selection)
        startTransition(el);
        endTransition(el);
    }
}
*/

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
        let results = document.querySelector('#round-result');

        // Reset score related elements

        scoreTable.textContent = '0:0';
        playerSelection.className = null;
        computerSelection.className = null;
        results.textContent = "DON'T LET THE COMPUTER WIN!"

        // Change game panel class to make it visible

        beginPanel.classList.add('not-visible');
        gamePanel.classList.remove('not-visible');

        return 1;
    }
    
    else console.error('ERROR gameStartClearFlag not 1');
}


function catchPlayerSelection(selectedItem) {
    return selectedItem;
}


function displayPlayerSelection(selectedItem) {
    let playerSelectionDisplay = document.querySelector('#player-selection');
    
    playerSelectionDisplay.className = selectedItem + "-img";
}


function displayComputerSelection(selectedItem) {
    let computerSelectionDisplay = document.querySelector('#computer-selection');

    let computerSelectedButton = document.querySelector(`#computer-controls .${selectedItem}`);


    startTransition(computerSelectedButton);
    endTransition(computerSelectedButton);

    computerSelectionDisplay.className = selectedItem + '-img';
}


function updateScores(updatedScoreTable) {
    let scoreDisplay = document.querySelector('.score-table');
    scoreDisplay.textContent = `${updatedScoreTable[0]}:${updatedScoreTable[1]}`;
}


function updateRoundResults(text) {
    let roundResultDisplay = document.querySelector('#round-result');
    roundResultDisplay.textContent = text;
}


function getSelections() {
    let playerSelection;
    let computerSelection = computerPlay();


}


function playGame(playerSelection) {
    if (!(playerSelection)) {
        console.warn(`playerSelection=${playerSelection}`);
        return -1;
    }
    
    else {
        let gameStartClearFlag = initBeginPanel();
    
        if (initGamePanel(gameStartClearFlag)) {
            let computerSelection = computerPlay();
        
            displayComputerSelection(computerSelection);
            displayPlayerSelection(playerSelection);

            let roundResult = playRound(playerSelection, computerSelection);
            updateRoundResults(roundResult);
            scoreTable = whoWon(roundResult, scoreTable);
            updateScores(scoreTable);

            return 0;
        }
        else {
            console.warn(`gamestartClearFlag=${gameStartClearFlag}`); 
            return -1;
        }
    }
    
}

let roundCount = 1;
let scoreTable = [0, 0];
function main(playerSelection) {
    if (!(playerSelection)) console.warn(`FATAL ERROR playerSelection=${playerSelection}`);
    else {
        let gameStatus = playGame(playerSelection);
        
        /*updateRoundResults(`Round: ${roundCount}`);*/
        ++roundCount;
        if(!(gameStatus)) {
            console.info(`Round: ${roundCount}`);
            console.info('playGame() ran without any problems');
        } 
        else console.warn(`playGame() returned ${gameStatus}`);
    }
}