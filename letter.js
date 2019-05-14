var inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        message: "Guess a letter!",
        name: "guess"
            }
])
.then(function(inquirerResponse) {

    var nextLetter = new Letter(attempts.guess);
    node
    nextLetter.printInfo();

});

function Letter(correctLetter, guess, guessValue) {
    this.correctLetter = correctLetter; 
    this.guess = guess;
    this.guessValue = false;
    
    if (guess === correctLetter) {
        console.log(correctLetter);
        console.log("You guessed right!");
        this.guessValue = true;
    }
    else {
        console.log(guess)
    }

    Letter.prototype.printInfo = function() {
        console.log("Your Guess: " + this.guess);
    };
   
}
