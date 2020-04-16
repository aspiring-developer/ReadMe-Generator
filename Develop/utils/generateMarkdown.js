function generateMarkdown(data) {
const profileImageURL = `https://github.com/${data.username}.png?size=125`;
console.log (profileImageURL);
 
  return `
# ${data.username}  

## ${data.title}
**${data.description}**
**${data.usage}**
**${data.license}**
**${data.contribute}**
**${data.tests}**
# ![Image description](${profileImageURL})
`;
}

module.exports = generateMarkdown;
