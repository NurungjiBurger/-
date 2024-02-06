console.log("hi");

// 비동기 함수를 중첩함으로써 순서를 보장해줄 수 있다
// 하지만 ? depth가 깊어질수록 코드의 가독성이 너무 구려진다
// a.k.a -> callback hell

setTimeout(() => {
    console.log(1);
    setTimeout(() => {
        console.log(2);
        setTimeout(() => {
           console.log(3); 
        }, );
    }, 1000);
}, 500);

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filter = arr1.filter(data => data % 2 === 0).map(data => data * 10);

filter;