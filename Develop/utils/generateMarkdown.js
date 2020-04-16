function generateMarkdown(data) {
  return `
# ${data.github}
## ${data.title}
**${data.description}**
**${data.usage}**
**${data.license}**
**${data.contribute}**
**${data.tests}**

`;
}

module.exports = generateMarkdown;
