async function askQuestions() {
    const { default: inquirer } = await import('inquirer');

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
        default: 'This project does not have an installation procedure.'
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
        type: 'checkbox',
        name: 'badge',
        message: 'Enter a link to your project badge:',
        choices: ['GitHub', 'npm', 'None'],
        },
        {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
        },
        {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
        },
    ];

    try {
        const answers = await inquirer.prompt(questions);
        console.log('Your answers:', answers);
    }catch (error) {
        console.error('Error:', error);
    }
}

askQuestions();
