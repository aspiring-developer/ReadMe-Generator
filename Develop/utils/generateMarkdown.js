function generateMarkdown(data) {
const profileImageURL = `https://github.com/${data.username}.png?size=125`;
console.log (profileImageURL);
 
return `
# User Name: ${data.username}  
# ![Image description](${profileImageURL})
## Project Title: ${data.title}
**Project Description: ${data.description}**
**Project Usage: ${data.usage}**
**Project Licensing: ${data.license}**
**Contributing?: ${data.contribute}**
**Test Done?: ${data.tests}**

`;
}

module.exports = generateMarkdown;
