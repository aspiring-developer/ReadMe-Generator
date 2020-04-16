const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const markdownGen = require ("./utils/generateMarkdown");
// const writeFileAsync = util.promisify(fs.writeFile);
const userNameFromApi = require ("./utils/api");

function userInput() {
 return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "What is your GitHub user name?"
    },
    {
      type: "input",
      name: "title",
      message: "Project title:"
  },
  {
      type: "input",
      name: "description",
      message: "Project description:"
  },
  
  {
      type: "input",
      name: "usage",
      message: "Project usage:"
  },
  {
      type: "input",
      name: "license",
      message: "License:"
  },
  {
      type: "input",
      name: "contribute",
      message: "Contributing:"
  },
  {
      type: "input",
      name: "tests",
      message: "Project tests:"
  }

  ]);
}
// userInput()
//   .then(function(answers) {
//     const readMe = generateReadMe(answers);
//         return writeFileAsync("README.md", readMe);
//   })
//   .then(function() {
//     console.log("Printing texts to README.md");
//   })
//   .catch(function(err) {
//     console.log(err);
//   });
  
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, "utf8", function (err) {
    if (err) {
        throw err;
    }
});
}

async function init() {
  
  const answers = await userInput();
  markdownGen(answers);
  writeToFile("README.md", markdownGen(answers));
getUser(username);
}

init();
