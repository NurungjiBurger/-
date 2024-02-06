// class는 첫자를 대문자로 시작

class Human {

    constructor(name) {
        this.name = name;
        console.log("hello");

    }

    sayMyName() {
        console.log(`이름 : ${this.name}`)
    }
}

const person1 = new Human("sangbin");
person1.sayMyName();

const person2 = new Human("parksang");
person2.sayMyName();

const person3 = new Human("parkbin");
person3.sayMyName();

class Student {

    constructor(name, age, selfintroduce)
    {
        this.name = name;
        this.age = age;
        this.selfintroduce = selfintroduce;
    }

    introduce() {
        console.log(`이름 : ${this.name}`)
        console.log(`나이 : ${this.age}`)
        console.log(`자기소개 : ${this.selfintroduce}`)
    }
}

const onyou = new Student("이온유", 30, "반갑습니다");
onyou.introduce();

const zalyrong = new Student("이자룡", 31, "반가워요.");
zalyrong.introduce();