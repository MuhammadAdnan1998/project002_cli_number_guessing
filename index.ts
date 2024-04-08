#! /usr/bin/env node
// SHABANG  (#SHA , !BANG)
import inquirer from "inquirer";
// 1) Computer will generate a random
// 2) User input for guessing number
// 3) Compare user input with computer generated number and show result

const randomNumber = Math.ceil(Math.random() * 6);
console.log("Welcome to number Guessing Game")
const answers = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"Please guess a number between 1-6: ",

    }
]);
if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulations! you guessed right number")
}else{
    console.log("You guessed wrong number")
}

console.log("System generated number is : " + randomNumber);