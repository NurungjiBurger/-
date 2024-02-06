const userInfors = [
    {
        id : "jony123",
        name : "이자룡",
        age : 31,
    },
    {
        id : "sylvie123",
        name : "따리에 실비",
        age : 31,
    },
    {
        id : "nana006",
        name : "나나",
        age : 2,
    },
];


userInfors.forEach((userInfor) => {
    console.log(userInfor.name);
});

// call back으로 쓸때는 화살표 국룰
// parsing의 경우 진짜 한번 쓰고 버리는 경우가 많으니 더더욱
const names = userInfors.map((userinfo) => userinfo.name);

console.log(names);

// 원본과 같은 사이즈로 만들고 싶다 ? => map
// 원본과 다른 사이즈로 만들고 싶다 ? => filter
const filteredInfos = userInfos.filter((userinfo) => userinfo.age < 30);

console.log(filteredInfos);

// 타깃을 잡고 하나만 뽑아낼 경우 배열이 아니자나
// 하나만 찝어서 사용하는 편
const nana = userInfors.filter((userinfo) => userinfo.id === "nana006")[0];

console.log(nana);

const infos = [
    {
        name: "김창수",
        age: 30,
        family: ["할머니", "아내", "아들"],
    },
    {
        name: "이민주",
        age: 24,
        family: ["남편"],
    },
    {
        name: "방종식",
        age: 58,
        family: ["아들", "딸", "손자"],
    },
];

const first = infos.filter(el => el.age > 25).map(data => data.name);
const second = infos.filter(el => (el.family.filter(rel => rel === "아들") | el.family.filter(rel => rel === "딸"))).map(data => data.name);
// const child = infos
//   .filter(
//     (info) =>
//       info.family.filter((member) => (member === "아들") | (member === "딸"))
//         .length > 0
//   )
//   .map((info) => info.name);

first;
second;