let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random()*10);
}

function getAbsoluteDistance(a, b) {
    return Math.abs(a - b);
}

function compareGuesses(humanGuess, computerGuess, target = generateTarget()) {
    const humanDiff = getAbsoluteDistance(target, humanGuess);
    const computerDiff = getAbsoluteDistance(target, computerGuess);
    if (humanDiff <= computerDiff) {
        return true;
    } else {
        return false;
    }
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

function advanceRound() {
    currentRoundNumber += 1;
}
