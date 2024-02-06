// 생성자에 인자가 없는 경우의 상속
class Hero {
    constructor() {
        this.hp = 100;
    }

    run() {
        this.hp = this.hp - 10;
    }
}

class Superman extends Hero {
    fly() {
        console.log("fly");
        console.log(this.hp);
    }
}


const superman = new Superman();
superman.fly();
superman.run();
superman.fly();


// 생성자에 인자가 있는 경우의 상속
class Animal {
    constructor(name) {
        this.name = name;

    }

    speak() {
        console.log(`${this.name}이 울부짖습니다`);
    }
}

class Cat extends Animal {
    constructor(name) {
        // Animal에 constructor 안에 name을 넣어줘야한다
        // 이때 사용하는 키워드가 super 부모 생성자를 실행할 때 사용

        super(name);
    }

    walk() {
        super.speak();
        console.log("걷습니다");
    }
}

const cat = new Cat("시니");
cat.walk();