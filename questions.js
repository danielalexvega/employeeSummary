const inquirer = require('inquirer');

const validateResponse = (input, type) => (input.length > 0 ? true : console.log(`Please provide a valid ${type}`))

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
                validate: validateResponse(input, 'name')
            },
            {
                type: 'input',
                message: "What is the Manager's ID#?",
                name: 'employeeID',
                validate: validateResponse(input, 'employee id')
            },
            {
                type: 'input',
                message: "What is the Manager's email address?",
                name: 'employeeEmail',
                validate: validateResponse(input, 'email address')
            },
            {
                type: 'input',
                message: "What is the Manager's office number?",
                name: 'managerOffice',
                validate: validateResponse(input, 'office number')
            }
        ]);
    },
    askEngineer: () => {
        return inquirer.prompt([
            {
                type: 'input',
                message: "What is the Engineer's name?",
                name: 'employeeName',
                validate: validateResponse(input, 'name')
            },
            {
                type: 'input',
                message: "What is the Engineer's ID#?",
                name: 'employeeID',
                validate: validateResponse(input, 'employee id')
            },
            {
                type: 'input',
                message: "What is the Engineer's email address?",
                name: 'employeeEmail',
                validate: validateResponse(input, 'email address')
            },
            {
                type: 'input',
                message: "What is the Engineer's GitHub account?",
                name: 'engineerGithub',
                validate: validateResponse(input, 'github account')
            }
        ]);
    },
    askIntern: () => {
        return inquirer.prompt([
            {
                type: 'input',
                message: "What is the intern's name?",
                name: 'employeeName',
                validate: validateResponse(input, 'name')
            },
            {
                type: 'input',
                message: "What is the intern's ID#?",
                name: 'employeeID',
                validate: validateResponse(input, 'employee id')
            },
            {
                type: 'input',
                message: "What is the intern's email address?",
                name: 'employeeEmail',
                validate: validateResponse(input, 'email address')
            },
            {
                type: 'input',
                message: "What is the intern's University?",
                name: 'internUniversity',
                validate: validateResponse(input, 'university')
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