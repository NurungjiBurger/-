// array.reduce ( (누적값, 현재값) => {}, 초기값 )

// 초기값 생략시 배열의 첫번째 값

// 누적값, 누산기
const datas = [1, 2, 3, 4, 5];
const result = datas.reduce((acc, cur) => {
    console.log(`acc : ${acc} , cur : ${cur}`);
    return acc + cur;
    // 초기값이 acc의 초기값이 됨
}, 0)


// filter 또한 reduce로 구현이 가능

const test = datas.reduce((acc, cur) => {
    // 초기값을 정해줘야 특정 메서드 활용이 가능
    if (cur === 2) {
        acc.push(cur);
    }

    // 누산되어 넘겨줘야하기 때문
    return acc;
}, [])

const arr = ["피카츄", "라이츄", "파이리", "꼬부기", "피카츄", "파이리"];

const results = arr.reduce((acc, cur) => {
    if (acc[cur]) {
        acc[cur] = acc[cur] + 1;
    }
    else acc[cur] = 1;
    return acc;
}, {});

results;


const myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myresult2 = myarr.reduce((acc, cur) => {
    if (cur % 2 === 0) {
        acc.push(cur * 10);
    }
    return acc;
}, []);

// 기본적으로 map을 쓰면 배열 사이즈가 무조건 같아지는거같은데 ?
const mynewarr = myarr.map((data) => data * data);
const filteredBuckets = bucketList.filter(el => el.done === false);

const tmp = myarr.filter(el => (el % 2) === 0);
const myresult = tmp.map(data => data * 10);

const filterresult = myarr.filter(el => el % 2 === 0).map(el => el * 10);

myresult;
myresult2;