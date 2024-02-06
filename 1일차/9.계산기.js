class Calculator {

    constructor() {
        this.result = 0;
    }

    add(number) {
        this.result += number;
        // this를 리턴함으로써 아래에 add.substract.add 와 같은 형태로 늘여쓸 수 있음
        return this;
    }
    substract(number) {
        this.result -= number;
        return this;
    }
    multiply(number) {
        this.result *= number;
        return this;
    }

    getResult() {
        return this.result;
    }
}

const calculator = new Calculator();

const result = calculator.add(5).substract(3).multiply(10).add(2).getResult();