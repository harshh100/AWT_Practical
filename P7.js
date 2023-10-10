class Calculator {
    constructor() {
        this.num1 = -1;
        this.num2 = -1;
        this.result = -1;
    }
    setNum1(num1) {
        this.num1 = num1;
    }
    setNum2(num2) {
        this.num2 = num2;
    }
    Addition() {
        this.result = this.num1 + this.num2;
    }
    Subtraction() {
        this.result = this.num1 - this.num2;
    }
    Multiplication() {
        this.result = this.num1 * this.num2;
    }
    Division() {
        this.result = this.num1 / this.num2;
    }
    PrintResult() {
        return this.result;
    }
}

module.exports = Calculator;