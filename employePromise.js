function getEmployeeType(role) {
    return new Promise(
        function (resolve, reject) {
            if (role === 'Manager') {
                askManager().then(({ managerOffice }) => {
                    createTeamMember([employeeName, employeeID, employeeEmail, employeeRole, managerOffice]);
                });
                resolve(role);
            } else if (role === 'Engineer') {
                askEngineer().then(({ engineerGithub }) => {
                    createTeamMember([[employeeName, employeeID, employeeEmail, employeeRole, engineerGithub]]);
                });
                resolve(role);
            } else if (role === 'Intern') {
                askIntern().then(({ internUniversity }) => {
                    createTeamMember([[employeeName, employeeID, employeeEmail, employeeRole, internUniversity]]);
                });
                resolve(role);
            } else {
                let err = new Error('Not an employee title');
                reject(err);
            }
        }
    )
}

getEmployeeType(role).then(console.log(role));