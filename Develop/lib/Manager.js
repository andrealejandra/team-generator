// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber) {
        let role = "Manager";
        super(name, id, email, role);
        this.officeNumber = officeNumber;


    };

    getOffice(){
        return this.officeNumber
    };
    getRole(role){}
}


