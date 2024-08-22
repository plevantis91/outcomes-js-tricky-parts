function guessingGame() {
    const answer = Math.floor(Math.random() * 100);
    let attempts = 0;
    let isOver = false;
    
    return function guess(num) {
        if (isOver) {
        return "The game is over, you already won!";
        }
    
        attempts++;
    
        if (num === answer) {
        isOver = true;
        const guess = attempts === 1 ? "guess" : "guesses";
        return `You win! You found ${answer} in ${attempts} ${guess}.`;
        }
    
        if (num < answer) {
        return `${num} is too low!`;
        }
    
        if (num > answer) {
        return `${num} is too high!`;
        }
    };

}

module.exports = { guessingGame };
