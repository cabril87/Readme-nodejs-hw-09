const inquirer = require('inquirer');
const fs = require('fs');


const generateMarkdown = require('./utils/generateMarkdown');


inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please enter a description of your project.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What dependencies are needed to run this app?',
        name: 'Installation',
      },
      {
        type: 'input',
        message: 'What is the purpose of this app?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What license did you use for this app?',
        name: 'license',
      },
      {
        type: 'input',
        message: 'Are there any contributors?',
        name: 'contributors',
      },
      {
        type: 'input',
        message: 'What license did you use for this app?',
        name: 'license',
      },
      {
        type: 'input',
        message: 'What commands did you use for this app?',
        name: 'test',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is your github?',
        name: 'github',
      }
    ])
    .then((data) => {
        
        fs.writeFile(`readme.md`, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Thank you!')
      )});

      