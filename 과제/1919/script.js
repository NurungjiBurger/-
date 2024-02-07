/* 
  회원가입시, 서버에 데이터가 전송되기 전에 js로 비밀번호의 유효성 검사를 진행하고자 한다.
  아래의 조건을 만족하지 않으면, 에러메시지를 화면에 출력하도록 코드를 완성하시오.
  1. password1이 8자를 넘지 않으면 span#warning1 에 '비밀번호는 8자 이상이어야 합니다.' 라는 에러메시지 출력
  2. password2가 password1과 같지 않으면 '비밀번호가 일치하지 않습니다.' 라는 에러메시지 출력
  3. 문제가 없을시 에러메시지 삭제
*/
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const warning1 = document.querySelector("#warning1");
const warning2 = document.querySelector("#warning2");

password1.addEventListener("input", () => {
  if (password1.value.length < 8) {
    warning1.textContent = "비밀번호는 8자 이상이어야 합니다.";
  } else {
    warning1.textContent = "";
  }
});

password2.addEventListener("input", () => {
  if (password1.value !== password2.value) {
    warning2.textContent = "비밀번호가 일치하지 않습니다.";
  } else {
    warning2.textContent = "";
  }
});