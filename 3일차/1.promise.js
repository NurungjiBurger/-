// promise 형식으로 콜백을 변경 가능
// 직접 변경하는 것보다 promise로 되어있는 함수를 갖다 쓰는게 좋다

// 1. pending 단계 => wait 대기 단계
// resolve => pending 상태에서 resolve 실행시 fulfuilled 상태가 됨 => 요청 성공
// reject => pending 상태에서 reject 실행시 rejected 상태가 됨 => 요청 실패



new Promise((resolve, reject) => {
    // 요청 성공시 resolve 호출
    // 버그 발생시 reject 호출 ?


})

// 순서가 promise 안에서만 동작한다 ?
const test = new Promise((resolve, reject) => {
    resolve(3);
})

// promise도 일단 비동기 요청임
// 순서 잡는 법
// resolve인 경우 then으로 가져오고
// reject인 경우 catch로 가져온다.

// test.then(el => console.log(el));
// reject(3)으로 바꾸고
// test.then(el => console.log(el)) 쓰면 출력 X
// test.then(el => console.log(el)).catch(el => console.log(el)); ?? 왜 따로 안써

// setTimeout <- promise화
function promiseSetTimeout(time) {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(1)
        }, time)
    })
}


// promise형식은 .then .catch 붙이는게 가능
// 호출에 성공하고나서 1초 후에 then으로 number 접근이 가능
promiseSetTimeout(1000).then(number => {
    console.log(number);
}).catch(error => {
    console.log(error);
})

// promise는 then을 여러개 붙일 수 있다
// promise chaining
// then 호출시 리턴값은 또 promise이기 때문에 가능한 형태
promiseSetTimeout(1000).then(li => {
    return number + 1
}).then(number => {
    console.log(number);
})
