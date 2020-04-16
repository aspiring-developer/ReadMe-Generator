function generateMarkdown(data) {
const profileImageURL = `https://github.com/${data.username}.png?size=200`;
const gitHubBadge = `https://github-basic-badges.herokuapp.com/downloads/kennedyoliveira/github-basic-badges/total.svg`;
// const gitHubBadge = `[![GitHub Download Count](https://github-basic-badges.herokuapp.com/downloads/kennedyoliveira/github-basic-badges/total.svg)]()`;
console.log(gitHubBadge);
return `
# ![GitHub Download Count](${gitHubBadge})
# User Name: ${data.username}  
# ![Image description](${profileImageURL})
## Project Title: ${data.title}
\n**Project Description:** ${data.description}
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
