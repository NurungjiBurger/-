const arr = [1, 2, 3, 4, 5, 6];
const newArr = arr.map((data) => data + 1);

// 그냥 newArr 쓰면 console.log 없이 찍을 수 있음
console.log(newArr);

const myarr = [1, 2, 3, 4, 5];
const mynewarr = myarr.map((data) => data * data);

mynewarr;

const charr = ["a", "bcd", "ef", "g"];
const chnewarr = charr.map((data) => data.length);

chnewarr;