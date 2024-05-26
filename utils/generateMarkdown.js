function renderLicenseBadge(license) {
  let url = '';
  switch (license) {
      case 'MIT':
          url = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
          break;
      case 'Apache 2.0':
          url = '![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
          break;
      case 'GPL 3.0':
          url = '![License: GPL 3.0](https://img.shields.io/badge/License-GPL_3.0-lightgrey.svg)';
          break;
      case 'BSD 3-Clause':
          url = '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
          break;
      default:
          url = '';
          break;
  }
  return url;
}

function renderLicenseLink(license) {
  if (license === 'None') {
      return '';
  }
  return '/license';
}

function renderLicenseSection(license) {
  if (license === 'None') {
      return '';
  }
  const licenseUrl = renderLicenseLink(license);
  return `
## License
This project is registered under the [${license} License](${licenseUrl})
`;
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
${data.Table_of_Contents.join('\n')}

## Installation
${data.installation}

## Usage
${data.usage}

## Credits/Contributors
${data.credits}

${renderLicenseSection(data.license)}

## GitHub
[${data.gitHub}](https://github.com/${data.gitHub})

## Email
${data.email}
`;
}

module.exports = generateMarkdown;
