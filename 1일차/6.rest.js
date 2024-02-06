// rest
// 나머지를 가져온다

const chicken = {
    type : "양념",
    drumsticks : 2,
    wing : 2
}

// 다 가져오는 형태
// const {type, drumsticks, wing} = chicken;
// 하나만 가져오고 싶다
const {type, ...another} = chicken;

// another를 찍으면 객체? 의 형태로 가져오는거같은데
// type 찍으면 -> 양념 출력
// another 찍으면 -> {drumsticks: 2, wing: 2} 출력

// 결국 비구조할당을 이용하는데 내가 필요한 것만 쓰고 나머지는 뭐... 가져오든말든 느낌인듯 ?
const numberArray = [0, 1, 2, 3, 4, 5, 6];
const [one, two, ...other] = numberArray;