// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![license](https://img.shields.io/badge/license-${license}-deeppink)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license){
    return `[License](#license)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
    This project is licensed under the ${license} License.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

  ## Description
  ${data.Description}

  ## Table of contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - ${renderLicenseLink(data.license) ? '[License](#license)' : ''}

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.usage}

  ## Contributing
  For contributing, please add ${data.contribution}.

  ## Testing
  ${data.testing}
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
