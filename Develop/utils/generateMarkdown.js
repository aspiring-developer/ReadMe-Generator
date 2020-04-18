function generateMarkdown(data) {
const profileImageURL = `https://github.com/${data.username}.png?size=200`;

const gitHubBadge = `https://img.shields.io/badge/Github-Badge-f39f37`;

return `
# User Name: ${data.username}  
# ![Image description](${profileImageURL})
## Project Title: ${data.title}
\n**Project Description:** ${data.description}
\n# ![GitHub Download Count](${gitHubBadge})
\n#### Table of Contents:
- Installation
- Usage
- License
- Contribution
- Tests
- More Info
\n**Project Usage:** ${data.usage}
\n**Project Licensing:** ${data.license}
\n**Contributing?:** ${data.contribute}
\n**Test Done?:** ${data.tests}
\n**Installation Info:** ${data.install}
\n**More Info:** ${data.moreInfo}
`;
}

module.exports = generateMarkdown;
