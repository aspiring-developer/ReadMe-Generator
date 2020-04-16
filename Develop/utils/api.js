const inquirer = require("inquirer");
const axios = require("axios");

const api = {
  getUser(username) {
    inquirer
  .prompt({
    message: "What is your GitHub user name?",
    name: "username"
  })
    .then(function({ username }) {
    const queryURL= `https://api.github.com/users/${username}`;

     });

      
  }
};

module.exports = api;

