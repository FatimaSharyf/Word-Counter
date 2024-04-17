#! /usr/bin/env node


import inquirer from "inquirer";
// Declare a const variable 'answers' and assign it to the result of inquirer.propmt function

const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the words:"
    }
])

const words = answers.Sentence.trim().split(" ")

// i.e. to const array = ['a', 'b', 'c', 'd', ......] we have to make it count the given sentence' words similarly 
// Print the array(list) of words to the console
console.log(words)

// Print the word count of the sentence to the console
console.log(`Your sentence' word count is ${words.length}`);