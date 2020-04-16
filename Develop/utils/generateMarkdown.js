function generateMarkdown(data) {
const profileImageURL = `https://github.com/${data.username}.png?size=125`;
console.log (profileImageURL);
 
  return `
# ${data.username} # ![Image description](${profileImageURL}) 

## ${data.title}
**${data.description}**
**${data.usage}**
**${data.license}**
**${data.contribute}**
**${data.tests}**

`;
}

module.exports = generateMarkdown;
