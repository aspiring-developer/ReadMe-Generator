function generateMarkdown(data) {
const profileImageURL = `https://github.com/${data.username}.png?size=125`;
console.log (profileImageURL);
 
return `
# User Name: ${data.username}  
# ![Image description](${profileImageURL})
## Project Title: ${data.title}
\n**Project Description:** ${data.description}
\n**Project Usage:** ${data.usage}
\n**Project Licensing:** ${data.license}
\n**Contributing?:** ${data.contribute}
\n**Test Done?:** ${data.tests}
`;
}

module.exports = generateMarkdown;
