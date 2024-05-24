//?Step 1: Setup Your Project Repository
//Clone the Starter Code: Clone the starter code repository to your local machine.
// Create a New GitHub Repository: Create a new repository on GitHub with a unique name for your project.
// Push Starter Code to GitHub: Push the cloned starter code to your new repository.
// Create .gitignore File: Create a .gitignore file in your project root and include node_modules/ and .DS_Store/ to ensure these files are not tracked by Git.
//? Step 2: Initialize the Project
// Open Terminal: Open your terminal or command prompt.
// Navigate to Project Directory: Use cd to navigate to your project directory.
// Initialize npm: Run npm init to create a package.json file. Follow the prompts to fill out the package information.
// Install Inquirer: Run npm install inquirer@8.2.4 to install the Inquirer p ackage.
// ?Step 3: Create the Application Code
// Create index.js File: In your project root, create an index.js file. This will be the main entry point for your application.
// !const inquirer = require('inquirer');
// !const fs = require('fs');
// !const path = require('path');

// TODO Create Inquire Prompts

// TODO Generate README Content:
// !  function generateREADME(answers) {
// !    return `# ${answers.title}
  
  
//?5. **Write README to File**:
// ```javascript
// function writeToFile(fileName, data) {
//   return fs.writeFileSync(path.join(process.cwd(), fileName), data);
// }


function init() {
    inquirer.prompt(questions).then((answers) => {
      const readmeContent = generateREADME(answers);
      writeToFile('README.md', readmeContent);
      console.log('Successfully created README.md');
    });
  }
  
  init();
  


