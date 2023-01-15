import { WageEmployee } from "./WageEmployee";
const MIN_PERCENT_VALUE: number = 0;
const MAX_PERCENT_VALUE: number = 100;
export class SalesPerson extends WageEmployee {

    constructor(id: number, name: string, birthYear: number, department: string,
        basicSalary: number,
        wage: number, hours: number, private _salesValue: number, private _percentValue: number) {
        super(id, name, birthYear, department, basicSalary, wage, hours)

    }

    get salesValue() {
        return this._salesValue;
    }

    get percentValue() {
        return this._percentValue;
    }

    set salesValue(salesValue: number) {
        if (this.salesValue < MIN_PERCENT_VALUE || this.salesValue > MAX_PERCENT_VALUE)
            throw `sales value error`;
        this._salesValue = salesValue;
    }
    set percentValue(percentValue: number) {
        if (this.percentValue < MIN_PERCENT_VALUE || this.percentValue > MAX_PERCENT_VALUE)
            throw `error percent value`;
        this._percentValue = percentValue;  
    }
    computeSalary(): number {

        return super.computeSalary() + this._salesValue * (this._percentValue/100);
    }
}

