const inquirer = require('inquirer');

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
                name: 'employeeName'
            },
            {
                type: 'input',
                message: "What is the Manager's ID#?",
                name: 'employeeID'
            },
            {
                type: 'input',
                message: "What is the Manager's email address?",
                name: 'employeeEmail'
            },
            {
                type: 'input',
                message: "What is the Manager's office number?",
                name: 'managerOffice'
            }
        ]);
    },
    askEngineer: () => {
        return inquirer.prompt([
            {
                type: 'input',
                message: "What is the Engineer's name?",
                name: 'employeeName'
            },
            {
                type: 'input',
                message: "What is the Engineer's ID#?",
                name: 'employeeID'
            },
            {
                type: 'input',
                message: "What is the Engineer's email address?",
                name: 'employeeEmail'
            },
            {
                type: 'input',
                message: "What is the Engineer's GitHub account?",
                name: 'engineerGithub'
            }
        ]);
    },
    askIntern: () => {
        return inquirer.prompt([
            {
                type: 'input',
                message: "What is the intern's name?",
                name: 'employeeName'
            },
            {
                type: 'input',
                message: "What is the intern's ID#?",
                name: 'employeeID'
            },
            {
                type: 'input',
                message: "What is the intern's email address?",
                name: 'employeeEmail'
            },
            {
                type: 'input',
                message: "What is the intern's University?",
                name: 'internUniversity'
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
    askStartOver: () =>{
        return inquirer.prompt([
            {
                type: 'confirm',
                message: "Would you like start over?",
                name: 'confirm'
            }
        ]);
    }
};