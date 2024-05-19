#! /usr/bin/env node
import inquirer from "inquirer";

//1)Computer will generate a random number
//2)User input for guessing number
//3)Compare user input wit computer generated number and show result.
const randomNumber =Math.floor(Math.random()* 10+1);
const answers=await inquirer.prompt([

{
    name:"userGuessNumber",
    type:"number",
    message:"Pleaseg Guess a Number Between 1 to 10:",
},
]);

if(answers.userGuessNumber=== randomNumber){
console.log("Conguratultion!You Gussed Right Number.")
} else{
    console.log("You Gussed Wrong Number")
}