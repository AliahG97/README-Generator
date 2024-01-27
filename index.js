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
        name:"Description",
        message:"Describe your project",
    },
    {
        type:"input",
        name:"Installation",
        message:"Provide installation instructions:",
    },
    {
        type:"input",
        name:"usage",
        message:"Provide a user story:",
    },
    {
        type:"input",
        name:"contribution",
        message:"What should be contributed:",
    },
    {
        type:"input",
        name:"testing",
        message:"Provide testing instructions:",
    },
    {
        type:"list",
        name:"license",
        message:"select a license for the project",
        choices: ["MIT", "CreativeCommon", "None"],
    
    },
    {
        type:"input",
        name:"Credits",
        message:"Developer GitHub Username:",
    
    },
    {
        type:"input",
        name:"Email",
        message:"Contact Email address:",
    },

]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`${fileName} created successfully!`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        let template = generateMarkdown(answers);
        writeToFile("newReadMe.md", template);
    });
}

// Function call to initialize app
init();