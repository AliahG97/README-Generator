// TODO: Include packages needed for this application
const fs = require ("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
//const questions = [title, description, installation , usage, contribution,  testing, email, github, license]
const questions = [
    {
        type:"input",
        name:"title",
        message:"Project Title",

    },
    {
        type:"input",
        name:"GitHub",
        message:"GitHub Username?",

    },
    {
        type:"input",
        name:"Email",
        message:"Email address??",
    }

]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
inquirer.prompt(questions
).then(
    function (answers){
        console.log(answers)
        console.log(answers.title)
    let template = generateMarkdown(answers)
    console.log(template)
    }
)