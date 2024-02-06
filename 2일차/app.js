let data;

axios
.get("https://jsonplaceholder.typicode.com/todos/")
.then((response) => console.log(response))
.catch((error) => console.error(error));

// 아래 코드 undefinded 뜸
// JS는 늦을 것 같다 싶으면 코드를 건너 뛴다 ?

// axios
// .get("https://jsonplaceholder.typicode.com/todos/")
// .then((response) => {
//     data = response.data;
//     console.log(data);
// })
// .catch((error) => console.error(error));
//
// console.log(data);


// 사용법 1

// axios
// .get("https://jsonplaceholder.typicode.com/todos/")
// .then((response) => {
//     안에다가 구현로직을 만들어
//      console.log(response.data);
// })
// .catch((error) => console.error(error));
//
// console.log(data);

// 사용법 2

// 비동기 함수입니다. 조심하세요. => async
// 이 부분이 비동기 부분입니다. 기다렸다가 실행해 주세요. => await
// 혹시나 생길 에러를 대비해서 try catch 사용

// async function fetchTodos() {
//     try {
//     const response = await axios.get("https://jsonplaceholder.typicode.com/todos/");
//     console.log(response.data);
//     } catch(error)
//     {
//         console.error(error);
//     }
// }

// fetchTodos();