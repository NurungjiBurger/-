// 객체의 비구조화 할당

const abc = {
    name: "치킨",
    type: "후라이드"
}

console.log(abc['name']);
console.log(abc.name);

// const {
//     name : name,
//     type : type
// } = abc;

// name:name , type:type으로 같은 경우 생략 가능 ?
// 단순히 type 을 a 로 부르겠다와 같은거
const {name, type : a} = abc;

// key와 value로 분리 할 수 있다

// 배열의 비구조화 할당

const array = [1, 2];

// 배열은 임의의 변수로 설정가능 왜 ? -> 순서가 정해져있으니까 배열은 ㅇㅇ
const [one, two] = array;

// 결국 이미 선언되어있는 객체나 배열을 그대로 따와서 이름을 재정의 하고 사용하는 것인가 ?
