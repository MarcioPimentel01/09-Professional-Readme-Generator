const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

function askQuestions() {
    return import('inquirer').then((inquirerModule) => {
        const inquirer = inquirerModule.default;
        const questions = [
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Project description: - Please consider things like: your motivation, the reason you built this project, and the problem it solves.',
            },
            {
                type: 'checkbox',
                name: 'Table_of_Contents',
                message: 'Please choose a Table of Contents for your project.',
                choices: ['None', 'Installation', 'Usage', 'Credits', 'License', 'Badges', 'GitHub', 'Email'],
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Is there any installation Instructions to run your project?',
                default: 'This project does not have an installation procedure.',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'How do you use this project?',
            },
            {
                type: 'input',
                name: 'credits',
                message: 'Please list any collaborators or resources you used:',
            },
            {
                type: 'list',
                name: 'license',
                message: 'Choose a license for your project:',
                choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
            },
            {
                type: 'input',
                name: 'gitHub',
                message: 'Enter your GitHub username:',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email address:',
            },
        ];

        return inquirer.prompt(questions);
    });
}

function writeReadmeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path.join(__dirname, fileName), data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

function generateReadme() {
    askQuestions()
        .then((answers) => {
            const markdown = generateMarkdown(answers);
            return writeReadmeToFile('README.md', markdown);
        })
        .then(() => {
            console.log('README.md file has been generated successfully');
        })
        .catch((error) => {
            console.error('Error generating README:', error);
        });
}

// Call the function to start the app
generateReadme();
