"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = exports.MAX_SALARY = exports.MIN_SALARY = void 0;
exports.MIN_SALARY = 5000;
exports.MAX_SALARY = 50000;
class Employee {
    constructor(_id, _name, _birthYear, _department, _basicSalary) {
        this._id = _id;
        this._name = _name;
        this._birthYear = _birthYear;
        this._department = _department;
        this._basicSalary = _basicSalary;
        if (_basicSalary < exports.MIN_SALARY || _basicSalary > exports.MAX_SALARY) {
            throw `salary must be in range [${exports.MIN_SALARY}-${exports.MAX_SALARY}]`;
        }
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get birthYear() {
        return this._birthYear;
    }
    get department() {
        return this._department;
    }
    get basicSalary() {
        return this._basicSalary;
    }
    set basicSalary(salary) {
        if (salary < exports.MIN_SALARY || salary > exports.MAX_SALARY) {
            throw `salary must be in range [${exports.MIN_SALARY}-${exports.MAX_SALARY}]`;
        }
    }
}
exports.Employee = Employee;
//# sourceMappingURL=Employee.js.map