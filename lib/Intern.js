// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

module.exports = class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);
        this.role = 'Intern';

        if(typeof school !== 'string' || !school.trim().length) {
            throw new Error("Expected prarmeter 'school' to be a non-empty string");
        }
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
}