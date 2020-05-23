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
   
// I did not wind up using this in the end, and know it was given to us to help with the template literal problem.
// I got started on writing the code before we had started the template literal example, and could not get it to work the append's that I made below. 
    function writeToFile(filename, data) {
    

    }
 

  function init() {
    // using an arrow funciton to append the user input to the readme
   inquirer.prompt(questions).then((input) => {

fs.appendFileSync("README.md", ("# " + input.title)+ "\n" + "\n", function(err) {
    
    if (err){
        console.log(err);
    } 
   else {
        console.log("Your Title has been Generated");
    }
    
})
fs.appendFileSync("README.md", ("## " + "Description" + "\n" + input.description) + "\n" + "\n", function(err){
    if (err){
        console.log(err)
    } else {
        console.log("success")
    }
})

fs.appendFileSync("README.md", ("## " + "Table of Contents" + "\n" + "* " + "[Installation](#installation)" + "\n" + "* " + "[License](#license)" + "\n" + "* " + "[Usage](#usage)" + "\n" + "* " + "[Contributing](#contributing)" + "\n" + "* " + "[Tests](#tests)" + "\n" + "* " + "[Questions](#questions)")  + "\n" + "\n", function(err){
    if (err){
        console.log(err)
    } else {
        console.log("success")
    }
})

fs.appendFileSync("README.md", ("## " + "Installation" + "\n" + input.installation) + "\n" + "\n", function(err){
    if (err){
        console.log(err)
    } else {
        console.log("success")
    }
})

fs.appendFileSync("README.md", ("## " + "License"  + "\n" + "![badge](https://img.shields.io/badge/License-"+ input.license + "-green.svg)") + "\n" + "\n", function(err){
    if (err){
        console.log(err)
    } else {
        console.log("success")
    }
})

fs.appendFileSync("README.md", ("## " + "Usage" + "\n" + input.usage) + "\n" + "\n", function(err){
    if (err){
        console.log(err)
    } else {
        console.log("success")
    }
})

fs.appendFileSync("README.md", ("## " + "Contributing" + "\n" + input.contributing) + "\n" + "\n", function(err){
    if (err){
        console.log(err)
    } else {
        console.log("success")
    }
})

fs.appendFileSync("README.md", ("## " + "Tests:" + "\n" + input.tests) + "\n" + "\n", function(err){
    if (err){
        console.log(err)
    } else {
        console.log("success")
    }
})

fs.appendFileSync("README.md", ("## " + "Questions"  + "\n" + "made by: " + input.username + "\n" + "Email: " + input.email + "\n") + "\n" + "\n", function(err){
    if (err){
        console.log(err)
    } else {
        console.log("success")
    }
})  

})

  }
   // calling init function 
    init();