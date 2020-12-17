const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer");
const { askEmployeeType, askManager, askEngineer, askIntern, askMore, askRender, askStartOver } = require('./questions');

const employeeData = [];
let newFile;

let OUTPUT_DIR;
let outputPath;

function createFile(){
    OUTPUT_DIR = path.resolve(__dirname, "output");
    console.log(OUTPUT_DIR);
    if(!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    outputPath = path.join(OUTPUT_DIR, "team.html");
}


//look that up
// ******************************************* //
const { listenerCount } = require("process");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


function promptUser() {
    try {
        askEmployeeType().then(({ employeeRole }) => {
            if (employeeRole === 'Manager') {
                askManager().then(({ employeeName, employeeID, employeeEmail, managerOffice }) => {
                    createTeamMember([employeeName, employeeID, employeeEmail, 'Manager', managerOffice]);
                });
            } else if (employeeRole === 'Engineer') {
                askEngineer().then(({ employeeName, employeeID, employeeEmail, engineerGithub }) => {
                    createTeamMember([employeeName, employeeID, employeeEmail, 'Engineer', engineerGithub]);
                });
            } else {
                askIntern().then(({ employeeName, employeeID, employeeEmail, internUniversity }) => {
                    createTeamMember([employeeName, employeeID, employeeEmail, 'Intern', internUniversity]);
                });
            }
        });
    } catch (err) {
        console.log('There was an error');
        console.log(err);
    }
}

//function to create the object, and push object into employeeArray
function createTeamMember(data) {
    let [employeeName, employeeID, employeeEmail, employeeRole, detail] = data;
    employeeID = parseInt(employeeID);
    let teammember;
    if(employeeRole === 'Manager') {
        detail = parseInt(detail);
    }

    if (employeeRole === 'Manager') {
        teammember = new Manager(employeeName, employeeID, employeeEmail, detail);
    } else if (employeeRole === 'Engineer') {
        teammember = new Engineer(employeeName, employeeID, employeeEmail, detail);
    } else {
        teammember = new Intern(employeeName, employeeID, employeeEmail, detail);
    }
    employeeData.push(teammember);

    askMore().then(({ confirm }) => {
        if (confirm) {
            promptUser();
        } else {
            askRender().then(({ confirm }) => {
                if (confirm) {
                    newFile = render(employeeData);
                    fs.writeFileSync(outputPath, newFile, 'utf-8');
                    console.log('rendered new file');
                } else {
                    askStartOver().then(({ confirm }) => {
                        if (confirm) {
                            getUserData();
                        } else {
                            console.log('done');
                        }
                    });
                }
            });
        }
    });
}

//use inquirer to ask questions, keep asking until they're done
//I need to know what type of employee it is
function getUserData() {
    try {
        //maybe delete team.html file...
        employeeData.length = 0;
        createFile();
        
        promptUser();
    } catch (err) {
        console.log('There was an error');
        console.log(err);
    }
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. 

// Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.


//WRITE THE FILE

getUserData();
