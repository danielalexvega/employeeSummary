const inquirer = require('inquirer');

const validateResponse = (input) => (input.trim().length > 0 ? true : console.log('Please provide a valid input'));


module.exports = {
    askEmployeeType: () => {
        return inquirer.prompt([
            {
                type: 'list',
                message: "What is the employee's role in the company?",
                choices: ['Manager', 'Engineer', 'Intern'],
                name: 'employeeRole'
            }
        ]);
    },
    askManager: () => {
        return inquirer.prompt([
            {
                type: 'input',
                message: "What is the Manager's name?",
                name: 'employeeName',
                validate: validateResponse
            },
            {
                type: 'input',
                message: "What is the Manager's ID#?",
                name: 'employeeID',
                validate: validateResponse
            },
            {
                type: 'input',
                message: "What is the Manager's email address?",
                name: 'employeeEmail',
                validate: validateResponse
            },
            {
                type: 'input',
                message: "What is the Manager's office number?",
                name: 'managerOffice',
                validate: validateResponse
            }
        ]);
    },
    askEngineer: () => {
        return inquirer.prompt([
            {
                type: 'input',
                message: "What is the Engineer's name?",
                name: 'employeeName',
                validate: validateResponse
            },
            {
                type: 'input',
                message: "What is the Engineer's ID#?",
                name: 'employeeID',
                validate: validateResponse
            },
            {
                type: 'input',
                message: "What is the Engineer's email address?",
                name: 'employeeEmail',
                validate: validateResponse
            },
            {
                type: 'input',
                message: "What is the Engineer's GitHub account?",
                name: 'engineerGithub',
                validate: validateResponse
            }
        ]);
    },
    askIntern: () => {
        return inquirer.prompt([
            {
                type: 'input',
                message: "What is the intern's name?",
                name: 'employeeName',
                validate: validateResponse
            },
            {
                type: 'input',
                message: "What is the intern's ID#?",
                name: 'employeeID',
                validate: validateResponse
            },
            {
                type: 'input',
                message: "What is the intern's email address?",
                name: 'employeeEmail',
                validate: validateResponse
            },
            {
                type: 'input',
                message: "What is the intern's University?",
                name: 'internUniversity',
                validate: validateResponse
            }
        ]);
    },
    askMore: () => {
        return inquirer.prompt([
            {
                type: 'confirm',
                message: "Would you like to add more employees?",
                name: 'confirm'
            }
        ]);
    },
    askRender: () => {
        return inquirer.prompt([
            {
                type: 'confirm',
                message: "Would you like to render your team's html page?",
                name: 'confirm'
            }
        ]);
    },
    askStartOver: () => {
        return inquirer.prompt([
            {
                type: 'confirm',
                message: "Would you like start over?",
                name: 'confirm'
            }
        ]);
    }

};