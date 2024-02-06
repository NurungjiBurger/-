// Array.forEach
// [1, 2, 3].forEach(콜백함수)
// 원소의 개수만큼 콜백함수가 실행된다.
// function aa () {}

// break, return 동작하지 않음
[3, 5, 4, 2].forEach((value) => {
  console.log(value);
  console.log("");
  return;
});


let pplus = [];
let mminus = [];

[-5,3,4,2,-7,-2,7].forEach((value) => {
    if (value < 0) mminus.push(value);
    else pplus.push(value);
});

console.log(pplus);
console.log(mminus);

// some, every
// some <- 한가지만 만족해도 true 리턴
// every <- 모두 만족해야 true 리턴
const array = [-1, 2, 3, 4, 5];
array.every(el => el > 0);
array.some(el => el > 0);