var inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'input_name',
            message: 'What is your name?',
            default: 'I am Batman',
        }
    ])
    .then(answers => {
        console.log(answers);
    })