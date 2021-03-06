// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README



function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Test](#test)
  * [Questions](#questions)

  ## Descriptions

  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage

  ${data.usage}

  ## License 

  This repository is licensed under ${data.license}.

  
  ## Test 
  
  ${data.test}
  
  ## Questions
  
  If you have any questions, contact me at ${data.email} or at my (https://github.com/${data.github}).

  
  [![Git-hub License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://img.shields.io/github/license/<Github-${data.github}>/Readme-nodejs-hw-09<>)
`;}

module.exports = generateMarkdown;
