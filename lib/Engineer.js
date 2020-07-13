// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// An engineer is an employee, but also has a GitHub account

const Employee = require('./Employee');

module.exports = class Engineer extends Employee {
    constructor (name, id, email, gitHub) {
        super(name, id, email);
        this.role = 'Engineer';

        if(typeof gitHub !== 'string' || !gitHub.trim().length) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
        }
        this.gitHub = gitHub;
    }

    getGitHub () {
        return this.gitHub;
    }
}