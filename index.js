var inquirer = require("inquirer"); // calling inquierer
var fs = require("fs");
const markDown = require("./generateMarkdown"); // looking for the markdown 
// questions to answer
const questions = [
        {
        type: "input",
        message: "what is your github username?",
        name: "username",
        },
        {
        type: "input",
        message: "what is your email?",
        name: "email",
            },
        {
        type: "input",
        message: "what is the URL of your project?",
        name: "url",
        },
        {
        type: "input",
        message: "Project Title:",
        name: "title",
        },
        {
        type: "input",   
        message: "Project Description:",
        name: "description",
        },
        {
        type: "input",
        message: "What are the steps to install your app?",
        name: "installation",
        },
        {
        type: "input",
        message: "How will this applicaiton be used?",   
        name: "usage",
        },
        {
        type: "list",
        message: "what license will you use?",
        name: "license",
        choices: [
            "MIT", "BSD", "AGPL",
          ],
        },
        {
        type: "input",
        message: "contributers:",
        name: "contributing"
        },
        {
        type: "input",
        message: "Please give an example of how to run your app:",
        name: "tests",
        }
        ]
   
// Using Template Literal
// figure out Axios call

  function init() {
    // using an arrow funciton to append the user input to the readme
   inquirer.prompt(questions).then(input => {
    fs.writeFile("GenReadMe.md", markDown(input), err=>{
        if (err) throw err
        console.log('made readme')
    })

  })}
   // calling init function 
    init();