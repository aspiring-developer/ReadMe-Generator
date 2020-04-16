const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const markdownGen = require ("./utils/generateMarkdown");
const userNameFromApi = require ("./utils/api");

function userInput() {
 return inquirer.prompt([
    {
      type: "input",
      name: "username",
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
      message: "Contributing? (Yes/No):"
  },
  {
      type: "input",
      name: "tests",
      message: "Project tested? (Yes/No):"
  }

  ]);
}
  
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
}

init();
