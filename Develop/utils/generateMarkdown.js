function generateMarkdown(data) {
const profileImageURL = `https://github.com/${data.username}.png?size=125`;
console.log (profileImageURL);
 
return `
# User Name: ${data.username}  
# ![Image description](${profileImageURL})
## Project Title: ${data.title}
**Project Description:** \n
${data.description}
**Project Usage:** \n
${data.usage}
**Project Licensing:** \n
${data.license}
**Contributing?:** \n
${data.contribute}
**Test Done?:** \n
${data.tests} \n

`;
}

module.exports = generateMarkdown;
