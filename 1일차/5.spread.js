// 객체 스프레드

const square = {
    width: 200,
    height: 200
}

// color : red 값을 추가하고 싶다
const colorSquare = {
    ...square, // spread
     color : 'red'
}

// 객체를 참조한 다음, 원하는 값을 추가한 객체가 되는 것인가 ?
// 참조 형태이기 때문에 메모리적으로 이득


// 배열 스프레드

const catTypeAnimals = ['고양이', '호랑이'];
const dogTypeAnimals = ['개', '늑대'];

// 그럼 순서는 spread를 사용한 순서대로 들어가는 것인가 ?
const allTypeAnimals = [...catTypeAnimals, ...dogTypeAnimals, '비버'];