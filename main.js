#! /usr/bin/env node
import inquirer from "inquirer";
//print welcome message:
console.log("\n\t `Welcome to Number Guessing Game`\n");
let randomNumber = Math.floor(Math.random() * 10);
let answers = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Enter your guess number"
    }
]);
if (answers.UserGuessedNumber === randomNumber) {
    console.log("Congratulations!you won..");
}
else {
    console.log("sorry! you lose..");
}
