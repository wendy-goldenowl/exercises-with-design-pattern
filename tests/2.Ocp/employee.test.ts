import { Employee, EmployeeType } from '../../Solid/2.Ocp/Employee';

describe('Employee Salary Calculation', () => {
    describe('calculateSalary', () => {
        it('should calculate full-time employee salary correctly', () => {
            const fullTimeEmployee = new Employee('Alice', EmployeeType.FullTime);
            expect(fullTimeEmployee.calculateSalary()).toBe(5000);
        });

        it('should calculate part-time employee salary correctly', () => {
            const partTimeEmployee = new Employee('Charlie', EmployeeType.PartTime);
            expect(partTimeEmployee.calculateSalary()).toBe(3000);
        });

        it('should calculate intern employee salary correctly', () => {
            const internEmployee = new Employee('Bob', EmployeeType.Intern);
            expect(internEmployee.calculateSalary()).toBe(1000);
        });

        it('should throw an error for unknown employee type', () => {
            const invalidEmployee = new Employee('Invalid', 999 as EmployeeType);
            expect(() => invalidEmployee.calculateSalary()).toThrow('Unknown employee type');
        });
    });

    describe('Employee instantiation', () => {
        it('should create an employee with correct name and type', () => {
            const employee = new Employee('David', EmployeeType.FullTime);
            expect(employee.name).toBe('David');
            expect(employee.type).toBe(EmployeeType.FullTime);
        });
    });
});