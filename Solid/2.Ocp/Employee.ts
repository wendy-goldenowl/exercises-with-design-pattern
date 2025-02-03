export enum EmployeeType {
    FullTime,
    PartTime,
    Intern
}

interface SalaryCalculator {
    calculateSalary(): number;
}

export class Employee implements SalaryCalculator{
    constructor(public name: string, public type: EmployeeType) { }

    calculateSalary(): number {
        switch (this.type) {
            case EmployeeType.FullTime:
                return 5000;
            case EmployeeType.PartTime:
                return 3000;
            case EmployeeType.Intern:
                return 1000;
            default:
                throw new Error("Unknown employee type");
        }
    }
}

const fullTimeEmployee = new Employee("Alice", EmployeeType.FullTime);
console.log(`${fullTimeEmployee.name}'s salary is ${fullTimeEmployee.calculateSalary()}`);

const internEmployee = new Employee("Bob", EmployeeType.Intern);
console.log(`${internEmployee.name}'s salary is ${internEmployee.calculateSalary()}`);

