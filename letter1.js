var inquirer = require("inquirer");

var answer = "A";

inquirer
    .prompt([
        {
            type: "input",
            message: "Guess a letter!",
            name: "letterGuess"
        }
    ])
    .then(function(inquirerResponse) {
        if (inquirerResponse.letterGuess === answer) {
        console.log("A")
        }
        else {
            console.log("_")
        
        }
        
    })