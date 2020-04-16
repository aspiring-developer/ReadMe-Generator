const inquirer = require("inquirer");
const axios = require("axios");

const api = {
  getUser(username) {
    inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })
    .then(function({ username }) {
    const queryURL= `https://api.github.com/users/${username}`;

    axios.get(queryURL).then(function(res) {
      
        // const email = res.data.email
        // const profImage = res.data.avatar_url
        
      });    
   
  });

      
  }
};

module.exports = api;

