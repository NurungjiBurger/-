// find
// 특정 요소를 찾아준다.
const inventory = [
    {name: "A", count: 1},
    {name: "B", count: 2},
    {name: "C", count: 3}
];

// find 특정 조건을 만족하는 첫번째 값을 가져옴
inventory.find(el => el.name === "A");

// findIndex 특정 조건을 만족하는 첫번째 인덱스

const chicken = [
    {name: "머리", quantity: 1},
    {name: "날개", quantity: 2},
    {name: "닭다리", quantity: 2},
    {name: "닭가슴살", quantity: 1},
    {name: "닭발", quantity: 2}
];

// console.log 없어도 찍히긴 함
console.log(chicken.findIndex(el => el.name === "닭다리"));