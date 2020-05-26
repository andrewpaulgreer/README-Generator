// i attempted to use this funciton at first but I could not figure out how to get this to wrok
function generateMarkdown(data) {
    return `
# ${data.title}

## Table of Contents
* [Installation](#installation)
* [License](#license)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}


## License 
${data.license}
![badge](https://img.shields.io/badge/License-${data.license}-green.svg)

## Usage
${data.usage}

## Contributing
${data.contributions}

## Tests 
${data.tests}

## Questions
${data.email}
${data.username}
  `;
  }
  
  module.exports = generateMarkdown;